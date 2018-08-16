import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserLinks extends Component {
  getLinkElements() {
    const { userLinks } = this.props.config;
    const { labeled } = this.props;
    return userLinks.map(link => (
      <button key={link.label} href={link.url}>
        {labeled ? link.label : ''}
      </button>
    ));
  }

  render() {
    const { userLinks } = this.props.config;
    if (!userLinks) {
      return null;
    }
    return <div className="user-links">{this.getLinkElements()}</div>;
  }
}

UserLinks.propTypes = {
  config: PropTypes.any,
  labeled: PropTypes.string,
};

export default UserLinks;
