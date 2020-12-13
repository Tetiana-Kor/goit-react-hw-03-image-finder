import React, { Component } from 'react';
import Modal from '../Modal';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { src, alt, largeImageURL } = this.props;
    const { showModal } = this.state;

    return (
      <li className={s.ImageGalleryItem}>
        <img
          src={src}
          alt={alt}
          className={s.ImageGalleryItemImage}
          onClick={this.toggleModal}
        />

        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageURL} alt={alt} />
        )}
      </li>
    );
  }
}
