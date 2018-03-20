import React from 'react';
import App from './App';

import { shallow, mount, render } from 'enzyme';

describe('<App />', () => {
	
	it('renders without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.length).toBe(1);
	});

	it('should have .container class', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.is('.container')).toBe(false);
	});

	it('show comments', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('Comments').length).toBe(1);
	});

	it('show new comment', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('NewComment').length).toBe(1);
	});

	/*it('outputs the <App />', () => {
		const wrapperShallow = shallow(<App />);
		const wrapperMount = mount(<App />);
		const wrapperRender = render(<App />);

		console.log(wrapperShallow.debug());
		console.log(wrapperMount.debug());
		console.log(wrapperRender.html());
	});*/

});