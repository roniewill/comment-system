import React from 'react';
import App from './App';

import { shallow, mount, render } from 'enzyme';

import Comment from './Comment';

describe('<Comment />', () => {
  const comment = { comment: 'test' }
	it('renders without crashing', () => {
		const wrapper = shallow(<Comment comment={comment} />);
		expect(wrapper.length).toBe(1);
	});
});