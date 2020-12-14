import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './component/Searchbar';
import ImageGalleryInfo from './component/ImageGalleryInfo';
// import Button from './component/Button';
// import pixabayAPI from './service/pixabay-api';
import './App.css';

export default class App extends Component {
  state = {
    imageName: '',
    page: 1,
    error: null,
  };

  // componentDidMount() {
  //   this.searchMoreImages();
  // }

  handleSearchForm = imageName => {
    this.setState({ imageName });
  };

  render() {
    const { imageName } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSearchForm} />
        <ImageGalleryInfo imageName={imageName} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
