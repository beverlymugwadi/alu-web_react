import React from 'react';

function WithLogging(WrappedComponent) {
  class Wrapper extends React.Component {
    componentDidMount() {
      console.log(`Component ${this.props.displayName || WrappedComponent.displayName || WrappedComponent.name || 'Component'} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.props.displayName || WrappedComponent.displayName || WrappedComponent.name || 'Component'} is going to unmount`);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const componentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  Wrapper.displayName = `WithLogging(${componentName})`;

  return Wrapper;
}

export default WithLogging;
