import React from 'react';
import cx from 'classnames';
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

export default TweetView;
