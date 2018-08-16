import React from 'react';

/**
 * Usually, all the components in the route are loaded regardless of
 * wich route is matched. This function help us to only load the component
 * that responds to the matched route.
 * @param {*} importComponent
 */
export default function asyncComponent(importComponent) {
  class AsyncComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    // Call the imported component and save it in the state
    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component,
      });
    }

    // Render the component if it has completed loading
    render() {
      // The loaded component
      const C = this.state.component;
      // We can add a spinner here
      // const Loading = () => (
      //   <div style={{ color: '#db7093' }}>Component not loaded yet...</div>
      // );

      return C ? <C className="async__loaded" {...this.props} /> : null;
    }
  }

  return AsyncComponent;
}
