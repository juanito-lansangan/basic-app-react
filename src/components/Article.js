import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Article extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className={"col-md-4"}>
        <h1>{title}</h1>
        <p>Professionally redefine highly efficient "outside the box" thinking through cross-platform communities. Proactively recaptiualize alternative intellectual capital after customized imperatives. Credibly generate compelling services vis-a-vis holistic.</p>
        <NavLink className={"btn btn-default"} to="#">Read More</NavLink>
      </div>
    );
  }
}

export default Article;
