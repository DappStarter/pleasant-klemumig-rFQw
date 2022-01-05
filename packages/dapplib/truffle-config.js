require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remember horn grace hill forget stable'; 
let testAccounts = [
"0x1c662e1adf52bf00b47946596e7cf58951bc6ac8564f5389e063ddf9bbedf592",
"0xd86d717decb4f61ddf32aceb66ecde48220900f9934b6ebc36ccf68fe443ba85",
"0xee7188141b16becd14403d7140218686997452f1c9e1a0ad12d7e1a589045273",
"0x6603ab6bc504de00a407e13cd28b365e6420fcc72b6233ef5dd7099a2cb1a9b0",
"0x03b27ec252f1a0b5b5e75aa9d6eaf7d392164382d2c10736a359b0437d3a8ad8",
"0x4962041f00ffd35dcd0a6c7ba8bb1c21e4c1eb2cc1d72e22af2cadee01b366f5",
"0x729f86b8ebcb82bb141426be0156e96baf946f85ff99423d51712b7dd2eee458",
"0x9d637dd671295363b2c55a37ef0d98310e010753991f2605fba1be51527ce920",
"0xfdd99a4c28a15f4aa164a02c3e32b58c4263c48f8253cb9c197ba745766a1a1f",
"0xd08741e8896a2b46e5cd5f9a90826e2db7ee0787b516faa6a8947857e5b99e51"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


