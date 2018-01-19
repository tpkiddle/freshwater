/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import NotFound from '../index';
import messages from '../messages';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFound />
    );

    expect(renderedComponent.contains(
      <H1>
        <FormattedMessage {...messages.title} />
      </H1>
    )).toBe(true);
  });
});
