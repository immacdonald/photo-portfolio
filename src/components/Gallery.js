import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions"
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { useState, useEffect } from "react";
import "./Gallery.module.scss";

const Gallery = (props) => {
    const { photos, path, description = "" } = props;

    const [index, setIndex] = useState(-1);
    const [loadedPhotos, setPhotos] = useState([]);

    const loadImages = async () => {
        const imagePromises = photos.map(async (photo) => {
          const imageModule = await import(`../static/images/${path}/${photo.file}.jpg`);
          return imageModule.default;
        });
      
        const images = await Promise.all(imagePromises);
        const good = images.map((image, i) => {
            const photoDescription = description ? `${photos[i].title} \n ${description}` : photos[i].title;
            return {
                src: image,
                width: 1000,
                height: 1000,
                description: photoDescription
            }
        })
        setPhotos(good);
      };

      useEffect(() => {
        loadImages();
      }, []);

    return (
        <div>
            <PhotoAlbum photos={loadedPhotos} layout="columns" columns={6} onClick={({ index }) => setIndex(index)} />
            <Lightbox
                slides={loadedPhotos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
                captions={{ showToggle: false, descriptionTextAlign: "center", descriptionMaxLines: 2 }}
            />
        </div>
    );
    
}

export default Gallery;