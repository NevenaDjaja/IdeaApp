import expect from 'expect';
import React from 'react';
import { shallow } from 'enzyme'
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jQuery';

import Navigation from 'Navigation';

describe('Navigation', () => {
	let navigation;

	before(() => {
		navigation = shallow(
			<Navigation />
		);
	})
	it('renders Navigation', () => {
		expect(navigation.find('[data-test-id="navigation"]')).toExist();
	});
});
