import { Component } from "react";

class NetworkErrorBoundary extends Component {
  constructor(props) {
    super(props);
    
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    // console.log(error, errorInfo);

    // TODO add a componentWillUnmount
    window.addEventListener('online', () => {
      console.log('online');
      this.setState({
        hasError: false,
      })
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Network error.</h1>;
    }

    return typeof this.props.children === 'function' ? this.props.children() : this.props.children; 
  }
}

export default NetworkErrorBoundary;