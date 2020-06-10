var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'AvrioWallet';
config.appDescription = 'Avrio GUI Wallet';
config.appSlogan = 'Tomorows money, today.';
config.appId = 'tk.avrio.walletshell';
config.appGitRepo = 'https://github.com/avrio-project/avrio-wallet-electron';

// default port number for your daemon (e.g. PengolinCoind)
config.daemonDefaultRpcPort = 24534;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'aws';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'avrio-service';

// version on the bundled service (avrio-service)
config.walletServiceBinaryVersion = "2.0.0.0";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. pengolin-service)
config.walletServiceRpcPort = 24562;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://aioexp.mine2.live/?hash=[[TX_HASH]]#blockchain_transaction';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '99.248.224.55';

// remote node list update url, set to null if you don't have one
config.remoteNodeListUpdateUrl = https://raw.githubusercontent.com/avrio-project/avrio-nodes-json/master/nodes.json;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  '99.248.224.55:24534',
];

// your currency name
config.assetName = 'Avrio';
// your currency ticker
config.assetTicker = 'AIO';
// your currency address prefix, for address validation
config.addressPrefix = 'aio';
// standard wallet address length, for address validation
config.addressLength = 98;
// intergrated wallet address length, for address validation
config.integratedAddressLength = 186;

// minimum fee for sending transaction
config.minimumFee = 0.025;
// minimum amount for sending transaction
config.mininumSend = 0.01;
// default mixin/anonimity for transaction
config.defaultMixin = 1;
// to convert from atomic unit
config.decimalDivisor = 100000;
// to represent human readable value
config.decimalPlaces = 6;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '78779fb00ca1b7170832a42de45142cf6c4b7f733fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [];

config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
