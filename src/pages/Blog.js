import React, { Component } from 'react';
import Article from '../components/Article';

class Blog extends Component {
  render() {
    const { params } = this.props.match;
    const { blog } = params;
    const search = this.props.location.search;
    const urlParams = new URLSearchParams(search);

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
    ].map((title, i) => <Article key={i} title={title} />);

    return (
      <div>
        <div className={"row"}>
          <h1>Blog {blog}</h1>
          <p>{urlParams.get('date')}</p>
          <p>{urlParams.get('filter')}</p>
        </div>
        <div className={"row"}>
          {Articles}
        </div>
      </div>
    );
  }
}

export default Blog;
