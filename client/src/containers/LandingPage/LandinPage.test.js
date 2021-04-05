import React from 'react';
import Enzyme from 'enzyme';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import LandingPage from './LandingPage';

Enzyme.configure({ adapter: new Adapter() })

describe('<LandingPage />', () => {
    it('Contains a div', () => {
        const wrapper = shallow(<LandingPage />);
        expect(wrapper.contains(<b>Start</b>)).equal(true)
    });
});

