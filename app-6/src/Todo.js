import React, {Component} from 'react';

export default class ToDo extends Component {
    constructor(props){
        super(props)
    }
    render() {
    return <p>{this.props.task}</p>;
  }
}
