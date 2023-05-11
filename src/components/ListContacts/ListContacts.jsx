import React, { Component } from 'react';
import { ListItem } from './ListContactsItem';

export class ListContacts extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.contacts.map(contact => (
            <ListItem onDelete={this.props.onDelete} contact={contact} key={contact.id }/>
          ))}
        </ul>
      </div>
    );
  }
}
