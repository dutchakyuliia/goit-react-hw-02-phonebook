import React, { Component } from 'react';

export class ListItem extends Component {
  render() {
    return (
      <li>{this.props.contact.name}  {this.props.contact.number }</li>
       
    );
  }
}