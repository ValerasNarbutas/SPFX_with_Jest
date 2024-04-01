import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import SampleWithJest from '../components/SampleWithJest';

describe('SampleWithJest', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<SampleWithJest
      description="Test Description"
      isDarkTheme={false}
      environmentMessage="Test Environment Message"
      hasTeamsContext={true}
      userDisplayName="Test User"
    />);
  });

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders the correct welcome message', () => {
    const welcomeMessage = wrapper.find('h2').text();
    expect(welcomeMessage).toBe('Well done, Test User!');
  });

  it('renders the correct environment message', () => {
    const environmentMessage = wrapper.find('.welcome > div').at(0).text();
    expect(environmentMessage).toBe('Test Environment Message');
  });

  it('renders the correct web part property value', () => {
    const webPartPropertyValue = wrapper.find('.welcome > div').at(1).text();
    expect(webPartPropertyValue).toBe('Web part property value: Test Description');
  });

  it('renders the correct number of links', () => {
    const links = wrapper.find('.links > li');
    expect(links.length).toBe(7);
  });
});