const {Blockchain, Transaction} = require("./blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate("db88697960718bc241be6808ee656540a546b893bf2fca085c8fe4f833dc9ad7");
const myWalletAddress = myKey.getPublic("hex");

let adamCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "public key goes here", 10);
tx1.signTransaction(myKey);
adamCoin.addTransaction(tx1);

console.log("\n Starting the miner...");
adamCoin.minePendingTransactions(myWalletAddress);

console.log("\n Balance of Adam is", adamCoin.getBalanceOfAddress(myWalletAddress));

adamCoin.chain[1].transactions[0].amount = 1;

console.log("Is chain valid?", adamCoin.isChainValid());
