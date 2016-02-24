import 'should';
import Select from '../src/index.jsx';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
describe('test', function() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
  it('Hello', function() {
    let cp = ReactDOM.render(<Select/>, container);
    return ReactDOM.findDOMNode(cp).innerText.should.be.eql('Hello world');
  });
  it('Element', function() {
    let cp = <Select/>;
    TestUtils.isElement(cp).should.be.true();
  });
});
