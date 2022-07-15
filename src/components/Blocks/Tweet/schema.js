import { defineMessages } from 'react-intl';
import config from '@plone/volto/registry';

const messages = defineMessages({
  tweetBlock: {
    id: 'Tweet',
    defaultMessage: 'Tweet',
  },
  tweetId: {
    id: 'Tweet ID',
    defaultMessage: 'Tweet ID',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  size: {
    id: 'Size',
    defaultMessage: 'Size',
  },
  styleFieldset: {
    id: 'Style',
    defaultMessage: 'Style',
  },
  advancedFieldset: {
    id: 'Advanced',
    defaultMessage: 'Advanced',
  },
  theme: {
    id: 'Theme',
    defaultMessage: 'Theme',
  },
  themeDark: {
    id: 'Dark',
    defaultMessage: 'Dark',
  },
  themeLight: {
    id: 'Light',
    defaultMessage: 'Light',
  },
  language: {
    id: 'Language',
    defaultMessage: 'Language',
  },
  dnt: {
    id: 'Do not track',
    defaultMessage: 'Do not track',
  },
});

const THEMES = [
  ['dark', messages.themeDark],
  ['light', messages.themeLight],
];

const LANGUAGES = [
  ['en', 'English'],
  ['ar', 'Arabic'],
  ['bn', 'Bengali'],
  ['zh-cn', 'Chinese (Simplified)'],
  ['zh-tw', 'Chinese (Traditional)'],
  ['cs', 'Czech'],
  ['da', 'Danish'],
  ['nl', 'Dutch'],
  ['fil', 'Filipino'],
  ['fi', 'Finnish'],
  ['fr', 'French'],
  ['de', 'German'],
  ['el', 'Greek'],
  ['he', 'Hebrew'],
  ['hi', 'Hindi'],
  ['hu', 'Hungarian'],
  ['id', 'Indonesian'],
  ['it', 'Italian'],
  ['ja', 'Japanese'],
  ['ko', 'Korean'],
  ['msa', 'Malay'],
  ['no', 'Norwegian'],
  ['fa', 'Persian'],
  ['pl', 'Polish'],
  ['pt', 'Portuguese'],
  ['ro', 'Romanian'],
  ['ru', 'Russian'],
  ['es', 'Spanish'],
  ['sv', 'Swedish'],
  ['th', 'Thai'],
  ['tr', 'Turkish'],
  ['uk', 'Ukrainian'],
  ['ur', 'Urdu'],
  ['vi', 'Vietnamese'],
];

export const tweetSchema = (props) => {
  const defaultTheme = config.blocks?.blocksConfig?.tweetBlock?.defaultTheme;
  const defaultLanguage =
    config.blocks?.blocksConfig?.tweetBlock?.defaultLanguage;
  const availableThemes = () => {
    return THEMES.map((item) => [item[0], props.intl.formatMessage(item[1])]);
  };
  return {
    title: props.intl.formatMessage(messages.tweetBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['tweetId'],
      },
      {
        id: 'style',
        title: props.intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size', 'theme'],
      },
      {
        id: 'advanced',
        title: props.intl.formatMessage(messages.advancedFieldset),
        fields: ['lang', 'dnt'],
      },
    ],

    properties: {
      tweetId: {
        title: props.intl.formatMessage(messages.tweetId),
      },
      align: {
        title: props.intl.formatMessage(messages.align),
        widget: 'align',
      },
      size: {
        title: props.intl.formatMessage(messages.size),
        widget: 'image_size',
      },
      theme: {
        title: props.intl.formatMessage(messages.theme),
        choices: availableThemes(),
        default: defaultTheme,
        noValueOption: false,
      },
      lang: {
        title: props.intl.formatMessage(messages.language),
        choices: LANGUAGES,
        default: defaultLanguage,
        noValueOption: false,
      },
      dnt: {
        title: props.intl.formatMessage(messages.dnt),
        default: true,
        type: 'boolean',
      },
    },
    required: ['tweetId'],
  };
};
