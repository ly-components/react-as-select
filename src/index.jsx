import './index.less';
import React from 'react';
import ReactDOM from 'react-dom';
import Option from './option.jsx';
import Group from './group.jsx';
import List from './list.jsx';
import ClassNames from 'classnames';

class Select extends React.Component {
  constructor(props) {
    super();
    const value = props.value || props.defaultValue || '';
    this._handleSelect = this._handleSelect.bind(this);
    this._getCurrentText = this._getCurrentText.bind(this);
    this._handleDocClick = this._handleDocClick.bind(this);
    this._handleClick = this._handleClick.bind(this);
    this.state = {
      open: false,
      value,
      text: this._getCurrentText(props.children, value) || props.placeholder
    };
  }
  componentWillMount() {
    window.addEventListener('click', this._handleDocClick, false);
  }
  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps && nextProps.value) {
      const newValue = nextProps.value;
      const text = this._getCurrentText(nextProps.children, newValue) || nextProps.placeholder || this.props.placeholder;
      this.setState({text: text, value: newValue})
    }
  }
  componentWillUnmount() {
    window.removeEventListener('click', this._handleDocClick);
  }
  _getCurrentText(children, value) {
    if (value === undefined) {
      return null;
    }
    let text = null;
    React.Children.forEach(children, child => {
      if (child.type === Group) {
        const maybe = this._getCurrentText(child.props.children, value);
        if (maybe !== null)
          text = maybe;
      } else if (child.props.value === value) {
        text = child.props.text || child.props.children;
      }
    });
    return text;
  }
  _handleSelect(props) {
    if (props.value === this.state.value) return;
    const newValue = props.value;
    this.setState({open: false, value: newValue, text: props.children});
    this.props.onChange && this.props.onChange(newValue);
  }
  _handleDocClick(e) {
    try {
      if (!ReactDOM.findDOMNode(this).contains(e.target))
        this.setState({open: false});
    } catch(e) {
      // do nothing
    }
  }
  _handleClick() {
    const props = this.props;
    if (!props.disabled) {
      if (this.state.open) {
        this.setState({open: false});
      } else {
        React.Children.count(props.children) && this.setState({open: true});
      }
    }
  }
  render() {
    const state = this.state;
    const props = this.props;
    const className = ClassNames({
      disabled: props.disabled,
      open: state.open,
      [props.className]: true
    });
    return (
      <div className={className}>
        <input name={this.props.name} type="hidden" value={state.value}></input>
        <div className="select-body" onClick={this._handleClick}>{state.text}</div>
        <List key="list" maxHeight={props.maxHeight} onSelect={this._handleSelect} show={state.open} value={state.value}>
          {props.children}
        </List>
      </div>
    );
  }
}
Select.displayName = 'Select';
Select.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string,
  defaultValue: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  maxHeight: React.PropTypes.number,
  name: React.PropTypes.string,
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.any,
  value: React.PropTypes.string
};
Select.defaultProps = {
  maxHeight: 200,
  children: null,
  disabled: false,
  placeholder: '',
  className: 'react-as-select',
  onChange: () => {}
};
Select.Group = Group;
Select.Option = Option;
module.exports = Select;
