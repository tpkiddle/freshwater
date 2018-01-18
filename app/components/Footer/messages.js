/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  licenseMessage: {
    id: 'freshwater.components.Footer.license.message',
    defaultMessage: 'FreshWater v0.1.',
  },
  authorMessage: {
    id: 'freshwater.components.Footer.author.message',
    defaultMessage: `
      Made with love by {author}.
    `,
  },
});
