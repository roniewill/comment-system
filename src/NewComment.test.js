import React from 'react';
import App from './App';

import { shallow, mount, render } from 'enzyme';

import NewComment from './NewComment';

describe('<NewComment />', () => {

	const base = { syncState: jest.fn() }
	
	it('renders without crashing', () => {
		const wrapper = shallow(<NewComment base={ base } />);
		expect(wrapper.length).toBe(1);
	});

});