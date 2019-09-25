import React, { Component } from "react";
import axios from "axios";

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import { getAuthor } from "./redux/actions";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

class AuthorDetail extends Component {
  componentDidMount() {
    this.props.getAuthor(this.props.match.params.authorID);
    this.props.setLoadingTrue();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.authorID !== this.props.match.params.authorID) {
      this.props.getAuthor(this.props.match.params.authorID);
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading />;
    } else {
      const author = this.props.author;

      const authorName = `${author.first_name} ${author.last_name}`;
      return (
        <div className="author">
          <div>
            <h3>{authorName}</h3>
            <img
              src={author.imageUrl}
              className="img-thumbnail img-fluid"
              alt={authorName}
            />
          </div>
          <BookTable books={author.books} />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    author: state.authorsState.author,
    loading: state.authorsState.loading2
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAuthor: id => dispatch(getAuthor(id)),
    setLoadingTrue: () =>
      dispatch({
        type: "SET_LOADING_TRUE"
      })
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AuthorDetail)
);
