import blocks from './components/Blocks';

const applyConfig = (config) => {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    ...blocks,
  };
  config.blocks.groupBlocksOrder = [
    ...config.blocks.groupBlocksOrder,
    { id: 'twitter', title: 'Twitter' },
  ];
  return config;
};

export default applyConfig;
