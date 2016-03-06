# react-as-select

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/react-as-select.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/react-as-select?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/react-as-select.png)](https://travis-ci.org/LingyuCoder/react-as-select)
[![Dependency Status](https://david-dm.org/LingyuCoder/react-as-select.svg)](https://david-dm.org/LingyuCoder/react-as-select)
[![devDependency Status](https://david-dm.org/LingyuCoder/react-as-select/dev-status.svg)](https://david-dm.org/LingyuCoder/react-as-select#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/react-as-select.svg?style=flat-square)](http://npmjs.org/package/react-as-select)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/react-as-select.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/react-as-select.svg?style=flat-square)](https://npmjs.org/package/react-as-select)

> A React select

## Demo

[Demo here](http://LingyuCoder.github.io/react-as-select/demo/index.html)

## Installation

```bash
$ npm install --save react-as-select
```

## Usage

### Easy select

```js
import Select from 'react-as-select';
const {
  Option,
  Group
} = Select;

<Select onChange={this._handleChange('select1')} placeholder="Please select" value={this.state.select1} >
  <Option value="html">HTML</Option>
  <Option disabled value="javascript">JavaScript</Option>
  <Option value="css">CSS</Option>
</Select>
```

### Group Select

```js
import Select from 'react-as-select';
const {
  Option,
  Group
} = Select;

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
```

## Properties

### Select

[insert]: # (start:src/index.jsx|doc)
| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| children |  | Node |  | `null` |
| className |  | String |  | `'react-as-select'` |
| defaultValue |  | String |  |  |
| disabled |  | Boolean |  | `false` |
| maxHeight |  | Number |  | `200` |
| name |  | String |  |  |
| onChange |  | Function |  | `() => {}` |
| placeholder |  | Any |  | `''` |
| readOnly |  | Boolean |  | `false` |
| value |  | String |  |  |
[insert]: # (end:src/index.jsx)

### Option

| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| children |  | String | √ |  |
| value |  | String | √ |  |
### Group

| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| title |  | String | √ | `''` |

## Development

[Online test page here](http://LingyuCoder.github.io/react-as-select/test/test.html)

```bash
$ npm run dev # startup local dev server
$ npm run build # build
$ npm run test # run tests
$ npm run cov # run coverage
$ npm run build-demo # build demo, auto run in 'npm run build'
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
