import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    // You can also log the error or send it to an error tracking service
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>Please try again later or contact support.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
