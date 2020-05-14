import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterShowAll,
  filterShowMemorized,
  filterShowNeedPractice,
} from "../redux/actionCreators";
class Filter extends Component {
  getColor(statusName) {
    if (statusName === this.props.filter) {
      return { backgroundColor: "yellow" };
    }
  }
  render() {
    return (
      <div id="button-bottom">
        <button
          onClick={() => {
            this.props.filterShowAll();
          }}
          style={this.getColor("SHOW_ALL")}
        >
          SHOW ALL
        </button>
        <button
          onClick={() => {
            this.props.filterShowMemorized();
          }}
          style={this.getColor("MEMORIZED")}
        >
          MEMORIZED
        </button>
        <button
          onClick={() => {
            this.props.filterShowNeedPractice();
          }}
          style={this.getColor("NEED_PRACTICE")}
        >
          NEED PRACTICE
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { filter: state.filterStatus };
}

export default connect(mapStateToProps, {
  filterShowAll,
  filterShowMemorized,
  filterShowNeedPractice,
})(Filter);
