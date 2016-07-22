import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
      console.log(this.props);
    return (
      <div>
        <h1>
          <Link to="/">JsJitsu - Javascript Skills</Link>
        </h1>
        {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
      </div>
    )
  }
});

export default Main;
