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
    const { photos, path, additionalDescription } = props;
    const [index, setIndex] = useState(-1);
    const [loadedPhotos, setPhotos] = useState([]);

    const photoDetails = [
        { "title": "Car Frame", "path": "untitled_01" },
        { "title": "Reverse 01", "path": "untitled_02" },
        { "title": "Untitled", "path": "untitled_03" },
        { "title": "Tire", "path": "untitled_04" },
        { "title": "Electric", "path": "untitled_05" },
        { "title": "Me", "path": "untitled_06" },
        { "title": "Reverse 02", "path": "untitled_07" },
        { "title": "Ribs", "path": "untitled_08" },
        { "title": "Shopping Carts", "path": "untitled_09" },
        { "title": "Reverse 03", "path": "untitled_10" },
        { "title": "Kentucky", "path": "untitled_11" },
        { "title": "Station", "path": "untitled_12" },
        { "title": "Current", "path": "untitled_13" },
        { "title": "Shake", "path": "untitled_14" },
        { "title": "Grip", "path": "untitled_15" },
        { "title": "Untitled", "path": "untitled_16" },
        { "title": "Reverse 04", "path": "untitled_17" },
        { "title": "Untitled", "path": "untitled_18" },
        { "title": "Grind", "path": "untitled_19" },
        { "title": "Knees", "path": "untitled_20" },
        { "title": "Reverse 05", "path": "untitled_21" },
        { "title": "Release", "path": "untitled_22" },
        { "title": "Projected", "path": "untitled_23" },
        { "title": "Reverse 06", "path": "untitled_24" },
        { "title": "Silhouette", "path": "untitled_25" },
        { "title": "Reverse 07", "path": "untitled_26" },
        { "title": "Light Tunnel", "path": "untitled_27" },
        { "title": "Reverse 08", "path": "untitled_28" },
        { "title": "Reflection", "path": "untitled_29" },
        { "title": "Wrung", "path": "untitled_30" }
    ];

    const loadImages = async () => {
        const imagePromises = photoDetails.map(async (identifier) => {
          const imageModule = await import(`../static/images/works/orion/${identifier.path}.jpg`);
          return imageModule.default;
        });
      
        const images = await Promise.all(imagePromises);
        const good = images.map((image, i) => {
            return {
                src: image,
                width: 1000,
                height: 1000,
                description: photoDetails[i].title
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