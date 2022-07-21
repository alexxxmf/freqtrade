import BN from 'bn.js';
import BigNumber from 'bignumber.js';
import {
  PromiEvent,
  TransactionReceipt,
  EventResponse,
  EventData,
  Web3ContractContext,
} from 'ethereum-abi-types-generator';

export interface CallOptions {
  from?: string;
  gasPrice?: string;
  gas?: number;
}

export interface SendOptions {
  from: string;
  value?: number | string | BN | BigNumber;
  gasPrice?: string;
  gas?: number;
}

export interface EstimateGasOptions {
  from?: string;
  value?: number | string | BN | BigNumber;
  gas?: number;
}

export interface MethodPayableReturnContext {
  send(options: SendOptions): PromiEvent<TransactionReceipt>;
  send(
    options: SendOptions,
    callback: (error: Error, result: any) => void
  ): PromiEvent<TransactionReceipt>;
  estimateGas(options: EstimateGasOptions): Promise<number>;
  estimateGas(
    options: EstimateGasOptions,
    callback: (error: Error, result: any) => void
  ): Promise<number>;
  encodeABI(): string;
}

export interface MethodConstantReturnContext<TCallReturn> {
  call(): Promise<TCallReturn>;
  call(options: CallOptions): Promise<TCallReturn>;
  call(
    options: CallOptions,
    callback: (error: Error, result: TCallReturn) => void
  ): Promise<TCallReturn>;
  encodeABI(): string;
}

export interface MethodReturnContext extends MethodPayableReturnContext {}

export type ContractContext = Web3ContractContext<
  PoolUniAave,
  PoolUniAaveMethodNames,
  PoolUniAaveEventsContext,
  PoolUniAaveEvents
>;
export type PoolUniAaveEvents =
  | 'Burn'
  | 'Collect'
  | 'CollectProtocol'
  | 'Flash'
  | 'IncreaseObservationCardinalityNext'
  | 'Initialize'
  | 'Mint'
  | 'SetFeeProtocol'
  | 'Swap';
export interface PoolUniAaveEventsContext {
  Burn(
    parameters: {
      filter?: {
        owner?: string | string[];
        tickLower?: string | number | string | number[];
        tickUpper?: string | number | string | number[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Collect(
    parameters: {
      filter?: {
        owner?: string | string[];
        tickLower?: string | number | string | number[];
        tickUpper?: string | number | string | number[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  CollectProtocol(
    parameters: {
      filter?: { sender?: string | string[]; recipient?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Flash(
    parameters: {
      filter?: { sender?: string | string[]; recipient?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  IncreaseObservationCardinalityNext(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Initialize(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Mint(
    parameters: {
      filter?: {
        owner?: string | string[];
        tickLower?: string | number | string | number[];
        tickUpper?: string | number | string | number[];
      };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  SetFeeProtocol(
    parameters: {
      filter?: {};
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
  Swap(
    parameters: {
      filter?: { sender?: string | string[]; recipient?: string | string[] };
      fromBlock?: number;
      toBlock?: 'latest' | number;
      topics?: string[];
    },
    callback?: (error: Error, event: EventData) => void
  ): EventResponse;
}
export type PoolUniAaveMethodNames =
  | 'new'
  | 'burn'
  | 'collect'
  | 'collectProtocol'
  | 'factory'
  | 'fee'
  | 'feeGrowthGlobal0X128'
  | 'feeGrowthGlobal1X128'
  | 'flash'
  | 'increaseObservationCardinalityNext'
  | 'initialize'
  | 'liquidity'
  | 'maxLiquidityPerTick'
  | 'mint'
  | 'observations'
  | 'observe'
  | 'positions'
  | 'protocolFees'
  | 'setFeeProtocol'
  | 'slot0'
  | 'snapshotCumulativesInside'
  | 'swap'
  | 'tickBitmap'
  | 'tickSpacing'
  | 'ticks'
  | 'token0'
  | 'token1';
export interface BurnEventEmittedResponse {
  owner: string;
  tickLower: string | number;
  tickUpper: string | number;
  amount: string;
  amount0: string;
  amount1: string;
}
export interface CollectEventEmittedResponse {
  owner: string;
  recipient: string;
  tickLower: string | number;
  tickUpper: string | number;
  amount0: string;
  amount1: string;
}
export interface CollectProtocolEventEmittedResponse {
  sender: string;
  recipient: string;
  amount0: string;
  amount1: string;
}
export interface FlashEventEmittedResponse {
  sender: string;
  recipient: string;
  amount0: string;
  amount1: string;
  paid0: string;
  paid1: string;
}
export interface IncreaseObservationCardinalityNextEventEmittedResponse {
  observationCardinalityNextOld: string | number;
  observationCardinalityNextNew: string | number;
}
export interface InitializeEventEmittedResponse {
  sqrtPriceX96: string;
  tick: string | number;
}
export interface MintEventEmittedResponse {
  sender: string;
  owner: string;
  tickLower: string | number;
  tickUpper: string | number;
  amount: string;
  amount0: string;
  amount1: string;
}
export interface SetFeeProtocolEventEmittedResponse {
  feeProtocol0Old: string | number;
  feeProtocol1Old: string | number;
  feeProtocol0New: string | number;
  feeProtocol1New: string | number;
}
export interface SwapEventEmittedResponse {
  sender: string;
  recipient: string;
  amount0: string;
  amount1: string;
  sqrtPriceX96: string;
  liquidity: string;
  tick: string | number;
}
export interface ObservationsResponse {
  blockTimestamp: string;
  tickCumulative: string;
  secondsPerLiquidityCumulativeX128: string;
  initialized: boolean;
}
export interface ObserveResponse {
  tickCumulatives: string[];
  secondsPerLiquidityCumulativeX128s: string[];
}
export interface PositionsResponse {
  liquidity: string;
  feeGrowthInside0LastX128: string;
  feeGrowthInside1LastX128: string;
  tokensOwed0: string;
  tokensOwed1: string;
}
export interface ProtocolFeesResponse {
  token0: string;
  token1: string;
}
export interface Slot0Response {
  sqrtPriceX96: string;
  tick: string;
  observationIndex: string;
  observationCardinality: string;
  observationCardinalityNext: string;
  feeProtocol: string;
  unlocked: boolean;
}
export interface SnapshotCumulativesInsideResponse {
  tickCumulativeInside: string;
  secondsPerLiquidityInsideX128: string;
  secondsInside: string;
}
export interface TicksResponse {
  liquidityGross: string;
  liquidityNet: string;
  feeGrowthOutside0X128: string;
  feeGrowthOutside1X128: string;
  tickCumulativeOutside: string;
  secondsPerLiquidityOutsideX128: string;
  secondsOutside: string;
  initialized: boolean;
}
export interface PoolUniAave {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   */
  'new'(): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param tickLower Type: int24, Indexed: false
   * @param tickUpper Type: int24, Indexed: false
   * @param amount Type: uint128, Indexed: false
   */
  burn(
    tickLower: string | number,
    tickUpper: string | number,
    amount: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param recipient Type: address, Indexed: false
   * @param tickLower Type: int24, Indexed: false
   * @param tickUpper Type: int24, Indexed: false
   * @param amount0Requested Type: uint128, Indexed: false
   * @param amount1Requested Type: uint128, Indexed: false
   */
  collect(
    recipient: string,
    tickLower: string | number,
    tickUpper: string | number,
    amount0Requested: string,
    amount1Requested: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param recipient Type: address, Indexed: false
   * @param amount0Requested Type: uint128, Indexed: false
   * @param amount1Requested Type: uint128, Indexed: false
   */
  collectProtocol(
    recipient: string,
    amount0Requested: string,
    amount1Requested: string
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  factory(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  fee(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  feeGrowthGlobal0X128(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  feeGrowthGlobal1X128(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param recipient Type: address, Indexed: false
   * @param amount0 Type: uint256, Indexed: false
   * @param amount1 Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  flash(
    recipient: string,
    amount0: string,
    amount1: string,
    data: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param observationCardinalityNext Type: uint16, Indexed: false
   */
  increaseObservationCardinalityNext(
    observationCardinalityNext: string | number
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param sqrtPriceX96 Type: uint160, Indexed: false
   */
  initialize(sqrtPriceX96: string): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  liquidity(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  maxLiquidityPerTick(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param recipient Type: address, Indexed: false
   * @param tickLower Type: int24, Indexed: false
   * @param tickUpper Type: int24, Indexed: false
   * @param amount Type: uint128, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  mint(
    recipient: string,
    tickLower: string | number,
    tickUpper: string | number,
    amount: string,
    data: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: uint256, Indexed: false
   */
  observations(
    parameter0: string
  ): MethodConstantReturnContext<ObservationsResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param secondsAgos Type: uint32[], Indexed: false
   */
  observe(
    secondsAgos: string | number[]
  ): MethodConstantReturnContext<ObserveResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: bytes32, Indexed: false
   */
  positions(
    parameter0: string | number[]
  ): MethodConstantReturnContext<PositionsResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  protocolFees(): MethodConstantReturnContext<ProtocolFeesResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param feeProtocol0 Type: uint8, Indexed: false
   * @param feeProtocol1 Type: uint8, Indexed: false
   */
  setFeeProtocol(
    feeProtocol0: string | number,
    feeProtocol1: string | number
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  slot0(): MethodConstantReturnContext<Slot0Response>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tickLower Type: int24, Indexed: false
   * @param tickUpper Type: int24, Indexed: false
   */
  snapshotCumulativesInside(
    tickLower: string | number,
    tickUpper: string | number
  ): MethodConstantReturnContext<SnapshotCumulativesInsideResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param recipient Type: address, Indexed: false
   * @param zeroForOne Type: bool, Indexed: false
   * @param amountSpecified Type: int256, Indexed: false
   * @param sqrtPriceLimitX96 Type: uint160, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  swap(
    recipient: string,
    zeroForOne: boolean,
    amountSpecified: string,
    sqrtPriceLimitX96: string,
    data: string | number[]
  ): MethodReturnContext;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: int16, Indexed: false
   */
  tickBitmap(parameter0: string | number): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  tickSpacing(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param parameter0 Type: int24, Indexed: false
   */
  ticks(
    parameter0: string | number
  ): MethodConstantReturnContext<TicksResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  token0(): MethodConstantReturnContext<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  token1(): MethodConstantReturnContext<string>;
}
