import React from 'react';
import { NavLink } from 'react-router-dom'

class MLink extends React.Component {
	render() {
    return <NavLink {...this.props} activeClassName="active" />
  }
};

export default MLink;