import React, { useEffect, useState } from 'react';
import { extractTweetId } from '../../../helpers';
import twitterSVG from '../../../icons/twitter.svg';
import { withBlockExtensions } from '@plone/volto/helpers';
import { SidebarPortal } from '@plone/volto/components';
import { Input, Message } from 'semantic-ui-react';
import TweetBlockData from './Data';
import TweetBlockView from './View';

const TweetBlockEdit = (props) => {
  const { data, onChangeBlock, block, selected } = props;
  const [tweetId, setTweetId] = useState(data.tweetId);
  const [errorClass, setErrorClass] = useState('');
  const placeholder = 'Provide a url to the Tweet or the Tweet ID';

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
      setTweetId(newValue);
      onChangeBlock(block, { ...data, tweetId: newValue });
    } else {
      setErrorClass('error');
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
    <Message>
      <center>
        <img src={twitterSVG} alt="" className="blockIcon"/>
      </center>
      <div className="toolbar-inner">
        <Input
          className={errorClass}
          onKeyDown={onKeyDown}
          onChange={onChange}
          placeholder={placeholder}
          value={tweetId}
        />
      </div>
    </Message>
  );
};

export default withBlockExtensions(TweetBlockEdit);
