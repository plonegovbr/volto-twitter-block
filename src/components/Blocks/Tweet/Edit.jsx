import React, { useEffect, useState } from 'react';
import { extractTweetId } from '@plonegovbr/volto-twitter-block/helpers';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';
import EditForm from './EditForm';
import TweetBlockData from './Data';
import TweetBlockView from './View';

const TweetBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [tweetId, setTweetId] = useState(data.tweetId);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (data.tweetId !== tweetId) {
      const newValue = extractTweetId(data.tweetId);
      setTweetId(newValue);
    }
  }, [data, tweetId]);

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      updateTweetId(e.target.value);
    }
  };

  const onChange = (e) => {
    e.preventDefault();
    e.stopPropagation();
    updateTweetId(e.target.value);
  };

  const updateTweetId = (value) => {
    const newValue = extractTweetId(value);
    if (newValue) {
      setHasError(false);
      setTweetId(newValue);
      onChangeBlock(block, { ...data, tweetId: newValue });
    } else {
      setHasError(true);
    }
  };

  return tweetId ? (
    <>
      <TweetBlockView {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <TweetBlockData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
        />
      </SidebarPortal>
    </>
  ) : (
    <EditForm
      onKeyDown={onKeyDown}
      onChange={onChange}
      value={tweetId}
      invalidValue={hasError}
    />
  );
};

export default withBlockExtensions(TweetBlockEdit);
