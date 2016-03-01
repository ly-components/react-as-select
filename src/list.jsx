import React from 'react';
import Group from './group.jsx';
import Option from './option.jsx';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    };
    this._handleOptionSelect = this._handleOptionSelect.bind(this);
    this._handleOptionActive = this._handleOptionActive.bind(this);
    this._getOptions = this._getOptions.bind(this);
  }
  _handleOptionActive(option) {
    this.setState({
      active: option.props.value
    });
  }
  _handleOptionSelect(option) {
    this.props.onSelect(option.props);
  }
  _getOptions(children) {
    children = children || this.props.children;
    let options = [];
    React.Children.forEach(children, child => {
      if (child.type === Group) {
        const innerItems = this._getOptions(child.props.children);
        innerItems.length && options.push(<Group key={child.props.title} {...child.props}>{innerItems}</Group>);
      } else if (child.type === Option) {
        const value = child.props.value;
        options.push(
          <Option {...child.props}
            active={child.props.value === this.state.active}
            key={value}
            onActive={this._handleOptionActive}
            onSelect={this._handleOptionSelect}
            ref={`option-${value}`}
            selected={child.props.value === this.props.value} />
        );
      }
    });
    return options;
  }
  render() {
    return (
      <div>
        {this.props.show && <ul className="select-list" style={{maxHeight: this.props.maxHeight}}>{this._getOptions()}</ul>}
      </div>
    )
  }
}
List.displayName = 'List';
List.propTypes = {
  children: React.PropTypes.node,
  maxHeight: React.PropTypes.number,
  onSelect: React.PropTypes.func,
  show: React.PropTypes.bool,
  value: React.PropTypes.any
};
List.defaultProps = {
  maxHeight: 200,
  children: null,
  onSelect: () => {},
  show: false
};
module.exports = List;
