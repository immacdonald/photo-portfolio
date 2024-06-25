import React, { useEffect, useState } from 'react';
import PhotoAlbum from 'react-photo-album';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import './Gallery.module.scss';
import { useWindowSize } from 'phantom-library';

interface Photo {
    file: string;
    title: string;
}

interface LoadedPhoto {
    src: string;
    width: number;
    height: number;
    description: string;
}

interface GalleryProps {
    photos: Photo[];
    path: string;
    description?: string;
    exactLayout?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ photos, description = '', exactLayout = false }) => {
    const [index, setIndex] = useState<number>(-1);
    const [loadedPhotos, setPhotos] = useState<LoadedPhoto[]>([]);

    const loadImageDimensions = (photo: Photo): Promise<LoadedPhoto> => {
        return new Promise((resolve) => {
            const image = new Image();
            image.src = photo.file;

            image.onload = () => {
                resolve({
                    src: image.src,
                    width: image.width,
                    height: image.height,
                    description: photo.title
                });
            };

            image.onerror = () => {
                resolve({
                    src: image.src,
                    width: 0,
                    height: 0,
                    description: photo.title
                });
            };
        });
    };

    const loadImages = async () => {
        const imagePromises = photos.map(async (photo) => {
            const { src, width, height } = await loadImageDimensions(photo);
            const photoDescription = description ? `${photo.title} \n ${description}` : photo.title;
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

    const { width } = useWindowSize();

    const photosPerRow = (): number => {
        if (width <= 480) {
            return 1;
        }
        if (width <= 960) {
            return 3;
        }
        return 6;
    };

    const targetRowHeight = 1;
    const layoutVariance = exactLayout ? 0 : 1;

    return (
        <div>
            <PhotoAlbum
                photos={loadedPhotos}
                layout="rows"
                rowConstraints={{ minPhotos: photosPerRow() - layoutVariance, maxPhotos: photosPerRow() + layoutVariance }}
                targetRowHeight={targetRowHeight}
                onClick={({ index: clickedIndex }) => setIndex(clickedIndex)}
            />
            <Lightbox
                slides={loadedPhotos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
                captions={{ showToggle: false, descriptionTextAlign: 'center', descriptionMaxLines: 2 }}
            />
        </div>
    );
};

export { Gallery };
