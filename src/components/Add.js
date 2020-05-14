import React, { Component } from "react";
import { connect } from "react-redux";
import {addWord,toggleAddWord} from "../redux/actionCreators";

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: "",
      vn: "",
    };
  }
  
  onChange(e) {
    const value = e.target.value;
    this.setState({
      ...this.state,
      [e.target.name]: value,
    });
  }
  addWord() {
    const {en ,vn } = this.state;
    this.props.addWord(en,vn);
    this.props.toggleAddWord();
  }
  render() {
    return (
      <div id="add-input">
        <input placeholder="Enter your en" onChange={this.onChange.bind(this)} name="en" value={this.state.en} />
        <input placeholder="Enter your vn" onChange={this.onChange.bind(this)} name="vn" value={this.state.vn} />
        <button onClick={this.addWord.bind(this)} value="Add">
          Add
        </button>
      </div>
    );
  }
}

export default connect(null,{addWord,toggleAddWord})(Add);
