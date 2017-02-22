import expect from 'expect';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Layout from 'Layout';

describe('Layout', () => {
  it('renders Layout', () => {
    expect(Layout).toExist();
  });
});
