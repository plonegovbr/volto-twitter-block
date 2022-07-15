import twitterSVG from '../../icons/twitter.svg';
import TweetBlockView from './Tweet/View';
import TweetBlockEdit from './Tweet/Edit';

const blocks = {
  tweetBlock: {
    id: 'tweetBlock',
    title: 'Tweet',
    icon: twitterSVG,
    group: 'twitter',
    view: TweetBlockView,
    edit: TweetBlockEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
    defaultLanguage: 'en',
    defaultTheme: 'light',
  },
};

export default blocks;
