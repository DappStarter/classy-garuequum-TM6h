require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name recipe magic exchange grace merry front surprise'; 
let testAccounts = [
"0x6e338034ad9eaf9f8cc5facae3d8db9c8cbd8bcb68c87cc017611a0c381eb3d9",
"0x6d3c01169745fbcb78b52abed336b46ce6aa3db2a5de66573a8aa2ff567c12c4",
"0x7b3891d0f72c3bf6d4ab902ad9ce1177815e58cacb1b56d4de04e7a6f1807d8e",
"0x022716ff0ae93741de8c3690ab7a647e6e638029907bd763a79610be7d4240a8",
"0x649f1e4a875d5a2987de0bdc999269036bc53576eaac9df8db7dae63b67d9dae",
"0xd16a9977643d55fffcb78e83a758489152dac06d97241da601c232cf480a97a9",
"0x48c2cf8e1375d1484006833eb06a81a009d48cc21a0f80e01861c5a7f7f41843",
"0x8e23ee0897892b70baa15413e6405a3a6a1db2914fca27d658d560d3bd2a93ab",
"0xcb3c211075bedffe649bcbe4928749e8d69d4f834fb5bbbc8b4749438031afdf",
"0xceffbbc844c83dc62744e338a6af4f01f0bab0d2cc171c767373030e724e3699"
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


