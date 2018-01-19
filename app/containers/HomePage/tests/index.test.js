/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from '../messages';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render its title', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage {...messages.title} />
      </H1>
    )).toBe(true);
  });

  it('should re-render the component', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
