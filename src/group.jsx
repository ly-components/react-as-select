import React from 'react';

class Group extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li className="select-group">
        <div className="select-group-title">{this.props.title}</div>
        <ul className="select-group-list" {...this.props}></ul>
      </li>
    )
  }
}
Group.displayName = 'Group';
Group.propTypes = {
  title: React.PropTypes.string.isRequired
};
Group.defaultProps = {
  title: ''
};
module.exports = Group;
