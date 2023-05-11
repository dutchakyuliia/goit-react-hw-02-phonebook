import React, { Component } from 'react';
import { nanoid } from 'nanoid';
export class CreateContacts extends Component {
  state = {
    name: '',
    number: ''
  };
  handleChange = evt => {
    this.setState({ name: evt.target.value});
  };
  handleNumber = evt => {
 this.setState({ number: evt.target.value});
  };
  
  handleSubmit = (e) => {
    this.props.saveContact({name: this.state.name, number:this.state.number, id: nanoid() }) 
    e.preventDefault()
  }
  
  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form  onSubmit={this.handleSubmit}>
          <h3>Name</h3>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <h3>Number</h3>
          <input
            onChange={this.handleNumber}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          <button type="submit">Add contacts</button>
        </form>
      </div>
    );
  }
}
