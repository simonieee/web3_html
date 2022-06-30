const Web3 = require("web3");
require("dotenv").config();
const web3 = new Web3(
  "https://ropsten.infura.io/v3/b4f1527fb11543da9a28471341c745ee"
);

const account1 = "0x7f096C82c2CA1dBd362e7067667A0CA9708A4590";
const account2 = "0xbbB6C6a0EdFFfCb44E5c050BDf45DA03a71B62dE";
const privateKey1 = process.env.PRIVATE_KEY_1;
const privateKey2 = process.env.PRIVATE_KEY_2;

web3.eth.getBalance(account1, async (err, bal) => {
  console.log(web3.utils.fromWei(bal, "ether"));
});
