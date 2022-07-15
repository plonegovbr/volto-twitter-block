import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import PropTypes from 'prop-types';
import twitterSVG from '@plonegovbr/volto-twitter-block/icons/twitter.svg';
import { Icon } from '@plone/volto/components';
import { Input, Header, Message } from 'semantic-ui-react';
import './EditForm.css';

const messages = defineMessages({
  editFormHeader: {
    id: 'Embed a Tweet',
    defaultMessage: 'Embed a Tweet',
  },
  editFormPlaceholder: {
    id: 'Provide a url to the Tweet or the Tweet ID',
    defaultMessage: 'Provide a url to the Tweet or the Tweet ID',
  },
  errorMessage: {
    id: 'Please provide a valid Tweet ID or Twitter URL',
    defaultMessage: 'Please provide a valid Tweet ID or Twitter URL',
  },
});

const EditForm = (props) => {
  const { value, onChange, onKeyDown, invalidValue } = props;
  const intl = useIntl();
  const error = invalidValue ? intl.formatMessage(messages.errorMessage) : null;
  return (
    <Message className="">
      <center>
        <Icon
          name={twitterSVG}
          className="blockIcon"
          size={'50px'}
          color={'blue'}
        />
        <Header>{intl.formatMessage(messages.editFormHeader)}</Header>
      </center>
      <div className="input-wrapper">
        <Input
          error={error}
          onKeyDown={onKeyDown}
          onChange={onChange}
          placeholder={intl.formatMessage(messages.editFormPlaceholder)}
          value={value}
        />
      </div>
    </Message>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
EditForm.propTypes = {
  onKeyDown: PropTypes.func,
  onChange: PropTypes.func,
  value: PropTypes.string,
  invalidValue: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
EditForm.defaultProps = {
  value: '',
  invalidValue: false,
};

export default EditForm;
