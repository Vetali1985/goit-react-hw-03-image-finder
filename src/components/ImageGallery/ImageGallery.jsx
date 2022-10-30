import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryUL } from './ImageGallery.styled';
export function ImageGallery({ data }) {
  return (
    <ImageGalleryUL>
      {data.map(item => (
        <ImageGalleryItem
          key={item.id}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          tags={item.tags}
        />
      ))}
    </ImageGalleryUL>
  );
}

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
