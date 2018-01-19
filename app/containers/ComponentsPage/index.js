/*
 * ComponentsPage
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';

export default class ComponentsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Components Page</title>
          <meta name="description" content="Components page of FreshWater UI" />
        </Helmet>
        <H1>
          <FormattedMessage {...messages.title} />
        </H1>
      </div>
    );
  }
}
