import React, { Component } from 'react';
import ImageGallery from '../ImageGallery';
import pixabayAPI from '../../service/pixabay-api';
import Button from '../Button';
// import { toast } from 'react-toastify';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGalleryInfo extends Component {
  state = {
    images: [],
    status: Status.IDLE,
    error: null,
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.currentPage;
    const nextPage = this.state.currentPage;

    if (prevName !== nextName || prevPage !== nextPage) {
      this.searchMoreImages(nextName, nextPage);
    }
  }

  searchMoreImages(nextName, nextPage) {
    this.setState({ status: Status.PENDING });

    pixabayAPI
      .fetchImage(nextName, nextPage)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          status: Status.RESOLVED,
        })),
      )
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

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
          <Button onLoadMore={this.onLoadMore} />
        </div>
      );
    }
  }
}
