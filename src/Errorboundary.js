import React, { Component } from "react";

export class Errorboundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error, errorinfo) {
    console.log(error);
    console.log(errorinfo);
  }
  render() {
    if (this.state.hasError === true) {
      return <h3>something went wrong as not like hero</h3>;
    } else {
      return this.props.children;
    }
  }
}

export default Errorboundary;
