import 'should';
import Select from '../src/index.jsx';
const {
  Option,
  Group
} = Select;
import ReactDOM from 'react-dom';
import React from 'react';
import $ from 'jquery';
import TestUtils from 'react-addons-test-utils';
describe('test', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('should render', function() {
    let cp = ReactDOM.render(<Select/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Select);
    TestUtils.isCompositeComponent(cp).should.be.true();
  });
  it('should render with default props', function() {
    let cp = ReactDOM.render(<Select/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Select);
    let $dom = $(ReactDOM.findDOMNode(cp));
    $dom.attr('class').should.be.eql('react-as-select');
    $dom.find('.select-body').text().should.be.eql('');
  });
  it('should render with custom class', function() {
    let cp = ReactDOM.render(<Select className="custom-class"/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Select);
    let $dom = $(ReactDOM.findDOMNode(cp));
    $dom.attr('class').should.be.eql('custom-class');
  });
  it('should render with custom placeholder', function() {
    let cp = ReactDOM.render(<Select placeholder="custom placeholder"/>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Select);
    let $dom = $(ReactDOM.findDOMNode(cp));
    $dom.find('.select-body').text().should.be.eql('custom placeholder');
  });
  it('should show options when click', function() {
    let cp = ReactDOM.render(
      <Select>
        <Option value="html">HTML</Option>
      </Select>, container);
    cp = TestUtils.findRenderedComponentWithType(cp, Select);
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(cp, 'select-body'));
    $(ReactDOM.findDOMNode(cp)).find('.select-list').css('display').should.be.eql('block');
  });
  it('should hide options when click on document', function() {
    let cp = ReactDOM.render(
      <Select>
        <Option value="html">HTML</Option>
      </Select>
      , container);
    cp = TestUtils.findRenderedComponentWithType(cp, Select);
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(cp, 'select-body'));
    $(ReactDOM.findDOMNode(cp)).find('.select-list').length.should.eql(1);
    $(document.body).trigger('click');
    $(ReactDOM.findDOMNode(cp)).find('.select-list').length.should.eql(0);
  });
  it('should change value and label when click on an available option', function() {
    let cp = ReactDOM.render(
      <Select value="css">
        <Option value="html">HTML</Option>
        <Option value="css">CSS</Option>
      </Select>
      , container);
    let select = TestUtils.findRenderedComponentWithType(cp, Select);
    let $dom = $(ReactDOM.findDOMNode(select));
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(select, 'select-body'));
    let options = TestUtils.scryRenderedDOMComponentsWithClass(select, 'select-option');
    select.state.value.should.be.eql('css');
    $dom.find('.select-body').text().should.be.eql('CSS');
    TestUtils.Simulate.click(options[0]);
    select.state.value.should.be.eql('html');
    $dom.find('.select-body').text().should.be.eql('HTML');
  });
  it('should not change value when click on a disabled option', function() {
    let cp = ReactDOM.render(
      <Select value="css">
        <Option disabled value="html">HTML</Option>
        <Option value="css">CSS</Option>
      </Select>
      , container);
    let select = TestUtils.findRenderedComponentWithType(cp, Select);
    let $dom = $(ReactDOM.findDOMNode(select));
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(select, 'select-body'));
    let options = TestUtils.scryRenderedDOMComponentsWithClass(select, 'select-option');
    select.state.value.should.be.eql('css');
    $dom.find('.select-body').text().should.be.eql('CSS');
    TestUtils.Simulate.click(options[0]);
    select.state.value.should.be.eql('css');
    $dom.find('.select-body').text().should.be.eql('CSS');
  });
  it('should hide options when click on a available option', function() {
    let cp = ReactDOM.render(
      <Select value="css">
        <Option value="html">HTML</Option>
        <Option value="css">CSS</Option>
      </Select>
      , container);
    let select = TestUtils.findRenderedComponentWithType(cp, Select);
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(select, 'select-body'));
    let options = TestUtils.scryRenderedDOMComponentsWithClass(select, 'select-option');
    TestUtils.Simulate.click(options[0]);
    $(ReactDOM.findDOMNode(select)).find('.select-list').length.should.eql(0);
  });
  it('should render group', function() {
    let cp = ReactDOM.render(
      <Select>
        <Group title="Language">
          <Option value="english">English</Option>
          <Option value="france">France</Option>
          <Option value="chinese">Chinese</Option>
        </Group>
        <Group title="Country">
          <Option value="china">China</Option>
          <Option value="usa">USA</Option>
          <Option value="us">US</Option>
        </Group>
      </Select>
      , container);
    let select = TestUtils.findRenderedComponentWithType(cp, Select);
    TestUtils.Simulate.click(TestUtils.findRenderedDOMComponentWithClass(select, 'select-body'));
    $(ReactDOM.findDOMNode(select)).find('.select-group').length.should.eql(2);
  });
});
