// Makes chai and enzyme available to all test files
import React from 'react';
import { shallow, mount } from 'enzyme';

const expect = require('chai').expect;

global.React = React;
global.expect = expect;
global.shallow = shallow;
global.mount = mount;
