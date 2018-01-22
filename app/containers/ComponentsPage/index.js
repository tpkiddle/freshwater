/*
 * ComponentsPage
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import H2 from 'components/H2';
import Button from 'components/Button';
import Form from 'components/Form';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
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
        <H2>
          <FormattedMessage {...messages.forms.title} />
        </H2>
        <Form>
          <Input
            type="text"
            placeholder="e.g. John Doe"
            label="Enter your name"
          />
          <TextArea
            placeholder="e.g. Tennis, Football, Baking and Motorcycles"
            label="Enter your favorite hobbies"
          />
          <Input
            type="email"
            placeholder="e.g. john.doe@email.com"
            label="Enter your email"
          />
          <Input
            type="password"
            label="Enter your password"
          />
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
