import React from 'react';
import ReactDOM from 'react-dom';
import Select from '../src/index.jsx';
const {
  Option,
  Group
} = Select;

class Demo extends React.Component {
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
    this.state = {};
  }
  _handleChange(name) {
    return value => {
      this.setState({ [name]: value });
    };
  }
  render() {
    return (
      <div>
        <div className="field">
          <Select onChange={this._handleChange('select1')} placeholder="Please select" value={this.state.select1} >
            <Option value="html">HTML</Option>
            <Option disabled value="javascript">JavaScript</Option>
            <Option value="css">CSS</Option>
          </Select>
          <span className="result">{this.state.select1}</span>
        </div>
        <div className="field">
          <Select onChange={this._handleChange('select2')} placeholder="Please select" value={this.state.select2} >
            <Option value="html">HTML</Option>
            <Option disabled value="javascript">JavaScript</Option>
            <Option value="css">CSS</Option>
            <Group title="Language">
              <Option value="english">English</Option>
              <Option disabled value="france">France</Option>
              <Option value="chinese">Chinese</Option>
            </Group>
            <Group title="Country">
              <Option disabled value="china">China</Option>
              <Option disabled value="usa">USA</Option>
              <Option value="us">US</Option>
            </Group>
          </Select>
          <span className="result">{this.state.select2}</span>
        </div>
        <div className="field">
          <Select onChange={this._handleChange('select3')} placeholder="Please select" value={this.state.select3} >
            <Option value="">Empty value</Option>
            <Option value="css">CSS</Option>
          </Select>
          <span className="result">{this.state.select3}</span>
        </div>
      </div>
    );
  }
}
Demo.displayName = 'Demo';
ReactDOM.render(<Demo/>, document.getElementById('demo'));
