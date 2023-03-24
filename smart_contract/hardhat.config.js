//https://eth-goerli.g.alchemy.com/v2/XKFtg6WfzfEG0yhQgpuVNGrLAEq7vYIh
//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/XKFtg6WfzfEG0yhQgpuVNGrLAEq7vYIh",
      accounts: [
        '8518b8aa6d06c2e55d7925f42da247c4d9541d597fafca366a62151dc12dbbda'
      ],
    },
  },
};
