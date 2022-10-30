import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    return (
      <>
        <Item onClick={this.toggleModal}>
          <Image src={webformatURL} alt={tags} />
        </Item>
        {this.state.showModal && (
          <Modal
            largeImageURL={largeImageURL}
            alt={tags}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
