import React, { Component } from 'react';
import { CreateContacts } from './CreateContacts/CreateContacts';
import { ListContacts } from './ListContacts/ListContacts';

export class App extends Component {
  state = {
    contacts: [],
  };
  saveContact = contact => {
    this.setState({
      contacts: [contact].concat(this.state.contacts)
    });
  };

  render() {
    console.log(this.state.contacts)
    return (
      <div>
        <CreateContacts saveContact={this.saveContact}></CreateContacts>
        <ListContacts contacts={this.state.contacts}></ListContacts>
      </div>
    );
  }
}
