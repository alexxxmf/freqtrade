const pancakeSwapV2RouterAddr = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
const pancakeSwapV2FactoryAddr = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";
const busdContractAddr = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
const wbnbContractAddr = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";

const erc20Abi = ["function decimals() external pure returns (uint8);"];
const pancakeFactoryAbi = [
  "function getPair(address tokenA, address tokenB) external view returns (address pair);",
];
const lpPairAbi = [
  "function token0() external view returns (address);",
  "function token1() external view returns (address);",
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast);",
];
const pancakeRouterAbi = [
  "function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);",
  "function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);",
  "function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);",
  "function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);",
];
