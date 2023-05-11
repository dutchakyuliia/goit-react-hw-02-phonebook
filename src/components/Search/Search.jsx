import React, { Component } from 'react';

export class Search extends Component {
 
    render() {
        return <input type="text" value={this.props.filter} onChange={this.props.handleSearch } />;
  }
}
