import { Component } from 'react';
import { toast } from 'react-toastify';
import {
  Searchbar,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from './SearchBar.styled';
import { MdKeyboardAlt } from 'react-icons/md';

export class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.inputValue.trim() === '') {
      toast.error(`No name - no images. Please, input your request!`);
      return;
    }

    this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <MdKeyboardAlt size={40} />
            <SearchFormBtnLabel>Search</SearchFormBtnLabel>
          </SearchFormBtn>
          <SearchFormInput
            value={this.state.inputValue}
            onChange={this.handleChange}
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Searchbar>
    );
  }
}
