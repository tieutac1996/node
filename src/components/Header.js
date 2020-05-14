import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleAddWord } from "../redux/actionCreators";
class Header extends Component {
  render() {
    return (
      <div id="header-input">
        <h2>Add Word</h2>
        <button onClick={() => this.props.toggleAddWord()}>
          <span>+</span>
        </button>
      </div>
    );
  }
}

export default connect(null, { toggleAddWord })(Header);
