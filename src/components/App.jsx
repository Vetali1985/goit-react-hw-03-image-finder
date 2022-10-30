import { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery/ImageGallery';
import API from '../service/imageAPI';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { SearchBar } from './SearchBar/SearchBar';
import { Wrapper } from './App.styled';

class App extends Component {
  state = {
    inputValue: '',
    page: 1,
    status: 'idle',
    images: [],
    error: null,
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { inputValue, page } = this.state;
    if (prevState.inputValue !== inputValue || prevState.page !== page) {
      this.setState({ status: 'pending' });

      API(inputValue, page)
        .then(resp => {
          const images = resp.hits;
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
            status: 'resolved',
          }));
        })
        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
  };

  handleFormSubmit = inputValue => {
    this.setState({ inputValue: inputValue, images: [], page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, status } = this.state;
    return (
      <Wrapper>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {images && <ImageGallery data={images} />}
        {status === 'pending' && <Loader />}
        {images.length >= 12 && status === 'resolved' && (
          <Button onClick={this.loadMore} />
        )}

        <ToastContainer />
      </Wrapper>
    );
  }
}
export default App;
