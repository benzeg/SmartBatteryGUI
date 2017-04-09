"""This is main module wich loads data and makes calls to other modules
and runs functions defined therein to do the analysis of the data.
"""

import pandas as pd

# Custom Modules:
from optimize import MinimizeBill, run_optimization
from auxiliary_functions import extract_days

def  main():
    #
    # Loading data into pd.DataFrames
    path_to_demand = '../data/MAC000002_train_weekdays_3.csv'
    demand = pd.read_csv(path_to_demand, parse_dates=True, index_col='Unnamed: 0')
    demand = demand.resample('1H').sum()
    days = extract_days(demand)
    #
    path_to_price = '../data/price_data_London.csv'
    price = pd.read_csv(path_to_price, parse_dates=True, index_col='Unnamed: 0')
    price = price.resample('1H').pad()
    #
    solar = pd.read_csv('../data/Generic Run Results.csv')
    solar.drop('Time stamp', axis=1, inplace=True)
    solar = solar.head(24*len(days))
    solar = pd.DataFrame(solar.values, columns=solar.columns, index=demand.index)
    #
    flat_solar_tariff = 0.04 # UK Pounds
    solar_price = pd.DataFrame([flat_solar_tariff]*len(price), columns=price.columns, index=price.index)
    #
    run_optimization(demand, price)
    #run_optimization(demand, price, solar, solar_price)

if __name__ == '__main__':
    main()
