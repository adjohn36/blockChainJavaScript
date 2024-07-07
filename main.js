const {Blockchain, Transaction} = require("./blockchain");

let adamCoin = new Blockchain();
adamCoin.addTransaction(new Transaction("address1", "address2", 100));
adamCoin.addTransaction(new Transaction("address2", "address1", 50));

console.log("\n Starting the miner...");
adamCoin.minePendingTransactions("xaviers-address");

console.log("\n Balance of xavier is", adamCoin.getBalanceOfAddress("xaviers-address"));

console.log("\n Starting the miner again...");
adamCoin.minePendingTransactions("xaviers-address");

console.log("\n Balance of xavier is", adamCoin.getBalanceOfAddress("xaviers-address"));
