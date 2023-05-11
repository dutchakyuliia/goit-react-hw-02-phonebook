import React, { Component } from 'react';

export class ListItem extends Component {
  render() {
    return (
      <li>{this.props.contact.name}  {this.props.contact.number}
        <button onClick={() => {
          this.props.onDelete(this.props.contact.id)
        }} >Delete</button></li>
       
    );
  }
}