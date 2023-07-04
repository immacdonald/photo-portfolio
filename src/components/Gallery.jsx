import React, { useState, useEffect } from 'react';

import PhotoAlbum from 'react-photo-album';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/captions.css';

import './Gallery.module.scss';
import useWindowSize from '../hooks/useWindowSize';

function Gallery(props) {
    const {
        photos, path, description = '', exactLayout = false,
    } = props;

    const [index, setIndex] = useState(-1);
    const [loadedPhotos, setPhotos] = useState([]);

    // Loading the photos async to be used by photo-album and lightbox
    const loadImages = async () => {
        const imagePromises = photos.map(async (photo, i) => {
            const imageModule = await import(`../static/images/${path}/${photo.file}.jpg`);
            const image = new Image(); // Create a new image object
            image.src = imageModule.default; // Set the source of the image
            await image.decode(); // Wait for the image to load
            const photoDescription = description ? `${photos[i].title} \n ${description}` : photos[i].title;
            return {
                src: image.src,
                width: image.width,
                height: image.height,
                description: photoDescription,
            };
        });
        const images = await Promise.all(imagePromises);
        setPhotos(images);
    };

    useEffect(() => {
        loadImages();
    }, []);

    // Gallery sizing with screen-size breakpoints based on a 6 column default
    const [width, height] = useWindowSize();

    const photosPerRow = () => {
        if (width <= 480) {
            // Phone
            return 1;
        }
        if (width <= 960) {
            // Tablet / small laptop
            return 3;
        }
        // Computer
        return 6;
    };

    // Fixes an issue with the PhotoAlbum not rendering when the row height is below the default 150px
    const targetRowHeight = 1;
    // Exact min/max requirements can causing the album to fail to render for irregular photo sizes
    const layoutVariance = exactLayout ? 0 : 1;

    return (
        <div>
            <PhotoAlbum
                photos={loadedPhotos}
                layout="rows"
                rowConstraints={{ minPhotos: photosPerRow() - layoutVariance, maxPhotos: photosPerRow() + layoutVariance }}
                targetRowHeight={targetRowHeight}
                onClick={({ index }) => setIndex(index)}
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
}

export default Gallery;
