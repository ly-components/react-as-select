import React from 'react';
import ClassNames from 'classnames';

class Option extends React.Component {
  constructor() {
    super();
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleClick = this._handleClick.bind(this);
  }
  _handleMouseEnter() {
    if (this.props.disabled) return;
    this.props.onActive(this);
  }
  _handleClick() {
    if (this.props.disabled) return;
    this.props.onSelect(this);
  }
  render() {
    React.Children.toArray(this.props.children);
    const props = this.props;
    const className = ClassNames({selected: props.selected, active: props.active, disabled: props.disabled, 'select-option': 1});
    return (
      <li className={className} onClick={this._handleClick} onMouseEnter={this._handleMouseEnter}>
        {props.children}
      </li>
    );
  }
}
Option.displayName = 'Option';
Option.propTypes = {
  active: React.PropTypes.bool,
  children: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool,
  onActive: React.PropTypes.func,
  onSelect: React.PropTypes.func,
  selected: React.PropTypes.bool,
  value: React.PropTypes.string.isRequired
};
Option.defaultProps = {
  active: false,
  selected: false,
  disabled: false,
  onSelect: () => {},
  onActive: () => {}
};
module.exports = Option;
