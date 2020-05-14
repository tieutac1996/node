import React, { Component } from "react";
import { connect } from "react-redux";
import {toggleShow,toggleMemorized} from "../redux/actionCreators";

class Word extends Component {

  render() {
    const { en, vn, memorized , isShow , id} = this.props.myWord;
    const textDecoration = memorized ? "line-through" : "none";
    const showText = isShow ? vn : '------';
    return (
      <div>
        <div className="word-main">
          <div className="word-top">
            <div className="list-items">
              <button onClick={() => this.props.toggleMemorized(id)}>
                <i className="fab fa-accusoft"></i>
              </button>
              <button onClick={() => this.props.toggleShow(id)}>
                <i className="fas fa-adjust"></i>
              </button>
            </div>
            <div>
              <h3 style={{ textDecoration }}>{en}</h3>
              <h3>{showText}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null,{toggleShow,toggleMemorized})(Word);
