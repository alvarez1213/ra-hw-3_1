import { Component } from "react";

import { Star } from "../Star";

import "./stars.css";

export class Stars extends Component {
  constructor(props) {
    super(props);

    this.count = this.props.count;
  }

  render() {
    if (this.count < 1 || this.count > 5) return

    const stars = [];
    for (let i = 0; i < this.count; i++) {
      stars.push(
        <li><Star key={i} /></li>
      );
    }

    return (
      <ul className="card-body-stars">
        {stars}
      </ul>
    );
  }
}
