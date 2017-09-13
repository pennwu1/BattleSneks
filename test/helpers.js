// Makes chai and enzyme available to all test files
import React from 'react';
import { shallow, mount } from 'enzyme';

const expect = require('chai').expect;
const assert = require('chai').assert;
const request = require('supertest');

global.React = React;
global.expect = expect;
global.shallow = shallow;
global.mount = mount;
global.request = request;
global.assert = assert;