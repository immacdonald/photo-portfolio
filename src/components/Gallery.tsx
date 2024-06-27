import type { LoadedImage, ResponsiveType } from 'phantom-library';
import React, { useEffect, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Column, loadImageDimensions, range, Row, sumArray, useResponsiveContext } from 'phantom-library';
import style from './Gallery.module.scss';

interface Photo {
    file: string;
    title: string;
}

interface BaseGalleryLayout {
    exact: boolean;
}

interface SimpleLayout extends BaseGalleryLayout {
    exact: boolean;
    rows?: number;
    columns?: number;
}

interface ExactRow {
    photos: number;
    width?: string;
}

interface ExactLayout extends BaseGalleryLayout {
    rows: ExactRow[];
}

interface GalleryProps {
    photos: Photo[];
    layout: ResponsiveType<GalleryLayout>;
    description?: string;
}

type GalleryLayout = SimpleLayout | ExactLayout;

const Gallery: React.FC<GalleryProps> = ({ photos, layout, description = '' }) => {
    const [index, setIndex] = useState<number>(-1);
    const [loadedPhotos, setPhotos] = useState<LoadedImage[]>([]);

    const loadImages = async () => {
        const imagePromises = photos.map(async (photo) => {
            const { src, width, height } = await loadImageDimensions(photo.file);
            const photoDescription = description ? `${photo.title}\n ${description}` : photo.title;
            return {
                src,
                width,
                height,
                description: photoDescription
            };
        });

        const images = await Promise.all(imagePromises);
        setPhotos(images);
    };

    useEffect(() => {
        loadImages();
    }, []);

    const { parse } = useResponsiveContext();
    const galleryLayout = parse<GalleryLayout>(layout)!;
    const space = 8;

    const getGallery = () => {
        if (galleryLayout.exact) {
            const gallery: ExactLayout = galleryLayout as ExactLayout;
            return (
                <Column className={style.gallery} gap={`${space}px`}>
                    {gallery.rows.map((row: ExactRow, index: number) => {
                        const start = index > 0 ? sumArray(gallery.rows, 'photos', 0, index) : 0;
                        const rowWidth = sumArray(loadedPhotos, 'width', start, start + row.photos);
                        return (
                            <Row gap={`${space}px`} key={index} cssProperties={{ width: row.width }}>
                                {range(row.photos).map((column: number) => {
                                    const photoIndex = start + column;
                                    const photo = loadedPhotos[photoIndex];
                                    const width = `calc((100% - ${(row.photos - 1) * space}px) / ${1 / (photo.width / rowWidth)})`;
                                    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
                                    return (
                                        <img
                                            src={photo.src}
                                            key={photoIndex}
                                            style={{ width, aspectRatio: `${photo.width}/${photo.height}` }}
                                            onClick={() => setIndex(photoIndex)}
                                            alt={`Gallery #${photoIndex}`}
                                        />
                                    );
                                    /* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
                                })}
                            </Row>
                        );
                    })}
                </Column>
            );
        } else {
            const gallery: SimpleLayout = galleryLayout as SimpleLayout;
            const rows = gallery.rows ?? Math.ceil(loadedPhotos.length / gallery.columns!);
            const columns = gallery.columns ?? Math.ceil(loadedPhotos.length / rows!);

            const photoRows = Array.from({ length: rows }, (_, rowIndex) => loadedPhotos.slice(rowIndex * columns, (rowIndex + 1) * columns));

            return (
                <Column className={style.gallery} gap={`${space}px`}>
                    {photoRows.map((photoRow, rowIndex: number) => {
                        const start = rowIndex > 0 ? sumArray(photoRows, 'length', 0, rowIndex) : 0;
                        const rowWidth = sumArray(loadedPhotos, 'width', start, start + photoRow.length);
                        return (
                            <Row gap={`${space}px`} key={rowIndex}>
                                {photoRow.map((photo, column: number) => {
                                    const photoIndex = start + column;
                                    const width = `calc((100% - ${(photoRow.length - 1) * space}px) / ${1 / (photo.width / rowWidth)})`;
                                    /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
                                    return (
                                        <img
                                            src={photo.src}
                                            key={photoIndex}
                                            style={{ width, aspectRatio: `${photo.width}/${photo.height}` }}
                                            onClick={() => setIndex(photoIndex)}
                                            alt={`Gallery #${photoIndex}`}
                                        />
                                    );
                                    /* eslint-enable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
                                })}
                            </Row>
                        );
                    })}
                </Column>
            );
        }
    };

    return (
        loadedPhotos.length > 0 && (
            <div>
                {getGallery()}
                <Lightbox
                    slides={loadedPhotos}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
                    captions={{ showToggle: false, descriptionTextAlign: 'center', descriptionMaxLines: 2 }}
                />
            </div>
        )
    );
};

export { Gallery };
