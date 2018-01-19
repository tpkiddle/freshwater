/**
 * Test the LoginPage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import ComponentsPage from '../index';
import messages from '../messages';

describe('<ComponentsPage />', () => {
  it('should render its title', () => {
    const renderedComponent = shallow(
      <ComponentsPage />
    );
    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage {...messages.title} />
      </H1>
    )).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(
      <ComponentsPage />
    );
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
