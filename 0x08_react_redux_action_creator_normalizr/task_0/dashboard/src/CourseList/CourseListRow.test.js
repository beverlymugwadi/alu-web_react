import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={true}
        textFirstCell="Course Name"
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('renders as a header row when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={true}
        textFirstCell="Course Name"
        textSecondCell="Credit"
        textThirdCell="Availability"
      />
    );
    
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('th').length).toBe(3);
  });

  it('renders as a regular row when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
        textSecondCell="12"
        textThirdCell="available"
      />
    );
    
    expect(wrapper.find('tr').length).toBe(1);
    expect(wrapper.find('td').length).toBe(3);
  });

  it('renders header row with correct text', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={true}
        textFirstCell="Course Name"
        textSecondCell="Credit"
        textThirdCell="Availability"
      />
    );
    
    const headers = wrapper.find('th');
    expect(headers.at(0).text()).toBe('Course Name');
    expect(headers.at(1).text()).toBe('Credit');
    expect(headers.at(2).text()).toBe('Availability');
  });

  it('renders regular row with correct text', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
        textSecondCell="12"
        textThirdCell="available"
      />
    );
    
    expect(wrapper.find('td').at(0).text()).toContain('ES6');
    expect(wrapper.find('td').at(1).text()).toBe('12');
    expect(wrapper.find('td').at(2).text()).toBe('available');
  });

  it('renders a checkbox in regular rows', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    expect(wrapper.find('input[type="checkbox"]').length).toBe(1);
  });

  it('does not render a checkbox in header rows', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={true}
        textFirstCell="Course Name"
      />
    );
    
    expect(wrapper.find('input[type="checkbox"]').length).toBe(0);
  });

  it('checkbox is unchecked by default', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.prop('checked')).toBe(false);
  });

  it('updates checkbox state when clicked', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change', { target: { checked: true } });
    
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(true);
  });

  it('checkbox toggles state correctly', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    const checkbox = wrapper.find('input[type="checkbox"]');
    
    // Check the box
    checkbox.simulate('change', { target: { checked: true } });
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(true);
    
    // Uncheck the box
    checkbox.simulate('change', { target: { checked: false } });
    expect(wrapper.find('input[type="checkbox"]').prop('checked')).toBe(false);
  });

  it('applies rowHeader style when isHeader is true', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={true}
        textFirstCell="Course Name"
      />
    );
    
    const trStyle = wrapper.find('tr').prop('style');
    expect(trStyle.backgroundColor).toBe('#ddd');
    expect(trStyle.fontWeight).toBe('bold');
  });

  it('applies rowChecked style when checkbox is checked', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    const checkbox = wrapper.find('input[type="checkbox"]');
    checkbox.simulate('change', { target: { checked: true } });
    
    const trStyle = wrapper.find('tr').prop('style');
    expect(trStyle.backgroundColor).toBe('#e6e4e4');
  });

  it('does not apply rowChecked style when checkbox is unchecked', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    const trStyle = wrapper.find('tr').prop('style');
    expect(trStyle.backgroundColor).toBeUndefined();
  });

  it('removes rowChecked style when checkbox is unchecked after being checked', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    const checkbox = wrapper.find('input[type="checkbox"]');
    
    // Check the box
    checkbox.simulate('change', { target: { checked: true } });
    expect(wrapper.find('tr').prop('style').backgroundColor).toBe('#e6e4e4');
    
    // Uncheck the box
    checkbox.simulate('change', { target: { checked: false } });
    expect(wrapper.find('tr').prop('style').backgroundColor).toBeUndefined();
  });

  it('has correct propTypes', () => {
    expect(CourseListRow.propTypes.isHeader).toBeDefined();
    expect(CourseListRow.propTypes.textFirstCell).toBeDefined();
    expect(CourseListRow.propTypes.textSecondCell).toBeDefined();
    expect(CourseListRow.propTypes.textThirdCell).toBeDefined();
  });

  it('has correct defaultProps', () => {
    expect(CourseListRow.defaultProps.isHeader).toBe(false);
    expect(CourseListRow.defaultProps.textSecondCell).toBe('');
    expect(CourseListRow.defaultProps.textThirdCell).toBe('');
  });

  it('checkbox remains checked for specific row independently', () => {
    const wrapper1 = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    const wrapper2 = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="Webpack"
      />
    );
    
    // Check first row
    wrapper1.find('input[type="checkbox"]').simulate('change', { target: { checked: true } });
    expect(wrapper1.find('input[type="checkbox"]').prop('checked')).toBe(true);
    
    // Second row should remain unchecked
    expect(wrapper2.find('input[type="checkbox"]').prop('checked')).toBe(false);
  });

  it('renders text next to checkbox in first cell', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    const firstCell = wrapper.find('td').at(0);
    expect(firstCell.text()).toContain('ES6');
    expect(firstCell.find('input[type="checkbox"]').length).toBe(1);
  });

  it('applies no style when row is regular and unchecked', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    const trStyle = wrapper.find('tr').prop('style');
    expect(Object.keys(trStyle).length).toBe(0);
  });

  it('is a functional component using hooks', () => {
    const wrapper = shallow(
      <CourseListRow 
        isHeader={false}
        textFirstCell="ES6"
      />
    );
    
    // Should not have instance (functional component)
    expect(wrapper.instance()).toBeNull();
  });
});
