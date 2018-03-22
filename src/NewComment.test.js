import React from 'react';
import App from './App';

import { shallow, mount, render } from 'enzyme';

import NewComment from './NewComment';

describe('<NewComment />', () => {

	const postNewCommentMock =  jest.fn();
	
	it('renders without crashing', () => {
		const wrapper = shallow(<NewComment postNewComment={ postNewCommentMock } />);
		expect(wrapper.length).toBe(1);
	});

	it('posting new comment', () => {
		const wrapper = mount(<NewComment postNewComment={ postNewCommentMock } />);
		const eventMock = {
			preventDefault: jest.fn()
		}
		wrapper.instance().sendData(eventMock);
		//expect(wrapper.length).toBe(1);
	});

});