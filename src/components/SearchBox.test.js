import React from 'react';
import { shallow, mount } from 'enzyme';
import { SearchBox } from './SearchBox';

describe('<SearchBox />', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<SearchBox />);

    expect(wrapper).toMatchSnapshot();
  });

  it('updates state on input change and calls onSubmit prop when form is submitted', () => {
    const handleSubmit = jest.fn();
    const phoneNumber = '03446405416';
    const wrapper = mount(<SearchBox onSubmit={handleSubmit} />);
    const form = wrapper.find('form');
    form.find('input').simulate('change', { target: { value: phoneNumber } });

    form.simulate('submit');

    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toBeCalledWith(phoneNumber);
  });

  it('render input field with a corresponding label', () => {
    const wrapper = shallow(<SearchBox />);

    const label = wrapper.find('label');
    expect(label).toHaveLength(1);

    const input = label.find('input[type="search"]');
    expect(input).toHaveLength(1);
  });
});
