import React, { Component } from 'react';
import ImageGallery from '../ImageGallery';
import pixabayAPI from '../../service/pixabay-api';
// import { toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGalleryInfo extends Component {
  state = {
    images: null,
    status: Status.IDLE,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      pixabayAPI
        .fetchImage(nextName)
        .then(images => this.setState({ images, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  render() {
    const { images, error, status } = this.state;

    if (status === Status.IDLE) {
      return <div>Please, enter the value!</div>;
    }

    if (status === Status.PENDING) {
      return <div>Loading...</div>;
    }

    if (status === Status.REJECTED) {
      return <h1>{error.message}</h1>;
    }

    if (status === Status.RESOLVED) {
      return (
        <div>
          <ImageGallery images={images.hits} />
        </div>
      );
    }
  }
}
