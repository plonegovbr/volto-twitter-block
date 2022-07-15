import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const SIZES = {
  s: 300,
  m: 400,
  l: 500,
};

const TweetView = (props) => {
  const { tweetId, align, size, theme, lang, dnt } = props;
  const width = size ? SIZES[size] : SIZES['l'];
  const options = {
    width: width,
    align: align,
    theme: theme,
    lang: lang,
    dnt: dnt,
  };
  return (
    tweetId && (
      <div
        className={cx(
          'block tweet align',
          {
            center: !Boolean(align),
          },
          align,
        )}
      >
        <TwitterTweetEmbed tweetId={tweetId} options={options} />
      </div>
    )
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
TweetView.propTypes = {
  tweetId: PropTypes.string.isRequired,
  align: PropTypes.string,
  size: PropTypes.string,
  theme: PropTypes.string,
  lang: PropTypes.string,
  dnt: PropTypes.bool,
};

/**
 * Default properties.
 * @property {Object} defaultProps Default properties.
 * @static
 */
TweetView.defaultProps = {
  align: 'center',
  size: 'l',
  theme: 'light',
  lang: 'en',
  dnt: true,
};

export default TweetView;
