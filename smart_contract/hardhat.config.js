require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/CR66K6P_WhVQC4_mfENglWQ_5yGGOa5M',
      accounts: ['23674e10f98aee2afba334cef25e215396658e982c6f66f950ca2920904f8702'],
    },
  },
};