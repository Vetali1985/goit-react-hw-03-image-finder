

import PropTypes from 'prop-types';
import { Form,Label,Span,Button } from './PhoneBookForm.styled';
const { Component } = require("react");
 export class PhoneBookForm extends Component {
    state = {
        name: '',
        number: '',
        
    }

    handleInputChange = e => {
    this.setState({
    [e.currentTarget.name]:e.currentTarget.value
  })
    }
    hadleSubmit = e => {
    e.preventDefault()
        
        this.props.ContactAdd(this.state.name, this.state.number);

        this.reset();
    }
    reset = () => {
        this.setState({name: '',
        number: ''})
    }
   

    render() {
            return (
        <Form onSubmit={this.hadleSubmit}>
          <Label >
           <Span> Name</Span>
        <input
  type="text"
        name="name"
        
        value={this.state.name}
        onChange={this.handleInputChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  
            />
          </Label>
          <br />
          <Label >
            <Span>Number</Span>
        <input
  type="tel"
        name="number"
        value={this.state.number}
        onChange={this.handleInputChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
                /></Label>
            <Button type="submit">Add contact</Button>
        </Form>
    )

    }
}
PhoneBookForm.propTypes = {
  ContactAdd: PropTypes.func.isRequired,
};