import React, { Component } from 'react';
import { ListItem } from './ListContactsItem';

export class ListContacts extends Component {
  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <ul>
          {this.props.contacts.map(contact => (
            <ListItem contact={contact} key={contact.id }/>
          ))}
        </ul>
      </div>
    );
  }
}
