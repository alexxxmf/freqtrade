import { AbiItem } from "ethereum-abi-types-generator";
import { ContractContext } from "./abi/poolUniAave";
import { ethers } from "ethers";
import {
  Erc20Abi__factory,
  PancakeV2RouterAbi__factory,
  PancakeV2FactoryAbi__factory,
} from "./types/eth-v5";

const pancakeSwapV2RouterAddr = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
const pancakeSwapV2FactoryAddr = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
const busdContractAddr = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const wbnbContractAddr = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

const providerAddr = "https://bsc-dataseed1.binance.org/";

const provider = new ethers.providers.JsonRpcProvider(providerAddr);

const routerContract = PancakeV2RouterAbi__factory.connect(
  pancakeSwapV2RouterAddr,
  provider
);
const factoryContract = PancakeV2FactoryAbi__factory.connect(
  pancakeSwapV2FactoryAddr,
  provider
);

const getPrices = async (humanReadableAmount: number) => {
  const strHumanReadableAmount = String(humanReadableAmount);
  const busdContract = Erc20Abi__factory.connect(busdContractAddr, provider);
  const busdDecimals = await busdContract.decimals();

  const amountIn = ethers.utils.parseUnits(
    strHumanReadableAmount,
    busdDecimals
  );

  const amountOut = await routerContract.getAmountsOut(amountIn, [
    busdContractAddr,
    wbnbContractAddr,
  ]);

  const wbnbContract = Erc20Abi__factory.connect(wbnbContractAddr, provider);
  const wbnbDecimals = await wbnbContract.decimals();

  const humanReadableAmountOut = ethers.utils.formatUnits(
    amountOut[1].toString(),
    wbnbDecimals
  );

  console.log("humanReadableAmountOut", humanReadableAmountOut);
};

getPrices(500);
