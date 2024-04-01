import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SampleWithJest from '../components/SampleWithJest';
import { ISampleWithJestProps } from '../components/ISampleWithJestProps';


describe('SampleWithJest', () => {
  
  beforeEach(() => {
    const props: ISampleWithJestProps = {
      description: "Test Description",
      isDarkTheme: false,
      environmentMessage: "Test Environment Message",
      hasTeamsContext: true,
      userDisplayName: "Test User",
    };
    render(<SampleWithJest {...props} /> as React.ReactElement<ISampleWithJestProps>);
  });

  it('renders without crashing', () => {
    expect(screen.getByText('Well done, Test User!')).toBeInTheDocument();
  });

  it('renders the correct welcome message', () => {
    expect(screen.getByText('Well done, Test User!')).toBeInTheDocument();
  });

  it('renders the correct environment message', () => {
    expect(screen.getByText('Test Environment Message')).toBeInTheDocument();
  });

  it('renders the correct web part property value', () => {
    expect(screen.getByText('Web part property value: Test Description')).toBeInTheDocument();
  });

  it('renders the correct number of links', () => {
    expect(screen.getAllByRole('link').length).toBe(7);
  });
});
