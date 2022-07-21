# --- Do not remove these libs ---
from freqtrade.strategy import IStrategy, IntParameter
from typing import Dict, List
from functools import reduce
from pandas import DataFrame

# --------------------------------

import talib.abstract as ta
import freqtrade.vendor.qtpylib.indicators as qtpylib
import pandas_ta as pta


class Scalping001(IStrategy):
    INTERFACE_VERSION = 3

    can_short: bool = False
 
    stoploss = -0.05  # 5% MAX HIT

    minimal_roi = {
      "60": 0.01,
      "30": 0.02,
      "0": 0.04
    }

    process_only_new_candles = True

    use_exit_signal = True
    exit_profit_only = False
    ignore_roi_if_entry_signal = False

    startup_candle_count: int = 25

    order_types = {
      'entry': 'limit',
      'exit': 'limit',
      'stoploss': 'market',
      'stoploss_on_exchange': False
    }

    # Optional order time in force.
    order_time_in_force = {
      'entry': 'gtc',
      'exit': 'gtc'
    }

    # timeframe = '1m'

    buy_long_rsi = IntParameter(low=50, high=80, default=50, space='buy', optimize=True, load=True)
    sell_long_rsi = IntParameter(low=1, high=40, default=30, space='sell', optimize=True, load=True)

    plot_config = {
      'main_plot': {
        # 'tema': {},
        # 'sar': {'color': 'white'},
        'vwma20': {'color': 'orange'},
        'sma15': {'color': 'brown'},
        'sma5': {'color': 'yellow'},
        'rsi14': {'color': 'red'}
      },
      'subplots': {
        # "MACD": {
        #     'macd': {'color': 'blue'},
        # },

      }
    }

    def informative_pairs(self):
        return []

    def populate_indicators(self, dataframe: DataFrame, metadata: dict) -> DataFrame:
        dataframe['rsi14'] = ta.RSI(dataframe, timeperiod=14)
        # dataframe['macd'] = dataframe.ta.macd()
        dataframe['sma15'] = ta.SMA(dataframe, timeperiod=15)
        dataframe['sma5'] = ta.SMA(dataframe, timeperiod=5)
        dataframe['vwma20'] = dataframe.ta.vwma(length=20)
  
        return dataframe

    def populate_buy_trend(self, dataframe: DataFrame, metadata: dict) -> DataFrame:
        dataframe.loc[(
          # (qtpylib.crossed_above(dataframe['sma5'], dataframe['sma15'])) &
          # (dataframe['macd'] > 0 ) &
          (qtpylib.crossed_above(dataframe['vwma20'], dataframe['sma5'])) &
          (dataframe['rsi14'] > 60)
          # (qtpylib.crossed_above(dataframe['rsi14'], self.buy_long_rsi.value))
        ), 'enter_long'] = 1

        return dataframe

    def populate_sell_trend(self, dataframe: DataFrame, metadata: dict) -> DataFrame:
        dataframe.loc[(
          # (qtpylib.crossed_below(dataframe['sma5'], dataframe['sma15'])) &
          # (dataframe['macd'] < 0 ) &
          (qtpylib.crossed_below(dataframe['vwma20'], dataframe['sma5'])) &
          ((dataframe['rsi14'] < 60))
          # (qtpylib.crossed_below(dataframe['rsi14'], self.sell_long_rsi.value))
        ), 'exit_long'] = 1

        return dataframe