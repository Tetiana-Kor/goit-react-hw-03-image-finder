import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './component/Searchbar';
import ImageGalleryInfo from './component/ImageGalleryInfo';
import Button from './component/Button';
// import pixabayAPI from './service/pixabay-api';
import './App.css';

export default class App extends Component {
  state = {
    imageName: '',
    page: 1,
    loaderStatus: false,
  };

  handleSearchForm = imageName => {
    this.setState({ imageName });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { imageName, page } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchForm} />
        <ImageGalleryInfo imageName={imageName} />
        <Button onClick={this.onLoadMore} page={page} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
