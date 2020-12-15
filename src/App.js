import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './component/Searchbar';
import ImageGalleryInfo from './component/ImageGalleryInfo';
import './App.css';

export default class App extends Component {
  state = {
    imageName: '',
    page: 1,
  };

  handleSearchForm = imageName => {
    this.setState({ imageName });
  };

  render() {
    const { imageName, page } = this.state;

    return (
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 20 }}>
        <Searchbar onSubmit={this.handleSearchForm} />
        <ImageGalleryInfo imageName={imageName} currentPage={page} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
