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
  // Check for @kitconcept/volto-blocks-grid
  const gridBlock = config.blocks.blocksConfig.__grid;
  console.log(config.blocks.blocksConfig);
  if (gridBlock !== undefined) {
    config.blocks.blocksConfig.__grid.gridAllowedBlocks = [
      ...gridBlock.gridAllowedBlocks,
      'tweetBlock'
    ];
  }
  return config;
};

export default applyConfig;
