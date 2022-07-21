import Web3 from "web3";
import fs from "fs";
import { AbiItem } from "web3-utils";

import { ContractContext } from "./abi/poolUniAave";

const main = async () => {
  const abiJsonFile = fs.readFileSync("./abi/poolUniAave.json");

  const HTTP_PROVIDER_URL_ALCHEMY =
    "https://eth-mainnet.g.alchemy.com/v2/HAbXdqDXnCAl7eAZ7FrwEa5aNibQLECA";
  const WS_PROVIDER_URL_ALCHEMY =
    "wss://eth-mainnet.g.alchemy.com/v2/HAbXdqDXnCAl7eAZ7FrwEa5aNibQLECA";

  const contractAddress = "0x59c38b6775Ded821f010DbD30eCabdCF84E04756";

  const contractAbiInterface = require("./abi/poolUniAave.json");

  const web3 = new Web3(HTTP_PROVIDER_URL_ALCHEMY);

  const contract = new web3.eth.Contract(
    contractAbiInterface as AbiItem,
    contractAddress
  ) as unknown as ContractContext;

  const results = await contract.getPastEvents("Swap", {
    filter: {},
    fromBlock: 15180000,
    toBlock: "latest",
  });

  //SwapEventEmittedResponse

  console.log("results", results[15]);
};

main();
