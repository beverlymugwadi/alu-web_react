import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<NotificationItem id={1} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders correct html from type and value props', () => {
    const wrapper = shallow(<NotificationItem id={1} type="default" value="test" />);
    expect(wrapper.find('li').prop('data-notification-type')).toBe('default');
    expect(wrapper.find('li').text()).toBe('test');
  });

  it('renders correct html from html prop', () => {
    const htmlContent = { __html: '<u>test</u>' };
    const wrapper = shallow(<NotificationItem id={1} html={htmlContent} />);
    expect(wrapper.find('li').prop('dangerouslySetInnerHTML')).toEqual(htmlContent);
  });

  it('calls markAsRead with the right ID when clicked', () => {
    const markAsReadSpy = jest.fn();
    const wrapper = shallow(
      <NotificationItem id={5} value="test" markAsRead={markAsReadSpy} />
    );
    
    wrapper.find('li').simulate('click');
    
    expect(markAsReadSpy).toHaveBeenCalledWith(5);
  });
});
