import numpy as np
import string
import random
import pandas as pd
import warnings
warnings.filterwarnings('ignore')

main_df = pd.read_csv("water_potability.csv")
df = main_df.copy()