function GetData() {
    const rawData = `0,Joint Account,727.42,Fairprice,"Transportation, Entertainment, Dining",2022-07-04,Indonesia
    1,Savings,522.91,Uber,"Transportation, Groceries",2022-06-26,Indonesia
    2,Checking,514.06,Google,"Groceries, Dining",2022-09-07,Indonesia
    3,Checking,739.76,Google,"Travel, Dining, General Expenses, Transportation, Entertainment, Groceries",2022-08-15,Japan
    4,Checking,609.8,Uber,"Entertainment, Transportation, Groceries, General Expenses, Dining, Travel",2022-12-13,Japan
    5,Joint Account,814.55,ACME,"Entertainment, Travel",2022-09-08,Indonesia
    6,Joint Account,556.6,Google,"Dining, Travel",2022-11-24,Indonesia
    7,Savings,967.67,Amazon,"Entertainment, Travel, Transportation, Groceries, General Expenses, Dining",2022-09-16,Japan
    8,Joint Account,108.4,Fairprice,Travel,2022-10-02,Australia
    9,Savings,436.01,Grab,"Groceries, Travel, Dining",2022-08-06,Indonesia
    10,Savings,767.2,Grab,"Transportation, Groceries, Travel, Dining, Entertainment",2022-11-27,Singapore
    11,Checking,93.99,Grab,"General Expenses, Entertainment",2022-06-03,Japan
    12,Checking,422.95,Gojek,"General Expenses, Travel, Transportation, Dining, Groceries",2022-06-20,Indonesia
    13,Checking,644.53,Starbucks,Groceries,2022-10-12,Japan
    14,Savings,482.5,Uber,"Entertainment, Groceries, Transportation, Dining, General Expenses",2022-10-12,Australia
    15,Savings,913.2,ACME,Travel,2022-12-11,Australia
    16,Joint Account,770.21,Google,"Transportation, General Expenses",2022-07-10,Japan
    17,Joint Account,393.28,Gojek,Dining,2022-10-29,Indonesia
    18,Joint Account,327.32,Amazon,"General Expenses, Dining, Entertainment, Groceries",2022-06-21,Indonesia
    19,Checking,996.26,Google,"Entertainment, Travel, Transportation, General Expenses",2022-11-19,Japan
    20,Savings,543.59,Gojek,"General Expenses, Transportation",2022-11-28,Australia
    21,Checking,624.53,Google,"Dining, Travel, Transportation, General Expenses",2022-08-14,Indonesia
    22,Savings,773.46,Google,Transportation,2022-12-24,Australia
    23,Savings,835.21,Fairprice,"Entertainment, Travel, Groceries",2022-11-08,Indonesia
    24,Checking,520.37,ACME,"Groceries, Travel",2022-08-23,Australia
    25,Savings,303.38,Uber,"Travel, Transportation, Entertainment, General Expenses",2022-07-22,Indonesia
    26,Joint Account,210.71,Gojek,"Entertainment, Dining, Groceries, General Expenses",2022-10-24,Singapore
    27,Joint Account,358.35,Google,"Travel, Transportation, Entertainment, Groceries",2022-06-23,Singapore
    28,Joint Account,626.07,Walmart,"Dining, Groceries",2022-10-23,Indonesia
    29,Savings,528.92,Grab,"Dining, Groceries",2022-11-13,Australia
    30,Checking,785.5,ACME,"Transportation, Travel",2022-10-07,Australia
    31,Joint Account,350.89,Starbucks,"Transportation, Travel",2022-08-02,Singapore
    32,Checking,448.21,ACME,"Transportation, General Expenses, Entertainment",2022-07-03,Australia
    33,Joint Account,956.74,Amazon,General Expenses,2022-10-08,Indonesia
    34,Joint Account,65.54,Gojek,"Groceries, General Expenses, Travel, Dining, Transportation",2022-08-07,Singapore
    35,Savings,602.37,Starbucks,"Dining, General Expenses, Travel, Entertainment, Transportation, Groceries",2022-06-03,Australia
    36,Checking,298.9,Gojek,"Entertainment, General Expenses, Transportation, Travel",2022-11-17,Australia
    37,Savings,164.52,Gojek,"Transportation, Travel, Groceries, Entertainment",2022-11-04,Indonesia
    38,Checking,686.05,ACME,"Travel, Transportation, Entertainment, Groceries, General Expenses",2022-12-10,Australia
    39,Checking,645.43,Amazon,Transportation,2022-12-24,Australia
    40,Joint Account,132.46,Grab,"Entertainment, Dining, Travel",2022-07-23,Indonesia
    41,Savings,715.26,Amazon,"Entertainment, General Expenses, Transportation, Dining",2022-06-29,Indonesia
    42,Savings,625.66,Walmart,"Dining, Groceries, Transportation, General Expenses, Travel",2022-06-14,Australia
    43,Checking,188.14,Grab,"Groceries, General Expenses, Dining, Entertainment, Travel, Transportation",2022-08-13,Australia
    44,Savings,833.01,Amazon,"Dining, Travel, Entertainment, Groceries, General Expenses, Transportation",2022-09-10,Australia
    45,Savings,101.62,Amazon,"General Expenses, Travel, Groceries",2022-07-24,Japan
    46,Savings,248.26,ACME,"Groceries, Dining, Transportation, Entertainment",2022-08-13,Singapore
    47,Checking,950.2,Walmart,"Groceries, General Expenses, Dining, Travel",2022-07-22,Singapore
    48,Checking,624.21,ACME,Dining,2022-06-24,Japan
    49,Joint Account,985.72,Fairprice,"Entertainment, Transportation, Groceries, General Expenses, Travel",2022-12-09,Singapore
    50,Checking,37.2,Fairprice,"Groceries, Dining, Travel, Entertainment",2022-10-20,Australia
    51,Checking,874.59,Amazon,"Dining, Travel, General Expenses, Transportation, Groceries, Entertainment",2022-10-23,Singapore
    52,Checking,452.02,Gojek,"General Expenses, Groceries, Entertainment, Transportation",2022-07-25,Japan
    53,Joint Account,840.86,Amazon,"Transportation, Travel, Groceries, General Expenses",2022-09-02,Singapore
    54,Joint Account,3.73,ACME,"Transportation, Travel, Entertainment, Dining, General Expenses",2022-09-07,Japan
    55,Savings,210.41,Starbucks,"Groceries, Travel",2022-08-22,Singapore
    56,Savings,681.69,Amazon,"Travel, Dining, Groceries",2022-12-16,Singapore
    57,Joint Account,45.68,Starbucks,"Entertainment, Transportation, Travel, Dining",2022-11-14,Australia
    58,Checking,314.29,Uber,"Dining, Groceries, Transportation, Entertainment, General Expenses, Travel",2022-10-22,Australia
    59,Savings,145.55,Uber,"General Expenses, Transportation, Groceries",2022-09-16,Japan
    60,Checking,963.65,Uber,"General Expenses, Groceries",2022-12-05,Indonesia
    61,Joint Account,767.07,Uber,"General Expenses, Entertainment",2022-10-28,Japan
    62,Savings,772.1,Amazon,"Groceries, General Expenses, Travel, Dining",2022-12-14,Japan
    63,Savings,249.27,Google,"Entertainment, Groceries, General Expenses, Travel, Transportation, Dining",2022-09-26,Singapore
    64,Savings,836.48,Google,"Transportation, Groceries",2022-06-05,Japan
    65,Joint Account,402.45,Amazon,"Dining, General Expenses, Entertainment, Groceries, Travel, Transportation",2022-06-03,Australia
    66,Savings,642.76,Grab,"Transportation, General Expenses, Entertainment, Groceries",2022-12-01,Indonesia
    67,Checking,116.92,Grab,"General Expenses, Entertainment, Dining, Transportation, Travel",2022-10-09,Indonesia
    68,Savings,939.01,Fairprice,Travel,2022-12-06,Indonesia
    69,Savings,167.71,Grab,"Entertainment, General Expenses, Groceries, Dining, Travel, Transportation",2022-11-20,Singapore
    70,Joint Account,963.85,Uber,"Entertainment, Dining, Transportation, Groceries, Travel",2022-11-29,Indonesia
    71,Savings,961.2,Fairprice,"Transportation, Groceries",2022-12-26,Indonesia
    72,Savings,982.54,Walmart,"Travel, Dining, Groceries",2022-07-04,Australia
    73,Joint Account,494.78,Amazon,"General Expenses, Entertainment, Transportation, Travel, Dining",2022-11-03,Indonesia
    74,Checking,163.74,Grab,"Travel, Entertainment, General Expenses, Dining",2022-10-26,Japan
    75,Joint Account,82.06,Fairprice,"Transportation, Travel, Dining, Groceries, General Expenses",2022-11-21,Indonesia
    76,Checking,695.9,Starbucks,"Dining, Travel",2022-12-02,Indonesia
    77,Savings,911.45,Grab,Dining,2022-08-17,Singapore
    78,Checking,70.49,Uber,"Entertainment, Travel, Dining, General Expenses, Transportation",2022-11-28,Japan
    79,Checking,774.56,Amazon,"Groceries, Dining, Entertainment, Transportation",2022-08-06,Japan
    80,Joint Account,662.06,Starbucks,"Entertainment, Groceries, Travel, Transportation, Dining",2022-11-19,Japan
    81,Checking,623.51,Walmart,"Groceries, Travel, Entertainment, Transportation",2022-08-04,Indonesia
    82,Checking,452.11,Grab,"General Expenses, Dining, Travel, Entertainment",2022-12-07,Singapore
    83,Checking,522.24,Fairprice,"General Expenses, Travel",2022-12-27,Singapore
    84,Checking,245.91,Uber,Groceries,2022-10-07,Australia
    85,Checking,980.53,Fairprice,"General Expenses, Dining",2022-12-24,Japan
    86,Joint Account,557.21,Grab,"General Expenses, Groceries",2022-11-07,Singapore
    87,Joint Account,810.91,Starbucks,"General Expenses, Entertainment, Groceries, Travel, Dining, Transportation",2022-08-02,Singapore
    88,Checking,663.97,Gojek,"General Expenses, Dining, Groceries",2022-09-21,Australia
    89,Savings,523.64,Starbucks,Travel,2022-09-13,Japan
    90,Savings,725.9,Walmart,"Groceries, Dining, Travel, General Expenses, Transportation",2022-08-18,Japan
    91,Joint Account,976.79,Walmart,"Transportation, Entertainment, Dining, Travel, Groceries, General Expenses",2022-09-03,Japan
    92,Savings,637.75,Grab,"Dining, Transportation",2022-09-14,Australia
    93,Checking,268.15,Grab,"Transportation, Dining, General Expenses, Travel, Groceries",2022-09-30,Australia
    94,Joint Account,282.72,Walmart,"General Expenses, Entertainment, Transportation",2022-08-13,Australia
    95,Joint Account,396.41,Fairprice,"Travel, Transportation, Dining, Groceries",2022-12-26,Singapore
    96,Checking,128.36,Walmart,"General Expenses, Dining, Groceries, Travel",2022-06-27,Japan
    97,Joint Account,810.67,Google,"Entertainment, Dining",2022-12-20,Australia
    98,Savings,744.83,Uber,"Dining, Entertainment, Groceries, General Expenses, Travel, Transportation",2022-12-29,Japan
    99,Joint Account,727.05,Gojek,"Transportation, Groceries, Dining, General Expenses, Entertainment",2022-07-19,Indonesia
    100,Joint Account,976.75,Walmart,"Groceries, Entertainment, Dining, General Expenses",2022-09-08,Australia
    101,Joint Account,778.47,Gojek,"Transportation, Dining, Entertainment, General Expenses, Travel",2022-07-04,Japan
    102,Checking,967.19,Google,"Dining, Travel, Transportation",2022-09-12,Australia
    103,Savings,489.71,Gojek,"Dining, Travel, Entertainment, General Expenses",2022-06-23,Australia
    104,Checking,601.17,ACME,Entertainment,2022-06-18,Japan
    105,Joint Account,933.54,Grab,Travel,2022-11-06,Japan
    106,Joint Account,236.39,ACME,"Dining, Transportation, Groceries, General Expenses, Travel, Entertainment",2022-10-30,Indonesia
    107,Checking,593.34,Amazon,Dining,2022-09-10,Japan
    108,Joint Account,69.46,Google,"Groceries, Travel",2022-11-29,Australia
    109,Savings,728.41,Grab,"Travel, General Expenses, Dining, Groceries, Transportation, Entertainment",2022-08-26,Indonesia
    110,Savings,167.55,Amazon,"Entertainment, General Expenses, Groceries, Transportation",2022-12-11,Australia
    111,Joint Account,388.89,Gojek,"Groceries, Entertainment",2022-07-03,Singapore
    112,Savings,158.76,Amazon,"Transportation, Entertainment, Dining, General Expenses, Groceries",2022-11-13,Singapore
    113,Checking,573.96,Amazon,"Entertainment, Groceries, Transportation, Travel, General Expenses",2022-08-29,Japan
    114,Joint Account,776.87,Starbucks,"Dining, Groceries, Transportation",2022-08-26,Japan
    115,Checking,456.67,Starbucks,"Entertainment, Dining, General Expenses, Transportation, Travel",2022-06-23,Australia
    116,Savings,442.19,Uber,"Travel, Entertainment, Transportation, Groceries, General Expenses",2022-09-02,Japan
    117,Checking,580.56,ACME,"Entertainment, Groceries, Travel, General Expenses",2022-11-02,Singapore
    118,Savings,129.55,Walmart,"Dining, Groceries, General Expenses",2022-08-21,Japan
    119,Checking,759.59,Grab,"Entertainment, General Expenses, Groceries",2022-12-13,Japan
    120,Checking,603.13,Grab,"Entertainment, General Expenses, Dining",2022-07-26,Singapore
    121,Joint Account,728.46,Grab,"Dining, Groceries, Transportation",2022-11-26,Japan
    122,Savings,229.61,Walmart,"General Expenses, Groceries, Travel, Dining, Transportation, Entertainment",2022-06-24,Singapore
    123,Joint Account,731.57,Google,"General Expenses, Transportation, Travel, Dining",2022-10-23,Australia
    124,Joint Account,688.62,Amazon,"Dining, General Expenses, Travel, Entertainment, Transportation, Groceries",2022-10-26,Japan
    125,Joint Account,63.11,Amazon,"Transportation, Entertainment, Travel",2022-09-30,Indonesia
    126,Savings,416.87,Gojek,"General Expenses, Travel, Entertainment, Dining",2022-12-17,Singapore
    127,Joint Account,699.59,ACME,"Groceries, Transportation, Travel",2022-06-21,Japan
    128,Joint Account,23.15,Uber,"Groceries, Entertainment",2022-07-06,Australia
    129,Checking,534.62,Uber,"Groceries, Entertainment, Dining, Transportation",2022-11-11,Japan
    130,Checking,269.53,Gojek,"Transportation, Travel, Dining, Entertainment, General Expenses",2022-12-12,Singapore
    131,Checking,474.94,Uber,"General Expenses, Groceries",2022-11-19,Australia
    132,Checking,507.32,Amazon,"Transportation, Travel, Entertainment, General Expenses, Dining, Groceries",2022-12-01,Japan
    133,Joint Account,867.97,Walmart,"Groceries, Travel",2022-06-07,Singapore
    134,Savings,211.38,ACME,"General Expenses, Entertainment",2022-12-02,Indonesia
    135,Joint Account,224.46,Gojek,"Transportation, Entertainment, Dining, Groceries, General Expenses",2022-07-11,Indonesia
    136,Savings,704.15,Starbucks,"Travel, Transportation, Entertainment, Groceries",2022-11-03,Japan
    137,Checking,123.79,Amazon,"Transportation, General Expenses, Dining, Groceries, Entertainment, Travel",2022-06-30,Indonesia
    138,Checking,424.84,ACME,"Entertainment, Transportation, General Expenses",2022-10-12,Japan
    139,Savings,2.31,Walmart,Transportation,2022-09-19,Indonesia
    140,Savings,54.32,Walmart,"Transportation, Groceries, Travel, General Expenses",2022-07-20,Australia
    141,Savings,664.25,Google,"General Expenses, Dining, Transportation, Groceries, Travel",2022-09-07,Singapore
    142,Checking,713.04,Gojek,"Groceries, Entertainment, Travel",2022-07-06,Indonesia
    143,Savings,485.16,Starbucks,"Transportation, General Expenses, Groceries, Dining, Travel",2022-08-30,Japan
    144,Savings,285.95,Starbucks,"Groceries, Entertainment, General Expenses, Transportation",2022-09-02,Indonesia
    145,Checking,716.82,Walmart,"Transportation, Travel, Groceries, Dining, Entertainment, General Expenses",2022-07-11,Japan
    146,Savings,576.05,Gojek,Transportation,2022-11-03,Indonesia
    147,Savings,258.76,Fairprice,"Transportation, Travel, General Expenses, Dining",2022-12-21,Indonesia
    148,Joint Account,86.25,Grab,"General Expenses, Entertainment, Transportation, Groceries",2022-09-27,Singapore
    149,Checking,17.24,Walmart,"Groceries, Entertainment, Transportation, Travel",2022-08-12,Japan
    150,Joint Account,973.26,Uber,"Transportation, General Expenses, Dining",2022-06-16,Japan
    151,Savings,426.63,ACME,General Expenses,2022-09-04,Singapore
    152,Joint Account,540.64,Amazon,"Travel, Groceries",2022-07-04,Singapore
    153,Savings,57.54,Fairprice,"General Expenses, Entertainment, Transportation, Groceries, Dining",2022-07-10,Indonesia
    154,Savings,450.38,ACME,Transportation,2022-12-12,Japan
    155,Checking,849.1,Starbucks,Entertainment,2022-11-21,Australia
    156,Joint Account,691.89,Fairprice,Entertainment,2022-11-13,Australia
    157,Checking,310.97,Fairprice,"Transportation, Entertainment, Groceries",2022-07-15,Australia
    158,Joint Account,750.56,Amazon,"Travel, Transportation, Dining, Entertainment, General Expenses",2022-10-15,Singapore
    159,Savings,672.22,Starbucks,"Dining, Transportation, Travel, General Expenses, Groceries",2022-09-07,Japan
    160,Checking,568.7,Fairprice,Entertainment,2022-12-25,Singapore
    161,Savings,293.1,Fairprice,Dining,2022-08-28,Indonesia
    162,Joint Account,792.95,Walmart,"Transportation, General Expenses, Dining",2022-11-30,Japan
    163,Joint Account,507.66,Google,General Expenses,2022-06-08,Indonesia
    164,Savings,949.6,Amazon,"General Expenses, Transportation, Entertainment, Dining",2022-10-29,Indonesia
    165,Joint Account,622.43,Walmart,"Transportation, Travel, Groceries, Dining, Entertainment",2022-10-26,Indonesia
    166,Checking,432.52,Gojek,"Entertainment, Travel",2022-06-17,Singapore
    167,Joint Account,83.34,Gojek,"Entertainment, Transportation, Groceries, General Expenses, Travel",2022-07-26,Japan
    168,Savings,558.19,Walmart,"Groceries, General Expenses",2022-09-27,Indonesia
    169,Joint Account,924.12,Amazon,"Travel, General Expenses, Groceries, Transportation, Entertainment, Dining",2022-11-28,Japan
    170,Savings,155.77,ACME,"Entertainment, Dining, Transportation, General Expenses, Travel, Groceries",2022-09-23,Australia
    171,Checking,852.26,Amazon,"Travel, Dining, Groceries",2022-12-01,Singapore
    172,Joint Account,867.73,Gojek,"Transportation, Groceries",2022-11-20,Singapore
    173,Joint Account,999.64,Uber,"Dining, Travel, General Expenses",2022-08-23,Japan
    174,Joint Account,929.85,Google,"Entertainment, Groceries",2022-09-08,Australia
    175,Joint Account,876.92,Amazon,"Entertainment, Transportation, Groceries, General Expenses, Travel, Dining",2022-08-11,Indonesia
    176,Savings,394.92,Starbucks,"Transportation, Entertainment, Groceries, General Expenses, Dining, Travel",2022-11-15,Japan
    177,Checking,840.68,Grab,"Dining, Travel, Entertainment, Transportation, Groceries",2022-09-18,Singapore
    178,Joint Account,356.2,Gojek,"Entertainment, Dining, Transportation, Travel, Groceries",2022-06-02,Japan
    179,Savings,50.83,Walmart,"Travel, Entertainment",2022-12-16,Australia
    180,Checking,865.95,Starbucks,Travel,2022-06-24,Singapore
    181,Joint Account,256.22,Google,"Transportation, General Expenses",2022-06-15,Singapore
    182,Savings,354.95,Starbucks,"Dining, General Expenses, Entertainment, Groceries, Transportation, Travel",2022-10-02,Singapore
    183,Checking,103.09,Walmart,"Travel, Entertainment, Dining, Groceries",2022-09-01,Australia
    184,Savings,147.1,Fairprice,"Travel, General Expenses",2022-06-23,Indonesia
    185,Checking,718.77,Walmart,"Groceries, General Expenses, Entertainment",2022-10-27,Japan
    186,Checking,819.08,Amazon,General Expenses,2022-08-11,Indonesia
    187,Checking,821.71,Walmart,"Travel, General Expenses, Groceries, Transportation",2022-11-16,Australia
    188,Joint Account,543.93,Google,Dining,2022-07-06,Australia
    189,Savings,335.55,Gojek,"Dining, General Expenses, Transportation, Travel, Groceries, Entertainment",2022-12-27,Singapore
    190,Joint Account,848.65,Starbucks,"Groceries, Transportation, Dining, Entertainment",2022-07-22,Indonesia
    191,Savings,559.53,Google,"Entertainment, Dining, Transportation, General Expenses",2022-11-08,Japan
    192,Checking,582.52,Starbucks,"Transportation, Dining, General Expenses",2022-07-02,Indonesia
    193,Joint Account,499.5,Starbucks,General Expenses,2022-07-01,Indonesia
    194,Savings,953.62,Gojek,"Transportation, Dining, Travel, General Expenses, Entertainment, Groceries",2022-11-08,Australia
    195,Savings,459.08,Grab,"Groceries, Dining, General Expenses",2022-09-29,Japan
    196,Checking,166.06,Uber,"Transportation, General Expenses",2022-09-19,Singapore
    197,Savings,330.79,Google,"Groceries, General Expenses, Transportation",2022-08-30,Australia
    198,Joint Account,152.85,Uber,"General Expenses, Dining, Transportation, Entertainment, Travel",2022-08-13,Singapore
    199,Savings,331.12,Grab,"Travel, General Expenses, Entertainment, Dining, Groceries, Transportation",2022-09-26,Singapore
    200,Joint Account,447.82,Starbucks,"General Expenses, Groceries, Transportation",2022-07-04,Indonesia
    201,Joint Account,170.21,Walmart,"General Expenses, Dining",2022-12-30,Singapore
    202,Checking,625.39,Uber,"Dining, Entertainment",2022-10-27,Japan
    203,Checking,12.05,Starbucks,Groceries,2022-07-25,Indonesia
    204,Joint Account,34.66,Gojek,"Travel, Transportation, Entertainment, Groceries, General Expenses",2022-11-26,Japan
    205,Joint Account,779.57,ACME,"Entertainment, Transportation, Travel, Groceries",2022-10-22,Australia
    206,Savings,199.75,Walmart,"Transportation, Dining",2022-08-25,Australia
    207,Checking,233.03,Starbucks,"Groceries, Travel, General Expenses, Entertainment",2022-07-09,Australia
    208,Checking,571.41,Walmart,General Expenses,2022-10-20,Australia
    209,Savings,726.57,Amazon,Travel,2022-09-25,Australia
    210,Checking,2.06,Gojek,"Entertainment, Travel, Dining, General Expenses, Groceries",2022-10-09,Singapore
    211,Joint Account,214.23,Starbucks,"Entertainment, General Expenses, Transportation",2022-09-12,Singapore
    212,Savings,989.91,ACME,Entertainment,2022-10-11,Japan
    213,Savings,322.9,Grab,"Travel, Dining",2022-07-02,Japan
    214,Checking,560.37,ACME,"Travel, Entertainment, General Expenses, Groceries, Dining",2022-06-21,Indonesia
    215,Savings,102.03,Gojek,"General Expenses, Groceries, Travel",2022-06-21,Australia
    216,Checking,211.55,Uber,"Transportation, Groceries, General Expenses, Dining, Travel",2022-08-16,Singapore
    217,Joint Account,465.04,Uber,"General Expenses, Travel",2022-11-11,Indonesia
    218,Joint Account,587.25,Grab,"Transportation, Travel",2022-12-17,Indonesia
    219,Checking,646.64,Google,"Dining, Groceries, Entertainment, Travel, General Expenses, Transportation",2022-06-21,Indonesia
    220,Checking,616.68,ACME,"Dining, Groceries",2022-06-02,Japan
    221,Savings,457.99,Google,Transportation,2022-07-21,Japan
    222,Savings,441.33,Walmart,"Dining, Groceries, Entertainment, Travel",2022-06-29,Australia
    223,Savings,472.63,Amazon,Groceries,2022-06-18,Indonesia
    224,Savings,460.33,Grab,"Groceries, Transportation, General Expenses",2022-08-23,Australia
    225,Joint Account,103.85,Starbucks,"Groceries, General Expenses, Dining, Travel, Transportation, Entertainment",2022-06-26,Singapore
    226,Checking,698.86,Amazon,"Entertainment, Travel, Groceries, Dining, Transportation, General Expenses",2022-12-09,Indonesia
    227,Savings,920.01,Uber,"Groceries, Travel, Transportation, Entertainment, General Expenses",2022-10-20,Singapore
    228,Savings,278.08,Grab,"Travel, Groceries, General Expenses, Transportation, Entertainment",2022-11-21,Indonesia
    229,Savings,125.56,Google,Dining,2022-12-30,Singapore
    230,Joint Account,226.28,Starbucks,"Groceries, Transportation, Dining, Travel",2022-08-16,Australia
    231,Checking,542.41,Grab,"Transportation, Groceries, General Expenses, Travel, Dining",2022-06-08,Australia
    232,Joint Account,643.43,ACME,Entertainment,2022-08-03,Australia
    233,Savings,159.64,Google,"Dining, General Expenses, Groceries, Transportation",2022-12-23,Indonesia
    234,Checking,918.6,Uber,"Transportation, Groceries, Entertainment",2022-10-31,Australia
    235,Checking,798.75,Gojek,"Transportation, General Expenses, Groceries, Travel, Entertainment, Dining",2022-10-03,Indonesia
    236,Checking,895.2,Amazon,"General Expenses, Entertainment, Transportation, Dining, Groceries, Travel",2022-10-07,Indonesia
    237,Savings,342.72,Gojek,"Dining, Groceries, Transportation, General Expenses, Travel, Entertainment",2022-08-17,Australia
    238,Checking,526.45,Gojek,"Entertainment, General Expenses, Dining, Transportation, Groceries",2022-06-11,Singapore
    239,Joint Account,551.23,Starbucks,"Transportation, Travel, Entertainment",2022-07-14,Indonesia
    240,Checking,714.4,Uber,"Dining, Entertainment, General Expenses, Transportation, Groceries",2022-11-21,Singapore
    241,Joint Account,214.01,Amazon,"Entertainment, General Expenses, Groceries, Transportation, Dining, Travel",2022-12-13,Australia
    242,Checking,299.87,Fairprice,"Dining, Travel, Transportation, General Expenses, Groceries, Entertainment",2022-10-02,Japan
    243,Checking,290.88,Uber,Transportation,2022-10-08,Japan
    244,Joint Account,92.28,Walmart,Entertainment,2022-06-21,Singapore
    245,Savings,489.12,Starbucks,"Travel, General Expenses, Groceries, Transportation",2022-12-05,Japan
    246,Savings,336.47,Fairprice,"Dining, Travel",2022-06-30,Singapore
    247,Joint Account,219.1,Amazon,"Groceries, Entertainment",2022-06-24,Japan
    248,Savings,383.43,Grab,"Dining, General Expenses, Transportation",2022-08-16,Australia
    249,Checking,170.05,Uber,"Dining, General Expenses, Groceries, Entertainment",2022-09-11,Japan
    250,Savings,57.91,ACME,"General Expenses, Travel, Transportation",2022-06-04,Singapore
    251,Joint Account,882.24,Walmart,"Entertainment, Groceries, General Expenses, Transportation",2022-07-31,Japan
    252,Checking,863.08,Grab,"Entertainment, Dining, Travel",2022-12-13,Japan
    253,Joint Account,439.9,Gojek,"Transportation, General Expenses",2022-07-22,Indonesia
    254,Checking,355.44,Fairprice,"Travel, Transportation, Entertainment, General Expenses, Dining",2022-09-23,Australia
    255,Joint Account,58.03,Grab,"Travel, Entertainment, Transportation, Dining, Groceries",2022-07-06,Indonesia
    256,Checking,545.96,Uber,"Dining, Travel",2022-10-21,Australia
    257,Savings,12.17,Google,Travel,2022-08-07,Singapore
    258,Savings,575.88,Uber,"Transportation, Dining, Entertainment",2022-06-24,Indonesia
    259,Joint Account,652.53,Gojek,"Dining, Groceries, Travel, General Expenses, Entertainment",2022-11-25,Singapore
    260,Joint Account,90.25,ACME,"Entertainment, Dining, Groceries, General Expenses",2022-07-29,Singapore
    261,Savings,540.72,Amazon,"Transportation, Groceries, Dining, Travel, General Expenses, Entertainment",2022-10-24,Australia
    262,Savings,879.67,Fairprice,General Expenses,2022-10-01,Australia
    263,Joint Account,858.49,Grab,Transportation,2022-07-07,Indonesia
    264,Joint Account,900.45,Uber,"Dining, Travel, Groceries, Entertainment, General Expenses, Transportation",2022-08-28,Australia
    265,Checking,718.24,Uber,"Groceries, Entertainment, Travel, General Expenses, Transportation, Dining",2022-07-04,Japan
    266,Checking,869.37,Uber,"Entertainment, Dining, Travel, Groceries",2022-07-11,Japan
    267,Joint Account,353.75,ACME,"General Expenses, Groceries",2022-07-09,Indonesia
    268,Joint Account,271.26,Fairprice,"Groceries, Dining, Entertainment",2022-12-08,Indonesia
    269,Checking,694.16,Uber,"Travel, Entertainment, Dining, General Expenses",2022-12-04,Japan
    270,Savings,112.5,ACME,"Dining, Groceries, General Expenses, Entertainment, Travel, Transportation",2022-07-20,Indonesia
    271,Savings,434.67,ACME,"Entertainment, Dining, Groceries, Travel, General Expenses, Transportation",2022-08-08,Japan
    272,Joint Account,661.43,Amazon,"Dining, Entertainment, Groceries, Transportation, Travel, General Expenses",2022-07-01,Singapore
    273,Joint Account,728.53,Grab,Groceries,2022-11-10,Japan
    274,Joint Account,274.28,Fairprice,"Entertainment, Transportation, Groceries, Dining, Travel, General Expenses",2022-09-19,Japan
    275,Joint Account,258.87,Grab,"Dining, Entertainment, Groceries, General Expenses",2022-10-26,Indonesia
    276,Checking,178.18,Amazon,"Dining, Groceries, Transportation, General Expenses",2022-11-21,Australia
    277,Savings,543.66,Walmart,"Groceries, Entertainment",2022-12-06,Indonesia
    278,Joint Account,915.12,ACME,Groceries,2022-09-27,Australia
    279,Joint Account,544.47,Starbucks,"General Expenses, Dining, Groceries",2022-11-02,Japan
    280,Checking,119.63,Google,"Dining, Travel, General Expenses, Groceries, Transportation, Entertainment",2022-11-19,Singapore
    281,Joint Account,661.49,Walmart,"Transportation, Entertainment, Dining",2022-08-29,Singapore
    282,Checking,227.88,Starbucks,"Dining, General Expenses, Transportation, Entertainment, Groceries",2022-12-24,Singapore
    283,Savings,101.03,Uber,"Dining, General Expenses, Transportation",2022-12-26,Singapore
    284,Savings,902.75,ACME,"Dining, Groceries, Transportation, General Expenses",2022-11-19,Singapore
    285,Joint Account,962.4,Grab,"Dining, Groceries, Travel",2022-07-17,Australia
    286,Joint Account,291.22,Fairprice,"Transportation, Groceries, General Expenses",2022-06-09,Singapore
    287,Checking,970.18,Grab,"Entertainment, Dining, General Expenses, Travel, Groceries",2022-11-04,Australia
    288,Checking,941.16,Walmart,"Groceries, Entertainment, Travel, Transportation, Dining",2022-07-15,Australia
    289,Savings,104.19,Grab,"General Expenses, Groceries, Dining",2022-06-01,Singapore
    290,Checking,743.62,Uber,"Groceries, General Expenses, Entertainment, Dining, Transportation",2022-08-15,Indonesia
    291,Joint Account,403.25,Fairprice,"Travel, General Expenses, Transportation, Groceries",2022-10-25,Australia
    292,Checking,339.35,Uber,Transportation,2022-06-23,Indonesia
    293,Checking,792.49,Walmart,"Entertainment, Groceries, General Expenses",2022-10-24,Singapore
    294,Checking,228.24,Fairprice,"Transportation, Groceries, Entertainment, Dining",2022-12-23,Singapore
    295,Savings,872.88,Google,"General Expenses, Entertainment, Dining, Transportation, Travel, Groceries",2022-12-04,Australia
    296,Checking,479.09,ACME,"Entertainment, Travel, Dining",2022-12-22,Indonesia
    297,Joint Account,487.03,Starbucks,"Dining, Travel, Transportation",2022-12-14,Japan
    298,Savings,24.58,Amazon,"Transportation, Groceries",2022-09-30,Australia
    299,Savings,3.72,Google,"Entertainment, Transportation, Groceries",2022-11-16,Indonesia
    300,Checking,687.17,Uber,"Dining, Groceries, General Expenses, Travel, Transportation",2022-09-28,Australia
    301,Joint Account,694.63,Grab,"Dining, Entertainment, Travel, Transportation",2022-12-28,Indonesia
    302,Savings,926.98,Gojek,"Transportation, Entertainment",2022-09-11,Japan
    303,Joint Account,40.18,Google,"General Expenses, Travel",2022-11-24,Australia
    304,Checking,376.95,Starbucks,"Entertainment, Dining, Travel",2022-07-12,Indonesia
    305,Savings,135.84,Starbucks,"Entertainment, General Expenses, Transportation",2022-09-24,Australia
    306,Joint Account,981.1,Fairprice,"Dining, Groceries, General Expenses, Entertainment, Transportation",2022-07-29,Australia
    307,Checking,101.18,Gojek,"Transportation, Groceries, General Expenses",2022-11-24,Japan
    308,Checking,719.67,Amazon,"Groceries, General Expenses",2022-09-26,Australia
    309,Checking,486.69,ACME,"Dining, Groceries, Transportation, General Expenses, Entertainment, Travel",2022-09-07,Australia
    310,Checking,4.43,Amazon,Entertainment,2022-09-27,Japan
    311,Checking,738.56,Uber,"Dining, Transportation, Entertainment",2022-09-15,Singapore
    312,Joint Account,869.53,Amazon,"Transportation, Travel",2022-08-15,Indonesia
    313,Joint Account,524.86,Google,"Entertainment, Transportation, Groceries, General Expenses, Dining, Travel",2022-06-13,Japan
    314,Joint Account,293.91,Amazon,"Groceries, General Expenses, Dining",2022-12-20,Australia
    315,Savings,259.31,Google,"Entertainment, Dining, Travel, General Expenses, Transportation, Groceries",2022-09-11,Australia
    316,Joint Account,749.66,ACME,"Travel, Groceries, Entertainment, Dining",2022-11-26,Japan
    317,Checking,604.84,Starbucks,"Dining, Groceries, Entertainment, Transportation, Travel, General Expenses",2022-10-28,Indonesia
    318,Checking,245.66,Gojek,Travel,2022-07-08,Japan
    319,Joint Account,967.19,Starbucks,"Travel, Groceries",2022-09-23,Indonesia
    320,Joint Account,512.2,Starbucks,Transportation,2022-08-10,Japan
    321,Savings,719.46,Walmart,"Groceries, Travel, Dining, Transportation",2022-07-06,Japan
    322,Savings,402.88,Starbucks,Dining,2022-10-08,Indonesia
    323,Joint Account,585.01,Starbucks,"Travel, Entertainment, Dining, Transportation, General Expenses",2022-12-28,Singapore
    324,Joint Account,550.03,Starbucks,"Travel, Transportation, Groceries, Dining",2022-08-03,Australia
    325,Checking,628.32,Fairprice,"Dining, General Expenses, Groceries",2022-12-07,Indonesia
    326,Savings,819.12,Gojek,"Groceries, Transportation",2022-10-02,Singapore
    327,Savings,698.61,Google,"Travel, Dining, General Expenses",2022-08-04,Singapore
    328,Checking,567.8,Gojek,"Transportation, Entertainment, Groceries",2022-10-15,Japan
    329,Savings,224.87,Uber,"Transportation, Travel, Entertainment, Groceries, Dining",2022-07-23,Indonesia
    330,Checking,604.65,Google,"Groceries, Entertainment, Dining, Transportation",2022-12-04,Japan
    331,Savings,73.64,Grab,"Entertainment, General Expenses, Transportation, Travel",2022-10-15,Singapore
    332,Checking,965.89,Uber,"General Expenses, Entertainment, Groceries, Travel, Transportation",2022-08-05,Australia
    333,Savings,835.21,Walmart,"Travel, Groceries, Entertainment, Dining, General Expenses",2022-07-22,Japan
    334,Checking,416.67,Google,"Travel, Groceries, Dining, Transportation",2022-10-18,Australia
    335,Joint Account,622.52,ACME,"Travel, Entertainment, Transportation, Dining",2022-10-11,Japan
    336,Checking,221.2,Amazon,General Expenses,2022-12-28,Singapore
    337,Checking,774.71,Uber,"General Expenses, Transportation",2022-06-11,Australia
    338,Checking,484.53,Amazon,"Transportation, Travel",2022-06-15,Singapore
    339,Savings,515.12,ACME,"General Expenses, Dining, Travel, Transportation",2022-07-23,Australia
    340,Savings,513.23,Gojek,"Transportation, Groceries, Dining, Entertainment, General Expenses",2022-12-03,Indonesia
    341,Joint Account,731.64,Uber,"Entertainment, Dining, Travel",2022-12-12,Singapore
    342,Savings,535.23,Grab,"General Expenses, Entertainment",2022-07-14,Indonesia
    343,Joint Account,273.62,Google,"Dining, Travel",2022-06-22,Australia
    344,Checking,309.3,Grab,"Travel, Entertainment, Groceries",2022-06-16,Japan
    345,Checking,648.44,ACME,General Expenses,2022-11-06,Australia
    346,Joint Account,841.08,Walmart,"General Expenses, Groceries, Travel",2022-12-26,Japan
    347,Checking,75.44,Fairprice,"Groceries, Travel, Transportation, Entertainment",2022-12-09,Singapore
    348,Checking,114.53,Walmart,"Entertainment, Travel, Dining, Groceries, General Expenses",2022-06-09,Singapore
    349,Savings,68.49,ACME,"Travel, Transportation, General Expenses, Entertainment",2022-10-11,Indonesia
    350,Checking,219.67,Walmart,"Travel, Dining, Transportation, Groceries, Entertainment",2022-10-12,Australia
    351,Checking,571.37,Gojek,"Entertainment, General Expenses, Travel",2022-07-28,Indonesia
    352,Checking,118.99,Google,"Travel, Transportation, Entertainment, Groceries, General Expenses, Dining",2022-07-01,Singapore
    353,Checking,90.46,Starbucks,"Entertainment, Dining, Travel, General Expenses, Groceries",2022-09-19,Indonesia
    354,Checking,453.0,Grab,"Dining, General Expenses, Transportation, Entertainment, Travel",2022-07-17,Indonesia
    355,Savings,410.16,Walmart,"Entertainment, Dining, General Expenses, Transportation, Travel, Groceries",2022-06-05,Indonesia
    356,Joint Account,698.96,Starbucks,"General Expenses, Entertainment, Groceries",2022-10-24,Singapore
    357,Joint Account,600.27,Starbucks,"Entertainment, Travel, Groceries",2022-09-08,Indonesia
    358,Savings,995.07,Gojek,"Travel, Dining, Transportation",2022-10-14,Japan
    359,Savings,831.45,ACME,"General Expenses, Travel, Entertainment, Dining, Transportation, Groceries",2022-07-19,Australia
    360,Joint Account,419.88,Gojek,"Transportation, Entertainment, Dining",2022-12-13,Japan
    361,Savings,364.14,Google,"Dining, Travel",2022-12-21,Singapore
    362,Joint Account,168.94,ACME,"Dining, General Expenses, Travel, Transportation",2022-09-04,Indonesia
    363,Joint Account,467.93,Walmart,"General Expenses, Entertainment, Travel",2022-09-25,Singapore
    364,Joint Account,636.36,Google,"Transportation, Dining, General Expenses, Groceries, Entertainment",2022-06-10,Singapore
    365,Joint Account,66.19,Walmart,"Entertainment, Travel, Transportation, General Expenses, Groceries, Dining",2022-11-03,Australia
    366,Savings,745.96,Amazon,"General Expenses, Entertainment, Dining",2022-08-21,Australia
    367,Checking,849.85,Starbucks,"Transportation, Entertainment",2022-07-10,Japan
    368,Checking,767.78,ACME,"Travel, Dining, Groceries, Transportation, General Expenses",2022-12-16,Japan
    369,Checking,837.44,Uber,Dining,2022-09-18,Singapore
    370,Checking,695.58,Google,"General Expenses, Dining, Groceries, Entertainment",2022-10-13,Australia
    371,Checking,334.5,Gojek,"Travel, Groceries, General Expenses, Transportation",2022-08-13,Australia
    372,Savings,575.77,Uber,"Entertainment, Dining",2022-06-11,Japan
    373,Joint Account,939.34,ACME,"Groceries, General Expenses, Dining",2022-07-15,Australia
    374,Joint Account,954.44,Amazon,"Travel, Entertainment",2022-06-04,Australia
    375,Savings,863.26,Grab,"Dining, Transportation",2022-06-28,Australia
    376,Checking,351.56,Starbucks,"Travel, Dining, General Expenses",2022-09-17,Japan
    377,Savings,507.04,ACME,General Expenses,2022-11-27,Australia
    378,Checking,445.49,Grab,"Transportation, Entertainment, Travel, Groceries, Dining",2022-12-03,Indonesia
    379,Savings,165.52,Grab,"Entertainment, Dining, Groceries, General Expenses, Transportation, Travel",2022-07-13,Japan
    380,Joint Account,898.34,Fairprice,Entertainment,2022-08-11,Japan
    381,Joint Account,397.93,Google,"Dining, Groceries, Transportation, General Expenses, Entertainment, Travel",2022-08-02,Indonesia
    382,Savings,136.23,Amazon,"General Expenses, Transportation, Groceries",2022-12-06,Singapore
    383,Joint Account,445.41,ACME,Entertainment,2022-10-11,Singapore
    384,Checking,187.99,Uber,Travel,2022-08-09,Australia
    385,Savings,366.11,Walmart,Groceries,2022-11-09,Australia
    386,Joint Account,658.87,Fairprice,Entertainment,2022-12-29,Japan
    387,Joint Account,716.56,Google,"Travel, Groceries, Dining, General Expenses, Transportation",2022-07-24,Indonesia
    388,Joint Account,444.1,Grab,Dining,2022-06-24,Indonesia
    389,Savings,787.14,Grab,"Entertainment, General Expenses, Travel, Dining",2022-12-26,Singapore
    390,Checking,868.06,Starbucks,"Groceries, Travel",2022-09-17,Japan
    391,Savings,587.43,Uber,"General Expenses, Groceries, Entertainment, Transportation",2022-10-07,Singapore
    392,Checking,509.01,Gojek,"General Expenses, Dining, Groceries, Travel, Transportation",2022-07-16,Japan
    393,Checking,61.25,Amazon,"Entertainment, Dining, Travel, Transportation, Groceries, General Expenses",2022-06-21,Australia
    394,Checking,143.01,Fairprice,"Travel, Groceries, General Expenses, Entertainment, Transportation, Dining",2022-12-22,Singapore
    395,Joint Account,114.49,Grab,Groceries,2022-06-29,Singapore
    396,Savings,291.92,Google,"Travel, Groceries, Entertainment, General Expenses, Dining",2022-09-02,Japan
    397,Savings,514.42,Fairprice,"Groceries, Dining, Travel",2022-10-23,Australia
    398,Joint Account,71.65,Walmart,"Groceries, Entertainment, General Expenses",2022-10-18,Singapore
    399,Savings,15.03,Google,"Transportation, Entertainment",2022-12-01,Australia
    400,Joint Account,655.44,Starbucks,"Transportation, Travel, General Expenses, Groceries, Dining",2022-07-17,Australia
    401,Checking,871.83,Walmart,"Entertainment, Groceries",2022-08-23,Singapore
    402,Joint Account,647.68,Gojek,Dining,2022-07-31,Indonesia
    403,Checking,556.9,Amazon,"Entertainment, Transportation, Groceries, Travel, Dining",2022-12-27,Singapore
    404,Joint Account,614.69,Uber,"Dining, Travel",2022-06-06,Australia
    405,Savings,619.76,Fairprice,"Dining, Entertainment, Groceries",2022-06-23,Indonesia
    406,Checking,259.43,Gojek,"Dining, Groceries, Travel",2022-09-05,Singapore
    407,Savings,90.6,Fairprice,"Transportation, Travel, Dining, General Expenses, Groceries",2022-06-06,Australia
    408,Checking,112.66,Google,"General Expenses, Travel, Entertainment, Transportation",2022-12-09,Australia
    409,Savings,482.33,Amazon,"Groceries, Travel",2022-12-04,Indonesia
    410,Joint Account,247.68,Google,"Entertainment, Travel, Dining, Transportation",2022-08-12,Singapore
    411,Checking,367.61,Amazon,"Groceries, Entertainment, Travel",2022-09-13,Australia
    412,Savings,234.08,Fairprice,Dining,2022-11-15,Japan
    413,Checking,543.3,Uber,"Entertainment, Travel, Dining, Transportation, General Expenses",2022-06-04,Singapore
    414,Joint Account,771.79,Gojek,"Travel, Transportation, Entertainment, Dining, Groceries, General Expenses",2022-08-04,Indonesia
    415,Checking,105.26,Starbucks,"General Expenses, Dining, Groceries, Entertainment",2022-09-27,Indonesia
    416,Checking,298.35,Grab,"General Expenses, Entertainment, Groceries, Transportation, Dining, Travel",2022-10-28,Singapore
    417,Savings,160.28,Starbucks,"General Expenses, Transportation",2022-09-02,Indonesia
    418,Joint Account,382.13,Amazon,"Transportation, Travel, Dining, General Expenses, Entertainment",2022-09-24,Japan
    419,Joint Account,808.24,Uber,"Groceries, General Expenses, Dining, Transportation, Travel, Entertainment",2022-06-13,Indonesia
    420,Checking,443.21,Gojek,Transportation,2022-12-19,Japan
    421,Joint Account,814.08,Walmart,Dining,2022-08-10,Japan
    422,Savings,553.88,Uber,Transportation,2022-07-15,Japan
    423,Checking,337.53,Starbucks,"Travel, Dining, Groceries, General Expenses, Entertainment",2022-12-06,Singapore
    424,Savings,947.34,ACME,"Dining, Transportation, Groceries, Entertainment",2022-08-15,Singapore
    425,Joint Account,572.22,Fairprice,"Transportation, Groceries",2022-12-12,Indonesia
    426,Savings,174.57,Walmart,"Travel, Groceries, Transportation, Entertainment",2022-08-24,Japan
    427,Savings,181.87,Starbucks,"Transportation, Dining, Groceries",2022-10-18,Singapore
    428,Checking,3.56,Amazon,"General Expenses, Transportation, Dining, Travel, Groceries",2022-07-13,Japan
    429,Joint Account,73.44,Walmart,"General Expenses, Entertainment, Dining",2022-10-09,Singapore
    430,Joint Account,298.01,ACME,General Expenses,2022-09-02,Indonesia
    431,Joint Account,428.6,ACME,"General Expenses, Travel, Dining, Groceries",2022-11-20,Indonesia
    432,Joint Account,389.19,Fairprice,"Travel, General Expenses, Groceries, Dining, Transportation",2022-07-29,Australia
    433,Joint Account,168.95,Walmart,"Travel, Groceries, Entertainment, Dining",2022-08-04,Indonesia
    434,Savings,17.57,Grab,"Transportation, Entertainment, Dining, Groceries, General Expenses, Travel",2022-06-09,Australia
    435,Savings,259.73,Uber,"General Expenses, Groceries",2022-06-23,Indonesia
    436,Checking,830.88,Amazon,"Transportation, Dining, Groceries, General Expenses, Entertainment",2022-12-07,Australia
    437,Savings,152.11,Walmart,"Transportation, Groceries, Dining",2022-12-08,Singapore
    438,Checking,999.98,Uber,"Groceries, Travel, Dining",2022-08-16,Japan
    439,Checking,166.24,Google,"General Expenses, Groceries, Transportation, Dining, Entertainment",2022-08-07,Japan
    440,Savings,291.77,Grab,"Travel, Transportation",2022-12-11,Singapore
    441,Checking,876.24,Fairprice,Entertainment,2022-10-10,Indonesia
    442,Savings,74.0,Amazon,"Dining, Entertainment, Groceries, Transportation, General Expenses",2022-07-17,Australia
    443,Checking,191.93,Uber,"Dining, Transportation, Travel",2022-10-14,Japan
    444,Savings,877.86,Fairprice,"Groceries, General Expenses, Transportation, Entertainment",2022-10-19,Indonesia
    445,Checking,38.55,Gojek,Entertainment,2022-11-14,Japan
    446,Checking,38.38,Gojek,"Transportation, General Expenses",2022-10-07,Japan
    447,Checking,717.84,Amazon,"Dining, General Expenses, Entertainment, Transportation",2022-11-29,Singapore
    448,Joint Account,69.04,ACME,"Travel, Entertainment, Dining, Groceries, General Expenses, Transportation",2022-10-28,Japan
    449,Savings,384.15,Gojek,"Travel, Dining, Entertainment, General Expenses",2022-09-10,Japan
    450,Savings,390.72,Grab,"Groceries, General Expenses, Dining, Transportation, Travel, Entertainment",2022-08-06,Singapore
    451,Savings,761.06,Uber,"Entertainment, Transportation, Groceries, General Expenses, Dining",2022-12-16,Indonesia
    452,Joint Account,398.95,Starbucks,"Groceries, Travel",2022-10-24,Australia
    453,Joint Account,92.15,ACME,"Travel, Groceries, General Expenses, Entertainment",2022-08-19,Japan
    454,Checking,720.76,Starbucks,"Travel, General Expenses, Entertainment, Transportation, Dining, Groceries",2022-08-18,Indonesia
    455,Checking,667.62,Google,"Groceries, Dining",2022-08-06,Indonesia
    456,Checking,953.89,Google,"Travel, Groceries, General Expenses, Transportation",2022-07-21,Japan
    457,Joint Account,560.88,Starbucks,"Transportation, Travel, General Expenses, Dining, Entertainment",2022-12-11,Singapore
    458,Joint Account,320.27,Walmart,"Groceries, Travel, Dining, General Expenses, Entertainment, Transportation",2022-06-30,Indonesia
    459,Joint Account,419.43,Walmart,"Groceries, Dining, Travel, Entertainment",2022-06-26,Singapore
    460,Checking,102.83,Gojek,"Entertainment, Travel, Transportation",2022-06-17,Indonesia
    461,Savings,963.09,ACME,"Entertainment, Dining, Travel, Transportation, General Expenses, Groceries",2022-10-18,Japan
    462,Joint Account,40.33,ACME,"Groceries, Travel, Dining, Entertainment, General Expenses, Transportation",2022-08-11,Singapore
    463,Savings,610.12,Uber,General Expenses,2022-07-17,Indonesia
    464,Joint Account,681.41,Fairprice,"Transportation, Travel, Groceries, General Expenses",2022-07-28,Singapore
    465,Joint Account,431.53,Grab,"Groceries, General Expenses, Entertainment, Dining, Travel, Transportation",2022-06-16,Japan
    466,Checking,127.9,Gojek,"Dining, Groceries, Transportation",2022-06-23,Indonesia
    467,Savings,134.88,Grab,"Entertainment, Transportation",2022-12-20,Singapore
    468,Joint Account,363.06,Walmart,"Transportation, Travel, Entertainment",2022-07-02,Indonesia
    469,Checking,793.77,Grab,"Groceries, Travel, General Expenses",2022-07-06,Indonesia
    470,Joint Account,891.27,Gojek,"Dining, Transportation, Entertainment",2022-10-28,Australia
    471,Savings,198.15,Uber,Travel,2022-06-23,Singapore
    472,Checking,908.11,Grab,"Entertainment, General Expenses, Groceries, Dining, Travel",2022-12-02,Japan
    473,Checking,669.65,Gojek,"Entertainment, General Expenses, Travel, Groceries, Transportation",2022-12-15,Singapore
    474,Savings,608.22,Uber,"Groceries, Transportation",2022-09-25,Singapore
    475,Savings,786.25,Grab,"Entertainment, Groceries",2022-06-08,Singapore
    476,Joint Account,496.39,Google,Dining,2022-11-08,Indonesia
    477,Savings,31.95,Gojek,General Expenses,2022-07-15,Singapore
    478,Savings,681.36,Grab,"Travel, Dining, Entertainment",2022-08-26,Australia
    479,Checking,513.88,ACME,"Entertainment, General Expenses, Travel, Transportation, Dining",2022-11-20,Australia
    480,Joint Account,587.36,Google,"Entertainment, General Expenses",2022-08-07,Singapore
    481,Joint Account,976.65,Amazon,"Entertainment, Groceries",2022-07-20,Australia
    482,Savings,625.1,Walmart,"General Expenses, Entertainment, Dining",2022-08-13,Japan
    483,Joint Account,221.61,Google,"Dining, Transportation",2022-12-07,Indonesia
    484,Checking,202.97,Gojek,"Entertainment, Travel, Transportation, General Expenses, Dining",2022-09-22,Japan
    485,Savings,67.53,Google,"Travel, Transportation, General Expenses, Dining, Entertainment",2022-06-03,Indonesia
    486,Joint Account,518.82,Fairprice,"Transportation, Dining",2022-08-10,Singapore
    487,Checking,148.64,Gojek,"Travel, Transportation, Groceries",2022-10-28,Indonesia
    488,Joint Account,919.74,Amazon,General Expenses,2022-07-10,Australia
    489,Savings,976.82,Uber,"Dining, Travel, General Expenses, Groceries",2022-12-23,Australia
    490,Joint Account,208.38,Gojek,"Entertainment, Groceries, Travel, Dining",2022-08-15,Indonesia
    491,Checking,882.48,Gojek,"Entertainment, Travel, Dining, Groceries, General Expenses, Transportation",2022-09-28,Australia
    492,Checking,506.92,Uber,"Dining, Entertainment, General Expenses",2022-08-20,Singapore
    493,Savings,526.83,Google,"Groceries, Travel, Entertainment, Transportation",2022-12-16,Australia
    494,Joint Account,734.9,Gojek,"Transportation, Entertainment",2022-08-05,Japan
    495,Checking,570.8,Google,"Transportation, Entertainment, Groceries, Dining, General Expenses",2022-07-10,Japan
    496,Checking,302.49,Amazon,General Expenses,2022-10-20,Japan
    497,Savings,113.42,ACME,"Groceries, Transportation",2022-06-25,Japan
    498,Checking,684.78,ACME,"Transportation, Dining, Entertainment, Travel",2022-11-09,Japan
    499,Joint Account,886.59,Grab,"General Expenses, Dining, Transportation, Travel, Groceries, Entertainment",2022-11-05,Australia
    500,Joint Account,687.74,Uber,"Dining, General Expenses, Transportation, Travel",2022-08-17,Singapore
    501,Savings,688.97,Uber,"General Expenses, Travel, Transportation, Entertainment, Dining",2022-11-18,Indonesia
    502,Checking,114.0,Grab,"Travel, Transportation, Dining",2022-08-17,Singapore
    503,Savings,865.06,ACME,"Entertainment, General Expenses, Travel, Transportation",2022-10-06,Australia
    504,Savings,308.24,Grab,"Transportation, Entertainment, Groceries, Travel, General Expenses, Dining",2022-11-23,Singapore
    505,Checking,198.22,Starbucks,"Travel, Transportation, Groceries, Dining, General Expenses",2022-12-15,Japan
    506,Checking,860.87,Amazon,"Entertainment, Dining, Travel, General Expenses, Groceries, Transportation",2022-10-17,Australia
    507,Checking,171.09,Starbucks,"Groceries, Travel, Transportation, General Expenses",2022-06-07,Japan
    508,Joint Account,663.76,ACME,"Entertainment, General Expenses, Groceries, Travel, Dining, Transportation",2022-07-03,Indonesia
    509,Savings,925.42,Gojek,"Travel, Transportation, Entertainment, Groceries, Dining, General Expenses",2022-12-09,Japan
    510,Joint Account,776.89,Walmart,"Entertainment, Transportation, General Expenses",2022-06-12,Singapore
    511,Joint Account,330.42,Fairprice,"Entertainment, Dining, General Expenses",2022-06-24,Australia
    512,Joint Account,919.29,Google,"General Expenses, Transportation",2022-11-14,Japan
    513,Joint Account,383.28,Gojek,"Entertainment, General Expenses, Groceries, Travel, Dining, Transportation",2022-09-23,Indonesia
    514,Joint Account,992.89,ACME,"Entertainment, Travel, Dining, General Expenses, Transportation, Groceries",2022-09-23,Singapore
    515,Checking,783.75,Grab,"Groceries, Dining, Entertainment, Travel, General Expenses, Transportation",2022-06-16,Japan
    516,Checking,4.15,Walmart,Entertainment,2022-11-04,Singapore
    517,Savings,747.28,Google,"Entertainment, Transportation",2022-07-22,Japan
    518,Checking,274.21,Fairprice,"Groceries, Dining, Travel, Entertainment, Transportation",2022-10-15,Singapore
    519,Joint Account,148.02,Grab,"Transportation, Entertainment, Dining, Travel",2022-06-13,Japan
    520,Savings,344.18,Gojek,"Transportation, Groceries, Dining, General Expenses",2022-12-26,Japan
    521,Checking,584.36,ACME,"Dining, Groceries, Entertainment, Travel",2022-12-23,Singapore
    522,Joint Account,193.89,Google,"Groceries, Dining, Travel",2022-08-10,Indonesia
    523,Checking,996.91,Amazon,"Groceries, Entertainment, General Expenses, Dining, Travel",2022-08-07,Japan
    524,Joint Account,733.85,Fairprice,"Transportation, Groceries, Travel, General Expenses, Dining",2022-08-23,Singapore
    525,Savings,642.71,Grab,"Travel, Transportation",2022-12-19,Singapore
    526,Checking,534.42,Gojek,"Transportation, Travel, Dining, Groceries",2022-12-03,Japan
    527,Savings,238.94,Google,"Travel, Entertainment, Dining, Transportation, General Expenses",2022-07-30,Singapore
    528,Joint Account,722.06,Uber,Dining,2022-12-14,Japan
    529,Savings,683.9,ACME,"Transportation, General Expenses",2022-06-24,Japan
    530,Checking,109.45,Amazon,"General Expenses, Dining, Travel",2022-06-02,Indonesia
    531,Joint Account,624.42,Walmart,"Transportation, Entertainment, Travel, Groceries, Dining, General Expenses",2022-11-30,Singapore
    532,Savings,427.52,Fairprice,"Dining, Travel, Transportation, Entertainment, Groceries",2022-09-02,Japan
    533,Savings,53.98,Grab,Dining,2022-08-11,Singapore
    534,Joint Account,593.8,Amazon,Entertainment,2022-08-03,Australia
    535,Joint Account,552.94,ACME,"Groceries, Transportation, General Expenses, Entertainment, Dining, Travel",2022-06-16,Indonesia
    536,Joint Account,139.15,Fairprice,"Entertainment, Groceries, Dining, Transportation",2022-08-15,Singapore
    537,Joint Account,370.35,Gojek,Travel,2022-12-26,Indonesia
    538,Savings,102.45,Google,Groceries,2022-07-06,Singapore
    539,Savings,494.31,ACME,"Groceries, Transportation, General Expenses",2022-08-09,Indonesia
    540,Savings,638.45,Google,Travel,2022-08-07,Indonesia
    541,Joint Account,674.0,Fairprice,"Transportation, Dining, Groceries, Travel, General Expenses, Entertainment",2022-06-27,Australia
    542,Joint Account,369.6,Grab,"Travel, Groceries, General Expenses, Transportation, Dining, Entertainment",2022-10-28,Australia
    543,Checking,986.93,Walmart,"Dining, Travel, Entertainment, Groceries, General Expenses",2022-10-21,Australia
    544,Savings,438.6,Amazon,Dining,2022-10-30,Japan
    545,Savings,76.33,Starbucks,Entertainment,2022-06-12,Indonesia
    546,Checking,682.52,Gojek,Dining,2022-06-24,Indonesia
    547,Joint Account,809.8,Google,"Groceries, Dining, Travel, General Expenses",2022-12-05,Indonesia
    548,Savings,396.31,Uber,Groceries,2022-06-06,Singapore
    549,Savings,861.11,Google,"Transportation, Groceries",2022-12-16,Indonesia
    550,Checking,63.61,Starbucks,"Entertainment, Groceries, Transportation",2022-10-03,Indonesia
    551,Joint Account,941.42,Starbucks,"Transportation, General Expenses, Dining",2022-09-01,Indonesia
    552,Savings,716.05,Grab,"General Expenses, Transportation, Dining, Entertainment, Groceries, Travel",2022-08-07,Australia
    553,Savings,468.03,Gojek,"Travel, Groceries, Transportation, Entertainment",2022-10-16,Singapore
    554,Joint Account,361.2,Google,"Transportation, Groceries, Travel",2022-07-10,Australia
    555,Checking,301.06,Amazon,Travel,2022-09-05,Japan
    556,Checking,238.32,Starbucks,"Transportation, Entertainment, Dining",2022-10-12,Indonesia
    557,Savings,665.97,Uber,"Transportation, General Expenses, Dining, Entertainment",2022-10-21,Singapore
    558,Joint Account,651.7,Walmart,"Groceries, Transportation, General Expenses, Entertainment, Dining",2022-10-30,Japan
    559,Checking,925.26,Starbucks,Entertainment,2022-08-10,Singapore
    560,Checking,205.04,Starbucks,Entertainment,2022-07-24,Indonesia
    561,Savings,941.5,ACME,"Transportation, Dining, Entertainment, General Expenses, Groceries",2022-08-11,Indonesia
    562,Joint Account,583.81,Grab,"Dining, Entertainment, Travel, General Expenses",2022-07-02,Japan
    563,Joint Account,765.21,Gojek,"Entertainment, Travel, Transportation, Dining",2022-06-24,Australia
    564,Savings,905.4,Uber,"Dining, Groceries, Entertainment, Travel, General Expenses, Transportation",2022-09-19,Singapore
    565,Joint Account,452.09,Amazon,"Groceries, Travel",2022-06-13,Japan
    566,Checking,164.68,Uber,"Transportation, General Expenses",2022-11-24,Japan
    567,Checking,310.04,Uber,"Groceries, General Expenses",2022-10-21,Singapore
    568,Joint Account,960.47,Fairprice,"General Expenses, Entertainment, Groceries",2022-06-23,Indonesia
    569,Savings,202.8,ACME,"Travel, Entertainment, Transportation, Dining, Groceries, General Expenses",2022-11-24,Australia
    570,Joint Account,46.25,ACME,"Groceries, Transportation, Travel, Dining, General Expenses, Entertainment",2022-12-06,Indonesia
    571,Savings,791.95,Starbucks,"Entertainment, Transportation, Groceries, General Expenses, Travel",2022-08-05,Australia
    572,Checking,169.21,Uber,Groceries,2022-09-04,Japan
    573,Checking,778.62,Grab,"Groceries, Dining, Travel, Transportation",2022-08-03,Singapore
    574,Savings,374.3,ACME,"Entertainment, Transportation, Travel, Dining, General Expenses, Groceries",2022-06-08,Indonesia
    575,Savings,344.89,Grab,"Travel, Entertainment",2022-09-29,Indonesia
    576,Joint Account,39.02,Starbucks,"Entertainment, General Expenses",2022-12-17,Singapore
    577,Joint Account,917.46,Starbucks,"Groceries, Dining, Travel",2022-07-07,Australia
    578,Joint Account,986.78,Gojek,"Travel, Dining, Entertainment",2022-08-23,Indonesia
    579,Savings,238.71,Walmart,"Transportation, General Expenses, Travel, Groceries",2022-06-25,Japan
    580,Checking,768.83,Grab,"Dining, General Expenses, Transportation, Entertainment, Travel",2022-10-05,Japan
    581,Checking,806.07,Google,"Groceries, Travel",2022-06-16,Australia
    582,Joint Account,731.05,Fairprice,"Transportation, Travel, Groceries, Dining, Entertainment, General Expenses",2022-08-15,Australia
    583,Checking,857.7,Google,"Transportation, General Expenses, Groceries, Entertainment, Travel",2022-11-11,Australia
    584,Joint Account,11.53,Gojek,"Groceries, Travel, General Expenses, Transportation, Entertainment",2022-12-30,Indonesia
    585,Savings,802.01,Uber,Groceries,2022-09-07,Indonesia
    586,Joint Account,225.8,Grab,"Dining, Groceries",2022-07-09,Australia
    587,Savings,655.65,Uber,"Entertainment, Transportation, General Expenses, Groceries, Travel",2022-09-15,Japan
    588,Joint Account,480.58,Amazon,"Transportation, Travel, General Expenses, Groceries",2022-08-10,Indonesia
    589,Savings,681.49,Walmart,"Groceries, Transportation",2022-06-11,Japan
    590,Checking,555.19,Google,Travel,2022-11-14,Japan
    591,Joint Account,41.81,Uber,General Expenses,2022-08-20,Australia
    592,Joint Account,205.88,Walmart,"Travel, General Expenses, Groceries, Dining",2022-11-24,Indonesia
    593,Savings,280.58,Walmart,"Transportation, Entertainment",2022-12-31,Indonesia
    594,Joint Account,918.96,Gojek,"General Expenses, Entertainment, Dining",2022-09-04,Japan
    595,Checking,613.12,Gojek,"Entertainment, General Expenses, Groceries, Transportation, Travel",2022-12-19,Singapore
    596,Checking,270.14,Starbucks,"Transportation, Groceries, Dining",2022-11-06,Singapore
    597,Checking,711.08,Amazon,"Groceries, Transportation, General Expenses",2022-11-03,Indonesia
    598,Joint Account,123.88,Fairprice,"Dining, General Expenses, Transportation, Entertainment",2022-10-29,Indonesia
    599,Checking,796.6,Amazon,"Entertainment, Groceries, Dining",2022-09-14,Singapore
    600,Joint Account,335.0,Fairprice,"Groceries, Transportation, Entertainment, Travel, General Expenses",2022-12-24,Indonesia
    601,Savings,571.8,Starbucks,"Travel, Entertainment, Transportation, Groceries, General Expenses, Dining",2022-06-11,Indonesia
    602,Checking,410.44,Starbucks,"Travel, Groceries, Entertainment",2022-09-02,Japan
    603,Checking,351.23,Amazon,"Travel, Entertainment, Transportation, General Expenses, Groceries, Dining",2022-12-22,Japan
    604,Joint Account,146.67,Starbucks,Transportation,2022-06-18,Japan
    605,Savings,81.72,Uber,"Dining, Groceries",2022-07-01,Indonesia
    606,Savings,849.69,Grab,"Travel, Dining",2022-06-17,Australia
    607,Joint Account,581.39,ACME,Travel,2022-11-19,Australia
    608,Checking,121.09,Grab,General Expenses,2022-07-24,Singapore
    609,Checking,468.58,Starbucks,"Travel, Groceries",2022-12-18,Singapore
    610,Checking,841.26,Amazon,Groceries,2022-10-04,Singapore
    611,Joint Account,283.37,Fairprice,Groceries,2022-11-14,Japan
    612,Savings,321.49,ACME,"Entertainment, Travel, Transportation",2022-06-19,Australia
    613,Checking,634.3,Google,"Entertainment, Dining, General Expenses, Groceries, Travel",2022-06-14,Japan
    614,Checking,307.01,Uber,General Expenses,2022-08-21,Japan
    615,Checking,289.53,Google,"Groceries, Transportation, Entertainment, Travel",2022-11-14,Indonesia
    616,Checking,234.07,Walmart,"Travel, Transportation, General Expenses, Entertainment",2022-08-05,Singapore
    617,Checking,618.91,Uber,"Groceries, Dining",2022-12-30,Australia
    618,Savings,503.68,Fairprice,Dining,2022-12-05,Indonesia
    619,Savings,822.16,Amazon,"Transportation, Entertainment, Travel",2022-09-29,Australia
    620,Joint Account,757.26,ACME,Groceries,2022-07-14,Australia
    621,Savings,299.37,Gojek,"Transportation, Entertainment, Travel, Groceries, Dining, General Expenses",2022-09-14,Indonesia
    622,Savings,520.97,Starbucks,"Dining, Groceries",2022-07-04,Australia
    623,Joint Account,654.54,Google,"Transportation, General Expenses, Dining, Groceries",2022-10-04,Japan
    624,Joint Account,690.29,Uber,Entertainment,2022-11-16,Australia
    625,Savings,7.27,Fairprice,"Dining, Transportation",2022-09-27,Japan
    626,Savings,955.45,Walmart,"Travel, General Expenses",2022-06-14,Australia
    627,Checking,922.08,Google,"Groceries, General Expenses, Entertainment, Transportation, Dining",2022-09-21,Singapore
    628,Savings,625.9,Grab,"General Expenses, Entertainment, Travel, Transportation, Dining",2022-07-08,Indonesia
    629,Checking,590.03,Starbucks,"Transportation, Travel",2022-08-09,Indonesia
    630,Checking,586.94,Gojek,Dining,2022-09-10,Australia
    631,Checking,561.14,ACME,"Dining, Entertainment",2022-12-03,Indonesia
    632,Checking,527.1,ACME,"Travel, Entertainment, Transportation, Groceries, Dining, General Expenses",2022-12-30,Indonesia
    633,Joint Account,407.22,Uber,Travel,2022-06-16,Singapore
    634,Checking,873.2,ACME,"Dining, General Expenses, Groceries, Travel, Entertainment",2022-11-18,Japan
    635,Savings,686.8,Amazon,"Travel, Entertainment, Groceries, Transportation",2022-07-20,Indonesia
    636,Joint Account,844.71,Starbucks,"Transportation, Travel",2022-09-19,Australia
    637,Joint Account,947.15,Starbucks,"Dining, Entertainment, Travel, Transportation, Groceries, General Expenses",2022-09-21,Australia
    638,Joint Account,546.22,Gojek,"Groceries, Dining, Travel, Transportation",2022-11-27,Australia
    639,Savings,772.54,Uber,"General Expenses, Entertainment, Transportation, Travel, Groceries, Dining",2022-09-27,Singapore
    640,Savings,94.67,Google,"Transportation, Entertainment, Groceries, Travel, General Expenses, Dining",2022-10-09,Australia
    641,Joint Account,684.56,Amazon,Groceries,2022-12-11,Australia
    642,Checking,576.91,Walmart,Transportation,2022-07-13,Japan
    643,Checking,98.13,ACME,"Travel, Dining, General Expenses, Entertainment",2022-12-23,Australia
    644,Joint Account,504.64,Amazon,"Entertainment, Groceries, General Expenses, Dining",2022-11-08,Australia
    645,Checking,414.11,Starbucks,Entertainment,2022-06-22,Japan
    646,Joint Account,852.28,ACME,"General Expenses, Travel",2022-11-18,Indonesia
    647,Checking,971.11,ACME,"Dining, Entertainment, General Expenses, Groceries, Travel",2022-10-24,Indonesia
    648,Checking,874.28,Amazon,"Groceries, Dining, General Expenses, Entertainment, Travel, Transportation",2022-10-22,Singapore
    649,Savings,228.93,Uber,"Entertainment, Dining, Groceries, General Expenses, Travel",2022-12-23,Japan
    650,Joint Account,666.58,Gojek,"Dining, Groceries",2022-08-21,Australia
    651,Joint Account,232.44,Walmart,"Travel, Dining, Transportation, General Expenses",2022-08-14,Australia
    652,Savings,485.35,Walmart,Dining,2022-08-01,Japan
    653,Checking,502.7,Amazon,"Groceries, Transportation",2022-11-01,Singapore
    654,Joint Account,609.18,Google,"Transportation, General Expenses",2022-08-17,Indonesia
    655,Checking,996.98,Starbucks,"Entertainment, Travel, Dining, Groceries",2022-08-03,Singapore
    656,Savings,198.77,Uber,"General Expenses, Groceries, Travel, Transportation",2022-08-12,Singapore
    657,Joint Account,664.98,Uber,"Dining, Entertainment",2022-08-07,Australia
    658,Savings,471.72,ACME,"General Expenses, Groceries, Transportation, Travel, Dining, Entertainment",2022-07-24,Singapore
    659,Joint Account,845.16,Gojek,"Entertainment, Travel",2022-11-21,Japan
    660,Checking,16.08,Walmart,Transportation,2022-11-30,Australia
    661,Checking,291.61,Google,"General Expenses, Transportation, Dining",2022-11-21,Australia
    662,Checking,942.41,Uber,"Dining, Groceries",2022-10-12,Singapore
    663,Checking,551.46,Walmart,"Dining, Transportation",2022-08-03,Indonesia
    664,Joint Account,155.32,Fairprice,"General Expenses, Dining, Travel, Groceries",2022-06-29,Indonesia
    665,Savings,301.23,Google,"Entertainment, Groceries, General Expenses, Travel",2022-08-18,Japan
    666,Joint Account,718.61,Uber,"Travel, Entertainment, Transportation",2022-10-31,Australia
    667,Joint Account,200.39,ACME,"Groceries, Travel, Entertainment, General Expenses, Transportation",2022-12-04,Australia
    668,Savings,225.53,Walmart,"Transportation, General Expenses",2022-06-10,Australia
    669,Joint Account,735.85,Gojek,"General Expenses, Transportation, Groceries, Entertainment, Dining, Travel",2022-08-17,Australia
    670,Savings,851.08,Starbucks,"Dining, Groceries, Entertainment, General Expenses",2022-11-28,Australia
    671,Joint Account,898.55,Starbucks,"General Expenses, Dining, Entertainment, Groceries, Travel, Transportation",2022-07-23,Singapore
    672,Savings,240.19,Amazon,"Transportation, Groceries, General Expenses",2022-08-10,Japan
    673,Joint Account,64.65,Starbucks,"Transportation, Groceries, Dining, General Expenses, Entertainment",2022-10-29,Japan
    674,Joint Account,428.12,Walmart,"Entertainment, General Expenses, Groceries",2022-11-22,Australia
    675,Savings,590.19,Gojek,"Entertainment, Dining, Travel",2022-07-21,Singapore
    676,Checking,75.63,Gojek,"Travel, Entertainment, Transportation, Groceries, Dining",2022-11-27,Singapore
    677,Joint Account,47.85,Amazon,Entertainment,2022-09-22,Japan
    678,Savings,955.61,ACME,Transportation,2022-08-19,Australia
    679,Joint Account,348.37,Gojek,"Entertainment, Dining, Transportation",2022-12-25,Australia
    680,Checking,510.63,Gojek,"Groceries, Travel, Dining, General Expenses, Entertainment, Transportation",2022-12-09,Singapore
    681,Savings,224.59,Walmart,"Travel, Groceries",2022-12-31,Australia
    682,Savings,533.06,Amazon,"Transportation, General Expenses, Travel, Groceries, Entertainment, Dining",2022-09-23,Japan
    683,Savings,874.76,Walmart,"Entertainment, General Expenses, Groceries, Dining, Transportation, Travel",2022-06-20,Indonesia
    684,Joint Account,489.14,Grab,"Transportation, Groceries, Travel, Dining",2022-12-10,Singapore
    685,Savings,523.32,Amazon,"General Expenses, Transportation, Travel, Dining, Entertainment",2022-12-31,Australia
    686,Savings,611.12,Fairprice,"Travel, Groceries, General Expenses, Dining",2022-07-05,Australia
    687,Joint Account,229.27,Uber,"Entertainment, Travel, Groceries, General Expenses",2022-12-01,Japan
    688,Joint Account,889.01,Amazon,"Travel, Groceries, Entertainment, Transportation",2022-11-27,Australia
    689,Joint Account,526.07,Walmart,"Dining, Transportation",2022-12-22,Singapore
    690,Checking,804.25,Grab,"Entertainment, Dining, Groceries, Transportation, Travel",2022-08-06,Australia
    691,Checking,24.92,Fairprice,"Transportation, General Expenses, Entertainment, Groceries, Dining",2022-06-22,Indonesia
    692,Savings,977.83,Grab,"Groceries, General Expenses",2022-06-29,Australia
    693,Joint Account,696.28,Starbucks,"Dining, Groceries, Transportation",2022-10-16,Australia
    694,Joint Account,846.82,Fairprice,"General Expenses, Travel, Entertainment",2022-09-06,Singapore
    695,Joint Account,145.48,Amazon,"Transportation, Groceries, Travel",2022-06-28,Australia
    696,Savings,688.17,Gojek,"Transportation, Dining, Entertainment, General Expenses",2022-07-22,Australia
    697,Savings,819.81,Uber,"Entertainment, Travel",2022-10-17,Australia
    698,Joint Account,595.52,Amazon,"Entertainment, Dining, Groceries, Travel, General Expenses, Transportation",2022-10-12,Japan
    699,Savings,257.97,Amazon,"Groceries, General Expenses, Travel, Transportation",2022-09-02,Indonesia
    700,Joint Account,903.53,Walmart,"Transportation, Dining, General Expenses, Travel, Groceries, Entertainment",2022-12-04,Japan
    701,Savings,971.79,ACME,"Transportation, Dining, Entertainment, General Expenses, Travel",2022-09-15,Australia
    702,Checking,962.1,Fairprice,"Transportation, Groceries",2022-08-11,Singapore
    703,Savings,334.64,Fairprice,"General Expenses, Groceries",2022-08-14,Singapore
    704,Joint Account,561.57,ACME,"Transportation, Groceries, General Expenses, Dining",2022-11-17,Australia
    705,Checking,853.66,Google,"General Expenses, Entertainment, Dining",2022-06-05,Japan
    706,Savings,614.22,Uber,"Dining, General Expenses, Transportation",2022-12-08,Japan
    707,Savings,697.47,Uber,"Dining, Groceries, Transportation, Travel, General Expenses",2022-11-06,Japan
    708,Savings,172.86,ACME,"General Expenses, Entertainment, Dining, Transportation, Groceries, Travel",2022-06-29,Australia
    709,Savings,259.35,Uber,"Groceries, Transportation, Entertainment, Travel, General Expenses",2022-09-01,Indonesia
    710,Checking,269.05,Amazon,"Dining, General Expenses, Groceries",2022-10-04,Japan
    711,Savings,952.59,Amazon,"Groceries, Entertainment",2022-08-09,Indonesia
    712,Joint Account,285.61,ACME,"Entertainment, Groceries",2022-07-17,Japan
    713,Checking,654.41,Gojek,"Transportation, Dining, Entertainment, Groceries, General Expenses",2022-08-22,Indonesia
    714,Savings,296.67,Google,"Transportation, Groceries, General Expenses, Entertainment, Dining, Travel",2022-08-03,Indonesia
    715,Savings,632.07,Gojek,"Travel, Transportation, Entertainment, General Expenses, Dining",2022-09-03,Indonesia
    716,Checking,612.54,Uber,"Dining, Groceries",2022-06-18,Australia
    717,Joint Account,595.39,ACME,General Expenses,2022-09-24,Indonesia
    718,Checking,316.05,Grab,"Transportation, Groceries",2022-09-10,Indonesia
    719,Joint Account,686.05,Amazon,Travel,2022-10-13,Indonesia
    720,Savings,914.47,Google,"Travel, Dining, Entertainment",2022-09-22,Singapore
    721,Joint Account,695.6,Gojek,"Transportation, Groceries, Entertainment",2022-06-16,Indonesia
    722,Savings,368.27,Walmart,"General Expenses, Transportation, Dining, Groceries",2022-07-19,Singapore
    723,Savings,730.55,Fairprice,"Groceries, Travel",2022-11-07,Singapore
    724,Joint Account,871.19,Starbucks,"Travel, General Expenses, Entertainment, Transportation",2022-08-27,Japan
    725,Joint Account,402.51,Uber,"Groceries, Transportation, Travel, General Expenses, Entertainment",2022-12-10,Indonesia
    726,Joint Account,752.51,Google,"General Expenses, Groceries, Dining",2022-08-18,Indonesia
    727,Savings,421.59,Walmart,"Dining, Transportation, General Expenses, Travel, Groceries",2022-09-18,Singapore
    728,Savings,496.83,Amazon,"Transportation, Groceries, General Expenses",2022-06-10,Indonesia
    729,Checking,248.73,Grab,Dining,2022-07-07,Japan
    730,Joint Account,546.07,Grab,"Transportation, Groceries, Travel, General Expenses",2022-08-22,Singapore
    731,Savings,344.58,Grab,Entertainment,2022-09-12,Singapore
    732,Savings,102.87,Google,"Travel, Groceries, Dining, Transportation, General Expenses, Entertainment",2022-10-07,Indonesia
    733,Savings,851.0,Grab,"Groceries, Dining, Transportation, General Expenses",2022-09-01,Japan
    734,Joint Account,444.54,Grab,Travel,2022-09-24,Japan
    735,Joint Account,271.63,Gojek,"Groceries, Travel, Transportation, General Expenses",2022-08-18,Singapore
    736,Savings,596.29,Starbucks,"Groceries, Transportation",2022-08-19,Indonesia
    737,Checking,781.82,Starbucks,"Travel, Entertainment, General Expenses, Dining, Transportation",2022-10-02,Singapore
    738,Savings,667.92,Walmart,"Dining, Transportation, Groceries, Travel",2022-08-06,Australia
    739,Checking,711.95,Gojek,"General Expenses, Groceries, Entertainment, Dining",2022-08-19,Singapore
    740,Checking,520.39,Gojek,"General Expenses, Entertainment, Transportation, Travel",2022-09-14,Indonesia
    741,Savings,608.88,Fairprice,"Groceries, Travel",2022-12-17,Singapore
    742,Joint Account,644.51,Fairprice,"Entertainment, Groceries, General Expenses, Dining, Transportation",2022-11-27,Indonesia
    743,Checking,876.21,Walmart,"General Expenses, Dining, Entertainment",2022-06-29,Singapore
    744,Joint Account,447.92,Fairprice,"General Expenses, Transportation",2022-11-27,Singapore
    745,Checking,371.7,Starbucks,Transportation,2022-10-08,Indonesia
    746,Joint Account,440.7,Amazon,"Travel, Transportation, Entertainment, Groceries, Dining, General Expenses",2022-07-07,Australia
    747,Joint Account,354.25,Fairprice,"Entertainment, Dining, Travel, Groceries",2022-12-25,Singapore
    748,Joint Account,33.87,Google,"General Expenses, Transportation, Travel, Dining",2022-08-27,Japan
    749,Checking,761.52,Walmart,"Groceries, General Expenses, Travel, Transportation",2022-07-31,Indonesia
    750,Savings,700.99,Uber,"Dining, Transportation, Entertainment, Travel, Groceries, General Expenses",2022-11-29,Australia
    751,Checking,623.91,Walmart,"Entertainment, Dining",2022-12-05,Singapore
    752,Savings,234.13,Gojek,"General Expenses, Transportation, Entertainment, Travel, Dining, Groceries",2022-11-05,Australia
    753,Checking,20.01,Google,"Entertainment, Transportation, Travel, Dining, Groceries",2022-10-10,Japan
    754,Savings,956.73,Grab,"Groceries, Travel, Entertainment, General Expenses",2022-10-04,Indonesia
    755,Savings,46.54,Fairprice,"General Expenses, Dining, Transportation, Groceries, Entertainment",2022-06-11,Indonesia
    756,Savings,617.87,Gojek,"Travel, Transportation, Groceries",2022-08-01,Japan
    757,Joint Account,941.35,Fairprice,"Groceries, Entertainment",2022-12-18,Japan
    758,Joint Account,456.22,Walmart,"Entertainment, Transportation",2022-10-28,Australia
    759,Joint Account,139.36,Fairprice,"Dining, Travel, General Expenses",2022-09-24,Japan
    760,Savings,202.3,Walmart,Entertainment,2022-09-14,Indonesia
    761,Checking,192.72,Grab,"General Expenses, Entertainment, Travel",2022-09-22,Indonesia
    762,Savings,530.07,Google,General Expenses,2022-06-27,Japan
    763,Joint Account,809.64,Starbucks,Dining,2022-06-13,Singapore
    764,Checking,206.56,ACME,"Dining, Groceries, General Expenses, Transportation, Travel, Entertainment",2022-08-11,Indonesia
    765,Joint Account,658.16,Grab,"Transportation, Groceries, Travel",2022-12-30,Japan
    766,Savings,305.89,Grab,"Entertainment, Transportation, General Expenses, Dining",2022-10-18,Indonesia
    767,Savings,753.48,Amazon,General Expenses,2022-12-14,Australia
    768,Savings,155.03,Starbucks,"Entertainment, Dining, Travel, Groceries, General Expenses, Transportation",2022-06-14,Australia
    769,Savings,201.15,Grab,"General Expenses, Dining, Travel, Entertainment",2022-11-12,Australia
    770,Savings,30.56,Gojek,"Entertainment, General Expenses, Transportation, Dining, Groceries",2022-12-10,Indonesia
    771,Checking,730.49,Starbucks,"General Expenses, Transportation, Groceries, Entertainment, Dining, Travel",2022-07-17,Australia
    772,Savings,517.06,ACME,General Expenses,2022-12-20,Australia
    773,Savings,787.79,Walmart,"Travel, General Expenses, Entertainment, Groceries, Transportation, Dining",2022-09-12,Australia
    774,Savings,673.69,ACME,"Dining, General Expenses",2022-07-29,Australia
    775,Savings,146.42,Gojek,"Transportation, Groceries, General Expenses, Entertainment, Travel",2022-09-19,Indonesia
    776,Joint Account,191.89,ACME,Transportation,2022-10-10,Australia
    777,Savings,777.31,ACME,"Groceries, Dining, Transportation",2022-07-02,Indonesia
    778,Checking,588.96,Fairprice,"Entertainment, Dining, General Expenses, Groceries, Transportation, Travel",2022-11-10,Australia
    779,Savings,845.25,Starbucks,"Dining, Transportation, Groceries, Travel",2022-10-16,Australia
    780,Savings,776.94,Google,"Entertainment, General Expenses, Groceries, Transportation, Travel",2022-11-03,Japan
    781,Checking,716.89,Uber,General Expenses,2022-11-01,Indonesia
    782,Joint Account,329.06,Google,"Entertainment, Groceries, Dining",2022-09-10,Singapore
    783,Checking,199.73,Walmart,"Groceries, General Expenses, Entertainment, Transportation, Dining",2022-09-01,Japan
    784,Savings,849.05,Gojek,"Groceries, Transportation, Dining, Travel",2022-10-07,Singapore
    785,Joint Account,392.74,Starbucks,"Travel, General Expenses",2022-07-06,Singapore
    786,Checking,132.05,Fairprice,"Entertainment, Transportation, General Expenses, Groceries, Travel",2022-07-01,Japan
    787,Checking,821.87,Amazon,"Dining, Travel, Transportation, Groceries, Entertainment, General Expenses",2022-09-14,Singapore
    788,Checking,932.23,Fairprice,"Transportation, Entertainment, Travel, Groceries",2022-08-03,Singapore
    789,Savings,950.48,Walmart,"Transportation, General Expenses, Travel, Entertainment, Dining",2022-11-18,Australia
    790,Joint Account,965.81,Starbucks,"Travel, Dining, General Expenses, Groceries, Transportation",2022-09-10,Indonesia
    791,Joint Account,448.82,Gojek,Travel,2022-07-23,Singapore
    792,Savings,583.11,Walmart,"Travel, General Expenses, Entertainment, Dining",2022-06-23,Singapore
    793,Checking,770.11,Uber,"General Expenses, Transportation, Dining, Groceries",2022-06-09,Australia
    794,Savings,621.75,Starbucks,"Entertainment, Groceries, Travel, General Expenses, Dining, Transportation",2022-07-29,Indonesia
    795,Savings,392.06,ACME,"Groceries, Dining, General Expenses, Entertainment",2022-11-17,Singapore
    796,Savings,214.52,Fairprice,"General Expenses, Dining",2022-06-06,Japan
    797,Checking,832.9,ACME,Groceries,2022-11-21,Singapore
    798,Savings,386.84,Google,"Travel, Dining, Entertainment, Groceries, Transportation",2022-08-18,Singapore
    799,Checking,537.08,Starbucks,"Dining, Transportation",2022-09-09,Australia
    800,Checking,366.47,ACME,"Travel, General Expenses, Transportation",2022-12-28,Japan
    801,Savings,912.37,Grab,"Entertainment, General Expenses, Groceries, Dining, Travel, Transportation",2022-10-03,Singapore
    802,Checking,809.92,Uber,"General Expenses, Travel, Dining",2022-12-10,Australia
    803,Checking,233.18,Fairprice,"Groceries, General Expenses, Transportation, Dining, Entertainment",2022-07-13,Singapore
    804,Checking,87.27,Uber,Entertainment,2022-09-10,Singapore
    805,Checking,186.91,Amazon,"Travel, Transportation, Groceries, General Expenses, Dining, Entertainment",2022-12-05,Indonesia
    806,Savings,933.14,Grab,"Groceries, Entertainment, Dining, Transportation, General Expenses",2022-08-05,Australia
    807,Savings,64.28,Google,"Groceries, Travel, General Expenses, Entertainment, Dining",2022-12-13,Japan
    808,Joint Account,336.23,Grab,"Dining, Groceries, Transportation, Travel, Entertainment",2022-07-15,Japan
    809,Checking,896.33,Google,"Travel, Transportation, General Expenses, Entertainment, Groceries",2022-09-19,Australia
    810,Checking,251.24,Amazon,"Transportation, Dining, Travel",2022-06-22,Australia
    811,Joint Account,344.71,Amazon,"Groceries, Entertainment, Travel, General Expenses, Dining",2022-08-13,Japan
    812,Checking,258.32,Starbucks,"Entertainment, Groceries, Travel, Transportation, General Expenses",2022-12-26,Japan
    813,Savings,952.45,ACME,"Travel, Entertainment, Dining, Transportation, Groceries",2022-11-27,Australia
    814,Joint Account,490.45,Gojek,"Entertainment, Dining",2022-09-06,Indonesia
    815,Joint Account,544.02,Amazon,Travel,2022-11-13,Japan
    816,Savings,547.24,Starbucks,"Entertainment, General Expenses, Dining, Groceries, Transportation, Travel",2022-12-11,Singapore
    817,Savings,965.11,Grab,"General Expenses, Transportation, Entertainment, Dining, Groceries",2022-07-05,Indonesia
    818,Joint Account,313.71,Gojek,"Transportation, Dining, Entertainment, Groceries, Travel, General Expenses",2022-12-28,Singapore
    819,Checking,331.75,Starbucks,"Dining, Entertainment, Groceries",2022-09-12,Australia
    820,Checking,28.36,Walmart,Groceries,2022-07-06,Indonesia
    821,Savings,805.65,Grab,"Transportation, Dining, Travel",2022-11-19,Japan
    822,Joint Account,202.23,Walmart,"General Expenses, Groceries, Dining",2022-12-01,Australia
    823,Joint Account,841.29,Walmart,"Groceries, Transportation",2022-11-10,Singapore
    824,Checking,148.51,Google,"General Expenses, Groceries, Dining, Entertainment, Transportation",2022-10-11,Singapore
    825,Checking,668.38,Uber,Travel,2022-06-12,Australia
    826,Checking,244.93,ACME,"Dining, General Expenses",2022-12-21,Singapore
    827,Checking,0.78,Grab,"Dining, Entertainment",2022-09-18,Indonesia
    828,Savings,474.69,ACME,"Transportation, Groceries, Travel, Entertainment, Dining",2022-06-02,Australia
    829,Checking,29.58,Uber,"Travel, Dining, Transportation, Groceries",2022-12-18,Australia
    830,Joint Account,907.4,Google,"Dining, Travel",2022-08-11,Japan
    831,Joint Account,622.7,Google,"Transportation, Groceries, Dining",2022-07-31,Singapore
    832,Joint Account,305.6,Walmart,"General Expenses, Travel, Transportation, Dining, Entertainment",2022-09-01,Indonesia
    833,Savings,204.95,Fairprice,"Entertainment, Dining, General Expenses, Transportation, Groceries",2022-11-28,Australia
    834,Savings,562.7,ACME,"Groceries, General Expenses, Travel, Dining, Entertainment",2022-08-31,Indonesia
    835,Joint Account,871.93,Grab,"Entertainment, General Expenses, Transportation, Groceries",2022-06-17,Indonesia
    836,Savings,17.77,Fairprice,Travel,2022-09-13,Australia
    837,Savings,55.78,Starbucks,"Groceries, Dining, Transportation, Travel, Entertainment",2022-08-14,Singapore
    838,Savings,942.4,Google,"Transportation, Groceries, Dining, Entertainment",2022-11-11,Japan
    839,Savings,71.33,Grab,"Dining, Entertainment, Travel",2022-10-12,Singapore
    840,Savings,856.87,ACME,"Travel, Dining, Entertainment, General Expenses, Transportation, Groceries",2022-12-05,Australia
    841,Checking,96.05,Amazon,Entertainment,2022-07-12,Australia
    842,Checking,825.73,Grab,Entertainment,2022-07-24,Singapore
    843,Checking,540.46,Gojek,Groceries,2022-08-31,Singapore
    844,Savings,273.37,Starbucks,Transportation,2022-08-16,Australia
    845,Savings,413.45,Amazon,"Entertainment, Travel, Groceries",2022-12-30,Australia
    846,Joint Account,275.04,ACME,Entertainment,2022-12-09,Indonesia
    847,Joint Account,763.26,Starbucks,Transportation,2022-08-31,Australia
    848,Savings,571.26,Google,"Transportation, Travel, Groceries, General Expenses, Entertainment",2022-07-30,Japan
    849,Savings,209.63,Google,"Travel, Groceries, Transportation, Entertainment",2022-11-02,Indonesia
    850,Joint Account,313.22,Walmart,"General Expenses, Transportation",2022-08-22,Australia
    851,Joint Account,686.48,Uber,"General Expenses, Entertainment, Groceries",2022-09-18,Singapore
    852,Savings,729.93,Fairprice,"Entertainment, Groceries, Transportation",2022-08-27,Singapore
    853,Savings,214.85,Amazon,Dining,2022-07-07,Singapore
    854,Checking,194.42,Starbucks,"General Expenses, Travel, Transportation, Dining, Entertainment, Groceries",2022-07-06,Australia
    855,Joint Account,302.98,Google,"Travel, Dining, Entertainment, Transportation, General Expenses, Groceries",2022-06-17,Australia
    856,Joint Account,849.67,Grab,"Groceries, Dining, Entertainment, General Expenses",2022-06-09,Singapore
    857,Joint Account,412.14,Google,"Dining, Transportation, General Expenses",2022-11-30,Singapore
    858,Savings,962.61,Amazon,Transportation,2022-07-08,Australia
    859,Joint Account,162.1,Walmart,"Transportation, Travel, General Expenses, Groceries, Entertainment",2022-11-29,Japan
    860,Checking,602.4,Walmart,"General Expenses, Groceries, Transportation",2022-06-15,Japan
    861,Joint Account,430.32,Amazon,"General Expenses, Entertainment, Travel, Dining, Transportation",2022-11-01,Japan
    862,Checking,581.82,Fairprice,"Groceries, General Expenses, Entertainment, Travel, Dining, Transportation",2022-11-21,Japan
    863,Savings,703.25,Fairprice,"Entertainment, Dining",2022-07-12,Indonesia
    864,Savings,889.33,Walmart,"Travel, Dining, General Expenses, Transportation, Groceries",2022-07-13,Singapore
    865,Checking,401.02,Gojek,General Expenses,2022-12-19,Australia
    866,Joint Account,5.81,Amazon,"Groceries, Travel, Transportation, Dining, Entertainment, General Expenses",2022-08-06,Japan
    867,Checking,54.46,Fairprice,"Transportation, Groceries",2022-07-09,Indonesia
    868,Checking,656.72,Uber,"Entertainment, Travel, Groceries, Dining, General Expenses",2022-08-20,Japan
    869,Checking,216.38,Fairprice,Travel,2022-12-15,Singapore
    870,Checking,164.58,Fairprice,"General Expenses, Travel, Transportation, Entertainment, Dining",2022-10-29,Singapore
    871,Joint Account,477.1,Amazon,General Expenses,2022-07-20,Japan
    872,Savings,767.4,ACME,"Travel, Transportation, Groceries, Entertainment, Dining, General Expenses",2022-06-18,Singapore
    873,Joint Account,756.86,Starbucks,"General Expenses, Transportation, Groceries",2022-09-25,Singapore
    874,Checking,466.58,Grab,"Groceries, Dining, General Expenses",2022-11-16,Indonesia
    875,Checking,762.26,Starbucks,"Entertainment, Dining, Transportation, General Expenses",2022-07-10,Singapore
    876,Checking,890.05,Uber,"General Expenses, Transportation, Entertainment, Groceries, Dining, Travel",2022-10-25,Japan
    877,Checking,297.91,Fairprice,"Transportation, Entertainment, Travel, Dining, General Expenses",2022-07-18,Singapore
    878,Joint Account,632.67,Uber,"Dining, General Expenses, Travel",2022-07-13,Singapore
    879,Joint Account,584.09,Grab,"Travel, Groceries, Dining, General Expenses",2022-11-04,Indonesia
    880,Savings,565.47,Fairprice,"General Expenses, Dining, Entertainment",2022-10-22,Japan
    881,Joint Account,960.81,Grab,"Transportation, General Expenses",2022-08-06,Singapore
    882,Checking,211.67,Amazon,"Transportation, Groceries, Entertainment, General Expenses, Dining",2022-11-10,Australia
    883,Checking,160.68,Amazon,"General Expenses, Dining, Transportation",2022-12-22,Indonesia
    884,Checking,283.31,Google,"Transportation, Entertainment",2022-07-26,Japan
    885,Checking,477.35,Amazon,"Groceries, Travel, Dining, Transportation, Entertainment, General Expenses",2022-10-29,Indonesia
    886,Joint Account,741.87,Fairprice,"General Expenses, Groceries",2022-07-20,Japan
    887,Joint Account,242.2,Grab,"Groceries, Entertainment, Transportation, Travel, Dining",2022-09-24,Australia
    888,Savings,203.92,Fairprice,"Dining, Travel, Groceries",2022-09-14,Japan
    889,Joint Account,317.5,Amazon,"Entertainment, Transportation, Dining",2022-09-16,Australia
    890,Savings,620.14,Amazon,"Entertainment, Groceries, Travel, Dining, General Expenses, Transportation",2022-10-27,Singapore
    891,Savings,684.13,Starbucks,"Dining, Transportation",2022-11-18,Australia
    892,Joint Account,470.67,Grab,"Transportation, Groceries, General Expenses, Dining, Travel, Entertainment",2022-09-27,Singapore
    893,Joint Account,578.06,Grab,"Travel, Transportation",2022-08-20,Japan
    894,Joint Account,461.14,Fairprice,"Groceries, General Expenses, Travel, Entertainment, Transportation, Dining",2022-10-29,Australia
    895,Joint Account,903.88,Fairprice,"Transportation, Groceries, Dining, General Expenses, Entertainment, Travel",2022-06-14,Japan
    896,Joint Account,44.29,Grab,"Entertainment, Dining, Transportation, Travel, General Expenses, Groceries",2022-11-06,Japan
    897,Checking,670.73,Grab,Groceries,2022-08-10,Australia
    898,Joint Account,1.63,Google,"Dining, Entertainment",2022-10-22,Indonesia
    899,Joint Account,527.82,Fairprice,Entertainment,2022-10-27,Australia
    900,Savings,240.33,Uber,"Groceries, Transportation, Entertainment, Dining, Travel",2022-06-08,Indonesia
    901,Joint Account,721.42,Grab,"Dining, Groceries, Transportation, Entertainment",2022-08-17,Australia
    902,Savings,595.22,Gojek,Transportation,2022-09-27,Indonesia
    903,Joint Account,341.68,ACME,"Transportation, Dining, General Expenses, Entertainment, Groceries, Travel",2022-08-12,Australia
    904,Joint Account,818.61,Google,Transportation,2022-11-25,Japan
    905,Checking,51.81,Starbucks,"Groceries, Entertainment, Transportation, Dining, General Expenses",2022-07-05,Singapore
    906,Joint Account,592.46,ACME,"General Expenses, Groceries, Dining, Travel, Transportation",2022-10-03,Australia
    907,Checking,339.95,Fairprice,"Entertainment, Dining, General Expenses, Transportation",2022-10-16,Australia
    908,Checking,288.04,Starbucks,"Entertainment, General Expenses, Groceries, Transportation, Dining, Travel",2022-08-22,Japan
    909,Joint Account,509.6,Starbucks,"Entertainment, Groceries, Transportation",2022-11-26,Indonesia
    910,Checking,40.13,Gojek,"Groceries, Dining",2022-07-21,Indonesia
    911,Joint Account,70.15,Starbucks,"Transportation, Travel, Dining, Groceries, General Expenses, Entertainment",2022-06-25,Australia
    912,Savings,960.11,Starbucks,"Entertainment, Dining",2022-08-01,Australia
    913,Joint Account,26.57,Gojek,"General Expenses, Entertainment, Groceries, Dining, Travel, Transportation",2022-09-11,Australia
    914,Savings,936.82,Google,"Entertainment, General Expenses, Groceries, Transportation, Dining",2022-08-22,Japan
    915,Checking,36.11,Amazon,"Groceries, Travel, Transportation, Dining, General Expenses",2022-10-29,Japan
    916,Checking,96.27,Amazon,"General Expenses, Entertainment, Travel, Dining, Groceries, Transportation",2022-12-04,Australia
    917,Checking,954.16,Walmart,"Groceries, General Expenses, Transportation, Travel, Entertainment",2022-07-17,Singapore
    918,Savings,785.15,Grab,"General Expenses, Entertainment, Dining, Travel, Transportation, Groceries",2022-12-22,Indonesia
    919,Savings,18.75,Amazon,Groceries,2022-11-21,Singapore
    920,Savings,618.24,Amazon,Dining,2022-11-10,Singapore
    921,Joint Account,78.05,Amazon,Dining,2022-10-30,Australia
    922,Joint Account,962.29,Gojek,Transportation,2022-11-13,Japan
    923,Checking,461.48,ACME,"Entertainment, Transportation",2022-08-09,Singapore
    924,Checking,597.6,Gojek,"Dining, Travel",2022-07-15,Australia
    925,Joint Account,311.96,Uber,"General Expenses, Travel, Groceries, Transportation, Dining, Entertainment",2022-07-29,Singapore
    926,Checking,850.6,Walmart,"Transportation, Dining",2022-12-06,Indonesia
    927,Checking,813.07,Grab,"Transportation, Travel, General Expenses, Groceries",2022-09-02,Singapore
    928,Savings,79.84,Walmart,Transportation,2022-11-15,Japan
    929,Checking,53.71,ACME,"Groceries, Transportation, Travel, General Expenses",2022-09-04,Indonesia
    930,Checking,946.23,ACME,Transportation,2022-12-18,Australia
    931,Savings,602.53,Gojek,"Transportation, Entertainment, Travel, General Expenses, Dining",2022-09-20,Singapore
    932,Checking,154.42,ACME,"Travel, Transportation, Dining, Groceries, Entertainment",2022-12-22,Australia
    933,Savings,592.71,Fairprice,"General Expenses, Transportation, Travel, Entertainment, Dining, Groceries",2022-09-19,Australia
    934,Savings,37.22,Starbucks,"Groceries, Transportation, Entertainment, Dining, General Expenses, Travel",2022-09-18,Japan
    935,Checking,440.44,Fairprice,"Travel, Groceries, Transportation",2022-06-02,Australia
    936,Savings,168.69,Google,"General Expenses, Travel, Transportation, Dining, Entertainment",2022-07-17,Australia
    937,Joint Account,713.44,Gojek,"Travel, Entertainment, Groceries, Dining, General Expenses",2022-06-09,Australia
    938,Joint Account,384.63,Amazon,"General Expenses, Dining",2022-09-08,Australia
    939,Savings,735.39,ACME,"Entertainment, General Expenses, Transportation, Travel, Dining",2022-07-23,Japan
    940,Checking,261.53,ACME,"Travel, Entertainment, Transportation, Dining",2022-09-09,Australia
    941,Checking,774.14,Uber,"Travel, Transportation, General Expenses, Dining, Entertainment, Groceries",2022-10-30,Singapore
    942,Joint Account,609.67,Google,"Transportation, Dining, Entertainment, Travel, Groceries, General Expenses",2022-09-03,Singapore
    943,Savings,23.75,Starbucks,"Dining, Transportation",2022-08-18,Australia
    944,Savings,184.73,Gojek,"Entertainment, General Expenses, Dining, Transportation, Groceries",2022-10-12,Australia
    945,Savings,556.69,Amazon,Travel,2022-11-10,Indonesia
    946,Joint Account,811.73,Amazon,"Groceries, Transportation, Dining, Entertainment",2022-12-19,Australia
    947,Checking,762.81,Walmart,"Transportation, Dining, Entertainment, Groceries, Travel, General Expenses",2022-12-26,Japan
    948,Checking,800.36,Gojek,"Transportation, Groceries",2022-12-17,Australia
    949,Joint Account,992.52,Uber,"Transportation, Dining, Travel, General Expenses",2022-10-02,Japan
    950,Joint Account,786.23,Walmart,Travel,2022-06-18,Singapore
    951,Savings,251.33,Gojek,"Entertainment, Groceries, General Expenses",2022-09-26,Singapore
    952,Joint Account,167.16,Fairprice,"Groceries, Transportation, Dining, Entertainment",2022-08-06,Japan
    953,Savings,194.0,Starbucks,"Entertainment, Travel, Groceries, Dining, Transportation",2022-09-19,Japan
    954,Savings,760.13,Google,"Transportation, Groceries",2022-07-28,Indonesia
    955,Checking,435.76,ACME,"Entertainment, Dining, General Expenses, Transportation, Groceries",2022-06-10,Singapore
    956,Checking,806.53,ACME,Dining,2022-08-26,Indonesia
    957,Checking,369.31,Google,Groceries,2022-09-23,Japan
    958,Joint Account,691.64,ACME,"Entertainment, Travel, Groceries",2022-10-03,Indonesia
    959,Joint Account,314.0,Gojek,Transportation,2022-09-13,Singapore
    960,Joint Account,39.96,Uber,Groceries,2022-10-08,Singapore
    961,Joint Account,379.49,Gojek,Transportation,2022-12-24,Singapore
    962,Checking,971.82,Uber,"Groceries, Dining, Transportation",2022-10-24,Australia
    963,Checking,194.17,Walmart,Dining,2022-08-24,Indonesia
    964,Savings,697.23,Grab,"Entertainment, Transportation, Travel",2022-06-07,Singapore
    965,Checking,140.92,Starbucks,"Dining, Groceries, Entertainment",2022-09-27,Japan
    966,Checking,40.54,Gojek,"General Expenses, Groceries",2022-11-26,Australia
    967,Savings,910.28,Grab,"Dining, Groceries, Transportation, Travel",2022-11-09,Indonesia
    968,Savings,769.42,Walmart,Transportation,2022-12-14,Australia
    969,Checking,269.96,Fairprice,"Entertainment, Dining, Groceries",2022-12-13,Indonesia
    970,Savings,322.4,Uber,"Entertainment, Groceries, Dining",2022-09-15,Australia
    971,Checking,378.72,ACME,"Transportation, Groceries, Travel, Dining",2022-10-15,Australia
    972,Checking,10.85,Amazon,"Travel, General Expenses, Transportation, Dining, Entertainment, Groceries",2022-08-05,Indonesia
    973,Savings,186.72,ACME,"Groceries, Transportation, Entertainment, Travel, General Expenses",2022-08-06,Australia
    974,Savings,174.84,Starbucks,"Groceries, Entertainment, General Expenses, Dining",2022-10-26,Japan
    975,Savings,258.36,Fairprice,General Expenses,2022-06-08,Japan
    976,Savings,451.25,Fairprice,"Travel, Groceries",2022-10-05,Japan
    977,Checking,572.59,Fairprice,"Dining, Travel, Entertainment, General Expenses, Groceries, Transportation",2022-08-02,Australia
    978,Savings,33.33,Grab,"Entertainment, Transportation, Dining, Groceries, General Expenses, Travel",2022-08-16,Singapore
    979,Joint Account,532.85,Gojek,"Dining, Transportation",2022-11-29,Singapore
    980,Checking,265.1,Fairprice,"Dining, Entertainment, Groceries, Transportation",2022-11-06,Japan
    981,Savings,297.66,Walmart,"General Expenses, Travel, Transportation, Dining, Groceries, Entertainment",2022-06-20,Australia
    982,Joint Account,92.9,Walmart,"Groceries, General Expenses, Entertainment",2022-12-27,Japan
    983,Joint Account,733.64,Walmart,"Groceries, Dining, Travel, Transportation",2022-09-23,Australia
    984,Joint Account,258.99,Fairprice,General Expenses,2022-12-22,Australia
    985,Joint Account,231.23,Uber,"Travel, Transportation",2022-07-24,Singapore
    986,Savings,581.22,Gojek,"Entertainment, Groceries",2022-08-25,Singapore
    987,Checking,130.86,ACME,"Dining, General Expenses, Travel",2022-06-23,Singapore
    988,Checking,643.32,Gojek,"Groceries, Transportation",2022-06-04,Japan
    989,Savings,496.25,Uber,"Entertainment, Groceries, General Expenses, Travel",2022-12-08,Australia
    990,Savings,761.02,Fairprice,"Travel, General Expenses, Dining",2022-11-05,Singapore
    991,Savings,78.66,Google,"Groceries, General Expenses, Dining, Transportation, Entertainment",2022-11-15,Singapore
    992,Checking,616.51,Starbucks,Groceries,2022-08-13,Australia
    993,Joint Account,670.77,Gojek,"Dining, Groceries, Transportation",2022-12-28,Australia
    994,Savings,555.43,Amazon,"Groceries, Travel, Transportation, Entertainment, Dining, General Expenses",2022-06-24,Australia
    995,Joint Account,650.82,Grab,"Entertainment, Transportation",2022-08-07,Australia
    996,Savings,576.63,Grab,"Groceries, General Expenses, Travel, Entertainment, Dining, Transportation",2022-06-21,Indonesia
    997,Checking,445.4,Grab,"Travel, Groceries",2022-09-17,Singapore
    998,Checking,334.45,ACME,Dining,2022-10-06,Indonesia
    999,Checking,365.79,Amazon,"Dining, Travel, Groceries, Entertainment, Transportation, General Expenses",2022-07-23,Australia
    1000,Joint Account,739.95,ACME,"Transportation, General Expenses",2022-12-03,Australia
    1001,Savings,585.4,Amazon,"Transportation, Dining, Groceries",2022-11-12,Indonesia
    1002,Joint Account,172.02,Starbucks,"Groceries, Entertainment, Transportation, General Expenses",2022-06-03,Singapore
    1003,Savings,664.61,Google,"Groceries, Transportation, Dining, Travel, General Expenses",2022-10-27,Indonesia
    1004,Savings,753.37,Walmart,"General Expenses, Dining, Travel, Groceries, Transportation",2022-10-19,Indonesia
    1005,Checking,233.62,Fairprice,"Entertainment, Transportation",2022-06-12,Singapore
    1006,Joint Account,169.8,Google,"Dining, Transportation, Groceries, Entertainment",2022-10-13,Japan
    1007,Savings,728.8,Starbucks,"Entertainment, Groceries, General Expenses, Travel, Transportation",2022-07-21,Australia
    1008,Joint Account,707.38,Starbucks,"Groceries, Dining",2022-11-11,Australia
    1009,Checking,148.52,Grab,"General Expenses, Dining, Travel",2022-08-18,Japan
    1010,Joint Account,487.57,ACME,"Transportation, Dining, Groceries, Entertainment, General Expenses, Travel",2022-11-03,Indonesia
    1011,Joint Account,604.18,Google,"General Expenses, Dining, Travel, Entertainment",2022-11-14,Indonesia
    1012,Savings,944.66,Walmart,"Transportation, Dining, Travel, General Expenses, Entertainment, Groceries",2022-07-11,Japan
    1013,Savings,301.99,Starbucks,"Groceries, Transportation, Travel, Dining, General Expenses, Entertainment",2022-09-28,Australia
    1014,Checking,954.63,Amazon,"Transportation, Dining, General Expenses",2022-10-12,Japan
    1015,Checking,652.04,Uber,"General Expenses, Dining, Transportation, Groceries",2022-08-27,Australia
    1016,Savings,513.78,Gojek,Groceries,2022-07-26,Japan
    1017,Savings,419.51,Amazon,"Entertainment, Travel",2022-09-08,Australia
    1018,Checking,498.77,Grab,Groceries,2022-11-02,Indonesia
    1019,Checking,992.48,Grab,Dining,2022-10-08,Indonesia
    1020,Savings,356.95,Starbucks,"Entertainment, Transportation, Dining, Travel, Groceries, General Expenses",2022-12-18,Australia
    1021,Joint Account,557.94,Fairprice,"Dining, General Expenses, Transportation, Entertainment, Travel, Groceries",2022-12-13,Japan
    1022,Checking,990.37,Starbucks,Groceries,2022-08-24,Australia
    1023,Checking,72.82,Walmart,"Groceries, Transportation, Travel",2022-09-01,Indonesia
    1024,Checking,524.39,Gojek,"Entertainment, General Expenses, Travel, Transportation, Groceries",2022-06-14,Australia
    1025,Joint Account,595.55,Walmart,Groceries,2022-10-28,Indonesia
    1026,Checking,850.0,Uber,"Travel, Groceries, Entertainment, General Expenses",2022-07-02,Singapore
    1027,Checking,819.91,ACME,"Entertainment, Dining",2022-10-24,Japan
    1028,Checking,349.45,Gojek,"Transportation, Travel, Groceries, Entertainment, Dining, General Expenses",2022-11-09,Japan
    1029,Joint Account,271.76,Walmart,"Transportation, Dining",2022-07-07,Australia
    1030,Checking,729.22,Gojek,"Travel, Entertainment",2022-11-07,Japan
    1031,Checking,57.7,Amazon,"Dining, Entertainment",2022-11-12,Japan
    1032,Savings,509.19,Gojek,"Entertainment, Dining, General Expenses, Transportation",2022-06-21,Singapore
    1033,Checking,159.91,Walmart,"Travel, General Expenses, Dining, Transportation",2022-10-14,Singapore
    1034,Savings,147.44,ACME,"General Expenses, Groceries, Travel, Dining",2022-08-09,Indonesia
    1035,Savings,984.98,Uber,"Travel, Dining, General Expenses, Transportation, Groceries, Entertainment",2022-11-03,Indonesia
    1036,Checking,131.43,ACME,"Groceries, General Expenses",2022-10-26,Australia
    1037,Joint Account,28.76,Fairprice,"Dining, General Expenses",2022-12-10,Australia
    1038,Savings,356.71,Google,"Travel, General Expenses, Transportation",2022-06-15,Singapore
    1039,Checking,293.17,Fairprice,"Transportation, Travel",2022-09-02,Japan
    1040,Savings,849.91,Walmart,"Groceries, Travel",2022-06-19,Indonesia
    1041,Savings,183.34,Walmart,Travel,2022-12-26,Indonesia
    1042,Checking,598.12,Walmart,"Travel, Groceries, Entertainment",2022-12-06,Australia
    1043,Checking,972.68,Grab,"Groceries, Entertainment, Dining, Travel, Transportation",2022-07-17,Australia
    1044,Checking,741.47,Walmart,"Entertainment, Dining, General Expenses",2022-09-21,Singapore
    1045,Joint Account,107.55,Gojek,"Travel, General Expenses, Dining",2022-09-20,Singapore
    1046,Checking,55.95,Walmart,"Groceries, Transportation, Entertainment, General Expenses",2022-12-11,Australia
    1047,Checking,110.39,Gojek,Entertainment,2022-07-06,Australia
    1048,Joint Account,574.41,ACME,"Dining, Entertainment, Groceries, Transportation, General Expenses, Travel",2022-11-11,Japan
    1049,Joint Account,242.65,Google,"Travel, Dining, Transportation, Entertainment",2022-11-20,Japan
    1050,Checking,171.9,Gojek,"Travel, Groceries",2022-07-05,Japan
    1051,Savings,609.08,Fairprice,Dining,2022-12-27,Australia
    1052,Checking,147.32,Grab,"Travel, Entertainment, Groceries, General Expenses, Dining, Transportation",2022-10-26,Japan
    1053,Savings,646.74,Starbucks,"Entertainment, Travel",2022-08-20,Singapore
    1054,Checking,337.85,Amazon,General Expenses,2022-09-29,Indonesia
    1055,Checking,842.56,Gojek,"Transportation, Travel, Dining, Groceries, General Expenses, Entertainment",2022-12-15,Japan
    1056,Savings,385.27,Fairprice,"Dining, Transportation, Travel, Groceries, General Expenses, Entertainment",2022-09-11,Singapore
    1057,Savings,565.13,Grab,"Travel, Entertainment, Transportation, General Expenses, Groceries, Dining",2022-06-24,Singapore
    1058,Checking,44.64,ACME,"Travel, Dining, Groceries, Entertainment, Transportation, General Expenses",2022-07-10,Australia
    1059,Checking,581.34,Starbucks,"Groceries, Dining, General Expenses",2022-06-03,Indonesia
    1060,Checking,544.9,Google,"General Expenses, Entertainment",2022-12-28,Indonesia
    1061,Joint Account,418.25,Fairprice,"General Expenses, Transportation, Dining, Groceries, Entertainment, Travel",2022-10-21,Japan
    1062,Joint Account,33.08,Starbucks,"General Expenses, Travel, Entertainment, Groceries",2022-06-19,Japan
    1063,Savings,491.31,Fairprice,"Transportation, Dining",2022-12-28,Japan
    1064,Checking,802.18,Uber,"General Expenses, Groceries, Entertainment, Transportation, Travel, Dining",2022-12-07,Australia
    1065,Checking,423.38,Google,"Dining, Entertainment, Groceries, General Expenses, Transportation, Travel",2022-06-19,Indonesia
    1066,Checking,821.9,Starbucks,"Transportation, General Expenses, Entertainment, Travel, Dining, Groceries",2022-08-02,Australia
    1067,Savings,685.15,Fairprice,"General Expenses, Entertainment, Transportation, Travel, Groceries, Dining",2022-06-11,Japan
    1068,Checking,334.07,Starbucks,"Transportation, General Expenses, Travel, Groceries",2022-06-02,Japan
    1069,Savings,954.36,Uber,"Travel, Dining, General Expenses",2022-06-14,Japan
    1070,Joint Account,96.03,Google,"Dining, General Expenses, Groceries",2022-07-09,Australia
    1071,Joint Account,275.89,Gojek,"Dining, Transportation, Groceries, Entertainment, Travel, General Expenses",2022-07-17,Singapore
    1072,Joint Account,812.88,Starbucks,"Groceries, Dining, Transportation, Entertainment",2022-08-29,Australia
    1073,Joint Account,520.84,Amazon,"Transportation, Entertainment, Dining",2022-11-09,Australia
    1074,Joint Account,46.53,Grab,"Dining, Transportation, Entertainment",2022-08-29,Japan
    1075,Savings,394.24,Gojek,"General Expenses, Dining, Travel, Transportation",2022-08-12,Japan
    1076,Checking,47.45,Grab,"Entertainment, General Expenses, Groceries",2022-07-28,Indonesia
    1077,Checking,309.53,Starbucks,"Travel, Groceries, Transportation, General Expenses, Dining",2022-07-25,Japan
    1078,Savings,863.08,Walmart,"Transportation, General Expenses",2022-12-27,Japan
    1079,Joint Account,269.53,Starbucks,"Dining, General Expenses, Travel, Transportation, Groceries",2022-10-09,Australia
    1080,Checking,532.54,Walmart,"Dining, General Expenses, Entertainment, Groceries, Transportation, Travel",2022-11-13,Australia
    1081,Joint Account,989.58,Grab,"Entertainment, Transportation, Travel, Dining, Groceries, General Expenses",2022-10-22,Singapore
    1082,Savings,493.55,ACME,"Dining, Groceries",2022-10-02,Australia
    1083,Savings,233.4,Starbucks,"Entertainment, Groceries, Dining, Travel",2022-08-06,Indonesia
    1084,Checking,238.71,Gojek,"Groceries, Travel, General Expenses, Entertainment, Dining",2022-10-16,Singapore
    1085,Checking,56.36,Grab,Travel,2022-11-02,Australia
    1086,Savings,235.67,Fairprice,"General Expenses, Transportation, Entertainment, Dining, Groceries, Travel",2022-10-29,Singapore
    1087,Checking,515.51,Gojek,"General Expenses, Travel, Groceries",2022-08-27,Singapore
    1088,Checking,986.97,Walmart,"Dining, Groceries, Transportation",2022-07-08,Japan
    1089,Checking,495.23,Amazon,Travel,2022-06-04,Indonesia
    1090,Joint Account,25.88,Google,"Travel, Groceries, Entertainment, Dining, General Expenses",2022-08-20,Singapore
    1091,Checking,885.31,Amazon,"Entertainment, Travel, Transportation",2022-10-01,Singapore
    1092,Joint Account,986.51,Uber,"General Expenses, Dining, Entertainment, Travel",2022-08-15,Singapore
    1093,Joint Account,289.6,Starbucks,"Groceries, Transportation, Entertainment, Travel",2022-08-12,Singapore
    1094,Joint Account,783.33,Walmart,"General Expenses, Transportation, Dining, Travel, Groceries, Entertainment",2022-09-15,Australia
    1095,Checking,712.75,Walmart,"Groceries, Dining, Transportation, Entertainment",2022-06-07,Indonesia
    1096,Checking,492.87,Starbucks,"Groceries, General Expenses, Transportation, Travel, Entertainment",2022-07-04,Indonesia
    1097,Savings,837.55,Grab,"General Expenses, Groceries, Dining",2022-10-04,Singapore
    1098,Checking,633.09,Starbucks,"Entertainment, Transportation, Dining, Travel",2022-12-11,Singapore
    1099,Joint Account,681.5,Uber,"General Expenses, Groceries, Transportation, Dining",2022-06-18,Australia
    1100,Joint Account,358.61,Uber,"Transportation, Entertainment, Travel, Groceries",2022-06-29,Singapore
    1101,Joint Account,976.33,Grab,"Entertainment, Transportation, Travel, Groceries, General Expenses",2022-09-27,Japan
    1102,Savings,932.96,Grab,"General Expenses, Entertainment, Groceries",2022-12-29,Japan
    1103,Checking,560.4,Gojek,"Travel, General Expenses, Entertainment, Dining",2022-11-09,Indonesia
    1104,Joint Account,392.45,Gojek,"Groceries, Dining, Entertainment, General Expenses, Transportation",2022-12-29,Australia
    1105,Joint Account,749.42,Starbucks,"Travel, Dining",2022-08-03,Japan
    1106,Savings,746.89,Fairprice,"Groceries, Travel, Dining, Transportation",2022-10-11,Japan
    1107,Checking,164.29,Starbucks,"Travel, Groceries",2022-10-22,Australia
    1108,Savings,145.58,Fairprice,"Entertainment, Transportation",2022-07-05,Indonesia
    1109,Joint Account,895.81,Grab,"Transportation, Groceries, Dining, Entertainment, Travel",2022-10-18,Singapore
    1110,Checking,13.34,Amazon,"General Expenses, Dining, Groceries",2022-06-01,Singapore
    1111,Checking,259.25,Gojek,"Dining, Groceries",2022-10-22,Australia
    1112,Joint Account,96.3,Grab,"Dining, Travel, General Expenses, Transportation",2022-09-17,Singapore
    1113,Savings,652.73,Walmart,"Travel, Entertainment, Groceries, Dining, Transportation",2022-08-18,Japan
    1114,Savings,107.37,Grab,"Dining, Travel, Entertainment, Groceries, Transportation",2022-12-08,Indonesia
    1115,Checking,310.16,Gojek,"Transportation, Groceries",2022-09-10,Japan
    1116,Joint Account,971.98,Fairprice,"Dining, Travel",2022-08-11,Japan
    1117,Savings,338.78,Starbucks,"Dining, Groceries",2022-06-23,Indonesia
    1118,Savings,364.9,Google,"Entertainment, General Expenses, Travel",2022-06-03,Australia
    1119,Savings,210.13,Google,Groceries,2022-12-26,Japan
    1120,Checking,256.5,Grab,"Transportation, Entertainment, Travel, General Expenses, Dining",2022-09-13,Australia
    1121,Savings,479.66,ACME,"Entertainment, Transportation, Groceries, Dining, Travel",2022-10-09,Singapore
    1122,Savings,930.15,Amazon,Dining,2022-07-14,Australia
    1123,Savings,998.94,Fairprice,"Groceries, Transportation, Dining",2022-10-27,Japan
    1124,Joint Account,927.33,Starbucks,"Groceries, Travel, Transportation, Dining, Entertainment, General Expenses",2022-09-12,Singapore
    1125,Joint Account,257.75,Uber,"Dining, General Expenses, Transportation, Entertainment, Travel, Groceries",2022-09-21,Singapore
    1126,Checking,507.53,Google,"Entertainment, General Expenses",2022-11-09,Australia
    1127,Checking,150.28,Grab,"Travel, Groceries",2022-06-14,Japan
    1128,Savings,766.59,Uber,"Entertainment, Groceries, Travel, Transportation, General Expenses, Dining",2022-06-27,Japan
    1129,Joint Account,945.0,Starbucks,"Transportation, Groceries, Entertainment, General Expenses, Travel, Dining",2022-08-25,Singapore
    1130,Checking,351.43,Starbucks,"Travel, Dining, General Expenses, Transportation, Entertainment",2022-06-07,Australia
    1131,Joint Account,581.18,Grab,"Groceries, General Expenses, Transportation, Travel, Dining",2022-06-28,Australia
    1132,Checking,331.11,Grab,Groceries,2022-10-11,Singapore
    1133,Joint Account,38.18,Uber,"Dining, Entertainment, Groceries, Travel",2022-11-28,Australia
    1134,Savings,244.71,Amazon,"Travel, Dining, Groceries",2022-11-08,Singapore
    1135,Checking,778.15,ACME,"Travel, General Expenses, Dining, Transportation",2022-06-12,Australia
    1136,Savings,692.93,Walmart,Travel,2022-09-06,Indonesia
    1137,Savings,803.94,Google,"Groceries, Dining, Entertainment, Transportation, General Expenses",2022-09-26,Australia
    1138,Checking,554.74,Amazon,Dining,2022-12-06,Japan
    1139,Savings,55.84,Google,"Groceries, Transportation, Travel, Dining",2022-11-03,Indonesia
    1140,Checking,914.0,Google,"Transportation, Groceries, General Expenses, Travel",2022-08-11,Japan
    1141,Joint Account,947.51,Starbucks,"Transportation, Groceries, Travel, Dining, Entertainment, General Expenses",2022-11-18,Singapore
    1142,Joint Account,378.36,ACME,"Dining, Travel, Transportation",2022-10-05,Australia
    1143,Joint Account,992.17,Gojek,"Groceries, Entertainment, Dining, General Expenses, Transportation, Travel",2022-11-03,Japan
    1144,Joint Account,292.5,Grab,Groceries,2022-09-09,Indonesia
    1145,Joint Account,322.46,Grab,"Entertainment, Travel, General Expenses",2022-12-04,Indonesia
    1146,Joint Account,800.43,Starbucks,"Travel, Entertainment, Transportation",2022-12-06,Australia
    1147,Savings,636.79,Grab,"Travel, Dining, Entertainment",2022-07-26,Indonesia
    1148,Savings,801.07,Amazon,"Transportation, Travel, General Expenses, Entertainment, Dining, Groceries",2022-12-07,Singapore
    1149,Savings,475.93,Grab,"Transportation, Entertainment",2022-06-03,Indonesia
    1150,Joint Account,108.77,Uber,"Groceries, Travel, Entertainment",2022-09-30,Japan
    1151,Joint Account,434.58,Google,"Groceries, Transportation, Dining, Entertainment, General Expenses, Travel",2022-07-05,Japan
    1152,Savings,725.1,Grab,"Transportation, Dining",2022-07-18,Indonesia
    1153,Savings,374.25,Uber,"General Expenses, Groceries, Travel, Dining",2022-11-24,Japan
    1154,Checking,411.69,Grab,"Entertainment, Travel, Groceries, Dining, Transportation, General Expenses",2022-06-19,Japan
    1155,Savings,878.71,Gojek,"Transportation, Travel, Groceries, General Expenses, Entertainment, Dining",2022-10-19,Singapore
    1156,Joint Account,431.49,Google,Entertainment,2022-11-23,Japan
    1157,Joint Account,525.54,Starbucks,"Groceries, Dining, Entertainment, Transportation",2022-07-27,Indonesia
    1158,Joint Account,2.5,Google,"Transportation, Entertainment",2022-09-06,Australia
    1159,Checking,218.48,ACME,"Dining, Transportation, Groceries, Entertainment, Travel",2022-11-18,Australia
    1160,Joint Account,824.95,Google,"General Expenses, Travel, Transportation, Entertainment, Groceries, Dining",2022-07-10,Singapore
    1161,Checking,321.91,Google,Dining,2022-07-16,Singapore
    1162,Checking,455.35,Google,"Entertainment, Travel, General Expenses, Groceries, Transportation, Dining",2022-12-10,Singapore
    1163,Savings,801.21,Fairprice,Groceries,2022-11-11,Japan
    1164,Joint Account,751.09,Uber,"Entertainment, Groceries, Dining, Travel, General Expenses, Transportation",2022-10-11,Singapore
    1165,Savings,224.78,Amazon,"Entertainment, Travel, Dining, General Expenses",2022-12-27,Singapore
    1166,Joint Account,731.81,Grab,"Groceries, General Expenses, Dining, Travel, Entertainment",2022-06-18,Japan
    1167,Savings,887.46,Starbucks,"General Expenses, Dining, Travel, Entertainment, Groceries, Transportation",2022-12-31,Australia
    1168,Checking,741.58,Walmart,"Groceries, General Expenses, Transportation",2022-11-30,Australia
    1169,Joint Account,385.36,Gojek,Groceries,2022-12-13,Japan
    1170,Savings,970.5,Amazon,"Travel, Transportation, Dining, Entertainment, Groceries",2022-10-17,Indonesia
    1171,Savings,31.7,Fairprice,"General Expenses, Transportation",2022-06-12,Australia
    1172,Joint Account,661.35,Starbucks,"Travel, Dining, Transportation, General Expenses, Entertainment",2022-10-30,Singapore
    1173,Joint Account,747.14,Walmart,"Transportation, Dining, Entertainment, Groceries",2022-06-07,Indonesia
    1174,Checking,33.98,Uber,"General Expenses, Entertainment, Transportation, Travel, Dining",2022-08-21,Japan
    1175,Joint Account,489.01,ACME,"General Expenses, Travel, Groceries",2022-12-07,Indonesia
    1176,Savings,623.11,Fairprice,"Entertainment, General Expenses",2022-12-26,Japan
    1177,Joint Account,427.87,Google,"Groceries, General Expenses, Dining, Travel, Entertainment, Transportation",2022-10-03,Singapore
    1178,Joint Account,562.09,ACME,"Entertainment, Groceries, Dining",2022-10-10,Japan
    1179,Joint Account,531.69,ACME,"Entertainment, Dining, Travel, General Expenses",2022-08-16,Japan
    1180,Savings,830.65,Starbucks,"Travel, Transportation, General Expenses",2022-08-04,Singapore
    1181,Joint Account,976.21,Google,"Groceries, Transportation, Travel, Entertainment, Dining",2022-08-08,Japan
    1182,Savings,15.78,Walmart,"Dining, Entertainment, Travel",2022-07-11,Australia
    1183,Checking,26.11,ACME,"Travel, Transportation",2022-08-22,Japan
    1184,Checking,943.31,Google,Travel,2022-10-21,Australia
    1185,Checking,4.06,Uber,"Travel, General Expenses, Entertainment",2022-12-04,Australia
    1186,Savings,822.91,Walmart,"Entertainment, Transportation",2022-12-24,Indonesia
    1187,Savings,36.56,Fairprice,"Dining, Travel, Transportation, Groceries, General Expenses",2022-12-27,Japan
    1188,Savings,940.13,Fairprice,"General Expenses, Entertainment",2022-12-17,Japan
    1189,Savings,798.22,Uber,Travel,2022-09-12,Indonesia
    1190,Checking,24.81,Fairprice,"Dining, General Expenses, Groceries",2022-09-18,Australia
    1191,Savings,767.62,Uber,"Transportation, Dining, Groceries, Travel, General Expenses, Entertainment",2022-07-15,Singapore
    1192,Checking,716.96,Grab,"General Expenses, Transportation, Travel, Dining, Entertainment",2022-06-12,Indonesia
    1193,Checking,724.22,ACME,"Travel, Groceries, Entertainment, General Expenses, Transportation",2022-09-08,Japan
    1194,Savings,46.97,Starbucks,"General Expenses, Dining, Transportation",2022-09-21,Japan
    1195,Savings,374.6,Walmart,"Transportation, Dining",2022-06-15,Singapore
    1196,Checking,685.33,Grab,"General Expenses, Dining",2022-12-02,Australia
    1197,Savings,450.49,Gojek,Groceries,2022-07-16,Singapore
    1198,Checking,287.18,Grab,"General Expenses, Transportation, Groceries",2022-10-03,Indonesia
    1199,Checking,59.46,Fairprice,"Travel, Transportation, Dining, Entertainment",2022-12-27,Japan
    1200,Joint Account,996.36,Grab,Groceries,2022-08-16,Indonesia
    1201,Savings,313.72,Google,"General Expenses, Transportation, Dining, Travel",2022-11-01,Indonesia
    1202,Checking,133.53,Gojek,"Dining, Transportation, Groceries, Travel",2022-08-25,Japan
    1203,Checking,423.93,ACME,"Groceries, Dining, General Expenses",2022-08-26,Singapore
    1204,Savings,256.82,Grab,Entertainment,2022-11-24,Indonesia
    1205,Savings,172.03,Fairprice,"Travel, General Expenses, Entertainment, Transportation, Dining, Groceries",2022-11-01,Singapore
    1206,Savings,826.53,Amazon,"Transportation, Groceries",2022-08-04,Singapore
    1207,Joint Account,7.96,Starbucks,"Dining, General Expenses, Travel",2022-12-19,Singapore
    1208,Savings,458.19,Starbucks,"Transportation, Groceries, Entertainment, Travel, Dining",2022-09-12,Indonesia
    1209,Joint Account,658.75,Google,"Dining, Transportation",2022-08-21,Singapore
    1210,Checking,170.26,ACME,"Dining, General Expenses, Groceries",2022-09-23,Australia
    1211,Savings,969.98,Starbucks,Travel,2022-09-05,Australia
    1212,Joint Account,391.94,Amazon,"Travel, Transportation, Groceries, Entertainment",2022-12-12,Australia
    1213,Checking,912.59,Google,"General Expenses, Entertainment",2022-08-10,Japan
    1214,Savings,211.04,Gojek,"Travel, Dining, General Expenses",2022-10-09,Indonesia
    1215,Savings,155.08,Google,"Groceries, Entertainment, Travel, General Expenses, Transportation, Dining",2022-09-07,Indonesia
    1216,Savings,999.38,Gojek,"Groceries, Transportation, General Expenses, Entertainment",2022-08-29,Singapore
    1217,Checking,740.67,Uber,"Transportation, General Expenses, Dining, Travel, Entertainment",2022-08-02,Australia
    1218,Checking,42.54,Gojek,"Transportation, Dining, Entertainment",2022-08-06,Singapore
    1219,Checking,70.03,Fairprice,"Dining, Groceries, Travel, Entertainment, General Expenses, Transportation",2022-08-05,Japan
    1220,Joint Account,754.48,Gojek,"Dining, Transportation",2022-06-24,Singapore
    1221,Checking,383.8,Uber,Groceries,2022-09-15,Singapore
    1222,Checking,585.39,ACME,"General Expenses, Entertainment, Groceries",2022-08-18,Singapore
    1223,Joint Account,319.17,Fairprice,Travel,2022-07-01,Australia
    1224,Savings,146.76,ACME,"Dining, Travel",2022-09-18,Singapore
    1225,Checking,152.78,Walmart,"General Expenses, Transportation, Entertainment, Travel, Groceries, Dining",2022-12-26,Indonesia
    1226,Joint Account,446.09,ACME,"Transportation, Groceries, Dining",2022-10-11,Singapore
    1227,Checking,255.25,Uber,"Travel, General Expenses, Transportation, Groceries, Entertainment, Dining",2022-10-14,Japan
    1228,Joint Account,809.05,Fairprice,"Groceries, Entertainment, Travel, Transportation, General Expenses, Dining",2022-10-20,Australia
    1229,Checking,610.69,ACME,"General Expenses, Transportation, Groceries, Entertainment, Dining, Travel",2022-09-21,Indonesia
    1230,Savings,125.83,Google,"Groceries, Transportation, Entertainment, Dining, Travel, General Expenses",2022-10-02,Japan
    1231,Joint Account,87.28,Amazon,"Travel, Groceries, Dining, Entertainment, General Expenses",2022-10-04,Singapore
    1232,Joint Account,289.78,Google,"General Expenses, Dining",2022-07-09,Japan
    1233,Savings,8.56,Fairprice,Entertainment,2022-11-06,Indonesia
    1234,Joint Account,647.73,ACME,"Entertainment, Dining, General Expenses, Groceries, Travel, Transportation",2022-10-26,Singapore
    1235,Checking,863.25,Walmart,"Travel, Transportation, Groceries, Dining, Entertainment, General Expenses",2022-06-14,Australia
    1236,Checking,457.89,ACME,"Transportation, General Expenses, Entertainment, Groceries, Travel",2022-08-23,Australia
    1237,Checking,967.78,Grab,Transportation,2022-08-24,Australia
    1238,Checking,128.59,Walmart,"Dining, Entertainment, General Expenses, Groceries",2022-10-20,Singapore
    1239,Checking,417.74,Grab,"Dining, Entertainment",2022-10-13,Indonesia
    1240,Joint Account,327.63,Google,"Dining, Transportation",2022-06-07,Indonesia
    1241,Joint Account,416.36,Grab,"Groceries, Travel, Dining",2022-11-17,Indonesia
    1242,Joint Account,470.73,Walmart,"Dining, Groceries, Travel, Transportation, Entertainment",2022-10-03,Japan
    1243,Joint Account,681.47,Uber,"Groceries, Travel, General Expenses, Entertainment, Dining",2022-12-27,Japan
    1244,Savings,438.06,Amazon,General Expenses,2022-11-18,Indonesia
    1245,Checking,693.24,Walmart,Travel,2022-09-23,Indonesia
    1246,Savings,325.61,Google,"Groceries, Dining",2022-09-11,Australia
    1247,Joint Account,102.62,Starbucks,"Entertainment, General Expenses, Groceries, Dining",2022-09-03,Japan
    1248,Savings,632.59,Google,"Entertainment, Dining, Travel",2022-10-30,Indonesia
    1249,Savings,192.51,Walmart,General Expenses,2022-06-13,Australia
    1250,Joint Account,111.11,Gojek,"Entertainment, Dining, General Expenses, Transportation",2022-10-25,Japan
    1251,Joint Account,257.64,Uber,"Transportation, General Expenses",2022-11-02,Australia
    1252,Savings,176.89,Amazon,"Entertainment, Travel, Groceries, General Expenses, Transportation, Dining",2022-10-19,Indonesia
    1253,Checking,571.02,ACME,"Transportation, Dining, Groceries, Travel",2022-08-26,Singapore
    1254,Joint Account,192.59,Fairprice,Entertainment,2022-11-23,Singapore
    1255,Checking,149.04,ACME,"Entertainment, Dining, General Expenses",2022-09-24,Indonesia
    1256,Joint Account,714.69,Grab,General Expenses,2022-12-24,Singapore
    1257,Checking,460.71,Grab,"Entertainment, Dining",2022-10-23,Indonesia
    1258,Checking,868.05,Grab,"Entertainment, General Expenses, Transportation, Travel, Groceries, Dining",2022-11-26,Japan
    1259,Savings,865.12,Walmart,"Entertainment, Travel, General Expenses, Transportation, Groceries",2022-08-12,Japan
    1260,Joint Account,344.66,Grab,"General Expenses, Travel, Entertainment, Groceries, Transportation, Dining",2022-09-28,Australia
    1261,Savings,370.56,Amazon,"Dining, Travel",2022-08-16,Japan
    1262,Savings,979.76,Starbucks,"Travel, Transportation",2022-06-26,Singapore
    1263,Savings,309.39,ACME,"Entertainment, General Expenses, Groceries, Transportation",2022-07-07,Japan
    1264,Savings,114.62,Amazon,"Groceries, Entertainment, General Expenses, Travel",2022-08-31,Australia
    1265,Checking,974.35,Walmart,"Entertainment, Travel",2022-11-12,Australia
    1266,Joint Account,525.55,Starbucks,"Transportation, Travel, Groceries",2022-06-18,Japan
    1267,Joint Account,652.04,Grab,Entertainment,2022-11-15,Japan
    1268,Joint Account,239.12,Amazon,"General Expenses, Entertainment, Transportation, Travel, Groceries",2022-06-15,Singapore
    1269,Checking,186.21,ACME,"Groceries, Entertainment, Transportation, General Expenses, Dining",2022-11-30,Singapore
    1270,Checking,803.35,Amazon,"Transportation, Entertainment, Travel, Groceries",2022-12-19,Indonesia
    1271,Joint Account,993.73,Amazon,Groceries,2022-11-25,Japan
    1272,Joint Account,40.2,ACME,"Travel, Entertainment, Dining",2022-11-10,Singapore
    1273,Savings,106.82,Gojek,"Groceries, Dining, Travel",2022-12-08,Indonesia
    1274,Joint Account,647.7,Amazon,"Transportation, Entertainment, Dining",2022-08-27,Australia
    1275,Savings,755.08,Walmart,"General Expenses, Travel, Transportation",2022-07-22,Australia
    1276,Joint Account,620.95,Fairprice,General Expenses,2022-08-12,Australia
    1277,Checking,408.31,Google,"Groceries, Transportation",2022-09-01,Australia
    1278,Savings,29.95,Starbucks,"Dining, General Expenses, Groceries, Entertainment, Transportation, Travel",2022-06-10,Japan
    1279,Joint Account,26.92,ACME,"General Expenses, Groceries",2022-10-16,Indonesia
    1280,Savings,275.51,Amazon,Transportation,2022-06-25,Singapore
    1281,Savings,926.6,ACME,"Transportation, Entertainment, Travel, Groceries, General Expenses, Dining",2022-08-19,Singapore
    1282,Savings,438.02,Starbucks,"Dining, General Expenses",2022-12-31,Australia
    1283,Joint Account,782.46,Uber,"General Expenses, Transportation, Groceries, Entertainment, Dining",2022-08-05,Singapore
    1284,Joint Account,309.21,Amazon,"Travel, Groceries",2022-08-27,Singapore
    1285,Savings,486.6,Gojek,"Transportation, Dining, Travel",2022-09-05,Singapore
    1286,Joint Account,434.83,Fairprice,"Travel, Groceries, Entertainment, Dining, General Expenses",2022-06-06,Australia
    1287,Checking,507.13,Uber,"Transportation, General Expenses, Entertainment, Travel",2022-07-20,Japan
    1288,Joint Account,284.99,ACME,"Travel, Transportation",2022-11-30,Indonesia
    1289,Savings,338.2,Amazon,"Dining, General Expenses",2022-11-29,Japan
    1290,Savings,563.07,Uber,"Dining, Transportation, Entertainment, General Expenses, Travel",2022-07-17,Singapore
    1291,Joint Account,613.11,Uber,"General Expenses, Travel, Groceries, Dining, Entertainment, Transportation",2022-07-22,Singapore
    1292,Checking,315.7,Amazon,"Dining, Entertainment, General Expenses, Groceries",2022-07-24,Indonesia
    1293,Savings,646.1,Amazon,Travel,2022-10-20,Australia
    1294,Checking,414.85,ACME,"Travel, Entertainment",2022-12-25,Japan
    1295,Savings,394.18,Fairprice,"Dining, Travel, Groceries, General Expenses, Entertainment",2022-09-14,Indonesia
    1296,Joint Account,906.54,Grab,"Transportation, Dining, General Expenses, Travel, Entertainment, Groceries",2022-11-08,Singapore
    1297,Joint Account,96.39,Starbucks,"Entertainment, Transportation, Travel",2022-06-25,Japan
    1298,Joint Account,478.2,Gojek,General Expenses,2022-10-01,Indonesia
    1299,Savings,890.93,Google,"Dining, Entertainment, Transportation",2022-10-20,Indonesia
    1300,Savings,182.42,Gojek,"General Expenses, Entertainment",2022-12-22,Indonesia
    1301,Checking,310.54,Fairprice,General Expenses,2022-07-04,Indonesia
    1302,Checking,927.53,Starbucks,Entertainment,2022-12-20,Australia
    1303,Savings,390.24,Grab,"General Expenses, Travel",2022-08-20,Indonesia
    1304,Checking,292.85,Uber,"Dining, Groceries, Travel, Transportation, General Expenses",2022-06-30,Japan
    1305,Savings,544.33,Google,"Groceries, Transportation, Travel",2022-07-28,Japan
    1306,Savings,456.38,ACME,"Transportation, General Expenses, Entertainment",2022-12-05,Japan
    1307,Savings,860.28,Walmart,"Entertainment, General Expenses, Transportation",2022-09-16,Australia
    1308,Checking,710.77,Gojek,"Entertainment, General Expenses, Dining",2022-12-30,Japan
    1309,Checking,977.06,Grab,"Travel, General Expenses, Entertainment",2022-08-05,Singapore
    1310,Joint Account,667.9,Grab,"Transportation, Groceries, Entertainment, Travel, General Expenses",2022-06-20,Singapore
    1311,Savings,55.52,Google,"Transportation, Groceries, General Expenses",2022-12-19,Japan
    1312,Joint Account,116.36,Starbucks,"Groceries, Entertainment",2022-06-05,Japan
    1313,Checking,768.47,Google,Groceries,2022-09-21,Indonesia
    1314,Checking,833.75,Uber,"Groceries, Transportation, Entertainment, Travel, General Expenses",2022-11-23,Japan
    1315,Checking,703.38,Gojek,"Dining, Groceries, Entertainment",2022-06-01,Japan
    1316,Joint Account,836.41,Amazon,Transportation,2022-08-11,Japan
    1317,Joint Account,575.88,Walmart,"Transportation, Travel, Groceries, Entertainment, General Expenses",2022-06-09,Australia
    1318,Checking,550.82,Walmart,"Transportation, General Expenses, Dining, Travel, Entertainment, Groceries",2022-09-20,Australia
    1319,Joint Account,913.5,Google,"Dining, Transportation",2022-12-22,Japan
    1320,Checking,16.33,Gojek,Travel,2022-06-08,Indonesia
    1321,Joint Account,662.47,Walmart,"General Expenses, Entertainment",2022-06-03,Indonesia
    1322,Joint Account,704.11,Amazon,General Expenses,2022-09-22,Indonesia
    1323,Checking,421.17,Starbucks,Groceries,2022-08-20,Japan
    1324,Savings,622.09,Google,Dining,2022-08-09,Australia
    1325,Savings,680.89,Gojek,"Transportation, Dining, General Expenses, Travel, Groceries",2022-12-20,Australia
    1326,Joint Account,324.2,Amazon,"Transportation, General Expenses, Dining",2022-11-23,Australia
    1327,Checking,666.59,Amazon,Travel,2022-07-05,Indonesia
    1328,Joint Account,720.44,Amazon,"General Expenses, Groceries, Transportation, Travel, Entertainment, Dining",2022-07-26,Indonesia
    1329,Joint Account,868.45,Uber,"Entertainment, Dining, Transportation, General Expenses, Travel, Groceries",2022-10-04,Japan
    1330,Savings,452.78,Amazon,"Travel, General Expenses, Entertainment, Transportation",2022-07-08,Japan
    1331,Joint Account,609.38,Amazon,Dining,2022-09-23,Japan
    1332,Joint Account,609.52,Uber,Entertainment,2022-08-28,Indonesia
    1333,Joint Account,419.62,ACME,"Travel, Entertainment, Transportation",2022-06-30,Indonesia
    1334,Checking,62.59,ACME,"Entertainment, Travel, Transportation",2022-07-15,Japan
    1335,Checking,833.95,Amazon,"Travel, Entertainment, Dining, Groceries, General Expenses",2022-10-16,Australia
    1336,Savings,175.72,Grab,"Groceries, Travel, General Expenses, Entertainment, Dining, Transportation",2022-09-26,Japan
    1337,Checking,760.56,ACME,"Transportation, Groceries, Travel",2022-12-21,Singapore
    1338,Savings,875.6,ACME,"General Expenses, Travel, Groceries, Dining, Transportation",2022-11-15,Indonesia
    1339,Savings,475.99,Gojek,"Transportation, Entertainment, Dining",2022-07-14,Singapore
    1340,Savings,264.48,Walmart,"Dining, Travel, Groceries, General Expenses, Transportation, Entertainment",2022-12-09,Indonesia
    1341,Checking,888.69,Starbucks,Groceries,2022-12-26,Australia
    1342,Checking,623.15,Fairprice,General Expenses,2022-12-15,Indonesia
    1343,Checking,251.44,Google,"Groceries, Entertainment, Transportation, General Expenses, Travel",2022-06-16,Singapore
    1344,Joint Account,844.21,Uber,General Expenses,2022-12-20,Singapore
    1345,Joint Account,460.96,Gojek,"Travel, General Expenses, Transportation, Groceries, Entertainment, Dining",2022-08-19,Indonesia
    1346,Joint Account,947.86,Grab,"Entertainment, Groceries, Transportation, Travel",2022-06-26,Australia
    1347,Joint Account,290.83,ACME,"Entertainment, Groceries, Travel",2022-07-14,Singapore
    1348,Checking,984.18,Gojek,Entertainment,2022-11-28,Singapore
    1349,Savings,536.22,Amazon,General Expenses,2022-10-09,Singapore
    1350,Checking,212.72,Amazon,Travel,2022-12-26,Indonesia
    1351,Joint Account,878.68,Walmart,"Entertainment, Travel, Transportation, Groceries",2022-09-10,Singapore
    1352,Savings,799.89,Fairprice,"Transportation, Dining, Entertainment, Groceries",2022-07-06,Australia
    1353,Joint Account,234.21,Uber,"Travel, Transportation, Groceries",2022-12-05,Japan
    1354,Checking,59.74,Fairprice,General Expenses,2022-11-08,Indonesia
    1355,Savings,823.43,Starbucks,"Dining, Travel, Groceries, Transportation",2022-10-03,Singapore
    1356,Joint Account,783.12,Uber,"General Expenses, Travel, Dining",2022-12-06,Indonesia
    1357,Savings,143.35,Google,"Transportation, Groceries, General Expenses, Travel",2022-09-15,Japan
    1358,Savings,380.83,ACME,"Groceries, Travel, General Expenses, Transportation, Dining, Entertainment",2022-10-17,Japan
    1359,Checking,571.08,ACME,"Transportation, Entertainment, Groceries, Travel, Dining, General Expenses",2022-06-20,Singapore
    1360,Joint Account,908.41,Uber,Groceries,2022-08-07,Japan
    1361,Checking,274.08,Gojek,"Groceries, Dining",2022-10-01,Singapore
    1362,Checking,399.81,Amazon,"Entertainment, Transportation, Groceries, Dining, General Expenses",2022-08-07,Indonesia
    1363,Checking,538.66,Starbucks,"Dining, General Expenses",2022-09-21,Indonesia
    1364,Savings,518.22,Fairprice,"Dining, Transportation, Groceries, Entertainment, Travel, General Expenses",2022-09-15,Indonesia
    1365,Checking,625.55,Google,"General Expenses, Groceries",2022-08-02,Singapore
    1366,Checking,27.3,Starbucks,"Dining, Travel, Entertainment, Groceries, General Expenses",2022-11-22,Australia
    1367,Checking,842.26,Uber,"Entertainment, Groceries, Dining",2022-07-21,Japan
    1368,Savings,352.75,Walmart,"Groceries, Travel",2022-11-14,Australia
    1369,Joint Account,639.47,Walmart,"Transportation, General Expenses, Travel, Entertainment, Groceries",2022-08-13,Singapore
    1370,Checking,585.84,Fairprice,"Transportation, General Expenses",2022-10-23,Singapore
    1371,Joint Account,237.2,Amazon,"Dining, General Expenses, Entertainment, Groceries",2022-08-13,Singapore
    1372,Checking,931.02,Fairprice,"Travel, Entertainment, Groceries, General Expenses, Transportation, Dining",2022-06-23,Japan
    1373,Joint Account,974.62,Google,"Entertainment, Transportation",2022-07-12,Indonesia
    1374,Savings,849.3,Fairprice,"Dining, General Expenses, Transportation, Travel, Groceries, Entertainment",2022-09-16,Singapore
    1375,Savings,628.64,Grab,General Expenses,2022-12-23,Australia
    1376,Joint Account,384.81,Gojek,"General Expenses, Dining, Transportation, Travel, Entertainment",2022-08-31,Australia
    1377,Joint Account,48.48,Starbucks,"Dining, Groceries, General Expenses, Entertainment, Travel, Transportation",2022-11-03,Indonesia
    1378,Checking,715.01,Walmart,"Travel, General Expenses, Entertainment",2022-07-29,Australia
    1379,Checking,219.39,Starbucks,"Entertainment, Groceries, Dining, General Expenses, Transportation, Travel",2022-09-07,Japan
    1380,Checking,513.97,Gojek,Entertainment,2022-06-10,Singapore
    1381,Checking,525.88,Fairprice,"Transportation, Entertainment, Dining",2022-11-22,Australia
    1382,Joint Account,819.95,Grab,"Travel, Dining, Groceries, Transportation, General Expenses",2022-07-06,Australia
    1383,Joint Account,619.96,Gojek,"Groceries, Travel",2022-09-22,Singapore
    1384,Checking,753.41,Uber,"Transportation, Dining, Travel, Groceries, Entertainment, General Expenses",2022-07-27,Japan
    1385,Checking,67.9,Gojek,Groceries,2022-12-07,Japan
    1386,Joint Account,108.46,Fairprice,"Entertainment, Travel",2022-09-03,Australia
    1387,Savings,886.11,Google,"Groceries, Transportation, Entertainment",2022-12-12,Japan
    1388,Savings,781.63,Fairprice,Transportation,2022-12-17,Australia
    1389,Checking,457.59,Walmart,"Transportation, Groceries, Dining, Travel",2022-08-21,Japan
    1390,Joint Account,195.22,ACME,"Dining, Groceries, Transportation, General Expenses, Travel, Entertainment",2022-10-13,Japan
    1391,Checking,219.94,Amazon,General Expenses,2022-08-01,Australia
    1392,Savings,718.63,Amazon,"General Expenses, Dining, Transportation, Travel, Groceries",2022-09-18,Singapore
    1393,Checking,744.56,Starbucks,"Groceries, Entertainment, General Expenses, Dining, Transportation",2022-12-20,Indonesia
    1394,Joint Account,44.14,Starbucks,"Transportation, Groceries, Dining",2022-11-17,Singapore
    1395,Checking,171.67,Amazon,"Transportation, Entertainment",2022-08-15,Indonesia
    1396,Checking,610.48,Amazon,"Travel, General Expenses, Dining, Groceries",2022-08-13,Japan
    1397,Savings,380.78,Walmart,"General Expenses, Groceries",2022-10-20,Singapore
    1398,Checking,587.86,Fairprice,"Entertainment, Groceries, General Expenses, Dining, Transportation, Travel",2022-11-18,Australia
    1399,Checking,74.07,ACME,"General Expenses, Groceries, Transportation, Entertainment, Dining, Travel",2022-06-07,Singapore
    1400,Savings,838.63,Gojek,"Transportation, Travel, General Expenses",2022-08-31,Indonesia
    1401,Joint Account,249.86,Uber,"Travel, Transportation, Dining, General Expenses, Entertainment",2022-08-06,Singapore
    1402,Joint Account,287.29,Fairprice,"Groceries, Dining, Transportation, Entertainment, General Expenses, Travel",2022-12-02,Australia
    1403,Checking,792.25,Gojek,Groceries,2022-07-28,Indonesia
    1404,Savings,223.01,Walmart,"Groceries, Entertainment, Dining",2022-08-21,Singapore
    1405,Joint Account,311.29,Grab,"Groceries, Dining, General Expenses, Transportation, Travel",2022-08-04,Japan
    1406,Savings,272.25,ACME,"Groceries, General Expenses, Transportation",2022-08-30,Australia
    1407,Joint Account,973.6,Grab,Travel,2022-06-20,Australia
    1408,Checking,739.61,Gojek,"Groceries, Dining, Travel, Transportation, General Expenses",2022-08-23,Singapore
    1409,Savings,22.28,ACME,"Entertainment, Travel, Transportation, Groceries, Dining",2022-06-11,Japan
    1410,Joint Account,585.41,Uber,"Travel, Groceries, General Expenses, Entertainment",2022-06-30,Japan
    1411,Checking,774.96,ACME,"Groceries, Travel, General Expenses, Dining, Entertainment",2022-07-19,Indonesia
    1412,Joint Account,494.77,Fairprice,"Groceries, Dining, Entertainment, Transportation, General Expenses",2022-09-11,Singapore
    1413,Checking,663.21,Fairprice,"Transportation, Travel, Groceries, General Expenses, Dining, Entertainment",2022-10-09,Australia
    1414,Checking,704.55,Google,"Transportation, Dining",2022-06-18,Australia
    1415,Savings,362.94,Starbucks,"Groceries, Travel",2022-06-08,Japan
    1416,Checking,676.55,Walmart,"Entertainment, Transportation, Groceries, Travel, General Expenses, Dining",2022-06-26,Indonesia
    1417,Savings,639.92,Uber,"Transportation, General Expenses, Travel, Groceries, Dining, Entertainment",2022-06-14,Australia
    1418,Joint Account,534.65,Starbucks,"Dining, Entertainment, General Expenses",2022-12-01,Singapore
    1419,Savings,122.7,Gojek,"Groceries, Entertainment, Travel, Dining, General Expenses",2022-11-06,Indonesia
    1420,Checking,562.24,Google,"Transportation, Groceries",2022-09-14,Singapore
    1421,Checking,895.48,ACME,Transportation,2022-09-19,Japan
    1422,Checking,101.78,Google,"Entertainment, Transportation, Dining, Travel, Groceries",2022-06-06,Indonesia
    1423,Savings,370.58,Grab,"Entertainment, Transportation, Travel, General Expenses, Dining, Groceries",2022-09-23,Australia
    1424,Checking,524.41,ACME,Groceries,2022-07-26,Indonesia
    1425,Savings,613.12,Gojek,"Travel, Entertainment, Dining",2022-06-19,Indonesia
    1426,Savings,755.19,ACME,"Travel, Groceries, Entertainment, Transportation, Dining",2022-10-27,Australia
    1427,Joint Account,976.38,Grab,"Transportation, Dining, Entertainment",2022-06-30,Singapore
    1428,Savings,573.39,Grab,"Travel, Entertainment, General Expenses, Groceries, Transportation",2022-10-24,Japan
    1429,Joint Account,914.87,ACME,Dining,2022-11-17,Australia
    1430,Savings,522.41,Grab,"Transportation, Dining, General Expenses, Travel",2022-12-06,Japan
    1431,Joint Account,631.62,Grab,"Transportation, Entertainment, Travel, General Expenses",2022-10-10,Japan
    1432,Savings,533.82,Uber,"General Expenses, Travel, Groceries, Entertainment, Dining, Transportation",2022-11-18,Japan
    1433,Checking,460.9,Walmart,"Travel, General Expenses, Dining, Groceries, Transportation, Entertainment",2022-09-15,Indonesia
    1434,Savings,229.37,Grab,"Travel, Groceries, Entertainment, General Expenses, Transportation, Dining",2022-08-16,Japan
    1435,Checking,192.94,Gojek,"General Expenses, Transportation, Dining",2022-09-23,Singapore
    1436,Savings,274.02,Walmart,"Dining, Transportation, Travel, General Expenses, Entertainment, Groceries",2022-10-18,Japan
    1437,Savings,777.26,Google,"Travel, Dining, Groceries",2022-06-12,Singapore
    1438,Checking,170.89,Starbucks,Travel,2022-12-23,Australia
    1439,Joint Account,441.6,Grab,"Groceries, Transportation, Entertainment",2022-09-03,Australia
    1440,Checking,631.84,Fairprice,"General Expenses, Dining, Travel, Entertainment, Transportation, Groceries",2022-12-26,Indonesia
    1441,Savings,469.89,Walmart,"Dining, Groceries, Entertainment, Travel, Transportation, General Expenses",2022-08-10,Japan
    1442,Savings,928.1,Walmart,"Groceries, General Expenses, Dining, Entertainment, Transportation",2022-11-07,Japan
    1443,Joint Account,208.26,Google,"General Expenses, Travel",2022-11-01,Singapore
    1444,Checking,519.8,Gojek,"Groceries, Dining",2022-08-31,Australia
    1445,Checking,280.03,ACME,"General Expenses, Travel, Dining, Transportation, Groceries",2022-07-25,Australia
    1446,Savings,543.99,Google,"General Expenses, Groceries, Dining, Travel, Transportation, Entertainment",2022-11-07,Indonesia
    1447,Checking,604.94,Grab,"Entertainment, Groceries, Transportation",2022-12-15,Indonesia
    1448,Checking,811.77,Amazon,"Entertainment, Travel, Transportation",2022-08-25,Japan
    1449,Checking,8.63,Google,"Entertainment, Dining",2022-08-26,Indonesia
    1450,Joint Account,219.69,ACME,"Dining, Entertainment, Groceries, General Expenses, Transportation, Travel",2022-06-10,Japan
    1451,Savings,136.05,Amazon,"Transportation, General Expenses, Entertainment, Travel, Groceries",2022-10-02,Japan
    1452,Savings,429.08,Amazon,General Expenses,2022-11-19,Singapore
    1453,Checking,516.48,ACME,Transportation,2022-07-08,Indonesia
    1454,Checking,199.87,Starbucks,"Transportation, Groceries, Travel, Dining, Entertainment, General Expenses",2022-08-08,Singapore
    1455,Savings,103.92,Starbucks,"Dining, General Expenses, Groceries",2022-09-26,Indonesia
    1456,Joint Account,837.35,Fairprice,"Transportation, Dining, Travel",2022-09-26,Japan
    1457,Checking,617.55,Amazon,Travel,2022-10-08,Japan
    1458,Savings,252.11,Uber,"Travel, Entertainment, Transportation, General Expenses, Groceries, Dining",2022-10-23,Australia
    1459,Joint Account,715.64,Uber,"Dining, Entertainment",2022-11-03,Japan
    1460,Joint Account,136.0,Gojek,"Travel, General Expenses, Groceries, Transportation",2022-09-19,Indonesia
    1461,Joint Account,840.91,Starbucks,Transportation,2022-08-12,Japan
    1462,Joint Account,109.7,Grab,"General Expenses, Entertainment, Dining",2022-10-10,Singapore
    1463,Checking,111.88,Amazon,"Groceries, Dining, Entertainment, General Expenses, Travel",2022-12-08,Indonesia
    1464,Joint Account,814.13,ACME,"Groceries, Travel, Transportation",2022-07-17,Australia
    1465,Savings,139.85,Amazon,"Transportation, Groceries, Dining, General Expenses, Entertainment, Travel",2022-09-30,Singapore
    1466,Checking,294.56,Uber,Transportation,2022-10-09,Japan
    1467,Savings,439.58,ACME,"Travel, General Expenses",2022-08-05,Singapore
    1468,Checking,211.1,Gojek,"General Expenses, Travel, Groceries, Dining, Transportation",2022-10-25,Singapore
    1469,Joint Account,80.1,Grab,Groceries,2022-12-23,Japan
    1470,Joint Account,45.98,Amazon,"Transportation, General Expenses, Entertainment, Groceries, Dining, Travel",2022-06-27,Singapore
    1471,Checking,178.0,Starbucks,"Groceries, Dining, General Expenses, Transportation, Entertainment",2022-11-12,Indonesia
    1472,Savings,543.66,Google,"Transportation, General Expenses, Dining, Entertainment, Groceries, Travel",2022-11-02,Indonesia
    1473,Savings,550.24,Grab,"Travel, Groceries, General Expenses, Entertainment, Dining",2022-11-10,Australia
    1474,Joint Account,292.34,Fairprice,"Entertainment, Dining, General Expenses, Transportation",2022-08-14,Singapore
    1475,Savings,296.84,Starbucks,"Groceries, Entertainment, Transportation, Dining, General Expenses",2022-10-23,Australia
    1476,Joint Account,358.54,Google,"Entertainment, Dining, General Expenses",2022-06-21,Japan
    1477,Joint Account,136.14,Walmart,"Travel, Dining, Transportation",2022-11-25,Indonesia
    1478,Checking,403.68,Google,"Transportation, Groceries, General Expenses",2022-09-23,Singapore
    1479,Checking,933.9,Walmart,"Dining, Groceries, Transportation, General Expenses",2022-09-07,Australia
    1480,Checking,444.16,Starbucks,"Groceries, Dining",2022-11-23,Indonesia
    1481,Checking,268.32,Walmart,Travel,2022-09-07,Japan
    1482,Checking,240.26,Walmart,Dining,2022-09-22,Singapore
    1483,Savings,974.63,Uber,"Transportation, Dining, Entertainment",2022-12-26,Australia
    1484,Checking,381.36,Walmart,"Groceries, Dining, Entertainment, Travel",2022-09-24,Japan
    1485,Savings,550.04,Grab,"Entertainment, Travel, Transportation, Groceries",2022-10-20,Australia
    1486,Checking,313.86,Google,"Entertainment, General Expenses, Dining, Travel",2022-06-09,Japan
    1487,Checking,407.78,Gojek,"Dining, General Expenses",2022-06-13,Japan
    1488,Checking,310.02,ACME,"Transportation, Dining, Groceries",2022-10-19,Japan
    1489,Checking,830.55,Uber,"Travel, Entertainment, Groceries, Transportation",2022-07-21,Singapore
    1490,Checking,730.02,Amazon,"Entertainment, General Expenses, Groceries",2022-06-27,Australia
    1491,Checking,500.88,Walmart,"Travel, General Expenses, Groceries, Entertainment",2022-12-02,Australia
    1492,Savings,393.91,Starbucks,Dining,2022-10-06,Australia
    1493,Checking,845.1,Amazon,"Entertainment, Dining, Travel, Transportation, Groceries, General Expenses",2022-06-05,Singapore
    1494,Joint Account,133.32,Uber,"Entertainment, General Expenses, Travel, Groceries, Transportation, Dining",2022-12-12,Japan
    1495,Checking,67.39,Fairprice,Transportation,2022-09-15,Japan
    1496,Savings,615.49,Fairprice,"Dining, Groceries, Travel, Entertainment",2022-10-18,Singapore
    1497,Checking,214.33,Gojek,"Transportation, Groceries, Entertainment",2022-12-22,Singapore
    1498,Savings,936.2,ACME,"General Expenses, Entertainment, Groceries, Dining",2022-08-09,Singapore
    1499,Savings,707.59,Google,"Groceries, Travel",2022-09-22,Japan
    1500,Joint Account,218.89,Walmart,"Groceries, Travel, Dining, Entertainment, General Expenses",2022-11-07,Australia
    1501,Joint Account,516.07,Starbucks,"Travel, Entertainment",2022-08-31,Indonesia
    1502,Joint Account,430.82,Grab,Transportation,2022-06-27,Japan
    1503,Checking,117.21,Uber,"Groceries, Entertainment",2022-11-11,Singapore
    1504,Savings,873.73,Grab,"Travel, Dining, General Expenses, Transportation, Entertainment, Groceries",2022-09-18,Japan
    1505,Savings,565.9,Uber,"Groceries, Entertainment, General Expenses, Transportation, Travel",2022-10-26,Singapore
    1506,Joint Account,139.43,Amazon,General Expenses,2022-10-26,Indonesia
    1507,Joint Account,898.53,Google,"Transportation, Dining",2022-12-16,Indonesia
    1508,Checking,278.08,ACME,"Transportation, Entertainment, Travel",2022-07-02,Japan
    1509,Checking,990.17,Google,"Travel, Dining, General Expenses, Groceries",2022-08-23,Japan
    1510,Savings,711.68,Uber,"Entertainment, Dining, Transportation",2022-10-08,Singapore
    1511,Joint Account,471.93,Amazon,"General Expenses, Entertainment, Dining, Groceries, Transportation",2022-07-25,Australia
    1512,Savings,149.98,Gojek,"Transportation, Entertainment, Travel, General Expenses",2022-08-18,Singapore
    1513,Joint Account,987.77,Google,Groceries,2022-11-18,Australia
    1514,Checking,733.06,Grab,"Transportation, General Expenses",2022-12-20,Indonesia
    1515,Checking,727.48,Starbucks,Travel,2022-12-11,Japan
    1516,Checking,130.49,Google,"Entertainment, General Expenses, Groceries, Transportation",2022-11-09,Japan
    1517,Joint Account,205.61,Uber,General Expenses,2022-06-20,Australia
    1518,Checking,617.42,Uber,"Dining, Groceries",2022-11-28,Japan
    1519,Joint Account,716.48,Google,General Expenses,2022-11-16,Indonesia
    1520,Savings,894.44,Gojek,"Travel, Groceries, Dining",2022-12-28,Indonesia
    1521,Savings,604.52,Google,"Transportation, Dining",2022-11-25,Australia
    1522,Checking,893.06,Walmart,"Groceries, Travel, Transportation, Dining, General Expenses, Entertainment",2022-08-07,Singapore
    1523,Savings,393.19,ACME,"Travel, Dining, Transportation, Groceries, Entertainment",2022-07-03,Singapore
    1524,Checking,375.6,Walmart,"Travel, General Expenses, Groceries, Transportation",2022-06-24,Singapore
    1525,Checking,733.94,Uber,Travel,2022-12-28,Indonesia
    1526,Savings,331.74,Grab,"Entertainment, General Expenses, Dining",2022-06-28,Japan
    1527,Joint Account,222.48,Google,"General Expenses, Groceries, Transportation, Travel",2022-09-28,Australia
    1528,Joint Account,485.98,Google,"Groceries, General Expenses, Transportation",2022-10-26,Australia
    1529,Savings,152.96,Starbucks,"Entertainment, General Expenses, Transportation, Travel, Groceries, Dining",2022-08-31,Japan
    1530,Joint Account,849.59,Starbucks,"Dining, Travel, Groceries, Entertainment",2022-07-19,Indonesia
    1531,Checking,148.79,Gojek,"Dining, General Expenses, Travel, Transportation, Entertainment",2022-11-13,Indonesia
    1532,Savings,243.77,Grab,"Travel, Dining, Entertainment, General Expenses, Groceries",2022-06-26,Singapore
    1533,Checking,979.49,Starbucks,Entertainment,2022-11-06,Australia
    1534,Checking,233.25,Fairprice,"Groceries, General Expenses, Entertainment, Dining, Transportation",2022-12-05,Australia
    1535,Checking,40.0,Uber,"General Expenses, Groceries",2022-06-18,Japan
    1536,Checking,848.88,Google,"Dining, Travel, Transportation, Entertainment, Groceries",2022-09-29,Australia
    1537,Savings,299.0,Uber,Groceries,2022-09-15,Japan
    1538,Checking,903.8,Google,"General Expenses, Transportation, Groceries",2022-08-06,Indonesia
    1539,Checking,988.47,Grab,"Transportation, General Expenses, Groceries",2022-09-30,Singapore
    1540,Joint Account,952.07,Uber,"Entertainment, Groceries",2022-07-21,Japan
    1541,Checking,539.2,Fairprice,Groceries,2022-11-17,Singapore
    1542,Checking,197.65,Google,"Dining, Entertainment, General Expenses, Groceries, Travel, Transportation",2022-07-01,Australia
    1543,Joint Account,103.1,Grab,"Groceries, General Expenses",2022-06-29,Australia
    1544,Checking,662.85,Walmart,"Dining, Groceries, Travel",2022-06-06,Japan
    1545,Savings,566.13,Starbucks,"General Expenses, Entertainment, Transportation, Dining, Groceries",2022-07-21,Singapore
    1546,Savings,395.12,ACME,"Transportation, Travel, Entertainment, Groceries",2022-11-11,Australia
    1547,Savings,908.28,Grab,"Travel, Entertainment, Transportation",2022-06-11,Singapore
    1548,Joint Account,187.67,Google,"Groceries, Dining, Travel, Transportation, Entertainment",2022-07-30,Singapore
    1549,Savings,610.98,Gojek,"Entertainment, Transportation, Travel, Groceries",2022-10-17,Japan
    1550,Joint Account,639.92,Grab,"Dining, Entertainment, Transportation, Groceries",2022-11-27,Japan
    1551,Checking,630.38,Walmart,Transportation,2022-08-08,Singapore
    1552,Joint Account,622.05,Fairprice,"Transportation, Travel",2022-12-14,Japan
    1553,Savings,719.49,Amazon,Groceries,2022-10-07,Japan
    1554,Savings,91.22,Walmart,"Groceries, Travel, Entertainment, General Expenses, Dining",2022-10-27,Australia
    1555,Joint Account,48.86,ACME,"Transportation, General Expenses, Entertainment, Dining, Travel",2022-07-21,Singapore
    1556,Checking,567.04,Fairprice,Transportation,2022-06-20,Australia
    1557,Savings,413.74,Fairprice,"Groceries, General Expenses",2022-08-28,Japan
    1558,Checking,367.5,ACME,"Entertainment, Groceries",2022-12-18,Singapore
    1559,Checking,177.85,Starbucks,"Transportation, Entertainment, General Expenses, Travel",2022-06-30,Japan
    1560,Joint Account,966.07,Amazon,"Entertainment, General Expenses, Groceries, Dining, Transportation",2022-07-21,Australia
    1561,Joint Account,955.29,Amazon,"Travel, Groceries, General Expenses",2022-10-13,Singapore
    1562,Checking,197.51,Fairprice,"Transportation, Entertainment, General Expenses, Travel, Groceries",2022-10-02,Indonesia
    1563,Joint Account,873.3,Amazon,"Dining, Groceries, General Expenses, Entertainment, Transportation",2022-11-01,Singapore
    1564,Savings,288.93,ACME,"Groceries, Dining",2022-08-01,Australia
    1565,Checking,610.26,Grab,"Groceries, Dining, Travel, Entertainment",2022-12-11,Japan
    1566,Checking,206.11,Amazon,"Dining, Transportation",2022-10-04,Singapore
    1567,Joint Account,314.92,Fairprice,"Transportation, Entertainment",2022-11-15,Japan
    1568,Savings,582.23,Gojek,"Groceries, General Expenses, Transportation, Travel, Dining, Entertainment",2022-10-07,Australia
    1569,Joint Account,732.34,Walmart,"Transportation, Dining, Groceries, General Expenses",2022-08-05,Singapore
    1570,Savings,937.01,Grab,"Groceries, Travel, Entertainment, Transportation, Dining, General Expenses",2022-12-04,Japan
    1571,Joint Account,128.84,Google,"Transportation, Entertainment, Groceries, Dining",2022-08-22,Japan
    1572,Joint Account,628.83,Uber,Travel,2022-08-20,Indonesia
    1573,Savings,774.3,Walmart,"Groceries, Dining, General Expenses, Entertainment, Travel, Transportation",2022-07-03,Singapore
    1574,Checking,954.09,Uber,Transportation,2022-10-03,Indonesia
    1575,Joint Account,598.58,Amazon,General Expenses,2022-06-01,Singapore
    1576,Checking,779.79,Google,"Travel, Transportation, Groceries, Entertainment, Dining, General Expenses",2022-07-29,Singapore
    1577,Checking,180.52,Google,"Transportation, Groceries, General Expenses, Entertainment",2022-07-26,Australia
    1578,Savings,599.79,Uber,"Travel, General Expenses, Groceries, Transportation, Dining, Entertainment",2022-10-23,Australia
    1579,Joint Account,563.7,Starbucks,"Travel, Entertainment, Groceries, Dining",2022-11-08,Australia
    1580,Savings,187.55,Amazon,"General Expenses, Travel, Entertainment, Groceries, Dining, Transportation",2022-08-16,Indonesia
    1581,Joint Account,745.29,Amazon,"Groceries, Dining",2022-08-04,Japan
    1582,Joint Account,423.64,Walmart,"Entertainment, Groceries, Travel, Transportation, Dining",2022-12-17,Australia
    1583,Joint Account,810.93,Starbucks,Dining,2022-09-13,Singapore
    1584,Checking,449.45,Google,"Travel, General Expenses, Dining, Entertainment",2022-07-26,Indonesia
    1585,Savings,786.58,Grab,"Travel, General Expenses, Entertainment, Dining, Groceries",2022-07-27,Singapore
    1586,Joint Account,382.39,Uber,"General Expenses, Travel, Groceries, Entertainment, Dining",2022-08-02,Australia
    1587,Joint Account,338.26,Uber,Dining,2022-08-18,Singapore
    1588,Savings,48.27,Gojek,"Entertainment, Transportation, General Expenses, Dining, Groceries",2022-07-22,Australia
    1589,Joint Account,386.28,Grab,"Groceries, Entertainment, Dining, General Expenses",2022-06-11,Singapore
    1590,Checking,953.9,Walmart,"Groceries, General Expenses, Entertainment",2022-12-16,Indonesia
    1591,Joint Account,736.4,Gojek,Entertainment,2022-11-04,Japan
    1592,Savings,602.81,Amazon,"General Expenses, Dining, Groceries, Transportation, Entertainment",2022-09-23,Singapore
    1593,Joint Account,49.28,Fairprice,"General Expenses, Travel, Groceries",2022-06-04,Australia
    1594,Joint Account,754.33,Starbucks,"Transportation, General Expenses, Travel, Groceries, Dining",2022-09-04,Indonesia
    1595,Joint Account,877.16,Amazon,"Dining, Groceries",2022-08-14,Indonesia
    1596,Savings,212.2,Amazon,"Groceries, Dining, Travel, Transportation, General Expenses",2022-07-26,Singapore
    1597,Savings,97.58,Uber,"Transportation, General Expenses, Entertainment, Groceries, Travel",2022-06-16,Singapore
    1598,Joint Account,5.68,ACME,"Entertainment, General Expenses, Transportation, Groceries, Travel",2022-06-23,Indonesia
    1599,Savings,164.19,Gojek,"Travel, Groceries, Transportation, Dining",2022-10-30,Singapore
    1600,Joint Account,899.68,Grab,"Transportation, Dining, General Expenses, Travel",2022-07-28,Japan
    1601,Checking,165.82,Uber,"Dining, General Expenses, Groceries",2022-11-13,Japan
    1602,Joint Account,836.82,Walmart,"Transportation, Travel, Entertainment, Groceries, General Expenses",2022-11-27,Australia
    1603,Joint Account,415.49,Gojek,"Entertainment, Dining, Travel, Transportation, General Expenses",2022-08-08,Indonesia
    1604,Checking,795.68,Amazon,"Transportation, Entertainment",2022-09-03,Singapore
    1605,Joint Account,679.59,Amazon,"Travel, Entertainment, Dining",2022-12-25,Japan
    1606,Checking,379.45,Walmart,"Travel, Dining, Groceries",2022-06-22,Singapore
    1607,Checking,568.95,Amazon,"Dining, Entertainment, General Expenses",2022-10-03,Japan
    1608,Joint Account,854.3,Google,"General Expenses, Travel, Groceries, Entertainment, Transportation",2022-10-11,Singapore
    1609,Savings,665.37,Amazon,"Travel, Dining, Entertainment",2022-12-20,Australia
    1610,Joint Account,132.4,Fairprice,"Groceries, Entertainment, General Expenses, Dining",2022-07-05,Australia
    1611,Checking,348.15,Google,"Dining, Transportation, Groceries, Travel, General Expenses",2022-09-13,Australia
    1612,Checking,223.45,Google,"General Expenses, Entertainment",2022-11-23,Singapore
    1613,Checking,287.92,Walmart,"Transportation, Entertainment, Groceries, General Expenses",2022-12-26,Japan
    1614,Savings,923.4,Grab,"Entertainment, General Expenses, Travel, Groceries, Transportation, Dining",2022-09-11,Indonesia
    1615,Checking,744.67,Grab,"Entertainment, General Expenses, Travel, Transportation, Groceries",2022-08-02,Singapore
    1616,Checking,460.42,Starbucks,"Groceries, Dining",2022-06-03,Indonesia
    1617,Joint Account,75.34,Uber,General Expenses,2022-09-28,Indonesia
    1618,Checking,866.73,Fairprice,"General Expenses, Dining, Transportation",2022-09-04,Australia
    1619,Checking,365.47,Gojek,"Travel, Transportation, Dining, General Expenses, Groceries",2022-06-14,Australia
    1620,Savings,972.49,Amazon,"Travel, Dining",2022-06-15,Singapore
    1621,Savings,742.35,Walmart,"Travel, Dining",2022-08-10,Japan
    1622,Savings,499.21,Grab,"Travel, Groceries, General Expenses",2022-07-06,Indonesia
    1623,Checking,523.72,Fairprice,"Travel, Transportation, Groceries, Dining",2022-06-26,Australia
    1624,Joint Account,464.41,Google,"Groceries, Dining, Transportation, Travel, General Expenses, Entertainment",2022-09-29,Indonesia
    1625,Checking,66.27,ACME,General Expenses,2022-12-17,Japan
    1626,Joint Account,119.14,Walmart,"Entertainment, Groceries, Dining, General Expenses, Transportation, Travel",2022-06-07,Indonesia
    1627,Checking,972.77,Uber,"Dining, General Expenses, Travel, Transportation",2022-06-28,Indonesia
    1628,Joint Account,418.25,ACME,Entertainment,2022-06-30,Japan
    1629,Joint Account,221.41,Google,"Dining, Travel, Entertainment, Transportation, Groceries",2022-11-17,Japan
    1630,Checking,616.72,Fairprice,"Dining, General Expenses, Transportation, Entertainment, Travel, Groceries",2022-10-24,Australia
    1631,Joint Account,937.0,Amazon,"General Expenses, Dining, Travel, Groceries",2022-06-02,Singapore
    1632,Joint Account,51.59,Starbucks,General Expenses,2022-10-14,Australia
    1633,Checking,499.47,Starbucks,"Entertainment, Dining, General Expenses, Groceries, Transportation, Travel",2022-10-26,Japan
    1634,Joint Account,263.44,Fairprice,"Travel, Dining, Transportation, General Expenses",2022-06-09,Japan
    1635,Checking,667.14,Starbucks,"Transportation, Groceries, Travel",2022-11-16,Singapore
    1636,Joint Account,941.71,Walmart,"Transportation, Groceries",2022-07-21,Indonesia
    1637,Joint Account,529.75,Google,"Entertainment, General Expenses",2022-12-11,Indonesia
    1638,Checking,249.85,Fairprice,"Transportation, General Expenses, Dining, Travel, Entertainment, Groceries",2022-12-26,Singapore
    1639,Joint Account,502.19,ACME,"Entertainment, General Expenses, Transportation",2022-06-01,Indonesia
    1640,Joint Account,750.07,Uber,"Transportation, Groceries, Travel, Dining, General Expenses, Entertainment",2022-12-11,Japan
    1641,Checking,939.83,Google,"Dining, General Expenses, Travel, Transportation, Entertainment, Groceries",2022-07-14,Singapore
    1642,Joint Account,235.22,Gojek,"Groceries, Transportation",2022-07-30,Japan
    1643,Checking,297.52,ACME,"Travel, Transportation, General Expenses, Groceries, Dining",2022-09-04,Indonesia
    1644,Savings,95.73,Grab,"General Expenses, Groceries, Entertainment, Travel, Dining",2022-09-11,Japan
    1645,Savings,66.08,Starbucks,"Dining, Groceries, General Expenses, Entertainment, Transportation",2022-09-30,Australia
    1646,Savings,993.02,Amazon,Dining,2022-12-26,Indonesia
    1647,Joint Account,502.91,Fairprice,Transportation,2022-06-06,Japan
    1648,Joint Account,618.97,Starbucks,"Groceries, Travel, Entertainment, General Expenses, Transportation, Dining",2022-08-18,Australia
    1649,Joint Account,88.48,Starbucks,Groceries,2022-08-04,Japan
    1650,Checking,290.07,Starbucks,Entertainment,2022-10-05,Australia
    1651,Checking,301.3,ACME,"Groceries, Travel, General Expenses, Transportation, Dining",2022-09-04,Indonesia
    1652,Joint Account,135.23,Google,"Dining, Entertainment",2022-07-31,Indonesia
    1653,Joint Account,33.78,Fairprice,General Expenses,2022-07-25,Indonesia
    1654,Savings,208.32,Amazon,"Entertainment, Travel, Groceries, Dining, General Expenses, Transportation",2022-08-26,Japan
    1655,Joint Account,545.46,Walmart,"Groceries, Travel, Dining",2022-09-23,Indonesia
    1656,Checking,551.23,Starbucks,"Entertainment, Transportation, Groceries, Dining",2022-07-23,Singapore
    1657,Checking,106.7,Walmart,"Entertainment, Dining, Travel, Transportation, General Expenses, Groceries",2022-07-23,Japan
    1658,Checking,726.69,Gojek,Travel,2022-11-24,Singapore
    1659,Savings,900.07,Starbucks,"Entertainment, Transportation, General Expenses, Groceries",2022-06-04,Japan
    1660,Joint Account,775.76,Gojek,"General Expenses, Transportation, Entertainment, Dining",2022-11-11,Indonesia
    1661,Savings,312.99,Walmart,"Travel, General Expenses, Transportation, Entertainment",2022-10-11,Indonesia
    1662,Joint Account,582.93,Amazon,"Dining, Travel, Transportation",2022-10-04,Australia
    1663,Joint Account,728.5,Google,"Groceries, Transportation, Entertainment, Travel, General Expenses",2022-08-23,Japan
    1664,Joint Account,388.0,Starbucks,"Groceries, Transportation",2022-08-26,Singapore
    1665,Savings,778.5,Grab,"Groceries, Entertainment, Travel, Dining",2022-11-30,Japan
    1666,Joint Account,139.56,Walmart,"Entertainment, Dining",2022-08-24,Japan
    1667,Savings,376.22,Amazon,"Groceries, Entertainment",2022-12-09,Japan
    1668,Checking,762.11,Amazon,"General Expenses, Transportation",2022-08-13,Japan
    1669,Savings,276.02,Fairprice,"Dining, Entertainment, Transportation, Travel, Groceries, General Expenses",2022-06-01,Australia
    1670,Joint Account,787.12,Starbucks,"Dining, Travel, Transportation",2022-11-09,Indonesia
    1671,Joint Account,784.49,Fairprice,Groceries,2022-12-18,Australia
    1672,Savings,618.71,Amazon,"Dining, Entertainment",2022-11-01,Japan
    1673,Savings,810.95,Grab,"Dining, Travel, General Expenses, Transportation",2022-06-12,Singapore
    1674,Savings,999.3,Walmart,"Groceries, General Expenses, Entertainment, Transportation, Dining, Travel",2022-11-17,Indonesia
    1675,Savings,870.4,Uber,"Entertainment, Groceries, Transportation, Dining, General Expenses",2022-12-21,Singapore
    1676,Joint Account,548.11,Uber,"Travel, General Expenses, Dining, Groceries, Transportation",2022-08-26,Australia
    1677,Checking,919.03,Uber,"Groceries, Travel, Dining",2022-06-08,Indonesia
    1678,Savings,629.15,Fairprice,"Travel, Dining, General Expenses, Transportation, Entertainment, Groceries",2022-06-21,Indonesia
    1679,Joint Account,941.77,Gojek,"Travel, Entertainment, General Expenses, Dining, Groceries",2022-08-18,Indonesia
    1680,Savings,815.71,Google,"General Expenses, Entertainment",2022-08-24,Singapore
    1681,Joint Account,566.47,Grab,"Groceries, Entertainment, General Expenses, Dining",2022-12-13,Indonesia
    1682,Joint Account,254.06,Grab,"Travel, Groceries, Transportation, Entertainment",2022-06-21,Japan
    1683,Checking,542.95,Walmart,"Groceries, General Expenses, Dining, Entertainment, Transportation, Travel",2022-11-01,Australia
    1684,Checking,853.36,Starbucks,"General Expenses, Dining, Groceries",2022-12-09,Australia
    1685,Savings,457.45,Grab,"Transportation, Dining, General Expenses, Entertainment, Groceries",2022-08-21,Singapore
    1686,Checking,355.52,Google,"Dining, Transportation, Travel",2022-06-18,Australia
    1687,Joint Account,407.3,Grab,Groceries,2022-07-26,Japan
    1688,Checking,747.19,Walmart,"Transportation, Travel, Groceries, General Expenses, Entertainment, Dining",2022-09-30,Japan
    1689,Joint Account,26.18,Grab,"Transportation, Entertainment",2022-08-31,Japan
    1690,Savings,159.83,Walmart,Groceries,2022-07-05,Australia
    1691,Checking,942.92,ACME,"Dining, Entertainment, Groceries, Transportation",2022-10-31,Japan
    1692,Checking,467.27,Starbucks,"Transportation, General Expenses, Groceries, Travel, Dining, Entertainment",2022-08-18,Japan
    1693,Savings,305.46,Walmart,"General Expenses, Dining",2022-08-30,Indonesia
    1694,Joint Account,91.44,Starbucks,"Dining, Transportation",2022-10-03,Singapore
    1695,Joint Account,413.23,Google,Dining,2022-11-12,Australia
    1696,Savings,136.59,Fairprice,"Groceries, Entertainment, Dining, Transportation, General Expenses, Travel",2022-12-13,Australia
    1697,Joint Account,446.84,Grab,"Dining, Transportation, Entertainment, Travel, General Expenses",2022-12-21,Singapore
    1698,Savings,516.03,Fairprice,Groceries,2022-06-24,Australia
    1699,Savings,93.44,Amazon,"Travel, General Expenses, Groceries",2022-08-09,Australia
    1700,Checking,114.14,ACME,"Dining, Travel, Groceries, General Expenses",2022-09-04,Indonesia
    1701,Savings,557.77,Google,"Dining, Groceries, Travel, Entertainment, Transportation, General Expenses",2022-10-31,Indonesia
    1702,Checking,603.68,Gojek,"Transportation, Entertainment, Dining, Travel, Groceries, General Expenses",2022-07-31,Japan
    1703,Savings,6.76,Grab,Transportation,2022-08-12,Japan
    1704,Joint Account,394.57,Starbucks,"Dining, Travel",2022-06-03,Japan
    1705,Joint Account,588.11,Fairprice,"Entertainment, Travel, Transportation, Groceries, General Expenses",2022-10-14,Indonesia
    1706,Checking,574.24,Uber,"General Expenses, Travel, Groceries, Entertainment, Dining, Transportation",2022-08-28,Indonesia
    1707,Savings,246.81,ACME,"Entertainment, Travel, General Expenses, Transportation",2022-08-25,Singapore
    1708,Checking,719.44,Amazon,"Travel, Groceries, Entertainment, General Expenses, Dining, Transportation",2022-07-09,Japan
    1709,Savings,708.94,ACME,"Travel, Dining, General Expenses",2022-11-18,Indonesia
    1710,Savings,205.08,Fairprice,"Transportation, Dining, Entertainment",2022-10-01,Singapore
    1711,Joint Account,827.13,Google,Groceries,2022-08-16,Indonesia
    1712,Joint Account,135.19,Uber,"Transportation, Entertainment",2022-07-10,Singapore
    1713,Joint Account,789.51,Amazon,"General Expenses, Entertainment",2022-07-04,Singapore
    1714,Checking,719.5,Fairprice,"Entertainment, Transportation, General Expenses",2022-08-23,Japan
    1715,Checking,371.56,Amazon,"Travel, General Expenses, Transportation, Dining, Entertainment",2022-08-27,Australia
    1716,Checking,539.05,Grab,"Entertainment, Dining, Transportation, Travel, General Expenses",2022-11-29,Australia
    1717,Savings,617.24,ACME,"Entertainment, Travel",2022-12-26,Indonesia
    1718,Joint Account,118.25,Grab,Dining,2022-10-01,Australia
    1719,Joint Account,247.83,Google,"Transportation, Travel",2022-12-02,Singapore
    1720,Savings,564.29,Walmart,Groceries,2022-08-13,Singapore
    1721,Joint Account,528.63,Uber,"Entertainment, Transportation, Groceries, Dining, Travel, General Expenses",2022-09-15,Singapore
    1722,Checking,677.24,Grab,"Transportation, Entertainment, Travel, Dining, General Expenses, Groceries",2022-11-04,Singapore
    1723,Joint Account,233.98,ACME,"General Expenses, Entertainment, Travel, Transportation, Groceries",2022-10-24,Japan
    1724,Joint Account,90.77,Gojek,"Entertainment, Transportation, Groceries",2022-09-27,Japan
    1725,Joint Account,480.19,Starbucks,"Entertainment, Transportation",2022-12-18,Singapore
    1726,Savings,89.85,Amazon,"Travel, Transportation",2022-09-15,Indonesia
    1727,Savings,657.93,Gojek,"Dining, Entertainment, General Expenses, Groceries, Travel",2022-07-18,Japan
    1728,Checking,910.64,ACME,Groceries,2022-08-19,Australia
    1729,Joint Account,240.91,Starbucks,"General Expenses, Transportation, Travel, Dining, Groceries, Entertainment",2022-06-08,Australia
    1730,Joint Account,819.3,Uber,Travel,2022-10-13,Australia
    1731,Joint Account,871.38,Starbucks,"Dining, Transportation, Travel",2022-10-22,Japan
    1732,Joint Account,108.02,Fairprice,"Entertainment, Dining, Travel, Groceries",2022-08-28,Indonesia
    1733,Joint Account,871.05,ACME,"Transportation, General Expenses, Dining, Travel, Groceries",2022-08-02,Australia
    1734,Joint Account,217.75,Uber,"Dining, General Expenses, Transportation, Groceries, Travel",2022-06-08,Australia
    1735,Savings,802.04,Gojek,"Travel, General Expenses, Transportation",2022-10-16,Singapore
    1736,Savings,296.23,Uber,General Expenses,2022-10-05,Japan
    1737,Checking,734.91,Amazon,"Entertainment, Groceries, Dining, Travel",2022-11-11,Singapore
    1738,Joint Account,207.09,Starbucks,"Travel, General Expenses, Groceries, Transportation",2022-09-27,Indonesia
    1739,Checking,375.71,Fairprice,"Dining, Entertainment, Transportation, General Expenses",2022-08-22,Japan
    1740,Joint Account,442.98,ACME,"General Expenses, Dining",2022-11-28,Japan
    1741,Savings,32.2,Fairprice,Groceries,2022-11-18,Japan
    1742,Checking,95.83,Gojek,"Travel, Groceries, Transportation, General Expenses, Entertainment, Dining",2022-12-30,Australia
    1743,Joint Account,400.95,Grab,"Transportation, Groceries, Travel",2022-11-04,Indonesia
    1744,Joint Account,902.15,Grab,"Transportation, Entertainment, Travel, Groceries, General Expenses",2022-10-28,Indonesia
    1745,Checking,739.69,Gojek,"Transportation, Travel, Entertainment, Dining",2022-06-13,Indonesia
    1746,Checking,3.49,Amazon,"Travel, Entertainment, General Expenses, Dining, Groceries",2022-06-17,Australia
    1747,Joint Account,635.64,Walmart,"Entertainment, Transportation",2022-11-03,Australia
    1748,Checking,753.95,ACME,Transportation,2022-06-05,Indonesia
    1749,Savings,25.46,Google,"Dining, Travel, Transportation, Groceries",2022-11-18,Singapore
    1750,Joint Account,272.16,Walmart,"General Expenses, Dining, Groceries",2022-12-31,Singapore
    1751,Checking,407.46,Amazon,"General Expenses, Transportation, Dining, Groceries",2022-10-10,Japan
    1752,Joint Account,242.78,Fairprice,"Entertainment, Travel, Dining, Transportation, General Expenses, Groceries",2022-07-19,Australia
    1753,Joint Account,556.37,ACME,"Groceries, General Expenses",2022-12-28,Australia
    1754,Savings,532.14,Walmart,"Travel, Dining, Groceries, Entertainment, Transportation",2022-07-30,Australia
    1755,Joint Account,765.03,Amazon,"Dining, Travel, Entertainment, Groceries, General Expenses",2022-09-04,Singapore
    1756,Savings,482.65,Google,"Groceries, Dining, Transportation, Travel, General Expenses, Entertainment",2022-10-30,Indonesia
    1757,Checking,135.83,Walmart,Groceries,2022-07-27,Australia
    1758,Savings,13.5,Walmart,"Dining, Entertainment, Transportation, General Expenses, Travel, Groceries",2022-09-26,Singapore
    1759,Savings,562.25,Starbucks,"Travel, Dining, General Expenses, Entertainment, Groceries",2022-06-09,Singapore
    1760,Joint Account,797.76,Google,"Entertainment, Groceries, Travel, Transportation, Dining",2022-12-17,Japan
    1761,Checking,993.73,Grab,General Expenses,2022-09-25,Indonesia
    1762,Savings,39.83,Gojek,"Groceries, General Expenses, Transportation, Travel, Entertainment, Dining",2022-12-24,Singapore
    1763,Savings,101.02,Amazon,Transportation,2022-07-18,Indonesia
    1764,Joint Account,487.11,Amazon,"Entertainment, General Expenses, Travel",2022-08-31,Australia
    1765,Savings,166.57,Amazon,"Dining, Groceries, Transportation",2022-10-22,Singapore
    1766,Joint Account,902.65,Starbucks,"Travel, Groceries, Entertainment, General Expenses, Transportation, Dining",2022-09-17,Australia
    1767,Checking,344.89,Amazon,"Travel, Entertainment, Dining, Transportation, Groceries, General Expenses",2022-10-22,Japan
    1768,Savings,866.48,Gojek,Travel,2022-12-22,Indonesia
    1769,Joint Account,14.31,Fairprice,"Travel, Transportation, General Expenses, Dining",2022-08-11,Indonesia
    1770,Savings,20.57,Walmart,"Dining, Transportation, Groceries, Entertainment, General Expenses",2022-06-19,Indonesia
    1771,Joint Account,436.5,Fairprice,"Travel, Dining, Entertainment, General Expenses, Transportation, Groceries",2022-10-06,Indonesia
    1772,Checking,546.59,Starbucks,"Travel, Groceries, Dining, Entertainment, Transportation, General Expenses",2022-07-03,Singapore
    1773,Checking,775.58,Walmart,"Travel, Entertainment, Groceries, Transportation, General Expenses",2022-06-15,Japan
    1774,Joint Account,748.04,Amazon,"Transportation, General Expenses, Groceries",2022-09-22,Indonesia
    1775,Savings,322.98,Walmart,"Entertainment, Dining, General Expenses, Groceries, Transportation, Travel",2022-09-24,Japan
    1776,Checking,168.56,Uber,"General Expenses, Dining, Travel, Groceries, Transportation",2022-12-01,Japan
    1777,Savings,782.81,Amazon,"Transportation, Groceries, General Expenses, Travel",2022-09-08,Australia
    1778,Savings,966.0,Fairprice,"Travel, Groceries, Dining",2022-07-09,Australia
    1779,Checking,471.08,Starbucks,Travel,2022-09-01,Indonesia
    1780,Joint Account,262.17,ACME,"Groceries, Dining, Transportation, Entertainment",2022-11-18,Indonesia
    1781,Savings,102.87,ACME,"Entertainment, Transportation, General Expenses, Groceries, Dining, Travel",2022-07-26,Australia
    1782,Savings,698.7,Walmart,"General Expenses, Groceries, Transportation, Travel, Dining",2022-09-30,Singapore
    1783,Savings,128.15,Grab,"Travel, Entertainment, General Expenses, Transportation",2022-09-16,Indonesia
    1784,Savings,688.63,Gojek,"Dining, Travel, Entertainment, Groceries, Transportation",2022-10-28,Singapore
    1785,Checking,547.14,Uber,"Dining, Groceries, Travel",2022-07-30,Australia
    1786,Checking,852.67,Uber,"Dining, Travel, Groceries",2022-10-22,Indonesia
    1787,Checking,840.25,Grab,"Groceries, Travel",2022-09-09,Australia
    1788,Checking,62.78,Grab,"Transportation, Entertainment, Groceries, Dining",2022-06-24,Australia
    1789,Checking,656.58,Gojek,"Groceries, Travel",2022-10-09,Indonesia
    1790,Savings,833.19,Gojek,"Transportation, Entertainment, Travel",2022-12-08,Australia
    1791,Savings,578.19,Uber,"Groceries, Dining, Travel, Transportation",2022-07-20,Singapore
    1792,Savings,690.22,Amazon,Entertainment,2022-12-17,Indonesia
    1793,Savings,277.48,Grab,"Dining, Travel, Entertainment, General Expenses, Transportation",2022-12-29,Singapore
    1794,Savings,612.65,Gojek,"Groceries, Dining, Travel, Entertainment, General Expenses, Transportation",2022-09-23,Japan
    1795,Joint Account,163.9,Amazon,"Transportation, Travel, Dining, General Expenses, Groceries, Entertainment",2022-11-26,Japan
    1796,Checking,207.08,Uber,"Groceries, Dining, Entertainment, General Expenses",2022-09-22,Indonesia
    1797,Savings,841.14,Uber,"Dining, Groceries, General Expenses, Transportation",2022-09-19,Australia
    1798,Savings,141.09,Google,General Expenses,2022-07-04,Japan
    1799,Checking,336.08,Amazon,Groceries,2022-07-26,Japan
    1800,Checking,360.26,Fairprice,"Entertainment, Groceries, Transportation, Travel",2022-09-02,Australia
    1801,Checking,506.23,Starbucks,General Expenses,2022-06-08,Japan
    1802,Joint Account,782.56,Uber,"General Expenses, Entertainment, Groceries, Travel",2022-11-02,Japan
    1803,Checking,507.16,Fairprice,"Entertainment, General Expenses, Transportation, Travel, Groceries",2022-07-31,Indonesia
    1804,Savings,543.32,Google,Travel,2022-10-14,Japan
    1805,Checking,380.14,ACME,"Transportation, Entertainment, Travel, Dining, General Expenses, Groceries",2022-06-14,Japan
    1806,Joint Account,853.33,Uber,Dining,2022-06-07,Japan
    1807,Joint Account,943.61,ACME,General Expenses,2022-07-11,Indonesia
    1808,Checking,546.13,ACME,Groceries,2022-07-22,Singapore
    1809,Joint Account,72.89,Starbucks,"General Expenses, Entertainment, Travel, Transportation",2022-09-11,Singapore
    1810,Savings,216.82,Fairprice,"Groceries, Dining, General Expenses",2022-11-23,Australia
    1811,Checking,392.15,Google,"Entertainment, Groceries",2022-06-23,Singapore
    1812,Savings,892.54,Uber,"Entertainment, General Expenses, Dining, Groceries, Travel",2022-08-30,Singapore
    1813,Checking,746.49,Fairprice,"Travel, Transportation, Groceries, Dining",2022-07-14,Singapore
    1814,Savings,452.38,Google,"Entertainment, Travel, Dining, Groceries",2022-08-31,Japan
    1815,Savings,858.93,Grab,"General Expenses, Dining",2022-09-02,Indonesia
    1816,Joint Account,728.61,Gojek,"General Expenses, Travel, Entertainment, Groceries, Dining, Transportation",2022-07-05,Japan
    1817,Savings,996.72,Gojek,"General Expenses, Entertainment",2022-10-19,Indonesia
    1818,Joint Account,607.72,Gojek,Travel,2022-08-06,Indonesia
    1819,Joint Account,818.8,ACME,"Groceries, Travel",2022-08-10,Singapore
    1820,Savings,200.63,Google,"Travel, General Expenses, Dining",2022-07-16,Japan
    1821,Checking,742.3,ACME,"Groceries, General Expenses, Dining, Transportation",2022-11-24,Japan
    1822,Savings,380.0,Uber,"Groceries, Entertainment, General Expenses, Transportation",2022-11-21,Indonesia
    1823,Savings,128.44,Fairprice,"Dining, Groceries, Transportation, General Expenses, Travel",2022-12-09,Singapore
    1824,Savings,121.37,Uber,"Entertainment, Groceries, General Expenses",2022-11-09,Indonesia
    1825,Savings,414.19,Fairprice,"Entertainment, Groceries, General Expenses, Dining, Transportation",2022-11-07,Japan
    1826,Checking,773.74,Amazon,"Transportation, Dining, Travel, Groceries, Entertainment",2022-08-22,Japan
    1827,Savings,95.03,Grab,"Dining, General Expenses, Transportation, Travel, Entertainment",2022-06-28,Japan
    1828,Savings,778.91,Starbucks,"Entertainment, General Expenses, Travel",2022-12-21,Indonesia
    1829,Checking,934.87,Starbucks,"Transportation, Entertainment, General Expenses, Groceries",2022-07-11,Singapore
    1830,Checking,512.26,Gojek,"Travel, Dining, Entertainment, Transportation, Groceries, General Expenses",2022-09-01,Singapore
    1831,Checking,271.16,Fairprice,"Transportation, Dining",2022-12-24,Indonesia
    1832,Joint Account,804.39,Walmart,"Groceries, Transportation, Travel, Dining, Entertainment",2022-10-03,Indonesia
    1833,Savings,79.15,ACME,"Groceries, General Expenses, Transportation, Entertainment, Travel, Dining",2022-07-15,Japan
    1834,Checking,486.22,Google,"Groceries, Entertainment, Dining",2022-11-09,Japan
    1835,Joint Account,121.46,Walmart,"Travel, Transportation, Groceries, Dining, General Expenses",2022-09-29,Singapore
    1836,Savings,584.41,Grab,"Travel, General Expenses, Transportation, Dining",2022-08-13,Singapore
    1837,Savings,958.03,Fairprice,"Entertainment, Groceries, General Expenses, Travel, Transportation",2022-08-08,Indonesia
    1838,Checking,784.05,ACME,"Entertainment, General Expenses, Groceries",2022-08-07,Singapore
    1839,Checking,445.71,Gojek,Groceries,2022-09-27,Australia
    1840,Checking,147.6,ACME,"Transportation, Entertainment, General Expenses",2022-07-12,Singapore
    1841,Savings,116.57,Gojek,"Transportation, Dining, Travel",2022-12-30,Japan
    1842,Joint Account,975.33,Fairprice,"Groceries, Entertainment, Travel, Dining, Transportation",2022-07-24,Japan
    1843,Joint Account,511.78,ACME,Groceries,2022-06-26,Indonesia
    1844,Checking,569.19,Walmart,"Transportation, Travel, Dining, General Expenses, Entertainment",2022-06-17,Singapore
    1845,Savings,772.16,Google,"Entertainment, Groceries, Travel, Dining, Transportation, General Expenses",2022-10-24,Indonesia
    1846,Savings,708.7,Walmart,"Travel, Entertainment, Groceries, Transportation",2022-12-10,Japan
    1847,Savings,238.01,Starbucks,"Dining, Travel, Entertainment",2022-12-22,Indonesia
    1848,Checking,894.85,Grab,"Groceries, Travel, Entertainment",2022-08-18,Australia
    1849,Checking,380.45,Amazon,"General Expenses, Transportation, Entertainment",2022-10-24,Japan
    1850,Checking,150.67,ACME,"Travel, Groceries, Transportation, Entertainment",2022-06-21,Indonesia
    1851,Savings,562.44,Google,Groceries,2022-06-21,Singapore
    1852,Checking,760.1,Google,"Dining, Travel",2022-11-17,Australia
    1853,Savings,104.14,Uber,"Transportation, General Expenses, Dining, Travel, Groceries",2022-06-23,Singapore
    1854,Savings,361.28,Walmart,"Transportation, Groceries, Dining",2022-08-14,Australia
    1855,Savings,40.14,Amazon,"Travel, Entertainment, Groceries, Dining, Transportation, General Expenses",2022-12-09,Singapore
    1856,Joint Account,98.7,Walmart,"Entertainment, Groceries, Dining",2022-09-30,Singapore
    1857,Savings,17.72,Walmart,"General Expenses, Transportation, Travel, Groceries, Dining, Entertainment",2022-09-02,Indonesia
    1858,Checking,208.76,Uber,Groceries,2022-07-02,Australia
    1859,Savings,887.63,Gojek,Transportation,2022-12-15,Australia
    1860,Checking,174.72,Walmart,"Entertainment, Dining",2022-06-14,Indonesia
    1861,Checking,141.5,Uber,"Groceries, General Expenses",2022-12-15,Japan
    1862,Checking,880.1,Google,"General Expenses, Groceries, Travel, Entertainment, Dining, Transportation",2022-10-05,Indonesia
    1863,Savings,275.86,Fairprice,"Travel, Entertainment",2022-10-13,Singapore
    1864,Checking,444.03,Grab,"Travel, Groceries",2022-09-06,Japan
    1865,Joint Account,89.62,ACME,"Groceries, Entertainment",2022-09-22,Japan
    1866,Checking,439.43,Grab,"Entertainment, Groceries, Dining, Transportation, General Expenses, Travel",2022-09-16,Singapore
    1867,Checking,164.55,Amazon,"Travel, Transportation, General Expenses, Dining, Entertainment, Groceries",2022-10-03,Singapore
    1868,Checking,689.4,Walmart,"Groceries, Transportation",2022-12-12,Indonesia
    1869,Checking,735.92,Google,"Transportation, Dining",2022-11-07,Japan
    1870,Savings,984.05,Google,"Groceries, General Expenses",2022-10-16,Australia
    1871,Checking,438.0,Starbucks,General Expenses,2022-11-04,Singapore
    1872,Joint Account,789.52,Uber,"Groceries, General Expenses, Entertainment, Transportation",2022-08-05,Japan
    1873,Joint Account,460.76,Gojek,"General Expenses, Transportation, Travel, Dining, Entertainment",2022-10-08,Japan
    1874,Checking,636.15,Amazon,Entertainment,2022-09-16,Indonesia
    1875,Checking,991.56,Google,"General Expenses, Groceries",2022-10-31,Singapore
    1876,Joint Account,733.92,Uber,"Travel, Dining, Transportation, Groceries",2022-08-06,Singapore
    1877,Savings,549.36,Amazon,"Transportation, General Expenses, Groceries, Entertainment, Dining",2022-11-02,Singapore
    1878,Savings,828.19,Google,"Transportation, Entertainment, Travel",2022-08-09,Australia
    1879,Savings,51.34,Walmart,Entertainment,2022-11-23,Indonesia
    1880,Savings,558.37,Amazon,Groceries,2022-08-31,Australia
    1881,Savings,816.07,Uber,"Transportation, General Expenses, Travel",2022-09-05,Australia
    1882,Checking,821.99,Amazon,"General Expenses, Groceries, Transportation, Travel",2022-07-05,Singapore
    1883,Joint Account,816.87,Starbucks,"Travel, Transportation, General Expenses, Dining",2022-12-15,Singapore
    1884,Checking,235.87,Uber,"Groceries, Dining, Travel, Transportation",2022-06-12,Japan
    1885,Joint Account,592.57,ACME,"Entertainment, Groceries, Travel, General Expenses, Transportation, Dining",2022-11-03,Japan
    1886,Checking,235.69,Starbucks,Entertainment,2022-11-16,Japan
    1887,Checking,342.27,Starbucks,"Entertainment, Transportation, Dining",2022-12-15,Japan
    1888,Joint Account,452.31,Uber,"General Expenses, Entertainment, Transportation, Dining, Travel",2022-09-24,Indonesia
    1889,Checking,802.0,Gojek,Travel,2022-12-29,Australia
    1890,Savings,146.88,Google,"Dining, Travel, Transportation",2022-06-22,Indonesia
    1891,Savings,286.08,ACME,"Dining, Groceries, General Expenses, Transportation, Travel",2022-07-01,Singapore
    1892,Joint Account,551.32,Grab,"General Expenses, Transportation, Entertainment, Groceries, Travel, Dining",2022-10-16,Australia
    1893,Joint Account,237.99,Starbucks,"Dining, Transportation, General Expenses",2022-08-19,Indonesia
    1894,Checking,961.22,Amazon,"Dining, Entertainment, Transportation, General Expenses",2022-09-25,Australia
    1895,Checking,618.33,Grab,"Groceries, Travel, Entertainment, Dining, General Expenses, Transportation",2022-06-11,Japan
    1896,Checking,30.94,Amazon,"Transportation, Entertainment, Dining, Travel",2022-07-31,Japan
    1897,Savings,188.26,Fairprice,General Expenses,2022-08-13,Indonesia
    1898,Joint Account,804.52,Grab,"Dining, Entertainment, Transportation",2022-11-20,Japan
    1899,Savings,679.84,Uber,"Transportation, General Expenses, Dining, Groceries, Travel, Entertainment",2022-11-12,Japan
    1900,Savings,670.38,Amazon,"Transportation, Entertainment",2022-07-01,Indonesia
    1901,Checking,480.9,Starbucks,"Groceries, Travel, Entertainment, Transportation",2022-11-11,Indonesia
    1902,Checking,554.59,ACME,General Expenses,2022-06-12,Japan
    1903,Checking,895.93,Walmart,"Entertainment, Transportation, Dining, General Expenses, Groceries, Travel",2022-07-04,Japan
    1904,Checking,144.48,Google,"Groceries, Dining",2022-06-13,Australia
    1905,Savings,808.29,ACME,"Dining, Travel, Transportation, Groceries, Entertainment, General Expenses",2022-08-31,Indonesia
    1906,Checking,386.71,Uber,"Dining, Transportation, Entertainment",2022-06-12,Japan
    1907,Joint Account,91.75,Starbucks,"Entertainment, General Expenses, Transportation, Groceries, Dining, Travel",2022-12-20,Japan
    1908,Joint Account,937.87,Walmart,Transportation,2022-12-29,Indonesia
    1909,Joint Account,603.74,Gojek,Transportation,2022-08-27,Japan
    1910,Joint Account,79.29,Fairprice,"General Expenses, Groceries",2022-11-18,Singapore
    1911,Joint Account,692.63,Google,"Entertainment, General Expenses, Dining",2022-11-16,Singapore
    1912,Savings,276.97,Uber,"Entertainment, Transportation",2022-06-16,Japan
    1913,Joint Account,637.88,Fairprice,"Travel, General Expenses, Dining, Groceries",2022-06-16,Japan
    1914,Joint Account,388.12,ACME,Travel,2022-12-25,Indonesia
    1915,Checking,770.65,Amazon,"Dining, Transportation, Travel",2022-09-12,Australia
    1916,Savings,58.46,ACME,General Expenses,2022-12-23,Japan
    1917,Joint Account,608.57,Grab,"Travel, Entertainment",2022-10-02,Japan
    1918,Savings,260.77,Google,"Travel, Entertainment, General Expenses, Dining, Groceries",2022-06-25,Singapore
    1919,Checking,205.1,Uber,"Groceries, Transportation, Travel, General Expenses, Entertainment",2022-08-03,Singapore
    1920,Joint Account,573.58,Grab,"Entertainment, Dining",2022-06-13,Singapore
    1921,Savings,236.89,ACME,"Groceries, Travel, Dining, General Expenses",2022-09-25,Japan
    1922,Savings,556.44,Uber,"Dining, Travel, Transportation, General Expenses, Entertainment, Groceries",2022-10-26,Singapore
    1923,Joint Account,125.15,Fairprice,"General Expenses, Groceries, Transportation",2022-11-24,Singapore
    1924,Checking,315.61,Fairprice,"Dining, Groceries",2022-08-05,Japan
    1925,Joint Account,985.52,ACME,"Dining, General Expenses, Travel, Entertainment",2022-11-12,Australia
    1926,Joint Account,693.77,Grab,"Transportation, Groceries, Entertainment",2022-07-15,Japan
    1927,Joint Account,351.11,Grab,"Travel, Transportation, General Expenses, Entertainment, Groceries, Dining",2022-06-25,Australia
    1928,Checking,916.78,Walmart,"General Expenses, Transportation, Travel, Dining",2022-12-23,Australia
    1929,Savings,153.1,Walmart,"Transportation, Groceries, Dining, Entertainment, General Expenses",2022-12-09,Indonesia
    1930,Savings,705.3,Uber,"Groceries, Dining",2022-06-09,Australia
    1931,Savings,184.4,Fairprice,"Groceries, Entertainment, Travel",2022-11-18,Japan
    1932,Checking,235.94,Google,"General Expenses, Entertainment, Travel, Dining, Transportation",2022-11-05,Singapore
    1933,Checking,865.28,Amazon,"Dining, General Expenses, Entertainment, Travel, Transportation",2022-10-01,Australia
    1934,Checking,568.59,Fairprice,"General Expenses, Travel, Entertainment, Dining, Groceries, Transportation",2022-09-02,Japan
    1935,Savings,503.58,Gojek,"Groceries, Travel, General Expenses, Dining",2022-08-20,Indonesia
    1936,Joint Account,326.92,Starbucks,"General Expenses, Travel, Groceries",2022-08-01,Indonesia
    1937,Checking,590.14,Starbucks,"General Expenses, Transportation, Dining",2022-06-13,Japan
    1938,Joint Account,646.07,Walmart,"Groceries, Travel",2022-11-01,Japan
    1939,Checking,130.5,Walmart,"Groceries, Transportation",2022-06-06,Australia
    1940,Joint Account,841.35,Uber,"Transportation, Entertainment",2022-11-16,Japan
    1941,Savings,891.43,Gojek,"Travel, Entertainment, Transportation",2022-07-18,Japan
    1942,Checking,800.99,Starbucks,General Expenses,2022-08-21,Singapore
    1943,Joint Account,43.49,Grab,"General Expenses, Groceries, Dining, Travel",2022-11-13,Singapore
    1944,Joint Account,529.71,Walmart,Transportation,2022-06-27,Indonesia
    1945,Savings,49.68,ACME,"Entertainment, Travel, Groceries, General Expenses",2022-11-28,Australia
    1946,Joint Account,437.66,Grab,"Transportation, Travel",2022-10-27,Indonesia
    1947,Joint Account,706.92,Amazon,"Entertainment, Groceries, Dining, Travel, Transportation",2022-06-28,Japan
    1948,Joint Account,286.03,Uber,"Travel, Groceries, Transportation, General Expenses, Dining, Entertainment",2022-07-10,Japan
    1949,Savings,284.97,Fairprice,"Travel, Entertainment, General Expenses, Groceries, Dining",2022-11-06,Singapore
    1950,Checking,663.77,Starbucks,"Entertainment, Dining, General Expenses",2022-10-03,Japan
    1951,Savings,449.44,Google,"Travel, Entertainment, Dining, Transportation, General Expenses, Groceries",2022-09-03,Indonesia
    1952,Joint Account,846.22,Fairprice,"Entertainment, Groceries, General Expenses, Travel",2022-09-09,Japan
    1953,Joint Account,4.27,Walmart,"Dining, General Expenses, Entertainment, Groceries, Transportation",2022-08-18,Australia
    1954,Checking,559.51,Grab,"Groceries, Entertainment, Transportation",2022-07-07,Indonesia
    1955,Savings,449.04,Google,"Dining, General Expenses, Groceries, Travel, Entertainment, Transportation",2022-09-16,Australia
    1956,Savings,695.3,Uber,"Travel, Dining, Entertainment, Transportation, General Expenses, Groceries",2022-07-11,Indonesia
    1957,Checking,462.36,Fairprice,"Groceries, Entertainment, Transportation, Travel, General Expenses, Dining",2022-11-12,Indonesia
    1958,Joint Account,135.19,Google,"Travel, Groceries, Transportation, Entertainment",2022-10-28,Indonesia
    1959,Savings,380.88,Gojek,"Travel, General Expenses, Dining, Groceries, Entertainment, Transportation",2022-11-30,Indonesia
    1960,Checking,734.27,Amazon,"Transportation, General Expenses, Travel, Dining, Groceries",2022-06-13,Singapore
    1961,Joint Account,921.53,Gojek,Transportation,2022-07-01,Australia
    1962,Checking,923.6,Google,"Dining, Transportation, General Expenses",2022-12-28,Singapore
    1963,Checking,384.96,Walmart,"General Expenses, Groceries, Entertainment, Travel, Dining",2022-11-18,Australia
    1964,Checking,690.24,Grab,Travel,2022-06-16,Australia
    1965,Savings,538.43,Gojek,"Travel, Groceries, Dining, Transportation, Entertainment",2022-09-12,Australia
    1966,Checking,357.71,Walmart,"General Expenses, Travel",2022-10-22,Singapore
    1967,Checking,719.39,Starbucks,"Entertainment, Groceries, General Expenses, Dining, Travel",2022-06-29,Japan
    1968,Joint Account,869.0,Starbucks,Groceries,2022-06-01,Australia
    1969,Checking,806.37,Amazon,"Travel, Groceries, General Expenses, Entertainment, Dining, Transportation",2022-09-28,Japan
    1970,Savings,445.53,Google,"Travel, Groceries, Dining, Transportation",2022-09-17,Australia
    1971,Savings,71.73,Walmart,"Travel, Transportation, Groceries",2022-10-22,Australia
    1972,Savings,494.21,Amazon,"Transportation, General Expenses",2022-12-18,Japan
    1973,Joint Account,993.98,ACME,"Groceries, Entertainment, Transportation, Dining, Travel",2022-12-19,Indonesia
    1974,Savings,525.52,Walmart,"Transportation, Groceries, Entertainment",2022-09-05,Singapore
    1975,Joint Account,947.54,ACME,"Dining, Transportation, Entertainment",2022-06-11,Indonesia
    1976,Checking,375.39,Amazon,"Groceries, General Expenses, Dining, Transportation",2022-11-06,Australia
    1977,Savings,385.46,Amazon,"Dining, Entertainment",2022-12-11,Indonesia
    1978,Savings,955.5,Gojek,"Dining, Entertainment",2022-10-10,Singapore
    1979,Joint Account,614.78,Google,"Entertainment, Dining, General Expenses, Transportation",2022-06-21,Japan
    1980,Joint Account,705.48,Grab,Entertainment,2022-10-07,Indonesia
    1981,Savings,445.13,Amazon,"Transportation, Groceries",2022-07-05,Japan
    1982,Checking,523.37,Grab,"Transportation, General Expenses, Travel, Dining, Groceries, Entertainment",2022-08-25,Singapore
    1983,Checking,77.57,Starbucks,"Dining, General Expenses, Groceries, Travel",2022-07-08,Japan
    1984,Checking,526.34,Starbucks,"Dining, Entertainment, Travel, Transportation",2022-12-06,Australia
    1985,Checking,594.07,Fairprice,"Dining, Groceries, Travel, General Expenses, Transportation, Entertainment",2022-09-03,Australia
    1986,Joint Account,509.37,Starbucks,Transportation,2022-07-20,Singapore
    1987,Savings,973.15,Walmart,"Dining, Travel",2022-08-06,Indonesia
    1988,Joint Account,451.73,Google,"Entertainment, General Expenses, Groceries, Travel, Transportation",2022-07-02,Australia
    1989,Joint Account,128.18,Google,"Groceries, Dining, General Expenses, Travel, Transportation",2022-09-02,Australia
    1990,Checking,895.05,Amazon,"Transportation, General Expenses, Entertainment, Dining",2022-12-28,Indonesia
    1991,Joint Account,154.78,ACME,Transportation,2022-08-08,Japan
    1992,Savings,716.03,Gojek,"Travel, Entertainment, Dining, General Expenses",2022-11-04,Indonesia
    1993,Joint Account,887.21,Fairprice,"Entertainment, General Expenses",2022-09-05,Indonesia
    1994,Checking,227.65,Gojek,"Transportation, Entertainment, General Expenses",2022-09-10,Indonesia
    1995,Savings,213.85,Google,"Entertainment, Transportation",2022-11-06,Australia
    1996,Joint Account,361.32,Grab,"Travel, Transportation, Dining, Entertainment, General Expenses",2022-09-19,Japan
    1997,Savings,432.18,Walmart,"Groceries, General Expenses, Transportation, Travel, Dining, Entertainment",2022-10-07,Indonesia
    1998,Joint Account,842.9,Google,"Entertainment, Transportation",2022-10-27,Japan
    1999,Checking,408.19,Gojek,"Entertainment, Groceries, Transportation, Dining, Travel, General Expenses",2022-08-19,Indonesia
    2000,Savings,354.44,Grab,"Entertainment, General Expenses, Transportation, Groceries, Dining, Travel",2022-07-28,Japan
    2001,Checking,600.4,ACME,"Travel, Dining, General Expenses",2022-06-14,Singapore
    2002,Checking,645.59,Google,"Entertainment, General Expenses",2022-11-17,Indonesia
    2003,Joint Account,891.5,Fairprice,"Travel, General Expenses, Transportation",2022-08-17,Singapore
    2004,Checking,193.79,Google,Travel,2022-10-18,Australia
    2005,Savings,893.24,Walmart,"Groceries, Transportation, Dining",2022-07-19,Singapore
    2006,Savings,535.71,ACME,"Groceries, General Expenses, Travel, Transportation, Entertainment",2022-08-29,Indonesia
    2007,Savings,156.97,Uber,Travel,2022-11-29,Indonesia
    2008,Savings,212.6,Uber,Travel,2022-06-30,Singapore
    2009,Savings,873.37,ACME,"Groceries, Travel, Transportation, General Expenses, Dining",2022-11-13,Singapore
    2010,Savings,408.87,Grab,Entertainment,2022-11-04,Japan
    2011,Checking,783.5,Uber,"Dining, General Expenses, Travel, Groceries, Transportation, Entertainment",2022-08-27,Japan
    2012,Joint Account,392.94,Gojek,"Dining, General Expenses, Travel, Transportation, Groceries",2022-07-29,Indonesia
    2013,Savings,804.67,Starbucks,"Entertainment, General Expenses",2022-10-27,Singapore
    2014,Joint Account,529.05,ACME,"Entertainment, Groceries, Dining, Travel, Transportation",2022-09-23,Singapore
    2015,Savings,64.51,ACME,"Dining, Transportation, Entertainment, Travel, General Expenses, Groceries",2022-07-29,Singapore
    2016,Checking,554.61,Gojek,"General Expenses, Dining, Travel, Entertainment, Transportation",2022-08-19,Indonesia
    2017,Joint Account,576.7,Fairprice,"Entertainment, Transportation, Dining, Groceries, General Expenses, Travel",2022-07-31,Australia
    2018,Checking,472.29,Amazon,"General Expenses, Travel, Dining, Entertainment, Transportation",2022-08-26,Singapore
    2019,Checking,373.38,Amazon,Dining,2022-11-27,Singapore
    2020,Joint Account,800.78,Grab,"Groceries, Transportation, Travel, Dining, General Expenses",2022-07-05,Australia
    2021,Joint Account,639.02,Fairprice,"General Expenses, Transportation, Entertainment",2022-12-16,Japan
    2022,Savings,124.73,Grab,Groceries,2022-08-05,Singapore
    2023,Savings,57.68,Fairprice,"Travel, General Expenses, Dining",2022-09-12,Singapore
    2024,Savings,226.38,Starbucks,Travel,2022-12-02,Japan
    2025,Checking,964.23,Uber,"Dining, Travel, Entertainment, Groceries, Transportation, General Expenses",2022-10-28,Singapore
    2026,Checking,85.7,Fairprice,"General Expenses, Entertainment",2022-08-14,Indonesia
    2027,Checking,179.43,Grab,"Dining, Groceries, Transportation",2022-08-05,Australia
    2028,Savings,109.14,Gojek,Transportation,2022-12-10,Australia
    2029,Checking,570.98,Fairprice,"Travel, General Expenses, Groceries, Transportation, Dining",2022-06-07,Japan
    2030,Joint Account,80.51,Fairprice,"Groceries, General Expenses, Transportation, Dining, Travel, Entertainment",2022-11-12,Singapore
    2031,Savings,265.57,Gojek,"Groceries, Travel, Transportation",2022-11-21,Singapore
    2032,Savings,102.51,Google,"Entertainment, Groceries, Transportation, General Expenses",2022-12-09,Japan
    2033,Savings,121.21,Starbucks,"General Expenses, Groceries, Travel, Transportation, Entertainment, Dining",2022-11-06,Japan
    2034,Joint Account,426.36,Amazon,"Groceries, Travel",2022-06-16,Japan
    2035,Checking,426.46,Grab,"Groceries, Entertainment, Dining, Travel",2022-12-21,Singapore
    2036,Checking,859.59,Uber,"Travel, Entertainment, Groceries, Transportation, General Expenses, Dining",2022-08-23,Australia
    2037,Savings,401.48,ACME,"Entertainment, Transportation, Dining, Travel, Groceries",2022-08-14,Australia
    2038,Checking,469.12,Grab,"Dining, Groceries, Travel, General Expenses, Transportation, Entertainment",2022-09-14,Japan
    2039,Joint Account,87.86,Gojek,"Groceries, Dining, Entertainment, Travel, General Expenses",2022-11-05,Japan
    2040,Joint Account,193.93,Google,"Groceries, Dining, Transportation, General Expenses",2022-08-18,Japan
    2041,Checking,24.23,Walmart,"General Expenses, Travel",2022-09-02,Indonesia
    2042,Checking,428.59,Google,"Entertainment, Dining, Transportation, General Expenses, Travel, Groceries",2022-07-26,Australia
    2043,Joint Account,728.64,Grab,"Travel, General Expenses",2022-09-14,Singapore
    2044,Joint Account,477.81,Fairprice,General Expenses,2022-07-19,Indonesia
    2045,Checking,654.01,Google,Travel,2022-12-16,Australia
    2046,Joint Account,96.52,Fairprice,General Expenses,2022-10-05,Australia
    2047,Savings,588.78,Starbucks,"Groceries, Dining",2022-12-12,Singapore
    2048,Checking,577.22,Fairprice,"General Expenses, Entertainment, Dining",2022-06-18,Indonesia
    2049,Joint Account,875.43,Fairprice,"General Expenses, Transportation, Travel, Groceries",2022-07-27,Japan
    2050,Checking,621.55,ACME,General Expenses,2022-07-22,Japan
    2051,Checking,460.36,Walmart,"Entertainment, Dining, Transportation, Travel",2022-06-13,Singapore
    2052,Checking,351.1,Grab,"Dining, Travel, General Expenses, Transportation, Groceries",2022-12-29,Australia
    2053,Joint Account,366.23,Grab,"Travel, Entertainment",2022-06-29,Singapore
    2054,Joint Account,101.99,ACME,"Dining, Entertainment, General Expenses, Groceries, Transportation, Travel",2022-12-03,Japan
    2055,Joint Account,139.88,Grab,"Travel, Transportation, Dining, General Expenses",2022-10-26,Indonesia
    2056,Savings,367.27,Walmart,"Entertainment, Transportation, Groceries, Dining, Travel, General Expenses",2022-09-08,Indonesia
    2057,Checking,303.2,Fairprice,"Transportation, Travel, General Expenses, Entertainment, Dining, Groceries",2022-12-04,Japan
    2058,Checking,577.78,Fairprice,"Dining, Travel, Groceries, Entertainment, Transportation",2022-07-17,Japan
    2059,Joint Account,881.91,Uber,"Entertainment, Groceries, General Expenses, Transportation, Travel",2022-08-31,Australia
    2060,Checking,490.8,Gojek,Entertainment,2022-12-23,Singapore
    2061,Checking,196.62,Fairprice,"Groceries, Transportation, Entertainment",2022-07-02,Singapore
    2062,Checking,181.21,Walmart,"Travel, Entertainment, Transportation, General Expenses, Groceries, Dining",2022-08-18,Japan
    2063,Joint Account,44.96,Grab,"Groceries, Transportation",2022-12-09,Japan
    2064,Checking,87.75,Google,"Travel, Dining, Transportation, Groceries, Entertainment",2022-12-06,Indonesia
    2065,Savings,627.94,Starbucks,"Transportation, General Expenses",2022-09-13,Indonesia
    2066,Joint Account,532.72,Grab,"Transportation, Travel, General Expenses",2022-09-25,Indonesia
    2067,Savings,486.84,Uber,"Entertainment, Transportation, Groceries",2022-09-03,Singapore
    2068,Joint Account,74.97,Google,"Groceries, Travel, General Expenses, Transportation",2022-07-10,Singapore
    2069,Joint Account,327.33,Starbucks,"General Expenses, Dining, Travel, Transportation, Groceries",2022-10-29,Australia
    2070,Checking,858.05,Starbucks,"Transportation, Groceries, Entertainment",2022-07-17,Indonesia
    2071,Joint Account,829.06,Amazon,Travel,2022-10-11,Indonesia
    2072,Joint Account,928.15,Walmart,Entertainment,2022-07-11,Singapore
    2073,Savings,581.63,ACME,"Dining, Entertainment, Groceries, General Expenses, Transportation",2022-08-20,Japan
    2074,Checking,370.37,ACME,"Entertainment, Transportation, Dining, Travel",2022-09-27,Singapore
    2075,Joint Account,464.67,Walmart,"Dining, Groceries, Transportation, General Expenses, Entertainment, Travel",2022-06-03,Japan
    2076,Joint Account,208.61,Google,"Transportation, Dining, Travel, Entertainment",2022-08-29,Singapore
    2077,Checking,223.53,Amazon,"Travel, Groceries, General Expenses, Entertainment, Dining, Transportation",2022-09-30,Australia
    2078,Savings,992.28,Grab,"Dining, General Expenses, Transportation, Travel, Groceries",2022-06-11,Indonesia
    2079,Savings,857.55,Grab,"Dining, Transportation, Entertainment, Groceries",2022-10-05,Indonesia
    2080,Checking,757.41,Starbucks,Transportation,2022-08-22,Indonesia
    2081,Joint Account,927.3,Amazon,"Transportation, Entertainment, General Expenses, Dining",2022-07-17,Australia
    2082,Checking,286.0,ACME,Travel,2022-11-12,Singapore
    2083,Joint Account,348.89,ACME,"Dining, Transportation, Groceries, Entertainment, General Expenses, Travel",2022-08-25,Australia
    2084,Checking,448.99,Grab,"General Expenses, Groceries",2022-07-16,Japan
    2085,Savings,871.16,ACME,"Groceries, Travel, Transportation, Dining, Entertainment, General Expenses",2022-09-28,Japan
    2086,Savings,60.55,Uber,Transportation,2022-11-28,Australia
    2087,Joint Account,337.69,Gojek,"Dining, Transportation",2022-08-09,Indonesia
    2088,Checking,188.7,Fairprice,"Entertainment, Dining, General Expenses, Travel, Transportation",2022-12-30,Japan
    2089,Checking,667.97,Starbucks,"General Expenses, Dining",2022-12-13,Japan
    2090,Joint Account,807.57,Google,"General Expenses, Transportation, Dining, Groceries, Entertainment, Travel",2022-08-11,Singapore
    2091,Joint Account,720.68,Grab,"Transportation, Travel, Entertainment, General Expenses, Dining, Groceries",2022-06-21,Australia
    2092,Savings,376.6,Walmart,"Transportation, Groceries",2022-10-03,Japan
    2093,Checking,577.19,Grab,"Transportation, Groceries, Dining, Entertainment, Travel, General Expenses",2022-12-30,Singapore
    2094,Savings,701.71,Fairprice,"Dining, Transportation, Travel",2022-10-25,Australia
    2095,Joint Account,467.82,Gojek,"Dining, Travel, Entertainment, Transportation",2022-08-15,Singapore
    2096,Joint Account,550.39,Grab,"Transportation, Entertainment, Groceries, Dining, General Expenses, Travel",2022-06-12,Australia
    2097,Checking,843.8,Google,"Groceries, Transportation",2022-12-18,Singapore
    2098,Joint Account,328.01,Walmart,"Transportation, General Expenses, Entertainment",2022-08-05,Japan
    2099,Savings,527.35,Amazon,"Entertainment, Travel, Transportation",2022-12-05,Singapore
    2100,Joint Account,482.86,Google,"Transportation, Travel",2022-07-04,Singapore
    2101,Checking,197.83,Fairprice,"Entertainment, Dining",2022-08-15,Japan
    2102,Savings,411.14,Google,Groceries,2022-12-26,Singapore
    2103,Savings,582.21,Gojek,"Groceries, Entertainment, Travel, Transportation",2022-06-04,Australia
    2104,Checking,479.01,Walmart,"Entertainment, Travel, Dining, Transportation, Groceries",2022-12-26,Japan
    2105,Savings,609.77,Walmart,"Travel, Dining, Groceries",2022-07-30,Singapore
    2106,Checking,532.01,Starbucks,"Transportation, Groceries, Entertainment, General Expenses, Travel",2022-12-28,Japan
    2107,Savings,285.54,Starbucks,"Groceries, General Expenses, Dining, Transportation",2022-12-08,Singapore
    2108,Savings,198.62,Grab,"Transportation, Entertainment, General Expenses, Groceries",2022-08-08,Japan
    2109,Joint Account,954.18,ACME,"General Expenses, Groceries, Transportation, Travel, Entertainment",2022-07-07,Singapore
    2110,Checking,36.27,Uber,"Entertainment, Transportation, Dining, General Expenses, Travel, Groceries",2022-11-06,Indonesia
    2111,Savings,882.92,Gojek,"Travel, Entertainment, Dining, General Expenses, Transportation, Groceries",2022-11-27,Indonesia
    2112,Joint Account,274.48,Amazon,"Dining, Travel, Groceries",2022-07-06,Australia
    2113,Savings,441.79,Gojek,"Transportation, Dining",2022-10-11,Indonesia
    2114,Joint Account,832.66,Uber,"General Expenses, Dining, Travel, Entertainment",2022-10-17,Australia
    2115,Savings,351.26,Amazon,"Entertainment, Groceries, Transportation, Dining, Travel",2022-07-08,Indonesia
    2116,Joint Account,947.66,Grab,"Groceries, Dining, General Expenses",2022-07-25,Australia
    2117,Savings,739.24,Uber,"Groceries, Dining, Transportation, General Expenses",2022-08-28,Indonesia
    2118,Checking,770.72,Google,"Groceries, Dining",2022-09-24,Singapore
    2119,Savings,415.79,Google,"Entertainment, General Expenses, Groceries",2022-12-18,Indonesia
    2120,Savings,299.87,Google,"Travel, General Expenses, Dining, Groceries",2022-12-11,Singapore
    2121,Joint Account,56.12,ACME,"General Expenses, Entertainment, Transportation, Dining, Travel, Groceries",2022-08-14,Indonesia
    2122,Joint Account,513.94,Grab,"Groceries, General Expenses",2022-09-25,Singapore
    2123,Savings,502.01,Amazon,"Entertainment, Groceries, General Expenses",2022-12-03,Australia
    2124,Checking,349.27,Starbucks,"Groceries, General Expenses, Transportation",2022-06-09,Australia
    2125,Checking,324.39,Gojek,Dining,2022-08-25,Indonesia
    2126,Savings,164.71,ACME,"Entertainment, General Expenses, Transportation, Groceries, Dining, Travel",2022-10-14,Singapore
    2127,Savings,103.12,ACME,"Transportation, Entertainment, General Expenses, Groceries, Travel",2022-06-06,Indonesia
    2128,Savings,67.45,Google,"Entertainment, Transportation, General Expenses, Groceries, Travel",2022-11-14,Japan
    2129,Joint Account,382.85,Amazon,"General Expenses, Entertainment, Dining, Groceries, Travel, Transportation",2022-08-05,Singapore
    2130,Checking,301.32,Grab,"General Expenses, Groceries, Transportation, Dining, Travel",2022-07-11,Japan
    2131,Savings,246.13,Starbucks,"Transportation, Travel, Entertainment, General Expenses, Groceries, Dining",2022-07-27,Japan
    2132,Joint Account,363.03,Gojek,"Transportation, Dining, Entertainment",2022-10-05,Australia
    2133,Joint Account,461.03,Walmart,"Dining, General Expenses, Travel, Entertainment, Transportation",2022-06-21,Indonesia
    2134,Savings,212.45,Fairprice,"Transportation, Travel",2022-11-16,Indonesia
    2135,Checking,584.83,Uber,"Groceries, Dining",2022-10-04,Australia
    2136,Joint Account,911.14,Uber,"Groceries, General Expenses, Dining, Transportation, Entertainment, Travel",2022-12-03,Singapore
    2137,Savings,788.29,Fairprice,"Groceries, Dining",2022-07-05,Australia
    2138,Checking,519.96,Fairprice,"Dining, Entertainment, Travel, General Expenses, Groceries, Transportation",2022-12-06,Indonesia
    2139,Checking,196.19,Grab,"Travel, General Expenses, Dining, Transportation, Groceries, Entertainment",2022-12-10,Japan
    2140,Joint Account,590.48,Walmart,"Dining, Groceries, Transportation",2022-06-27,Indonesia
    2141,Checking,488.32,Walmart,"Transportation, Entertainment, Dining, Groceries",2022-09-05,Japan
    2142,Checking,914.22,Uber,"Transportation, Entertainment, Dining, General Expenses",2022-08-03,Japan
    2143,Savings,134.88,Fairprice,"Groceries, General Expenses, Entertainment, Dining, Transportation",2022-07-23,Japan
    2144,Checking,77.33,Grab,"General Expenses, Travel, Transportation",2022-10-29,Australia
    2145,Savings,432.14,ACME,"Entertainment, Transportation",2022-08-13,Indonesia
    2146,Checking,651.31,Starbucks,"Groceries, General Expenses",2022-10-01,Singapore
    2147,Joint Account,288.14,Google,"General Expenses, Transportation",2022-09-09,Japan
    2148,Checking,658.58,Starbucks,General Expenses,2022-07-29,Singapore
    2149,Checking,513.69,Fairprice,Entertainment,2022-08-27,Indonesia
    2150,Joint Account,203.94,ACME,"Dining, Groceries, Entertainment, General Expenses, Transportation, Travel",2022-09-16,Indonesia
    2151,Joint Account,93.08,Fairprice,"Travel, Groceries, Entertainment, Dining, Transportation, General Expenses",2022-08-27,Australia
    2152,Joint Account,377.03,Gojek,Groceries,2022-12-11,Singapore
    2153,Checking,989.91,Gojek,"General Expenses, Dining, Groceries, Entertainment, Travel, Transportation",2022-09-04,Singapore
    2154,Checking,441.18,Amazon,"General Expenses, Transportation, Dining",2022-08-04,Singapore
    2155,Savings,900.06,Starbucks,"Groceries, Dining",2022-09-30,Australia
    2156,Checking,489.68,Uber,Travel,2022-10-31,Indonesia
    2157,Savings,420.76,Google,"Groceries, Dining, Transportation, Travel",2022-09-18,Australia
    2158,Savings,590.45,Gojek,"General Expenses, Groceries, Entertainment",2022-08-19,Japan
    2159,Joint Account,198.71,Google,"Transportation, Groceries, Entertainment, Travel",2022-06-09,Indonesia
    2160,Joint Account,284.13,Gojek,"Transportation, Entertainment, Travel",2022-06-29,Singapore
    2161,Joint Account,424.66,Starbucks,"Entertainment, Travel, Transportation, Groceries, Dining",2022-11-09,Australia
    2162,Joint Account,123.37,ACME,General Expenses,2022-12-07,Indonesia
    2163,Joint Account,935.79,Starbucks,"General Expenses, Entertainment, Groceries, Transportation, Travel, Dining",2022-06-20,Japan
    2164,Savings,690.07,Grab,"Travel, Transportation",2022-12-03,Japan
    2165,Checking,564.27,ACME,"Dining, Travel, Transportation, Groceries, General Expenses, Entertainment",2022-12-17,Indonesia
    2166,Checking,601.91,Starbucks,"General Expenses, Dining, Groceries, Transportation",2022-06-17,Indonesia
    2167,Savings,521.62,Uber,"Travel, Dining, Transportation, General Expenses, Entertainment",2022-07-01,Indonesia
    2168,Savings,823.24,Amazon,"Transportation, Entertainment, Travel, General Expenses",2022-09-20,Indonesia
    2169,Checking,913.65,Fairprice,"Entertainment, General Expenses, Groceries, Travel, Transportation",2022-08-29,Japan
    2170,Savings,829.65,Grab,"Transportation, Travel, Dining, General Expenses",2022-10-30,Indonesia
    2171,Savings,799.96,Gojek,"Groceries, Entertainment, Travel, Dining, General Expenses, Transportation",2022-11-08,Japan
    2172,Savings,937.35,Fairprice,"General Expenses, Entertainment, Transportation, Travel, Groceries",2022-11-08,Singapore
    2173,Joint Account,116.65,Gojek,"Dining, Transportation",2022-08-24,Japan
    2174,Joint Account,959.29,Starbucks,General Expenses,2022-07-26,Japan
    2175,Checking,997.2,Gojek,"General Expenses, Travel",2022-07-09,Australia
    2176,Joint Account,131.86,Grab,"General Expenses, Groceries",2022-07-01,Japan
    2177,Checking,186.16,Amazon,"Transportation, Travel",2022-10-09,Japan
    2178,Savings,546.76,Gojek,"Travel, Groceries, Dining, Transportation",2022-12-04,Singapore
    2179,Savings,143.14,Google,"Dining, Groceries",2022-08-08,Singapore
    2180,Savings,13.22,Uber,"Entertainment, Groceries, Dining, General Expenses",2022-11-18,Japan
    2181,Savings,305.87,Walmart,"Transportation, Groceries",2022-12-21,Japan
    2182,Checking,739.7,ACME,"Entertainment, General Expenses, Dining, Transportation, Groceries",2022-11-08,Indonesia
    2183,Joint Account,903.52,ACME,"Travel, Entertainment, Groceries, Transportation, Dining",2022-09-28,Japan
    2184,Joint Account,480.03,Google,"General Expenses, Travel",2022-07-27,Singapore
    2185,Savings,679.11,Fairprice,"Groceries, Transportation, General Expenses, Entertainment, Travel",2022-12-17,Japan
    2186,Checking,884.56,Grab,"Transportation, Groceries, Entertainment",2022-11-11,Singapore
    2187,Joint Account,141.19,Uber,"Travel, Entertainment",2022-06-28,Indonesia
    2188,Savings,113.64,Uber,Travel,2022-07-05,Australia
    2189,Joint Account,575.4,Walmart,Travel,2022-12-30,Indonesia
    2190,Savings,292.53,Starbucks,"Entertainment, Transportation, Dining, Groceries",2022-07-19,Australia
    2191,Joint Account,523.03,Starbucks,"Transportation, Groceries, Travel, Dining",2022-10-01,Japan
    2192,Savings,970.59,Grab,"Entertainment, General Expenses",2022-08-13,Indonesia
    2193,Savings,181.45,Google,Transportation,2022-08-07,Indonesia
    2194,Joint Account,222.77,Gojek,"Groceries, Entertainment",2022-10-30,Japan
    2195,Joint Account,909.24,Grab,"Entertainment, Travel, Groceries, General Expenses",2022-07-29,Indonesia
    2196,Savings,34.27,Google,"Transportation, Entertainment, Groceries",2022-11-21,Singapore
    2197,Savings,34.11,Fairprice,"Entertainment, Transportation, Groceries",2022-06-15,Australia
    2198,Checking,856.19,Gojek,"General Expenses, Groceries, Entertainment",2022-09-16,Singapore
    2199,Joint Account,908.42,Starbucks,Groceries,2022-11-01,Singapore
    2200,Savings,274.28,Walmart,"Dining, Groceries, Transportation, Entertainment, General Expenses, Travel",2022-10-11,Singapore
    2201,Joint Account,815.72,Gojek,"General Expenses, Entertainment, Dining",2022-06-29,Japan
    2202,Joint Account,489.92,ACME,"Groceries, Entertainment, Travel, Dining, Transportation",2022-08-25,Singapore
    2203,Savings,638.36,Grab,Transportation,2022-11-20,Singapore
    2204,Joint Account,414.15,Grab,Transportation,2022-11-05,Australia
    2205,Joint Account,546.8,Amazon,"Dining, General Expenses, Groceries",2022-06-06,Indonesia
    2206,Joint Account,461.93,Grab,"Transportation, General Expenses",2022-11-23,Singapore
    2207,Savings,685.19,ACME,"General Expenses, Transportation, Groceries, Dining",2022-08-18,Singapore
    2208,Joint Account,412.57,Google,"Groceries, Transportation, Entertainment, General Expenses, Travel",2022-06-20,Indonesia
    2209,Checking,158.77,Walmart,General Expenses,2022-11-20,Australia
    2210,Savings,569.2,Fairprice,"Groceries, Travel, General Expenses, Dining, Transportation",2022-06-06,Indonesia
    2211,Checking,551.13,ACME,"Groceries, Transportation",2022-06-24,Japan
    2212,Checking,449.86,ACME,Entertainment,2022-08-24,Singapore
    2213,Checking,580.44,ACME,"Travel, Groceries, Dining, Entertainment, General Expenses, Transportation",2022-07-26,Indonesia
    2214,Savings,937.6,Amazon,"General Expenses, Groceries",2022-11-12,Indonesia
    2215,Joint Account,325.05,Fairprice,"Groceries, Travel, General Expenses, Transportation, Dining",2022-09-14,Japan
    2216,Joint Account,208.05,Google,"Travel, General Expenses, Transportation, Entertainment",2022-12-21,Japan
    2217,Checking,356.66,Walmart,"Groceries, Transportation, General Expenses, Travel",2022-06-20,Australia
    2218,Joint Account,227.44,Gojek,"Groceries, Entertainment, Travel, Transportation, Dining",2022-09-13,Indonesia
    2219,Joint Account,381.46,Walmart,Entertainment,2022-07-07,Indonesia
    2220,Checking,523.59,Starbucks,"Travel, General Expenses, Dining, Transportation",2022-07-11,Indonesia
    2221,Savings,220.69,Starbucks,Transportation,2022-06-14,Singapore
    2222,Checking,784.32,Fairprice,"Groceries, Dining, Travel, Entertainment, Transportation, General Expenses",2022-08-18,Singapore
    2223,Joint Account,0.97,Google,"General Expenses, Entertainment, Groceries",2022-09-13,Australia
    2224,Checking,541.39,Grab,"General Expenses, Travel",2022-06-21,Singapore
    2225,Joint Account,658.55,Fairprice,"Groceries, Entertainment, Travel, Transportation",2022-09-23,Indonesia
    2226,Joint Account,738.36,Uber,"Dining, Transportation, Groceries, General Expenses",2022-06-10,Australia
    2227,Joint Account,82.34,Grab,"Travel, Groceries, Dining, General Expenses",2022-06-21,Japan
    2228,Checking,467.59,Starbucks,"Dining, Transportation, General Expenses, Entertainment, Groceries, Travel",2022-09-25,Singapore
    2229,Joint Account,163.67,Gojek,"Transportation, Travel",2022-12-14,Japan
    2230,Savings,305.31,Walmart,"Groceries, General Expenses, Travel, Dining, Entertainment, Transportation",2022-06-26,Japan
    2231,Savings,541.09,Uber,"Travel, Transportation",2022-09-16,Singapore
    2232,Savings,530.04,Grab,"Transportation, Groceries, Travel, Entertainment, Dining",2022-12-20,Australia
    2233,Savings,796.64,Starbucks,"General Expenses, Entertainment, Groceries",2022-10-07,Japan
    2234,Joint Account,658.61,Grab,"General Expenses, Dining",2022-11-05,Indonesia
    2235,Joint Account,205.82,Google,"Dining, Transportation, General Expenses",2022-06-15,Australia
    2236,Joint Account,929.22,Gojek,"Entertainment, General Expenses",2022-09-21,Indonesia
    2237,Savings,5.05,Amazon,"Groceries, Transportation, Entertainment, Travel, Dining, General Expenses",2022-11-21,Singapore
    2238,Savings,899.82,Gojek,"Groceries, Travel, Entertainment, Transportation, General Expenses, Dining",2022-09-18,Australia
    2239,Savings,290.0,Grab,"Entertainment, General Expenses, Transportation, Travel",2022-06-27,Indonesia
    2240,Joint Account,603.82,Google,"Travel, General Expenses",2022-09-19,Japan
    2241,Joint Account,981.11,Google,Groceries,2022-08-28,Singapore
    2242,Checking,937.22,Google,"Entertainment, Travel, Transportation, Groceries, Dining, General Expenses",2022-06-05,Japan
    2243,Savings,848.93,Grab,"General Expenses, Entertainment, Groceries, Travel, Dining",2022-06-25,Singapore
    2244,Joint Account,307.93,Uber,"Travel, Dining, General Expenses, Entertainment, Groceries",2022-06-05,Indonesia
    2245,Joint Account,834.42,Google,Entertainment,2022-12-03,Indonesia
    2246,Savings,14.12,Gojek,"Entertainment, Transportation",2022-07-28,Indonesia
    2247,Checking,280.56,Google,"Travel, General Expenses, Entertainment, Transportation, Dining",2022-12-06,Indonesia
    2248,Joint Account,865.04,Walmart,"Entertainment, Transportation, Groceries, Travel",2022-08-08,Indonesia
    2249,Joint Account,818.0,Starbucks,"General Expenses, Dining, Entertainment, Transportation, Travel",2022-07-13,Indonesia
    2250,Joint Account,632.45,Starbucks,"Transportation, Dining, Travel, Entertainment, Groceries",2022-08-22,Japan
    2251,Joint Account,685.46,Google,"Entertainment, Travel",2022-10-28,Indonesia
    2252,Savings,939.51,Gojek,Transportation,2022-09-06,Singapore
    2253,Savings,859.31,Walmart,Entertainment,2022-11-29,Japan
    2254,Checking,917.17,ACME,"Entertainment, Transportation, General Expenses",2022-06-07,Japan
    2255,Savings,890.61,Amazon,"Entertainment, Travel",2022-10-27,Singapore
    2256,Savings,870.23,Gojek,"Entertainment, Groceries, General Expenses, Dining",2022-10-31,Japan
    2257,Joint Account,774.84,Grab,"Dining, Transportation, General Expenses",2022-09-29,Indonesia
    2258,Savings,982.01,Gojek,"Dining, Travel, General Expenses, Entertainment, Groceries",2022-11-28,Indonesia
    2259,Checking,626.61,ACME,"General Expenses, Dining, Transportation, Travel",2022-07-22,Singapore
    2260,Joint Account,426.58,Amazon,"Transportation, Dining, Entertainment, Groceries, Travel",2022-11-10,Japan
    2261,Savings,376.27,Walmart,Dining,2022-06-25,Singapore
    2262,Joint Account,228.83,Fairprice,"Dining, Entertainment, Transportation",2022-08-09,Singapore
    2263,Savings,451.28,Google,"Transportation, Groceries",2022-12-04,Japan
    2264,Joint Account,723.73,Grab,"Entertainment, Travel",2022-06-30,Indonesia
    2265,Checking,126.63,Grab,"Transportation, Travel, General Expenses, Groceries",2022-10-21,Singapore
    2266,Joint Account,155.86,Grab,"General Expenses, Entertainment, Dining, Travel, Transportation, Groceries",2022-11-28,Singapore
    2267,Savings,952.0,Uber,"General Expenses, Travel, Dining, Transportation",2022-07-16,Singapore
    2268,Joint Account,117.87,Grab,"General Expenses, Transportation, Entertainment, Groceries, Travel, Dining",2022-10-20,Japan
    2269,Joint Account,95.97,Google,"General Expenses, Dining",2022-06-26,Australia
    2270,Savings,796.03,Starbucks,Entertainment,2022-07-03,Japan
    2271,Checking,561.3,ACME,"Dining, Groceries",2022-08-11,Singapore
    2272,Checking,821.48,Gojek,"Groceries, Transportation",2022-10-24,Singapore
    2273,Joint Account,547.8,Grab,"Transportation, Dining, General Expenses",2022-11-03,Indonesia
    2274,Checking,152.68,ACME,"Dining, General Expenses",2022-10-16,Australia
    2275,Joint Account,620.66,Gojek,"Transportation, Entertainment, General Expenses, Travel, Dining",2022-10-10,Australia
    2276,Joint Account,442.22,Starbucks,"Transportation, Dining, Travel, Groceries, Entertainment",2022-06-20,Singapore
    2277,Checking,620.39,Starbucks,"Groceries, Dining, Transportation, Entertainment, Travel",2022-12-03,Indonesia
    2278,Checking,357.12,Grab,"Dining, Groceries, Entertainment, Travel",2022-12-18,Indonesia
    2279,Checking,453.15,Walmart,"General Expenses, Transportation",2022-06-02,Indonesia
    2280,Joint Account,262.69,ACME,Groceries,2022-09-24,Indonesia
    2281,Joint Account,847.14,Starbucks,"General Expenses, Groceries",2022-12-20,Australia
    2282,Savings,307.62,Walmart,Entertainment,2022-07-09,Singapore
    2283,Checking,386.17,Uber,"Dining, Groceries, Transportation, Entertainment, General Expenses",2022-07-03,Singapore
    2284,Savings,340.6,Gojek,"Travel, Groceries, Dining, Entertainment, Transportation",2022-09-01,Singapore
    2285,Savings,135.13,Grab,"Groceries, Entertainment, Transportation",2022-08-03,Japan
    2286,Joint Account,232.6,Grab,"Travel, General Expenses, Dining, Groceries",2022-07-24,Indonesia
    2287,Savings,343.55,Uber,Groceries,2022-08-23,Singapore
    2288,Savings,648.57,Grab,"Entertainment, Transportation, General Expenses",2022-11-21,Indonesia
    2289,Joint Account,309.99,Uber,"Groceries, Travel, Dining, Entertainment",2022-09-07,Singapore
    2290,Joint Account,235.46,Grab,"Entertainment, General Expenses",2022-07-24,Indonesia
    2291,Joint Account,847.61,Starbucks,Groceries,2022-07-25,Australia
    2292,Checking,311.26,Grab,"Travel, Entertainment, Dining, General Expenses",2022-10-26,Singapore
    2293,Joint Account,609.45,Gojek,"Travel, Groceries, Entertainment, Transportation, General Expenses",2022-09-26,Australia
    2294,Joint Account,22.04,Google,"General Expenses, Groceries, Dining, Travel, Transportation, Entertainment",2022-10-06,Japan
    2295,Joint Account,385.17,Google,Travel,2022-10-19,Indonesia
    2296,Savings,820.21,Fairprice,"General Expenses, Travel",2022-11-30,Singapore
    2297,Joint Account,368.17,Amazon,"Groceries, General Expenses",2022-06-11,Japan
    2298,Joint Account,937.29,Uber,"Travel, General Expenses, Dining",2022-12-05,Singapore
    2299,Joint Account,350.13,Starbucks,"Travel, General Expenses",2022-11-04,Japan
    2300,Joint Account,35.66,Walmart,"Transportation, Groceries",2022-10-09,Indonesia
    2301,Savings,909.59,Uber,"Travel, General Expenses, Transportation, Groceries",2022-07-05,Singapore
    2302,Joint Account,870.42,Walmart,"Travel, Dining, Transportation",2022-10-18,Indonesia
    2303,Joint Account,873.82,Starbucks,"Travel, Dining",2022-07-26,Singapore
    2304,Savings,889.8,Fairprice,Entertainment,2022-09-09,Australia
    2305,Savings,628.11,Walmart,"Travel, Dining, General Expenses",2022-10-13,Australia
    2306,Joint Account,477.26,Fairprice,"Groceries, General Expenses",2022-12-11,Singapore
    2307,Savings,728.71,Starbucks,"Entertainment, Travel, General Expenses, Transportation",2022-06-13,Japan
    2308,Joint Account,960.3,Starbucks,"Groceries, Travel, General Expenses, Dining, Transportation",2022-06-21,Australia
    2309,Checking,317.81,Google,"Dining, Travel, General Expenses, Transportation",2022-10-16,Australia
    2310,Joint Account,151.24,ACME,"Dining, Travel",2022-07-14,Japan
    2311,Joint Account,33.72,Starbucks,"Dining, Transportation, Groceries, Travel, General Expenses, Entertainment",2022-07-20,Japan
    2312,Savings,35.06,Starbucks,"Groceries, Travel, Entertainment",2022-06-16,Japan
    2313,Checking,445.27,ACME,"Transportation, Groceries, General Expenses",2022-06-13,Singapore
    2314,Savings,514.56,Starbucks,"Entertainment, Groceries, General Expenses",2022-07-08,Japan
    2315,Savings,590.59,ACME,"Travel, Groceries, General Expenses",2022-10-07,Japan
    2316,Checking,981.56,Grab,Dining,2022-06-30,Japan
    2317,Checking,410.02,Gojek,"Travel, Transportation, Dining, General Expenses",2022-09-19,Indonesia
    2318,Savings,671.2,Uber,Dining,2022-10-11,Indonesia
    2319,Checking,217.05,Amazon,"Entertainment, Travel, Transportation, Groceries, Dining",2022-08-18,Japan
    2320,Savings,235.96,Gojek,"General Expenses, Transportation",2022-10-09,Indonesia
    2321,Joint Account,185.71,Fairprice,"Entertainment, Transportation",2022-12-18,Indonesia
    2322,Joint Account,187.67,Walmart,"Dining, Transportation",2022-08-27,Japan
    2323,Savings,851.34,Gojek,"Transportation, Groceries, Dining, Travel, Entertainment",2022-12-30,Singapore
    2324,Joint Account,157.73,Grab,"Groceries, Dining, General Expenses",2022-12-16,Indonesia
    2325,Checking,369.32,Gojek,"General Expenses, Dining",2022-12-07,Japan
    2326,Savings,480.44,Starbucks,Dining,2022-12-09,Indonesia
    2327,Checking,446.38,Fairprice,Groceries,2022-09-26,Japan
    2328,Savings,8.21,Google,"General Expenses, Travel, Groceries",2022-06-04,Australia
    2329,Savings,384.41,Walmart,"Dining, Groceries, Entertainment",2022-07-25,Singapore
    2330,Checking,209.25,Walmart,"Transportation, Dining, Travel, Entertainment",2022-10-01,Indonesia
    2331,Savings,260.33,Amazon,"Travel, Transportation, Groceries",2022-12-18,Singapore
    2332,Joint Account,746.58,Uber,General Expenses,2022-06-14,Indonesia
    2333,Joint Account,975.28,ACME,"Dining, Travel",2022-11-07,Indonesia
    2334,Savings,391.32,Grab,"Groceries, General Expenses, Entertainment, Transportation, Travel",2022-10-31,Indonesia
    2335,Joint Account,56.26,Walmart,"Dining, Transportation",2022-12-28,Australia
    2336,Checking,491.36,ACME,"Dining, Travel, Entertainment, Transportation, General Expenses",2022-11-24,Australia
    2337,Joint Account,232.68,Starbucks,"Transportation, Dining, General Expenses, Entertainment, Groceries, Travel",2022-12-26,Singapore
    2338,Checking,637.87,Starbucks,"Transportation, General Expenses, Dining, Travel, Groceries, Entertainment",2022-11-30,Japan
    2339,Joint Account,168.88,Starbucks,"Dining, Entertainment, General Expenses, Travel, Transportation, Groceries",2022-06-12,Singapore
    2340,Checking,650.24,Grab,"Dining, Travel, Transportation, Groceries, General Expenses",2022-10-25,Indonesia
    2341,Savings,37.09,Grab,Entertainment,2022-10-09,Japan
    2342,Checking,499.18,Uber,"Dining, Entertainment, Transportation",2022-08-23,Australia
    2343,Savings,205.63,Grab,"Dining, Travel, General Expenses, Groceries, Transportation, Entertainment",2022-12-07,Indonesia
    2344,Joint Account,740.44,Amazon,"Transportation, Entertainment, General Expenses",2022-06-16,Indonesia
    2345,Savings,71.71,Gojek,"Groceries, Transportation, Entertainment, General Expenses, Travel, Dining",2022-09-21,Japan
    2346,Joint Account,452.11,Walmart,Travel,2022-11-09,Indonesia
    2347,Savings,323.84,Uber,"Transportation, General Expenses, Dining, Travel",2022-07-24,Singapore
    2348,Savings,425.54,Uber,"Travel, Dining",2022-10-20,Singapore
    2349,Joint Account,31.29,Uber,Dining,2022-08-06,Japan
    2350,Savings,839.64,Uber,Entertainment,2022-08-30,Japan
    2351,Joint Account,613.2,Starbucks,"Dining, Entertainment, Transportation, General Expenses, Groceries",2022-06-18,Australia
    2352,Checking,303.86,ACME,"Transportation, Groceries, Travel, General Expenses, Entertainment, Dining",2022-11-22,Japan
    2353,Savings,485.58,Uber,Dining,2022-09-14,Singapore
    2354,Savings,450.82,Walmart,"Transportation, Dining, Travel, Groceries, General Expenses, Entertainment",2022-12-08,Japan
    2355,Savings,557.95,Fairprice,"Groceries, Entertainment, Travel, General Expenses, Dining",2022-12-13,Indonesia
    2356,Checking,31.92,ACME,"Entertainment, General Expenses, Travel",2022-12-03,Indonesia
    2357,Joint Account,371.37,Uber,"Entertainment, Travel, Groceries, General Expenses, Dining, Transportation",2022-12-01,Indonesia
    2358,Checking,225.55,Walmart,"Entertainment, Groceries, Dining, General Expenses",2022-12-13,Indonesia
    2359,Savings,250.37,Uber,"Transportation, Entertainment",2022-06-07,Singapore
    2360,Joint Account,332.76,Fairprice,"Dining, Transportation, Entertainment",2022-10-23,Australia
    2361,Savings,561.66,Gojek,"Dining, Entertainment",2022-06-15,Australia
    2362,Joint Account,735.79,Fairprice,"Dining, General Expenses, Groceries, Travel, Entertainment",2022-07-02,Indonesia
    2363,Checking,665.68,ACME,Transportation,2022-08-14,Australia
    2364,Joint Account,592.12,Google,"General Expenses, Travel, Groceries",2022-10-06,Australia
    2365,Checking,322.66,Starbucks,"Dining, General Expenses, Groceries",2022-09-23,Indonesia
    2366,Joint Account,837.54,Grab,Groceries,2022-10-18,Indonesia
    2367,Savings,232.85,Walmart,"General Expenses, Groceries, Entertainment",2022-11-30,Australia
    2368,Joint Account,903.52,ACME,"Travel, Entertainment",2022-12-18,Australia
    2369,Joint Account,78.63,Google,"Entertainment, Travel, General Expenses, Groceries",2022-10-21,Japan
    2370,Checking,790.19,Fairprice,"Travel, Entertainment, Transportation, Groceries",2022-06-18,Japan
    2371,Savings,311.7,Gojek,"Groceries, Travel, Transportation, Entertainment, General Expenses, Dining",2022-10-14,Indonesia
    2372,Savings,211.31,ACME,"General Expenses, Groceries, Travel, Dining",2022-09-05,Japan
    2373,Savings,934.49,ACME,"Entertainment, Travel, Groceries",2022-08-05,Japan
    2374,Savings,270.69,Gojek,"Travel, Entertainment, General Expenses, Transportation, Groceries, Dining",2022-06-14,Singapore
    2375,Joint Account,143.98,Fairprice,Travel,2022-12-27,Japan
    2376,Checking,802.56,Uber,Travel,2022-08-25,Australia
    2377,Checking,356.15,Gojek,"Groceries, Dining",2022-07-31,Japan
    2378,Savings,477.37,ACME,"Dining, Groceries, Travel",2022-06-17,Japan
    2379,Savings,223.15,Fairprice,"Groceries, Transportation, General Expenses",2022-07-02,Indonesia
    2380,Checking,440.91,Walmart,Travel,2022-07-18,Australia
    2381,Savings,476.44,Grab,"Groceries, Transportation, General Expenses",2022-09-22,Singapore
    2382,Savings,144.5,Starbucks,"Groceries, Entertainment, Dining, Transportation",2022-12-31,Australia
    2383,Joint Account,449.14,Uber,"Dining, Travel, General Expenses, Entertainment, Transportation, Groceries",2022-06-06,Indonesia
    2384,Joint Account,511.54,Walmart,"Travel, Dining",2022-11-07,Indonesia
    2385,Checking,972.04,Gojek,"Groceries, Travel, Entertainment, Transportation, General Expenses, Dining",2022-10-13,Japan
    2386,Joint Account,795.43,Gojek,"Dining, Entertainment",2022-08-17,Singapore
    2387,Joint Account,184.51,Grab,"Entertainment, Travel, General Expenses",2022-09-05,Singapore
    2388,Checking,194.08,ACME,"Transportation, Groceries",2022-07-18,Australia
    2389,Savings,723.4,Grab,"General Expenses, Groceries, Travel, Transportation, Dining",2022-06-19,Singapore
    2390,Checking,601.26,Google,"Entertainment, Transportation, General Expenses, Groceries, Travel, Dining",2022-07-30,Singapore
    2391,Joint Account,715.45,ACME,"Travel, Dining, General Expenses, Entertainment, Groceries, Transportation",2022-07-27,Singapore
    2392,Savings,482.44,Amazon,"General Expenses, Travel",2022-08-26,Japan
    2393,Savings,164.78,Fairprice,Transportation,2022-12-17,Australia
    2394,Savings,657.46,Uber,"Dining, Groceries, General Expenses, Travel",2022-12-12,Australia
    2395,Savings,826.58,Gojek,Travel,2022-11-18,Singapore
    2396,Joint Account,565.35,Uber,"Groceries, Dining, Entertainment, Travel, General Expenses, Transportation",2022-08-19,Indonesia
    2397,Savings,270.46,Uber,"Groceries, Transportation, Travel, Entertainment, General Expenses, Dining",2022-08-14,Indonesia
    2398,Checking,81.88,Google,"Transportation, Dining, Entertainment, Groceries",2022-11-06,Australia
    2399,Savings,985.8,Grab,"General Expenses, Entertainment",2022-11-07,Singapore
    2400,Checking,765.79,Grab,"Entertainment, Groceries, Dining, General Expenses",2022-08-26,Singapore
    2401,Checking,995.1,ACME,"Dining, Entertainment, Transportation, Groceries, Travel, General Expenses",2022-10-29,Australia
    2402,Savings,194.39,Starbucks,"Entertainment, Groceries, General Expenses",2022-11-17,Japan
    2403,Checking,295.79,ACME,"Travel, Transportation, Dining",2022-06-18,Japan
    2404,Joint Account,922.13,Grab,"Dining, Groceries, Transportation, General Expenses, Travel",2022-09-06,Japan
    2405,Savings,155.39,Walmart,Entertainment,2022-10-10,Indonesia
    2406,Checking,653.91,Grab,"Groceries, General Expenses, Transportation, Dining, Travel",2022-09-26,Australia
    2407,Checking,769.27,Uber,"Entertainment, Groceries, General Expenses, Travel",2022-12-27,Japan
    2408,Joint Account,901.27,Amazon,Groceries,2022-06-12,Australia
    2409,Checking,171.02,Starbucks,"Travel, Entertainment, Transportation, Groceries",2022-12-21,Indonesia
    2410,Joint Account,404.37,ACME,"General Expenses, Dining",2022-09-08,Australia
    2411,Joint Account,423.64,Uber,"General Expenses, Entertainment",2022-08-22,Singapore
    2412,Joint Account,321.98,Walmart,"Travel, Groceries, General Expenses",2022-07-05,Indonesia
    2413,Joint Account,122.74,ACME,"Travel, Transportation, Entertainment, General Expenses, Dining, Groceries",2022-09-26,Australia
    2414,Checking,495.08,Starbucks,Entertainment,2022-08-12,Australia
    2415,Savings,362.68,Uber,Entertainment,2022-07-08,Singapore
    2416,Savings,456.65,Fairprice,"Groceries, General Expenses, Entertainment, Transportation, Travel",2022-10-12,Singapore
    2417,Checking,905.6,Starbucks,"Entertainment, General Expenses",2022-09-10,Australia
    2418,Joint Account,291.36,Walmart,"Dining, General Expenses",2022-11-17,Japan
    2419,Joint Account,750.22,Grab,"Entertainment, Transportation, Groceries, Dining",2022-12-01,Indonesia
    2420,Savings,911.22,Walmart,"Dining, Transportation, Travel, Groceries",2022-06-15,Australia
    2421,Checking,682.66,Gojek,"Travel, Groceries, Dining, General Expenses, Transportation, Entertainment",2022-11-19,Indonesia
    2422,Joint Account,859.71,ACME,Groceries,2022-12-08,Singapore
    2423,Savings,835.99,Fairprice,"Dining, Entertainment, Travel",2022-08-17,Indonesia
    2424,Joint Account,522.83,Starbucks,"Transportation, Travel, General Expenses",2022-11-19,Australia
    2425,Joint Account,312.08,Grab,Entertainment,2022-11-13,Japan
    2426,Checking,327.03,Uber,Groceries,2022-11-19,Australia
    2427,Checking,220.82,ACME,"General Expenses, Dining, Entertainment, Transportation, Travel",2022-11-13,Japan
    2428,Checking,135.07,Starbucks,"Travel, Transportation, Entertainment, Groceries, Dining, General Expenses",2022-06-29,Japan
    2429,Joint Account,3.43,Fairprice,General Expenses,2022-12-27,Japan
    2430,Checking,2.82,Fairprice,"Entertainment, Travel, General Expenses, Groceries",2022-12-31,Singapore
    2431,Joint Account,265.2,Fairprice,Dining,2022-06-05,Indonesia
    2432,Joint Account,477.85,Walmart,"Entertainment, Dining",2022-12-24,Australia
    2433,Checking,167.84,ACME,"General Expenses, Dining, Travel, Groceries, Entertainment, Transportation",2022-11-25,Japan
    2434,Savings,969.94,Walmart,Transportation,2022-08-18,Japan
    2435,Joint Account,556.94,ACME,Groceries,2022-10-09,Indonesia
    2436,Joint Account,762.82,Amazon,"Groceries, Entertainment",2022-07-05,Indonesia
    2437,Checking,680.24,Amazon,"General Expenses, Travel, Dining, Transportation, Entertainment, Groceries",2022-06-22,Indonesia
    2438,Checking,768.06,Amazon,"Groceries, Entertainment, Travel, Transportation",2022-12-02,Japan
    2439,Joint Account,90.56,Amazon,"Groceries, General Expenses, Entertainment",2022-06-02,Singapore
    2440,Savings,174.66,Uber,"Dining, Travel, Groceries",2022-12-10,Singapore
    2441,Savings,229.62,Starbucks,"Dining, General Expenses, Transportation, Travel",2022-08-20,Australia
    2442,Joint Account,370.56,Google,"General Expenses, Groceries, Transportation, Entertainment, Dining",2022-06-08,Indonesia
    2443,Joint Account,806.99,Fairprice,General Expenses,2022-10-05,Indonesia
    2444,Savings,463.05,Amazon,"Travel, General Expenses, Groceries, Entertainment",2022-10-16,Singapore
    2445,Savings,617.19,Gojek,Groceries,2022-12-11,Japan
    2446,Savings,613.41,Uber,"Dining, Groceries",2022-10-04,Japan
    2447,Checking,353.41,Amazon,"Transportation, General Expenses, Groceries, Travel, Dining",2022-12-29,Singapore
    2448,Savings,281.24,ACME,"General Expenses, Transportation, Travel, Dining, Entertainment",2022-09-18,Australia
    2449,Checking,994.64,Grab,"Entertainment, Groceries, Travel, General Expenses",2022-08-19,Japan
    2450,Joint Account,551.87,Starbucks,"Transportation, Travel",2022-08-19,Australia
    2451,Checking,757.8,Starbucks,"Transportation, Travel, Groceries",2022-07-09,Singapore
    2452,Joint Account,892.28,ACME,Travel,2022-11-15,Singapore
    2453,Checking,659.13,Gojek,"Travel, Entertainment, Groceries",2022-08-23,Indonesia
    2454,Joint Account,609.06,Fairprice,"Travel, Dining, General Expenses, Groceries, Transportation, Entertainment",2022-12-20,Indonesia
    2455,Checking,333.89,Fairprice,"Entertainment, Travel",2022-09-26,Singapore
    2456,Savings,33.91,Starbucks,"Travel, Entertainment, Groceries, Transportation, General Expenses",2022-10-16,Japan
    2457,Checking,261.56,Walmart,"Groceries, Transportation",2022-11-02,Singapore
    2458,Joint Account,435.78,Walmart,"General Expenses, Dining",2022-06-04,Japan
    2459,Savings,638.29,Fairprice,"Travel, Entertainment, Transportation, General Expenses, Dining",2022-12-31,Japan
    2460,Checking,385.62,Fairprice,"General Expenses, Travel, Entertainment, Transportation, Dining",2022-09-07,Australia
    2461,Savings,862.98,Starbucks,"Groceries, General Expenses, Dining",2022-11-02,Australia
    2462,Checking,265.8,Fairprice,"Travel, Transportation, Groceries, Entertainment",2022-12-07,Indonesia
    2463,Savings,462.4,Gojek,"Groceries, Dining, General Expenses",2022-12-11,Australia
    2464,Savings,289.56,Fairprice,"Groceries, Dining, Entertainment, Travel, Transportation",2022-06-29,Indonesia
    2465,Savings,787.75,Uber,"Travel, Transportation, Groceries, General Expenses, Dining, Entertainment",2022-10-26,Indonesia
    2466,Joint Account,599.73,Starbucks,"Dining, General Expenses",2022-09-30,Singapore
    2467,Savings,41.7,Uber,Dining,2022-10-01,Australia
    2468,Savings,207.41,Grab,"Travel, Dining",2022-06-21,Japan
    2469,Savings,433.54,Grab,General Expenses,2022-10-04,Japan
    2470,Joint Account,631.36,Google,"Entertainment, Transportation, Groceries",2022-12-01,Japan
    2471,Checking,252.81,Amazon,"Dining, General Expenses, Groceries",2022-12-23,Japan
    2472,Joint Account,128.61,Gojek,"Groceries, Entertainment, Transportation, Dining, Travel, General Expenses",2022-12-20,Singapore
    2473,Joint Account,739.51,ACME,"Groceries, General Expenses, Dining, Entertainment",2022-07-11,Indonesia
    2474,Checking,433.09,Fairprice,"Travel, Transportation, General Expenses",2022-08-10,Japan
    2475,Joint Account,841.59,Uber,"Travel, Entertainment",2022-11-10,Singapore
    2476,Savings,315.7,Starbucks,Groceries,2022-08-01,Singapore
    2477,Savings,789.09,Grab,"General Expenses, Travel, Transportation, Dining, Groceries",2022-07-01,Indonesia
    2478,Savings,124.77,Gojek,"Transportation, Dining, Travel, Groceries",2022-06-28,Indonesia
    2479,Joint Account,274.45,Google,Entertainment,2022-07-04,Indonesia
    2480,Joint Account,100.64,Fairprice,"Dining, Entertainment, General Expenses, Groceries, Transportation",2022-10-29,Singapore
    2481,Checking,610.77,Amazon,"Dining, Transportation, Travel",2022-07-06,Indonesia
    2482,Savings,425.0,Amazon,Groceries,2022-06-22,Indonesia
    2483,Savings,440.99,Fairprice,"Dining, Travel, Entertainment",2022-12-23,Japan
    2484,Joint Account,756.55,Fairprice,"Travel, Dining, General Expenses",2022-06-02,Australia
    2485,Joint Account,473.99,Walmart,"General Expenses, Groceries, Transportation",2022-06-27,Indonesia
    2486,Savings,151.77,Walmart,"General Expenses, Entertainment, Travel, Transportation",2022-07-30,Japan
    2487,Checking,187.02,Starbucks,"Transportation, Travel",2022-10-28,Japan
    2488,Savings,646.28,Google,"Groceries, Entertainment, Transportation, Dining",2022-09-17,Indonesia
    2489,Joint Account,241.53,Gojek,"Groceries, Transportation, General Expenses, Entertainment",2022-09-07,Singapore
    2490,Joint Account,707.43,Amazon,"Entertainment, Transportation, Dining, Groceries",2022-08-11,Japan
    2491,Joint Account,465.66,Uber,"General Expenses, Dining, Travel, Entertainment",2022-10-04,Japan
    2492,Checking,25.67,Grab,"Transportation, Dining",2022-08-05,Indonesia
    2493,Joint Account,368.98,Uber,"Groceries, Dining, Transportation",2022-09-25,Indonesia
    2494,Savings,344.9,Fairprice,"Dining, General Expenses, Groceries",2022-07-27,Singapore
    2495,Joint Account,239.47,Amazon,"Travel, General Expenses, Transportation, Dining, Groceries, Entertainment",2022-11-07,Indonesia
    2496,Joint Account,215.79,Google,"Transportation, Dining, General Expenses",2022-12-05,Australia
    2497,Checking,920.62,Uber,"Travel, Transportation, General Expenses, Dining",2022-10-12,Singapore
    2498,Joint Account,529.28,Walmart,"Travel, Dining, General Expenses, Entertainment",2022-11-21,Indonesia
    2499,Savings,417.69,Starbucks,Groceries,2022-10-14,Australia
    2500,Joint Account,943.27,Fairprice,"Groceries, Travel, Entertainment, Dining, Transportation",2022-07-27,Japan
    2501,Joint Account,203.95,Gojek,"Dining, Groceries, Transportation, Travel, General Expenses, Entertainment",2022-12-20,Indonesia
    2502,Checking,118.31,Fairprice,"Dining, Travel, Groceries, General Expenses, Transportation, Entertainment",2022-12-01,Singapore
    2503,Joint Account,179.2,ACME,"General Expenses, Entertainment, Travel, Dining, Groceries, Transportation",2022-08-16,Singapore
    2504,Joint Account,0.93,Gojek,"General Expenses, Groceries, Transportation, Dining, Travel, Entertainment",2022-12-30,Singapore
    2505,Savings,153.01,Gojek,Travel,2022-10-18,Singapore
    2506,Savings,901.04,Grab,"Travel, General Expenses",2022-11-19,Singapore
    2507,Savings,696.8,Uber,General Expenses,2022-09-24,Singapore
    2508,Checking,327.36,Amazon,"General Expenses, Dining",2022-12-16,Australia
    2509,Savings,110.67,Walmart,"Dining, General Expenses, Travel, Groceries",2022-07-25,Japan
    2510,Checking,537.43,Grab,"Travel, Groceries, Entertainment",2022-09-23,Japan
    2511,Joint Account,823.11,Google,"Entertainment, Dining, Transportation",2022-10-28,Japan
    2512,Joint Account,561.19,Walmart,"Entertainment, Travel, Groceries, General Expenses",2022-12-02,Singapore
    2513,Checking,779.41,Amazon,"Dining, Transportation",2022-12-27,Japan
    2514,Savings,201.97,Google,"Groceries, Transportation, Entertainment, Dining",2022-08-17,Singapore
    2515,Savings,436.56,Fairprice,Transportation,2022-09-28,Indonesia
    2516,Savings,594.27,ACME,"Entertainment, Groceries, General Expenses",2022-07-02,Singapore
    2517,Joint Account,549.57,Grab,"Transportation, Entertainment, General Expenses, Travel, Dining",2022-11-14,Australia
    2518,Checking,887.81,ACME,Groceries,2022-09-07,Australia
    2519,Joint Account,362.26,Grab,"Groceries, Transportation, General Expenses, Entertainment, Travel",2022-06-06,Singapore
    2520,Joint Account,182.9,Amazon,"General Expenses, Travel, Entertainment, Groceries, Transportation",2022-06-27,Australia
    2521,Joint Account,314.34,Starbucks,"General Expenses, Transportation, Groceries, Entertainment, Travel, Dining",2022-07-23,Japan
    2522,Joint Account,0.53,Gojek,"Dining, Entertainment",2022-08-01,Australia
    2523,Joint Account,501.56,Google,"General Expenses, Groceries",2022-11-04,Japan
    2524,Joint Account,666.67,ACME,"General Expenses, Dining, Transportation, Entertainment",2022-12-24,Indonesia
    2525,Checking,487.48,Uber,"General Expenses, Entertainment",2022-06-28,Indonesia
    2526,Savings,954.05,Fairprice,Transportation,2022-10-16,Australia
    2527,Joint Account,153.15,Grab,Dining,2022-08-24,Singapore
    2528,Savings,300.6,Google,"Dining, Travel, General Expenses, Groceries",2022-10-17,Singapore
    2529,Checking,160.73,Gojek,Travel,2022-08-09,Singapore
    2530,Joint Account,216.25,Starbucks,"General Expenses, Travel, Transportation, Groceries, Dining, Entertainment",2022-11-12,Japan
    2531,Savings,96.99,Fairprice,"General Expenses, Transportation, Groceries, Entertainment",2022-06-23,Singapore
    2532,Checking,957.79,Grab,"Dining, Entertainment",2022-07-21,Australia
    2533,Joint Account,800.21,Starbucks,"Travel, General Expenses, Dining, Groceries, Transportation, Entertainment",2022-07-02,Japan
    2534,Savings,768.19,Gojek,Dining,2022-11-10,Japan
    2535,Joint Account,658.0,Grab,"Entertainment, Transportation, Dining, Travel, General Expenses, Groceries",2022-12-21,Japan
    2536,Joint Account,765.38,Uber,Groceries,2022-11-28,Indonesia
    2537,Joint Account,491.06,Uber,"Groceries, Travel",2022-09-14,Singapore
    2538,Checking,678.65,ACME,"Transportation, Groceries, Travel, Entertainment, General Expenses, Dining",2022-06-04,Indonesia
    2539,Joint Account,522.92,ACME,Travel,2022-11-18,Australia
    2540,Savings,935.28,ACME,"Travel, Transportation, Entertainment, General Expenses, Dining, Groceries",2022-09-03,Singapore
    2541,Savings,826.07,Uber,"Dining, Entertainment, Travel, General Expenses, Transportation",2022-12-20,Singapore
    2542,Savings,638.43,Amazon,"Entertainment, Transportation, Groceries, Travel, General Expenses",2022-11-08,Japan
    2543,Savings,640.56,Google,"General Expenses, Dining, Groceries, Transportation, Entertainment, Travel",2022-09-11,Australia
    2544,Checking,701.06,Grab,"Dining, Transportation, General Expenses",2022-07-30,Indonesia
    2545,Joint Account,292.84,ACME,"Groceries, Dining",2022-11-13,Singapore
    2546,Joint Account,964.1,Walmart,"General Expenses, Travel, Entertainment, Transportation",2022-10-16,Australia
    2547,Savings,613.38,Gojek,"General Expenses, Entertainment, Groceries, Travel, Transportation, Dining",2022-11-22,Japan
    2548,Joint Account,292.22,ACME,"General Expenses, Dining, Groceries, Transportation, Entertainment, Travel",2022-09-06,Japan
    2549,Savings,996.31,Google,Dining,2022-07-08,Singapore
    2550,Joint Account,48.51,ACME,"Groceries, General Expenses, Travel, Dining, Transportation",2022-12-28,Singapore
    2551,Savings,610.18,Starbucks,"Dining, Groceries, Transportation",2022-09-21,Australia
    2552,Checking,369.09,Amazon,"Entertainment, Groceries, Dining, General Expenses, Transportation",2022-07-26,Australia
    2553,Savings,14.98,Uber,"Entertainment, Dining, General Expenses",2022-09-28,Indonesia
    2554,Checking,811.41,Grab,Entertainment,2022-10-17,Australia
    2555,Checking,523.74,Starbucks,"General Expenses, Entertainment, Dining, Groceries",2022-07-01,Indonesia
    2556,Checking,75.48,Google,"General Expenses, Travel, Transportation",2022-11-18,Indonesia
    2557,Checking,267.21,Amazon,"Dining, Transportation, General Expenses, Groceries",2022-06-08,Japan
    2558,Joint Account,560.23,Walmart,"Groceries, Travel, Entertainment, General Expenses, Dining",2022-07-09,Australia
    2559,Savings,359.14,Walmart,"Dining, Entertainment, Groceries, General Expenses, Transportation",2022-06-19,Australia
    2560,Savings,551.96,ACME,"Groceries, General Expenses, Transportation, Entertainment, Travel",2022-09-14,Indonesia
    2561,Savings,513.28,Grab,General Expenses,2022-11-21,Indonesia
    2562,Checking,37.72,Walmart,"Groceries, Transportation, Dining, Entertainment, Travel, General Expenses",2022-09-15,Indonesia
    2563,Joint Account,456.08,Gojek,"Entertainment, Transportation, General Expenses, Groceries",2022-12-25,Japan
    2564,Checking,238.32,Starbucks,"Dining, Entertainment, General Expenses, Travel",2022-12-22,Australia
    2565,Joint Account,113.68,Fairprice,"Entertainment, Travel, Groceries, Transportation",2022-07-20,Japan
    2566,Joint Account,563.24,Walmart,"Transportation, Dining, Groceries, Travel, General Expenses",2022-10-24,Indonesia
    2567,Checking,544.9,Google,Groceries,2022-09-16,Japan
    2568,Joint Account,163.58,Google,"Transportation, Travel, Groceries, Dining, Entertainment",2022-12-24,Japan
    2569,Joint Account,918.84,Uber,"Dining, Entertainment, General Expenses",2022-06-23,Indonesia
    2570,Checking,45.31,Uber,"Travel, Entertainment, Transportation",2022-06-07,Japan
    2571,Savings,897.97,Gojek,"Dining, Entertainment",2022-07-25,Singapore
    2572,Joint Account,754.2,Fairprice,"Dining, Travel",2022-09-08,Indonesia
    2573,Savings,134.98,Fairprice,"General Expenses, Transportation",2022-11-21,Australia
    2574,Joint Account,926.9,Grab,"Travel, Transportation, Entertainment, Dining, Groceries",2022-10-15,Australia
    2575,Checking,869.11,Starbucks,"General Expenses, Groceries, Entertainment, Travel, Transportation, Dining",2022-12-05,Indonesia
    2576,Savings,413.32,ACME,Entertainment,2022-10-16,Australia
    2577,Checking,776.77,ACME,Dining,2022-09-29,Australia
    2578,Checking,333.79,Google,Groceries,2022-07-26,Singapore
    2579,Checking,639.71,Amazon,"Transportation, Groceries, Entertainment, General Expenses",2022-12-15,Indonesia
    2580,Checking,312.56,Google,"Transportation, Groceries",2022-11-14,Australia
    2581,Checking,125.65,Google,"General Expenses, Groceries, Transportation, Entertainment, Dining",2022-08-17,Australia
    2582,Checking,326.26,Google,"Entertainment, Groceries, Dining, General Expenses, Travel, Transportation",2022-09-12,Japan
    2583,Savings,888.69,Gojek,"Travel, General Expenses, Transportation, Dining, Entertainment, Groceries",2022-11-28,Singapore
    2584,Checking,730.04,Fairprice,"Dining, Groceries, Travel, Entertainment, Transportation",2022-09-04,Singapore
    2585,Checking,701.22,Starbucks,"Transportation, Groceries",2022-06-01,Indonesia
    2586,Savings,222.94,Google,Groceries,2022-12-13,Australia
    2587,Savings,148.43,Amazon,"Groceries, Dining, Travel, Transportation, General Expenses",2022-11-03,Australia
    2588,Savings,31.71,Starbucks,"Transportation, Dining, General Expenses",2022-09-18,Japan
    2589,Savings,465.09,Starbucks,"General Expenses, Transportation, Groceries, Dining",2022-07-13,Japan
    2590,Joint Account,454.21,Google,"Entertainment, Transportation, Groceries, Dining, Travel, General Expenses",2022-07-15,Australia
    2591,Joint Account,798.48,Gojek,Groceries,2022-06-22,Australia
    2592,Checking,866.03,Grab,"Transportation, General Expenses, Groceries",2022-09-02,Indonesia
    2593,Joint Account,911.58,ACME,"Travel, Groceries",2022-08-05,Australia
    2594,Joint Account,486.98,Fairprice,"Dining, Travel",2022-06-09,Australia
    2595,Checking,353.34,Fairprice,"General Expenses, Dining",2022-07-12,Singapore
    2596,Joint Account,421.42,Gojek,"Travel, Groceries, Entertainment",2022-06-15,Japan
    2597,Checking,602.34,Starbucks,Travel,2022-12-11,Indonesia
    2598,Joint Account,53.56,Gojek,Dining,2022-09-11,Singapore
    2599,Checking,583.64,Fairprice,"Groceries, Transportation, Entertainment, General Expenses",2022-07-29,Indonesia
    2600,Joint Account,800.0,Uber,"Dining, Travel, Transportation, Groceries, General Expenses",2022-10-09,Singapore
    2601,Savings,11.02,Amazon,"Groceries, Entertainment, Dining, Transportation, General Expenses",2022-06-25,Australia
    2602,Checking,558.1,Fairprice,"Entertainment, General Expenses",2022-11-24,Australia
    2603,Savings,758.86,Starbucks,"General Expenses, Dining, Transportation, Entertainment, Groceries",2022-11-18,Singapore
    2604,Checking,646.75,Grab,"Transportation, General Expenses, Groceries, Dining, Travel",2022-11-19,Singapore
    2605,Joint Account,784.23,Uber,"Groceries, Travel, Entertainment, General Expenses, Dining",2022-06-27,Japan
    2606,Joint Account,209.77,Grab,"Dining, Entertainment, Transportation, General Expenses",2022-06-22,Singapore
    2607,Checking,860.82,Starbucks,"Travel, Entertainment, Transportation",2022-07-10,Japan
    2608,Savings,397.39,Gojek,"Transportation, Travel",2022-06-02,Australia
    2609,Savings,892.63,Fairprice,"Dining, Entertainment",2022-10-15,Australia
    2610,Joint Account,798.63,Google,"Groceries, Travel, Entertainment, Transportation, General Expenses",2022-11-09,Indonesia
    2611,Savings,705.49,Google,"General Expenses, Transportation, Groceries",2022-06-08,Indonesia
    2612,Checking,21.61,Gojek,Groceries,2022-08-24,Australia
    2613,Joint Account,465.6,Starbucks,"Groceries, Dining, Travel",2022-10-23,Japan
    2614,Checking,509.87,ACME,"General Expenses, Dining",2022-11-07,Singapore
    2615,Checking,112.65,Google,"Groceries, General Expenses, Transportation",2022-09-06,Indonesia
    2616,Checking,709.94,Gojek,"Transportation, Entertainment, General Expenses",2022-07-30,Australia
    2617,Savings,60.29,Gojek,"Transportation, Dining",2022-09-30,Japan
    2618,Savings,276.75,Walmart,"Travel, Transportation, Groceries, Entertainment, General Expenses",2022-11-24,Indonesia
    2619,Checking,83.11,Amazon,"Dining, Transportation, Travel, General Expenses",2022-10-28,Singapore
    2620,Savings,659.35,Grab,General Expenses,2022-08-27,Australia
    2621,Checking,650.28,Amazon,"Travel, Entertainment",2022-11-18,Japan
    2622,Checking,467.24,Uber,"Travel, Dining, Groceries, Transportation, Entertainment, General Expenses",2022-11-03,Indonesia
    2623,Checking,682.86,ACME,"Travel, Groceries",2022-06-06,Australia
    2624,Savings,598.84,Fairprice,"Groceries, Transportation, Entertainment, Dining, General Expenses",2022-09-04,Indonesia
    2625,Savings,682.47,Fairprice,General Expenses,2022-11-12,Singapore
    2626,Joint Account,468.09,Walmart,"Transportation, Dining, Entertainment, Groceries",2022-10-08,Singapore
    2627,Savings,157.98,Gojek,General Expenses,2022-08-24,Japan
    2628,Checking,484.62,ACME,"Travel, General Expenses, Transportation",2022-09-01,Japan
    2629,Savings,776.44,Amazon,"Dining, General Expenses",2022-11-25,Japan
    2630,Savings,690.88,Gojek,"Entertainment, Dining, General Expenses, Travel",2022-06-22,Indonesia
    2631,Checking,601.0,Fairprice,"Entertainment, Groceries, Dining, General Expenses",2022-06-08,Indonesia
    2632,Joint Account,90.88,Grab,"Travel, Groceries, Dining, Entertainment, Transportation",2022-12-07,Indonesia
    2633,Joint Account,409.41,ACME,"General Expenses, Travel, Entertainment, Groceries, Dining",2022-08-03,Japan
    2634,Checking,127.48,ACME,"Transportation, Dining, Entertainment, General Expenses, Groceries",2022-11-21,Australia
    2635,Joint Account,787.23,ACME,"Entertainment, Travel, Dining",2022-06-29,Japan
    2636,Checking,761.79,ACME,"Groceries, Travel, General Expenses, Transportation, Entertainment, Dining",2022-11-02,Japan
    2637,Checking,249.53,Uber,"Transportation, Dining",2022-09-11,Singapore
    2638,Checking,717.98,Google,"General Expenses, Dining",2022-06-07,Singapore
    2639,Joint Account,132.45,Amazon,"Entertainment, General Expenses, Transportation, Dining, Groceries",2022-06-27,Japan
    2640,Checking,648.65,Walmart,"Travel, Transportation, Dining, Entertainment, Groceries, General Expenses",2022-07-17,Japan
    2641,Checking,867.9,Google,"Entertainment, General Expenses",2022-12-10,Indonesia
    2642,Savings,449.9,Grab,"Travel, Entertainment, Dining",2022-09-03,Singapore
    2643,Savings,112.11,Fairprice,General Expenses,2022-07-20,Singapore
    2644,Savings,620.12,Uber,"General Expenses, Travel, Dining, Entertainment",2022-08-18,Japan
    2645,Checking,823.11,Uber,"Travel, Entertainment, General Expenses",2022-12-13,Singapore
    2646,Savings,579.39,Uber,"Entertainment, Dining, Transportation, General Expenses, Groceries, Travel",2022-10-09,Japan
    2647,Checking,807.27,Amazon,"General Expenses, Entertainment, Transportation",2022-09-17,Singapore
    2648,Joint Account,797.8,Gojek,"Travel, Transportation, General Expenses, Entertainment",2022-10-03,Japan
    2649,Checking,253.55,Uber,Groceries,2022-06-24,Singapore
    2650,Checking,476.31,Starbucks,Transportation,2022-11-14,Australia
    2651,Joint Account,305.75,Gojek,"Dining, Entertainment",2022-07-04,Australia
    2652,Savings,448.08,ACME,"Transportation, Dining, Groceries, Entertainment",2022-11-10,Japan
    2653,Checking,382.19,Amazon,"Entertainment, Groceries, Transportation, Dining, General Expenses, Travel",2022-07-25,Australia
    2654,Savings,54.97,Starbucks,"Entertainment, Travel",2022-10-28,Australia
    2655,Savings,102.75,Walmart,"Transportation, Dining",2022-08-31,Indonesia
    2656,Checking,681.72,Amazon,"Dining, General Expenses, Travel, Entertainment, Transportation",2022-11-10,Australia
    2657,Checking,495.77,Gojek,"Transportation, General Expenses, Groceries",2022-09-20,Australia
    2658,Joint Account,220.34,Grab,Entertainment,2022-11-04,Indonesia
    2659,Savings,774.96,Starbucks,"Groceries, General Expenses, Transportation, Travel",2022-10-09,Australia
    2660,Savings,906.77,Walmart,Dining,2022-10-01,Indonesia
    2661,Savings,260.49,Grab,"Transportation, Travel",2022-07-06,Australia
    2662,Checking,589.29,Walmart,"Entertainment, Travel, Dining, Groceries, Transportation",2022-12-16,Singapore
    2663,Checking,39.37,Gojek,"Dining, Groceries, General Expenses, Transportation, Travel",2022-06-19,Japan
    2664,Joint Account,103.76,Amazon,Dining,2022-10-30,Singapore
    2665,Joint Account,50.07,ACME,"General Expenses, Transportation, Travel, Groceries",2022-12-03,Indonesia
    2666,Joint Account,189.36,Uber,"Groceries, Entertainment, Travel, Dining, Transportation",2022-06-20,Singapore
    2667,Savings,938.83,Walmart,"Groceries, General Expenses, Transportation, Dining",2022-11-19,Australia
    2668,Savings,108.19,Google,"Dining, Transportation, Entertainment, General Expenses, Groceries, Travel",2022-09-29,Indonesia
    2669,Savings,891.38,ACME,"Transportation, Groceries, General Expenses, Dining, Travel",2022-08-15,Singapore
    2670,Savings,537.09,Starbucks,"Dining, Groceries, General Expenses",2022-11-25,Japan
    2671,Checking,878.96,Google,"Dining, Entertainment, Travel, Groceries, Transportation, General Expenses",2022-09-26,Australia
    2672,Checking,356.14,Starbucks,"Transportation, General Expenses, Dining, Entertainment",2022-10-06,Japan
    2673,Joint Account,83.01,Fairprice,"Travel, Dining",2022-09-01,Japan
    2674,Savings,38.52,Walmart,"Entertainment, Groceries, Dining, General Expenses, Transportation",2022-08-04,Japan
    2675,Savings,436.43,Fairprice,General Expenses,2022-09-10,Indonesia
    2676,Savings,245.46,Fairprice,Groceries,2022-06-30,Australia
    2677,Savings,186.49,Fairprice,"Groceries, Entertainment, Travel",2022-09-06,Singapore
    2678,Savings,388.44,Uber,"Travel, Transportation",2022-10-30,Japan
    2679,Checking,890.24,Fairprice,"Groceries, General Expenses, Travel, Entertainment, Dining, Transportation",2022-12-20,Indonesia
    2680,Joint Account,751.29,ACME,"Transportation, Travel, Dining, General Expenses",2022-10-31,Australia
    2681,Joint Account,778.62,Uber,"General Expenses, Travel, Dining",2022-09-02,Indonesia
    2682,Savings,608.47,Uber,"General Expenses, Groceries, Transportation",2022-09-29,Australia
    2683,Savings,124.24,Amazon,"Dining, General Expenses",2022-11-24,Singapore
    2684,Joint Account,299.68,Walmart,"Groceries, General Expenses, Transportation",2022-07-22,Japan
    2685,Checking,832.29,ACME,"Dining, Groceries, General Expenses",2022-08-12,Japan
    2686,Checking,753.57,Walmart,"Entertainment, Dining, General Expenses, Transportation",2022-09-21,Indonesia
    2687,Savings,587.32,Starbucks,"Travel, Dining",2022-12-27,Singapore
    2688,Joint Account,404.17,Starbucks,"Dining, Groceries, Entertainment",2022-08-18,Indonesia
    2689,Joint Account,550.37,ACME,"Transportation, Groceries",2022-06-15,Japan
    2690,Savings,647.66,ACME,"Dining, Travel",2022-07-31,Indonesia
    2691,Joint Account,607.78,Walmart,"Entertainment, Dining, Transportation, Groceries",2022-11-30,Australia
    2692,Joint Account,170.86,ACME,"Groceries, Transportation, General Expenses, Dining, Entertainment, Travel",2022-11-09,Indonesia
    2693,Joint Account,450.32,Gojek,Groceries,2022-09-16,Japan
    2694,Savings,605.6,Fairprice,Dining,2022-09-03,Indonesia
    2695,Savings,949.47,Walmart,"Dining, Entertainment, Groceries, Travel",2022-07-03,Indonesia
    2696,Checking,233.43,Gojek,"Dining, Groceries, General Expenses",2022-11-02,Australia
    2697,Checking,435.16,Uber,Groceries,2022-08-31,Indonesia
    2698,Checking,981.38,Walmart,Groceries,2022-12-09,Singapore
    2699,Joint Account,626.98,Walmart,Dining,2022-07-25,Australia
    2700,Checking,278.87,Grab,"Transportation, General Expenses, Dining",2022-09-11,Australia
    2701,Checking,190.15,Amazon,"Entertainment, Groceries, General Expenses",2022-07-09,Singapore
    2702,Checking,957.92,Gojek,"Dining, Travel, General Expenses",2022-12-02,Japan
    2703,Checking,238.96,Amazon,"Travel, Dining",2022-10-23,Australia
    2704,Checking,223.05,ACME,Transportation,2022-12-18,Indonesia
    2705,Checking,732.68,Fairprice,Dining,2022-10-20,Japan
    2706,Checking,6.84,Walmart,"Dining, Travel",2022-11-08,Japan
    2707,Savings,370.81,Walmart,Entertainment,2022-12-10,Australia
    2708,Checking,759.1,Google,"Dining, General Expenses, Transportation, Groceries",2022-08-11,Australia
    2709,Savings,60.59,Walmart,"Entertainment, General Expenses, Transportation",2022-12-16,Indonesia
    2710,Checking,920.48,Walmart,"General Expenses, Transportation, Dining, Travel",2022-06-21,Japan
    2711,Joint Account,101.05,Amazon,"Transportation, Entertainment, General Expenses",2022-12-03,Singapore
    2712,Checking,986.76,Google,"Travel, General Expenses, Entertainment, Dining, Groceries, Transportation",2022-09-07,Indonesia
    2713,Savings,531.13,Fairprice,"Travel, General Expenses",2022-10-12,Indonesia
    2714,Checking,618.39,Google,"Travel, Dining, Entertainment, Groceries, General Expenses",2022-11-22,Singapore
    2715,Joint Account,815.33,Uber,"Dining, General Expenses, Groceries, Transportation",2022-12-23,Indonesia
    2716,Joint Account,149.16,ACME,"Travel, Dining",2022-06-10,Indonesia
    2717,Checking,338.49,Walmart,"Travel, Groceries, General Expenses, Entertainment",2022-07-17,Australia
    2718,Savings,599.54,Starbucks,"General Expenses, Dining, Entertainment",2022-10-07,Indonesia
    2719,Joint Account,110.15,Amazon,"Travel, General Expenses, Dining, Groceries, Entertainment, Transportation",2022-11-19,Japan
    2720,Savings,588.01,Fairprice,"Dining, Transportation, Groceries, General Expenses, Entertainment, Travel",2022-07-25,Singapore
    2721,Joint Account,265.1,Grab,"Entertainment, Dining, Transportation, Groceries, General Expenses, Travel",2022-08-09,Indonesia
    2722,Checking,167.12,Google,"Groceries, Dining, Entertainment",2022-12-04,Japan
    2723,Checking,133.77,Walmart,"Entertainment, Groceries, Transportation",2022-07-11,Japan
    2724,Checking,84.84,Uber,"Groceries, General Expenses",2022-11-21,Singapore
    2725,Joint Account,217.25,Amazon,"Entertainment, Travel",2022-06-17,Japan
    2726,Joint Account,315.05,Gojek,"General Expenses, Groceries",2022-08-11,Singapore
    2727,Checking,226.93,Amazon,"Travel, Entertainment, Transportation, Groceries, General Expenses, Dining",2022-06-12,Singapore
    2728,Checking,50.25,Fairprice,"Travel, General Expenses, Dining, Entertainment",2022-07-06,Indonesia
    2729,Joint Account,538.27,Grab,"Transportation, Entertainment, Travel, Dining, General Expenses, Groceries",2022-09-29,Indonesia
    2730,Checking,754.17,Starbucks,Groceries,2022-12-09,Singapore
    2731,Savings,151.18,Amazon,"Transportation, Dining, Travel, General Expenses",2022-09-27,Singapore
    2732,Savings,651.27,Gojek,"Transportation, Dining",2022-10-30,Singapore
    2733,Joint Account,941.59,Grab,"Transportation, Entertainment",2022-07-12,Indonesia
    2734,Joint Account,627.02,Uber,"Dining, Travel, General Expenses, Transportation, Entertainment",2022-06-10,Singapore
    2735,Savings,31.05,Amazon,"Dining, Transportation, Travel, Entertainment, General Expenses",2022-11-02,Australia
    2736,Joint Account,330.42,Grab,"Transportation, Groceries",2022-09-14,Australia
    2737,Savings,721.18,ACME,"General Expenses, Transportation, Groceries, Entertainment",2022-07-31,Singapore
    2738,Checking,922.86,Amazon,"General Expenses, Groceries",2022-07-10,Australia
    2739,Joint Account,156.7,Amazon,"General Expenses, Dining, Entertainment, Transportation",2022-12-14,Indonesia
    2740,Joint Account,659.79,Starbucks,"Groceries, Travel, General Expenses, Transportation",2022-11-12,Indonesia
    2741,Joint Account,701.1,Walmart,"Transportation, Travel",2022-09-22,Japan
    2742,Savings,970.11,ACME,"Dining, Transportation, Entertainment, Groceries, General Expenses",2022-06-06,Singapore
    2743,Checking,938.59,Walmart,"Groceries, Travel, Dining",2022-08-11,Australia
    2744,Savings,393.6,Google,"General Expenses, Transportation, Dining, Travel",2022-08-03,Japan
    2745,Joint Account,458.06,Google,"General Expenses, Entertainment, Transportation",2022-12-08,Indonesia
    2746,Checking,205.08,Gojek,Groceries,2022-09-17,Singapore
    2747,Savings,897.52,Gojek,"Dining, Entertainment, Groceries, Travel",2022-07-05,Singapore
    2748,Joint Account,363.85,Gojek,"General Expenses, Transportation",2022-08-28,Japan
    2749,Savings,956.41,Google,"Travel, General Expenses, Groceries, Dining",2022-07-09,Japan
    2750,Savings,303.97,Grab,General Expenses,2022-06-18,Singapore
    2751,Savings,197.58,Grab,"Groceries, Dining",2022-06-20,Japan
    2752,Savings,283.0,Grab,"General Expenses, Entertainment",2022-09-02,Singapore
    2753,Joint Account,827.14,Fairprice,"Dining, Transportation",2022-08-04,Indonesia
    2754,Savings,761.96,Amazon,"General Expenses, Dining",2022-08-12,Indonesia
    2755,Savings,494.95,ACME,"Entertainment, General Expenses, Dining",2022-07-30,Japan
    2756,Checking,878.91,Google,"Travel, Entertainment, Dining",2022-07-25,Australia
    2757,Savings,836.5,Amazon,"Travel, Dining, Entertainment, Groceries, General Expenses, Transportation",2022-09-26,Singapore
    2758,Checking,453.42,Walmart,"Entertainment, Transportation",2022-12-12,Indonesia
    2759,Checking,432.2,Gojek,"Travel, Dining",2022-11-10,Singapore
    2760,Checking,798.69,Grab,"Travel, Transportation, General Expenses, Dining, Entertainment",2022-06-09,Singapore
    2761,Joint Account,713.99,Walmart,"General Expenses, Groceries, Travel, Dining, Entertainment",2022-06-22,Australia
    2762,Joint Account,417.94,Starbucks,Transportation,2022-10-29,Singapore
    2763,Savings,424.77,ACME,"General Expenses, Groceries, Entertainment, Dining, Travel",2022-06-26,Singapore
    2764,Joint Account,109.61,Fairprice,"Transportation, Dining",2022-06-26,Japan
    2765,Checking,917.16,Starbucks,"General Expenses, Groceries, Entertainment, Travel, Transportation",2022-12-10,Indonesia
    2766,Checking,696.56,Amazon,Groceries,2022-09-25,Japan
    2767,Checking,470.98,Amazon,"Transportation, Groceries",2022-06-22,Japan
    2768,Joint Account,141.57,Google,Transportation,2022-06-20,Singapore
    2769,Joint Account,816.61,Grab,"Dining, Groceries, Transportation, Travel, General Expenses, Entertainment",2022-08-27,Japan
    2770,Checking,123.95,Amazon,"Entertainment, Dining",2022-12-11,Japan
    2771,Savings,765.47,Walmart,"Dining, General Expenses, Entertainment, Transportation, Travel",2022-07-31,Singapore
    2772,Savings,681.27,Walmart,"Transportation, Travel",2022-12-30,Japan
    2773,Joint Account,218.17,Google,Travel,2022-12-08,Indonesia
    2774,Joint Account,459.4,ACME,"Transportation, Groceries, Travel, Entertainment, General Expenses",2022-09-09,Indonesia
    2775,Checking,586.29,Gojek,"Groceries, Entertainment, General Expenses, Dining, Travel, Transportation",2022-10-22,Indonesia
    2776,Checking,382.34,Starbucks,"Entertainment, Dining",2022-12-02,Singapore
    2777,Checking,911.7,Grab,"General Expenses, Groceries, Transportation, Dining",2022-08-31,Australia
    2778,Joint Account,714.77,Grab,"Transportation, Groceries, Dining, Entertainment",2022-09-29,Indonesia
    2779,Checking,103.34,Uber,Dining,2022-11-19,Singapore
    2780,Savings,30.46,Gojek,"Groceries, Entertainment, Dining",2022-08-25,Japan
    2781,Savings,664.9,Google,General Expenses,2022-07-12,Australia
    2782,Checking,429.5,Starbucks,Entertainment,2022-07-21,Singapore
    2783,Checking,379.61,Walmart,"Dining, Transportation, Groceries, Travel, General Expenses, Entertainment",2022-12-05,Australia
    2784,Joint Account,523.14,Uber,"Groceries, Travel",2022-06-16,Japan
    2785,Joint Account,266.31,Starbucks,"Groceries, Entertainment, Transportation, General Expenses, Dining",2022-08-26,Japan
    2786,Checking,316.85,Amazon,"General Expenses, Entertainment, Travel, Groceries, Dining, Transportation",2022-10-06,Japan
    2787,Checking,419.78,Google,"Travel, Dining",2022-09-07,Indonesia
    2788,Checking,619.21,Uber,"Entertainment, Transportation, Groceries",2022-11-18,Indonesia
    2789,Savings,394.83,Amazon,"General Expenses, Groceries, Entertainment, Travel, Dining",2022-09-22,Australia
    2790,Savings,913.61,Gojek,"Travel, Transportation, Entertainment",2022-07-01,Singapore
    2791,Savings,841.92,Fairprice,"Travel, Groceries, Dining, Entertainment, General Expenses",2022-08-12,Japan
    2792,Joint Account,473.75,Google,"Travel, General Expenses, Entertainment, Transportation",2022-07-21,Indonesia
    2793,Checking,209.38,Walmart,"General Expenses, Groceries, Travel",2022-10-13,Japan
    2794,Checking,742.28,Grab,"Groceries, Travel, Transportation, General Expenses",2022-07-08,Japan
    2795,Savings,299.87,Amazon,"Groceries, Transportation, Travel, Entertainment, General Expenses, Dining",2022-06-09,Japan
    2796,Joint Account,9.99,Google,"Transportation, Entertainment",2022-09-18,Australia
    2797,Savings,755.16,Fairprice,"General Expenses, Groceries, Transportation",2022-09-05,Japan
    2798,Savings,879.41,Amazon,"Transportation, Dining, Entertainment, Travel, General Expenses, Groceries",2022-11-16,Singapore
    2799,Checking,737.32,Gojek,"General Expenses, Travel, Transportation",2022-08-20,Australia
    2800,Savings,936.38,Walmart,"Entertainment, Transportation, General Expenses, Dining",2022-11-10,Indonesia
    2801,Joint Account,425.57,Gojek,"Transportation, Travel",2022-11-27,Indonesia
    2802,Savings,182.25,Uber,"Entertainment, General Expenses, Dining, Travel",2022-11-23,Singapore
    2803,Joint Account,64.28,Starbucks,"Travel, Entertainment, Groceries",2022-06-16,Indonesia
    2804,Joint Account,263.7,Google,"Dining, General Expenses, Transportation",2022-07-30,Japan
    2805,Joint Account,146.59,Gojek,"Transportation, General Expenses, Travel",2022-11-03,Australia
    2806,Joint Account,472.93,Walmart,"Transportation, Dining",2022-06-30,Indonesia
    2807,Checking,732.43,Walmart,"Transportation, Dining, Travel, General Expenses, Entertainment, Groceries",2022-12-01,Indonesia
    2808,Joint Account,482.26,Gojek,"Groceries, Travel, Transportation",2022-08-12,Singapore
    2809,Checking,579.66,Fairprice,"Groceries, Travel",2022-11-17,Indonesia
    2810,Joint Account,785.75,ACME,"Dining, Travel, Transportation, Entertainment",2022-11-17,Japan
    2811,Savings,512.9,ACME,"Groceries, Transportation, Travel, General Expenses",2022-11-26,Australia
    2812,Savings,663.22,Grab,"Transportation, General Expenses, Groceries, Dining, Entertainment",2022-11-17,Japan
    2813,Savings,501.39,Fairprice,"Dining, Transportation, General Expenses",2022-10-12,Australia
    2814,Joint Account,785.15,Starbucks,"Transportation, Entertainment, Travel, General Expenses, Groceries",2022-11-07,Singapore
    2815,Checking,694.58,Starbucks,Transportation,2022-12-18,Singapore
    2816,Checking,786.97,Gojek,"Travel, Dining",2022-12-17,Japan
    2817,Savings,696.32,Gojek,Groceries,2022-07-22,Singapore
    2818,Checking,598.38,ACME,"Transportation, Groceries",2022-08-20,Singapore
    2819,Savings,226.78,Amazon,"Transportation, Travel, Groceries, General Expenses, Entertainment",2022-12-22,Japan
    2820,Checking,956.84,Grab,"General Expenses, Entertainment, Transportation",2022-12-04,Singapore
    2821,Joint Account,298.0,Fairprice,"Transportation, General Expenses, Entertainment, Travel, Groceries, Dining",2022-12-15,Japan
    2822,Checking,933.83,Starbucks,"General Expenses, Dining, Entertainment",2022-08-18,Japan
    2823,Savings,384.86,Amazon,"Groceries, Travel, Entertainment, General Expenses, Transportation, Dining",2022-07-06,Singapore
    2824,Savings,628.89,Google,"Transportation, Travel, General Expenses, Dining, Groceries",2022-07-27,Indonesia
    2825,Savings,418.8,Gojek,"Transportation, Travel, Entertainment, Dining",2022-06-15,Indonesia
    2826,Savings,260.77,Gojek,Groceries,2022-08-04,Singapore
    2827,Savings,108.23,Amazon,"Transportation, Groceries, Dining, Entertainment, Travel",2022-07-28,Singapore
    2828,Checking,181.57,Google,"Dining, General Expenses",2022-11-13,Singapore
    2829,Joint Account,66.56,Gojek,"Transportation, Travel, Dining, General Expenses, Groceries",2022-07-29,Singapore
    2830,Checking,104.87,Starbucks,"Transportation, Entertainment, General Expenses, Dining, Groceries",2022-11-15,Singapore
    2831,Checking,681.3,ACME,"Entertainment, General Expenses, Dining, Travel, Transportation",2022-09-07,Australia
    2832,Joint Account,242.76,ACME,"General Expenses, Transportation, Entertainment",2022-06-05,Singapore
    2833,Checking,195.14,Uber,"Dining, Groceries, Entertainment",2022-09-03,Singapore
    2834,Joint Account,742.78,Fairprice,Dining,2022-09-30,Japan
    2835,Joint Account,652.61,Uber,"Entertainment, Travel, Groceries, Transportation, Dining, General Expenses",2022-12-14,Singapore
    2836,Joint Account,346.56,Uber,"Entertainment, Transportation, Travel, General Expenses, Groceries",2022-12-04,Singapore
    2837,Savings,973.43,Grab,"General Expenses, Groceries, Transportation, Dining, Travel, Entertainment",2022-07-10,Australia
    2838,Savings,118.45,Amazon,"Entertainment, Travel, Groceries, Dining",2022-06-09,Indonesia
    2839,Savings,691.83,Fairprice,"General Expenses, Transportation, Travel",2022-08-02,Singapore
    2840,Checking,286.07,Starbucks,"Transportation, Dining, Groceries, Travel, Entertainment, General Expenses",2022-10-01,Indonesia
    2841,Checking,755.89,Gojek,"Transportation, Dining, General Expenses, Travel, Groceries",2022-09-13,Singapore
    2842,Joint Account,185.46,ACME,"Travel, Transportation, General Expenses, Dining, Groceries, Entertainment",2022-11-26,Singapore
    2843,Checking,934.34,ACME,Transportation,2022-11-02,Indonesia
    2844,Savings,259.73,Gojek,"General Expenses, Travel",2022-12-01,Singapore
    2845,Joint Account,247.38,Google,"Groceries, Entertainment, Travel, Dining, Transportation, General Expenses",2022-12-01,Indonesia
    2846,Joint Account,392.97,Walmart,"General Expenses, Entertainment, Transportation, Groceries",2022-06-10,Japan
    2847,Joint Account,821.31,ACME,"Travel, Transportation, Dining, General Expenses, Entertainment",2022-07-05,Singapore
    2848,Checking,282.82,Walmart,"Dining, General Expenses, Groceries, Transportation, Travel",2022-11-22,Japan
    2849,Savings,195.2,ACME,"Travel, General Expenses, Transportation",2022-06-25,Japan
    2850,Joint Account,798.61,Grab,"Transportation, Entertainment, General Expenses, Dining",2022-06-17,Singapore
    2851,Checking,807.0,Google,"Travel, General Expenses, Entertainment, Groceries, Dining",2022-06-03,Indonesia
    2852,Joint Account,514.32,Grab,"Travel, Transportation, General Expenses",2022-10-26,Japan
    2853,Checking,826.41,Starbucks,Groceries,2022-10-12,Singapore
    2854,Checking,862.86,Walmart,"Entertainment, Transportation",2022-07-23,Indonesia
    2855,Joint Account,59.85,Starbucks,"Dining, Travel, Groceries, Transportation, General Expenses",2022-11-29,Australia
    2856,Joint Account,110.29,Google,"Dining, Groceries",2022-08-22,Japan
    2857,Savings,707.73,Starbucks,"Travel, Entertainment, Dining, Transportation, Groceries, General Expenses",2022-06-24,Japan
    2858,Checking,545.8,Starbucks,"Groceries, Dining, Travel, Transportation, General Expenses",2022-12-12,Indonesia
    2859,Checking,198.99,Google,"Dining, Travel",2022-09-06,Australia
    2860,Joint Account,337.92,Amazon,"Transportation, Groceries, Entertainment, General Expenses",2022-12-17,Australia
    2861,Savings,487.86,Uber,"Entertainment, General Expenses",2022-06-24,Australia
    2862,Joint Account,231.06,Grab,"Dining, Transportation, Groceries, Travel, Entertainment",2022-07-22,Singapore
    2863,Joint Account,308.5,Starbucks,Entertainment,2022-11-21,Singapore
    2864,Joint Account,505.13,Google,"Dining, Groceries",2022-10-07,Australia
    2865,Savings,701.27,Uber,"General Expenses, Groceries, Transportation",2022-08-13,Indonesia
    2866,Savings,741.69,Gojek,"Transportation, Travel, General Expenses, Dining",2022-10-05,Japan
    2867,Joint Account,549.27,Uber,"Dining, Entertainment, Travel, General Expenses, Transportation",2022-10-09,Japan
    2868,Savings,255.03,Gojek,"Transportation, Entertainment, Dining, Groceries",2022-09-16,Japan
    2869,Joint Account,830.75,Walmart,"Dining, Travel, Groceries, Entertainment, Transportation",2022-09-04,Singapore
    2870,Checking,11.45,Grab,"Groceries, Entertainment",2022-12-08,Australia
    2871,Savings,432.84,Starbucks,"General Expenses, Dining, Groceries, Travel, Transportation, Entertainment",2022-06-06,Singapore
    2872,Joint Account,900.23,Uber,"General Expenses, Travel, Groceries, Entertainment",2022-06-03,Indonesia
    2873,Joint Account,86.02,Fairprice,"Entertainment, General Expenses, Travel",2022-08-03,Singapore
    2874,Savings,191.18,ACME,"General Expenses, Dining, Travel",2022-06-05,Indonesia
    2875,Savings,307.67,Fairprice,"Dining, Groceries",2022-08-01,Australia
    2876,Checking,661.35,Google,"Transportation, Entertainment, Groceries, General Expenses, Travel, Dining",2022-08-30,Indonesia
    2877,Savings,471.39,ACME,"Dining, Entertainment",2022-09-01,Singapore
    2878,Joint Account,162.67,Starbucks,"Entertainment, Transportation",2022-08-28,Japan
    2879,Joint Account,963.26,Google,"Travel, Entertainment, Transportation, Dining",2022-08-18,Indonesia
    2880,Savings,14.64,Uber,"General Expenses, Entertainment, Transportation, Groceries, Travel",2022-12-03,Japan
    2881,Checking,163.97,Fairprice,"Groceries, Transportation, Travel, Dining",2022-11-12,Singapore
    2882,Joint Account,826.0,Walmart,"General Expenses, Dining",2022-09-19,Japan
    2883,Joint Account,69.29,ACME,"General Expenses, Entertainment, Groceries",2022-09-02,Australia
    2884,Checking,86.09,Amazon,"Groceries, Travel, Entertainment, Transportation, Dining",2022-11-11,Australia
    2885,Checking,405.16,Starbucks,"General Expenses, Groceries",2022-09-12,Japan
    2886,Checking,778.36,Starbucks,"Travel, Dining, Transportation, General Expenses",2022-10-17,Singapore
    2887,Joint Account,707.01,Gojek,"Travel, Transportation, Dining, Entertainment, Groceries, General Expenses",2022-09-06,Singapore
    2888,Savings,987.38,Google,"Groceries, General Expenses, Dining, Travel",2022-12-18,Australia
    2889,Checking,726.29,Starbucks,Entertainment,2022-10-28,Australia
    2890,Savings,451.85,ACME,Groceries,2022-10-07,Singapore
    2891,Joint Account,304.94,ACME,"Groceries, Transportation",2022-10-06,Australia
    2892,Checking,388.49,Gojek,"General Expenses, Entertainment, Groceries, Dining, Transportation, Travel",2022-12-14,Australia
    2893,Savings,652.15,Starbucks,"Dining, Groceries, Travel, General Expenses, Entertainment",2022-10-15,Singapore
    2894,Joint Account,459.5,Google,Groceries,2022-10-22,Indonesia
    2895,Checking,503.89,Starbucks,"General Expenses, Transportation, Dining, Groceries, Entertainment, Travel",2022-12-12,Japan
    2896,Savings,541.58,Grab,"Dining, Transportation, Entertainment, Travel",2022-12-19,Japan
    2897,Checking,912.32,Starbucks,General Expenses,2022-09-16,Australia
    2898,Savings,265.04,Grab,"Transportation, Entertainment, Dining, Groceries, General Expenses, Travel",2022-12-15,Japan
    2899,Joint Account,487.66,Starbucks,"Dining, Groceries, Travel, General Expenses",2022-10-23,Australia
    2900,Joint Account,59.81,Grab,"Entertainment, Travel, Transportation, Dining, General Expenses, Groceries",2022-10-07,Singapore
    2901,Joint Account,813.21,Amazon,"Entertainment, Groceries, Travel, Transportation, Dining",2022-12-26,Indonesia
    2902,Joint Account,833.43,Fairprice,"Travel, Dining, General Expenses, Groceries",2022-10-25,Singapore
    2903,Joint Account,371.79,Google,"General Expenses, Transportation, Travel, Entertainment, Groceries",2022-11-09,Australia
    2904,Checking,831.72,ACME,"Entertainment, Transportation, Groceries",2022-11-03,Singapore
    2905,Checking,5.32,Gojek,"Dining, Transportation",2022-07-01,Indonesia
    2906,Joint Account,129.86,Amazon,Groceries,2022-07-24,Singapore
    2907,Savings,589.66,Uber,"Entertainment, Groceries, Transportation",2022-07-15,Japan
    2908,Joint Account,871.11,Fairprice,"Groceries, Transportation, Dining, Travel, Entertainment",2022-07-21,Japan
    2909,Checking,556.36,Walmart,"Groceries, Entertainment, General Expenses",2022-09-07,Japan
    2910,Savings,784.26,Starbucks,"General Expenses, Groceries, Transportation, Entertainment, Dining",2022-07-22,Singapore
    2911,Savings,961.92,Walmart,"Entertainment, Transportation, Dining, Groceries, Travel, General Expenses",2022-06-29,Australia
    2912,Joint Account,285.3,Starbucks,Entertainment,2022-10-10,Singapore
    2913,Joint Account,187.68,Starbucks,"General Expenses, Groceries, Dining",2022-09-11,Indonesia
    2914,Savings,490.52,Grab,"General Expenses, Entertainment",2022-08-25,Singapore
    2915,Checking,456.54,Starbucks,"Entertainment, Dining, General Expenses, Travel, Transportation, Groceries",2022-11-05,Indonesia
    2916,Savings,754.2,Fairprice,"Entertainment, Transportation",2022-10-25,Singapore
    2917,Checking,688.43,Google,"Dining, Travel, Groceries, Entertainment, General Expenses, Transportation",2022-07-20,Indonesia
    2918,Savings,698.29,Walmart,"General Expenses, Transportation, Groceries, Travel",2022-06-19,Japan
    2919,Checking,564.98,Amazon,Entertainment,2022-12-20,Japan
    2920,Savings,962.46,Grab,"Dining, Groceries",2022-12-13,Singapore
    2921,Checking,458.59,Walmart,"Transportation, General Expenses, Dining, Groceries, Travel",2022-09-04,Singapore
    2922,Checking,9.49,Walmart,"Groceries, General Expenses",2022-12-29,Japan
    2923,Checking,770.29,ACME,Entertainment,2022-07-03,Australia
    2924,Joint Account,461.63,Grab,"Transportation, Groceries, Entertainment, Travel, General Expenses",2022-06-11,Indonesia
    2925,Joint Account,206.79,Walmart,"Dining, Entertainment, General Expenses, Travel",2022-09-26,Indonesia
    2926,Savings,109.4,Grab,"Transportation, Entertainment, General Expenses",2022-09-20,Singapore
    2927,Checking,314.24,Google,"General Expenses, Dining, Groceries, Travel, Entertainment, Transportation",2022-11-30,Indonesia
    2928,Checking,105.32,Google,"General Expenses, Travel, Groceries, Transportation, Entertainment, Dining",2022-09-29,Japan
    2929,Savings,902.03,ACME,"General Expenses, Entertainment, Dining, Travel, Groceries, Transportation",2022-12-05,Japan
    2930,Checking,711.35,Gojek,"General Expenses, Dining, Travel, Transportation",2022-11-29,Indonesia
    2931,Joint Account,769.15,Gojek,Entertainment,2022-10-23,Japan
    2932,Savings,35.71,Uber,"Transportation, Groceries, Entertainment, Dining",2022-07-27,Australia
    2933,Savings,756.33,ACME,"Transportation, Groceries, Dining, Travel, General Expenses",2022-08-22,Australia
    2934,Savings,591.3,ACME,"Groceries, General Expenses, Travel, Dining, Entertainment",2022-12-30,Japan
    2935,Checking,5.48,Amazon,General Expenses,2022-06-29,Australia
    2936,Savings,674.25,Grab,"Groceries, Dining, General Expenses, Travel, Entertainment",2022-12-05,Japan
    2937,Joint Account,465.83,Grab,"Transportation, Entertainment, Groceries, Dining",2022-06-04,Indonesia
    2938,Joint Account,796.14,Uber,General Expenses,2022-09-28,Singapore
    2939,Joint Account,216.76,ACME,"Dining, General Expenses, Groceries",2022-11-18,Indonesia
    2940,Checking,348.62,Google,General Expenses,2022-06-05,Singapore
    2941,Savings,308.0,Gojek,"Dining, General Expenses, Groceries",2022-09-19,Indonesia
    2942,Savings,623.47,ACME,"Travel, Dining",2022-12-24,Japan
    2943,Savings,78.16,Amazon,"Transportation, Groceries, Entertainment, Travel, General Expenses",2022-11-25,Australia
    2944,Joint Account,126.0,Amazon,Transportation,2022-07-29,Japan
    2945,Checking,708.94,Google,"General Expenses, Groceries",2022-08-06,Australia
    2946,Checking,361.81,ACME,"General Expenses, Dining, Groceries",2022-10-13,Singapore
    2947,Joint Account,21.12,Google,"Groceries, Travel, Entertainment, Dining",2022-06-10,Japan
    2948,Savings,289.26,Starbucks,"Dining, Transportation, Entertainment, Travel, Groceries, General Expenses",2022-06-01,Japan
    2949,Savings,912.48,Uber,"Travel, Entertainment, General Expenses, Groceries",2022-11-20,Australia
    2950,Joint Account,258.72,Amazon,"Groceries, Dining, Transportation, Entertainment",2022-09-19,Australia
    2951,Checking,446.02,Gojek,"Dining, General Expenses, Entertainment",2022-06-29,Japan
    2952,Joint Account,123.65,Starbucks,"Groceries, Transportation, Dining, Entertainment, Travel",2022-11-29,Singapore
    2953,Checking,577.35,Gojek,"Groceries, Transportation, General Expenses, Entertainment, Dining, Travel",2022-08-24,Australia
    2954,Savings,123.05,Walmart,"Transportation, Travel, Groceries",2022-11-24,Japan
    2955,Checking,592.69,Fairprice,"Entertainment, Groceries, Travel",2022-08-26,Singapore
    2956,Checking,508.2,Grab,"Entertainment, Groceries",2022-09-30,Indonesia
    2957,Joint Account,856.1,Fairprice,"Travel, General Expenses, Entertainment, Dining",2022-10-25,Indonesia
    2958,Savings,854.08,Grab,"General Expenses, Travel, Dining, Entertainment",2022-11-19,Australia
    2959,Checking,957.69,Walmart,General Expenses,2022-12-30,Indonesia
    2960,Checking,651.38,Google,"Entertainment, Transportation, Groceries, General Expenses",2022-10-03,Japan
    2961,Savings,87.7,Google,"Entertainment, Dining",2022-11-02,Japan
    2962,Checking,491.33,Uber,"General Expenses, Groceries, Transportation, Travel",2022-09-12,Indonesia
    2963,Checking,751.2,Uber,Entertainment,2022-06-08,Japan
    2964,Savings,493.83,Grab,"Travel, Transportation, Dining",2022-11-27,Australia
    2965,Joint Account,323.07,Starbucks,"Groceries, Travel, Dining, Entertainment, Transportation",2022-09-13,Singapore
    2966,Savings,856.68,Starbucks,"Groceries, Dining",2022-06-26,Singapore
    2967,Checking,837.14,ACME,"Transportation, General Expenses, Travel",2022-07-06,Singapore
    2968,Joint Account,577.13,Gojek,"Groceries, Travel, Dining, Transportation, General Expenses",2022-08-08,Indonesia
    2969,Savings,323.4,Amazon,"Travel, Entertainment, General Expenses, Transportation, Dining",2022-08-18,Australia
    2970,Savings,49.49,Google,"Travel, Entertainment, Groceries, Dining, General Expenses, Transportation",2022-09-05,Singapore
    2971,Checking,641.81,Amazon,Groceries,2022-08-15,Japan
    2972,Checking,619.42,Google,"Travel, Groceries, Entertainment, Transportation, General Expenses, Dining",2022-08-28,Singapore
    2973,Checking,959.32,Fairprice,"Dining, General Expenses",2022-11-24,Australia
    2974,Checking,987.63,Grab,"General Expenses, Entertainment, Travel, Dining, Groceries",2022-07-01,Indonesia
    2975,Savings,11.87,Uber,"Groceries, Travel, General Expenses, Entertainment",2022-11-22,Singapore
    2976,Checking,511.24,Uber,Dining,2022-09-25,Australia
    2977,Joint Account,299.03,Fairprice,"General Expenses, Transportation, Dining, Travel, Groceries",2022-10-14,Singapore
    2978,Joint Account,764.69,Google,"General Expenses, Entertainment, Transportation, Travel, Groceries",2022-12-30,Indonesia
    2979,Savings,176.87,Grab,"Transportation, Dining, Travel, Groceries, General Expenses, Entertainment",2022-06-30,Singapore
    2980,Savings,550.44,Starbucks,"Travel, Transportation",2022-09-06,Indonesia
    2981,Joint Account,680.17,Walmart,"Dining, Entertainment, Transportation, Groceries, General Expenses, Travel",2022-10-13,Indonesia
    2982,Joint Account,59.89,Grab,"Groceries, Entertainment, Travel, Transportation",2022-11-07,Singapore
    2983,Savings,403.6,Google,"Transportation, Dining",2022-07-15,Japan
    2984,Joint Account,427.13,Google,"Groceries, Transportation",2022-06-05,Japan
    2985,Checking,104.43,Gojek,Dining,2022-09-17,Japan
    2986,Savings,222.7,Google,"General Expenses, Groceries, Entertainment, Travel, Transportation, Dining",2022-10-06,Australia
    2987,Joint Account,480.32,Starbucks,"Entertainment, Groceries",2022-12-13,Indonesia
    2988,Checking,247.87,Google,"Entertainment, General Expenses, Groceries",2022-10-29,Indonesia
    2989,Checking,490.5,ACME,"Groceries, Dining, Entertainment",2022-08-08,Singapore
    2990,Joint Account,264.58,Starbucks,"Dining, Travel, Transportation, Entertainment",2022-08-09,Singapore
    2991,Savings,877.08,Walmart,"General Expenses, Entertainment",2022-11-13,Singapore
    2992,Joint Account,249.63,Fairprice,"Entertainment, Transportation",2022-08-24,Australia
    2993,Savings,169.54,Walmart,"Entertainment, Groceries, Dining, General Expenses, Transportation",2022-09-22,Australia
    2994,Savings,210.21,Walmart,"Transportation, Dining, Travel, Entertainment",2022-09-20,Japan
    2995,Joint Account,484.45,Uber,Travel,2022-07-06,Singapore
    2996,Checking,514.52,Fairprice,Groceries,2022-08-14,Australia
    2997,Savings,237.61,Walmart,"Entertainment, General Expenses",2022-11-17,Japan
    2998,Checking,688.46,Gojek,"General Expenses, Travel, Transportation",2022-08-31,Australia
    2999,Joint Account,45.34,Grab,"Transportation, Dining, Travel",2022-10-26,Australia
    3000,Checking,923.19,Fairprice,"Dining, General Expenses, Groceries",2022-07-27,Australia
    3001,Joint Account,224.28,Walmart,"General Expenses, Entertainment, Travel, Transportation, Dining",2022-10-06,Australia
    3002,Checking,651.51,Uber,"Entertainment, Transportation, Groceries, Travel, General Expenses",2022-06-20,Japan
    3003,Savings,574.91,Google,"Transportation, Entertainment, Dining",2022-09-30,Australia
    3004,Savings,428.18,Amazon,"Travel, Dining, Transportation, Groceries, General Expenses, Entertainment",2022-07-09,Singapore
    3005,Joint Account,78.01,Starbucks,"Groceries, Dining, Entertainment, General Expenses",2022-10-02,Australia
    3006,Savings,425.86,Google,"Travel, General Expenses",2022-06-28,Japan
    3007,Checking,931.54,Google,"General Expenses, Entertainment, Groceries, Dining, Travel, Transportation",2022-08-05,Japan
    3008,Savings,372.77,Uber,General Expenses,2022-10-05,Japan
    3009,Savings,295.27,Walmart,"Entertainment, Travel, Groceries, Transportation, Dining, General Expenses",2022-11-03,Japan
    3010,Joint Account,534.28,Amazon,"Transportation, Entertainment, General Expenses",2022-09-14,Japan
    3011,Joint Account,460.96,Walmart,"Groceries, Travel, Dining, General Expenses, Transportation, Entertainment",2022-12-29,Australia
    3012,Joint Account,661.51,Uber,"Travel, Transportation, Groceries, General Expenses",2022-12-16,Japan
    3013,Joint Account,109.2,Walmart,Travel,2022-11-30,Singapore
    3014,Checking,443.83,Gojek,"Transportation, Entertainment, General Expenses, Groceries, Travel, Dining",2022-06-27,Japan
    3015,Savings,152.68,Gojek,"Travel, Transportation, General Expenses, Dining, Entertainment, Groceries",2022-11-19,Australia
    3016,Savings,956.68,Google,"Groceries, General Expenses",2022-06-17,Japan
    3017,Savings,405.53,Fairprice,"Travel, General Expenses",2022-07-30,Indonesia
    3018,Joint Account,848.08,Google,"Transportation, Dining",2022-12-01,Indonesia
    3019,Joint Account,728.28,Walmart,"Groceries, Dining",2022-08-21,Japan
    3020,Checking,904.95,Gojek,"Transportation, Groceries, Entertainment, Dining, General Expenses, Travel",2022-06-12,Japan
    3021,Joint Account,586.83,Walmart,"Dining, Transportation",2022-12-22,Japan
    3022,Savings,317.14,ACME,"Entertainment, Dining, General Expenses, Transportation, Travel, Groceries",2022-12-12,Australia
    3023,Joint Account,947.25,Fairprice,"Entertainment, Dining, Travel, Groceries, Transportation, General Expenses",2022-06-21,Japan
    3024,Joint Account,436.82,Uber,"Groceries, Dining, General Expenses, Transportation, Entertainment",2022-07-25,Singapore
    3025,Savings,90.89,Grab,"Transportation, Entertainment, Groceries, Dining, Travel",2022-06-27,Singapore
    3026,Checking,809.23,ACME,"Groceries, Travel, General Expenses, Transportation",2022-06-28,Japan
    3027,Checking,96.15,Walmart,"Transportation, Travel",2022-08-01,Japan
    3028,Joint Account,132.13,ACME,"Transportation, Travel, Entertainment",2022-09-11,Indonesia
    3029,Savings,174.14,Amazon,"General Expenses, Transportation, Travel, Entertainment",2022-06-07,Japan
    3030,Joint Account,461.79,Grab,"Entertainment, Transportation, General Expenses, Dining",2022-10-10,Singapore
    3031,Savings,169.09,Amazon,"Groceries, Entertainment, Transportation",2022-12-11,Australia
    3032,Joint Account,255.5,Walmart,Dining,2022-07-09,Singapore
    3033,Checking,507.74,ACME,Dining,2022-08-25,Indonesia
    3034,Checking,457.34,ACME,"Travel, Groceries, Entertainment",2022-12-25,Japan
    3035,Joint Account,378.89,Starbucks,"Travel, Transportation, Dining, Groceries, General Expenses",2022-11-27,Indonesia
    3036,Joint Account,196.27,Starbucks,"Entertainment, Transportation, Groceries, General Expenses, Dining, Travel",2022-09-14,Singapore
    3037,Savings,165.16,Grab,"Travel, Entertainment, Dining, General Expenses, Groceries",2022-09-23,Japan
    3038,Checking,197.33,Uber,"Entertainment, General Expenses",2022-09-05,Indonesia
    3039,Checking,760.89,Fairprice,Entertainment,2022-09-05,Singapore
    3040,Joint Account,19.66,Google,"Dining, Transportation, General Expenses, Entertainment",2022-12-28,Singapore
    3041,Joint Account,843.12,Starbucks,Entertainment,2022-06-11,Japan
    3042,Savings,651.61,Grab,"Transportation, General Expenses, Travel, Entertainment",2022-10-15,Singapore
    3043,Savings,538.37,Starbucks,"Entertainment, Transportation, Travel, Groceries",2022-09-17,Australia
    3044,Joint Account,459.83,Walmart,"Transportation, Travel, Groceries",2022-08-28,Japan
    3045,Savings,180.39,Walmart,"Transportation, Entertainment, Travel",2022-11-18,Singapore
    3046,Checking,197.45,Fairprice,"Dining, Entertainment",2022-08-13,Singapore
    3047,Checking,425.38,Fairprice,"Travel, Groceries, General Expenses, Transportation, Entertainment, Dining",2022-07-18,Australia
    3048,Savings,132.58,Uber,"General Expenses, Dining, Travel, Entertainment, Groceries",2022-12-31,Singapore
    3049,Joint Account,598.38,Gojek,"Dining, Entertainment, General Expenses, Transportation, Travel, Groceries",2022-06-21,Japan
    3050,Checking,68.23,Uber,General Expenses,2022-06-17,Indonesia
    3051,Joint Account,994.92,Google,"Travel, General Expenses",2022-09-20,Indonesia
    3052,Checking,974.21,ACME,"Transportation, General Expenses",2022-10-21,Japan
    3053,Savings,203.43,Amazon,"Travel, Dining, Groceries, General Expenses",2022-09-19,Australia
    3054,Joint Account,624.33,Walmart,Groceries,2022-08-07,Japan
    3055,Checking,568.19,Grab,"General Expenses, Dining, Transportation, Travel, Groceries, Entertainment",2022-06-30,Singapore
    3056,Joint Account,365.29,Starbucks,"Travel, Entertainment, General Expenses, Groceries, Dining",2022-09-21,Australia
    3057,Savings,300.92,Google,"Dining, General Expenses, Entertainment, Groceries",2022-11-28,Japan
    3058,Joint Account,239.06,Walmart,"Dining, General Expenses, Transportation, Groceries, Travel",2022-07-19,Japan
    3059,Savings,541.07,Google,"Transportation, General Expenses",2022-11-15,Indonesia
    3060,Joint Account,316.6,Gojek,"Entertainment, Dining, General Expenses, Transportation",2022-06-29,Singapore
    3061,Joint Account,876.05,Starbucks,"Entertainment, General Expenses, Travel, Dining, Transportation, Groceries",2022-07-31,Japan
    3062,Savings,368.92,Fairprice,Dining,2022-10-06,Australia
    3063,Savings,561.8,Fairprice,Groceries,2022-10-21,Japan
    3064,Savings,422.49,Starbucks,"Groceries, Transportation, Dining",2022-11-25,Japan
    3065,Joint Account,778.41,Uber,"Entertainment, Dining, Transportation",2022-06-16,Australia
    3066,Checking,172.89,Grab,"Groceries, Entertainment, Transportation, Travel, Dining",2022-07-01,Japan
    3067,Checking,141.68,Amazon,"Travel, Dining, Transportation",2022-07-04,Indonesia
    3068,Checking,112.42,Uber,"General Expenses, Entertainment, Dining, Travel, Groceries, Transportation",2022-10-11,Singapore
    3069,Joint Account,527.78,Google,"Transportation, General Expenses, Groceries, Travel, Dining, Entertainment",2022-12-27,Australia
    3070,Joint Account,874.9,Grab,"General Expenses, Dining, Groceries, Transportation",2022-06-26,Australia
    3071,Joint Account,624.44,Amazon,"Travel, Dining, General Expenses, Groceries",2022-10-06,Japan
    3072,Checking,914.42,Gojek,Travel,2022-07-24,Singapore
    3073,Checking,370.55,Uber,Transportation,2022-12-06,Japan
    3074,Joint Account,915.98,Uber,"General Expenses, Transportation, Groceries, Dining, Travel",2022-06-19,Japan
    3075,Checking,344.12,Amazon,"General Expenses, Dining, Groceries, Entertainment",2022-09-09,Singapore
    3076,Savings,628.33,Grab,Groceries,2022-07-21,Indonesia
    3077,Checking,755.6,Starbucks,General Expenses,2022-08-29,Australia
    3078,Joint Account,186.44,Grab,"Groceries, Travel, Entertainment",2022-11-20,Singapore
    3079,Savings,892.4,Grab,"Travel, Dining, Entertainment",2022-07-24,Australia
    3080,Checking,779.88,Fairprice,Dining,2022-07-06,Singapore
    3081,Savings,785.8,Uber,"Transportation, Entertainment, Groceries, General Expenses",2022-08-27,Australia
    3082,Savings,945.16,Google,Dining,2022-12-28,Australia
    3083,Savings,774.55,Fairprice,"Entertainment, Dining, Transportation, General Expenses, Groceries, Travel",2022-06-09,Singapore
    3084,Checking,339.41,Fairprice,"Entertainment, General Expenses, Travel, Dining",2022-07-24,Australia
    3085,Checking,481.47,Grab,"Travel, General Expenses, Dining, Entertainment",2022-06-25,Singapore
    3086,Savings,701.34,Google,Travel,2022-09-01,Japan
    3087,Savings,543.02,Google,"Groceries, Transportation, Entertainment",2022-09-22,Australia
    3088,Joint Account,44.54,Grab,"General Expenses, Groceries, Transportation, Travel, Entertainment",2022-09-08,Japan
    3089,Checking,76.9,ACME,"Dining, Entertainment",2022-10-25,Japan
    3090,Checking,460.49,Grab,"Groceries, Entertainment",2022-12-11,Indonesia
    3091,Savings,314.99,Fairprice,Groceries,2022-12-02,Indonesia
    3092,Checking,102.95,Uber,"Entertainment, Dining, Groceries, Travel, General Expenses",2022-09-30,Indonesia
    3093,Savings,718.56,Starbucks,"General Expenses, Entertainment, Transportation, Travel",2022-07-20,Japan
    3094,Checking,17.39,Walmart,"General Expenses, Dining, Transportation, Entertainment, Groceries, Travel",2022-12-25,Australia
    3095,Joint Account,197.68,Amazon,Dining,2022-08-20,Singapore
    3096,Savings,174.16,Walmart,"Groceries, Dining, General Expenses, Entertainment, Transportation",2022-07-26,Japan
    3097,Joint Account,558.63,Google,"Groceries, Travel",2022-08-07,Australia
    3098,Savings,839.22,Gojek,"Dining, Groceries, Entertainment",2022-10-06,Indonesia
    3099,Savings,21.13,ACME,"Travel, Transportation, Dining",2022-09-12,Australia
    3100,Savings,402.16,ACME,"General Expenses, Dining, Groceries, Travel, Entertainment",2022-12-06,Australia
    3101,Checking,811.39,Grab,Travel,2022-07-10,Indonesia
    3102,Savings,505.92,Starbucks,"Transportation, Dining, Groceries, Travel",2022-06-03,Indonesia
    3103,Checking,795.13,ACME,"Dining, General Expenses, Travel, Entertainment, Groceries",2022-10-26,Indonesia
    3104,Checking,443.12,Walmart,"General Expenses, Entertainment, Travel, Dining, Transportation, Groceries",2022-06-30,Australia
    3105,Joint Account,385.73,Amazon,"Dining, Transportation, General Expenses, Groceries, Entertainment",2022-07-26,Australia
    3106,Joint Account,278.29,Amazon,"Dining, Transportation, Groceries",2022-06-04,Indonesia
    3107,Savings,165.82,Starbucks,"Entertainment, Travel, General Expenses, Groceries",2022-12-16,Japan
    3108,Checking,502.08,Amazon,"Travel, Dining, Entertainment, Groceries",2022-10-06,Japan
    3109,Savings,365.33,Fairprice,"General Expenses, Entertainment",2022-12-06,Japan
    3110,Checking,487.37,Google,"Dining, General Expenses, Transportation",2022-06-16,Indonesia
    3111,Checking,90.45,Starbucks,"Groceries, Travel, Transportation, Dining, Entertainment",2022-12-20,Australia
    3112,Checking,795.15,Uber,"Transportation, General Expenses, Entertainment, Travel, Dining",2022-10-05,Indonesia
    3113,Joint Account,336.94,Uber,"Travel, Transportation, Groceries, General Expenses, Entertainment, Dining",2022-07-16,Australia
    3114,Joint Account,950.16,Fairprice,"Groceries, Travel, Entertainment, Transportation, General Expenses",2022-08-03,Australia
    3115,Savings,871.71,Grab,"Transportation, Entertainment, Dining, Groceries, General Expenses, Travel",2022-06-11,Singapore
    3116,Joint Account,104.07,Starbucks,"Groceries, Transportation, Entertainment, General Expenses, Travel, Dining",2022-08-30,Australia
    3117,Savings,617.97,Grab,"Dining, Entertainment, General Expenses, Groceries, Travel, Transportation",2022-09-25,Indonesia
    3118,Checking,780.29,Google,"Entertainment, Travel, General Expenses, Transportation, Groceries, Dining",2022-10-08,Japan
    3119,Savings,808.15,Gojek,General Expenses,2022-11-08,Japan
    3120,Savings,265.72,Grab,"Travel, Transportation, Dining",2022-11-02,Japan
    3121,Checking,26.15,ACME,"Transportation, Entertainment, Travel, Dining, Groceries",2022-07-30,Australia
    3122,Joint Account,744.62,Amazon,"General Expenses, Travel, Groceries, Entertainment",2022-11-07,Singapore
    3123,Joint Account,451.48,Google,General Expenses,2022-08-25,Indonesia
    3124,Savings,773.62,Walmart,"Travel, General Expenses, Dining, Groceries, Transportation, Entertainment",2022-09-19,Singapore
    3125,Savings,264.45,ACME,"Travel, General Expenses, Transportation, Dining, Entertainment",2022-06-05,Singapore
    3126,Joint Account,677.21,Walmart,"Dining, Entertainment, Groceries, Transportation",2022-08-08,Japan
    3127,Savings,746.19,Google,"Entertainment, General Expenses, Groceries, Transportation",2022-09-13,Indonesia
    3128,Joint Account,341.53,ACME,"Transportation, Dining, General Expenses, Travel, Groceries",2022-12-21,Indonesia
    3129,Savings,360.62,Grab,Dining,2022-06-04,Japan
    3130,Checking,354.86,Amazon,"Dining, Transportation, Travel, Entertainment, General Expenses",2022-08-16,Singapore
    3131,Savings,65.5,Grab,"Travel, General Expenses, Groceries, Dining, Entertainment, Transportation",2022-08-01,Japan
    3132,Checking,668.29,Amazon,"Transportation, Travel, General Expenses, Groceries, Entertainment",2022-06-30,Indonesia
    3133,Joint Account,984.66,Fairprice,"Entertainment, Travel, Transportation, Dining",2022-11-15,Indonesia
    3134,Checking,376.56,Amazon,"Groceries, Dining",2022-07-26,Singapore
    3135,Savings,827.61,Starbucks,"Groceries, Travel, Dining, Entertainment, General Expenses",2022-12-06,Indonesia
    3136,Savings,249.82,Fairprice,"Entertainment, Groceries, Dining, Travel",2022-12-23,Australia
    3137,Joint Account,875.08,Google,"Groceries, Entertainment",2022-06-30,Japan
    3138,Savings,949.66,ACME,"General Expenses, Dining",2022-06-14,Indonesia
    3139,Savings,811.1,Uber,"Travel, Dining, Groceries, General Expenses, Entertainment",2022-12-04,Singapore
    3140,Checking,857.67,Amazon,General Expenses,2022-07-25,Japan
    3141,Savings,419.27,Google,"Entertainment, Travel, General Expenses",2022-06-07,Indonesia
    3142,Savings,179.42,Walmart,"Transportation, Groceries, General Expenses, Dining, Entertainment",2022-11-14,Singapore
    3143,Savings,696.19,Walmart,"Travel, Dining, Groceries, General Expenses, Entertainment",2022-08-28,Japan
    3144,Joint Account,470.47,Gojek,"Transportation, Dining",2022-06-16,Singapore
    3145,Joint Account,2.02,Uber,"Entertainment, Groceries",2022-06-10,Japan
    3146,Checking,630.89,Gojek,"Groceries, General Expenses, Dining, Entertainment, Travel",2022-09-01,Singapore
    3147,Checking,871.31,Amazon,"Entertainment, Dining, Groceries, Travel, General Expenses, Transportation",2022-08-28,Japan
    3148,Checking,974.76,Google,Transportation,2022-10-11,Singapore
    3149,Savings,370.65,Starbucks,"Dining, Travel, Entertainment, Groceries, Transportation",2022-06-12,Japan
    3150,Savings,958.38,ACME,Dining,2022-09-09,Australia
    3151,Savings,570.58,ACME,"Travel, Transportation, General Expenses, Entertainment, Groceries, Dining",2022-12-30,Australia
    3152,Joint Account,850.59,Amazon,"Transportation, Groceries, Travel, General Expenses",2022-08-18,Australia
    3153,Joint Account,544.22,Grab,"Travel, Groceries, General Expenses",2022-08-03,Japan
    3154,Savings,942.37,Grab,"General Expenses, Travel, Groceries, Transportation, Dining, Entertainment",2022-06-03,Indonesia
    3155,Savings,102.73,Gojek,"Groceries, Transportation, General Expenses, Entertainment, Travel, Dining",2022-12-31,Singapore
    3156,Checking,207.5,Google,"Transportation, Entertainment, General Expenses, Groceries, Dining",2022-08-19,Japan
    3157,Checking,187.67,Google,"General Expenses, Transportation, Dining, Travel, Entertainment, Groceries",2022-06-29,Indonesia
    3158,Joint Account,797.78,Fairprice,General Expenses,2022-06-01,Japan
    3159,Savings,705.37,Fairprice,"Groceries, Travel, Transportation, General Expenses",2022-07-20,Australia
    3160,Savings,340.35,Grab,"Entertainment, Travel, Transportation",2022-10-24,Singapore
    3161,Checking,426.7,Grab,Travel,2022-08-28,Australia
    3162,Savings,348.28,Gojek,Transportation,2022-07-13,Singapore
    3163,Checking,353.83,Google,Transportation,2022-12-14,Singapore
    3164,Joint Account,720.78,Google,"Transportation, Groceries, Entertainment",2022-10-05,Australia
    3165,Checking,716.65,Amazon,"General Expenses, Dining",2022-08-01,Singapore
    3166,Checking,718.08,Walmart,Transportation,2022-11-27,Indonesia
    3167,Joint Account,418.8,Fairprice,"Entertainment, Travel, Groceries, Dining, Transportation, General Expenses",2022-10-02,Singapore
    3168,Savings,900.33,Uber,"Transportation, Travel, Entertainment, Dining, Groceries, General Expenses",2022-08-16,Australia
    3169,Checking,592.94,Uber,"Dining, Groceries, Travel, Transportation, General Expenses",2022-06-26,Japan
    3170,Savings,172.91,ACME,"Dining, Transportation, General Expenses",2022-06-19,Japan
    3171,Joint Account,302.97,Starbucks,"General Expenses, Transportation, Entertainment, Groceries, Dining",2022-06-16,Indonesia
    3172,Savings,444.43,Gojek,Travel,2022-07-25,Australia
    3173,Savings,491.52,Uber,"Entertainment, Transportation, Groceries",2022-11-18,Australia
    3174,Savings,818.16,Walmart,"Groceries, Entertainment, Dining, Transportation, General Expenses",2022-10-13,Japan
    3175,Savings,488.82,Google,"Transportation, Travel, Groceries, Entertainment",2022-12-28,Australia
    3176,Savings,178.18,ACME,Entertainment,2022-06-11,Australia
    3177,Checking,467.41,Google,"Transportation, Groceries, General Expenses, Travel, Entertainment, Dining",2022-08-08,Japan
    3178,Joint Account,492.28,Walmart,"Transportation, General Expenses, Dining, Entertainment, Travel",2022-07-18,Japan
    3179,Savings,349.04,ACME,"Transportation, Travel, Dining, General Expenses",2022-08-04,Singapore
    3180,Savings,688.42,Amazon,"Groceries, Entertainment",2022-12-23,Singapore
    3181,Joint Account,942.0,Grab,"General Expenses, Transportation, Entertainment",2022-08-21,Australia
    3182,Savings,98.5,Grab,"Transportation, Groceries",2022-07-14,Indonesia
    3183,Checking,977.16,Google,"General Expenses, Travel",2022-07-31,Japan
    3184,Checking,415.08,Google,"General Expenses, Entertainment, Travel, Groceries, Transportation",2022-09-28,Singapore
    3185,Savings,18.42,Uber,Groceries,2022-10-24,Japan
    3186,Checking,169.56,Starbucks,"Dining, Groceries, Entertainment",2022-09-21,Australia
    3187,Savings,527.92,Starbucks,"Entertainment, Dining, General Expenses, Transportation, Travel",2022-11-18,Japan
    3188,Checking,621.74,ACME,"Travel, Groceries",2022-06-29,Singapore
    3189,Checking,785.21,Starbucks,Entertainment,2022-12-23,Japan
    3190,Joint Account,735.91,Grab,Dining,2022-08-12,Singapore
    3191,Joint Account,983.37,Fairprice,"Transportation, Entertainment, Travel, General Expenses, Groceries",2022-09-29,Australia
    3192,Savings,996.87,ACME,"Travel, Dining, Groceries, General Expenses",2022-09-25,Indonesia
    3193,Joint Account,169.63,Fairprice,"Travel, Entertainment, Transportation, General Expenses, Groceries",2022-08-23,Australia
    3194,Checking,460.35,Starbucks,"Transportation, Entertainment, Travel, Dining",2022-07-30,Australia
    3195,Savings,611.26,Walmart,"General Expenses, Entertainment, Dining, Groceries, Transportation",2022-09-25,Japan
    3196,Savings,898.5,Gojek,"Entertainment, Transportation, Dining",2022-10-27,Japan
    3197,Checking,188.16,Google,"Transportation, Groceries, Dining, General Expenses, Entertainment",2022-06-28,Indonesia
    3198,Checking,499.95,Grab,"General Expenses, Dining, Entertainment, Transportation, Groceries",2022-07-03,Indonesia
    3199,Checking,180.25,Starbucks,"Groceries, Transportation, Travel, General Expenses",2022-09-30,Indonesia
    3200,Savings,487.74,Walmart,"General Expenses, Dining, Entertainment, Transportation, Travel",2022-09-12,Singapore
    3201,Joint Account,486.78,Fairprice,"General Expenses, Groceries, Dining, Entertainment, Transportation",2022-09-13,Singapore
    3202,Savings,211.85,Grab,Entertainment,2022-06-25,Australia
    3203,Savings,544.36,Starbucks,Entertainment,2022-09-07,Singapore
    3204,Joint Account,589.95,Gojek,"Entertainment, Dining",2022-07-21,Indonesia
    3205,Checking,106.01,Google,"Dining, Entertainment, Travel, General Expenses",2022-06-21,Indonesia
    3206,Joint Account,855.8,Gojek,"Transportation, Groceries, General Expenses, Dining",2022-09-22,Australia
    3207,Savings,882.75,Uber,Travel,2022-07-12,Singapore
    3208,Joint Account,338.22,Fairprice,"General Expenses, Entertainment, Dining, Groceries, Transportation, Travel",2022-10-22,Singapore
    3209,Savings,164.81,Walmart,"Groceries, Travel",2022-10-16,Australia
    3210,Joint Account,750.39,ACME,"Transportation, Dining",2022-09-06,Indonesia
    3211,Checking,523.73,Fairprice,"Transportation, Groceries, Entertainment, Dining, General Expenses",2022-10-06,Indonesia
    3212,Savings,98.18,ACME,"Entertainment, Dining, Transportation, Groceries",2022-06-14,Japan
    3213,Savings,887.88,Fairprice,"Dining, Travel, General Expenses, Groceries, Entertainment",2022-10-23,Australia
    3214,Joint Account,186.81,Uber,"Entertainment, Dining, Travel, Transportation",2022-08-13,Indonesia
    3215,Joint Account,962.14,Walmart,"General Expenses, Dining, Travel, Transportation, Entertainment",2022-10-18,Australia
    3216,Savings,422.11,ACME,"Entertainment, Travel, Transportation, General Expenses, Dining, Groceries",2022-10-05,Indonesia
    3217,Checking,40.56,Grab,"General Expenses, Dining",2022-06-23,Australia
    3218,Checking,544.44,Uber,"Dining, Entertainment, Transportation",2022-09-09,Japan
    3219,Checking,268.04,Amazon,"Dining, Transportation, Travel, Groceries",2022-10-27,Australia
    3220,Savings,144.05,Google,"Groceries, Transportation, Dining",2022-08-14,Australia
    3221,Checking,283.73,Starbucks,"Groceries, Entertainment",2022-08-27,Singapore
    3222,Joint Account,102.96,Grab,Entertainment,2022-09-01,Indonesia
    3223,Checking,183.37,Fairprice,"Transportation, Travel, Dining",2022-09-24,Singapore
    3224,Checking,4.46,ACME,"Entertainment, Travel",2022-06-30,Japan
    3225,Joint Account,522.87,Google,"Transportation, Travel, General Expenses, Groceries",2022-07-01,Japan
    3226,Checking,709.92,Amazon,"Transportation, General Expenses, Travel, Dining, Entertainment",2022-11-22,Australia
    3227,Checking,921.74,Amazon,General Expenses,2022-08-19,Australia
    3228,Checking,999.08,Uber,Dining,2022-07-17,Japan
    3229,Joint Account,118.63,Grab,"Transportation, General Expenses, Travel, Groceries, Dining, Entertainment",2022-10-27,Indonesia
    3230,Savings,510.51,Uber,"General Expenses, Entertainment, Transportation",2022-09-01,Japan
    3231,Joint Account,313.81,Google,"Groceries, General Expenses",2022-12-28,Indonesia
    3232,Joint Account,12.45,Walmart,"Entertainment, Groceries, Travel, Transportation",2022-08-01,Indonesia
    3233,Savings,520.66,Fairprice,Transportation,2022-07-17,Japan
    3234,Checking,658.92,Google,"Travel, Groceries, General Expenses, Dining",2022-08-14,Singapore
    3235,Savings,319.34,Grab,"Dining, Groceries, Entertainment, Travel, Transportation",2022-09-04,Indonesia
    3236,Joint Account,593.37,Fairprice,"Travel, Dining, Transportation, Groceries, General Expenses",2022-10-31,Indonesia
    3237,Savings,862.9,Uber,"General Expenses, Entertainment, Groceries, Dining",2022-06-10,Indonesia
    3238,Savings,197.92,Amazon,"Transportation, Travel, Dining, Groceries",2022-10-12,Australia
    3239,Checking,832.65,Grab,General Expenses,2022-08-30,Japan
    3240,Savings,40.31,Google,"Groceries, Entertainment, Transportation, Travel, General Expenses",2022-07-30,Australia
    3241,Checking,188.58,Google,"Travel, Groceries, Transportation, Dining, General Expenses",2022-06-11,Japan
    3242,Savings,661.78,Gojek,"Entertainment, Dining, General Expenses, Travel",2022-12-16,Indonesia
    3243,Savings,418.42,Grab,"General Expenses, Dining, Travel, Entertainment, Groceries",2022-11-29,Indonesia
    3244,Checking,811.24,Uber,"Entertainment, Transportation",2022-07-30,Australia
    3245,Savings,833.47,Grab,"Dining, Groceries, Transportation, General Expenses",2022-07-31,Singapore
    3246,Checking,540.39,Walmart,"Dining, Transportation",2022-07-11,Singapore
    3247,Checking,474.04,Grab,"Transportation, Entertainment, Travel, Groceries, Dining",2022-08-16,Japan
    3248,Checking,447.2,Grab,"Entertainment, General Expenses, Travel, Dining, Transportation",2022-11-22,Japan
    3249,Joint Account,677.11,Walmart,"Entertainment, General Expenses, Groceries, Transportation",2022-06-19,Australia
    3250,Checking,79.01,Walmart,"Dining, Transportation, Travel, General Expenses, Entertainment",2022-09-18,Australia
    3251,Savings,888.49,Walmart,"Travel, General Expenses, Dining",2022-11-03,Singapore
    3252,Savings,169.5,Fairprice,"Groceries, Entertainment, General Expenses, Transportation, Travel, Dining",2022-06-03,Indonesia
    3253,Joint Account,751.21,Grab,"General Expenses, Dining, Entertainment, Travel, Groceries",2022-08-18,Indonesia
    3254,Checking,755.15,Google,Travel,2022-10-04,Japan
    3255,Joint Account,502.56,Starbucks,"Dining, Entertainment, Groceries, Travel, Transportation",2022-08-31,Singapore
    3256,Checking,68.99,Fairprice,"Entertainment, Dining, Groceries, General Expenses",2022-06-19,Japan
    3257,Joint Account,799.91,Uber,"Entertainment, Travel, Dining, General Expenses",2022-08-30,Singapore
    3258,Joint Account,909.78,Google,"Dining, Travel, Entertainment, General Expenses, Transportation, Groceries",2022-12-03,Singapore
    3259,Savings,355.28,ACME,"Travel, General Expenses, Transportation",2022-07-01,Japan
    3260,Joint Account,968.91,Google,"Dining, Travel, General Expenses, Transportation, Groceries, Entertainment",2022-12-04,Australia
    3261,Joint Account,694.79,Gojek,Entertainment,2022-12-31,Singapore
    3262,Joint Account,61.6,Amazon,Travel,2022-08-30,Australia
    3263,Savings,47.59,Google,Groceries,2022-10-11,Singapore
    3264,Savings,50.94,Fairprice,"Transportation, General Expenses, Dining",2022-08-18,Japan
    3265,Savings,905.77,Walmart,"Travel, Groceries, General Expenses, Transportation",2022-10-24,Japan
    3266,Joint Account,49.66,Fairprice,Transportation,2022-07-05,Japan
    3267,Savings,471.06,Google,Travel,2022-08-10,Australia
    3268,Joint Account,399.76,Gojek,"Travel, Dining, Transportation, Groceries, Entertainment, General Expenses",2022-06-03,Indonesia
    3269,Joint Account,749.9,Amazon,"Transportation, Dining, Groceries, Entertainment",2022-10-28,Singapore
    3270,Savings,541.72,Fairprice,"Dining, General Expenses, Entertainment, Travel, Groceries",2022-06-12,Singapore
    3271,Joint Account,987.53,Fairprice,"Travel, Transportation",2022-12-11,Australia
    3272,Savings,86.27,ACME,"Entertainment, Dining, General Expenses, Travel, Groceries, Transportation",2022-12-28,Indonesia
    3273,Checking,452.0,Gojek,"Transportation, Entertainment",2022-12-07,Japan
    3274,Joint Account,809.71,Google,Groceries,2022-06-27,Indonesia
    3275,Savings,21.87,Uber,"Groceries, General Expenses, Dining",2022-07-15,Australia
    3276,Checking,420.18,Starbucks,"Groceries, Entertainment, Transportation, Dining, General Expenses, Travel",2022-10-08,Singapore
    3277,Joint Account,990.06,Gojek,"Transportation, Groceries, Dining, General Expenses",2022-07-27,Indonesia
    3278,Checking,928.06,Walmart,"General Expenses, Dining, Groceries, Travel, Entertainment, Transportation",2022-08-10,Australia
    3279,Checking,245.75,Grab,"Entertainment, Dining",2022-12-13,Australia
    3280,Checking,170.15,Amazon,Entertainment,2022-08-28,Indonesia
    3281,Joint Account,988.75,Google,Entertainment,2022-06-05,Japan
    3282,Checking,390.83,ACME,"Entertainment, Transportation, Dining",2022-11-20,Indonesia
    3283,Joint Account,333.04,Uber,"Travel, Groceries, Entertainment",2022-11-20,Singapore
    3284,Savings,188.17,Walmart,"Travel, General Expenses, Transportation",2022-12-14,Japan
    3285,Checking,492.84,Uber,"Travel, Groceries, Transportation",2022-11-28,Singapore
    3286,Joint Account,892.47,ACME,"Travel, Dining, Entertainment, Transportation, General Expenses, Groceries",2022-12-18,Australia
    3287,Checking,341.75,Fairprice,"General Expenses, Entertainment",2022-12-02,Japan
    3288,Joint Account,372.7,Walmart,"General Expenses, Groceries",2022-10-15,Indonesia
    3289,Joint Account,363.54,Google,"Travel, Entertainment, Groceries",2022-07-19,Australia
    3290,Savings,805.02,Grab,"Dining, Transportation, Travel, Groceries",2022-11-08,Japan
    3291,Checking,821.53,Grab,"Entertainment, Transportation, General Expenses, Groceries, Travel",2022-09-23,Australia
    3292,Joint Account,982.08,Walmart,"Groceries, Entertainment, Dining, Travel, Transportation",2022-09-18,Japan
    3293,Joint Account,885.9,Fairprice,General Expenses,2022-08-29,Japan
    3294,Savings,400.07,ACME,"Entertainment, Groceries",2022-08-03,Japan
    3295,Checking,858.38,Fairprice,"Transportation, Travel",2022-06-03,Japan
    3296,Joint Account,198.9,Starbucks,"Groceries, Transportation, General Expenses",2022-08-22,Indonesia
    3297,Savings,169.92,ACME,"Travel, Groceries",2022-10-27,Australia
    3298,Joint Account,973.03,Walmart,"Transportation, Travel, General Expenses, Groceries, Dining",2022-09-23,Singapore
    3299,Savings,763.83,Amazon,Travel,2022-09-26,Australia
    3300,Joint Account,47.03,Uber,"Groceries, Entertainment, General Expenses, Dining, Travel",2022-06-10,Australia
    3301,Joint Account,76.67,Grab,"Entertainment, Travel, Transportation, Dining",2022-07-24,Indonesia
    3302,Savings,85.01,Uber,"General Expenses, Transportation, Travel, Groceries",2022-06-06,Indonesia
    3303,Savings,932.68,Google,"Dining, Travel, General Expenses, Groceries, Entertainment",2022-11-09,Singapore
    3304,Joint Account,647.27,Fairprice,"Travel, General Expenses, Entertainment, Dining",2022-11-02,Australia
    3305,Savings,118.5,Fairprice,"Travel, Groceries",2022-12-19,Japan
    3306,Joint Account,632.19,Gojek,"Entertainment, Transportation, Groceries, Dining",2022-10-23,Australia
    3307,Savings,758.98,Amazon,"Transportation, Groceries",2022-06-18,Japan
    3308,Savings,2.79,Amazon,"General Expenses, Entertainment, Dining, Travel, Transportation",2022-06-27,Japan
    3309,Joint Account,978.87,ACME,"Dining, Entertainment, General Expenses, Groceries, Travel, Transportation",2022-08-26,Singapore
    3310,Joint Account,981.52,Starbucks,"Dining, General Expenses, Transportation, Travel, Entertainment, Groceries",2022-06-05,Indonesia
    3311,Checking,176.03,Grab,"Travel, General Expenses, Dining, Groceries",2022-06-20,Indonesia
    3312,Checking,214.46,Grab,"General Expenses, Groceries, Travel, Entertainment",2022-09-05,Singapore
    3313,Checking,713.02,ACME,Entertainment,2022-08-20,Singapore
    3314,Checking,32.95,Fairprice,"Dining, Entertainment",2022-09-06,Singapore
    3315,Savings,435.41,Gojek,"General Expenses, Entertainment, Transportation, Travel, Dining, Groceries",2022-12-21,Australia
    3316,Savings,973.95,Google,General Expenses,2022-11-18,Japan
    3317,Joint Account,825.86,Gojek,General Expenses,2022-12-23,Australia
    3318,Savings,47.24,Google,"Groceries, General Expenses, Entertainment, Dining, Transportation",2022-07-05,Japan
    3319,Savings,539.77,ACME,"Entertainment, Dining, Travel",2022-10-24,Japan
    3320,Checking,290.19,Walmart,"Transportation, Dining, Travel, Entertainment",2022-12-14,Japan
    3321,Savings,853.59,ACME,Entertainment,2022-07-15,Indonesia
    3322,Checking,199.96,Amazon,"Transportation, Travel, General Expenses, Dining",2022-08-27,Australia
    3323,Checking,821.38,Uber,"General Expenses, Groceries, Entertainment",2022-06-01,Indonesia
    3324,Checking,186.7,ACME,"General Expenses, Transportation, Travel, Dining",2022-10-07,Indonesia
    3325,Joint Account,408.71,Fairprice,"Groceries, Travel",2022-08-30,Australia
    3326,Checking,114.51,Starbucks,"Transportation, Travel",2022-06-16,Indonesia
    3327,Checking,144.84,Fairprice,General Expenses,2022-12-19,Australia
    3328,Checking,731.6,Starbucks,"Entertainment, Dining, Travel",2022-06-07,Australia
    3329,Checking,769.6,Uber,"Travel, Groceries, General Expenses, Transportation, Entertainment, Dining",2022-07-06,Singapore
    3330,Savings,3.49,Fairprice,"Groceries, Travel, Entertainment",2022-08-08,Japan
    3331,Savings,589.94,Starbucks,"Travel, Transportation, Dining, General Expenses, Entertainment, Groceries",2022-06-05,Australia
    3332,Checking,315.43,ACME,Dining,2022-07-01,Australia
    3333,Savings,372.45,Walmart,"Transportation, General Expenses, Groceries",2022-08-02,Indonesia
    3334,Savings,899.91,Gojek,"Travel, General Expenses, Dining, Entertainment, Transportation",2022-07-04,Singapore
    3335,Savings,72.6,Starbucks,"Groceries, Dining, Entertainment, Travel",2022-10-10,Singapore
    3336,Checking,896.3,ACME,Dining,2022-10-02,Indonesia
    3337,Checking,236.84,Starbucks,"Travel, Dining, Entertainment, Groceries, General Expenses",2022-06-12,Australia
    3338,Checking,900.88,Google,"Entertainment, General Expenses, Dining, Travel, Transportation, Groceries",2022-06-09,Japan
    3339,Savings,585.47,Starbucks,"Groceries, General Expenses",2022-10-26,Indonesia
    3340,Joint Account,929.1,Grab,"Travel, Entertainment, Dining, Groceries, General Expenses",2022-07-29,Japan
    3341,Checking,306.98,Gojek,"Groceries, Travel, General Expenses",2022-12-01,Singapore
    3342,Savings,815.95,Fairprice,"Entertainment, Travel, General Expenses, Groceries, Dining, Transportation",2022-09-02,Singapore
    3343,Joint Account,777.96,Grab,"Entertainment, Dining",2022-07-16,Japan
    3344,Checking,996.02,Google,"Groceries, Travel, Entertainment, General Expenses",2022-09-03,Japan
    3345,Joint Account,496.0,Amazon,"General Expenses, Transportation",2022-08-02,Indonesia
    3346,Joint Account,26.61,ACME,"Dining, Groceries, General Expenses, Travel, Transportation",2022-06-27,Singapore
    3347,Savings,997.44,Starbucks,Groceries,2022-07-05,Australia
    3348,Checking,799.1,Starbucks,"General Expenses, Travel, Entertainment, Transportation, Groceries, Dining",2022-08-10,Singapore
    3349,Savings,572.83,Uber,"Dining, Entertainment, Groceries",2022-11-19,Japan
    3350,Checking,555.11,Amazon,"Transportation, Entertainment, Groceries",2022-11-26,Singapore
    3351,Checking,805.54,Grab,"Transportation, Travel",2022-10-27,Singapore
    3352,Checking,134.3,Grab,"Transportation, Travel, Entertainment, Groceries, General Expenses",2022-08-07,Indonesia
    3353,Savings,155.2,Uber,"Transportation, Groceries",2022-06-05,Japan
    3354,Joint Account,58.74,Walmart,"Dining, Travel",2022-07-23,Indonesia
    3355,Joint Account,640.95,Amazon,"Travel, Dining, General Expenses, Groceries, Transportation",2022-06-29,Indonesia
    3356,Savings,114.26,Walmart,"Transportation, Entertainment, General Expenses, Travel, Groceries, Dining",2022-09-06,Japan
    3357,Joint Account,874.24,Gojek,"Groceries, Entertainment",2022-07-12,Japan
    3358,Joint Account,643.94,Google,"Transportation, Travel, General Expenses",2022-11-05,Singapore
    3359,Joint Account,242.69,Walmart,"Transportation, Dining, Groceries, General Expenses",2022-07-17,Singapore
    3360,Joint Account,999.07,Grab,Entertainment,2022-07-22,Singapore
    3361,Checking,622.63,Fairprice,"Travel, Transportation",2022-11-22,Indonesia
    3362,Checking,420.82,Walmart,"Entertainment, Travel, General Expenses, Groceries",2022-08-26,Indonesia
    3363,Joint Account,953.27,Starbucks,"Entertainment, Travel, Groceries, Transportation, Dining",2022-09-24,Japan
    3364,Savings,422.02,Gojek,"General Expenses, Transportation, Travel",2022-09-27,Indonesia
    3365,Checking,525.63,Starbucks,"General Expenses, Groceries, Dining",2022-11-21,Australia
    3366,Joint Account,140.37,Fairprice,"Dining, General Expenses, Entertainment, Groceries",2022-12-01,Indonesia
    3367,Joint Account,200.19,Fairprice,"General Expenses, Entertainment, Groceries",2022-08-21,Singapore
    3368,Savings,445.41,Google,"Entertainment, General Expenses, Dining, Travel",2022-08-02,Indonesia
    3369,Savings,338.99,ACME,"General Expenses, Groceries, Transportation",2022-08-09,Indonesia
    3370,Joint Account,332.33,Amazon,"Dining, Entertainment, General Expenses, Transportation, Travel",2022-06-13,Indonesia
    3371,Savings,88.93,Starbucks,Entertainment,2022-10-08,Australia
    3372,Checking,356.06,ACME,"Travel, General Expenses, Transportation",2022-09-12,Singapore
    3373,Joint Account,135.8,Fairprice,"Groceries, Dining, Transportation",2022-12-03,Australia
    3374,Joint Account,29.34,Fairprice,Travel,2022-07-27,Japan
    3375,Checking,282.16,Amazon,Groceries,2022-11-13,Japan
    3376,Checking,772.21,ACME,"Travel, Dining",2022-09-16,Singapore
    3377,Savings,751.95,Walmart,Travel,2022-07-27,Japan
    3378,Checking,533.31,Starbucks,"Entertainment, Travel, Groceries, Dining",2022-08-31,Australia
    3379,Joint Account,334.16,Amazon,"Travel, Dining, General Expenses, Groceries, Entertainment, Transportation",2022-08-03,Australia
    3380,Savings,230.1,Gojek,"Entertainment, Travel, Groceries, Dining, Transportation",2022-08-25,Australia
    3381,Checking,895.11,Starbucks,"Dining, Entertainment, General Expenses, Groceries, Travel",2022-08-18,Australia
    3382,Savings,900.88,Starbucks,"Dining, Transportation",2022-11-25,Indonesia
    3383,Savings,317.8,Starbucks,"General Expenses, Entertainment, Dining, Transportation",2022-08-16,Australia
    3384,Savings,662.66,Google,Entertainment,2022-09-05,Indonesia
    3385,Joint Account,58.88,Uber,"Transportation, Entertainment, Travel",2022-10-14,Japan
    3386,Joint Account,541.9,Amazon,"Dining, General Expenses, Travel",2022-09-22,Singapore
    3387,Checking,946.35,Google,"General Expenses, Travel, Transportation",2022-08-11,Singapore
    3388,Savings,246.06,Fairprice,Groceries,2022-11-17,Singapore
    3389,Checking,175.84,Starbucks,"Entertainment, Travel, Transportation, General Expenses",2022-10-15,Indonesia
    3390,Savings,431.52,ACME,"Groceries, Dining, General Expenses, Entertainment, Travel, Transportation",2022-10-05,Japan
    3391,Savings,733.48,ACME,"Transportation, Entertainment, Travel",2022-08-16,Indonesia
    3392,Joint Account,458.85,Google,"Transportation, Dining, Groceries",2022-07-04,Australia
    3393,Checking,599.19,Amazon,"Entertainment, Dining, Transportation, Travel, General Expenses",2022-08-18,Singapore
    3394,Joint Account,395.65,Starbucks,"Groceries, General Expenses, Transportation",2022-09-26,Singapore
    3395,Checking,316.1,Google,"Dining, Entertainment, Groceries, Travel, Transportation",2022-06-30,Japan
    3396,Checking,730.16,Walmart,"Travel, Groceries, Dining, Transportation",2022-08-19,Singapore
    3397,Checking,512.52,Google,"Travel, Groceries",2022-08-22,Australia
    3398,Joint Account,351.38,Fairprice,"Groceries, Entertainment, General Expenses",2022-11-02,Japan
    3399,Checking,981.68,Amazon,"General Expenses, Groceries, Dining, Entertainment",2022-06-18,Singapore
    3400,Checking,146.75,Google,"Travel, General Expenses, Transportation, Dining, Entertainment, Groceries",2022-06-28,Singapore
    3401,Savings,396.28,Amazon,"Groceries, Entertainment, Transportation, General Expenses",2022-07-02,Australia
    3402,Checking,566.85,Starbucks,"Entertainment, Transportation, General Expenses, Travel, Dining, Groceries",2022-11-11,Indonesia
    3403,Checking,971.82,Walmart,"Entertainment, General Expenses, Groceries, Travel",2022-11-08,Australia
    3404,Savings,893.04,Uber,"General Expenses, Groceries, Travel, Transportation, Entertainment",2022-07-17,Indonesia
    3405,Checking,30.88,Starbucks,"General Expenses, Transportation, Groceries, Travel, Entertainment, Dining",2022-10-11,Japan
    3406,Savings,911.44,Google,"Entertainment, Groceries, Transportation, Dining, Travel, General Expenses",2022-08-01,Japan
    3407,Checking,678.8,Fairprice,"Groceries, Travel",2022-11-09,Australia
    3408,Savings,463.15,Grab,"Entertainment, Dining, Groceries, General Expenses, Transportation, Travel",2022-10-09,Indonesia
    3409,Checking,877.75,Fairprice,Groceries,2022-11-20,Indonesia
    3410,Savings,125.41,Gojek,"Groceries, Dining, Transportation, Travel, General Expenses",2022-06-20,Australia
    3411,Joint Account,624.23,Grab,"Entertainment, General Expenses, Dining, Travel",2022-09-24,Japan
    3412,Checking,263.97,Amazon,"Transportation, Groceries, Entertainment, General Expenses, Travel, Dining",2022-11-02,Singapore
    3413,Checking,291.38,Uber,"General Expenses, Travel",2022-12-22,Indonesia
    3414,Checking,379.91,Gojek,"Entertainment, Transportation, Dining, Groceries, Travel",2022-10-10,Singapore
    3415,Savings,156.22,Starbucks,"Groceries, Entertainment",2022-09-16,Singapore
    3416,Checking,282.01,Starbucks,"Travel, Groceries",2022-08-05,Singapore
    3417,Joint Account,554.59,Google,"Dining, Entertainment, Transportation, Groceries, Travel, General Expenses",2022-06-17,Japan
    3418,Checking,583.68,Walmart,"Groceries, Entertainment, Travel, General Expenses, Dining, Transportation",2022-08-03,Indonesia
    3419,Savings,529.78,Amazon,"Dining, General Expenses, Entertainment, Transportation, Groceries",2022-10-09,Indonesia
    3420,Joint Account,634.12,Starbucks,"Travel, Groceries, General Expenses, Transportation, Dining",2022-08-19,Indonesia
    3421,Savings,956.48,Grab,"Entertainment, Travel, General Expenses, Groceries, Transportation, Dining",2022-06-16,Singapore
    3422,Joint Account,557.08,ACME,"Dining, Transportation, Travel",2022-10-02,Japan
    3423,Checking,307.89,Amazon,"General Expenses, Travel, Groceries",2022-10-03,Indonesia
    3424,Joint Account,260.29,Walmart,Groceries,2022-11-17,Singapore
    3425,Checking,304.75,Starbucks,"Groceries, General Expenses, Transportation",2022-12-02,Australia
    3426,Joint Account,585.82,Google,"Travel, General Expenses, Transportation, Groceries",2022-08-24,Indonesia
    3427,Savings,956.73,Walmart,Dining,2022-12-03,Singapore
    3428,Checking,358.29,Walmart,"Groceries, General Expenses, Dining",2022-06-13,Indonesia
    3429,Joint Account,860.54,Gojek,"Entertainment, Groceries, General Expenses, Dining, Transportation, Travel",2022-06-11,Australia
    3430,Savings,707.27,Grab,Travel,2022-12-15,Australia
    3431,Joint Account,75.31,Uber,"General Expenses, Travel, Transportation",2022-06-25,Singapore
    3432,Savings,626.03,Gojek,"Entertainment, Travel, Dining, General Expenses, Transportation",2022-08-02,Japan
    3433,Checking,894.74,Google,"Transportation, Groceries, Dining, General Expenses",2022-09-17,Singapore
    3434,Joint Account,21.74,Google,"Travel, Dining, Groceries, General Expenses, Entertainment, Transportation",2022-12-13,Japan
    3435,Joint Account,242.06,Fairprice,"Dining, General Expenses, Travel, Groceries, Transportation, Entertainment",2022-10-12,Singapore
    3436,Savings,189.24,Uber,"Groceries, Travel, Transportation",2022-08-31,Indonesia
    3437,Joint Account,422.51,Grab,"Entertainment, General Expenses",2022-06-25,Indonesia
    3438,Joint Account,391.38,Google,"Transportation, Dining, Travel, General Expenses",2022-11-08,Australia
    3439,Checking,764.89,Walmart,"Groceries, General Expenses, Travel, Transportation, Entertainment, Dining",2022-12-07,Japan
    3440,Savings,155.78,Google,"Entertainment, Groceries",2022-09-09,Australia
    3441,Savings,252.34,Uber,"Dining, General Expenses, Groceries",2022-08-11,Singapore
    3442,Savings,860.81,Google,"General Expenses, Travel, Groceries",2022-12-30,Indonesia
    3443,Checking,873.24,Grab,Transportation,2022-12-23,Japan
    3444,Savings,13.64,Grab,"Travel, Dining",2022-07-04,Japan
    3445,Savings,935.67,Gojek,"Transportation, General Expenses, Travel",2022-10-08,Singapore
    3446,Checking,803.93,Uber,"Entertainment, General Expenses, Dining, Transportation",2022-06-15,Australia
    3447,Savings,132.0,Uber,"Entertainment, Dining",2022-06-20,Singapore
    3448,Checking,837.0,Google,"General Expenses, Transportation",2022-12-24,Singapore
    3449,Savings,212.14,Grab,"General Expenses, Groceries, Dining, Entertainment",2022-07-14,Japan
    3450,Joint Account,318.73,Uber,"Travel, Dining, Entertainment, General Expenses, Transportation",2022-10-28,Singapore
    3451,Joint Account,591.97,Grab,"General Expenses, Travel, Dining, Groceries, Transportation",2022-10-17,Singapore
    3452,Savings,219.9,Starbucks,"Travel, Groceries, Entertainment, Transportation, Dining",2022-06-12,Japan
    3453,Savings,778.95,Gojek,"Entertainment, Dining, Travel, General Expenses, Groceries, Transportation",2022-07-02,Singapore
    3454,Checking,393.79,ACME,"General Expenses, Dining, Groceries",2022-10-18,Indonesia
    3455,Checking,870.58,ACME,"Entertainment, Travel, Transportation, Dining, General Expenses, Groceries",2022-08-24,Australia
    3456,Joint Account,484.59,Starbucks,"Transportation, Entertainment",2022-10-10,Singapore
    3457,Joint Account,44.91,Google,"Entertainment, Transportation, Travel",2022-08-09,Indonesia
    3458,Savings,191.16,Amazon,"Groceries, Dining, General Expenses, Travel",2022-08-25,Japan
    3459,Checking,350.86,Google,"Dining, General Expenses, Entertainment, Groceries",2022-06-18,Japan
    3460,Savings,159.18,Amazon,Travel,2022-07-27,Japan
    3461,Joint Account,10.51,Google,"Entertainment, Groceries, General Expenses, Dining, Travel",2022-07-18,Australia
    3462,Savings,466.09,ACME,"Dining, Transportation, Groceries, General Expenses, Travel, Entertainment",2022-09-03,Singapore
    3463,Joint Account,138.45,Fairprice,"Transportation, Entertainment, General Expenses, Dining, Travel, Groceries",2022-09-21,Japan
    3464,Joint Account,302.42,Gojek,Groceries,2022-09-18,Australia
    3465,Joint Account,573.1,Google,"Entertainment, Groceries, Dining, Transportation, Travel",2022-06-23,Singapore
    3466,Savings,430.06,Google,"Entertainment, General Expenses, Travel, Dining",2022-06-24,Australia
    3467,Checking,28.86,Google,"General Expenses, Entertainment, Dining, Groceries, Travel, Transportation",2022-09-24,Australia
    3468,Checking,658.58,Walmart,"Groceries, General Expenses, Dining, Transportation",2022-07-26,Japan
    3469,Joint Account,184.27,Walmart,"Dining, Entertainment",2022-10-11,Indonesia
    3470,Checking,803.1,Starbucks,"Entertainment, Transportation, Groceries, Travel, General Expenses",2022-11-11,Japan
    3471,Checking,299.33,Walmart,"Transportation, General Expenses, Dining",2022-10-26,Singapore
    3472,Checking,213.97,Starbucks,Groceries,2022-09-28,Japan
    3473,Joint Account,547.68,Walmart,"Travel, Dining, Entertainment, Groceries, Transportation, General Expenses",2022-07-13,Australia
    3474,Checking,520.19,Grab,"Entertainment, Transportation, Groceries, Travel, General Expenses, Dining",2022-11-19,Australia
    3475,Joint Account,407.39,Walmart,"Transportation, Entertainment, Groceries",2022-08-03,Singapore
    3476,Joint Account,278.59,Uber,"Travel, Transportation, Entertainment",2022-08-02,Australia
    3477,Checking,15.59,Gojek,"Dining, General Expenses, Entertainment, Transportation, Travel",2022-08-15,Indonesia
    3478,Joint Account,724.32,Google,"Entertainment, Transportation, Dining, Travel",2022-07-22,Australia
    3479,Joint Account,592.67,Gojek,"Dining, Travel, Entertainment, Groceries, Transportation, General Expenses",2022-06-17,Japan
    3480,Checking,97.33,Google,"Groceries, Dining, Travel, Entertainment",2022-08-08,Japan
    3481,Checking,876.08,Amazon,Dining,2022-09-17,Singapore
    3482,Checking,145.47,Google,"General Expenses, Entertainment, Travel",2022-08-14,Japan
    3483,Joint Account,273.78,Starbucks,"Transportation, General Expenses, Travel, Entertainment, Groceries, Dining",2022-08-26,Singapore
    3484,Savings,689.83,Uber,"Transportation, General Expenses, Travel, Dining",2022-06-01,Australia
    3485,Joint Account,371.47,Fairprice,"General Expenses, Travel, Dining, Transportation, Entertainment",2022-09-13,Australia
    3486,Joint Account,197.66,Grab,"General Expenses, Transportation, Entertainment, Travel, Groceries",2022-11-13,Japan
    3487,Savings,440.7,Starbucks,"Entertainment, Dining",2022-12-07,Singapore
    3488,Savings,359.4,ACME,"General Expenses, Dining, Transportation",2022-06-16,Australia
    3489,Checking,288.21,Uber,"Transportation, Entertainment",2022-07-18,Australia
    3490,Savings,204.41,Fairprice,"Groceries, Transportation, Entertainment, General Expenses, Travel, Dining",2022-08-27,Indonesia
    3491,Savings,67.38,Gojek,Dining,2022-10-12,Singapore
    3492,Savings,315.41,Uber,"Travel, Dining",2022-09-25,Japan
    3493,Joint Account,130.36,Gojek,General Expenses,2022-06-05,Australia
    3494,Checking,633.06,Walmart,"Entertainment, Dining, Travel",2022-10-25,Singapore
    3495,Joint Account,156.03,Fairprice,Travel,2022-08-10,Indonesia
    3496,Savings,577.74,Google,General Expenses,2022-09-26,Singapore
    3497,Savings,718.63,Amazon,"Groceries, General Expenses, Dining, Transportation, Entertainment, Travel",2022-11-02,Singapore
    3498,Joint Account,410.91,Walmart,Travel,2022-07-05,Indonesia
    3499,Savings,683.11,Starbucks,"Travel, Dining, Transportation, General Expenses",2022-10-06,Singapore
    3500,Joint Account,53.27,Fairprice,"General Expenses, Travel, Groceries, Dining, Entertainment",2022-07-29,Japan
    3501,Joint Account,20.39,Amazon,"Dining, General Expenses, Groceries, Entertainment, Travel",2022-09-22,Japan
    3502,Joint Account,496.87,Grab,General Expenses,2022-06-07,Singapore
    3503,Savings,316.35,Fairprice,"Transportation, Groceries, Travel, Entertainment, Dining, General Expenses",2022-07-18,Australia
    3504,Savings,510.12,Walmart,"Travel, Groceries, Transportation, General Expenses, Dining",2022-12-26,Singapore
    3505,Joint Account,430.0,Walmart,"Transportation, Entertainment",2022-10-24,Australia
    3506,Savings,216.38,Fairprice,"Transportation, General Expenses, Travel, Groceries, Entertainment",2022-12-23,Japan
    3507,Savings,930.15,Starbucks,Transportation,2022-11-13,Australia
    3508,Savings,479.64,Google,General Expenses,2022-06-27,Indonesia
    3509,Savings,383.47,Uber,"Dining, Entertainment, Travel, Groceries",2022-10-06,Singapore
    3510,Checking,340.8,Walmart,Groceries,2022-10-24,Indonesia
    3511,Savings,523.18,Walmart,"Groceries, Transportation, Dining, Travel, General Expenses, Entertainment",2022-11-02,Singapore
    3512,Savings,409.77,Amazon,Travel,2022-10-19,Indonesia
    3513,Savings,938.76,Gojek,"Groceries, Entertainment, General Expenses, Dining, Travel, Transportation",2022-10-27,Indonesia
    3514,Checking,523.25,ACME,"Entertainment, Dining, Travel, Groceries, Transportation, General Expenses",2022-12-21,Japan
    3515,Joint Account,623.03,Grab,"Dining, Entertainment, General Expenses, Transportation",2022-06-02,Indonesia
    3516,Joint Account,538.45,ACME,"Transportation, General Expenses, Groceries, Entertainment",2022-09-26,Singapore
    3517,Joint Account,127.28,Amazon,"General Expenses, Groceries, Dining, Travel, Transportation",2022-07-24,Singapore
    3518,Savings,849.0,Amazon,"Entertainment, Dining, Travel, Transportation",2022-09-17,Singapore
    3519,Checking,246.12,Amazon,"Dining, Groceries, General Expenses, Travel",2022-12-19,Japan
    3520,Savings,329.6,Google,"Entertainment, Dining, Travel",2022-10-03,Singapore
    3521,Savings,496.86,Walmart,"Entertainment, Travel",2022-08-13,Singapore
    3522,Checking,366.37,Starbucks,"Groceries, General Expenses, Transportation, Travel, Entertainment",2022-06-15,Japan
    3523,Checking,311.01,Walmart,"Groceries, Entertainment, General Expenses, Travel",2022-12-11,Indonesia
    3524,Savings,266.65,Grab,"Dining, Travel, Transportation",2022-11-03,Australia
    3525,Savings,349.31,Grab,"Travel, Dining, General Expenses, Groceries, Entertainment, Transportation",2022-10-14,Australia
    3526,Joint Account,890.52,Fairprice,Groceries,2022-11-01,Singapore
    3527,Joint Account,58.23,Amazon,"Entertainment, Groceries, Transportation, General Expenses, Travel",2022-12-31,Indonesia
    3528,Savings,489.89,Walmart,"General Expenses, Transportation, Travel, Dining, Groceries, Entertainment",2022-11-07,Australia
    3529,Savings,262.8,Fairprice,"Dining, Groceries, General Expenses, Entertainment, Travel",2022-07-26,Australia
    3530,Checking,757.45,Amazon,"Transportation, Travel, Entertainment",2022-08-01,Indonesia
    3531,Savings,31.97,Fairprice,"General Expenses, Transportation, Entertainment, Groceries",2022-09-12,Japan
    3532,Joint Account,667.56,Google,"Dining, Entertainment, Transportation",2022-10-04,Australia
    3533,Joint Account,651.43,Fairprice,"Entertainment, Travel, General Expenses, Transportation, Dining",2022-08-31,Australia
    3534,Savings,700.56,Gojek,"Dining, Groceries",2022-08-08,Singapore
    3535,Checking,522.74,Gojek,"Transportation, Dining, Groceries, Travel",2022-10-18,Indonesia
    3536,Checking,24.48,ACME,"Entertainment, General Expenses",2022-11-30,Japan
    3537,Checking,216.46,Grab,"Travel, Entertainment, Groceries, General Expenses, Transportation",2022-11-05,Japan
    3538,Joint Account,338.16,Fairprice,"Travel, Groceries",2022-06-06,Japan
    3539,Joint Account,180.33,ACME,Travel,2022-08-21,Singapore
    3540,Joint Account,250.86,Gojek,General Expenses,2022-07-20,Australia
    3541,Savings,470.11,Amazon,"Transportation, Travel, General Expenses, Entertainment, Dining",2022-12-16,Singapore
    3542,Savings,138.83,Starbucks,"Groceries, Dining, General Expenses, Entertainment, Travel",2022-08-18,Singapore
    3543,Savings,76.9,Uber,Dining,2022-09-02,Indonesia
    3544,Checking,979.6,Fairprice,"Entertainment, Transportation, Travel",2022-10-16,Indonesia
    3545,Checking,145.43,Google,"Groceries, Travel",2022-06-24,Singapore
    3546,Joint Account,968.11,Grab,"General Expenses, Groceries, Dining, Entertainment",2022-08-27,Indonesia
    3547,Joint Account,46.66,ACME,"Dining, Transportation, Groceries, Travel",2022-10-18,Australia
    3548,Savings,792.14,Google,"Entertainment, Travel",2022-07-30,Singapore
    3549,Joint Account,1.44,Uber,"Groceries, General Expenses",2022-10-12,Japan
    3550,Checking,550.81,Google,"Groceries, Entertainment, Dining, General Expenses",2022-10-14,Singapore
    3551,Savings,452.03,Grab,"Groceries, General Expenses, Travel, Transportation, Dining",2022-11-05,Singapore
    3552,Joint Account,768.81,Walmart,"General Expenses, Dining, Groceries, Transportation",2022-06-21,Australia
    3553,Savings,855.51,Fairprice,"Transportation, General Expenses, Groceries, Entertainment, Dining",2022-06-06,Singapore
    3554,Savings,804.98,Walmart,"Entertainment, Dining, Travel",2022-07-10,Singapore
    3555,Checking,518.69,Fairprice,Travel,2022-08-04,Indonesia
    3556,Joint Account,539.43,Grab,"Transportation, Groceries, Dining, Entertainment",2022-12-06,Singapore
    3557,Joint Account,600.57,Google,Entertainment,2022-08-17,Singapore
    3558,Savings,500.75,Walmart,"Groceries, Transportation, Entertainment, Dining, General Expenses",2022-10-24,Indonesia
    3559,Savings,148.22,Walmart,"Transportation, Entertainment",2022-11-04,Singapore
    3560,Joint Account,506.44,Starbucks,"Entertainment, Groceries, Travel, Dining, General Expenses",2022-11-24,Australia
    3561,Joint Account,830.25,Uber,Travel,2022-12-01,Singapore
    3562,Checking,158.75,Google,"Groceries, Dining, Travel, Transportation, Entertainment",2022-10-08,Japan
    3563,Savings,696.17,Grab,Groceries,2022-06-15,Indonesia
    3564,Joint Account,698.05,Gojek,"Dining, Groceries, General Expenses, Travel, Transportation",2022-06-29,Singapore
    3565,Checking,986.51,Google,"Groceries, General Expenses, Entertainment, Dining, Travel, Transportation",2022-11-21,Indonesia
    3566,Savings,296.97,Grab,"Travel, Dining, General Expenses, Transportation, Entertainment",2022-10-04,Singapore
    3567,Checking,358.01,Google,"General Expenses, Dining, Transportation, Entertainment",2022-07-11,Australia
    3568,Joint Account,712.25,Uber,"Travel, General Expenses",2022-09-21,Indonesia
    3569,Joint Account,854.99,Walmart,"Dining, Transportation, Travel",2022-06-05,Indonesia
    3570,Checking,347.12,Amazon,"Entertainment, Transportation, Dining, General Expenses, Groceries, Travel",2022-10-19,Japan
    3571,Savings,691.47,Google,"General Expenses, Dining, Groceries, Travel, Transportation, Entertainment",2022-11-05,Australia
    3572,Checking,264.46,Starbucks,"Transportation, Travel, General Expenses",2022-07-16,Singapore
    3573,Savings,31.06,Gojek,"General Expenses, Transportation, Dining, Entertainment, Travel",2022-12-30,Singapore
    3574,Checking,673.14,Starbucks,"General Expenses, Transportation, Entertainment",2022-11-24,Japan
    3575,Joint Account,19.01,Starbucks,"Groceries, Travel",2022-10-16,Australia
    3576,Checking,557.83,Walmart,"Dining, Groceries",2022-11-09,Indonesia
    3577,Savings,530.29,Grab,"General Expenses, Entertainment",2022-08-15,Australia
    3578,Checking,778.04,Starbucks,"Groceries, Entertainment, Travel, Transportation, Dining, General Expenses",2022-11-19,Australia
    3579,Savings,53.07,ACME,Dining,2022-10-20,Australia
    3580,Checking,118.04,Google,Transportation,2022-07-07,Singapore
    3581,Checking,762.13,Grab,Travel,2022-09-02,Australia
    3582,Checking,334.63,Amazon,"General Expenses, Groceries, Entertainment, Dining, Transportation, Travel",2022-12-10,Indonesia
    3583,Checking,62.56,Grab,"Travel, General Expenses, Groceries, Entertainment",2022-07-14,Indonesia
    3584,Joint Account,521.27,Gojek,"Entertainment, Dining, Travel, General Expenses, Groceries",2022-12-03,Japan
    3585,Savings,79.99,Gojek,"Groceries, Transportation, Travel",2022-11-09,Indonesia
    3586,Joint Account,889.1,Gojek,"Dining, Transportation, General Expenses, Groceries, Entertainment, Travel",2022-06-17,Singapore
    3587,Joint Account,530.1,Gojek,"Entertainment, General Expenses, Dining",2022-11-28,Australia
    3588,Joint Account,759.44,Uber,"Groceries, Travel",2022-08-05,Australia
    3589,Checking,137.96,Gojek,"Dining, Entertainment",2022-09-12,Singapore
    3590,Savings,586.61,Starbucks,"Travel, Groceries, Entertainment, Transportation, Dining",2022-06-25,Indonesia
    3591,Checking,494.94,Gojek,"Entertainment, Groceries, Dining, Transportation, General Expenses, Travel",2022-07-28,Indonesia
    3592,Savings,736.6,Uber,"Transportation, Groceries, Dining, Travel, General Expenses",2022-09-26,Indonesia
    3593,Joint Account,835.31,Grab,"Entertainment, General Expenses, Groceries, Transportation, Dining, Travel",2022-12-20,Indonesia
    3594,Joint Account,278.97,Amazon,"General Expenses, Groceries, Travel, Entertainment",2022-10-06,Indonesia
    3595,Joint Account,274.47,Walmart,"Transportation, General Expenses, Dining, Travel",2022-12-03,Singapore
    3596,Joint Account,823.25,Amazon,Dining,2022-12-25,Indonesia
    3597,Checking,260.36,Amazon,"Entertainment, Dining, Transportation",2022-11-28,Indonesia
    3598,Joint Account,149.73,Walmart,"General Expenses, Travel",2022-08-05,Singapore
    3599,Joint Account,105.1,Gojek,"Transportation, Dining, Entertainment, Travel",2022-06-30,Indonesia
    3600,Savings,521.81,Grab,"Entertainment, Groceries, Travel, Transportation",2022-10-27,Indonesia
    3601,Checking,564.94,Amazon,"General Expenses, Dining, Travel, Entertainment, Transportation",2022-07-11,Indonesia
    3602,Checking,540.1,Gojek,"General Expenses, Travel, Dining, Entertainment",2022-08-09,Japan
    3603,Joint Account,770.82,Google,"Dining, Entertainment",2022-08-02,Australia
    3604,Checking,443.32,Starbucks,"Entertainment, General Expenses, Transportation, Dining, Groceries, Travel",2022-06-11,Singapore
    3605,Savings,752.73,Amazon,"Transportation, Dining",2022-06-23,Australia
    3606,Joint Account,889.79,Amazon,"Travel, General Expenses, Transportation, Groceries, Dining",2022-06-08,Singapore
    3607,Savings,875.55,Amazon,"Transportation, Travel, Groceries, Entertainment",2022-06-02,Indonesia
    3608,Savings,594.31,Grab,"Groceries, General Expenses, Transportation, Travel, Dining, Entertainment",2022-11-18,Australia
    3609,Savings,761.42,Uber,"Transportation, Groceries, General Expenses, Travel, Dining",2022-10-29,Indonesia
    3610,Joint Account,764.62,Amazon,Entertainment,2022-12-31,Indonesia
    3611,Checking,860.34,Walmart,"Travel, Dining, Transportation",2022-07-23,Indonesia
    3612,Savings,513.1,Starbucks,Transportation,2022-08-29,Australia
    3613,Savings,283.0,Amazon,"Travel, Transportation, General Expenses",2022-06-29,Indonesia
    3614,Joint Account,913.11,Amazon,"Dining, Entertainment, Transportation, Travel, Groceries",2022-12-29,Indonesia
    3615,Checking,942.65,Gojek,"Transportation, General Expenses",2022-10-27,Japan
    3616,Joint Account,264.94,Amazon,"Groceries, Entertainment, Travel, Transportation",2022-10-22,Indonesia
    3617,Joint Account,460.63,Starbucks,"Travel, General Expenses, Groceries",2022-06-19,Singapore
    3618,Checking,346.39,Grab,"General Expenses, Dining, Transportation, Groceries, Travel",2022-07-07,Japan
    3619,Checking,118.35,Uber,"Entertainment, Groceries",2022-09-25,Australia
    3620,Savings,295.47,Grab,"Groceries, Entertainment, Travel, Transportation, Dining",2022-12-25,Australia
    3621,Checking,844.62,Google,"Transportation, Dining, Groceries",2022-11-27,Singapore
    3622,Checking,902.86,Fairprice,"Transportation, General Expenses, Entertainment, Travel, Dining",2022-07-10,Singapore
    3623,Checking,291.28,Walmart,"Entertainment, Dining, Transportation",2022-11-09,Singapore
    3624,Checking,393.52,Grab,"Groceries, Entertainment, Travel, Transportation, Dining",2022-12-17,Australia
    3625,Joint Account,871.47,Gojek,"Transportation, Dining, Entertainment, General Expenses, Travel, Groceries",2022-11-16,Singapore
    3626,Savings,601.51,Uber,"General Expenses, Entertainment, Dining, Travel, Transportation, Groceries",2022-12-09,Singapore
    3627,Checking,419.33,Starbucks,"Entertainment, Groceries, Dining, Transportation, Travel",2022-09-08,Japan
    3628,Savings,532.48,Walmart,"Entertainment, Groceries, Travel, Dining, Transportation, General Expenses",2022-11-22,Australia
    3629,Savings,713.37,Grab,"Entertainment, Transportation, Groceries, General Expenses",2022-06-26,Singapore
    3630,Joint Account,593.49,Grab,"Entertainment, Groceries, Transportation, General Expenses, Dining",2022-06-13,Singapore
    3631,Checking,576.95,Amazon,Dining,2022-12-14,Indonesia
    3632,Savings,791.04,Google,Transportation,2022-06-09,Australia
    3633,Savings,809.96,Gojek,"General Expenses, Dining, Groceries, Entertainment, Travel, Transportation",2022-06-16,Japan
    3634,Checking,782.85,Grab,"Travel, General Expenses",2022-11-24,Indonesia
    3635,Savings,793.45,Starbucks,"Travel, General Expenses",2022-11-13,Japan
    3636,Joint Account,182.39,Google,"Groceries, Transportation",2022-11-04,Japan
    3637,Checking,454.86,Amazon,"Entertainment, Travel, Dining, General Expenses",2022-07-13,Indonesia
    3638,Checking,520.48,Gojek,"Groceries, Transportation, Entertainment",2022-07-23,Australia
    3639,Savings,569.85,Starbucks,"Entertainment, Travel, Transportation",2022-10-26,Japan
    3640,Joint Account,204.56,ACME,Transportation,2022-06-19,Japan
    3641,Savings,495.23,Uber,Travel,2022-11-23,Indonesia
    3642,Savings,913.22,Walmart,"General Expenses, Entertainment, Dining, Travel",2022-06-27,Japan
    3643,Savings,267.22,Uber,"Travel, Transportation, Groceries, General Expenses, Entertainment, Dining",2022-07-28,Singapore
    3644,Savings,54.0,Grab,"Groceries, Travel",2022-10-05,Japan
    3645,Joint Account,196.77,Gojek,"Dining, General Expenses, Entertainment, Transportation, Travel",2022-08-30,Indonesia
    3646,Savings,18.92,Google,"Groceries, Travel, Transportation, General Expenses",2022-06-18,Japan
    3647,Joint Account,659.16,Google,"Travel, Groceries, General Expenses, Entertainment, Transportation",2022-06-10,Singapore
    3648,Checking,846.93,Amazon,Groceries,2022-06-19,Singapore
    3649,Savings,920.65,Gojek,"Travel, Entertainment, Groceries, Transportation, General Expenses, Dining",2022-06-18,Australia
    3650,Checking,524.39,Walmart,"Groceries, Entertainment, General Expenses, Dining, Transportation, Travel",2022-11-26,Indonesia
    3651,Joint Account,392.9,ACME,"Groceries, Transportation, General Expenses, Dining, Travel, Entertainment",2022-06-02,Australia
    3652,Checking,926.64,Fairprice,"Entertainment, Groceries, Travel, General Expenses",2022-09-08,Indonesia
    3653,Joint Account,62.08,Amazon,Entertainment,2022-08-28,Singapore
    3654,Joint Account,645.88,Fairprice,Transportation,2022-11-23,Indonesia
    3655,Checking,953.35,ACME,"Travel, Entertainment, Dining",2022-12-21,Japan
    3656,Checking,276.35,Gojek,Entertainment,2022-12-05,Australia
    3657,Savings,183.49,Gojek,"Transportation, Groceries, Entertainment, General Expenses, Dining, Travel",2022-08-10,Australia
    3658,Checking,721.65,Grab,"Transportation, General Expenses, Dining, Entertainment, Travel",2022-06-09,Australia
    3659,Joint Account,391.92,Amazon,"Travel, Transportation, Dining",2022-07-31,Singapore
    3660,Joint Account,380.7,ACME,Transportation,2022-08-17,Australia
    3661,Joint Account,51.09,Walmart,"General Expenses, Travel, Groceries, Dining",2022-08-28,Indonesia
    3662,Checking,650.07,ACME,General Expenses,2022-12-26,Japan
    3663,Savings,622.15,Google,"Transportation, General Expenses, Dining",2022-10-21,Japan
    3664,Joint Account,793.06,Amazon,"Groceries, Travel, Transportation",2022-11-29,Indonesia
    3665,Savings,681.25,Gojek,Transportation,2022-07-01,Australia
    3666,Savings,89.32,Gojek,"Travel, Entertainment, General Expenses, Dining, Transportation",2022-11-21,Australia
    3667,Checking,474.62,Walmart,"Transportation, Travel, Entertainment, Groceries",2022-08-09,Singapore
    3668,Checking,635.95,Starbucks,"Entertainment, Dining",2022-12-19,Singapore
    3669,Joint Account,375.74,ACME,"Transportation, Entertainment, Dining",2022-08-07,Indonesia
    3670,Savings,963.04,Google,"Transportation, Dining, Groceries, Entertainment",2022-07-20,Australia
    3671,Joint Account,101.55,Grab,"Dining, General Expenses",2022-08-29,Japan
    3672,Checking,228.91,Google,"Groceries, Travel",2022-09-01,Indonesia
    3673,Joint Account,763.88,Amazon,Entertainment,2022-07-17,Indonesia
    3674,Checking,448.59,Google,"Travel, Entertainment, Groceries",2022-06-09,Indonesia
    3675,Joint Account,544.55,Uber,"Entertainment, Transportation, Groceries",2022-12-25,Indonesia
    3676,Checking,519.93,Gojek,Transportation,2022-06-23,Japan
    3677,Checking,942.75,Amazon,"Dining, Transportation, General Expenses, Travel, Groceries, Entertainment",2022-11-14,Australia
    3678,Joint Account,542.8,Gojek,"Entertainment, General Expenses, Groceries, Transportation, Travel, Dining",2022-11-03,Singapore
    3679,Joint Account,213.84,Fairprice,Groceries,2022-08-02,Australia
    3680,Checking,167.5,Grab,"Groceries, General Expenses, Transportation",2022-09-03,Japan
    3681,Joint Account,547.94,ACME,"General Expenses, Transportation, Dining, Groceries",2022-10-05,Australia
    3682,Joint Account,588.85,Walmart,"Travel, Transportation",2022-12-28,Australia
    3683,Checking,664.35,Uber,"Transportation, Groceries",2022-08-01,Singapore
    3684,Checking,989.84,Gojek,"Entertainment, General Expenses, Transportation, Travel, Dining",2022-11-17,Japan
    3685,Checking,404.03,Google,"Dining, Transportation, Entertainment, Travel, Groceries, General Expenses",2022-08-17,Australia
    3686,Savings,95.87,Starbucks,"Dining, Transportation, Entertainment, Travel, Groceries, General Expenses",2022-11-30,Australia
    3687,Joint Account,25.33,Grab,"Dining, Groceries, General Expenses, Entertainment, Travel, Transportation",2022-07-19,Singapore
    3688,Checking,635.39,Amazon,"General Expenses, Transportation",2022-06-21,Indonesia
    3689,Joint Account,353.79,Google,"Entertainment, Travel, Groceries, Dining",2022-09-03,Japan
    3690,Checking,676.08,Grab,"Travel, Entertainment, General Expenses, Groceries",2022-06-11,Japan
    3691,Checking,185.38,Uber,"Entertainment, Transportation, Groceries",2022-09-12,Japan
    3692,Joint Account,180.33,Amazon,"Entertainment, Dining",2022-08-04,Australia
    3693,Checking,301.79,Walmart,"Entertainment, Dining, Travel",2022-09-21,Singapore
    3694,Checking,526.0,Amazon,"Entertainment, Travel",2022-12-28,Australia
    3695,Savings,547.49,Walmart,"Entertainment, Transportation",2022-10-29,Australia
    3696,Savings,246.98,Grab,"Travel, Groceries",2022-09-13,Australia
    3697,Checking,224.45,Uber,"General Expenses, Entertainment",2022-10-31,Singapore
    3698,Savings,885.41,Fairprice,"Dining, General Expenses",2022-07-18,Japan
    3699,Checking,81.88,ACME,"General Expenses, Transportation",2022-08-09,Australia
    3700,Joint Account,507.81,Fairprice,"Dining, General Expenses, Travel, Groceries, Transportation",2022-11-24,Indonesia
    3701,Joint Account,128.04,Google,"Groceries, Dining",2022-10-05,Singapore
    3702,Savings,620.3,Gojek,"Travel, Entertainment, Transportation",2022-06-01,Indonesia
    3703,Savings,104.4,Grab,"Transportation, Dining, Groceries, Travel, General Expenses, Entertainment",2022-11-20,Australia
    3704,Joint Account,31.58,Walmart,"Dining, Travel, Entertainment, Transportation",2022-09-05,Japan
    3705,Joint Account,795.98,Grab,"Transportation, General Expenses, Travel, Entertainment, Dining",2022-06-23,Indonesia
    3706,Savings,497.7,Gojek,"Travel, Transportation, General Expenses, Groceries",2022-09-05,Indonesia
    3707,Joint Account,85.45,Uber,"Groceries, General Expenses, Transportation",2022-11-26,Japan
    3708,Joint Account,809.97,Starbucks,"General Expenses, Transportation, Entertainment, Travel",2022-07-15,Indonesia
    3709,Savings,908.5,Amazon,Travel,2022-07-13,Indonesia
    3710,Savings,743.73,ACME,"General Expenses, Entertainment, Dining, Transportation, Travel, Groceries",2022-06-21,Japan
    3711,Joint Account,544.66,Uber,Groceries,2022-11-21,Japan
    3712,Savings,723.35,Google,"Transportation, General Expenses, Entertainment, Groceries, Dining",2022-09-26,Singapore
    3713,Savings,599.0,Walmart,"Travel, Transportation, Groceries, Entertainment",2022-12-09,Singapore
    3714,Checking,663.7,Walmart,"Transportation, Groceries, Dining, General Expenses, Travel",2022-09-22,Australia
    3715,Savings,110.27,Grab,"Dining, Entertainment",2022-11-06,Singapore
    3716,Savings,74.59,Fairprice,"Dining, Entertainment, Travel, Groceries",2022-09-09,Australia
    3717,Checking,752.11,Starbucks,"General Expenses, Dining",2022-08-05,Japan
    3718,Savings,161.0,Google,"Travel, General Expenses, Groceries",2022-09-01,Singapore
    3719,Joint Account,570.83,Amazon,"Groceries, Travel, Transportation, Entertainment, General Expenses, Dining",2022-12-18,Japan
    3720,Joint Account,360.74,Walmart,"Transportation, Travel",2022-10-01,Singapore
    3721,Joint Account,691.0,ACME,"Entertainment, Transportation, Groceries, Travel, Dining, General Expenses",2022-07-27,Japan
    3722,Savings,25.22,Amazon,"General Expenses, Dining",2022-12-31,Japan
    3723,Checking,385.18,Amazon,Travel,2022-08-30,Indonesia
    3724,Joint Account,762.9,Fairprice,"Entertainment, Travel, Groceries, Transportation, Dining",2022-11-29,Indonesia
    3725,Joint Account,117.47,ACME,"Groceries, Travel, Dining, Entertainment, General Expenses, Transportation",2022-11-15,Australia
    3726,Savings,627.08,Fairprice,"Travel, Dining, General Expenses",2022-11-21,Australia
    3727,Savings,52.96,Starbucks,"General Expenses, Transportation, Groceries, Travel, Dining",2022-08-25,Australia
    3728,Savings,406.36,Uber,"Transportation, Dining, Travel",2022-06-29,Singapore
    3729,Checking,905.15,Google,"Groceries, General Expenses",2022-11-16,Indonesia
    3730,Checking,376.34,Google,"Travel, General Expenses, Groceries, Dining, Transportation",2022-08-20,Australia
    3731,Savings,554.19,Google,"Dining, Transportation, General Expenses, Groceries, Travel",2022-09-15,Singapore
    3732,Checking,152.48,Google,General Expenses,2022-11-06,Australia
    3733,Joint Account,338.64,Grab,"Dining, Transportation, General Expenses, Travel, Groceries, Entertainment",2022-08-09,Singapore
    3734,Savings,631.25,Uber,"Dining, General Expenses, Travel, Entertainment, Groceries",2022-10-04,Singapore
    3735,Savings,837.34,Starbucks,"Groceries, Dining, General Expenses, Travel, Entertainment, Transportation",2022-08-31,Indonesia
    3736,Savings,219.66,Uber,"General Expenses, Travel",2022-11-08,Japan
    3737,Joint Account,567.0,ACME,"Transportation, Groceries",2022-10-11,Indonesia
    3738,Checking,675.37,Grab,"Dining, Transportation",2022-09-10,Japan
    3739,Checking,477.08,Walmart,Dining,2022-07-26,Singapore
    3740,Joint Account,644.8,Walmart,Travel,2022-07-11,Indonesia
    3741,Joint Account,52.97,Amazon,"General Expenses, Travel, Transportation, Dining, Groceries",2022-06-20,Singapore
    3742,Savings,456.38,Amazon,"Groceries, Entertainment, General Expenses, Dining, Travel, Transportation",2022-11-03,Japan
    3743,Savings,289.06,Starbucks,"Transportation, Dining, Groceries, Travel, General Expenses",2022-12-27,Indonesia
    3744,Joint Account,618.52,Amazon,"General Expenses, Dining, Travel",2022-11-11,Australia
    3745,Checking,194.08,Uber,"Travel, Transportation, Entertainment",2022-09-28,Indonesia
    3746,Savings,341.27,Gojek,"Groceries, Transportation, Travel, Dining, General Expenses, Entertainment",2022-06-28,Japan
    3747,Joint Account,845.99,Google,"General Expenses, Groceries, Travel, Transportation, Entertainment, Dining",2022-12-29,Indonesia
    3748,Joint Account,277.93,Walmart,Entertainment,2022-06-23,Indonesia
    3749,Joint Account,142.0,Amazon,"Entertainment, Transportation, Groceries, General Expenses",2022-10-15,Singapore
    3750,Joint Account,104.48,Starbucks,"Entertainment, Travel, Groceries, General Expenses, Dining, Transportation",2022-12-30,Indonesia
    3751,Savings,798.88,ACME,"Dining, Travel, Groceries, General Expenses, Entertainment",2022-06-09,Singapore
    3752,Joint Account,266.61,ACME,"General Expenses, Groceries, Dining",2022-11-16,Indonesia
    3753,Savings,453.03,Grab,"Transportation, Travel, General Expenses, Groceries, Entertainment, Dining",2022-11-21,Singapore
    3754,Checking,715.14,Gojek,"Transportation, Entertainment, Travel, Dining",2022-06-30,Australia
    3755,Checking,292.37,Amazon,"Dining, Groceries, Travel, General Expenses",2022-09-25,Australia
    3756,Joint Account,411.81,Starbucks,"Entertainment, General Expenses",2022-11-24,Australia
    3757,Joint Account,165.87,Grab,"Groceries, Transportation",2022-11-18,Japan
    3758,Savings,607.0,ACME,"General Expenses, Transportation, Entertainment",2022-11-24,Indonesia
    3759,Checking,653.69,Walmart,Dining,2022-12-14,Australia
    3760,Savings,190.21,Grab,"Groceries, Dining, Entertainment, General Expenses, Transportation, Travel",2022-11-30,Australia
    3761,Joint Account,898.9,Fairprice,"Travel, Entertainment, Groceries",2022-10-05,Indonesia
    3762,Savings,472.76,Amazon,"Travel, Dining, Groceries, Transportation, Entertainment, General Expenses",2022-11-09,Indonesia
    3763,Joint Account,551.67,Starbucks,"Travel, General Expenses, Dining, Groceries, Transportation",2022-12-01,Singapore
    3764,Joint Account,492.82,Amazon,"Travel, Transportation",2022-07-23,Singapore
    3765,Savings,347.88,Walmart,"General Expenses, Entertainment, Groceries",2022-08-31,Japan
    3766,Savings,614.28,Fairprice,Travel,2022-07-26,Singapore
    3767,Savings,344.3,Starbucks,"Groceries, Travel, Entertainment, General Expenses, Dining",2022-08-10,Australia
    3768,Savings,864.21,Walmart,"Travel, Dining",2022-12-01,Australia
    3769,Joint Account,522.64,Fairprice,"Dining, Groceries",2022-09-01,Indonesia
    3770,Joint Account,92.26,Uber,"Groceries, General Expenses",2022-07-04,Singapore
    3771,Joint Account,780.42,ACME,"General Expenses, Transportation, Entertainment",2022-09-04,Australia
    3772,Joint Account,731.52,ACME,Entertainment,2022-09-02,Australia
    3773,Checking,323.04,Grab,Dining,2022-08-05,Japan
    3774,Savings,481.48,ACME,"Transportation, Groceries, Entertainment, Travel",2022-12-02,Singapore
    3775,Checking,33.59,Amazon,"Groceries, Dining, General Expenses",2022-07-06,Australia
    3776,Joint Account,621.42,Google,"Dining, General Expenses",2022-06-17,Indonesia
    3777,Savings,897.98,Grab,"Entertainment, General Expenses, Transportation",2022-12-15,Australia
    3778,Savings,497.09,ACME,"Entertainment, Travel, General Expenses, Dining",2022-07-16,Japan
    3779,Checking,335.81,ACME,General Expenses,2022-12-27,Indonesia
    3780,Joint Account,685.85,ACME,"General Expenses, Groceries",2022-07-01,Singapore
    3781,Checking,346.38,Grab,"General Expenses, Groceries, Travel, Dining, Transportation",2022-10-11,Japan
    3782,Joint Account,246.14,Fairprice,"Entertainment, Dining, Travel, Transportation",2022-11-19,Singapore
    3783,Joint Account,227.66,Amazon,"Transportation, Groceries",2022-09-20,Australia
    3784,Joint Account,432.26,Grab,"Dining, Transportation, General Expenses, Travel, Entertainment",2022-06-01,Indonesia
    3785,Savings,143.6,Amazon,"General Expenses, Entertainment",2022-10-26,Australia
    3786,Checking,900.41,Google,"General Expenses, Travel, Transportation, Entertainment, Groceries",2022-06-06,Japan
    3787,Savings,569.67,Amazon,"Dining, Travel, Groceries",2022-07-01,Indonesia
    3788,Savings,329.67,Amazon,"Entertainment, Transportation",2022-06-28,Australia
    3789,Checking,181.15,ACME,"General Expenses, Groceries",2022-06-30,Australia
    3790,Savings,701.42,ACME,"Transportation, Entertainment",2022-12-15,Indonesia
    3791,Joint Account,408.25,Uber,"Groceries, Travel",2022-11-07,Singapore
    3792,Savings,562.13,Grab,"Travel, General Expenses, Groceries, Transportation, Dining, Entertainment",2022-09-26,Japan
    3793,Checking,0.43,Fairprice,"Transportation, General Expenses, Travel, Dining, Groceries, Entertainment",2022-07-10,Japan
    3794,Joint Account,715.38,Grab,"Groceries, General Expenses, Entertainment, Transportation",2022-09-09,Singapore
    3795,Joint Account,467.38,ACME,Dining,2022-10-03,Singapore
    3796,Savings,843.4,Walmart,General Expenses,2022-08-24,Japan
    3797,Checking,748.57,Amazon,"Travel, Groceries",2022-12-25,Australia
    3798,Checking,504.94,Gojek,"Transportation, Travel, Dining, Entertainment",2022-12-05,Australia
    3799,Joint Account,446.58,Walmart,"Dining, General Expenses",2022-12-20,Singapore
    3800,Joint Account,127.17,Fairprice,"Groceries, Entertainment, Travel, Dining, Transportation",2022-12-08,Japan
    3801,Joint Account,335.71,Google,"Entertainment, Travel, Dining, General Expenses",2022-06-21,Singapore
    3802,Savings,591.87,Walmart,"Transportation, Entertainment, Dining",2022-06-25,Singapore
    3803,Savings,834.09,ACME,"General Expenses, Dining, Travel",2022-11-24,Indonesia
    3804,Joint Account,319.09,Amazon,"Transportation, Groceries",2022-06-21,Indonesia
    3805,Savings,778.99,Gojek,"Dining, General Expenses, Travel, Groceries, Transportation",2022-06-18,Australia
    3806,Checking,585.19,Fairprice,"Entertainment, Groceries",2022-08-22,Indonesia
    3807,Savings,466.36,Google,"Transportation, General Expenses, Entertainment, Groceries, Dining",2022-09-09,Singapore
    3808,Savings,443.33,Fairprice,"Groceries, Entertainment, Transportation, Dining",2022-07-12,Singapore
    3809,Savings,798.77,Walmart,"Dining, Entertainment, General Expenses",2022-11-08,Japan
    3810,Joint Account,136.55,Google,"General Expenses, Entertainment, Dining, Groceries, Travel",2022-08-31,Australia
    3811,Savings,276.28,Grab,"Groceries, Entertainment",2022-10-15,Indonesia
    3812,Joint Account,260.72,Walmart,"Dining, Travel, Groceries, Entertainment",2022-10-14,Indonesia
    3813,Joint Account,45.2,Gojek,"Entertainment, Groceries",2022-08-13,Australia
    3814,Checking,970.41,Amazon,"Transportation, Groceries, General Expenses, Travel, Dining, Entertainment",2022-09-03,Indonesia
    3815,Checking,840.12,Grab,"Entertainment, Dining, Travel, General Expenses, Transportation",2022-08-15,Australia
    3816,Joint Account,532.89,ACME,Groceries,2022-10-17,Indonesia
    3817,Joint Account,696.06,Uber,"General Expenses, Groceries, Transportation, Travel",2022-06-13,Singapore
    3818,Joint Account,217.9,Starbucks,"Entertainment, Groceries, Dining, Transportation, General Expenses",2022-09-22,Japan
    3819,Joint Account,374.45,Gojek,"Dining, Groceries, Entertainment, Travel",2022-07-05,Singapore
    3820,Savings,415.67,Walmart,"Travel, Entertainment, Transportation, General Expenses, Dining",2022-11-15,Singapore
    3821,Joint Account,477.62,Amazon,"Groceries, Transportation, General Expenses, Travel, Entertainment, Dining",2022-06-22,Indonesia
    3822,Checking,868.14,ACME,"Groceries, General Expenses, Travel, Transportation, Dining",2022-09-10,Australia
    3823,Joint Account,516.41,Gojek,"General Expenses, Groceries",2022-08-07,Indonesia
    3824,Joint Account,843.84,Gojek,"Transportation, Groceries, Entertainment",2022-10-14,Singapore
    3825,Checking,322.01,Amazon,"Transportation, Travel, Entertainment",2022-10-19,Indonesia
    3826,Checking,532.48,Grab,"Transportation, Dining",2022-10-22,Australia
    3827,Checking,566.28,Grab,"Entertainment, Groceries, Transportation",2022-06-12,Indonesia
    3828,Savings,153.32,Gojek,"Transportation, Groceries, General Expenses, Entertainment, Travel",2022-12-20,Indonesia
    3829,Joint Account,456.1,Gojek,"Transportation, Dining, General Expenses",2022-12-31,Indonesia
    3830,Joint Account,364.42,Uber,Transportation,2022-12-05,Singapore
    3831,Joint Account,177.16,Amazon,"Dining, Entertainment, General Expenses, Transportation, Groceries, Travel",2022-09-14,Japan
    3832,Checking,688.26,Google,Travel,2022-06-28,Indonesia
    3833,Joint Account,657.27,ACME,"Transportation, General Expenses, Travel, Entertainment, Groceries",2022-10-06,Japan
    3834,Savings,238.04,Grab,"Travel, Entertainment, General Expenses",2022-08-20,Singapore
    3835,Joint Account,130.48,ACME,"Entertainment, General Expenses, Groceries, Travel",2022-09-11,Japan
    3836,Savings,604.31,Uber,"General Expenses, Groceries, Entertainment, Transportation, Travel, Dining",2022-11-17,Indonesia
    3837,Joint Account,18.4,Grab,"Transportation, Travel, Entertainment, Dining",2022-10-28,Indonesia
    3838,Savings,71.71,Fairprice,"Groceries, Transportation, General Expenses",2022-07-24,Australia
    3839,Joint Account,150.3,Amazon,"General Expenses, Travel, Dining",2022-12-18,Japan
    3840,Joint Account,130.46,Uber,"Transportation, General Expenses",2022-08-10,Australia
    3841,Savings,822.65,Uber,General Expenses,2022-12-06,Australia
    3842,Checking,49.26,Gojek,"General Expenses, Entertainment, Travel, Groceries, Dining, Transportation",2022-11-24,Japan
    3843,Savings,967.77,Starbucks,"Groceries, Dining, Entertainment",2022-11-06,Indonesia
    3844,Joint Account,882.74,Uber,"Entertainment, Dining, Groceries, General Expenses, Transportation",2022-09-03,Japan
    3845,Joint Account,106.61,Fairprice,Travel,2022-08-25,Indonesia
    3846,Savings,298.22,Starbucks,"Transportation, Travel, Groceries",2022-12-21,Australia
    3847,Joint Account,133.37,Google,"General Expenses, Entertainment",2022-06-08,Singapore
    3848,Checking,533.2,Walmart,"Travel, Transportation, Dining, General Expenses",2022-07-30,Indonesia
    3849,Checking,209.15,Uber,"Transportation, Groceries, Entertainment, Dining",2022-10-01,Australia
    3850,Checking,457.52,Amazon,"Travel, Groceries, General Expenses, Entertainment, Dining",2022-11-21,Indonesia
    3851,Joint Account,580.25,Walmart,"Entertainment, Dining, General Expenses",2022-11-12,Indonesia
    3852,Joint Account,968.55,ACME,Entertainment,2022-09-17,Singapore
    3853,Joint Account,204.84,Amazon,"General Expenses, Dining, Entertainment",2022-10-06,Australia
    3854,Checking,868.45,Walmart,"Groceries, Entertainment, Transportation, Travel, General Expenses, Dining",2022-09-13,Japan
    3855,Joint Account,873.4,Fairprice,"Groceries, Travel, Transportation, Entertainment",2022-07-29,Indonesia
    3856,Joint Account,403.07,Walmart,"Entertainment, Transportation, Travel, Dining, Groceries, General Expenses",2022-10-25,Indonesia
    3857,Savings,495.34,ACME,"General Expenses, Entertainment, Groceries, Travel",2022-12-02,Indonesia
    3858,Checking,169.22,Amazon,"General Expenses, Dining, Transportation, Travel, Groceries",2022-07-30,Australia
    3859,Joint Account,78.24,Fairprice,"Transportation, Groceries, Travel, Dining, General Expenses",2022-11-18,Indonesia
    3860,Joint Account,889.87,Walmart,"Transportation, Entertainment, Groceries, General Expenses, Travel, Dining",2022-09-22,Japan
    3861,Checking,405.57,Gojek,"Travel, Transportation, Entertainment",2022-07-29,Australia
    3862,Checking,429.66,ACME,Groceries,2022-09-17,Australia
    3863,Joint Account,685.66,Amazon,"Entertainment, Transportation, Groceries, Dining, Travel, General Expenses",2022-08-07,Indonesia
    3864,Savings,562.72,Walmart,"Dining, Travel, Groceries, Transportation, Entertainment, General Expenses",2022-11-13,Australia
    3865,Savings,822.78,Google,"General Expenses, Entertainment, Groceries, Transportation, Dining, Travel",2022-12-17,Singapore
    3866,Savings,297.79,Uber,"General Expenses, Travel, Dining, Transportation",2022-10-15,Singapore
    3867,Checking,237.61,ACME,"Travel, Groceries",2022-11-03,Singapore
    3868,Checking,528.91,Uber,"Dining, Travel, Transportation",2022-11-18,Singapore
    3869,Joint Account,609.6,Grab,Transportation,2022-09-24,Japan
    3870,Joint Account,264.27,Grab,"General Expenses, Groceries",2022-10-23,Australia
    3871,Checking,681.57,Amazon,"Groceries, Entertainment, Dining, General Expenses, Transportation",2022-10-23,Indonesia
    3872,Joint Account,539.13,Walmart,"Entertainment, General Expenses, Groceries, Transportation, Travel, Dining",2022-10-16,Japan
    3873,Savings,426.36,Grab,"Travel, Groceries, Entertainment, Dining",2022-06-17,Japan
    3874,Joint Account,425.93,ACME,"Dining, Entertainment, Groceries, Travel, General Expenses",2022-06-24,Indonesia
    3875,Checking,754.23,Fairprice,"Dining, Entertainment, Groceries, General Expenses, Transportation",2022-10-17,Japan
    3876,Savings,833.17,ACME,"Travel, General Expenses, Dining, Groceries, Transportation, Entertainment",2022-08-01,Australia
    3877,Joint Account,486.44,Grab,"Dining, Groceries, Transportation, Travel, General Expenses, Entertainment",2022-06-23,Indonesia
    3878,Checking,778.58,ACME,"Entertainment, Transportation, General Expenses, Travel, Groceries",2022-07-13,Singapore
    3879,Checking,623.11,Starbucks,"Groceries, Travel",2022-10-12,Japan
    3880,Checking,389.98,Grab,"General Expenses, Travel",2022-06-21,Japan
    3881,Joint Account,345.79,Uber,"General Expenses, Entertainment, Dining",2022-10-21,Singapore
    3882,Checking,475.7,Starbucks,"Entertainment, Dining, General Expenses, Travel, Transportation, Groceries",2022-07-27,Singapore
    3883,Checking,398.4,Amazon,"Groceries, Entertainment, Dining, Travel, General Expenses",2022-09-10,Japan
    3884,Savings,476.76,ACME,"Entertainment, Dining, Groceries, General Expenses, Travel, Transportation",2022-11-28,Indonesia
    3885,Joint Account,528.63,Amazon,"Transportation, General Expenses, Groceries, Entertainment, Dining, Travel",2022-06-23,Japan
    3886,Checking,554.39,Google,"Groceries, General Expenses",2022-12-05,Japan
    3887,Checking,525.32,Amazon,"Groceries, Entertainment, Dining, General Expenses, Travel, Transportation",2022-11-09,Japan
    3888,Checking,602.61,Google,"Groceries, Dining, Travel",2022-10-06,Indonesia
    3889,Checking,546.59,Fairprice,"Dining, Travel, Transportation, Groceries, General Expenses, Entertainment",2022-08-30,Australia
    3890,Joint Account,477.04,Starbucks,"Travel, Transportation",2022-09-16,Singapore
    3891,Checking,488.93,Starbucks,"Entertainment, Travel, General Expenses",2022-07-20,Singapore
    3892,Joint Account,831.41,Grab,"Dining, Entertainment, Groceries, Travel",2022-07-20,Indonesia
    3893,Joint Account,778.83,Fairprice,"Travel, Groceries",2022-08-16,Indonesia
    3894,Joint Account,990.86,Amazon,Travel,2022-08-21,Australia
    3895,Savings,941.93,Google,"Travel, Transportation, Groceries",2022-11-06,Japan
    3896,Savings,820.45,Walmart,"Groceries, General Expenses, Dining, Transportation, Travel, Entertainment",2022-06-06,Singapore
    3897,Savings,582.39,Uber,"Travel, Dining, Transportation, Entertainment, General Expenses",2022-11-23,Indonesia
    3898,Savings,71.72,Gojek,"General Expenses, Entertainment, Transportation, Travel, Dining, Groceries",2022-06-10,Singapore
    3899,Checking,40.14,Uber,Transportation,2022-10-27,Indonesia
    3900,Checking,342.07,Amazon,"Entertainment, Groceries, Dining, General Expenses",2022-07-22,Indonesia
    3901,Checking,826.3,Grab,"Transportation, Entertainment, General Expenses",2022-07-02,Japan
    3902,Joint Account,733.53,Amazon,"Entertainment, Dining, Travel, Transportation, General Expenses, Groceries",2022-11-03,Japan
    3903,Savings,770.78,Starbucks,"Dining, General Expenses, Transportation, Groceries, Travel",2022-10-26,Singapore
    3904,Joint Account,388.87,Starbucks,"Transportation, General Expenses, Dining, Travel, Entertainment",2022-12-14,Indonesia
    3905,Savings,997.92,Walmart,"Dining, Transportation, Entertainment",2022-09-14,Indonesia
    3906,Joint Account,896.99,Amazon,"Transportation, Dining, General Expenses, Travel",2022-08-11,Australia
    3907,Joint Account,987.07,Fairprice,Groceries,2022-10-03,Singapore
    3908,Joint Account,98.04,ACME,"Entertainment, Travel",2022-08-28,Indonesia
    3909,Joint Account,695.05,Gojek,"Dining, Entertainment, Travel",2022-10-09,Singapore
    3910,Savings,991.9,Uber,Groceries,2022-12-11,Singapore
    3911,Checking,18.13,ACME,"Entertainment, Transportation, General Expenses, Dining, Groceries",2022-10-22,Australia
    3912,Savings,22.13,Grab,"Entertainment, Transportation, Groceries, General Expenses, Travel, Dining",2022-11-23,Japan
    3913,Savings,365.22,ACME,"Travel, Dining",2022-08-06,Australia
    3914,Checking,793.72,ACME,"Transportation, Groceries, Entertainment, Dining, General Expenses, Travel",2022-09-22,Australia
    3915,Savings,115.52,Amazon,"Transportation, General Expenses, Entertainment, Groceries, Travel",2022-07-23,Indonesia
    3916,Joint Account,881.54,Grab,"General Expenses, Transportation, Dining, Entertainment, Groceries, Travel",2022-11-05,Singapore
    3917,Savings,850.63,Amazon,"Transportation, General Expenses, Entertainment",2022-08-03,Singapore
    3918,Checking,973.07,ACME,"General Expenses, Transportation, Dining",2022-11-08,Singapore
    3919,Checking,910.8,Grab,"Entertainment, Dining, Travel, Transportation",2022-08-26,Singapore
    3920,Joint Account,852.19,Amazon,"Entertainment, Travel, Groceries",2022-08-05,Japan
    3921,Joint Account,199.27,Starbucks,"General Expenses, Entertainment",2022-07-27,Indonesia
    3922,Checking,248.86,Starbucks,Travel,2022-10-10,Japan
    3923,Checking,34.54,Amazon,Travel,2022-09-14,Japan
    3924,Joint Account,246.54,ACME,General Expenses,2022-11-27,Japan
    3925,Joint Account,828.8,Walmart,"General Expenses, Transportation, Groceries, Entertainment, Travel",2022-09-29,Australia
    3926,Joint Account,937.89,Walmart,"Groceries, Transportation, Entertainment, Travel",2022-07-10,Australia
    3927,Joint Account,45.74,ACME,"Entertainment, General Expenses, Transportation, Groceries, Dining",2022-09-08,Australia
    3928,Joint Account,548.17,Starbucks,Entertainment,2022-07-05,Japan
    3929,Joint Account,8.44,Amazon,Groceries,2022-10-14,Singapore
    3930,Joint Account,928.3,Amazon,"General Expenses, Transportation, Travel",2022-09-05,Japan
    3931,Savings,553.83,Google,Transportation,2022-10-12,Indonesia
    3932,Checking,149.69,Fairprice,"Groceries, Travel, General Expenses",2022-07-24,Indonesia
    3933,Joint Account,447.11,ACME,"Travel, Dining",2022-08-11,Indonesia
    3934,Checking,138.48,Google,"Travel, General Expenses",2022-11-30,Singapore
    3935,Checking,800.77,ACME,"General Expenses, Travel, Transportation, Groceries, Entertainment, Dining",2022-11-08,Singapore
    3936,Checking,999.43,Gojek,"General Expenses, Transportation, Entertainment, Dining, Groceries, Travel",2022-08-03,Japan
    3937,Savings,683.63,Google,"General Expenses, Dining, Transportation, Groceries, Entertainment",2022-09-17,Singapore
    3938,Joint Account,625.95,Fairprice,"Travel, Transportation, Dining, General Expenses, Entertainment, Groceries",2022-08-26,Australia
    3939,Savings,620.27,Gojek,"Groceries, General Expenses",2022-12-06,Australia
    3940,Savings,236.34,Starbucks,"Groceries, Dining, Transportation, Entertainment, General Expenses, Travel",2022-12-10,Singapore
    3941,Checking,884.63,Grab,"Groceries, Entertainment",2022-12-09,Japan
    3942,Checking,731.2,Gojek,"Travel, Transportation, Entertainment",2022-10-18,Japan
    3943,Savings,892.05,Google,"Travel, Dining, Entertainment, General Expenses, Transportation, Groceries",2022-08-25,Singapore
    3944,Checking,3.68,Amazon,"General Expenses, Dining",2022-06-08,Indonesia
    3945,Checking,700.52,ACME,"Groceries, Travel, Entertainment",2022-07-18,Japan
    3946,Savings,310.85,ACME,"Travel, Transportation, Groceries, Entertainment, Dining, General Expenses",2022-12-12,Singapore
    3947,Savings,602.82,Grab,"General Expenses, Dining, Travel, Entertainment, Groceries",2022-08-23,Indonesia
    3948,Savings,13.17,Google,"Entertainment, General Expenses",2022-08-25,Japan
    3949,Savings,438.27,Google,"Dining, Transportation, Groceries, Travel, General Expenses, Entertainment",2022-09-14,Indonesia
    3950,Joint Account,621.66,Walmart,"Entertainment, Dining",2022-09-10,Singapore
    3951,Savings,516.61,Google,"Entertainment, Groceries, Travel, General Expenses",2022-07-29,Australia
    3952,Savings,538.75,Google,"General Expenses, Travel, Dining",2022-12-20,Australia
    3953,Checking,625.62,Uber,"Entertainment, General Expenses, Groceries",2022-10-09,Indonesia
    3954,Joint Account,735.83,Grab,Travel,2022-09-14,Indonesia
    3955,Joint Account,932.76,Starbucks,Dining,2022-08-06,Australia
    3956,Checking,424.92,Starbucks,Dining,2022-11-22,Indonesia
    3957,Joint Account,609.6,Uber,"Dining, Groceries, General Expenses, Transportation",2022-11-11,Indonesia
    3958,Joint Account,43.51,Amazon,"Entertainment, General Expenses, Dining, Groceries, Transportation",2022-11-28,Australia
    3959,Joint Account,686.88,Fairprice,"Travel, Groceries, Transportation, Dining",2022-07-30,Singapore
    3960,Savings,656.16,Uber,"Transportation, General Expenses, Dining, Travel",2022-07-01,Singapore
    3961,Savings,66.5,Gojek,"Transportation, Travel, Groceries, Dining, General Expenses",2022-12-14,Australia
    3962,Checking,652.89,Uber,"Groceries, General Expenses, Transportation, Entertainment, Dining, Travel",2022-09-09,Australia
    3963,Checking,534.25,Starbucks,"Dining, Transportation, Groceries",2022-06-02,Australia
    3964,Checking,496.97,Gojek,"General Expenses, Dining",2022-08-26,Singapore
    3965,Savings,372.77,ACME,"Travel, Transportation, Entertainment, General Expenses",2022-12-17,Japan
    3966,Savings,671.48,Starbucks,"Entertainment, Dining",2022-08-29,Singapore
    3967,Savings,684.69,Grab,"Groceries, Travel, Transportation, Entertainment",2022-09-04,Singapore
    3968,Checking,811.77,ACME,"Transportation, Entertainment, Dining, Groceries, Travel",2022-09-22,Indonesia
    3969,Joint Account,621.59,Fairprice,"General Expenses, Dining",2022-09-23,Singapore
    3970,Joint Account,736.82,Gojek,"Travel, Dining, Transportation, General Expenses",2022-07-20,Japan
    3971,Savings,492.09,Amazon,"General Expenses, Entertainment, Groceries, Transportation",2022-06-24,Indonesia
    3972,Checking,181.9,Grab,"Groceries, Entertainment",2022-08-31,Singapore
    3973,Savings,867.11,Amazon,"Transportation, General Expenses",2022-09-01,Singapore
    3974,Checking,248.0,ACME,"Transportation, General Expenses, Entertainment, Dining",2022-06-10,Indonesia
    3975,Joint Account,299.71,Grab,"Travel, Groceries, Dining",2022-10-06,Indonesia
    3976,Savings,103.06,ACME,"Dining, Travel",2022-09-23,Australia
    3977,Joint Account,419.6,Walmart,"Entertainment, Travel, Groceries, Dining",2022-09-08,Australia
    3978,Savings,389.84,ACME,Travel,2022-08-09,Japan
    3979,Savings,703.09,Grab,"Transportation, Dining, Travel, Groceries, Entertainment",2022-09-08,Australia
    3980,Savings,202.13,Uber,"General Expenses, Travel, Groceries, Transportation, Dining, Entertainment",2022-10-31,Indonesia
    3981,Savings,310.58,ACME,"Entertainment, Transportation, General Expenses",2022-06-06,Australia
    3982,Checking,22.8,Uber,"Groceries, General Expenses, Transportation, Travel, Dining, Entertainment",2022-11-16,Indonesia
    3983,Savings,26.51,Amazon,"Groceries, Travel",2022-09-14,Australia
    3984,Savings,163.31,Walmart,"General Expenses, Dining, Groceries, Transportation, Entertainment",2022-06-04,Singapore
    3985,Joint Account,689.59,Fairprice,"Travel, Transportation, General Expenses, Dining, Groceries, Entertainment",2022-07-15,Australia
    3986,Joint Account,619.62,Amazon,"Groceries, Transportation",2022-11-22,Indonesia
    3987,Joint Account,277.22,Starbucks,"Dining, Entertainment",2022-07-25,Australia
    3988,Savings,834.08,Walmart,General Expenses,2022-07-15,Indonesia
    3989,Savings,767.28,Amazon,"General Expenses, Groceries, Entertainment, Dining, Transportation, Travel",2022-11-08,Singapore
    3990,Savings,808.85,Fairprice,"Transportation, Travel, General Expenses",2022-10-27,Australia
    3991,Savings,933.08,ACME,"Transportation, Groceries, Travel, Entertainment, General Expenses, Dining",2022-07-29,Indonesia
    3992,Checking,829.56,Walmart,"Travel, General Expenses",2022-11-05,Japan
    3993,Joint Account,833.9,Google,"Travel, Groceries, Entertainment",2022-07-06,Singapore
    3994,Savings,974.82,Grab,"Groceries, Entertainment, General Expenses, Travel, Dining",2022-06-08,Australia
    3995,Checking,623.36,Google,"Travel, Groceries, General Expenses, Transportation",2022-07-05,Indonesia
    3996,Joint Account,653.34,Starbucks,"Travel, Dining, Entertainment, Groceries, General Expenses, Transportation",2022-10-30,Australia
    3997,Joint Account,474.37,Fairprice,"Dining, Entertainment",2022-12-05,Indonesia
    3998,Savings,273.21,Fairprice,"General Expenses, Transportation, Dining, Groceries, Travel, Entertainment",2022-07-01,Australia
    3999,Joint Account,253.5,Uber,"General Expenses, Dining, Transportation",2022-10-11,Singapore
    4000,Joint Account,99.87,Gojek,"Travel, General Expenses, Groceries, Transportation, Entertainment",2022-08-18,Australia
    4001,Joint Account,878.8,Uber,"Travel, Entertainment, Groceries",2022-08-18,Indonesia
    4002,Savings,77.01,Fairprice,"General Expenses, Transportation",2022-10-08,Singapore
    4003,Checking,674.17,ACME,"Dining, Travel, Entertainment, General Expenses",2022-12-24,Indonesia
    4004,Savings,714.38,Amazon,"General Expenses, Entertainment",2022-08-05,Japan
    4005,Joint Account,854.69,Fairprice,"Entertainment, Groceries, Transportation",2022-09-05,Singapore
    4006,Joint Account,367.83,ACME,"Travel, Dining, Entertainment, General Expenses, Transportation, Groceries",2022-07-27,Singapore
    4007,Savings,455.13,ACME,"Entertainment, General Expenses, Dining, Groceries, Transportation",2022-06-10,Australia
    4008,Joint Account,770.79,Uber,"Transportation, General Expenses, Groceries, Travel, Dining, Entertainment",2022-07-06,Australia
    4009,Checking,583.84,ACME,"General Expenses, Transportation, Groceries, Entertainment, Dining, Travel",2022-08-25,Indonesia
    4010,Savings,568.32,Starbucks,"Travel, Groceries, Transportation, Dining, General Expenses",2022-12-02,Australia
    4011,Savings,368.33,Fairprice,"Dining, Entertainment, Groceries, Transportation, Travel, General Expenses",2022-09-07,Indonesia
    4012,Checking,503.12,Uber,Entertainment,2022-09-22,Japan
    4013,Checking,403.9,Walmart,"Travel, Transportation, Entertainment, Groceries",2022-09-07,Australia
    4014,Savings,223.72,Uber,"General Expenses, Transportation",2022-10-19,Japan
    4015,Savings,90.74,Uber,"General Expenses, Entertainment",2022-07-02,Indonesia
    4016,Checking,887.53,ACME,"Groceries, General Expenses, Dining, Entertainment, Travel, Transportation",2022-09-09,Singapore
    4017,Checking,868.19,ACME,"General Expenses, Dining, Entertainment, Groceries, Transportation",2022-08-14,Japan
    4018,Joint Account,303.43,Amazon,"Dining, Groceries, Travel",2022-12-29,Australia
    4019,Joint Account,232.57,Uber,"General Expenses, Dining, Entertainment, Groceries",2022-08-09,Japan
    4020,Checking,626.37,Google,"Dining, Entertainment",2022-06-16,Indonesia
    4021,Checking,770.05,ACME,General Expenses,2022-09-14,Japan
    4022,Savings,957.08,Starbucks,"Dining, Travel, General Expenses",2022-08-31,Indonesia
    4023,Savings,565.65,Fairprice,"Groceries, Travel, Entertainment, General Expenses, Dining",2022-07-07,Singapore
    4024,Joint Account,651.87,Grab,"General Expenses, Dining, Entertainment, Travel, Transportation",2022-07-31,Australia
    4025,Checking,505.62,ACME,Entertainment,2022-07-15,Japan
    4026,Joint Account,454.41,Uber,Groceries,2022-12-28,Indonesia
    4027,Savings,861.07,Google,"Entertainment, General Expenses, Transportation",2022-12-13,Australia
    4028,Savings,407.48,Google,"Transportation, General Expenses, Entertainment, Groceries, Travel, Dining",2022-12-17,Indonesia
    4029,Joint Account,547.33,Walmart,"Travel, Groceries, Dining, Entertainment",2022-11-06,Japan
    4030,Joint Account,854.0,Google,"Dining, General Expenses, Transportation, Groceries, Travel, Entertainment",2022-11-09,Australia
    4031,Joint Account,620.55,Grab,"Transportation, General Expenses",2022-11-18,Indonesia
    4032,Checking,803.27,Google,"Travel, Entertainment, Dining, Groceries, Transportation, General Expenses",2022-10-18,Singapore
    4033,Checking,297.03,Walmart,"Transportation, Entertainment",2022-08-05,Singapore
    4034,Checking,809.43,ACME,"Groceries, General Expenses",2022-07-29,Indonesia
    4035,Checking,429.75,Fairprice,"Groceries, Entertainment, Transportation, Dining",2022-11-21,Singapore
    4036,Checking,780.37,Fairprice,"Dining, Transportation, Entertainment, General Expenses",2022-10-28,Australia
    4037,Checking,190.4,Amazon,Groceries,2022-10-01,Australia
    4038,Savings,945.55,Starbucks,"Transportation, Groceries, General Expenses, Dining, Travel, Entertainment",2022-11-10,Japan
    4039,Checking,641.44,Fairprice,"Travel, Groceries, Entertainment, General Expenses, Dining, Transportation",2022-08-17,Australia
    4040,Savings,682.87,Google,Dining,2022-12-14,Australia
    4041,Joint Account,145.52,Starbucks,"Dining, Travel, Entertainment, Groceries, General Expenses, Transportation",2022-06-25,Australia
    4042,Checking,425.85,Starbucks,"Travel, General Expenses, Dining, Entertainment",2022-08-31,Singapore
    4043,Checking,724.98,ACME,"Travel, Entertainment, General Expenses, Dining, Groceries, Transportation",2022-09-01,Singapore
    4044,Savings,774.05,Google,"Travel, Entertainment",2022-06-24,Indonesia
    4045,Joint Account,504.02,Uber,"Groceries, Transportation, Entertainment, Travel, General Expenses",2022-09-19,Australia
    4046,Savings,79.78,Walmart,"Dining, Transportation, Travel, Entertainment, Groceries, General Expenses",2022-11-10,Indonesia
    4047,Joint Account,723.77,Uber,"Entertainment, Travel, Dining, Groceries",2022-07-19,Singapore
    4048,Savings,755.19,Starbucks,"Travel, Dining, Groceries, Transportation",2022-09-28,Indonesia
    4049,Savings,144.09,Walmart,"General Expenses, Entertainment, Dining, Groceries",2022-11-30,Singapore
    4050,Savings,899.87,Uber,"Travel, Entertainment, Transportation, General Expenses",2022-08-01,Singapore
    4051,Checking,744.53,Starbucks,"Travel, Transportation, Groceries, Entertainment, Dining, General Expenses",2022-07-22,Australia
    4052,Checking,393.77,Google,"Transportation, Entertainment, Groceries, General Expenses, Travel",2022-12-07,Singapore
    4053,Savings,838.58,Uber,"Dining, General Expenses, Travel, Entertainment, Groceries, Transportation",2022-06-22,Singapore
    4054,Joint Account,763.93,Starbucks,"Travel, Transportation, Entertainment",2022-12-28,Singapore
    4055,Savings,162.44,Google,Travel,2022-09-16,Japan
    4056,Savings,304.26,Walmart,Entertainment,2022-07-25,Indonesia
    4057,Savings,908.41,ACME,"Dining, General Expenses, Travel, Groceries, Entertainment, Transportation",2022-06-23,Singapore
    4058,Savings,913.56,Uber,"Dining, General Expenses",2022-06-29,Australia
    4059,Savings,415.33,Amazon,"Dining, Travel",2022-10-03,Japan
    4060,Checking,266.76,Amazon,Entertainment,2022-06-16,Indonesia
    4061,Joint Account,769.23,Walmart,"General Expenses, Groceries, Entertainment",2022-11-17,Indonesia
    4062,Savings,784.96,ACME,"General Expenses, Entertainment, Travel, Dining, Transportation, Groceries",2022-08-03,Japan
    4063,Savings,508.96,Google,"General Expenses, Groceries, Travel",2022-10-08,Singapore
    4064,Checking,74.11,Amazon,"Travel, Transportation",2022-07-07,Japan
    4065,Joint Account,354.91,Gojek,Travel,2022-08-02,Japan
    4066,Checking,914.65,Gojek,Travel,2022-09-01,Japan
    4067,Joint Account,49.95,Fairprice,"General Expenses, Groceries, Entertainment, Transportation",2022-09-01,Indonesia
    4068,Joint Account,47.77,Gojek,"General Expenses, Entertainment, Dining, Groceries, Transportation",2022-11-17,Singapore
    4069,Checking,727.28,Walmart,"Travel, Transportation, Groceries, Entertainment",2022-11-24,Japan
    4070,Joint Account,701.1,Amazon,Groceries,2022-08-09,Australia
    4071,Savings,63.76,Uber,"Transportation, Dining, General Expenses",2022-11-28,Indonesia
    4072,Joint Account,48.94,Uber,"Travel, Entertainment",2022-11-26,Australia
    4073,Savings,659.69,Walmart,"Travel, Groceries, Dining, General Expenses, Entertainment",2022-12-17,Australia
    4074,Joint Account,897.64,Google,General Expenses,2022-06-04,Indonesia
    4075,Checking,145.12,Amazon,"Groceries, Transportation, General Expenses, Dining",2022-10-02,Japan
    4076,Savings,1.96,Google,"Travel, Groceries, Entertainment, Dining, Transportation",2022-07-28,Indonesia
    4077,Checking,238.77,Google,Groceries,2022-12-09,Singapore
    4078,Joint Account,311.49,Walmart,"Groceries, General Expenses, Travel, Dining, Transportation",2022-07-18,Singapore
    4079,Checking,755.55,Gojek,"Entertainment, Dining, General Expenses, Transportation, Groceries, Travel",2022-06-05,Japan
    4080,Checking,738.24,Google,"Entertainment, Travel, General Expenses, Dining, Groceries, Transportation",2022-12-18,Japan
    4081,Checking,478.77,Fairprice,"Entertainment, Groceries",2022-12-21,Singapore
    4082,Checking,695.14,ACME,Travel,2022-07-07,Indonesia
    4083,Checking,779.69,Gojek,"Dining, Travel",2022-08-02,Japan
    4084,Savings,848.39,Walmart,"Travel, Transportation, General Expenses",2022-06-15,Indonesia
    4085,Checking,985.23,Amazon,"General Expenses, Travel, Dining, Groceries, Entertainment",2022-12-11,Japan
    4086,Savings,940.77,Uber,"Entertainment, Transportation, Groceries, General Expenses",2022-10-02,Indonesia
    4087,Savings,194.92,Gojek,Entertainment,2022-06-17,Japan
    4088,Checking,264.1,ACME,Dining,2022-09-26,Indonesia
    4089,Checking,969.51,Gojek,General Expenses,2022-10-31,Indonesia
    4090,Joint Account,129.37,Fairprice,"Groceries, Travel, Entertainment, General Expenses",2022-07-22,Indonesia
    4091,Savings,258.7,Grab,"General Expenses, Transportation, Entertainment, Groceries, Dining, Travel",2022-12-08,Indonesia
    4092,Checking,643.55,ACME,"Transportation, General Expenses",2022-11-01,Singapore
    4093,Joint Account,253.85,Grab,"Transportation, Dining, General Expenses",2022-10-31,Australia
    4094,Joint Account,850.58,Gojek,"General Expenses, Dining, Entertainment",2022-12-02,Australia
    4095,Joint Account,105.05,Gojek,"Groceries, Entertainment, Dining, General Expenses, Transportation",2022-07-31,Indonesia
    4096,Checking,583.65,ACME,Groceries,2022-12-05,Indonesia
    4097,Savings,456.22,Starbucks,"Groceries, Transportation, Travel, Entertainment, General Expenses",2022-06-25,Australia
    4098,Joint Account,429.28,Fairprice,"Transportation, General Expenses, Groceries, Travel, Dining",2022-06-22,Indonesia
    4099,Savings,929.87,Grab,Travel,2022-08-13,Singapore
    4100,Joint Account,389.73,ACME,"Entertainment, Transportation",2022-06-27,Japan
    4101,Joint Account,558.62,Grab,"Travel, Transportation, Dining, General Expenses",2022-06-06,Indonesia
    4102,Joint Account,137.61,ACME,"Transportation, Travel, Groceries",2022-08-05,Japan
    4103,Savings,661.77,Google,"Travel, Groceries, Transportation, General Expenses, Dining",2022-10-18,Japan
    4104,Savings,875.27,Amazon,"General Expenses, Entertainment, Dining",2022-08-22,Indonesia
    4105,Savings,729.65,Gojek,"Entertainment, Transportation, Travel, General Expenses, Dining, Groceries",2022-10-07,Australia
    4106,Joint Account,968.46,Fairprice,"Groceries, Entertainment, Transportation, Dining, General Expenses",2022-08-21,Australia
    4107,Checking,866.15,Uber,"Travel, Entertainment, General Expenses, Dining, Transportation",2022-12-05,Indonesia
    4108,Checking,674.57,ACME,"General Expenses, Entertainment, Dining, Travel, Transportation, Groceries",2022-08-05,Singapore
    4109,Savings,179.15,Grab,General Expenses,2022-09-10,Indonesia
    4110,Savings,583.21,Google,"Travel, Groceries, Entertainment, Dining, General Expenses, Transportation",2022-11-06,Japan
    4111,Savings,786.11,Amazon,"General Expenses, Groceries, Transportation",2022-08-01,Indonesia
    4112,Joint Account,195.55,Fairprice,"Transportation, Entertainment",2022-09-02,Australia
    4113,Savings,505.7,Grab,General Expenses,2022-08-03,Japan
    4114,Savings,373.07,Gojek,"General Expenses, Groceries, Transportation",2022-06-05,Singapore
    4115,Savings,592.08,Fairprice,"General Expenses, Transportation, Entertainment",2022-09-22,Australia
    4116,Checking,126.12,Walmart,"Dining, General Expenses, Groceries, Transportation, Travel, Entertainment",2022-08-26,Japan
    4117,Savings,200.69,ACME,"Groceries, General Expenses, Dining, Travel, Transportation",2022-10-06,Indonesia
    4118,Joint Account,835.88,Uber,"Travel, Entertainment",2022-11-19,Japan
    4119,Savings,807.52,ACME,"Groceries, Travel, Entertainment, General Expenses",2022-11-14,Japan
    4120,Checking,690.15,ACME,"Entertainment, Dining, Travel, Groceries",2022-10-21,Singapore
    4121,Checking,452.95,Walmart,"General Expenses, Travel, Entertainment, Transportation, Groceries",2022-11-13,Japan
    4122,Savings,734.47,Grab,Groceries,2022-12-09,Australia
    4123,Joint Account,991.83,Amazon,"Dining, Groceries",2022-08-29,Singapore
    4124,Savings,621.33,Starbucks,"Entertainment, General Expenses, Travel, Dining, Transportation, Groceries",2022-08-17,Indonesia
    4125,Checking,985.25,Starbucks,"Travel, General Expenses, Transportation",2022-10-09,Singapore
    4126,Savings,57.79,Uber,Groceries,2022-07-02,Australia
    4127,Savings,559.36,ACME,"Travel, Entertainment",2022-11-14,Japan
    4128,Savings,876.2,Google,General Expenses,2022-11-24,Australia
    4129,Savings,578.79,Google,"Transportation, Dining, Entertainment, Travel",2022-07-25,Indonesia
    4130,Checking,774.93,ACME,"Travel, Dining, General Expenses, Groceries, Transportation",2022-07-28,Singapore
    4131,Checking,479.11,Amazon,"Transportation, General Expenses",2022-10-08,Indonesia
    4132,Savings,260.61,ACME,"Transportation, Dining, Entertainment, Groceries, General Expenses, Travel",2022-12-18,Australia
    4133,Checking,815.25,Walmart,"Groceries, Entertainment, Dining, General Expenses",2022-06-22,Singapore
    4134,Savings,52.52,Google,"Dining, Entertainment, Groceries, Travel, General Expenses",2022-07-27,Japan
    4135,Checking,275.88,Fairprice,"Groceries, Entertainment, Travel, General Expenses, Transportation, Dining",2022-11-27,Indonesia
    4136,Savings,859.89,Walmart,"Travel, Transportation, General Expenses, Dining, Groceries",2022-06-05,Australia
    4137,Checking,899.2,Google,Groceries,2022-12-16,Japan
    4138,Joint Account,217.89,Starbucks,"Transportation, Travel, Entertainment, General Expenses, Groceries",2022-08-04,Japan
    4139,Savings,119.71,Fairprice,"General Expenses, Groceries, Dining",2022-11-28,Indonesia
    4140,Joint Account,542.9,Google,Travel,2022-07-06,Australia
    4141,Savings,343.22,Starbucks,"Dining, Transportation, General Expenses, Entertainment",2022-07-09,Singapore
    4142,Joint Account,788.38,Fairprice,Travel,2022-06-03,Singapore
    4143,Joint Account,540.53,Walmart,General Expenses,2022-09-29,Japan
    4144,Joint Account,619.2,Uber,"Groceries, Transportation, Travel",2022-12-11,Indonesia
    4145,Joint Account,233.07,Gojek,"General Expenses, Travel, Transportation, Dining, Groceries, Entertainment",2022-09-08,Japan
    4146,Joint Account,884.4,Amazon,"Entertainment, Dining, Travel, Groceries, Transportation, General Expenses",2022-12-11,Australia
    4147,Savings,53.95,Google,"Transportation, General Expenses, Entertainment, Dining",2022-11-16,Indonesia
    4148,Joint Account,64.69,Starbucks,"Groceries, Transportation, Entertainment, General Expenses, Dining",2022-06-07,Australia
    4149,Savings,879.43,Starbucks,"General Expenses, Dining, Transportation, Groceries, Entertainment",2022-12-19,Australia
    4150,Savings,42.92,Grab,Transportation,2022-08-03,Indonesia
    4151,Savings,132.61,Fairprice,"Dining, Travel",2022-10-22,Indonesia
    4152,Savings,209.78,Amazon,"Groceries, Travel, Dining, General Expenses, Transportation",2022-07-16,Singapore
    4153,Joint Account,268.84,Gojek,"Dining, Groceries, Transportation, Entertainment, Travel",2022-07-12,Australia
    4154,Joint Account,576.71,Gojek,Entertainment,2022-10-10,Japan
    4155,Checking,577.7,Gojek,"Travel, Groceries, General Expenses",2022-06-21,Japan
    4156,Joint Account,212.13,Grab,"Dining, General Expenses, Transportation, Groceries",2022-09-08,Australia
    4157,Joint Account,524.15,Gojek,"General Expenses, Transportation",2022-09-15,Indonesia
    4158,Savings,493.57,ACME,Dining,2022-06-16,Indonesia
    4159,Checking,194.42,Fairprice,"Entertainment, Groceries, Dining, Transportation, General Expenses",2022-10-05,Indonesia
    4160,Checking,44.91,Uber,"General Expenses, Travel, Entertainment, Transportation, Dining, Groceries",2022-09-27,Japan
    4161,Joint Account,987.86,Gojek,"General Expenses, Groceries, Dining",2022-11-10,Indonesia
    4162,Joint Account,569.47,Walmart,"Transportation, Entertainment, General Expenses, Dining, Travel, Groceries",2022-06-27,Singapore
    4163,Joint Account,763.07,Amazon,"Travel, Transportation, Entertainment, Dining",2022-12-07,Indonesia
    4164,Joint Account,517.53,ACME,Dining,2022-10-02,Japan
    4165,Checking,887.27,Gojek,Entertainment,2022-11-16,Singapore
    4166,Savings,142.36,Walmart,"Groceries, General Expenses, Entertainment, Dining, Travel, Transportation",2022-06-14,Australia
    4167,Checking,789.54,Grab,"General Expenses, Dining",2022-10-22,Japan
    4168,Savings,111.98,Amazon,"Travel, Entertainment, General Expenses",2022-06-20,Japan
    4169,Savings,640.1,Walmart,"Entertainment, Transportation, Groceries",2022-08-20,Australia
    4170,Checking,426.18,Gojek,"Entertainment, General Expenses, Groceries",2022-10-22,Japan
    4171,Joint Account,778.35,Uber,"Entertainment, General Expenses, Dining",2022-07-04,Indonesia
    4172,Joint Account,327.57,Walmart,Dining,2022-08-25,Australia
    4173,Checking,997.21,Uber,"Transportation, Entertainment",2022-06-11,Indonesia
    4174,Savings,269.5,Walmart,"Dining, Groceries, Travel, Transportation, Entertainment, General Expenses",2022-12-05,Australia
    4175,Checking,614.2,Walmart,Travel,2022-08-17,Singapore
    4176,Joint Account,3.88,Grab,Entertainment,2022-11-28,Japan
    4177,Joint Account,387.2,Fairprice,"Travel, General Expenses, Dining, Transportation, Entertainment, Groceries",2022-12-22,Australia
    4178,Joint Account,277.02,Walmart,"Entertainment, Transportation",2022-06-06,Australia
    4179,Joint Account,170.76,Grab,"Transportation, Entertainment, Travel, Groceries, General Expenses",2022-10-15,Indonesia
    4180,Savings,251.3,Amazon,"Dining, Groceries, General Expenses",2022-09-17,Australia
    4181,Savings,630.88,Google,"Travel, Groceries, Entertainment, Dining",2022-11-07,Singapore
    4182,Checking,949.9,Google,"Entertainment, General Expenses",2022-06-22,Indonesia
    4183,Savings,980.93,ACME,"Dining, Groceries, Transportation, Travel, Entertainment, General Expenses",2022-07-10,Australia
    4184,Savings,894.32,Walmart,"Dining, Entertainment, Travel",2022-09-06,Australia
    4185,Savings,281.32,Amazon,Groceries,2022-12-25,Japan
    4186,Checking,601.92,Amazon,"Groceries, Travel",2022-08-23,Japan
    4187,Checking,465.94,Grab,"Groceries, Dining, Transportation, General Expenses, Entertainment, Travel",2022-09-04,Singapore
    4188,Savings,346.35,Amazon,"General Expenses, Dining, Travel",2022-09-05,Singapore
    4189,Checking,386.3,Google,Transportation,2022-12-18,Singapore
    4190,Savings,873.1,Fairprice,Dining,2022-06-11,Singapore
    4191,Checking,180.02,Google,"Entertainment, Travel",2022-07-24,Australia
    4192,Joint Account,641.32,Fairprice,"Dining, Groceries, Entertainment, General Expenses, Transportation, Travel",2022-06-27,Australia
    4193,Savings,733.47,ACME,"Groceries, General Expenses",2022-10-28,Japan
    4194,Joint Account,262.37,Google,Travel,2022-12-26,Japan
    4195,Checking,176.9,Starbucks,"Transportation, Entertainment, Travel, General Expenses, Groceries",2022-10-28,Indonesia
    4196,Checking,56.08,Amazon,"Entertainment, Transportation, Dining, General Expenses, Travel, Groceries",2022-09-27,Indonesia
    4197,Checking,658.39,Walmart,"Groceries, Entertainment, Travel, Transportation",2022-11-15,Australia
    4198,Savings,513.74,Starbucks,"Groceries, Dining, Travel, Entertainment, General Expenses",2022-08-13,Japan
    4199,Joint Account,260.13,Starbucks,"Entertainment, Travel",2022-08-16,Singapore
    4200,Savings,846.97,Grab,"Transportation, Entertainment",2022-10-15,Singapore
    4201,Checking,570.8,Google,"Entertainment, Dining, Travel",2022-11-21,Australia
    4202,Savings,336.62,Grab,"Travel, Dining, Groceries, General Expenses, Entertainment, Transportation",2022-08-30,Japan
    4203,Savings,22.27,Amazon,"Entertainment, Groceries, General Expenses, Dining",2022-08-02,Indonesia
    4204,Joint Account,793.75,Starbucks,"Dining, Entertainment, General Expenses",2022-07-21,Singapore
    4205,Savings,590.01,Amazon,"Entertainment, Dining",2022-06-10,Japan
    4206,Checking,869.38,Gojek,"Travel, Entertainment, General Expenses, Groceries, Dining",2022-08-11,Australia
    4207,Joint Account,498.58,Grab,"Groceries, Transportation",2022-11-30,Indonesia
    4208,Checking,850.68,Google,Entertainment,2022-06-25,Singapore
    4209,Joint Account,776.17,Starbucks,"Travel, General Expenses, Dining, Transportation, Entertainment, Groceries",2022-12-30,Indonesia
    4210,Savings,224.41,Fairprice,Travel,2022-12-27,Indonesia
    4211,Savings,909.31,Starbucks,Transportation,2022-09-04,Singapore
    4212,Checking,426.37,ACME,"Travel, Dining, General Expenses, Entertainment, Groceries",2022-06-05,Indonesia
    4213,Savings,587.5,Grab,General Expenses,2022-07-14,Australia
    4214,Joint Account,876.56,Walmart,"Transportation, Dining, Groceries, Entertainment, General Expenses, Travel",2022-09-17,Japan
    4215,Joint Account,812.74,Gojek,"Groceries, Transportation, Entertainment, Dining",2022-06-25,Indonesia
    4216,Joint Account,65.52,Starbucks,General Expenses,2022-10-05,Japan
    4217,Savings,995.59,ACME,"Transportation, Dining, Groceries, General Expenses, Travel",2022-12-23,Australia
    4218,Checking,584.66,Google,"Dining, Travel",2022-10-08,Singapore
    4219,Checking,561.22,ACME,"Dining, General Expenses, Groceries, Transportation, Entertainment, Travel",2022-10-01,Singapore
    4220,Checking,392.74,Starbucks,"Transportation, Dining, General Expenses, Travel",2022-06-02,Australia
    4221,Savings,351.67,Gojek,"Travel, Entertainment",2022-08-13,Singapore
    4222,Savings,672.67,ACME,"Dining, General Expenses, Travel, Transportation, Groceries",2022-07-12,Japan
    4223,Savings,284.26,Uber,"Travel, Entertainment, General Expenses",2022-11-05,Singapore
    4224,Joint Account,570.41,Fairprice,Groceries,2022-10-11,Singapore
    4225,Checking,626.71,Fairprice,"Travel, General Expenses, Entertainment, Groceries, Dining",2022-06-21,Australia
    4226,Joint Account,402.04,Walmart,"Groceries, Dining, Transportation, General Expenses, Travel",2022-09-04,Australia
    4227,Checking,911.69,Uber,"Transportation, General Expenses, Groceries",2022-11-30,Indonesia
    4228,Checking,240.04,Google,"Groceries, General Expenses, Travel, Transportation",2022-11-30,Singapore
    4229,Joint Account,720.04,Fairprice,Travel,2022-11-19,Indonesia
    4230,Savings,9.3,Amazon,"Transportation, Groceries, Travel, Entertainment, General Expenses, Dining",2022-12-30,Japan
    4231,Savings,829.36,Starbucks,"Groceries, Entertainment, Dining",2022-09-01,Japan
    4232,Joint Account,415.19,Google,Transportation,2022-07-26,Japan
    4233,Checking,95.25,Amazon,"General Expenses, Groceries, Travel, Transportation",2022-12-31,Japan
    4234,Joint Account,845.92,Google,"Groceries, Transportation, Travel, Dining, General Expenses",2022-12-25,Indonesia
    4235,Joint Account,165.49,Gojek,"General Expenses, Travel",2022-08-11,Singapore
    4236,Joint Account,414.32,Starbucks,"Transportation, Entertainment, Travel",2022-07-11,Singapore
    4237,Savings,112.59,Walmart,"Transportation, Dining",2022-08-05,Japan
    4238,Checking,13.92,Gojek,"Groceries, Entertainment",2022-07-10,Singapore
    4239,Savings,676.23,Uber,"Entertainment, Transportation, General Expenses",2022-11-27,Japan
    4240,Savings,363.13,Grab,"General Expenses, Transportation",2022-09-18,Japan
    4241,Joint Account,14.82,ACME,"Entertainment, Dining",2022-09-03,Indonesia
    4242,Savings,378.95,Uber,"Transportation, Groceries, Travel, Entertainment",2022-06-01,Australia
    4243,Checking,509.3,Starbucks,Transportation,2022-09-18,Singapore
    4244,Savings,976.41,Grab,"Dining, Entertainment, General Expenses, Travel, Groceries",2022-06-08,Indonesia
    4245,Joint Account,490.33,ACME,"Travel, Groceries, Transportation, Entertainment",2022-08-04,Singapore
    4246,Savings,604.08,Grab,"Transportation, Travel",2022-07-20,Japan
    4247,Savings,180.53,Grab,"Travel, Entertainment, Dining, Transportation",2022-08-28,Singapore
    4248,Savings,631.71,Grab,Groceries,2022-12-14,Indonesia
    4249,Savings,492.36,Google,"Transportation, Entertainment, Dining, Groceries, Travel",2022-08-27,Japan
    4250,Savings,466.2,Starbucks,"Entertainment, Dining",2022-07-15,Singapore
    4251,Joint Account,980.59,Google,"Groceries, Entertainment",2022-06-28,Singapore
    4252,Checking,860.98,Starbucks,Entertainment,2022-07-12,Australia
    4253,Joint Account,977.48,Fairprice,"Dining, Entertainment, General Expenses",2022-07-19,Indonesia
    4254,Savings,677.69,Fairprice,"Groceries, Travel, Entertainment",2022-10-30,Japan
    4255,Savings,210.23,Amazon,"Transportation, Travel, Groceries, Entertainment, General Expenses",2022-10-21,Singapore
    4256,Checking,681.86,ACME,"Dining, Transportation, Groceries",2022-10-02,Singapore
    4257,Checking,529.1,Uber,Travel,2022-10-09,Australia
    4258,Checking,720.04,Fairprice,"Entertainment, Transportation, Dining",2022-10-24,Indonesia
    4259,Checking,254.75,Amazon,"Entertainment, Groceries, Dining",2022-06-29,Indonesia
    4260,Checking,405.46,Amazon,"Entertainment, Transportation, Travel, General Expenses, Groceries, Dining",2022-06-21,Indonesia
    4261,Joint Account,979.47,Gojek,"Dining, General Expenses, Travel",2022-12-25,Indonesia
    4262,Checking,80.37,Walmart,"General Expenses, Groceries, Travel, Entertainment, Transportation",2022-09-24,Indonesia
    4263,Joint Account,692.46,ACME,"Dining, Entertainment",2022-11-23,Australia
    4264,Checking,182.36,Google,Entertainment,2022-12-21,Japan
    4265,Savings,204.8,Walmart,"Dining, General Expenses, Travel, Groceries, Transportation",2022-06-09,Japan
    4266,Joint Account,119.64,ACME,"Entertainment, Groceries, General Expenses, Transportation",2022-08-26,Singapore
    4267,Savings,309.17,Gojek,"Travel, General Expenses, Dining, Transportation, Entertainment",2022-11-27,Indonesia
    4268,Savings,544.02,Starbucks,"General Expenses, Travel, Transportation",2022-09-07,Australia
    4269,Joint Account,990.27,Starbucks,"Dining, Groceries, Travel",2022-09-11,Japan
    4270,Joint Account,416.91,Fairprice,"Travel, Groceries, General Expenses, Entertainment, Transportation",2022-10-15,Japan
    4271,Savings,156.73,Walmart,Groceries,2022-10-13,Australia
    4272,Joint Account,399.3,Gojek,"General Expenses, Dining",2022-12-11,Japan
    4273,Savings,34.24,Uber,"Travel, Entertainment, General Expenses, Transportation",2022-06-25,Japan
    4274,Checking,68.26,Fairprice,Entertainment,2022-11-26,Australia
    4275,Checking,546.8,Grab,"Entertainment, Transportation, General Expenses",2022-11-14,Indonesia
    4276,Checking,221.01,Google,"Travel, Transportation, Dining, General Expenses, Groceries",2022-07-06,Singapore
    4277,Savings,997.67,Amazon,Dining,2022-12-25,Indonesia
    4278,Checking,732.17,Fairprice,"Transportation, Entertainment, Dining, General Expenses",2022-07-25,Singapore
    4279,Checking,921.19,Walmart,"Transportation, Groceries, General Expenses, Travel",2022-07-06,Australia
    4280,Checking,670.81,ACME,"Entertainment, Dining",2022-10-24,Indonesia
    4281,Checking,93.64,Walmart,"Travel, Groceries, Transportation, Dining, General Expenses",2022-12-30,Indonesia
    4282,Savings,421.0,Starbucks,"General Expenses, Travel, Dining, Transportation, Groceries",2022-11-11,Japan
    4283,Joint Account,54.21,Amazon,"Travel, Groceries, Dining, Entertainment",2022-07-23,Singapore
    4284,Joint Account,530.82,Uber,"General Expenses, Dining, Travel, Groceries, Transportation",2022-08-03,Japan
    4285,Checking,707.44,ACME,Travel,2022-10-02,Indonesia
    4286,Savings,160.79,Google,"Dining, Entertainment, General Expenses, Travel, Transportation",2022-10-29,Australia
    4287,Checking,122.31,ACME,"Groceries, General Expenses, Entertainment, Travel",2022-08-20,Indonesia
    4288,Savings,711.87,Gojek,"Travel, Dining, General Expenses, Transportation, Entertainment",2022-08-03,Australia
    4289,Checking,961.84,Uber,"Travel, Groceries",2022-09-13,Singapore
    4290,Joint Account,624.61,Gojek,"Groceries, Entertainment, Travel",2022-06-11,Japan
    4291,Savings,373.57,Uber,"General Expenses, Transportation, Entertainment, Travel, Dining, Groceries",2022-11-20,Singapore
    4292,Checking,210.66,Grab,"Transportation, Travel, Entertainment, General Expenses, Dining",2022-10-03,Australia
    4293,Checking,84.21,ACME,"Dining, General Expenses, Travel, Transportation",2022-07-03,Australia
    4294,Joint Account,878.62,Walmart,"Dining, Entertainment, Transportation, General Expenses, Travel",2022-08-05,Japan
    4295,Savings,97.16,ACME,"Groceries, Transportation, Dining",2022-09-10,Australia
    4296,Savings,695.27,Fairprice,"Entertainment, General Expenses, Transportation, Groceries, Travel, Dining",2022-11-15,Japan
    4297,Checking,609.47,Fairprice,"Travel, General Expenses, Entertainment, Transportation",2022-11-25,Australia
    4298,Checking,213.1,Google,"General Expenses, Groceries, Travel, Dining",2022-06-07,Indonesia
    4299,Savings,562.69,ACME,"Transportation, Groceries, General Expenses, Entertainment",2022-08-04,Japan
    4300,Checking,713.03,Uber,"Transportation, Travel, Groceries, General Expenses",2022-08-16,Japan
    4301,Joint Account,936.68,Fairprice,"Groceries, Transportation",2022-10-18,Singapore
    4302,Savings,857.76,Fairprice,"Entertainment, Groceries, Transportation, General Expenses",2022-06-06,Japan
    4303,Checking,648.77,Grab,Groceries,2022-07-02,Indonesia
    4304,Savings,454.01,Fairprice,"General Expenses, Entertainment, Groceries, Transportation, Travel, Dining",2022-11-26,Singapore
    4305,Savings,603.91,Amazon,"Transportation, Dining, General Expenses, Groceries, Entertainment",2022-07-16,Singapore
    4306,Savings,326.24,Grab,"Dining, General Expenses",2022-10-10,Singapore
    4307,Joint Account,559.83,ACME,"General Expenses, Transportation, Travel, Dining",2022-06-28,Singapore
    4308,Joint Account,424.8,Fairprice,"General Expenses, Transportation, Dining, Groceries",2022-10-19,Japan
    4309,Checking,516.92,Gojek,Dining,2022-09-05,Australia
    4310,Checking,474.91,Fairprice,"Groceries, Entertainment",2022-07-21,Japan
    4311,Checking,430.7,Grab,Dining,2022-09-15,Australia
    4312,Checking,411.08,Amazon,Transportation,2022-06-07,Singapore
    4313,Checking,2.18,Gojek,"Travel, Groceries, Transportation, Entertainment, Dining, General Expenses",2022-09-10,Australia
    4314,Joint Account,337.74,Grab,"Travel, Transportation, General Expenses",2022-10-01,Singapore
    4315,Savings,494.33,Walmart,"General Expenses, Transportation, Dining",2022-12-02,Japan
    4316,Savings,322.93,ACME,"Dining, Transportation, Groceries, General Expenses, Entertainment, Travel",2022-09-18,Japan
    4317,Joint Account,264.83,Starbucks,"Dining, Entertainment, Groceries",2022-08-04,Japan
    4318,Joint Account,233.5,Walmart,"Travel, Dining, General Expenses, Entertainment",2022-08-14,Australia
    4319,Checking,105.77,Google,"Entertainment, Groceries, Transportation, Travel, General Expenses",2022-06-26,Australia
    4320,Checking,353.99,Walmart,"Entertainment, Groceries, General Expenses, Travel",2022-07-15,Australia
    4321,Savings,195.09,ACME,"Transportation, Entertainment",2022-11-15,Japan
    4322,Joint Account,456.76,ACME,Groceries,2022-12-16,Singapore
    4323,Joint Account,239.92,Grab,"Groceries, Dining",2022-12-03,Australia
    4324,Joint Account,924.17,Uber,"Dining, Groceries, Entertainment, Travel",2022-07-08,Japan
    4325,Checking,873.36,Uber,"Transportation, Entertainment, General Expenses, Groceries, Dining, Travel",2022-07-02,Indonesia
    4326,Joint Account,924.93,Google,"Dining, Entertainment, Groceries, Travel",2022-10-12,Australia
    4327,Checking,80.24,Fairprice,"Transportation, Entertainment, General Expenses, Dining",2022-10-12,Japan
    4328,Checking,742.39,Walmart,"Dining, General Expenses",2022-11-10,Australia
    4329,Joint Account,412.25,ACME,"Entertainment, Dining, Travel, General Expenses, Transportation, Groceries",2022-08-13,Japan
    4330,Checking,876.17,Gojek,"General Expenses, Groceries, Entertainment",2022-12-24,Indonesia
    4331,Checking,908.39,Fairprice,"Travel, Entertainment, Transportation",2022-09-11,Australia
    4332,Savings,232.84,ACME,"General Expenses, Dining",2022-06-20,Australia
    4333,Checking,717.97,Fairprice,"Entertainment, Travel, General Expenses, Transportation",2022-10-10,Indonesia
    4334,Savings,933.03,Fairprice,"Groceries, Dining",2022-09-13,Singapore
    4335,Savings,847.0,Starbucks,Groceries,2022-10-18,Japan
    4336,Checking,978.27,Google,"Dining, Groceries",2022-08-21,Indonesia
    4337,Savings,306.68,ACME,"Transportation, Entertainment",2022-07-14,Australia
    4338,Savings,126.15,Fairprice,"Transportation, General Expenses",2022-07-16,Japan
    4339,Joint Account,687.38,Amazon,"Transportation, Dining, Groceries",2022-08-13,Singapore
    4340,Checking,353.17,Grab,"Dining, Entertainment, General Expenses, Transportation, Travel",2022-07-22,Australia
    4341,Joint Account,35.64,Fairprice,Dining,2022-07-14,Australia
    4342,Checking,443.8,Walmart,"General Expenses, Travel, Entertainment, Transportation",2022-12-23,Australia
    4343,Savings,356.01,Google,"Travel, Groceries",2022-09-28,Singapore
    4344,Checking,598.52,Walmart,"Travel, Entertainment",2022-12-25,Australia
    4345,Savings,566.72,Walmart,"Entertainment, General Expenses, Groceries",2022-06-26,Australia
    4346,Savings,559.42,Starbucks,"General Expenses, Entertainment, Transportation, Groceries, Dining",2022-07-12,Indonesia
    4347,Joint Account,734.07,Grab,"Dining, General Expenses",2022-09-05,Australia
    4348,Checking,613.85,Fairprice,Entertainment,2022-12-01,Australia
    4349,Joint Account,636.04,ACME,"Dining, Entertainment",2022-11-24,Japan
    4350,Checking,404.56,Google,"General Expenses, Groceries",2022-06-25,Indonesia
    4351,Joint Account,210.51,Fairprice,General Expenses,2022-10-31,Singapore
    4352,Checking,704.22,Google,"Transportation, General Expenses, Groceries, Travel",2022-08-29,Japan
    4353,Savings,818.92,Google,"Groceries, Transportation, General Expenses, Travel, Dining, Entertainment",2022-07-14,Indonesia
    4354,Joint Account,822.48,Gojek,Travel,2022-09-25,Indonesia
    4355,Joint Account,327.06,Uber,"Transportation, Dining, Groceries, General Expenses",2022-10-06,Japan
    4356,Checking,667.87,ACME,"Transportation, General Expenses, Groceries, Travel, Entertainment",2022-12-20,Japan
    4357,Checking,227.86,Starbucks,"Transportation, Groceries, Dining, General Expenses, Entertainment, Travel",2022-07-24,Australia
    4358,Savings,261.86,Fairprice,"Transportation, Groceries",2022-08-22,Japan
    4359,Joint Account,101.58,Fairprice,"Entertainment, Travel",2022-12-13,Indonesia
    4360,Savings,54.75,Starbucks,Transportation,2022-06-27,Japan
    4361,Joint Account,651.0,Starbucks,"Dining, Travel, Entertainment, Transportation, Groceries",2022-12-02,Australia
    4362,Checking,796.41,Gojek,"Groceries, Transportation, Travel",2022-12-12,Japan
    4363,Checking,13.63,Fairprice,"Entertainment, Travel, Dining",2022-06-30,Australia
    4364,Joint Account,280.29,Google,"Entertainment, General Expenses, Dining, Transportation, Travel",2022-12-18,Australia
    4365,Checking,510.48,Google,Entertainment,2022-09-07,Singapore
    4366,Checking,700.69,Google,"General Expenses, Dining, Transportation, Groceries, Travel",2022-06-05,Indonesia
    4367,Savings,524.85,Walmart,"Dining, Entertainment, Transportation, Groceries",2022-07-30,Singapore
    4368,Checking,936.28,Uber,Transportation,2022-09-04,Australia
    4369,Checking,589.52,Walmart,"Dining, Travel, Entertainment, Transportation, General Expenses",2022-09-26,Japan
    4370,Checking,395.9,Grab,"Travel, Transportation, General Expenses, Groceries, Dining",2022-10-28,Japan
    4371,Joint Account,425.56,Starbucks,"Dining, General Expenses, Groceries",2022-07-01,Indonesia
    4372,Checking,887.23,Google,"Transportation, Travel, Dining",2022-11-03,Japan
    4373,Checking,159.76,Google,"Transportation, Entertainment, Groceries, General Expenses, Dining, Travel",2022-07-22,Singapore
    4374,Joint Account,674.19,Gojek,"Entertainment, General Expenses, Groceries, Transportation",2022-11-07,Singapore
    4375,Savings,766.48,Gojek,"Transportation, Travel, General Expenses, Groceries, Entertainment",2022-06-14,Singapore
    4376,Joint Account,551.58,Amazon,Transportation,2022-07-16,Japan
    4377,Joint Account,262.65,Walmart,"General Expenses, Entertainment, Transportation, Groceries",2022-07-06,Indonesia
    4378,Savings,145.75,Starbucks,"Transportation, Groceries, Entertainment, Travel, Dining, General Expenses",2022-10-31,Singapore
    4379,Joint Account,211.12,Gojek,"Entertainment, General Expenses, Transportation, Groceries, Dining",2022-06-15,Japan
    4380,Savings,192.15,Grab,"Transportation, Travel, Groceries, General Expenses, Entertainment, Dining",2022-07-07,Japan
    4381,Joint Account,196.88,Google,"Groceries, Transportation",2022-06-11,Australia
    4382,Joint Account,340.68,ACME,Transportation,2022-07-02,Australia
    4383,Checking,836.51,Grab,"Entertainment, Groceries, Travel, Dining",2022-06-15,Japan
    4384,Checking,500.77,Fairprice,"Transportation, Entertainment, Travel, Groceries",2022-11-13,Singapore
    4385,Savings,76.36,Starbucks,"General Expenses, Transportation, Dining, Groceries, Entertainment, Travel",2022-08-15,Singapore
    4386,Checking,868.13,Uber,"Entertainment, General Expenses, Transportation",2022-08-28,Indonesia
    4387,Checking,494.85,Grab,"Groceries, Travel, General Expenses, Entertainment",2022-09-13,Australia
    4388,Joint Account,716.72,Walmart,"Dining, Travel, General Expenses, Groceries, Transportation, Entertainment",2022-07-22,Indonesia
    4389,Savings,907.87,Grab,"Transportation, Groceries, Dining",2022-06-20,Australia
    4390,Savings,894.99,Fairprice,"Travel, Dining, General Expenses, Entertainment, Groceries",2022-11-28,Singapore
    4391,Savings,871.96,Google,"Transportation, Travel, Entertainment, Dining, Groceries",2022-06-05,Indonesia
    4392,Joint Account,490.5,Gojek,"General Expenses, Travel, Entertainment, Groceries",2022-07-18,Singapore
    4393,Joint Account,635.29,Amazon,Entertainment,2022-10-01,Singapore
    4394,Joint Account,14.88,Amazon,"Transportation, Entertainment, General Expenses, Dining, Travel, Groceries",2022-07-12,Japan
    4395,Checking,237.02,Grab,"Travel, Dining, Groceries",2022-10-19,Japan
    4396,Savings,70.94,Fairprice,"Dining, General Expenses, Groceries, Transportation, Entertainment, Travel",2022-06-03,Australia
    4397,Joint Account,59.91,ACME,"Travel, General Expenses, Groceries",2022-07-25,Australia
    4398,Checking,29.26,Google,Dining,2022-09-19,Indonesia
    4399,Joint Account,473.16,Starbucks,"Dining, General Expenses, Travel",2022-10-26,Japan
    4400,Checking,213.85,Amazon,"General Expenses, Dining, Travel",2022-07-25,Indonesia
    4401,Joint Account,196.99,Fairprice,"Transportation, Entertainment, Travel, General Expenses, Groceries",2022-12-26,Indonesia
    4402,Joint Account,852.42,Fairprice,"Entertainment, General Expenses, Travel",2022-06-14,Indonesia
    4403,Joint Account,44.2,Google,"Transportation, General Expenses, Dining, Travel, Groceries",2022-12-06,Japan
    4404,Checking,420.05,Walmart,Travel,2022-08-10,Japan
    4405,Savings,414.39,Gojek,"Travel, Groceries",2022-07-11,Singapore
    4406,Savings,137.82,ACME,"Travel, General Expenses, Transportation",2022-08-25,Singapore
    4407,Checking,337.1,Amazon,"Travel, Entertainment, Groceries, Transportation, General Expenses, Dining",2022-10-24,Australia
    4408,Savings,302.26,Gojek,"Entertainment, General Expenses",2022-06-05,Australia
    4409,Checking,217.7,Grab,"General Expenses, Travel, Groceries",2022-11-09,Singapore
    4410,Checking,30.59,Amazon,"Entertainment, Dining, Groceries, Travel, General Expenses, Transportation",2022-09-06,Indonesia
    4411,Joint Account,779.98,Walmart,Entertainment,2022-09-08,Singapore
    4412,Savings,599.2,Amazon,"Transportation, Groceries, Entertainment, Travel, General Expenses",2022-07-29,Indonesia
    4413,Joint Account,701.22,Amazon,"Entertainment, Dining",2022-12-02,Australia
    4414,Checking,723.51,Google,"Transportation, General Expenses, Travel, Groceries",2022-08-28,Indonesia
    4415,Joint Account,811.84,Starbucks,"Transportation, General Expenses",2022-08-28,Singapore
    4416,Checking,142.92,ACME,"Groceries, Dining, General Expenses, Entertainment, Travel",2022-08-10,Japan
    4417,Joint Account,805.64,Gojek,"Travel, Groceries, Dining, General Expenses",2022-11-22,Australia
    4418,Savings,566.2,ACME,"Dining, Transportation, Groceries, Travel, Entertainment",2022-07-08,Singapore
    4419,Checking,719.75,Walmart,"General Expenses, Transportation, Travel, Dining, Entertainment",2022-08-13,Indonesia
    4420,Joint Account,838.85,Amazon,Groceries,2022-07-08,Indonesia
    4421,Checking,36.32,ACME,"Travel, Groceries, Transportation, Entertainment",2022-09-04,Singapore
    4422,Checking,114.91,Gojek,"Entertainment, Transportation",2022-10-19,Japan
    4423,Savings,760.45,Grab,"General Expenses, Transportation, Dining, Travel, Groceries",2022-09-24,Singapore
    4424,Joint Account,278.57,Gojek,"Entertainment, General Expenses, Dining, Groceries, Travel, Transportation",2022-12-12,Singapore
    4425,Savings,616.58,Google,Travel,2022-07-02,Japan
    4426,Joint Account,348.35,Gojek,Groceries,2022-08-08,Indonesia
    4427,Savings,733.08,Gojek,"Transportation, Groceries, Dining, Entertainment, Travel",2022-10-25,Indonesia
    4428,Checking,58.63,Fairprice,"Transportation, Dining, Travel",2022-06-22,Australia
    4429,Joint Account,337.31,Starbucks,"Travel, Groceries, Dining, General Expenses, Entertainment",2022-09-15,Singapore
    4430,Savings,631.76,ACME,"Transportation, Dining, Entertainment",2022-06-02,Australia
    4431,Checking,342.35,Google,Dining,2022-12-09,Indonesia
    4432,Checking,260.49,Uber,"Groceries, Dining, Travel",2022-08-24,Japan
    4433,Savings,104.03,Walmart,Groceries,2022-10-03,Singapore
    4434,Joint Account,308.14,Gojek,"Entertainment, Dining, Groceries, General Expenses, Travel",2022-12-04,Singapore
    4435,Checking,66.82,Uber,"Travel, Groceries, General Expenses, Entertainment, Dining, Transportation",2022-09-29,Indonesia
    4436,Savings,309.21,Amazon,"Dining, Transportation, Groceries, Travel",2022-06-30,Singapore
    4437,Checking,415.27,Fairprice,"Transportation, Travel, Groceries, General Expenses",2022-07-18,Australia
    4438,Joint Account,900.46,Gojek,"Travel, Dining",2022-11-01,Japan
    4439,Savings,909.73,Fairprice,"Entertainment, Dining, Groceries, General Expenses",2022-08-10,Australia
    4440,Savings,759.05,Grab,"Transportation, Entertainment, Travel, Dining",2022-08-02,Indonesia
    4441,Joint Account,141.05,Starbucks,"General Expenses, Transportation, Entertainment, Travel, Dining",2022-08-04,Singapore
    4442,Joint Account,466.7,Gojek,"General Expenses, Groceries, Dining, Travel",2022-10-22,Indonesia
    4443,Checking,885.95,Amazon,"Travel, Groceries, General Expenses, Transportation",2022-06-25,Japan
    4444,Savings,155.97,Uber,"Dining, Transportation, General Expenses, Groceries",2022-08-11,Australia
    4445,Joint Account,696.51,ACME,"Transportation, General Expenses, Travel, Entertainment",2022-11-02,Australia
    4446,Savings,256.56,Walmart,"Transportation, Entertainment, Dining, Groceries, Travel",2022-11-02,Indonesia
    4447,Joint Account,889.38,Gojek,"General Expenses, Transportation, Groceries",2022-09-18,Australia
    4448,Savings,702.04,ACME,"Travel, Transportation, Entertainment",2022-11-04,Indonesia
    4449,Savings,385.84,Grab,"Travel, Entertainment, Transportation, General Expenses",2022-12-23,Indonesia
    4450,Joint Account,573.54,Google,"Dining, Travel, Groceries, General Expenses, Entertainment, Transportation",2022-07-08,Indonesia
    4451,Checking,252.59,Starbucks,"Transportation, Dining, Travel, Groceries, Entertainment",2022-07-30,Indonesia
    4452,Savings,256.28,Walmart,"Dining, Entertainment, Groceries, Transportation",2022-08-18,Singapore
    4453,Savings,498.61,Amazon,"Travel, Transportation, Dining, General Expenses",2022-08-22,Japan
    4454,Savings,670.21,Fairprice,"Groceries, Transportation, Travel, General Expenses, Entertainment",2022-12-08,Japan
    4455,Joint Account,740.77,Uber,"Dining, General Expenses, Travel, Groceries",2022-08-03,Australia
    4456,Checking,244.33,Uber,"Travel, Dining",2022-10-04,Australia
    4457,Joint Account,77.01,Fairprice,Travel,2022-08-18,Japan
    4458,Joint Account,783.63,Grab,"Travel, Dining, Groceries, General Expenses",2022-10-24,Australia
    4459,Joint Account,121.38,Grab,"Entertainment, General Expenses, Travel",2022-07-27,Japan
    4460,Savings,166.43,Walmart,Travel,2022-08-12,Singapore
    4461,Savings,383.62,Starbucks,"Transportation, General Expenses, Entertainment, Groceries",2022-12-14,Singapore
    4462,Checking,512.79,ACME,"General Expenses, Travel, Entertainment",2022-08-18,Singapore
    4463,Checking,550.18,ACME,"Travel, Entertainment, Groceries, General Expenses, Transportation, Dining",2022-11-11,Japan
    4464,Joint Account,573.6,Amazon,"General Expenses, Transportation, Dining, Travel, Groceries",2022-11-08,Indonesia
    4465,Joint Account,791.16,Grab,"Transportation, Travel",2022-11-27,Singapore
    4466,Checking,25.45,Google,"Entertainment, Travel, Groceries, General Expenses",2022-11-11,Singapore
    4467,Joint Account,385.72,Google,Groceries,2022-09-22,Japan
    4468,Savings,819.08,Walmart,"Transportation, Dining, Entertainment, Groceries, General Expenses",2022-11-06,Singapore
    4469,Savings,184.55,Starbucks,Dining,2022-08-03,Japan
    4470,Checking,84.49,Uber,"Groceries, General Expenses, Dining, Travel",2022-08-28,Singapore
    4471,Savings,675.36,Amazon,Transportation,2022-10-08,Indonesia
    4472,Joint Account,19.38,Uber,"Transportation, General Expenses, Travel",2022-06-13,Singapore
    4473,Savings,935.73,Amazon,"Groceries, Travel, Transportation, Entertainment",2022-10-19,Singapore
    4474,Checking,51.29,Amazon,"Travel, Groceries",2022-08-29,Japan
    4475,Savings,623.27,Google,"General Expenses, Dining, Groceries",2022-11-15,Australia
    4476,Joint Account,453.04,Google,"Travel, Transportation",2022-08-01,Indonesia
    4477,Savings,179.09,ACME,"Transportation, Dining",2022-11-06,Japan
    4478,Checking,56.34,ACME,"Groceries, Travel, Dining, General Expenses",2022-08-13,Indonesia
    4479,Joint Account,840.82,Google,Entertainment,2022-08-03,Singapore
    4480,Checking,384.13,Amazon,"Entertainment, Travel, Transportation",2022-06-08,Indonesia
    4481,Checking,609.79,Walmart,"Transportation, Dining, General Expenses, Travel, Groceries",2022-12-18,Indonesia
    4482,Checking,199.16,Walmart,Transportation,2022-06-18,Australia
    4483,Savings,725.09,Amazon,"Entertainment, Transportation, General Expenses, Groceries",2022-09-07,Australia
    4484,Joint Account,428.81,Amazon,"Travel, Transportation",2022-10-05,Australia
    4485,Savings,443.42,Amazon,"Travel, Dining",2022-12-02,Japan
    4486,Checking,829.56,ACME,"General Expenses, Travel",2022-10-28,Japan
    4487,Joint Account,260.3,Uber,"Dining, General Expenses",2022-08-12,Japan
    4488,Joint Account,435.89,Uber,"Travel, Transportation, Entertainment, Groceries, Dining",2022-07-07,Japan
    4489,Savings,610.03,Walmart,"Entertainment, General Expenses",2022-06-20,Singapore
    4490,Checking,884.27,Grab,Travel,2022-08-23,Australia
    4491,Joint Account,349.18,ACME,"Entertainment, Travel, Transportation",2022-09-03,Indonesia
    4492,Joint Account,292.01,Grab,"General Expenses, Groceries, Transportation",2022-08-27,Australia
    4493,Savings,663.43,Amazon,"Transportation, Groceries",2022-07-24,Australia
    4494,Savings,147.15,Walmart,"Groceries, Travel, Dining, Transportation, General Expenses, Entertainment",2022-09-15,Japan
    4495,Checking,473.38,Gojek,"Dining, Travel, Entertainment",2022-08-17,Singapore
    4496,Savings,592.65,Google,"Dining, Groceries, Entertainment",2022-08-13,Singapore
    4497,Joint Account,890.04,Grab,"Groceries, Transportation",2022-06-16,Australia
    4498,Savings,314.74,Gojek,"General Expenses, Dining, Entertainment, Travel",2022-10-03,Australia
    4499,Joint Account,486.85,Gojek,"General Expenses, Entertainment, Groceries, Transportation",2022-07-13,Japan
    4500,Savings,22.46,Grab,"Travel, General Expenses, Entertainment",2022-06-19,Japan
    4501,Joint Account,648.75,Walmart,"Travel, Groceries, Entertainment, General Expenses",2022-06-22,Singapore
    4502,Checking,550.48,Amazon,"Travel, Entertainment, Groceries, Dining, General Expenses, Transportation",2022-07-26,Australia
    4503,Joint Account,22.43,Starbucks,"Groceries, Entertainment, Transportation, General Expenses",2022-09-10,Singapore
    4504,Joint Account,905.41,Google,General Expenses,2022-10-22,Indonesia
    4505,Checking,390.86,Uber,"Dining, Groceries, Travel, Transportation, General Expenses",2022-07-22,Indonesia
    4506,Checking,966.34,Uber,"Entertainment, Dining, Transportation",2022-09-08,Singapore
    4507,Checking,481.29,Fairprice,Travel,2022-11-25,Australia
    4508,Joint Account,557.83,Fairprice,"Travel, Entertainment, Transportation",2022-12-22,Singapore
    4509,Checking,568.32,Fairprice,"Travel, Groceries, General Expenses, Entertainment, Transportation",2022-09-09,Australia
    4510,Checking,538.7,Grab,"Travel, Groceries, Dining, General Expenses, Entertainment, Transportation",2022-11-26,Japan
    4511,Savings,675.75,Gojek,"Groceries, General Expenses, Entertainment, Transportation",2022-12-04,Indonesia
    4512,Joint Account,450.94,Walmart,"Transportation, Entertainment, Travel, Groceries, General Expenses",2022-09-08,Australia
    4513,Savings,567.57,Uber,"Travel, Dining, Transportation, Entertainment",2022-06-15,Singapore
    4514,Joint Account,474.46,Amazon,"Dining, Travel, General Expenses, Transportation, Entertainment, Groceries",2022-08-15,Japan
    4515,Joint Account,686.12,Google,"Travel, Entertainment, General Expenses",2022-07-13,Japan
    4516,Joint Account,236.31,Fairprice,Transportation,2022-08-31,Australia
    4517,Savings,922.29,Google,"Groceries, Transportation, Dining",2022-11-21,Australia
    4518,Savings,793.78,Grab,"Entertainment, Dining, Groceries, Transportation, General Expenses, Travel",2022-06-10,Singapore
    4519,Savings,917.3,Fairprice,Travel,2022-10-15,Singapore
    4520,Savings,499.64,Google,Transportation,2022-06-25,Indonesia
    4521,Savings,140.4,Walmart,Groceries,2022-09-17,Australia
    4522,Checking,513.59,Grab,"General Expenses, Transportation",2022-10-01,Indonesia
    4523,Savings,145.18,Gojek,"General Expenses, Transportation, Dining, Groceries",2022-09-11,Singapore
    4524,Savings,80.45,Walmart,"Transportation, Travel",2022-11-12,Singapore
    4525,Joint Account,806.45,Starbucks,"Dining, Travel, Transportation, Groceries",2022-07-08,Australia
    4526,Joint Account,536.04,Fairprice,"Travel, Groceries, Transportation, Entertainment, General Expenses",2022-10-29,Australia
    4527,Checking,637.25,Walmart,"Groceries, Dining, Entertainment",2022-10-25,Japan
    4528,Checking,965.83,Walmart,"Dining, Entertainment, Transportation",2022-06-20,Australia
    4529,Joint Account,717.54,Amazon,"Groceries, General Expenses, Transportation",2022-10-14,Singapore
    4530,Checking,264.82,ACME,Travel,2022-08-20,Australia
    4531,Joint Account,385.28,Uber,"General Expenses, Travel",2022-07-13,Australia
    4532,Checking,776.41,ACME,Dining,2022-12-03,Singapore
    4533,Joint Account,37.58,Starbucks,"General Expenses, Transportation, Entertainment, Travel, Groceries, Dining",2022-08-09,Indonesia
    4534,Savings,235.14,ACME,"Entertainment, Transportation, Travel",2022-06-08,Japan
    4535,Checking,338.96,Google,"Transportation, Groceries, Travel, Dining, Entertainment",2022-06-12,Australia
    4536,Checking,467.98,Fairprice,"Groceries, Entertainment, Dining, General Expenses, Transportation, Travel",2022-12-16,Japan
    4537,Savings,978.22,Fairprice,"General Expenses, Groceries",2022-07-12,Japan
    4538,Savings,284.4,Grab,"Groceries, Travel, Transportation",2022-12-12,Singapore
    4539,Checking,725.89,ACME,Entertainment,2022-11-05,Indonesia
    4540,Savings,611.32,Uber,Entertainment,2022-11-26,Singapore
    4541,Savings,567.4,Grab,"Dining, Transportation, Travel",2022-11-19,Singapore
    4542,Joint Account,33.79,Gojek,"Entertainment, Travel",2022-06-19,Japan
    4543,Joint Account,121.51,ACME,"Transportation, Dining, General Expenses, Travel, Entertainment",2022-06-17,Singapore
    4544,Savings,215.72,Google,Dining,2022-09-03,Indonesia
    4545,Joint Account,488.3,ACME,"Entertainment, General Expenses",2022-08-31,Indonesia
    4546,Joint Account,284.4,ACME,"Transportation, Entertainment, General Expenses",2022-06-07,Japan
    4547,Checking,201.77,Fairprice,"Travel, Dining, Entertainment",2022-06-17,Singapore
    4548,Joint Account,588.39,Amazon,"Dining, General Expenses, Travel, Groceries, Transportation",2022-06-11,Australia
    4549,Checking,449.18,Amazon,"Transportation, Travel, General Expenses, Dining, Entertainment",2022-10-31,Japan
    4550,Savings,495.36,Gojek,Entertainment,2022-11-23,Australia
    4551,Savings,52.06,Google,"Dining, Groceries, Travel",2022-08-28,Japan
    4552,Joint Account,898.84,Walmart,"Entertainment, Dining, Groceries, Transportation",2022-07-03,Singapore
    4553,Checking,817.64,ACME,"Transportation, Groceries, Entertainment",2022-07-04,Indonesia
    4554,Savings,956.16,Amazon,"Entertainment, General Expenses, Groceries",2022-07-29,Japan
    4555,Checking,714.66,Gojek,"Transportation, Groceries, General Expenses, Entertainment, Travel, Dining",2022-10-14,Australia
    4556,Joint Account,897.27,Google,Dining,2022-10-02,Indonesia
    4557,Joint Account,362.67,Fairprice,"Groceries, Entertainment",2022-06-10,Australia
    4558,Joint Account,623.62,Google,"General Expenses, Transportation, Entertainment, Groceries, Travel",2022-07-20,Japan
    4559,Checking,139.11,Google,"Travel, Entertainment, Transportation",2022-12-16,Australia
    4560,Savings,551.19,Uber,"Transportation, Travel, General Expenses, Groceries, Dining",2022-08-21,Japan
    4561,Joint Account,532.85,Starbucks,Dining,2022-08-21,Japan
    4562,Checking,978.31,Uber,Travel,2022-07-09,Indonesia
    4563,Joint Account,894.52,Grab,"Entertainment, Groceries, General Expenses",2022-06-09,Japan
    4564,Joint Account,92.03,Starbucks,"Groceries, Travel, Dining, General Expenses, Entertainment",2022-06-22,Singapore
    4565,Joint Account,689.1,Fairprice,"Transportation, Groceries, General Expenses, Travel",2022-08-07,Singapore
    4566,Checking,327.89,Fairprice,"General Expenses, Transportation, Groceries, Entertainment, Travel",2022-11-29,Indonesia
    4567,Savings,525.67,Uber,"General Expenses, Dining, Groceries",2022-11-03,Indonesia
    4568,Joint Account,461.41,Gojek,"Entertainment, Transportation, General Expenses, Groceries, Dining",2022-12-09,Indonesia
    4569,Joint Account,878.08,Uber,Groceries,2022-06-18,Singapore
    4570,Checking,257.98,Uber,"General Expenses, Entertainment, Groceries, Transportation",2022-10-01,Australia
    4571,Joint Account,190.83,Starbucks,"General Expenses, Entertainment, Travel",2022-12-01,Japan
    4572,Checking,513.49,Walmart,"Dining, Transportation, Groceries, Entertainment, Travel, General Expenses",2022-11-22,Japan
    4573,Savings,939.07,Google,"Groceries, General Expenses, Entertainment, Travel",2022-12-10,Japan
    4574,Savings,271.04,Fairprice,Dining,2022-12-19,Singapore
    4575,Joint Account,665.69,ACME,"Entertainment, Groceries, Travel, Transportation, General Expenses",2022-09-12,Indonesia
    4576,Checking,233.69,Starbucks,"General Expenses, Travel",2022-09-02,Japan
    4577,Savings,9.27,Gojek,"Transportation, Travel",2022-11-23,Japan
    4578,Joint Account,610.69,Starbucks,"Groceries, Entertainment, Travel, General Expenses",2022-07-08,Australia
    4579,Checking,466.27,Google,"Entertainment, Transportation, Groceries",2022-08-30,Australia
    4580,Joint Account,849.02,Gojek,"Groceries, Entertainment, Travel, General Expenses, Transportation",2022-09-09,Indonesia
    4581,Checking,762.83,Walmart,"Groceries, Entertainment, General Expenses, Transportation, Dining, Travel",2022-07-25,Japan
    4582,Savings,764.41,Grab,"Transportation, Travel, Groceries",2022-10-25,Australia
    4583,Joint Account,470.59,Walmart,"General Expenses, Groceries, Travel",2022-06-08,Japan
    4584,Savings,342.94,Amazon,"Travel, General Expenses",2022-10-05,Singapore
    4585,Joint Account,571.97,Google,"Dining, Travel, Groceries, Entertainment, Transportation",2022-08-13,Singapore
    4586,Checking,83.58,Amazon,"Transportation, Dining, General Expenses, Entertainment",2022-08-28,Indonesia
    4587,Savings,125.62,Google,"Transportation, Entertainment, Dining, Travel, General Expenses, Groceries",2022-08-21,Indonesia
    4588,Joint Account,482.6,Amazon,"Groceries, Entertainment",2022-06-04,Indonesia
    4589,Checking,654.88,Google,"General Expenses, Entertainment, Dining, Groceries",2022-09-05,Singapore
    4590,Joint Account,785.16,Google,"Dining, Travel, General Expenses, Groceries",2022-10-17,Singapore
    4591,Checking,397.93,Grab,Travel,2022-12-24,Indonesia
    4592,Savings,137.31,Walmart,"Entertainment, Groceries, Transportation",2022-09-13,Australia
    4593,Joint Account,297.82,Fairprice,"Dining, General Expenses, Entertainment",2022-12-10,Japan
    4594,Checking,801.73,Fairprice,"Entertainment, Travel, General Expenses",2022-06-03,Singapore
    4595,Joint Account,315.74,Uber,"Transportation, Dining, Groceries",2022-10-18,Singapore
    4596,Joint Account,873.88,Walmart,"Transportation, Entertainment, General Expenses, Travel, Groceries, Dining",2022-06-03,Indonesia
    4597,Savings,503.67,Amazon,"Entertainment, Transportation, Dining, Travel, Groceries, General Expenses",2022-09-29,Australia
    4598,Joint Account,473.51,Uber,Entertainment,2022-11-20,Indonesia
    4599,Savings,258.84,Gojek,"Transportation, Travel, Dining, Groceries, General Expenses",2022-11-17,Singapore
    4600,Savings,944.06,Fairprice,"Groceries, General Expenses, Entertainment, Transportation, Travel, Dining",2022-08-17,Japan
    4601,Joint Account,660.57,Walmart,"General Expenses, Groceries, Entertainment, Transportation, Travel",2022-07-21,Japan
    4602,Savings,109.01,Fairprice,"Travel, Transportation",2022-09-20,Indonesia
    4603,Checking,242.11,Fairprice,"Travel, Groceries, Dining, General Expenses",2022-12-25,Indonesia
    4604,Joint Account,418.24,Amazon,"General Expenses, Travel, Transportation, Entertainment",2022-12-10,Singapore
    4605,Joint Account,630.13,Google,"Transportation, Dining, General Expenses, Travel, Entertainment, Groceries",2022-11-13,Singapore
    4606,Checking,71.57,Grab,"Entertainment, General Expenses, Transportation, Travel",2022-11-22,Australia
    4607,Savings,400.16,Grab,Groceries,2022-11-06,Japan
    4608,Joint Account,974.42,Grab,"Groceries, Dining, Travel",2022-08-29,Singapore
    4609,Joint Account,942.81,Gojek,"Entertainment, Travel, Transportation, Groceries",2022-07-31,Singapore
    4610,Checking,420.38,ACME,Travel,2022-11-22,Singapore
    4611,Joint Account,38.66,Google,"Transportation, Dining, Groceries, Entertainment",2022-09-21,Japan
    4612,Joint Account,289.63,Fairprice,Transportation,2022-07-28,Indonesia
    4613,Savings,743.31,Gojek,"Entertainment, Transportation, General Expenses, Groceries, Travel, Dining",2022-09-04,Australia
    4614,Joint Account,894.25,Amazon,"Entertainment, Dining, Transportation, General Expenses, Groceries",2022-06-17,Singapore
    4615,Savings,791.25,Walmart,Entertainment,2022-12-12,Japan
    4616,Checking,587.56,Gojek,Entertainment,2022-10-23,Australia
    4617,Joint Account,678.73,Starbucks,Entertainment,2022-07-22,Australia
    4618,Joint Account,548.76,Uber,"Entertainment, Transportation, General Expenses",2022-10-21,Singapore
    4619,Savings,24.98,Grab,"Transportation, Dining, Travel, Entertainment",2022-11-16,Singapore
    4620,Checking,186.33,Gojek,"Travel, Entertainment",2022-09-09,Japan
    4621,Joint Account,626.17,ACME,"Dining, General Expenses, Groceries, Entertainment, Transportation",2022-09-26,Japan
    4622,Joint Account,287.19,Grab,"Dining, Transportation, Groceries, Travel, Entertainment, General Expenses",2022-12-14,Japan
    4623,Savings,16.51,ACME,"Entertainment, General Expenses, Transportation",2022-08-30,Japan
    4624,Savings,557.29,Gojek,General Expenses,2022-06-10,Japan
    4625,Checking,218.6,Amazon,"Travel, Dining, Groceries, Entertainment",2022-07-08,Australia
    4626,Joint Account,106.96,Uber,Dining,2022-09-24,Singapore
    4627,Joint Account,799.73,ACME,"Travel, Dining, Transportation, General Expenses",2022-10-27,Indonesia
    4628,Joint Account,832.48,Fairprice,"Entertainment, Transportation, Travel, Groceries, Dining",2022-07-26,Australia
    4629,Joint Account,383.8,Uber,"Transportation, Entertainment, Groceries",2022-07-22,Australia
    4630,Savings,673.25,ACME,"Groceries, Transportation, Travel, General Expenses, Dining, Entertainment",2022-10-11,Australia
    4631,Joint Account,67.04,Walmart,"Groceries, Travel, General Expenses",2022-10-20,Japan
    4632,Savings,734.13,Amazon,"General Expenses, Dining, Transportation, Groceries, Travel, Entertainment",2022-12-26,Australia
    4633,Savings,508.91,Amazon,"General Expenses, Entertainment, Groceries, Transportation, Dining",2022-09-12,Japan
    4634,Checking,16.47,Grab,"Dining, Transportation",2022-12-21,Indonesia
    4635,Checking,537.76,Walmart,"Groceries, Transportation, Dining, Travel, Entertainment, General Expenses",2022-06-07,Indonesia
    4636,Joint Account,149.51,Walmart,"Entertainment, Transportation, Travel",2022-08-16,Japan
    4637,Checking,195.74,Walmart,"Entertainment, Dining",2022-11-25,Indonesia
    4638,Checking,599.13,Starbucks,Transportation,2022-06-17,Singapore
    4639,Savings,53.1,Fairprice,"Dining, Travel, Entertainment, Groceries, General Expenses",2022-07-27,Singapore
    4640,Joint Account,324.87,ACME,"Entertainment, Dining",2022-08-17,Singapore
    4641,Savings,932.15,Starbucks,"Groceries, Transportation, Travel, Entertainment",2022-07-31,Singapore
    4642,Checking,469.3,Starbucks,Transportation,2022-06-27,Australia
    4643,Checking,356.39,Google,"Transportation, Dining, Entertainment",2022-10-18,Australia
    4644,Checking,908.21,ACME,"Dining, Entertainment, Travel, Transportation, Groceries, General Expenses",2022-09-02,Japan
    4645,Savings,813.73,Walmart,"Travel, Transportation, General Expenses, Dining, Groceries, Entertainment",2022-09-04,Singapore
    4646,Checking,700.9,Gojek,"Dining, Travel, Groceries",2022-10-18,Australia
    4647,Savings,375.52,Gojek,Transportation,2022-11-30,Japan
    4648,Savings,669.98,Amazon,"General Expenses, Transportation, Dining, Groceries",2022-08-26,Indonesia
    4649,Checking,343.35,Starbucks,"General Expenses, Dining, Travel, Transportation, Entertainment, Groceries",2022-11-15,Australia
    4650,Savings,799.93,Fairprice,Entertainment,2022-12-08,Indonesia
    4651,Joint Account,362.71,Grab,Groceries,2022-11-25,Australia
    4652,Checking,952.33,Starbucks,"Dining, Entertainment, Groceries, Travel, Transportation, General Expenses",2022-06-06,Singapore
    4653,Savings,625.3,Walmart,"Travel, Entertainment, Groceries, Dining, Transportation",2022-07-29,Japan
    4654,Joint Account,247.53,Uber,"Groceries, Entertainment, Dining",2022-07-27,Indonesia
    4655,Checking,242.45,Google,General Expenses,2022-11-11,Japan
    4656,Savings,336.79,Fairprice,Groceries,2022-10-18,Australia
    4657,Checking,973.19,Google,Groceries,2022-09-15,Singapore
    4658,Savings,64.03,Fairprice,Groceries,2022-08-23,Japan
    4659,Checking,732.96,ACME,"General Expenses, Transportation",2022-07-15,Indonesia
    4660,Joint Account,280.25,Fairprice,"Entertainment, General Expenses, Travel",2022-07-02,Japan
    4661,Joint Account,275.2,Uber,"Entertainment, Transportation, Dining, General Expenses, Travel, Groceries",2022-12-06,Australia
    4662,Checking,382.26,Google,Travel,2022-12-02,Australia
    4663,Savings,429.77,Gojek,"Transportation, General Expenses, Travel, Groceries",2022-08-13,Australia
    4664,Joint Account,685.76,Uber,"Dining, Entertainment",2022-12-09,Singapore
    4665,Checking,47.74,Google,"Transportation, Travel, Dining",2022-10-08,Singapore
    4666,Joint Account,941.92,Starbucks,"Entertainment, Dining, Groceries, Travel",2022-08-21,Japan
    4667,Checking,736.72,ACME,"General Expenses, Transportation, Groceries",2022-09-23,Japan
    4668,Savings,104.62,ACME,"Groceries, Dining, General Expenses, Entertainment, Travel",2022-07-24,Australia
    4669,Savings,659.77,ACME,"Entertainment, Travel, Dining",2022-08-13,Japan
    4670,Savings,683.29,Starbucks,Entertainment,2022-09-06,Singapore
    4671,Checking,644.94,Uber,Transportation,2022-11-23,Indonesia
    4672,Checking,751.11,Fairprice,Entertainment,2022-09-23,Japan
    4673,Checking,631.77,Walmart,"Transportation, Groceries, General Expenses",2022-08-09,Indonesia
    4674,Checking,726.8,ACME,"Groceries, Travel, Dining, Entertainment",2022-12-05,Japan
    4675,Savings,753.6,Fairprice,"Groceries, Transportation, General Expenses, Entertainment",2022-06-07,Japan
    4676,Savings,767.75,Fairprice,"Transportation, Travel, Dining, General Expenses",2022-10-10,Australia
    4677,Checking,936.76,Starbucks,"Entertainment, Groceries",2022-08-05,Indonesia
    4678,Joint Account,239.94,Uber,"Transportation, General Expenses",2022-12-28,Indonesia
    4679,Savings,322.3,ACME,"General Expenses, Groceries, Transportation, Dining, Entertainment, Travel",2022-11-30,Australia
    4680,Joint Account,718.53,Google,"Transportation, Travel, General Expenses",2022-12-13,Australia
    4681,Savings,46.62,Grab,Groceries,2022-07-15,Singapore
    4682,Checking,15.29,Grab,"Dining, Travel, Groceries, Transportation, Entertainment, General Expenses",2022-08-02,Japan
    4683,Savings,266.9,Starbucks,Travel,2022-11-15,Australia
    4684,Savings,573.98,Walmart,"Transportation, Travel, Dining",2022-07-30,Japan
    4685,Checking,776.56,Amazon,"Transportation, Dining, Travel, Entertainment",2022-10-01,Australia
    4686,Joint Account,479.58,Amazon,"Entertainment, Travel, General Expenses, Transportation, Groceries",2022-08-21,Indonesia
    4687,Checking,104.68,Grab,"Transportation, Travel, Dining, General Expenses, Entertainment, Groceries",2022-11-04,Japan
    4688,Savings,353.62,Amazon,"General Expenses, Groceries, Transportation",2022-11-23,Japan
    4689,Joint Account,471.37,Uber,"Groceries, Entertainment, Transportation, Dining, General Expenses, Travel",2022-10-25,Indonesia
    4690,Savings,112.76,Uber,"General Expenses, Travel",2022-06-23,Indonesia
    4691,Savings,353.74,Uber,"Entertainment, Transportation, Groceries, General Expenses",2022-10-17,Japan
    4692,Savings,135.66,Gojek,"Travel, Groceries, General Expenses, Entertainment, Transportation",2022-07-14,Indonesia
    4693,Checking,203.88,Walmart,"Travel, General Expenses",2022-10-23,Australia
    4694,Joint Account,138.71,Amazon,"General Expenses, Entertainment, Groceries",2022-09-29,Indonesia
    4695,Savings,480.28,Walmart,"General Expenses, Entertainment, Groceries",2022-06-08,Singapore
    4696,Checking,579.41,Gojek,"General Expenses, Groceries, Transportation",2022-10-25,Australia
    4697,Savings,629.74,Gojek,General Expenses,2022-11-07,Indonesia
    4698,Joint Account,981.4,Uber,"Travel, Dining, Entertainment",2022-07-29,Singapore
    4699,Savings,329.29,Walmart,"Transportation, General Expenses, Entertainment",2022-08-04,Singapore
    4700,Savings,670.94,Uber,Travel,2022-06-24,Japan
    4701,Joint Account,800.28,Walmart,"Travel, General Expenses, Transportation, Dining, Groceries",2022-11-17,Singapore
    4702,Savings,480.76,Gojek,"Entertainment, Travel, Dining, General Expenses, Groceries",2022-08-28,Japan
    4703,Joint Account,584.51,Amazon,Groceries,2022-07-06,Indonesia
    4704,Joint Account,602.18,Amazon,"Travel, Entertainment, General Expenses, Dining",2022-09-04,Singapore
    4705,Savings,344.81,Uber,"Dining, General Expenses, Groceries",2022-08-31,Australia
    4706,Checking,561.79,Gojek,"Groceries, General Expenses, Dining, Travel, Transportation",2022-11-28,Singapore
    4707,Joint Account,275.35,Gojek,"General Expenses, Entertainment, Groceries, Travel, Dining, Transportation",2022-06-07,Japan
    4708,Savings,504.77,Fairprice,Entertainment,2022-09-28,Indonesia
    4709,Savings,888.23,Google,"Travel, Entertainment, General Expenses, Dining, Transportation, Groceries",2022-12-13,Australia
    4710,Checking,343.93,Fairprice,"Dining, Travel, Transportation, Entertainment",2022-10-08,Japan
    4711,Joint Account,231.09,Walmart,"General Expenses, Travel, Transportation",2022-06-12,Australia
    4712,Checking,485.93,Fairprice,Transportation,2022-10-05,Australia
    4713,Checking,472.24,Gojek,"Travel, Dining, Entertainment",2022-12-08,Indonesia
    4714,Savings,461.24,Uber,"Travel, Entertainment, Transportation",2022-09-15,Australia
    4715,Joint Account,973.82,Walmart,"Groceries, Entertainment, Transportation, Travel, General Expenses, Dining",2022-09-12,Australia
    4716,Checking,192.47,Amazon,"Entertainment, Dining, General Expenses, Groceries, Transportation",2022-06-12,Japan
    4717,Joint Account,957.64,ACME,"General Expenses, Transportation, Dining, Entertainment, Groceries, Travel",2022-12-06,Japan
    4718,Checking,568.43,Uber,"Dining, Travel, General Expenses",2022-08-27,Australia
    4719,Checking,925.01,Fairprice,"Dining, Transportation, Groceries, General Expenses, Entertainment, Travel",2022-09-14,Indonesia
    4720,Joint Account,996.97,Walmart,"Entertainment, Groceries, Transportation",2022-10-26,Indonesia
    4721,Checking,324.06,Fairprice,"Entertainment, Groceries, General Expenses, Dining, Travel, Transportation",2022-09-14,Singapore
    4722,Checking,232.95,Amazon,"Dining, Transportation, Groceries, Travel, General Expenses",2022-12-05,Australia
    4723,Joint Account,288.95,Gojek,"Groceries, Transportation, Travel",2022-09-08,Singapore
    4724,Savings,981.42,Starbucks,Groceries,2022-11-12,Singapore
    4725,Checking,975.1,Gojek,"Entertainment, Dining, General Expenses, Travel, Groceries",2022-11-16,Indonesia
    4726,Checking,90.26,Fairprice,"General Expenses, Travel, Transportation, Entertainment, Groceries",2022-06-16,Australia
    4727,Joint Account,473.67,Starbucks,"Groceries, Transportation, Entertainment",2022-07-18,Australia
    4728,Joint Account,743.66,Gojek,"Groceries, Dining, Transportation, General Expenses",2022-06-01,Singapore
    4729,Checking,288.92,Grab,General Expenses,2022-10-30,Indonesia
    4730,Savings,640.94,Grab,Transportation,2022-08-02,Japan
    4731,Savings,0.33,ACME,"Travel, Dining, Entertainment, General Expenses, Groceries, Transportation",2022-06-09,Japan
    4732,Savings,43.72,ACME,"General Expenses, Travel, Transportation, Entertainment, Groceries",2022-07-13,Japan
    4733,Joint Account,522.91,Walmart,"Dining, Transportation, Travel, General Expenses, Entertainment",2022-10-19,Japan
    4734,Savings,820.89,Grab,"Entertainment, Groceries, Transportation",2022-12-12,Japan
    4735,Checking,12.54,Gojek,"Transportation, Dining, Travel",2022-10-29,Australia
    4736,Joint Account,680.4,Amazon,"Groceries, General Expenses",2022-10-18,Singapore
    4737,Checking,643.64,Gojek,"Dining, Travel, Groceries, Entertainment, Transportation",2022-12-26,Australia
    4738,Checking,260.71,Amazon,"Travel, Groceries, Transportation, Entertainment, General Expenses, Dining",2022-09-30,Australia
    4739,Savings,557.4,Walmart,"Entertainment, Dining, Travel, General Expenses, Transportation, Groceries",2022-06-02,Singapore
    4740,Joint Account,261.86,Amazon,Groceries,2022-09-14,Indonesia
    4741,Checking,186.58,Starbucks,"Groceries, Dining",2022-11-24,Australia
    4742,Joint Account,770.98,Walmart,"Transportation, Dining",2022-09-02,Indonesia
    4743,Savings,929.07,Gojek,"Groceries, Travel, Transportation",2022-10-24,Singapore
    4744,Savings,170.82,Fairprice,"Entertainment, Dining, Transportation, Groceries, Travel",2022-10-07,Japan
    4745,Joint Account,155.08,ACME,"General Expenses, Dining, Groceries",2022-09-18,Australia
    4746,Joint Account,189.09,Google,"Entertainment, Transportation",2022-08-16,Indonesia
    4747,Savings,194.43,Amazon,"General Expenses, Travel",2022-06-15,Australia
    4748,Checking,127.29,Amazon,Entertainment,2022-06-13,Japan
    4749,Savings,633.45,Amazon,"Entertainment, Dining, General Expenses",2022-11-28,Australia
    4750,Checking,563.76,Starbucks,"Travel, Groceries, Transportation, Dining, Entertainment, General Expenses",2022-12-29,Australia
    4751,Joint Account,43.65,Uber,Travel,2022-06-08,Japan
    4752,Savings,235.84,Amazon,"Dining, Travel, Groceries, Entertainment, Transportation, General Expenses",2022-06-29,Japan
    4753,Savings,979.44,Fairprice,"Groceries, General Expenses, Travel",2022-08-07,Indonesia
    4754,Savings,887.3,Grab,"Dining, Transportation",2022-08-07,Japan
    4755,Joint Account,31.16,Starbucks,"General Expenses, Transportation, Entertainment",2022-06-02,Indonesia
    4756,Checking,641.56,Uber,"Dining, Travel, Transportation",2022-08-12,Singapore
    4757,Savings,740.83,Starbucks,"Dining, Groceries, Entertainment",2022-09-02,Indonesia
    4758,Savings,862.73,Google,"Groceries, Transportation, Dining, Travel",2022-12-14,Australia
    4759,Joint Account,43.44,ACME,"General Expenses, Entertainment, Groceries",2022-08-03,Australia
    4760,Checking,194.64,Uber,"Dining, Entertainment, Transportation, Travel, General Expenses",2022-12-29,Singapore
    4761,Checking,385.53,Walmart,"Dining, Entertainment, Transportation, Travel, General Expenses",2022-10-22,Indonesia
    4762,Checking,518.07,Fairprice,"Groceries, Transportation, Travel, Dining, Entertainment",2022-09-29,Japan
    4763,Joint Account,930.82,Uber,"Entertainment, Travel, General Expenses",2022-12-21,Indonesia
    4764,Joint Account,634.94,Amazon,"General Expenses, Travel, Groceries",2022-10-12,Indonesia
    4765,Checking,515.17,Amazon,"General Expenses, Groceries, Transportation, Dining, Travel",2022-09-21,Japan
    4766,Checking,295.22,Grab,"Entertainment, Groceries, Travel, Transportation, Dining",2022-07-02,Singapore
    4767,Checking,453.46,Amazon,"Entertainment, General Expenses, Groceries, Dining, Transportation, Travel",2022-06-07,Japan
    4768,Checking,617.45,Google,"Travel, Entertainment, Transportation, Groceries, Dining",2022-11-21,Japan
    4769,Savings,227.56,Gojek,"Travel, Transportation, Groceries",2022-12-03,Singapore
    4770,Savings,28.56,Uber,"Entertainment, Dining, Groceries, Travel, Transportation, General Expenses",2022-09-09,Japan
    4771,Joint Account,661.9,Grab,"Dining, Entertainment, Travel",2022-12-12,Indonesia
    4772,Savings,451.12,Walmart,"Travel, Groceries, Transportation",2022-10-04,Japan
    4773,Savings,293.3,Google,Travel,2022-07-26,Singapore
    4774,Savings,633.91,Gojek,Dining,2022-08-07,Singapore
    4775,Checking,906.84,Fairprice,"Entertainment, Dining, Transportation",2022-11-15,Australia
    4776,Joint Account,4.18,ACME,"Transportation, General Expenses, Dining, Groceries",2022-07-26,Singapore
    4777,Checking,249.37,Google,"General Expenses, Travel, Dining, Groceries, Entertainment",2022-11-29,Singapore
    4778,Checking,294.15,ACME,Entertainment,2022-10-17,Australia
    4779,Checking,496.33,ACME,"Transportation, Entertainment, Dining",2022-08-21,Australia
    4780,Checking,60.07,Grab,Dining,2022-08-17,Japan
    4781,Checking,358.03,Fairprice,"Dining, General Expenses",2022-08-20,Singapore
    4782,Checking,483.87,Fairprice,"Travel, Entertainment, Dining, General Expenses",2022-11-07,Japan
    4783,Savings,174.87,Google,Transportation,2022-06-29,Australia
    4784,Joint Account,127.82,Google,Travel,2022-07-15,Japan
    4785,Checking,427.11,Google,"Entertainment, Transportation, Travel, Dining, Groceries",2022-08-26,Singapore
    4786,Checking,968.32,Google,"Travel, Groceries",2022-08-27,Japan
    4787,Checking,370.82,Amazon,"Travel, Entertainment, Transportation, Dining, Groceries, General Expenses",2022-09-17,Australia
    4788,Savings,846.82,Grab,"Travel, Entertainment, Groceries, General Expenses, Transportation",2022-12-11,Australia
    4789,Checking,180.04,Fairprice,Travel,2022-06-20,Australia
    4790,Savings,816.72,Google,Groceries,2022-08-26,Indonesia
    4791,Checking,381.04,Uber,"Entertainment, Transportation",2022-10-11,Singapore
    4792,Joint Account,177.27,Fairprice,"Groceries, Travel, Dining, Entertainment, General Expenses, Transportation",2022-12-31,Indonesia
    4793,Joint Account,685.96,Walmart,"Travel, Entertainment, General Expenses, Transportation, Groceries, Dining",2022-06-01,Australia
    4794,Savings,137.56,Uber,"Entertainment, Travel, Dining, General Expenses, Transportation",2022-11-27,Singapore
    4795,Joint Account,789.57,Google,General Expenses,2022-07-07,Japan
    4796,Savings,261.22,Amazon,"Groceries, Dining, General Expenses, Transportation, Entertainment, Travel",2022-11-03,Singapore
    4797,Savings,263.93,Google,"Entertainment, Transportation, Travel, Groceries",2022-09-24,Australia
    4798,Checking,409.46,Amazon,Dining,2022-12-05,Indonesia
    4799,Savings,461.22,Fairprice,"Entertainment, Groceries, General Expenses",2022-09-30,Australia
    4800,Joint Account,985.32,Fairprice,"Dining, General Expenses",2022-07-30,Indonesia
    4801,Checking,718.3,Google,"Travel, Transportation",2022-12-14,Indonesia
    4802,Savings,998.66,Walmart,"General Expenses, Entertainment",2022-07-10,Singapore
    4803,Joint Account,77.6,Walmart,Groceries,2022-11-04,Australia
    4804,Joint Account,907.02,Amazon,"Groceries, Transportation, Entertainment, Travel, Dining, General Expenses",2022-09-10,Indonesia
    4805,Checking,657.25,Walmart,"Dining, Groceries, Transportation, Travel",2022-09-14,Japan
    4806,Checking,291.02,Fairprice,"Travel, General Expenses",2022-10-13,Japan
    4807,Checking,688.77,Uber,Groceries,2022-09-17,Japan
    4808,Joint Account,248.89,Gojek,"Transportation, Entertainment, Travel, General Expenses, Dining, Groceries",2022-10-09,Japan
    4809,Checking,693.49,Google,"Travel, Groceries, Dining, Transportation, General Expenses, Entertainment",2022-10-25,Australia
    4810,Joint Account,285.77,Amazon,"General Expenses, Groceries, Travel, Transportation, Entertainment",2022-12-21,Indonesia
    4811,Joint Account,528.72,Gojek,"Transportation, Entertainment, Groceries, Dining, Travel, General Expenses",2022-06-27,Indonesia
    4812,Checking,600.27,ACME,"General Expenses, Dining, Groceries, Transportation, Entertainment",2022-06-29,Indonesia
    4813,Checking,100.82,Grab,"Dining, General Expenses",2022-09-14,Japan
    4814,Savings,861.54,Starbucks,"Transportation, General Expenses, Travel, Groceries, Entertainment, Dining",2022-08-13,Japan
    4815,Savings,560.45,Walmart,"Travel, Transportation, General Expenses",2022-10-07,Japan
    4816,Checking,14.27,Fairprice,"Transportation, General Expenses, Travel, Dining",2022-11-28,Indonesia
    4817,Joint Account,658.51,Walmart,"Transportation, Entertainment, General Expenses, Groceries",2022-11-03,Australia
    4818,Savings,4.2,Gojek,General Expenses,2022-07-16,Japan
    4819,Joint Account,526.62,Grab,"Entertainment, Groceries, Dining, Travel, General Expenses, Transportation",2022-09-20,Indonesia
    4820,Joint Account,847.77,Google,"Travel, Dining, General Expenses, Groceries, Entertainment, Transportation",2022-09-24,Singapore
    4821,Checking,723.65,Walmart,"Entertainment, Groceries, Dining",2022-06-01,Australia
    4822,Savings,319.35,Uber,"Travel, Dining, Entertainment, Groceries, General Expenses",2022-06-25,Australia
    4823,Savings,604.42,Starbucks,"Transportation, Travel, Groceries, General Expenses, Entertainment",2022-09-03,Indonesia
    4824,Savings,378.83,Google,"Travel, Groceries, General Expenses",2022-11-03,Indonesia
    4825,Checking,837.93,Walmart,"Dining, Entertainment, Groceries, General Expenses, Travel",2022-06-05,Indonesia
    4826,Joint Account,923.58,Gojek,"Travel, Groceries, Transportation",2022-11-23,Japan
    4827,Savings,38.17,Starbucks,"General Expenses, Dining, Travel, Transportation",2022-10-16,Indonesia
    4828,Savings,873.58,ACME,"Dining, Groceries",2022-06-19,Indonesia
    4829,Savings,868.29,Google,"Travel, Groceries, General Expenses, Transportation, Dining, Entertainment",2022-10-01,Indonesia
    4830,Joint Account,949.91,Gojek,General Expenses,2022-10-05,Australia
    4831,Joint Account,491.83,Google,"Travel, Entertainment, General Expenses, Dining, Transportation, Groceries",2022-12-08,Japan
    4832,Checking,162.9,Amazon,"Groceries, Entertainment, Dining, General Expenses, Travel",2022-12-19,Singapore
    4833,Savings,570.19,Amazon,Dining,2022-08-02,Japan
    4834,Checking,775.81,Grab,"Entertainment, General Expenses, Dining, Travel",2022-06-05,Australia
    4835,Checking,31.21,Uber,"Dining, Entertainment, Transportation, General Expenses, Groceries",2022-11-30,Japan
    4836,Checking,464.11,ACME,"General Expenses, Travel, Transportation, Entertainment, Dining, Groceries",2022-08-12,Australia
    4837,Joint Account,619.5,Gojek,Entertainment,2022-11-04,Australia
    4838,Joint Account,769.3,Walmart,"Entertainment, Travel, General Expenses",2022-12-18,Singapore
    4839,Checking,70.88,ACME,"Transportation, General Expenses, Travel, Entertainment, Groceries",2022-08-24,Singapore
    4840,Joint Account,411.91,Grab,"Travel, General Expenses, Dining",2022-12-23,Australia
    4841,Checking,6.82,Google,"Transportation, Entertainment, General Expenses, Travel, Dining, Groceries",2022-10-06,Japan
    4842,Checking,685.79,Uber,"Groceries, Dining",2022-08-27,Japan
    4843,Checking,137.09,Fairprice,"Dining, Transportation, Entertainment, Travel, Groceries, General Expenses",2022-11-18,Indonesia
    4844,Checking,887.11,Fairprice,"Groceries, Travel",2022-06-12,Singapore
    4845,Savings,375.39,Grab,"Entertainment, Transportation, General Expenses, Travel, Dining",2022-11-19,Indonesia
    4846,Checking,27.81,Uber,"General Expenses, Dining, Travel, Groceries, Transportation, Entertainment",2022-09-15,Indonesia
    4847,Checking,915.77,Gojek,"Dining, Entertainment, Travel",2022-10-27,Japan
    4848,Savings,723.29,Walmart,"General Expenses, Dining, Travel",2022-10-20,Indonesia
    4849,Savings,333.63,Uber,"Travel, Transportation",2022-08-31,Singapore
    4850,Checking,68.49,ACME,"Transportation, General Expenses, Entertainment, Dining, Travel",2022-06-12,Australia
    4851,Savings,175.03,Starbucks,"Transportation, Travel, Entertainment",2022-09-24,Japan
    4852,Joint Account,175.93,Walmart,"Groceries, Entertainment, General Expenses",2022-10-22,Singapore
    4853,Savings,508.51,ACME,"Travel, General Expenses, Entertainment, Groceries, Dining",2022-06-09,Singapore
    4854,Checking,270.82,Fairprice,"Transportation, Entertainment, Travel",2022-11-19,Singapore
    4855,Checking,756.9,Walmart,"Dining, General Expenses",2022-12-14,Japan
    4856,Joint Account,257.82,Starbucks,"General Expenses, Travel, Entertainment",2022-09-14,Indonesia
    4857,Joint Account,696.9,Grab,"Entertainment, Transportation, General Expenses",2022-11-19,Japan
    4858,Joint Account,461.3,ACME,"Travel, Groceries",2022-10-02,Indonesia
    4859,Joint Account,174.2,Uber,"Travel, Dining",2022-09-10,Singapore
    4860,Joint Account,559.82,Walmart,Groceries,2022-10-06,Indonesia
    4861,Checking,765.32,Gojek,"Travel, Groceries",2022-12-03,Singapore
    4862,Checking,665.97,Google,General Expenses,2022-12-27,Indonesia
    4863,Savings,519.74,Google,"Entertainment, Transportation",2022-11-01,Singapore
    4864,Joint Account,873.78,Walmart,Groceries,2022-06-06,Indonesia
    4865,Savings,780.66,Starbucks,"Entertainment, General Expenses",2022-07-10,Australia
    4866,Checking,989.84,Starbucks,"Groceries, General Expenses, Travel, Entertainment, Transportation",2022-12-26,Indonesia
    4867,Savings,678.4,Google,Transportation,2022-10-27,Australia
    4868,Joint Account,81.43,Walmart,"General Expenses, Groceries, Transportation, Entertainment, Travel",2022-11-10,Singapore
    4869,Joint Account,240.32,Amazon,"Travel, Entertainment, Groceries",2022-06-14,Japan
    4870,Joint Account,557.91,Google,"Entertainment, Travel, Transportation, Dining, Groceries",2022-08-23,Japan
    4871,Joint Account,636.54,ACME,"General Expenses, Dining, Entertainment, Travel, Transportation, Groceries",2022-07-14,Indonesia
    4872,Savings,646.93,Fairprice,Travel,2022-08-15,Singapore
    4873,Savings,300.34,Walmart,"Dining, General Expenses",2022-11-16,Japan
    4874,Joint Account,550.13,Google,Transportation,2022-06-23,Japan
    4875,Savings,73.87,Amazon,"Groceries, Transportation, Dining, General Expenses, Entertainment",2022-06-30,Indonesia
    4876,Joint Account,737.2,Fairprice,"Travel, Entertainment, Dining, General Expenses",2022-11-12,Japan
    4877,Savings,267.95,Walmart,"General Expenses, Dining, Transportation",2022-11-26,Japan
    4878,Checking,566.2,ACME,"Groceries, Transportation, Travel, Entertainment, Dining",2022-10-23,Australia
    4879,Checking,235.53,Gojek,"General Expenses, Travel, Groceries, Dining, Transportation, Entertainment",2022-11-29,Indonesia
    4880,Joint Account,236.57,Walmart,"Groceries, Entertainment",2022-11-13,Australia
    4881,Savings,848.42,ACME,"Groceries, Entertainment, Dining, General Expenses, Transportation",2022-07-22,Indonesia
    4882,Checking,863.78,Google,Entertainment,2022-08-10,Japan
    4883,Joint Account,517.63,Google,"Entertainment, Transportation, General Expenses",2022-11-19,Australia
    4884,Savings,824.84,Grab,"Entertainment, Dining, Groceries, Travel, General Expenses",2022-12-18,Indonesia
    4885,Savings,135.19,Amazon,"Entertainment, Transportation, General Expenses",2022-08-16,Singapore
    4886,Savings,554.6,Walmart,"Dining, Transportation",2022-10-03,Australia
    4887,Savings,361.99,Amazon,Travel,2022-09-10,Singapore
    4888,Savings,153.54,Walmart,General Expenses,2022-10-11,Indonesia
    4889,Checking,5.53,Walmart,"Dining, Entertainment, Travel, Transportation",2022-12-04,Japan
    4890,Joint Account,714.42,Fairprice,Groceries,2022-07-24,Indonesia
    4891,Joint Account,959.45,Walmart,"Dining, General Expenses",2022-08-15,Indonesia
    4892,Savings,320.86,Starbucks,"Travel, Transportation",2022-09-06,Indonesia
    4893,Savings,562.14,Uber,"Travel, Dining, General Expenses, Transportation, Entertainment",2022-06-19,Indonesia
    4894,Savings,288.92,Grab,"General Expenses, Groceries, Dining, Entertainment, Transportation, Travel",2022-12-08,Japan
    4895,Savings,792.05,Google,"Entertainment, Transportation",2022-07-22,Indonesia
    4896,Checking,423.87,Starbucks,Transportation,2022-08-15,Singapore
    4897,Checking,942.67,Uber,General Expenses,2022-06-16,Indonesia
    4898,Joint Account,510.08,Starbucks,"General Expenses, Dining, Travel, Entertainment, Transportation",2022-09-02,Japan
    4899,Checking,652.31,ACME,"Entertainment, Travel, General Expenses, Transportation, Groceries",2022-08-28,Indonesia
    4900,Checking,435.53,ACME,"Dining, General Expenses",2022-08-02,Singapore
    4901,Savings,28.79,Starbucks,"Entertainment, Travel, General Expenses",2022-12-26,Japan
    4902,Checking,414.0,Fairprice,"Transportation, Groceries, Dining, Travel",2022-09-01,Singapore
    4903,Checking,184.18,Grab,"Travel, Transportation, General Expenses, Entertainment",2022-10-07,Indonesia
    4904,Joint Account,386.88,ACME,"Travel, General Expenses, Dining, Entertainment, Transportation",2022-12-20,Australia
    4905,Savings,328.87,Uber,"Travel, Dining, General Expenses, Transportation, Entertainment, Groceries",2022-08-30,Singapore
    4906,Savings,781.38,Starbucks,"General Expenses, Entertainment, Dining, Groceries, Travel, Transportation",2022-11-05,Indonesia
    4907,Checking,417.92,Gojek,Transportation,2022-09-17,Japan
    4908,Joint Account,932.96,Amazon,"General Expenses, Entertainment, Dining, Groceries, Travel, Transportation",2022-12-18,Japan
    4909,Checking,69.83,ACME,"Groceries, Dining, Transportation, General Expenses, Travel, Entertainment",2022-11-08,Singapore
    4910,Checking,503.58,Grab,Groceries,2022-06-16,Singapore
    4911,Checking,354.05,Fairprice,"Dining, Groceries",2022-10-05,Australia
    4912,Checking,147.01,Amazon,"Travel, Dining, Entertainment, Transportation, Groceries",2022-11-08,Japan
    4913,Checking,286.79,ACME,"Dining, Transportation, General Expenses, Travel",2022-10-21,Indonesia
    4914,Checking,203.13,Walmart,"General Expenses, Groceries, Dining, Entertainment, Transportation",2022-08-26,Japan
    4915,Joint Account,313.66,Grab,"General Expenses, Travel, Entertainment",2022-08-18,Singapore
    4916,Checking,743.91,Google,"General Expenses, Dining",2022-11-09,Singapore
    4917,Savings,171.13,Grab,"General Expenses, Groceries, Transportation, Dining, Entertainment",2022-09-28,Indonesia
    4918,Joint Account,316.15,Fairprice,Dining,2022-07-27,Japan
    4919,Checking,652.35,ACME,"Dining, Groceries, Transportation",2022-12-24,Australia
    4920,Savings,336.55,Gojek,"Dining, Travel, Groceries, General Expenses, Transportation",2022-10-04,Japan
    4921,Joint Account,397.14,Starbucks,"Entertainment, Transportation",2022-11-17,Australia
    4922,Checking,621.68,Grab,"Transportation, Dining",2022-08-07,Japan
    4923,Savings,863.05,Amazon,"Dining, Groceries, General Expenses, Travel",2022-09-29,Australia
    4924,Joint Account,597.81,Walmart,Travel,2022-12-16,Singapore
    4925,Joint Account,874.87,Grab,"Dining, General Expenses, Transportation, Travel",2022-08-24,Singapore
    4926,Joint Account,668.86,Gojek,"Dining, Transportation, Travel, Groceries",2022-12-09,Australia
    4927,Checking,887.45,Gojek,"General Expenses, Dining, Entertainment, Transportation",2022-09-05,Indonesia
    4928,Joint Account,501.66,Grab,"Transportation, Travel, General Expenses",2022-12-31,Singapore
    4929,Joint Account,804.51,Amazon,"General Expenses, Entertainment, Groceries, Travel",2022-12-03,Australia
    4930,Checking,16.71,ACME,"Transportation, General Expenses, Groceries, Dining, Entertainment, Travel",2022-11-18,Indonesia
    4931,Savings,733.67,ACME,"Transportation, Travel, Entertainment",2022-06-19,Singapore
    4932,Checking,5.03,Starbucks,"Entertainment, Transportation, Groceries, General Expenses, Travel",2022-12-31,Singapore
    4933,Savings,908.62,Uber,"Transportation, General Expenses, Entertainment, Dining, Groceries, Travel",2022-06-18,Japan
    4934,Joint Account,524.04,ACME,"Dining, Groceries",2022-12-09,Singapore
    4935,Joint Account,620.12,Amazon,"Travel, Entertainment, Transportation, Groceries, Dining, General Expenses",2022-12-05,Singapore
    4936,Checking,388.93,Uber,"Entertainment, General Expenses, Travel",2022-10-01,Singapore
    4937,Joint Account,454.29,Grab,Travel,2022-09-01,Singapore
    4938,Joint Account,84.17,Gojek,"Groceries, Transportation",2022-12-19,Indonesia
    4939,Joint Account,22.4,Gojek,"Dining, General Expenses, Transportation, Entertainment, Travel",2022-11-04,Indonesia
    4940,Checking,670.79,Fairprice,"Dining, Entertainment, General Expenses, Travel",2022-11-14,Singapore
    4941,Checking,198.83,ACME,"Travel, General Expenses, Groceries",2022-06-28,Japan
    4942,Checking,805.87,Walmart,"Transportation, Groceries, Travel, Dining",2022-10-11,Singapore
    4943,Savings,895.82,Walmart,Transportation,2022-11-14,Indonesia
    4944,Checking,994.69,Uber,"Entertainment, Transportation, Dining, Travel, Groceries",2022-10-27,Indonesia
    4945,Checking,915.91,Google,"Entertainment, General Expenses, Transportation",2022-10-08,Singapore
    4946,Savings,853.15,Walmart,"General Expenses, Travel",2022-12-12,Australia
    4947,Joint Account,535.44,ACME,"Dining, Groceries",2022-12-31,Japan
    4948,Checking,524.39,Fairprice,"Entertainment, Travel, Transportation",2022-07-29,Japan
    4949,Checking,122.85,Grab,"Dining, General Expenses, Transportation, Entertainment, Travel, Groceries",2022-10-28,Singapore
    4950,Checking,194.06,ACME,"General Expenses, Transportation, Groceries",2022-12-30,Indonesia
    4951,Savings,758.8,Starbucks,"Dining, Entertainment, General Expenses, Transportation, Travel, Groceries",2022-11-30,Indonesia
    4952,Checking,722.85,Google,"Entertainment, Travel, Groceries, General Expenses",2022-09-14,Australia
    4953,Savings,638.38,Walmart,"Dining, Travel, Entertainment, General Expenses, Groceries, Transportation",2022-07-19,Japan
    4954,Joint Account,785.41,Starbucks,Transportation,2022-10-09,Indonesia
    4955,Checking,301.3,Walmart,Transportation,2022-12-14,Indonesia
    4956,Joint Account,260.13,Grab,"Entertainment, Travel, Groceries, Transportation",2022-06-29,Japan
    4957,Savings,789.37,Google,"General Expenses, Entertainment, Transportation, Travel",2022-07-27,Indonesia
    4958,Joint Account,844.67,Gojek,Dining,2022-06-05,Japan
    4959,Savings,176.76,Starbucks,"Entertainment, General Expenses",2022-07-03,Singapore
    4960,Checking,930.23,Google,Entertainment,2022-08-08,Indonesia
    4961,Savings,823.89,Google,"Dining, General Expenses",2022-12-21,Australia
    4962,Savings,687.25,Gojek,"Dining, General Expenses, Transportation, Groceries",2022-10-24,Japan
    4963,Checking,492.62,Amazon,"Groceries, Entertainment, Dining",2022-09-26,Singapore
    4964,Joint Account,562.77,Gojek,Groceries,2022-10-22,Singapore
    4965,Savings,309.19,Walmart,"Dining, Groceries",2022-09-15,Australia
    4966,Joint Account,571.36,Google,"Groceries, Transportation, Entertainment, Dining, General Expenses, Travel",2022-07-31,Indonesia
    4967,Joint Account,420.48,Amazon,"Travel, Groceries, General Expenses",2022-11-08,Australia
    4968,Checking,136.47,Uber,"Entertainment, Dining, Transportation, Groceries, General Expenses",2022-06-13,Australia
    4969,Joint Account,302.86,ACME,"Entertainment, Transportation, General Expenses, Travel, Dining",2022-07-29,Japan
    4970,Checking,643.01,Amazon,"Groceries, Dining, Transportation, Travel",2022-07-15,Singapore
    4971,Savings,646.81,Fairprice,"Entertainment, General Expenses, Transportation",2022-06-21,Indonesia
    4972,Joint Account,917.7,Fairprice,"Transportation, Groceries",2022-08-10,Japan
    4973,Savings,781.41,ACME,"Dining, Travel, Entertainment, General Expenses",2022-10-03,Singapore
    4974,Savings,866.47,Grab,"Dining, Groceries, General Expenses, Transportation",2022-08-17,Australia
    4975,Savings,458.21,Fairprice,"Groceries, Transportation, Dining, General Expenses, Travel, Entertainment",2022-09-03,Singapore
    4976,Joint Account,498.32,Amazon,"Transportation, Travel, General Expenses",2022-10-24,Australia
    4977,Savings,12.16,Grab,"Dining, Groceries, Entertainment",2022-12-27,Australia
    4978,Checking,125.34,Uber,"Transportation, Dining, Entertainment, Travel, General Expenses, Groceries",2022-09-15,Singapore
    4979,Checking,439.81,Fairprice,"Groceries, Dining, General Expenses, Entertainment, Transportation, Travel",2022-08-02,Singapore
    4980,Joint Account,628.5,Google,Groceries,2022-08-19,Indonesia
    4981,Checking,327.46,Google,"Dining, Entertainment",2022-09-14,Australia
    4982,Joint Account,146.72,Uber,General Expenses,2022-10-05,Japan
    4983,Joint Account,180.92,Gojek,"General Expenses, Travel, Dining, Transportation, Groceries, Entertainment",2022-08-24,Australia
    4984,Joint Account,656.31,Fairprice,Dining,2022-06-11,Singapore
    4985,Checking,134.1,ACME,"General Expenses, Entertainment, Groceries, Dining, Travel, Transportation",2022-09-03,Indonesia
    4986,Joint Account,187.87,Amazon,"Entertainment, Groceries",2022-06-07,Australia
    4987,Savings,925.06,Grab,"General Expenses, Entertainment, Transportation",2022-11-04,Japan
    4988,Savings,70.4,Google,"Transportation, General Expenses",2022-12-22,Australia
    4989,Checking,924.69,Starbucks,"Dining, Transportation, Travel",2022-08-15,Indonesia
    4990,Checking,11.8,Starbucks,"Groceries, General Expenses",2022-08-08,Indonesia
    4991,Joint Account,539.15,Fairprice,"Dining, Transportation, General Expenses, Entertainment",2022-12-18,Singapore
    4992,Joint Account,673.95,Starbucks,"Dining, General Expenses, Travel",2022-10-16,Singapore
    4993,Checking,961.68,Gojek,"Entertainment, Dining, General Expenses",2022-09-14,Japan
    4994,Savings,295.94,Grab,"Dining, Groceries, Entertainment, Travel",2022-11-23,Japan
    4995,Savings,875.21,Starbucks,Groceries,2022-06-14,Indonesia
    4996,Savings,194.1,Fairprice,"Dining, General Expenses, Entertainment",2022-12-15,Australia
    4997,Savings,99.94,Grab,"Travel, Groceries, Transportation, General Expenses, Entertainment",2022-06-08,Singapore
    4998,Savings,429.52,Starbucks,"Entertainment, Groceries, Travel, General Expenses, Transportation",2022-10-09,Singapore
    4999,Checking,448.1,Uber,"Transportation, Groceries",2022-06-28,Australia
    5000,Savings,896.39,Grab,"Entertainment, Travel, Dining",2022-12-26,Singapore
    5001,Joint Account,739.65,Amazon,"Entertainment, Travel",2022-07-04,Australia
    5002,Checking,856.51,Google,Groceries,2022-06-05,Australia
    5003,Joint Account,376.17,Google,"General Expenses, Entertainment, Dining, Travel, Transportation",2022-09-08,Australia
    5004,Checking,72.22,Gojek,"Groceries, Entertainment, Travel",2022-07-24,Australia
    5005,Savings,114.26,Starbucks,"Entertainment, Groceries, Transportation",2022-10-19,Singapore
    5006,Checking,554.81,Uber,"Transportation, General Expenses, Travel, Dining, Groceries",2022-09-08,Japan
    5007,Checking,973.02,Google,"Groceries, Entertainment, Travel, Transportation",2022-09-14,Australia
    5008,Checking,133.09,Google,"General Expenses, Entertainment, Dining",2022-07-26,Singapore
    5009,Savings,499.22,Amazon,"Groceries, Dining, General Expenses",2022-08-18,Australia
    5010,Joint Account,678.28,Grab,"Dining, Entertainment, Travel, General Expenses, Transportation, Groceries",2022-08-03,Japan
    5011,Joint Account,569.57,Amazon,"Travel, Dining",2022-11-23,Singapore
    5012,Checking,239.57,Grab,"Transportation, General Expenses, Travel",2022-07-23,Australia
    5013,Joint Account,999.92,Amazon,"Dining, Groceries",2022-12-14,Japan
    5014,Joint Account,381.2,ACME,"Dining, Travel, Groceries",2022-06-08,Singapore
    5015,Savings,592.27,Starbucks,"Travel, General Expenses",2022-10-26,Indonesia
    5016,Checking,679.6,Gojek,"Travel, Transportation, Entertainment, General Expenses",2022-09-17,Singapore
    5017,Checking,636.56,Google,"General Expenses, Entertainment, Dining",2022-08-30,Indonesia
    5018,Checking,760.38,Fairprice,"Transportation, Dining, Entertainment, Travel",2022-09-17,Japan
    5019,Savings,533.02,Google,"Transportation, Travel, General Expenses",2022-09-27,Japan
    5020,Savings,595.2,Walmart,"Entertainment, Transportation, General Expenses, Groceries, Dining, Travel",2022-06-04,Japan
    5021,Savings,1.18,Gojek,General Expenses,2022-11-22,Japan
    5022,Checking,955.1,Starbucks,"General Expenses, Entertainment, Transportation, Dining, Travel, Groceries",2022-06-06,Indonesia
    5023,Savings,326.09,Uber,"Entertainment, Groceries, Transportation, General Expenses",2022-06-01,Indonesia
    5024,Joint Account,929.8,Uber,"Entertainment, Transportation, Groceries, Travel, Dining",2022-11-17,Australia
    5025,Savings,599.22,ACME,"Dining, Entertainment, Groceries, General Expenses, Transportation",2022-07-31,Indonesia
    5026,Joint Account,269.96,Gojek,"General Expenses, Entertainment",2022-11-18,Singapore
    5027,Savings,813.85,Amazon,"Travel, Groceries, General Expenses, Dining",2022-10-23,Singapore
    5028,Savings,66.41,Google,"Transportation, General Expenses, Entertainment, Travel",2022-09-04,Indonesia
    5029,Checking,525.85,Uber,"General Expenses, Travel, Entertainment",2022-08-18,Japan
    5030,Joint Account,311.24,Gojek,"Groceries, Transportation, Dining, Entertainment, Travel, General Expenses",2022-07-10,Indonesia
    5031,Checking,242.86,Google,Transportation,2022-12-26,Singapore
    5032,Savings,873.43,Google,General Expenses,2022-09-04,Singapore
    5033,Checking,677.02,ACME,"General Expenses, Transportation",2022-08-27,Australia
    5034,Savings,389.54,Google,"Travel, Entertainment, General Expenses, Dining, Transportation, Groceries",2022-09-17,Singapore
    5035,Savings,945.46,Starbucks,"Entertainment, Groceries, General Expenses, Dining",2022-12-06,Indonesia
    5036,Joint Account,4.13,Amazon,"General Expenses, Travel, Entertainment, Dining, Transportation",2022-10-14,Japan
    5037,Checking,877.77,ACME,"Groceries, Dining, Entertainment, Transportation, General Expenses",2022-10-14,Australia
    5038,Checking,805.66,Starbucks,"Travel, Entertainment, Dining, Groceries",2022-08-25,Australia
    5039,Checking,502.76,Grab,"General Expenses, Transportation",2022-07-12,Indonesia
    5040,Joint Account,94.59,Google,"General Expenses, Travel, Dining, Groceries, Transportation, Entertainment",2022-12-25,Japan
    5041,Joint Account,725.6,Amazon,"Transportation, General Expenses, Groceries, Entertainment, Travel",2022-06-10,Japan
    5042,Savings,575.04,Walmart,"Dining, Travel, Groceries, General Expenses, Transportation",2022-10-21,Japan
    5043,Joint Account,565.57,Uber,"Travel, Dining, Groceries, Transportation",2022-12-01,Singapore
    5044,Checking,53.63,Walmart,"Transportation, Travel",2022-09-17,Japan
    5045,Savings,30.43,Google,"Dining, Travel",2022-09-21,Singapore
    5046,Checking,932.73,Uber,"Entertainment, Groceries",2022-11-06,Indonesia
    5047,Checking,851.06,Grab,"Dining, Transportation, Groceries, Travel, General Expenses, Entertainment",2022-10-01,Japan
    5048,Savings,622.41,Google,"Dining, Travel",2022-10-09,Singapore
    5049,Joint Account,78.78,Gojek,"Travel, Groceries, Dining, Transportation, Entertainment",2022-12-07,Singapore
    5050,Savings,50.9,Uber,"Groceries, Entertainment, Dining, Transportation, General Expenses",2022-12-23,Singapore
    5051,Joint Account,452.66,Amazon,"Travel, Entertainment",2022-08-27,Singapore
    5052,Savings,915.3,Fairprice,"Transportation, Dining, Travel, Entertainment, General Expenses",2022-11-20,Japan
    5053,Joint Account,872.17,Uber,"Entertainment, Transportation, General Expenses, Groceries, Travel, Dining",2022-12-27,Australia
    5054,Checking,514.08,Starbucks,Dining,2022-11-29,Indonesia
    5055,Savings,352.65,Amazon,"Groceries, General Expenses",2022-07-15,Australia
    5056,Joint Account,231.68,Google,"Travel, General Expenses, Entertainment",2022-08-30,Singapore
    5057,Joint Account,682.2,Uber,"Dining, Travel, Groceries",2022-07-01,Indonesia
    5058,Joint Account,191.14,Grab,"Groceries, Transportation",2022-08-20,Singapore
    5059,Savings,744.35,Google,General Expenses,2022-07-08,Indonesia
    5060,Joint Account,682.3,Grab,"Groceries, Dining, Travel, Entertainment, Transportation, General Expenses",2022-07-25,Singapore
    5061,Savings,513.07,Walmart,"Entertainment, Travel, Dining, Groceries, General Expenses",2022-12-28,Singapore
    5062,Joint Account,162.54,Grab,"General Expenses, Travel",2022-09-11,Singapore
    5063,Joint Account,304.07,Uber,"Entertainment, Travel, Dining",2022-09-25,Indonesia
    5064,Savings,771.07,Grab,"Transportation, Travel, Entertainment, Groceries, General Expenses, Dining",2022-11-15,Indonesia
    5065,Joint Account,919.53,Uber,"Travel, General Expenses",2022-09-04,Singapore
    5066,Savings,869.72,Starbucks,"Groceries, Dining, Entertainment, Transportation",2022-10-28,Australia
    5067,Checking,670.51,Starbucks,"Entertainment, Transportation, Groceries, General Expenses, Travel",2022-12-06,Singapore
    5068,Joint Account,792.65,Fairprice,"Transportation, Entertainment",2022-07-09,Indonesia
    5069,Joint Account,492.29,Amazon,"Groceries, Transportation, Travel, General Expenses",2022-07-10,Indonesia
    5070,Savings,281.62,Gojek,"General Expenses, Dining, Entertainment, Transportation, Groceries",2022-12-14,Japan
    5071,Checking,70.33,Grab,"Travel, Entertainment, Transportation, Groceries",2022-06-06,Singapore
    5072,Joint Account,268.51,Walmart,"Transportation, Travel, Dining",2022-08-12,Japan
    5073,Savings,864.34,Uber,Transportation,2022-06-10,Indonesia
    5074,Joint Account,729.67,Fairprice,"Entertainment, Transportation",2022-12-31,Australia
    5075,Joint Account,557.23,Walmart,"Travel, Dining, Groceries, Transportation",2022-06-01,Indonesia
    5076,Savings,505.58,Starbucks,"Transportation, General Expenses, Groceries",2022-09-27,Singapore
    5077,Joint Account,489.29,Starbucks,"General Expenses, Groceries, Dining",2022-08-16,Singapore
    5078,Joint Account,919.96,Uber,"Dining, Transportation",2022-06-09,Japan
    5079,Savings,743.05,ACME,"Transportation, Travel, Entertainment, Groceries, General Expenses, Dining",2022-07-22,Japan
    5080,Joint Account,687.77,Starbucks,Dining,2022-09-04,Australia
    5081,Savings,107.15,Google,"Dining, Transportation, Travel",2022-10-26,Japan
    5082,Joint Account,232.76,Starbucks,"Groceries, Dining, Entertainment, Travel, Transportation, General Expenses",2022-12-13,Singapore
    5083,Checking,456.83,Starbucks,"Groceries, Transportation",2022-07-04,Australia
    5084,Joint Account,307.01,Gojek,"Travel, Transportation, Groceries, Dining, General Expenses, Entertainment",2022-11-07,Singapore
    5085,Checking,404.47,Uber,"Transportation, General Expenses, Entertainment, Travel, Groceries, Dining",2022-06-17,Australia
    5086,Savings,195.58,Gojek,Transportation,2022-10-09,Japan
    5087,Checking,530.33,Grab,"Groceries, Entertainment, General Expenses, Transportation, Travel, Dining",2022-08-01,Japan
    5088,Savings,911.25,Grab,"General Expenses, Travel, Transportation",2022-12-12,Australia
    5089,Checking,945.79,Grab,"General Expenses, Entertainment, Dining, Transportation, Travel",2022-12-23,Japan
    5090,Savings,405.54,ACME,"Groceries, Entertainment, General Expenses, Transportation, Travel",2022-07-09,Japan
    5091,Savings,204.35,Uber,General Expenses,2022-12-04,Indonesia
    5092,Savings,351.88,ACME,"Groceries, General Expenses, Dining",2022-12-14,Indonesia
    5093,Savings,734.58,Walmart,"Groceries, Dining, Travel, Entertainment",2022-06-30,Australia
    5094,Checking,317.13,Walmart,"Entertainment, Transportation",2022-09-29,Australia
    5095,Savings,747.0,Gojek,"Entertainment, Transportation",2022-07-30,Australia
    5096,Savings,819.49,Amazon,"Transportation, Travel, Groceries",2022-07-22,Indonesia
    5097,Joint Account,38.72,Google,"Groceries, Transportation, Dining, Entertainment",2022-09-11,Indonesia
    5098,Joint Account,456.7,Starbucks,"General Expenses, Entertainment, Transportation",2022-08-26,Australia
    5099,Joint Account,181.54,ACME,"General Expenses, Transportation, Dining, Travel, Groceries",2022-07-31,Australia
    5100,Checking,159.64,Grab,"Groceries, Dining, General Expenses",2022-09-19,Japan
    5101,Joint Account,7.59,Gojek,"Groceries, Transportation, General Expenses, Dining",2022-11-26,Indonesia
    5102,Joint Account,496.46,Starbucks,"Entertainment, Transportation, Dining",2022-09-30,Japan
    5103,Checking,515.25,Google,"Entertainment, General Expenses, Transportation, Travel, Groceries, Dining",2022-12-24,Singapore
    5104,Joint Account,963.48,Gojek,"Groceries, Travel",2022-11-06,Singapore
    5105,Joint Account,431.59,Google,"General Expenses, Groceries, Travel, Dining",2022-10-02,Japan
    5106,Joint Account,465.89,Fairprice,"Entertainment, General Expenses",2022-11-10,Singapore
    5107,Savings,190.06,Grab,Travel,2022-07-29,Australia
    5108,Joint Account,397.24,Google,"Entertainment, Groceries, Transportation, Dining",2022-07-09,Indonesia
    5109,Checking,112.23,Grab,"Dining, Transportation, Entertainment, General Expenses",2022-09-07,Indonesia
    5110,Checking,618.82,Starbucks,"Dining, Travel, Transportation, Groceries, General Expenses",2022-06-16,Singapore
    5111,Savings,786.94,Gojek,"Travel, Entertainment, Transportation",2022-07-26,Singapore
    5112,Savings,587.56,Starbucks,"Entertainment, Groceries, Travel, General Expenses, Dining",2022-08-27,Australia
    5113,Joint Account,365.26,Gojek,"Transportation, Dining, Entertainment, General Expenses",2022-09-10,Indonesia
    5114,Checking,863.87,Google,"General Expenses, Entertainment, Groceries, Travel, Dining",2022-06-11,Australia
    5115,Joint Account,310.88,Amazon,Groceries,2022-12-14,Japan
    5116,Savings,720.39,Google,"Transportation, General Expenses, Dining, Groceries",2022-09-20,Indonesia
    5117,Checking,929.55,Fairprice,Travel,2022-09-17,Indonesia
    5118,Joint Account,269.17,Gojek,"Transportation, General Expenses",2022-10-13,Australia
    5119,Savings,743.07,Fairprice,"Dining, Groceries",2022-06-18,Japan
    5120,Joint Account,642.57,Gojek,"Entertainment, General Expenses",2022-07-17,Singapore
    5121,Joint Account,283.52,ACME,"Groceries, Dining",2022-07-11,Japan
    5122,Joint Account,727.5,Fairprice,Transportation,2022-12-15,Australia
    5123,Checking,343.18,Amazon,General Expenses,2022-09-16,Indonesia
    5124,Checking,588.01,Fairprice,"Travel, Groceries, Dining, Transportation",2022-10-21,Australia
    5125,Joint Account,460.48,ACME,"Entertainment, Transportation, Dining, General Expenses, Groceries",2022-09-09,Singapore
    5126,Checking,556.15,Walmart,"General Expenses, Transportation",2022-09-05,Indonesia
    5127,Joint Account,252.59,Walmart,"Travel, Groceries, General Expenses",2022-06-01,Japan
    5128,Savings,100.1,Grab,"Transportation, Groceries, Dining, Entertainment, General Expenses, Travel",2022-11-30,Australia
    5129,Joint Account,225.55,Amazon,"Entertainment, General Expenses, Travel, Transportation, Dining",2022-07-18,Indonesia
    5130,Checking,523.45,Grab,Travel,2022-09-04,Indonesia
    5131,Checking,986.57,Google,"General Expenses, Groceries, Transportation, Entertainment, Dining",2022-10-09,Indonesia
    5132,Savings,42.35,Uber,"Dining, Travel, Entertainment, Transportation, General Expenses, Groceries",2022-12-20,Japan
    5133,Savings,567.45,Walmart,"Groceries, Dining, Transportation, Travel",2022-06-09,Japan
    5134,Savings,824.91,Walmart,"General Expenses, Groceries, Entertainment",2022-07-15,Australia
    5135,Checking,276.43,Google,"Transportation, Groceries, Entertainment, General Expenses, Travel, Dining",2022-06-06,Singapore
    5136,Joint Account,836.04,Starbucks,"Entertainment, Travel, General Expenses, Dining, Groceries",2022-07-01,Japan
    5137,Savings,661.15,Fairprice,"Groceries, Dining, Transportation, Entertainment, General Expenses, Travel",2022-12-13,Indonesia
    5138,Joint Account,799.39,ACME,"Travel, Transportation",2022-12-14,Indonesia
    5139,Joint Account,246.79,Grab,"Groceries, General Expenses",2022-06-23,Japan
    5140,Savings,572.5,Walmart,"Groceries, Entertainment, Dining, General Expenses, Travel, Transportation",2022-07-25,Indonesia
    5141,Joint Account,527.72,Uber,"General Expenses, Entertainment, Transportation, Groceries, Dining",2022-08-03,Japan
    5142,Savings,328.17,Amazon,"Travel, Entertainment, Dining, Transportation",2022-08-22,Singapore
    5143,Checking,309.98,Uber,"Transportation, Dining, Travel, Entertainment",2022-06-02,Australia
    5144,Joint Account,955.81,Uber,"Dining, Travel, Entertainment, Transportation",2022-08-18,Indonesia
    5145,Checking,750.36,Amazon,Dining,2022-10-20,Indonesia
    5146,Savings,590.88,Google,"General Expenses, Groceries, Dining, Transportation",2022-10-09,Singapore
    5147,Savings,274.41,Walmart,"General Expenses, Dining, Entertainment, Transportation, Travel, Groceries",2022-12-08,Indonesia
    5148,Joint Account,350.75,Walmart,General Expenses,2022-08-18,Japan
    5149,Savings,12.57,Grab,"Transportation, Travel, Groceries",2022-09-06,Australia
    5150,Checking,23.1,Amazon,"Groceries, Entertainment, Travel, Transportation, Dining",2022-09-27,Japan
    5151,Checking,799.64,Amazon,"General Expenses, Entertainment, Groceries, Transportation, Travel",2022-07-26,Singapore
    5152,Checking,45.82,Grab,Groceries,2022-08-03,Singapore
    5153,Savings,295.91,Google,"Transportation, Dining, Entertainment, Travel",2022-09-03,Indonesia
    5154,Savings,554.8,Amazon,"Groceries, Transportation, Dining, Travel, Entertainment",2022-08-17,Japan
    5155,Joint Account,430.16,Uber,"Entertainment, Dining, Groceries, Travel, General Expenses",2022-10-07,Australia
    5156,Savings,390.25,Walmart,"Travel, Dining",2022-06-16,Singapore
    5157,Joint Account,690.67,Grab,"Travel, Transportation",2022-10-26,Indonesia
    5158,Checking,428.69,Walmart,"Dining, General Expenses, Travel, Groceries, Transportation",2022-11-07,Australia
    5159,Checking,323.91,Grab,"Transportation, Travel, Entertainment",2022-10-28,Indonesia
    5160,Joint Account,484.58,Starbucks,"Dining, Groceries, Entertainment, Transportation, Travel, General Expenses",2022-10-20,Australia
    5161,Joint Account,383.36,Gojek,Entertainment,2022-08-29,Indonesia
    5162,Savings,334.76,Fairprice,"General Expenses, Transportation, Groceries, Travel, Entertainment",2022-11-28,Japan
    5163,Savings,28.54,Uber,"Transportation, Dining, Travel",2022-06-13,Japan
    5164,Checking,531.94,Uber,"Dining, General Expenses, Transportation, Entertainment, Groceries, Travel",2022-10-23,Indonesia
    5165,Savings,703.97,ACME,"General Expenses, Entertainment, Dining, Transportation, Travel, Groceries",2022-11-05,Australia
    5166,Checking,428.01,Google,"Entertainment, Travel, Dining, General Expenses",2022-10-14,Indonesia
    5167,Checking,440.24,Gojek,"Dining, Groceries, General Expenses, Entertainment",2022-12-19,Singapore
    5168,Checking,687.91,Walmart,"General Expenses, Groceries, Entertainment",2022-07-18,Japan
    5169,Joint Account,942.19,Starbucks,Groceries,2022-08-05,Indonesia
    5170,Savings,672.75,Walmart,"Dining, Travel, Groceries, Entertainment",2022-08-27,Japan
    5171,Checking,59.19,Starbucks,"Transportation, Dining, Groceries, General Expenses, Entertainment, Travel",2022-08-05,Australia
    5172,Checking,45.57,Walmart,"Transportation, Entertainment, General Expenses, Dining, Groceries",2022-10-20,Australia
    5173,Joint Account,505.25,Gojek,"Entertainment, Dining, Transportation, Groceries",2022-06-02,Japan
    5174,Checking,522.12,Gojek,"Dining, Groceries, Travel, Transportation, General Expenses",2022-09-24,Indonesia
    5175,Checking,768.1,Amazon,"General Expenses, Entertainment, Transportation, Dining, Groceries, Travel",2022-09-05,Indonesia
    5176,Joint Account,918.19,Uber,"Travel, Groceries, Transportation, General Expenses",2022-07-15,Japan
    5177,Joint Account,932.69,Uber,"Transportation, Groceries, General Expenses, Dining",2022-06-20,Indonesia
    5178,Joint Account,509.49,Walmart,"Dining, Groceries",2022-11-14,Japan
    5179,Checking,307.9,Walmart,"General Expenses, Groceries, Dining, Travel, Entertainment",2022-07-08,Indonesia
    5180,Savings,261.12,Google,"Transportation, Dining, Travel",2022-11-17,Japan
    5181,Savings,515.67,Grab,"General Expenses, Dining, Travel, Groceries, Transportation, Entertainment",2022-09-15,Australia
    5182,Checking,911.32,ACME,"General Expenses, Dining, Travel",2022-07-05,Australia
    5183,Checking,260.55,Gojek,"Travel, Entertainment, Transportation, General Expenses, Dining, Groceries",2022-12-06,Japan
    5184,Checking,330.34,Grab,"Groceries, Travel, Entertainment",2022-09-11,Indonesia
    5185,Joint Account,374.83,Uber,"Travel, Entertainment, Dining, Groceries",2022-07-28,Indonesia
    5186,Joint Account,495.33,Uber,"General Expenses, Entertainment, Travel, Groceries, Dining",2022-07-08,Australia
    5187,Savings,860.54,Walmart,"General Expenses, Entertainment, Travel, Dining, Groceries",2022-10-22,Australia
    5188,Joint Account,601.66,Uber,"Dining, Entertainment",2022-07-23,Indonesia
    5189,Joint Account,724.54,Walmart,"Entertainment, General Expenses, Travel, Groceries",2022-09-23,Indonesia
    5190,Checking,659.82,Grab,"Entertainment, General Expenses, Groceries, Travel, Transportation, Dining",2022-10-06,Indonesia
    5191,Savings,776.58,Gojek,Entertainment,2022-12-07,Singapore
    5192,Joint Account,351.55,Google,"Entertainment, Transportation",2022-12-27,Japan
    5193,Checking,196.67,Fairprice,"Entertainment, Travel, Groceries",2022-11-30,Australia
    5194,Savings,580.76,Fairprice,Transportation,2022-10-15,Australia
    5195,Savings,408.83,Uber,"Travel, Dining, Groceries, Entertainment, Transportation",2022-09-22,Singapore
    5196,Savings,436.78,Amazon,General Expenses,2022-08-12,Australia
    5197,Checking,360.66,Starbucks,"Travel, Transportation, General Expenses, Entertainment",2022-06-13,Australia
    5198,Savings,101.12,Fairprice,"Groceries, Entertainment",2022-12-12,Singapore
    5199,Joint Account,657.89,Starbucks,"Entertainment, Transportation",2022-08-11,Japan
    5200,Joint Account,250.97,Uber,"Entertainment, Dining, Groceries, Transportation",2022-06-21,Australia
    5201,Joint Account,864.78,Starbucks,"General Expenses, Transportation",2022-06-25,Japan
    5202,Checking,280.21,Google,"Transportation, Travel, General Expenses, Groceries",2022-10-17,Singapore
    5203,Checking,930.91,Amazon,"Travel, Entertainment, Groceries, Dining, Transportation, General Expenses",2022-12-18,Singapore
    5204,Savings,464.13,Google,"Transportation, Groceries, Entertainment, Travel, Dining, General Expenses",2022-09-30,Japan
    5205,Joint Account,893.92,Google,"Transportation, Travel",2022-08-31,Australia
    5206,Checking,507.28,Uber,"Entertainment, Groceries",2022-11-15,Singapore
    5207,Checking,317.09,Starbucks,"Groceries, Transportation, Dining, General Expenses, Travel",2022-08-25,Japan
    5208,Savings,247.31,Amazon,General Expenses,2022-08-19,Australia
    5209,Checking,344.04,Fairprice,"Dining, Travel, Transportation, Groceries, Entertainment",2022-10-02,Japan
    5210,Checking,544.97,Grab,"Entertainment, Groceries",2022-11-29,Australia
    5211,Savings,401.54,Walmart,"Transportation, Dining, Travel, Groceries, Entertainment, General Expenses",2022-10-01,Indonesia
    5212,Joint Account,83.38,Google,Groceries,2022-08-30,Japan
    5213,Checking,884.63,Grab,"Dining, General Expenses, Groceries",2022-10-28,Australia
    5214,Savings,359.56,Amazon,"Dining, General Expenses, Entertainment, Transportation, Groceries, Travel",2022-09-03,Singapore
    5215,Joint Account,869.56,Walmart,General Expenses,2022-11-04,Japan
    5216,Joint Account,782.95,Fairprice,"Transportation, Travel, General Expenses",2022-06-22,Japan
    5217,Checking,818.32,Google,Travel,2022-11-08,Japan
    5218,Savings,685.28,Fairprice,"Groceries, Entertainment",2022-06-18,Indonesia
    5219,Savings,786.22,ACME,"General Expenses, Travel",2022-11-12,Indonesia
    5220,Savings,524.31,Google,"General Expenses, Transportation, Groceries, Travel, Entertainment",2022-08-14,Indonesia
    5221,Checking,203.54,Amazon,"Groceries, Entertainment, Dining",2022-09-06,Australia
    5222,Checking,346.26,Starbucks,"General Expenses, Transportation, Travel, Entertainment, Groceries, Dining",2022-11-01,Japan
    5223,Joint Account,731.13,Uber,"Groceries, General Expenses, Dining, Entertainment, Travel, Transportation",2022-07-04,Indonesia
    5224,Savings,777.94,Google,"Transportation, Dining, Travel, General Expenses, Entertainment",2022-10-07,Indonesia
    5225,Joint Account,909.73,Google,Groceries,2022-09-18,Indonesia
    5226,Joint Account,193.42,Gojek,"Dining, General Expenses, Travel, Groceries",2022-07-18,Indonesia
    5227,Joint Account,119.01,Fairprice,"Transportation, Travel, Entertainment, Groceries",2022-06-13,Indonesia
    5228,Joint Account,975.99,Uber,"Transportation, Groceries",2022-09-20,Japan
    5229,Joint Account,527.49,Google,General Expenses,2022-06-07,Japan
    5230,Checking,209.46,ACME,Groceries,2022-10-03,Indonesia
    5231,Savings,865.76,Amazon,"Dining, General Expenses",2022-12-20,Japan
    5232,Savings,284.49,ACME,"Entertainment, General Expenses, Dining, Groceries",2022-10-23,Japan
    5233,Savings,11.81,Uber,"Entertainment, Dining, Groceries, General Expenses, Transportation",2022-07-12,Australia
    5234,Checking,631.08,Walmart,Dining,2022-12-18,Singapore
    5235,Joint Account,696.78,Starbucks,"General Expenses, Entertainment, Groceries, Dining, Travel",2022-06-25,Australia
    5236,Joint Account,78.03,Fairprice,Entertainment,2022-10-12,Japan
    5237,Savings,474.68,Google,"Transportation, Travel",2022-10-29,Singapore
    5238,Joint Account,142.84,Starbucks,"Travel, Entertainment, Dining",2022-08-02,Indonesia
    5239,Joint Account,383.12,Google,Dining,2022-07-02,Indonesia
    5240,Checking,613.04,Grab,"Transportation, Travel, General Expenses, Entertainment",2022-11-13,Indonesia
    5241,Joint Account,927.82,Starbucks,Travel,2022-09-12,Indonesia
    5242,Joint Account,539.65,Amazon,"General Expenses, Transportation, Entertainment, Travel, Dining, Groceries",2022-11-25,Japan
    5243,Savings,704.15,Gojek,"Entertainment, Travel, General Expenses, Dining",2022-07-26,Japan
    5244,Checking,96.31,Starbucks,"Travel, Entertainment",2022-07-28,Japan
    5245,Savings,340.33,Grab,"General Expenses, Transportation, Travel, Entertainment, Groceries",2022-10-27,Australia
    5246,Checking,105.39,ACME,"Groceries, Transportation",2022-08-07,Singapore
    5247,Savings,607.47,Google,"Entertainment, Travel",2022-09-25,Indonesia
    5248,Savings,286.47,ACME,"Travel, General Expenses, Dining, Transportation, Groceries, Entertainment",2022-09-02,Indonesia
    5249,Savings,127.97,Fairprice,"Transportation, General Expenses, Groceries, Dining",2022-08-27,Indonesia
    5250,Joint Account,818.94,Uber,"Entertainment, Travel",2022-08-22,Indonesia
    5251,Savings,786.27,Grab,"General Expenses, Transportation",2022-06-14,Singapore
    5252,Checking,32.05,Google,"Entertainment, Dining, Travel",2022-09-01,Indonesia
    5253,Savings,762.63,Gojek,"Entertainment, Transportation, Groceries, Dining, General Expenses",2022-07-29,Australia
    5254,Checking,456.56,ACME,"Dining, Entertainment, Groceries, Transportation",2022-12-02,Australia
    5255,Checking,853.46,Gojek,"General Expenses, Groceries, Travel, Dining, Entertainment",2022-12-21,Australia
    5256,Checking,975.47,Grab,"Groceries, Travel, General Expenses, Entertainment",2022-12-02,Indonesia
    5257,Savings,576.96,Walmart,"Travel, Groceries, Dining",2022-06-04,Japan
    5258,Joint Account,122.05,Gojek,Groceries,2022-10-17,Singapore
    5259,Savings,313.04,Walmart,"Travel, Groceries, Dining",2022-12-20,Singapore
    5260,Joint Account,443.63,Gojek,"Travel, Dining, Groceries, Transportation, Entertainment",2022-08-22,Australia
    5261,Joint Account,941.03,Gojek,"General Expenses, Groceries, Transportation, Dining",2022-07-12,Singapore
    5262,Checking,98.82,Google,"General Expenses, Groceries, Transportation",2022-08-26,Japan
    5263,Savings,32.5,Amazon,"Transportation, Travel, Groceries, Dining, Entertainment, General Expenses",2022-11-21,Indonesia
    5264,Joint Account,584.86,ACME,"Entertainment, Transportation, General Expenses, Travel, Groceries, Dining",2022-09-05,Japan
    5265,Joint Account,227.0,Grab,"Dining, General Expenses, Travel, Transportation, Groceries",2022-07-18,Singapore
    5266,Checking,560.34,Fairprice,Entertainment,2022-09-07,Japan
    5267,Savings,424.97,Gojek,"Transportation, Dining, General Expenses",2022-09-02,Japan
    5268,Savings,938.53,Grab,"General Expenses, Dining",2022-08-19,Singapore
    5269,Checking,195.85,Starbucks,"Travel, Entertainment, Groceries",2022-08-17,Japan
    5270,Savings,553.42,Starbucks,"General Expenses, Entertainment",2022-10-26,Singapore
    5271,Joint Account,801.0,ACME,Dining,2022-10-22,Australia
    5272,Joint Account,818.06,Gojek,"Travel, Transportation, Dining, Groceries, General Expenses, Entertainment",2022-06-25,Singapore
    5273,Savings,215.01,Amazon,"Travel, Transportation",2022-06-17,Japan
    5274,Checking,357.47,Uber,"Transportation, Dining, Groceries, Entertainment, Travel, General Expenses",2022-11-18,Australia
    5275,Savings,420.12,Starbucks,"Groceries, Transportation, Entertainment, Dining, General Expenses, Travel",2022-12-23,Singapore
    5276,Savings,821.05,Uber,Groceries,2022-07-05,Australia
    5277,Savings,592.31,Google,Groceries,2022-10-02,Japan
    5278,Checking,2.24,Grab,"Transportation, Travel, Dining",2022-10-19,Australia
    5279,Savings,427.94,Grab,"Travel, Entertainment, Transportation, Dining",2022-07-26,Indonesia
    5280,Savings,215.97,Gojek,"Travel, Dining, General Expenses, Transportation, Groceries, Entertainment",2022-12-24,Australia
    5281,Savings,186.64,Starbucks,"Groceries, Transportation, Entertainment",2022-06-13,Indonesia
    5282,Savings,328.3,Grab,Travel,2022-11-03,Indonesia
    5283,Savings,117.82,Amazon,"Travel, Transportation, General Expenses, Dining, Entertainment, Groceries",2022-12-04,Indonesia
    5284,Savings,375.68,ACME,"General Expenses, Entertainment, Dining, Travel",2022-11-07,Indonesia
    5285,Checking,990.33,Uber,"Groceries, Travel, Entertainment, General Expenses",2022-11-17,Japan
    5286,Checking,745.55,Fairprice,"Transportation, Dining, Groceries",2022-09-15,Australia
    5287,Joint Account,81.64,Uber,"Travel, Groceries, Transportation, Entertainment, Dining, General Expenses",2022-12-20,Singapore
    5288,Savings,490.69,Walmart,"Transportation, Entertainment, Travel, Groceries",2022-11-21,Singapore
    5289,Joint Account,80.92,Uber,"Transportation, Groceries",2022-07-31,Singapore
    5290,Checking,142.74,Walmart,"Groceries, Travel, Entertainment",2022-09-11,Australia
    5291,Joint Account,784.13,Walmart,"Travel, Dining",2022-08-13,Indonesia
    5292,Checking,662.67,Gojek,General Expenses,2022-10-01,Australia
    5293,Savings,875.49,Grab,"Dining, Groceries, General Expenses, Transportation, Travel",2022-06-04,Indonesia
    5294,Savings,82.97,Uber,"General Expenses, Transportation, Travel",2022-10-20,Australia
    5295,Savings,333.71,Walmart,"Entertainment, Travel, General Expenses, Transportation, Dining",2022-10-05,Japan
    5296,Joint Account,28.95,Grab,Travel,2022-09-22,Australia
    5297,Checking,642.42,Walmart,"Entertainment, Dining, Travel, General Expenses, Groceries",2022-11-03,Singapore
    5298,Savings,849.69,Amazon,"Transportation, Dining, Entertainment",2022-10-28,Japan
    5299,Joint Account,831.73,ACME,"Travel, General Expenses, Entertainment, Transportation",2022-08-06,Japan
    5300,Joint Account,603.35,Gojek,"Transportation, General Expenses, Dining, Travel, Entertainment, Groceries",2022-09-19,Singapore
    5301,Joint Account,618.96,Fairprice,Entertainment,2022-12-31,Japan
    5302,Joint Account,428.75,Gojek,"Entertainment, Groceries, Dining",2022-10-03,Australia
    5303,Joint Account,229.86,Amazon,"General Expenses, Transportation, Dining, Travel, Groceries",2022-08-11,Japan
    5304,Joint Account,531.72,Starbucks,"Dining, Groceries, Travel",2022-06-08,Indonesia
    5305,Savings,305.89,Uber,"Transportation, Entertainment, Dining, Groceries, Travel",2022-07-12,Indonesia
    5306,Savings,334.04,Grab,"Entertainment, Groceries, Transportation, Dining, Travel",2022-07-13,Singapore
    5307,Checking,501.68,Fairprice,"Travel, Groceries",2022-12-04,Indonesia
    5308,Savings,557.11,Google,"Transportation, Travel",2022-06-05,Singapore
    5309,Savings,941.49,ACME,"Entertainment, Transportation, General Expenses, Groceries",2022-12-18,Japan
    5310,Savings,774.84,ACME,"General Expenses, Travel, Transportation, Entertainment, Groceries, Dining",2022-12-24,Indonesia
    5311,Joint Account,411.88,Walmart,"General Expenses, Entertainment, Travel",2022-08-04,Singapore
    5312,Joint Account,10.24,ACME,Travel,2022-07-01,Japan
    5313,Checking,261.9,Walmart,"Travel, General Expenses, Entertainment, Groceries, Dining, Transportation",2022-09-26,Singapore
    5314,Checking,206.52,Fairprice,"Transportation, Entertainment, Travel, Groceries, Dining, General Expenses",2022-07-22,Indonesia
    5315,Joint Account,134.31,Uber,Transportation,2022-12-09,Singapore
    5316,Checking,618.39,Grab,"Groceries, Transportation, Entertainment",2022-10-01,Japan
    5317,Checking,884.65,Walmart,"General Expenses, Entertainment",2022-12-13,Japan
    5318,Savings,334.8,Starbucks,"Groceries, Travel, General Expenses, Transportation",2022-12-10,Indonesia
    5319,Savings,266.66,Starbucks,"General Expenses, Groceries, Travel, Entertainment",2022-09-15,Indonesia
    5320,Savings,942.8,Walmart,"Travel, Transportation, Entertainment, Dining, Groceries",2022-06-02,Indonesia
    5321,Joint Account,789.21,Google,"Transportation, Travel, Groceries, Dining, General Expenses",2022-08-01,Japan
    5322,Savings,924.46,Grab,"Entertainment, Groceries, Travel, Dining, General Expenses",2022-06-17,Singapore
    5323,Savings,343.66,Amazon,"Travel, Entertainment, Transportation",2022-11-27,Australia
    5324,Savings,791.82,Uber,"Groceries, Transportation",2022-10-13,Singapore
    5325,Joint Account,313.93,Fairprice,"Groceries, General Expenses, Dining",2022-12-01,Australia
    5326,Savings,594.61,Uber,"Groceries, Transportation",2022-10-10,Japan
    5327,Joint Account,713.0,Google,"General Expenses, Transportation, Groceries",2022-11-13,Australia
    5328,Joint Account,468.56,Starbucks,"Groceries, Travel, Entertainment, General Expenses, Dining, Transportation",2022-10-01,Japan
    5329,Joint Account,50.3,Walmart,"Dining, Groceries",2022-12-20,Australia
    5330,Checking,351.61,Grab,"Dining, Groceries, Transportation",2022-12-03,Singapore
    5331,Checking,675.45,ACME,"Dining, Groceries",2022-10-09,Japan
    5332,Checking,268.71,Grab,"Transportation, Groceries",2022-09-21,Australia
    5333,Checking,638.53,Uber,"Entertainment, Dining, Groceries, Transportation",2022-09-12,Australia
    5334,Checking,621.3,Grab,Transportation,2022-10-14,Singapore
    5335,Joint Account,346.34,Gojek,"Transportation, Groceries, Travel",2022-12-23,Japan
    5336,Checking,390.43,Google,"Entertainment, General Expenses, Travel",2022-08-10,Singapore
    5337,Savings,710.33,Gojek,"Transportation, Groceries, Travel, Dining, Entertainment, General Expenses",2022-12-13,Australia
    5338,Savings,781.51,Walmart,"Entertainment, Dining, General Expenses, Travel",2022-06-03,Australia
    5339,Savings,379.14,Gojek,"Dining, General Expenses, Groceries, Travel, Transportation",2022-07-17,Indonesia
    5340,Savings,742.9,Amazon,"Transportation, Travel",2022-07-09,Singapore
    5341,Checking,92.55,Uber,"Dining, Transportation",2022-11-27,Indonesia
    5342,Savings,758.8,Walmart,"Entertainment, Groceries, Transportation, Dining, Travel",2022-07-14,Japan
    5343,Checking,366.47,Gojek,"General Expenses, Travel",2022-10-05,Japan
    5344,Joint Account,713.09,ACME,Groceries,2022-12-16,Singapore
    5345,Checking,757.95,Google,Entertainment,2022-09-13,Singapore
    5346,Joint Account,526.29,Walmart,"Transportation, Entertainment, Dining, Groceries, General Expenses, Travel",2022-06-30,Japan
    5347,Joint Account,666.2,Uber,General Expenses,2022-07-10,Singapore
    5348,Joint Account,291.11,Gojek,"Transportation, Groceries, Dining, Entertainment",2022-12-29,Australia
    5349,Savings,281.14,Starbucks,General Expenses,2022-10-12,Japan
    5350,Savings,698.0,Amazon,"Transportation, General Expenses, Entertainment, Travel, Dining",2022-11-16,Japan
    5351,Checking,489.04,Uber,"General Expenses, Travel, Transportation, Entertainment, Groceries, Dining",2022-07-03,Japan
    5352,Checking,529.39,Starbucks,"Dining, Travel, Entertainment",2022-09-29,Indonesia
    5353,Checking,278.37,Grab,"Entertainment, Dining, Groceries",2022-06-29,Japan
    5354,Checking,621.34,Amazon,"Entertainment, Dining, Travel, Transportation, General Expenses, Groceries",2022-08-16,Singapore
    5355,Checking,102.26,Grab,"Entertainment, Dining, Transportation, General Expenses",2022-07-10,Singapore
    5356,Joint Account,390.42,ACME,"Dining, Entertainment",2022-11-08,Singapore
    5357,Checking,191.31,Uber,"General Expenses, Travel, Transportation, Groceries",2022-06-24,Singapore
    5358,Savings,62.52,Gojek,"Groceries, Travel",2022-06-26,Singapore
    5359,Savings,49.94,Google,"Transportation, General Expenses, Dining, Entertainment",2022-09-17,Japan
    5360,Checking,415.48,Starbucks,"General Expenses, Entertainment, Dining",2022-10-04,Indonesia
    5361,Joint Account,861.59,ACME,General Expenses,2022-06-24,Singapore
    5362,Savings,442.04,ACME,"Travel, General Expenses",2022-08-02,Japan
    5363,Joint Account,160.43,Fairprice,"General Expenses, Entertainment, Dining, Travel",2022-10-03,Japan
    5364,Checking,236.48,Walmart,General Expenses,2022-10-06,Australia
    5365,Savings,536.12,Fairprice,"Travel, Groceries",2022-12-26,Japan
    5366,Checking,944.37,Google,"Groceries, Travel, General Expenses",2022-11-01,Indonesia
    5367,Checking,302.66,Starbucks,"General Expenses, Dining, Travel",2022-12-13,Australia
    5368,Joint Account,590.51,Gojek,"Entertainment, Transportation, Dining, Groceries",2022-09-01,Japan
    5369,Checking,235.67,Gojek,"Dining, General Expenses, Transportation, Entertainment, Groceries",2022-09-09,Australia
    5370,Savings,217.96,Grab,"Entertainment, Transportation, General Expenses",2022-12-20,Australia
    5371,Joint Account,451.95,Gojek,"Travel, General Expenses, Transportation",2022-12-01,Indonesia
    5372,Savings,463.26,Amazon,"Transportation, Groceries, Entertainment, Travel",2022-10-05,Japan
    5373,Savings,692.24,Starbucks,"Groceries, Travel, Dining, Transportation, General Expenses, Entertainment",2022-10-05,Indonesia
    5374,Savings,962.36,Walmart,"General Expenses, Dining, Transportation, Travel, Groceries, Entertainment",2022-06-17,Australia
    5375,Checking,112.17,Fairprice,"Dining, Travel, Entertainment, Transportation",2022-09-24,Australia
    5376,Savings,974.75,Google,"General Expenses, Groceries, Transportation, Entertainment, Travel",2022-06-26,Australia
    5377,Savings,132.87,Gojek,Dining,2022-06-29,Indonesia
    5378,Savings,237.51,ACME,"Dining, Travel, General Expenses, Groceries, Entertainment, Transportation",2022-07-19,Japan
    5379,Savings,207.76,Gojek,"General Expenses, Transportation, Travel",2022-10-04,Japan
    5380,Checking,259.34,ACME,"Entertainment, Transportation, Dining, Groceries, General Expenses",2022-07-31,Japan
    5381,Checking,91.53,Grab,"Transportation, Travel, Dining, Groceries",2022-10-16,Singapore
    5382,Savings,698.98,Grab,General Expenses,2022-10-18,Indonesia
    5383,Joint Account,647.09,Amazon,"General Expenses, Travel, Groceries",2022-06-20,Indonesia
    5384,Joint Account,657.12,Walmart,"Entertainment, Dining, Travel, General Expenses, Transportation, Groceries",2022-09-15,Singapore
    5385,Joint Account,603.71,Amazon,"Groceries, Entertainment",2022-09-01,Indonesia
    5386,Joint Account,671.96,Fairprice,"Transportation, Travel",2022-12-29,Indonesia
    5387,Checking,486.62,Uber,"Entertainment, Travel, Transportation, Groceries",2022-09-25,Indonesia
    5388,Joint Account,904.07,ACME,"Transportation, Groceries, General Expenses",2022-06-07,Singapore
    5389,Joint Account,519.59,Walmart,"Groceries, Dining, General Expenses",2022-06-09,Indonesia
    5390,Checking,76.08,Grab,"Groceries, Entertainment, Transportation, General Expenses, Travel",2022-09-18,Indonesia
    5391,Joint Account,298.54,Gojek,"Entertainment, Transportation, General Expenses",2022-09-01,Australia
    5392,Checking,862.56,Amazon,"Dining, Entertainment, General Expenses, Groceries, Transportation, Travel",2022-08-07,Singapore
    5393,Savings,489.02,Starbucks,"Travel, Groceries, Dining, Transportation",2022-08-25,Indonesia
    5394,Joint Account,205.3,Walmart,"Transportation, Groceries, Travel, Entertainment, General Expenses, Dining",2022-09-22,Japan
    5395,Checking,958.67,Starbucks,"Dining, Transportation",2022-09-30,Japan
    5396,Joint Account,251.37,Starbucks,"General Expenses, Groceries, Transportation, Dining, Entertainment, Travel",2022-07-19,Singapore
    5397,Savings,291.87,Starbucks,"Groceries, Travel, Dining",2022-07-12,Indonesia
    5398,Savings,52.12,Walmart,"Entertainment, Dining",2022-08-23,Japan
    5399,Checking,958.25,Fairprice,"Groceries, General Expenses, Transportation, Entertainment, Dining, Travel",2022-06-30,Japan
    5400,Joint Account,507.01,Grab,"General Expenses, Entertainment, Groceries",2022-08-07,Indonesia
    5401,Checking,551.94,Fairprice,"Transportation, Dining",2022-09-20,Japan
    5402,Joint Account,665.79,Fairprice,"Travel, Groceries, General Expenses, Dining, Entertainment, Transportation",2022-06-08,Australia
    5403,Joint Account,352.78,Walmart,"General Expenses, Transportation, Entertainment",2022-06-14,Japan
    5404,Savings,568.4,Fairprice,"Travel, Transportation, Dining, Groceries, General Expenses",2022-12-28,Japan
    5405,Checking,267.55,Grab,"Travel, Dining, Entertainment, Groceries",2022-11-12,Indonesia
    5406,Savings,655.07,ACME,"Entertainment, General Expenses, Groceries, Transportation",2022-11-24,Singapore
    5407,Joint Account,47.2,Amazon,"Travel, Entertainment",2022-07-16,Singapore
    5408,Joint Account,737.06,ACME,"Dining, Entertainment, Travel, General Expenses",2022-07-01,Indonesia
    5409,Savings,834.15,Amazon,"Entertainment, General Expenses, Transportation",2022-07-27,Australia
    5410,Checking,948.68,Fairprice,"Groceries, Travel, General Expenses, Entertainment, Transportation, Dining",2022-06-28,Singapore
    5411,Joint Account,241.51,ACME,"General Expenses, Groceries, Travel",2022-11-27,Australia
    5412,Joint Account,882.11,Uber,"General Expenses, Dining",2022-12-03,Indonesia
    5413,Savings,661.9,Uber,"Entertainment, Groceries, Transportation",2022-06-14,Australia
    5414,Checking,290.73,Uber,"Travel, Groceries, Dining",2022-10-08,Australia
    5415,Joint Account,277.93,Gojek,"Travel, Dining",2022-09-15,Singapore
    5416,Joint Account,52.15,Fairprice,"Dining, General Expenses, Entertainment, Transportation",2022-09-03,Japan
    5417,Checking,345.51,Google,"Entertainment, Travel, General Expenses, Transportation, Dining",2022-06-10,Singapore
    5418,Joint Account,107.91,Uber,"Groceries, General Expenses, Travel, Transportation, Dining, Entertainment",2022-10-24,Japan
    5419,Savings,556.14,Amazon,"General Expenses, Transportation, Dining, Groceries, Entertainment, Travel",2022-08-04,Australia
    5420,Savings,74.53,Fairprice,"Groceries, Dining, Transportation, Travel, Entertainment, General Expenses",2022-08-13,Indonesia
    5421,Joint Account,490.2,Starbucks,"Travel, Groceries, Entertainment, Dining, General Expenses",2022-09-20,Indonesia
    5422,Savings,742.58,Google,Travel,2022-06-27,Indonesia
    5423,Savings,990.29,Gojek,"Dining, Groceries",2022-08-25,Singapore
    5424,Checking,335.81,ACME,"Transportation, Dining, Travel, General Expenses",2022-06-22,Australia
    5425,Savings,382.49,Uber,"Dining, Transportation, Groceries",2022-09-18,Japan
    5426,Joint Account,727.45,Starbucks,Travel,2022-09-15,Australia
    5427,Savings,856.42,Fairprice,"Travel, General Expenses, Dining, Groceries",2022-12-03,Singapore
    5428,Savings,841.65,Grab,Travel,2022-12-04,Japan
    5429,Joint Account,684.43,ACME,"General Expenses, Entertainment",2022-09-06,Singapore
    5430,Joint Account,449.51,Amazon,"Transportation, General Expenses, Dining, Travel",2022-07-18,Indonesia
    5431,Savings,831.55,Amazon,"Groceries, Transportation, Entertainment, General Expenses, Travel",2022-08-25,Singapore
    5432,Checking,146.06,Uber,"Groceries, Entertainment, Dining, General Expenses, Travel, Transportation",2022-07-15,Indonesia
    5433,Checking,442.36,Walmart,"Entertainment, Transportation, Travel, Dining, General Expenses, Groceries",2022-10-13,Japan
    5434,Checking,612.85,Gojek,"Groceries, General Expenses, Dining, Transportation",2022-09-11,Singapore
    5435,Savings,165.01,Gojek,"Travel, Dining, Entertainment, General Expenses",2022-09-23,Japan
    5436,Checking,630.53,Starbucks,"Travel, Dining",2022-07-10,Singapore
    5437,Savings,600.65,Fairprice,"Dining, Entertainment, General Expenses, Transportation, Groceries",2022-12-25,Singapore
    5438,Savings,864.12,Starbucks,"Entertainment, Dining, Groceries, General Expenses, Transportation",2022-12-08,Indonesia
    5439,Checking,880.51,Walmart,"Groceries, Entertainment, Transportation, General Expenses",2022-10-07,Australia
    5440,Checking,489.56,Fairprice,"Travel, Entertainment, Transportation",2022-09-08,Australia
    5441,Joint Account,299.9,Gojek,"Groceries, General Expenses, Transportation, Dining, Entertainment, Travel",2022-11-13,Indonesia
    5442,Savings,524.14,Google,"Travel, Dining",2022-07-09,Indonesia
    5443,Savings,416.36,Gojek,"Entertainment, General Expenses",2022-09-13,Australia
    5444,Joint Account,540.96,Google,"Transportation, Entertainment, General Expenses, Dining, Travel, Groceries",2022-08-12,Singapore
    5445,Savings,933.36,Amazon,"Groceries, Travel, Transportation",2022-09-30,Australia
    5446,Joint Account,8.23,Walmart,Dining,2022-09-15,Australia
    5447,Checking,982.29,Fairprice,Entertainment,2022-07-05,Japan
    5448,Checking,782.82,Fairprice,"Dining, Transportation, Entertainment",2022-06-05,Singapore
    5449,Joint Account,377.61,Uber,"Dining, Travel",2022-12-17,Singapore
    5450,Savings,285.46,Grab,"Groceries, Entertainment, Transportation, Dining, General Expenses",2022-09-11,Singapore
    5451,Joint Account,666.1,ACME,"Entertainment, Travel",2022-08-29,Indonesia
    5452,Checking,363.29,Starbucks,"Transportation, Dining, Groceries",2022-11-14,Indonesia
    5453,Savings,317.58,ACME,"Transportation, Travel",2022-10-18,Indonesia
    5454,Joint Account,566.57,ACME,"Travel, Entertainment, Transportation",2022-07-04,Australia
    5455,Savings,728.41,Fairprice,"Entertainment, Travel, General Expenses, Groceries",2022-08-04,Japan
    5456,Checking,45.42,Uber,"Transportation, General Expenses, Travel, Entertainment, Groceries, Dining",2022-10-06,Australia
    5457,Savings,565.6,Fairprice,General Expenses,2022-06-16,Singapore
    5458,Joint Account,868.86,Grab,"Groceries, Dining",2022-06-14,Indonesia
    5459,Joint Account,111.62,Gojek,"Travel, Dining, General Expenses, Groceries",2022-09-30,Australia
    5460,Checking,729.78,Grab,"Entertainment, Groceries, Travel",2022-12-24,Japan
    5461,Checking,184.84,Amazon,"Transportation, Entertainment, Groceries",2022-08-24,Singapore
    5462,Checking,364.52,Gojek,"Transportation, Groceries, Travel, General Expenses, Entertainment, Dining",2022-10-06,Australia
    5463,Checking,35.69,Grab,"Groceries, Entertainment, General Expenses, Travel, Dining, Transportation",2022-08-22,Australia
    5464,Savings,651.4,Uber,"Transportation, Entertainment, Dining, General Expenses, Travel",2022-09-11,Australia
    5465,Savings,231.85,Walmart,"Entertainment, Dining, General Expenses, Transportation, Travel",2022-06-24,Indonesia
    5466,Checking,528.15,Google,"Travel, Transportation, General Expenses",2022-12-08,Singapore
    5467,Joint Account,362.83,Amazon,"Transportation, Groceries, Travel, Dining, Entertainment, General Expenses",2022-07-26,Japan
    5468,Joint Account,257.45,Google,Travel,2022-07-07,Japan
    5469,Checking,354.28,Walmart,"Travel, Transportation, General Expenses, Dining",2022-06-18,Indonesia
    5470,Savings,736.75,ACME,"General Expenses, Dining, Entertainment, Transportation, Travel",2022-09-28,Australia
    5471,Savings,682.8,Uber,Dining,2022-08-14,Singapore
    5472,Checking,29.91,Uber,Entertainment,2022-08-13,Japan
    5473,Checking,31.13,Walmart,Dining,2022-07-18,Australia
    5474,Checking,858.61,Walmart,"General Expenses, Transportation",2022-08-09,Japan
    5475,Joint Account,378.89,Fairprice,"Transportation, Groceries, Travel, General Expenses, Entertainment",2022-09-01,Indonesia
    5476,Checking,653.47,ACME,Dining,2022-10-10,Japan
    5477,Joint Account,55.4,Fairprice,Travel,2022-10-09,Australia
    5478,Savings,984.48,Fairprice,"Entertainment, General Expenses, Dining, Transportation, Groceries, Travel",2022-08-12,Japan
    5479,Checking,302.35,Walmart,General Expenses,2022-10-27,Singapore
    5480,Savings,709.37,Fairprice,"Dining, Travel, General Expenses",2022-07-31,Singapore
    5481,Joint Account,375.19,Walmart,"Entertainment, Travel, General Expenses, Groceries, Transportation, Dining",2022-07-24,Japan
    5482,Savings,812.38,Amazon,General Expenses,2022-06-04,Japan
    5483,Savings,545.47,Google,"Travel, General Expenses, Dining, Groceries, Entertainment",2022-06-13,Singapore
    5484,Savings,361.86,Starbucks,"Travel, General Expenses, Dining, Groceries, Entertainment, Transportation",2022-06-14,Singapore
    5485,Checking,535.11,Gojek,"Entertainment, General Expenses",2022-07-09,Indonesia
    5486,Joint Account,263.9,Starbucks,"Dining, Entertainment, Transportation",2022-12-17,Japan
    5487,Savings,1.87,Uber,"General Expenses, Entertainment",2022-12-29,Indonesia
    5488,Checking,270.11,Walmart,"Groceries, Transportation",2022-12-14,Indonesia
    5489,Checking,548.32,Walmart,Transportation,2022-12-01,Singapore
    5490,Checking,210.61,Starbucks,"Dining, Groceries, Travel",2022-11-02,Japan
    5491,Checking,737.86,Gojek,"Travel, Transportation, Dining, Entertainment, Groceries",2022-08-14,Australia
    5492,Checking,639.71,Starbucks,"Groceries, General Expenses, Travel",2022-11-09,Japan
    5493,Joint Account,120.17,Google,"Travel, General Expenses, Transportation, Groceries, Entertainment",2022-12-18,Singapore
    5494,Checking,379.99,Google,"General Expenses, Groceries, Travel, Transportation, Dining, Entertainment",2022-06-07,Indonesia
    5495,Joint Account,648.52,Gojek,"Transportation, General Expenses, Dining, Entertainment, Travel, Groceries",2022-09-13,Japan
    5496,Joint Account,237.19,Starbucks,"Transportation, Travel",2022-11-25,Indonesia
    5497,Savings,810.02,Starbucks,Transportation,2022-08-17,Indonesia
    5498,Savings,273.9,Fairprice,"Entertainment, General Expenses",2022-09-23,Japan
    5499,Savings,783.05,Grab,"Entertainment, Travel, Transportation, General Expenses, Dining",2022-10-16,Indonesia
    5500,Checking,649.3,Walmart,"Entertainment, General Expenses",2022-08-04,Singapore
    5501,Savings,856.94,Grab,"Dining, Travel",2022-11-09,Australia
    5502,Joint Account,893.97,Grab,"Travel, General Expenses, Groceries",2022-11-14,Japan
    5503,Checking,165.44,ACME,"Groceries, Transportation",2022-06-20,Japan
    5504,Checking,884.62,Fairprice,"Travel, Dining, Transportation, Groceries, General Expenses",2022-12-30,Japan
    5505,Savings,997.5,Google,"Travel, Entertainment",2022-06-11,Singapore
    5506,Checking,135.47,ACME,"General Expenses, Entertainment, Travel, Transportation, Groceries, Dining",2022-10-14,Indonesia
    5507,Savings,741.1,Google,"General Expenses, Dining, Travel, Groceries, Entertainment",2022-11-30,Indonesia
    5508,Checking,633.3,Grab,"Entertainment, General Expenses, Travel, Groceries, Dining, Transportation",2022-09-26,Singapore
    5509,Joint Account,337.95,Grab,"Transportation, Travel, Groceries, Dining, Entertainment",2022-10-10,Australia
    5510,Joint Account,753.01,Google,"Groceries, Entertainment, General Expenses, Travel, Dining, Transportation",2022-10-30,Australia
    5511,Savings,361.18,Grab,"Dining, Transportation, Travel, General Expenses, Groceries, Entertainment",2022-10-21,Singapore
    5512,Joint Account,278.68,Grab,"General Expenses, Entertainment, Transportation",2022-09-19,Japan
    5513,Joint Account,676.74,Starbucks,Travel,2022-07-26,Australia
    5514,Checking,751.41,Uber,"Transportation, General Expenses, Travel, Groceries, Entertainment, Dining",2022-08-13,Indonesia
    5515,Checking,750.55,Walmart,"Entertainment, Travel, Dining, Groceries, General Expenses",2022-11-03,Australia
    5516,Checking,334.18,Google,"Entertainment, Transportation, Dining, Travel, General Expenses, Groceries",2022-12-05,Indonesia
    5517,Joint Account,628.7,Uber,General Expenses,2022-07-13,Singapore
    5518,Savings,344.02,Uber,Groceries,2022-06-15,Australia
    5519,Savings,824.43,Google,"General Expenses, Groceries, Entertainment",2022-11-20,Australia
    5520,Checking,266.11,Starbucks,"Entertainment, Dining, Travel, Transportation, Groceries",2022-12-08,Singapore
    5521,Checking,835.2,ACME,"Entertainment, Transportation, Travel, Dining, General Expenses",2022-08-09,Japan
    5522,Joint Account,874.24,Walmart,Transportation,2022-10-17,Indonesia
    5523,Savings,268.48,Amazon,"Groceries, Entertainment, Travel, General Expenses, Dining, Transportation",2022-12-18,Australia
    5524,Joint Account,909.67,Amazon,"General Expenses, Groceries, Travel",2022-12-29,Indonesia
    5525,Checking,156.57,Google,"Entertainment, Groceries",2022-10-13,Japan
    5526,Joint Account,821.55,Amazon,"Transportation, Dining, Travel, Entertainment",2022-10-24,Singapore
    5527,Savings,300.87,Starbucks,"Entertainment, General Expenses, Groceries",2022-12-22,Indonesia
    5528,Checking,124.01,Starbucks,"Dining, Groceries",2022-06-24,Indonesia
    5529,Checking,200.25,Walmart,"Travel, Transportation, Groceries",2022-12-06,Australia
    5530,Checking,56.39,Walmart,"Dining, Transportation, General Expenses, Groceries, Travel",2022-07-12,Australia
    5531,Savings,405.77,Starbucks,"Groceries, General Expenses, Dining, Entertainment",2022-12-15,Japan
    5532,Checking,715.19,Gojek,"Travel, General Expenses, Transportation, Groceries",2022-07-11,Japan
    5533,Joint Account,49.24,Google,Travel,2022-10-23,Indonesia
    5534,Joint Account,743.07,Grab,"Travel, Transportation, General Expenses, Groceries",2022-07-12,Australia
    5535,Checking,550.93,Google,"General Expenses, Dining, Transportation",2022-11-08,Indonesia
    5536,Joint Account,811.13,Walmart,Entertainment,2022-11-26,Australia
    5537,Joint Account,137.25,Fairprice,"Entertainment, Transportation, Groceries",2022-12-16,Indonesia
    5538,Checking,446.12,Starbucks,"Groceries, Dining",2022-09-09,Japan
    5539,Joint Account,875.38,Walmart,"Groceries, Entertainment, General Expenses, Dining",2022-07-14,Australia
    5540,Checking,974.02,Google,"Transportation, Travel, Entertainment, General Expenses, Dining",2022-10-28,Australia
    5541,Joint Account,21.57,Starbucks,Dining,2022-12-21,Indonesia
    5542,Checking,429.53,Uber,"Entertainment, Groceries, Travel",2022-10-18,Singapore
    5543,Savings,343.91,ACME,"Groceries, Transportation, Entertainment, General Expenses, Travel, Dining",2022-07-17,Indonesia
    5544,Checking,671.76,Starbucks,Groceries,2022-12-21,Indonesia
    5545,Joint Account,848.24,Uber,General Expenses,2022-06-23,Indonesia
    5546,Joint Account,849.95,Fairprice,"Dining, Groceries, General Expenses, Travel, Entertainment",2022-06-06,Singapore
    5547,Joint Account,73.54,Walmart,"General Expenses, Dining",2022-07-29,Japan
    5548,Savings,426.63,Uber,Entertainment,2022-10-09,Indonesia
    5549,Joint Account,976.34,Walmart,"Groceries, Dining, Entertainment, Transportation",2022-10-22,Indonesia
    5550,Savings,443.75,Grab,"Transportation, Groceries, Travel",2022-10-04,Indonesia
    5551,Savings,822.6,Walmart,"Transportation, Groceries, General Expenses, Entertainment, Dining",2022-06-13,Japan
    5552,Checking,687.4,Fairprice,"Entertainment, General Expenses, Dining, Travel",2022-12-23,Singapore
    5553,Savings,472.63,Google,Entertainment,2022-08-17,Australia
    5554,Savings,768.9,Gojek,"Dining, Travel, Entertainment",2022-12-23,Singapore
    5555,Joint Account,531.59,Grab,"General Expenses, Entertainment, Travel, Groceries, Transportation",2022-07-20,Japan
    5556,Savings,676.3,Amazon,General Expenses,2022-11-03,Australia
    5557,Joint Account,357.12,Amazon,"Travel, General Expenses, Entertainment, Dining",2022-11-03,Australia
    5558,Checking,778.38,Walmart,"Groceries, Entertainment, Dining, General Expenses",2022-10-19,Australia
    5559,Joint Account,756.84,Gojek,"Dining, Groceries, Transportation, Travel, General Expenses, Entertainment",2022-08-04,Japan
    5560,Joint Account,670.73,Grab,"Entertainment, Dining, Groceries, Travel, General Expenses",2022-06-17,Australia
    5561,Joint Account,352.43,Starbucks,"Transportation, Travel, Dining, Entertainment, Groceries",2022-08-03,Australia
    5562,Joint Account,884.06,Gojek,Groceries,2022-06-19,Indonesia
    5563,Joint Account,633.99,Grab,"General Expenses, Entertainment, Transportation, Groceries, Dining, Travel",2022-08-01,Japan
    5564,Checking,216.78,Amazon,"Transportation, General Expenses, Groceries, Entertainment, Dining, Travel",2022-07-20,Singapore
    5565,Joint Account,76.75,Grab,Entertainment,2022-12-22,Indonesia
    5566,Checking,784.7,Uber,Groceries,2022-08-04,Australia
    5567,Joint Account,472.5,Google,"Groceries, Transportation, Travel",2022-10-01,Singapore
    5568,Savings,108.85,Gojek,"Dining, Groceries, Entertainment, Travel, General Expenses",2022-12-25,Australia
    5569,Checking,902.53,Google,General Expenses,2022-07-11,Australia
    5570,Joint Account,601.09,Amazon,"Dining, Travel, General Expenses, Entertainment",2022-09-06,Australia
    5571,Joint Account,866.81,Starbucks,Transportation,2022-12-21,Australia
    5572,Checking,570.27,Uber,"General Expenses, Entertainment, Travel, Transportation, Groceries, Dining",2022-09-21,Australia
    5573,Joint Account,913.79,Gojek,"Transportation, Dining, Groceries, General Expenses, Entertainment, Travel",2022-11-14,Indonesia
    5574,Savings,288.28,ACME,"Travel, Dining, General Expenses",2022-08-22,Singapore
    5575,Checking,821.67,Starbucks,"Groceries, Travel, General Expenses, Entertainment, Transportation, Dining",2022-12-23,Singapore
    5576,Joint Account,961.51,Starbucks,"Travel, Dining, Entertainment, Groceries",2022-11-13,Indonesia
    5577,Joint Account,746.29,Google,"General Expenses, Travel",2022-11-30,Japan
    5578,Joint Account,111.06,Google,"Entertainment, Groceries, General Expenses, Travel",2022-06-27,Japan
    5579,Joint Account,708.69,Starbucks,"Transportation, Entertainment, General Expenses",2022-09-10,Singapore
    5580,Joint Account,156.75,Google,"General Expenses, Transportation, Dining, Entertainment, Groceries, Travel",2022-06-06,Japan
    5581,Checking,182.37,Google,"Dining, Transportation, Groceries",2022-08-04,Japan
    5582,Checking,229.9,Walmart,"Entertainment, Groceries",2022-07-16,Singapore
    5583,Joint Account,183.07,Amazon,"Dining, General Expenses, Entertainment",2022-12-08,Japan
    5584,Joint Account,707.67,Grab,"Groceries, Dining, Transportation, Travel, Entertainment, General Expenses",2022-10-11,Indonesia
    5585,Savings,326.75,ACME,"Transportation, Dining",2022-11-21,Singapore
    5586,Checking,500.6,Google,Transportation,2022-11-22,Japan
    5587,Joint Account,602.24,Walmart,"General Expenses, Dining, Groceries",2022-10-23,Indonesia
    5588,Checking,571.3,Uber,"Entertainment, Groceries, Travel, Transportation, Dining, General Expenses",2022-09-08,Australia
    5589,Joint Account,338.47,Google,"Travel, General Expenses, Entertainment, Dining",2022-09-15,Singapore
    5590,Checking,412.32,Starbucks,"Entertainment, Transportation, Groceries, Travel",2022-07-07,Indonesia
    5591,Joint Account,710.4,Google,Dining,2022-06-17,Singapore
    5592,Checking,687.79,Starbucks,General Expenses,2022-10-02,Japan
    5593,Checking,684.25,Amazon,"General Expenses, Transportation, Entertainment, Travel, Groceries",2022-08-10,Singapore
    5594,Checking,334.77,Gojek,"Groceries, General Expenses, Travel, Dining, Transportation, Entertainment",2022-06-13,Singapore
    5595,Savings,867.31,Gojek,"Travel, Transportation, Dining, General Expenses, Groceries, Entertainment",2022-12-22,Australia
    5596,Savings,466.21,Gojek,"Dining, Entertainment, Transportation, Groceries, Travel",2022-07-15,Japan
    5597,Joint Account,620.14,Fairprice,"Dining, Groceries, Transportation",2022-06-29,Indonesia
    5598,Joint Account,771.1,Starbucks,Groceries,2022-11-28,Australia
    5599,Savings,467.87,Fairprice,"Transportation, Entertainment, General Expenses, Groceries, Travel, Dining",2022-10-23,Japan
    5600,Joint Account,749.53,Gojek,"Dining, Entertainment, General Expenses, Transportation, Groceries, Travel",2022-11-25,Australia
    5601,Joint Account,298.69,Walmart,"Entertainment, Transportation, Groceries",2022-09-12,Singapore
    5602,Savings,796.8,Uber,"General Expenses, Dining, Groceries, Travel",2022-08-18,Indonesia
    5603,Joint Account,323.27,Walmart,"Transportation, Entertainment",2022-09-25,Japan
    5604,Savings,544.4,Uber,Travel,2022-07-08,Singapore
    5605,Checking,647.43,Amazon,"Groceries, Travel",2022-07-05,Singapore
    5606,Checking,169.98,Uber,"Entertainment, Transportation, Groceries, General Expenses, Travel",2022-12-30,Australia
    5607,Joint Account,299.43,Starbucks,"General Expenses, Entertainment",2022-11-14,Japan
    5608,Savings,849.17,Uber,"Groceries, Entertainment, Travel, General Expenses",2022-11-08,Indonesia
    5609,Savings,360.7,Amazon,"Transportation, Entertainment, Dining, Travel",2022-07-20,Japan
    5610,Savings,63.71,Amazon,"Dining, Travel, General Expenses, Entertainment, Groceries, Transportation",2022-08-14,Japan
    5611,Savings,912.23,Walmart,"Dining, General Expenses, Transportation, Entertainment, Groceries",2022-09-27,Australia
    5612,Checking,808.8,Walmart,"Transportation, Groceries, Dining",2022-09-12,Indonesia
    5613,Joint Account,400.33,Walmart,"Transportation, Entertainment, Travel, General Expenses, Dining, Groceries",2022-06-24,Australia
    5614,Joint Account,999.08,Fairprice,"General Expenses, Entertainment, Groceries, Transportation",2022-11-26,Singapore
    5615,Checking,945.47,Fairprice,"Groceries, Transportation",2022-10-04,Japan
    5616,Joint Account,918.24,Uber,"Entertainment, General Expenses, Groceries, Dining, Transportation",2022-08-04,Singapore
    5617,Savings,795.34,Uber,"Transportation, General Expenses, Travel, Groceries, Dining",2022-07-26,Singapore
    5618,Joint Account,720.41,Starbucks,Groceries,2022-06-13,Australia
    5619,Savings,909.62,Walmart,"Transportation, Travel, Dining, General Expenses, Entertainment, Groceries",2022-07-09,Singapore
    5620,Joint Account,477.96,Grab,"Dining, General Expenses, Entertainment, Groceries, Travel",2022-07-07,Japan
    5621,Joint Account,126.99,ACME,"General Expenses, Dining, Entertainment, Groceries, Transportation, Travel",2022-12-26,Australia
    5622,Checking,928.11,Google,Transportation,2022-08-03,Japan
    5623,Savings,967.51,Uber,"Entertainment, Transportation, Dining, General Expenses, Groceries, Travel",2022-12-09,Australia
    5624,Checking,236.37,Gojek,"Transportation, Groceries, Entertainment, General Expenses",2022-09-20,Australia
    5625,Savings,348.3,Fairprice,"General Expenses, Travel, Dining",2022-06-18,Indonesia
    5626,Checking,328.2,Starbucks,"Travel, Entertainment, General Expenses, Transportation, Dining, Groceries",2022-08-15,Australia
    5627,Savings,520.55,Gojek,"Transportation, Groceries, Entertainment, Dining, Travel",2022-09-05,Australia
    5628,Joint Account,54.72,Google,"Entertainment, Dining, General Expenses, Travel, Groceries",2022-07-14,Australia
    5629,Joint Account,530.91,ACME,"Transportation, Entertainment",2022-12-21,Japan
    5630,Checking,593.94,Uber,"Entertainment, Transportation, General Expenses, Groceries",2022-07-23,Singapore
    5631,Checking,515.72,Gojek,"Groceries, Dining, General Expenses, Transportation",2022-07-13,Singapore
    5632,Savings,339.66,Fairprice,"Groceries, Dining, Travel, Transportation",2022-09-12,Japan
    5633,Checking,702.41,Grab,Travel,2022-08-28,Australia
    5634,Savings,124.06,ACME,"General Expenses, Transportation, Dining",2022-06-25,Australia
    5635,Savings,548.66,Uber,"General Expenses, Travel, Dining, Groceries, Transportation, Entertainment",2022-08-19,Indonesia
    5636,Savings,530.82,Starbucks,"Entertainment, General Expenses, Transportation",2022-10-17,Singapore
    5637,Checking,37.98,Google,"General Expenses, Dining, Groceries, Travel, Transportation, Entertainment",2022-07-07,Australia
    5638,Savings,603.99,Grab,"Travel, Dining, General Expenses, Transportation, Groceries, Entertainment",2022-12-30,Indonesia
    5639,Checking,248.38,Grab,"Travel, Groceries, General Expenses",2022-09-30,Singapore
    5640,Joint Account,471.46,Walmart,"Entertainment, Dining, Transportation, General Expenses, Travel, Groceries",2022-11-19,Singapore
    5641,Savings,815.36,Gojek,General Expenses,2022-11-29,Australia
    5642,Joint Account,817.19,ACME,"Dining, Entertainment, Travel, General Expenses, Transportation",2022-10-28,Singapore
    5643,Checking,926.41,Google,"Groceries, Transportation, Dining, Travel, General Expenses, Entertainment",2022-10-04,Australia
    5644,Checking,806.41,Amazon,"Groceries, Entertainment, General Expenses, Dining, Transportation",2022-07-22,Indonesia
    5645,Joint Account,959.31,ACME,Dining,2022-07-15,Singapore
    5646,Savings,220.5,Google,"Entertainment, Transportation, General Expenses, Travel",2022-08-26,Australia
    5647,Checking,552.25,Gojek,"Groceries, Transportation, Entertainment, Travel, General Expenses, Dining",2022-11-01,Singapore
    5648,Joint Account,73.62,Gojek,"General Expenses, Entertainment, Groceries, Transportation",2022-07-17,Australia
    5649,Savings,53.68,Gojek,Entertainment,2022-10-14,Indonesia
    5650,Checking,536.83,Grab,Travel,2022-12-29,Australia
    5651,Joint Account,67.94,Walmart,"General Expenses, Entertainment, Transportation",2022-11-09,Japan
    5652,Joint Account,363.1,Walmart,"Entertainment, Groceries, Dining",2022-06-20,Australia
    5653,Savings,178.37,Walmart,"General Expenses, Dining, Travel, Entertainment, Groceries, Transportation",2022-12-15,Japan
    5654,Checking,444.61,Uber,"Groceries, Travel, Transportation, General Expenses",2022-07-02,Indonesia
    5655,Joint Account,738.46,Amazon,"Dining, Travel, General Expenses, Entertainment, Groceries, Transportation",2022-06-12,Indonesia
    5656,Checking,279.64,Uber,"Transportation, Groceries, Dining, Entertainment, Travel",2022-11-02,Indonesia
    5657,Joint Account,688.65,Walmart,"General Expenses, Groceries, Travel, Dining, Entertainment",2022-07-20,Indonesia
    5658,Checking,799.55,Uber,"Groceries, Entertainment, General Expenses, Travel, Transportation, Dining",2022-08-03,Japan
    5659,Savings,714.19,Uber,"Transportation, Groceries, General Expenses",2022-08-28,Japan
    5660,Savings,726.24,Uber,"Entertainment, Transportation, Travel, Dining, General Expenses",2022-06-17,Indonesia
    5661,Joint Account,504.34,ACME,"Travel, Entertainment",2022-09-30,Singapore
    5662,Checking,6.16,Uber,"Groceries, General Expenses, Dining",2022-10-01,Indonesia
    5663,Checking,987.69,Starbucks,"General Expenses, Dining, Transportation, Travel, Groceries, Entertainment",2022-06-20,Australia
    5664,Savings,698.3,Gojek,"Entertainment, General Expenses",2022-09-09,Japan
    5665,Joint Account,878.18,Gojek,Dining,2022-07-22,Indonesia
    5666,Joint Account,227.51,ACME,Transportation,2022-08-05,Japan
    5667,Joint Account,230.92,Walmart,"Dining, Groceries, Travel, Transportation, General Expenses, Entertainment",2022-07-18,Singapore
    5668,Savings,414.23,Grab,"Groceries, Travel, Transportation",2022-11-13,Indonesia
    5669,Checking,585.47,Gojek,Groceries,2022-07-16,Australia
    5670,Savings,730.06,Uber,"Entertainment, Travel, Dining, Groceries",2022-07-26,Australia
    5671,Checking,567.9,Gojek,"Transportation, General Expenses, Travel, Entertainment",2022-08-11,Indonesia
    5672,Savings,267.03,Gojek,Dining,2022-07-17,Indonesia
    5673,Savings,925.86,Amazon,"Travel, General Expenses, Dining, Transportation",2022-11-25,Australia
    5674,Savings,28.24,Walmart,"Groceries, Entertainment, Transportation, Dining",2022-06-17,Indonesia
    5675,Joint Account,507.19,Google,"Groceries, Transportation, Entertainment, General Expenses, Dining, Travel",2022-11-14,Indonesia
    5676,Checking,697.71,Amazon,"Travel, General Expenses, Groceries, Entertainment, Dining",2022-06-11,Japan
    5677,Checking,53.28,Fairprice,"General Expenses, Entertainment, Dining, Groceries, Transportation",2022-07-17,Singapore
    5678,Joint Account,708.91,Starbucks,"Transportation, General Expenses, Travel",2022-09-25,Australia
    5679,Joint Account,866.97,ACME,"Transportation, Travel",2022-09-10,Japan
    5680,Savings,873.0,Walmart,"Groceries, Transportation, Travel",2022-12-20,Indonesia
    5681,Checking,450.44,Amazon,"General Expenses, Groceries, Dining, Travel, Entertainment, Transportation",2022-07-07,Singapore
    5682,Savings,845.02,Google,Transportation,2022-12-23,Singapore
    5683,Checking,434.27,Google,"Dining, General Expenses, Travel",2022-10-14,Australia
    5684,Checking,937.92,Walmart,"Travel, General Expenses, Transportation, Entertainment, Dining, Groceries",2022-06-08,Japan
    5685,Checking,819.09,Starbucks,"Dining, Transportation, Entertainment, Travel, Groceries, General Expenses",2022-12-21,Indonesia
    5686,Savings,558.36,Google,Entertainment,2022-06-14,Indonesia
    5687,Joint Account,802.64,Fairprice,"Dining, Groceries, Transportation",2022-12-31,Australia
    5688,Joint Account,767.47,Uber,General Expenses,2022-06-07,Singapore
    5689,Joint Account,531.82,Grab,"Groceries, General Expenses, Transportation",2022-07-06,Japan
    5690,Savings,724.95,Fairprice,"Groceries, Travel, General Expenses",2022-12-06,Australia
    5691,Checking,420.4,Amazon,"Dining, Travel, Transportation, General Expenses, Entertainment, Groceries",2022-11-20,Singapore
    5692,Savings,85.3,Gojek,"Travel, Dining",2022-11-12,Singapore
    5693,Joint Account,612.61,Amazon,"Travel, Entertainment, General Expenses, Dining, Transportation",2022-09-05,Japan
    5694,Checking,399.69,Gojek,"Transportation, General Expenses, Travel, Dining",2022-10-17,Indonesia
    5695,Checking,334.53,Walmart,"Entertainment, Travel, Transportation, Dining, General Expenses",2022-10-22,Australia
    5696,Joint Account,536.74,Gojek,Groceries,2022-09-22,Japan
    5697,Joint Account,643.96,Fairprice,"General Expenses, Travel, Dining, Entertainment, Transportation, Groceries",2022-06-26,Japan
    5698,Savings,60.98,Fairprice,Travel,2022-12-13,Australia
    5699,Savings,657.44,Starbucks,"Travel, Dining",2022-08-23,Singapore
    5700,Savings,867.22,Amazon,"Groceries, Dining, Entertainment, Travel, General Expenses",2022-09-11,Japan
    5701,Joint Account,37.0,Grab,"Groceries, Dining, Travel, Transportation",2022-09-29,Japan
    5702,Savings,572.68,Fairprice,"Transportation, Groceries, Entertainment, General Expenses, Travel, Dining",2022-11-15,Singapore
    5703,Savings,433.56,Grab,"Entertainment, General Expenses, Travel",2022-09-14,Singapore
    5704,Savings,698.79,Gojek,"General Expenses, Entertainment, Dining, Travel, Transportation, Groceries",2022-07-08,Singapore
    5705,Joint Account,987.75,Google,Dining,2022-08-09,Singapore
    5706,Joint Account,461.54,Fairprice,Travel,2022-06-02,Australia
    5707,Checking,812.6,Starbucks,"General Expenses, Dining, Groceries, Entertainment, Transportation, Travel",2022-07-03,Japan
    5708,Joint Account,680.32,Google,"Dining, Travel, Groceries",2022-09-30,Indonesia
    5709,Joint Account,406.5,Walmart,"Transportation, Groceries",2022-12-01,Singapore
    5710,Checking,101.42,Uber,"Travel, General Expenses, Transportation",2022-11-09,Indonesia
    5711,Savings,853.5,Google,"General Expenses, Entertainment, Transportation, Dining",2022-07-29,Japan
    5712,Joint Account,572.17,Google,"Transportation, Dining",2022-06-10,Indonesia
    5713,Joint Account,148.16,ACME,"Transportation, Groceries",2022-07-28,Japan
    5714,Joint Account,361.0,Walmart,"General Expenses, Entertainment, Travel, Dining, Transportation",2022-10-14,Australia
    5715,Savings,330.2,Grab,Groceries,2022-11-21,Indonesia
    5716,Joint Account,996.89,Walmart,"Dining, Groceries, Transportation, General Expenses, Travel, Entertainment",2022-11-17,Indonesia
    5717,Joint Account,96.48,Amazon,"Travel, Groceries, Dining, Entertainment, Transportation",2022-09-26,Japan
    5718,Savings,109.18,Gojek,"Travel, General Expenses, Dining, Transportation",2022-11-02,Japan
    5719,Joint Account,993.84,Amazon,"General Expenses, Dining, Transportation, Entertainment, Travel",2022-08-12,Indonesia
    5720,Savings,729.95,Amazon,"Transportation, Travel, Groceries, Dining",2022-09-23,Australia
    5721,Checking,81.5,Amazon,"General Expenses, Entertainment, Travel, Dining, Transportation, Groceries",2022-08-22,Singapore
    5722,Joint Account,699.96,Uber,"General Expenses, Groceries",2022-11-05,Indonesia
    5723,Checking,569.03,Walmart,"Entertainment, Travel, Groceries, Transportation, General Expenses",2022-07-09,Australia
    5724,Savings,888.7,Starbucks,Travel,2022-12-11,Australia
    5725,Joint Account,545.98,Fairprice,"Groceries, Dining, Travel, General Expenses, Entertainment, Transportation",2022-10-13,Indonesia
    5726,Savings,394.41,Grab,"Travel, Transportation, Dining, Entertainment, Groceries",2022-11-23,Singapore
    5727,Joint Account,443.37,Fairprice,"General Expenses, Groceries, Transportation",2022-11-01,Australia
    5728,Savings,847.23,Uber,"Groceries, Dining, General Expenses, Transportation, Travel",2022-07-09,Japan
    5729,Checking,527.16,Starbucks,"General Expenses, Transportation, Travel, Dining",2022-07-31,Singapore
    5730,Joint Account,981.7,Grab,"Entertainment, Transportation, Travel",2022-10-07,Singapore
    5731,Checking,202.01,Amazon,"Groceries, General Expenses, Dining, Travel",2022-08-25,Japan
    5732,Savings,632.54,Amazon,"Entertainment, Dining, Travel",2022-07-23,Singapore
    5733,Joint Account,638.55,Google,"Transportation, Dining, Groceries, Travel, Entertainment",2022-07-02,Singapore
    5734,Joint Account,117.05,Fairprice,"Dining, Transportation",2022-12-18,Singapore
    5735,Joint Account,187.48,Walmart,Dining,2022-10-29,Indonesia
    5736,Checking,792.83,ACME,"Dining, Entertainment, Groceries",2022-07-22,Australia
    5737,Joint Account,475.05,Walmart,"Dining, Groceries",2022-10-03,Indonesia
    5738,Joint Account,251.25,Uber,"Entertainment, Groceries, Dining, General Expenses",2022-12-19,Singapore
    5739,Joint Account,726.08,Amazon,"Dining, Groceries",2022-08-11,Japan
    5740,Savings,844.82,Starbucks,"General Expenses, Entertainment",2022-10-31,Indonesia
    5741,Checking,318.06,Fairprice,"Dining, Groceries, General Expenses, Travel, Transportation, Entertainment",2022-06-27,Australia
    5742,Joint Account,81.49,Uber,"General Expenses, Transportation, Travel, Dining, Groceries",2022-07-12,Australia
    5743,Checking,740.43,Google,"Travel, Groceries, General Expenses, Entertainment, Dining",2022-07-23,Japan
    5744,Savings,178.3,Grab,"General Expenses, Entertainment, Travel, Transportation, Dining, Groceries",2022-09-01,Singapore
    5745,Joint Account,749.38,Starbucks,"Entertainment, Travel, Groceries, Dining",2022-09-24,Singapore
    5746,Savings,568.88,Fairprice,"Groceries, Dining, Travel, Entertainment, General Expenses, Transportation",2022-10-08,Australia
    5747,Checking,989.18,Fairprice,Dining,2022-06-21,Australia
    5748,Joint Account,876.93,Grab,"Entertainment, Groceries, Dining, Travel, Transportation",2022-12-04,Japan
    5749,Checking,360.6,Gojek,"Transportation, Entertainment, Travel, Groceries, Dining",2022-06-03,Japan
    5750,Savings,259.84,Amazon,"Dining, General Expenses, Groceries, Entertainment",2022-07-19,Indonesia
    5751,Savings,698.2,Grab,Groceries,2022-08-22,Singapore
    5752,Joint Account,459.26,Walmart,"Transportation, General Expenses, Dining, Entertainment, Groceries",2022-11-27,Indonesia
    5753,Checking,817.57,Uber,Dining,2022-06-02,Singapore
    5754,Checking,716.3,Fairprice,"General Expenses, Travel, Entertainment, Groceries, Transportation",2022-10-01,Japan
    5755,Savings,98.88,Google,"Transportation, General Expenses, Groceries, Travel, Dining",2022-09-10,Japan
    5756,Checking,899.99,Grab,"Dining, Transportation",2022-06-01,Indonesia
    5757,Savings,975.58,Uber,Groceries,2022-09-03,Singapore
    5758,Checking,535.97,Fairprice,"Transportation, Travel",2022-08-27,Australia
    5759,Checking,274.35,Uber,Travel,2022-07-14,Indonesia
    5760,Savings,22.04,Amazon,"Entertainment, Transportation, Travel, General Expenses, Groceries, Dining",2022-10-30,Indonesia
    5761,Joint Account,528.04,ACME,"Dining, General Expenses",2022-07-18,Indonesia
    5762,Joint Account,915.78,Uber,"Entertainment, Travel, Transportation, Dining, General Expenses",2022-06-22,Australia
    5763,Savings,82.26,Starbucks,"Entertainment, Travel, General Expenses, Groceries",2022-12-05,Japan
    5764,Joint Account,567.1,Walmart,"General Expenses, Entertainment",2022-12-22,Singapore
    5765,Savings,43.61,Uber,"Entertainment, Travel, Transportation",2022-12-13,Japan
    5766,Checking,678.46,ACME,"Groceries, Dining, General Expenses, Entertainment, Travel",2022-12-29,Singapore
    5767,Joint Account,123.68,Uber,"Dining, Entertainment, Travel, Groceries",2022-08-16,Japan
    5768,Savings,983.15,Walmart,"Transportation, Dining, Travel, Groceries, Entertainment, General Expenses",2022-12-10,Japan
    5769,Checking,181.8,Walmart,"Entertainment, Groceries",2022-06-11,Indonesia
    5770,Savings,734.94,Grab,"General Expenses, Travel, Entertainment, Dining",2022-07-25,Japan
    5771,Checking,13.41,Grab,"Travel, General Expenses, Transportation, Entertainment",2022-12-18,Japan
    5772,Checking,681.12,Fairprice,"Transportation, Dining, General Expenses, Groceries",2022-07-07,Indonesia
    5773,Checking,313.72,ACME,"Entertainment, Groceries, Transportation, General Expenses, Travel",2022-10-30,Japan
    5774,Checking,22.16,ACME,"General Expenses, Dining, Travel, Transportation, Entertainment, Groceries",2022-10-31,Japan
    5775,Savings,886.36,Google,"General Expenses, Groceries, Entertainment, Transportation",2022-09-01,Singapore
    5776,Checking,616.98,Amazon,"Dining, Groceries",2022-06-16,Indonesia
    5777,Joint Account,225.68,Starbucks,"Dining, Entertainment, Travel",2022-07-28,Singapore
    5778,Checking,98.41,Uber,"Dining, Groceries, Transportation",2022-12-05,Australia
    5779,Savings,373.38,Gojek,"Dining, Travel, Groceries",2022-09-29,Japan
    5780,Checking,841.49,Starbucks,Transportation,2022-09-07,Japan
    5781,Checking,315.39,Fairprice,"Transportation, Groceries, Travel",2022-11-14,Japan
    5782,Joint Account,752.12,Grab,"Dining, General Expenses, Entertainment, Groceries, Transportation, Travel",2022-12-11,Indonesia
    5783,Savings,590.64,Grab,Groceries,2022-06-23,Indonesia
    5784,Savings,841.81,Walmart,"General Expenses, Entertainment",2022-09-24,Japan
    5785,Checking,130.64,Fairprice,"Travel, Groceries, Entertainment, Transportation",2022-10-25,Singapore
    5786,Savings,138.03,ACME,"Groceries, Travel, General Expenses, Entertainment",2022-08-08,Australia
    5787,Joint Account,911.34,Google,"Dining, General Expenses, Entertainment, Travel, Transportation, Groceries",2022-11-27,Singapore
    5788,Checking,539.27,Grab,"Entertainment, General Expenses, Transportation, Dining",2022-11-05,Japan
    5789,Savings,395.7,Google,Transportation,2022-09-07,Indonesia
    5790,Savings,904.39,Uber,Groceries,2022-11-16,Singapore
    5791,Savings,522.17,Starbucks,"General Expenses, Travel",2022-10-29,Indonesia
    5792,Checking,627.29,Starbucks,Dining,2022-12-18,Singapore
    5793,Checking,394.24,Starbucks,"Dining, Groceries, General Expenses, Entertainment",2022-12-05,Japan
    5794,Checking,272.97,Uber,"Transportation, Dining, Travel, Entertainment",2022-12-06,Japan
    5795,Joint Account,527.89,Google,"Transportation, Entertainment",2022-08-30,Australia
    5796,Joint Account,866.52,Walmart,"Groceries, Dining, Entertainment, Transportation",2022-11-24,Indonesia
    5797,Savings,604.66,Uber,Dining,2022-09-28,Japan
    5798,Savings,811.57,Gojek,"Entertainment, Transportation, Dining, General Expenses, Groceries",2022-10-25,Australia
    5799,Savings,959.24,Fairprice,"Entertainment, General Expenses, Travel, Groceries, Dining, Transportation",2022-06-09,Japan
    5800,Joint Account,817.27,Gojek,"Groceries, General Expenses, Entertainment",2022-12-18,Japan
    5801,Joint Account,301.06,ACME,"Transportation, Entertainment, Travel, General Expenses, Dining, Groceries",2022-09-05,Australia
    5802,Checking,16.48,Uber,"Dining, Travel, Groceries, Entertainment, General Expenses",2022-11-25,Japan
    5803,Checking,51.98,Walmart,"General Expenses, Travel, Entertainment",2022-07-22,Indonesia
    5804,Joint Account,749.21,Uber,Transportation,2022-10-04,Japan
    5805,Savings,526.82,Google,"General Expenses, Entertainment, Travel, Groceries, Dining, Transportation",2022-06-16,Japan
    5806,Checking,375.13,Gojek,"Dining, Groceries, Transportation, Entertainment, General Expenses, Travel",2022-12-20,Japan
    5807,Joint Account,225.33,Fairprice,"Groceries, Dining, Transportation, General Expenses, Travel, Entertainment",2022-06-19,Australia
    5808,Checking,425.97,Uber,Entertainment,2022-08-02,Indonesia
    5809,Savings,890.99,Gojek,"Entertainment, General Expenses, Dining, Travel, Transportation",2022-07-09,Japan
    5810,Savings,158.41,Google,Entertainment,2022-10-01,Indonesia
    5811,Savings,665.0,Starbucks,"Transportation, Travel, Groceries",2022-07-12,Australia
    5812,Checking,70.44,Walmart,"Transportation, Travel",2022-10-14,Japan
    5813,Savings,108.95,Google,"Travel, Entertainment, Transportation, Dining, General Expenses, Groceries",2022-11-23,Indonesia
    5814,Joint Account,147.33,Uber,Entertainment,2022-11-09,Australia
    5815,Joint Account,106.1,Starbucks,"Travel, Transportation, Entertainment, Dining, Groceries, General Expenses",2022-11-12,Indonesia
    5816,Joint Account,611.12,Grab,"Dining, Groceries, Travel, Transportation, Entertainment, General Expenses",2022-11-20,Indonesia
    5817,Savings,491.55,Starbucks,Entertainment,2022-08-03,Indonesia
    5818,Joint Account,63.77,Uber,"Groceries, General Expenses, Travel, Entertainment",2022-11-26,Indonesia
    5819,Checking,210.57,Uber,"Transportation, Groceries, Entertainment, General Expenses, Travel",2022-07-29,Indonesia
    5820,Savings,580.46,Gojek,"General Expenses, Entertainment, Groceries",2022-08-28,Singapore
    5821,Joint Account,147.64,Grab,Dining,2022-09-16,Japan
    5822,Savings,231.46,Grab,"Transportation, Entertainment, Groceries, Travel, Dining, General Expenses",2022-11-06,Singapore
    5823,Savings,652.96,Starbucks,"Groceries, Transportation, Travel",2022-08-13,Australia
    5824,Joint Account,63.04,Google,"Travel, Transportation, Entertainment, General Expenses, Groceries, Dining",2022-07-13,Indonesia
    5825,Joint Account,13.15,Google,"Transportation, Entertainment, Travel, Groceries, Dining",2022-11-24,Indonesia
    5826,Joint Account,119.26,Amazon,"Transportation, Dining",2022-07-07,Singapore
    5827,Joint Account,383.78,Walmart,"Entertainment, Dining, Transportation, General Expenses, Groceries, Travel",2022-08-25,Singapore
    5828,Savings,122.53,Google,"General Expenses, Groceries, Transportation, Entertainment, Travel",2022-10-14,Australia
    5829,Savings,967.75,Amazon,"Groceries, Dining",2022-10-20,Japan
    5830,Joint Account,675.91,Amazon,"Entertainment, General Expenses, Travel, Dining, Transportation, Groceries",2022-10-26,Singapore
    5831,Joint Account,929.9,ACME,"Groceries, General Expenses",2022-09-23,Australia
    5832,Checking,554.33,Google,"Groceries, Travel",2022-10-15,Singapore
    5833,Checking,442.56,ACME,"Entertainment, Transportation",2022-11-19,Japan
    5834,Joint Account,130.85,Uber,"General Expenses, Transportation, Dining, Travel, Groceries, Entertainment",2022-10-19,Japan
    5835,Savings,765.94,Google,"Travel, General Expenses, Dining, Entertainment",2022-07-10,Indonesia
    5836,Joint Account,618.41,Google,"Transportation, Travel, Groceries",2022-12-19,Indonesia
    5837,Checking,55.29,Fairprice,"General Expenses, Dining, Transportation, Travel, Groceries, Entertainment",2022-08-25,Singapore
    5838,Savings,344.06,Uber,"Groceries, Entertainment, Travel, Transportation",2022-10-23,Australia
    5839,Joint Account,192.16,Google,"Transportation, Travel, Entertainment, Groceries",2022-07-13,Japan
    5840,Checking,323.13,ACME,Transportation,2022-06-16,Singapore
    5841,Checking,394.28,Amazon,"Entertainment, General Expenses",2022-06-20,Indonesia
    5842,Savings,169.47,Starbucks,"Travel, General Expenses, Transportation, Dining, Entertainment, Groceries",2022-12-23,Singapore
    5843,Checking,239.17,Uber,"General Expenses, Travel, Dining, Entertainment, Transportation",2022-08-24,Indonesia
    5844,Savings,226.3,Gojek,"General Expenses, Entertainment, Dining, Travel, Groceries, Transportation",2022-06-13,Australia
    5845,Joint Account,548.97,Walmart,"Transportation, Travel, General Expenses",2022-10-09,Indonesia
    5846,Checking,259.25,Uber,"General Expenses, Dining",2022-12-25,Singapore
    5847,Checking,702.45,ACME,"General Expenses, Entertainment, Dining",2022-07-21,Singapore
    5848,Joint Account,714.82,Grab,"General Expenses, Dining, Entertainment, Groceries, Transportation",2022-06-01,Australia
    5849,Joint Account,422.86,Grab,Dining,2022-08-22,Australia
    5850,Joint Account,691.5,Amazon,"Groceries, Transportation, Dining, General Expenses",2022-10-04,Japan
    5851,Savings,926.7,ACME,"Dining, Transportation, General Expenses, Travel, Entertainment, Groceries",2022-09-10,Australia
    5852,Savings,125.03,Fairprice,"Dining, Transportation",2022-11-18,Singapore
    5853,Checking,937.52,Amazon,"Entertainment, Dining",2022-09-07,Indonesia
    5854,Savings,491.57,Walmart,"Travel, Groceries, Dining, Entertainment",2022-09-23,Indonesia
    5855,Savings,823.34,Google,"Groceries, Transportation",2022-07-08,Japan
    5856,Joint Account,582.03,ACME,Transportation,2022-09-25,Japan
    5857,Joint Account,821.93,Gojek,"Groceries, Transportation, Entertainment, Dining, General Expenses",2022-06-25,Australia
    5858,Savings,169.13,Uber,"General Expenses, Travel, Dining, Groceries, Entertainment",2022-09-16,Australia
    5859,Checking,823.77,Walmart,"Groceries, Dining, Transportation, Entertainment",2022-10-26,Singapore
    5860,Checking,115.51,Fairprice,Transportation,2022-12-03,Singapore
    5861,Savings,896.4,Fairprice,"Travel, Entertainment, Groceries, General Expenses",2022-06-27,Australia
    5862,Checking,171.96,Grab,Transportation,2022-08-19,Singapore
    5863,Savings,792.77,Fairprice,"Groceries, Dining, Travel, Entertainment",2022-10-07,Japan
    5864,Joint Account,903.15,Amazon,"Entertainment, Dining, Transportation, General Expenses, Travel, Groceries",2022-11-05,Japan
    5865,Joint Account,333.78,Starbucks,"Travel, Dining, Groceries",2022-09-12,Indonesia
    5866,Checking,579.61,Starbucks,"Transportation, Entertainment, General Expenses, Groceries",2022-10-28,Indonesia
    5867,Joint Account,593.6,Google,"Transportation, Entertainment, Dining",2022-07-07,Singapore
    5868,Joint Account,514.11,Amazon,"Transportation, Dining",2022-09-20,Australia
    5869,Savings,61.57,Gojek,"Travel, Entertainment, Transportation, Dining, General Expenses",2022-10-17,Singapore
    5870,Checking,28.57,Grab,"Transportation, Travel, Groceries, Entertainment",2022-06-20,Singapore
    5871,Checking,931.45,Grab,"Dining, Groceries",2022-09-23,Singapore
    5872,Savings,624.35,Starbucks,"Dining, General Expenses, Groceries, Travel, Transportation, Entertainment",2022-08-15,Japan
    5873,Joint Account,691.87,Grab,Entertainment,2022-07-08,Japan
    5874,Joint Account,980.75,Google,"General Expenses, Transportation, Dining, Entertainment, Travel, Groceries",2022-07-03,Australia
    5875,Savings,665.39,Google,"Travel, Dining",2022-09-29,Indonesia
    5876,Savings,13.51,Amazon,"Groceries, Transportation",2022-12-24,Australia
    5877,Checking,668.94,Amazon,"Dining, Groceries",2022-08-25,Japan
    5878,Savings,741.51,Fairprice,"Dining, General Expenses",2022-06-15,Singapore
    5879,Checking,752.15,Grab,"Dining, Groceries",2022-07-06,Singapore
    5880,Checking,129.69,Walmart,"Travel, Dining, Transportation, Entertainment",2022-08-25,Singapore
    5881,Joint Account,995.21,Walmart,"General Expenses, Dining, Entertainment",2022-07-27,Indonesia
    5882,Savings,593.41,Fairprice,"Dining, Travel, General Expenses, Transportation, Groceries",2022-11-02,Singapore
    5883,Checking,639.11,Amazon,"Dining, General Expenses, Travel, Groceries, Transportation",2022-08-20,Japan
    5884,Checking,613.83,Uber,"General Expenses, Dining, Travel, Entertainment",2022-09-29,Indonesia
    5885,Joint Account,5.07,ACME,"General Expenses, Dining",2022-09-02,Indonesia
    5886,Savings,485.76,Starbucks,Dining,2022-09-18,Indonesia
    5887,Checking,310.04,Google,Transportation,2022-12-09,Australia
    5888,Savings,565.95,Walmart,"Transportation, Groceries, General Expenses, Entertainment, Dining, Travel",2022-08-03,Indonesia
    5889,Checking,878.97,Google,"Travel, General Expenses, Groceries, Dining",2022-12-06,Singapore
    5890,Savings,688.41,Amazon,"Entertainment, General Expenses",2022-07-12,Japan
    5891,Joint Account,314.24,Fairprice,"Transportation, Groceries, Travel, Entertainment, Dining",2022-12-21,Japan
    5892,Checking,974.57,Walmart,"Groceries, Entertainment, Travel, General Expenses, Dining, Transportation",2022-11-12,Singapore
    5893,Savings,75.27,Google,"General Expenses, Groceries, Entertainment, Transportation, Travel",2022-11-15,Indonesia
    5894,Checking,413.81,Uber,"General Expenses, Travel, Entertainment, Dining",2022-07-20,Japan
    5895,Checking,936.37,Grab,Entertainment,2022-08-18,Japan
    5896,Checking,573.01,Gojek,"Entertainment, Travel, General Expenses, Transportation, Groceries, Dining",2022-06-19,Singapore
    5897,Savings,426.07,Grab,"Travel, Dining",2022-12-20,Australia
    5898,Checking,479.27,Walmart,"Groceries, Transportation, Entertainment, Travel, Dining",2022-12-30,Japan
    5899,Savings,825.92,Starbucks,"Entertainment, General Expenses, Groceries",2022-10-10,Australia
    5900,Joint Account,805.95,Walmart,"Dining, Groceries, Entertainment",2022-11-22,Japan
    5901,Checking,879.23,Fairprice,"Transportation, Entertainment",2022-12-28,Singapore
    5902,Savings,320.63,Amazon,"Transportation, Groceries, General Expenses",2022-06-04,Japan
    5903,Savings,618.35,Amazon,"Groceries, Travel, Dining, Entertainment",2022-06-03,Australia
    5904,Savings,920.56,Uber,"Dining, Transportation, General Expenses",2022-08-31,Australia
    5905,Savings,147.65,Amazon,"Entertainment, General Expenses",2022-06-02,Singapore
    5906,Checking,175.67,Fairprice,"General Expenses, Travel, Transportation, Dining, Groceries",2022-07-27,Indonesia
    5907,Joint Account,236.79,Gojek,"Groceries, Travel, Dining, Transportation",2022-12-03,Singapore
    5908,Joint Account,13.61,Amazon,"Entertainment, Dining, Travel, General Expenses, Groceries, Transportation",2022-08-04,Australia
    5909,Checking,450.95,Amazon,"Transportation, Groceries, General Expenses, Entertainment, Dining, Travel",2022-08-23,Japan
    5910,Savings,946.63,Google,"Dining, Entertainment, Transportation, Groceries",2022-10-22,Indonesia
    5911,Joint Account,824.78,Amazon,"Dining, Entertainment, Transportation",2022-07-30,Japan
    5912,Savings,804.48,Uber,Transportation,2022-06-14,Australia
    5913,Checking,603.56,Starbucks,"Dining, Entertainment, Transportation, Groceries, General Expenses, Travel",2022-06-27,Indonesia
    5914,Savings,263.99,Gojek,Travel,2022-06-16,Indonesia
    5915,Checking,649.76,Fairprice,"Travel, Entertainment, General Expenses",2022-07-12,Australia
    5916,Joint Account,365.2,Fairprice,"General Expenses, Travel, Groceries, Dining, Entertainment, Transportation",2022-12-31,Japan
    5917,Checking,369.37,Uber,"Entertainment, Transportation, Dining, General Expenses",2022-10-13,Japan
    5918,Checking,791.43,Walmart,"General Expenses, Transportation, Groceries, Entertainment",2022-08-04,Japan
    5919,Joint Account,307.06,Walmart,"Entertainment, Travel, General Expenses, Groceries",2022-12-20,Japan
    5920,Checking,496.45,Google,"Groceries, General Expenses, Transportation, Travel",2022-10-18,Indonesia
    5921,Savings,215.62,Gojek,"Groceries, Travel, Entertainment, General Expenses, Dining, Transportation",2022-11-15,Australia
    5922,Checking,72.23,Walmart,"Dining, Groceries, Transportation, Entertainment, Travel",2022-12-30,Singapore
    5923,Joint Account,73.43,Grab,Groceries,2022-09-13,Australia
    5924,Savings,210.73,ACME,"Dining, General Expenses, Transportation, Travel",2022-06-13,Singapore
    5925,Joint Account,223.23,ACME,Transportation,2022-12-21,Japan
    5926,Checking,589.85,ACME,Transportation,2022-08-31,Indonesia
    5927,Savings,786.27,Uber,Travel,2022-06-04,Australia
    5928,Joint Account,278.44,ACME,"Entertainment, Transportation",2022-11-13,Singapore
    5929,Checking,702.56,Grab,"Dining, Transportation, Groceries, General Expenses, Travel, Entertainment",2022-11-12,Indonesia
    5930,Savings,261.73,Uber,"Travel, Entertainment, General Expenses",2022-11-13,Singapore
    5931,Joint Account,625.84,Fairprice,"General Expenses, Transportation, Travel",2022-06-16,Japan
    5932,Checking,294.1,Amazon,"Groceries, Travel, General Expenses, Transportation",2022-07-15,Singapore
    5933,Savings,602.81,Starbucks,"General Expenses, Dining, Travel, Transportation, Entertainment, Groceries",2022-11-06,Japan
    5934,Savings,570.67,Uber,"Groceries, Dining, Travel, Transportation",2022-07-07,Indonesia
    5935,Checking,322.03,Google,"Transportation, Dining",2022-08-30,Australia
    5936,Savings,343.61,ACME,"General Expenses, Travel, Groceries",2022-07-03,Singapore
    5937,Checking,303.6,Walmart,"Travel, Dining, Entertainment",2022-11-01,Singapore
    5938,Checking,478.63,Fairprice,"Transportation, General Expenses, Dining, Groceries, Travel",2022-07-16,Indonesia
    5939,Joint Account,667.46,Fairprice,"Groceries, General Expenses, Dining, Travel, Transportation, Entertainment",2022-06-17,Australia
    5940,Joint Account,222.1,Amazon,"Dining, Transportation, General Expenses, Entertainment, Travel, Groceries",2022-11-18,Indonesia
    5941,Checking,329.19,Fairprice,"Transportation, General Expenses, Groceries, Travel, Entertainment",2022-06-15,Japan
    5942,Savings,561.52,Google,"Travel, Dining, Transportation, Entertainment, General Expenses, Groceries",2022-10-27,Japan
    5943,Joint Account,666.41,Grab,"Entertainment, Groceries",2022-12-25,Japan
    5944,Joint Account,107.97,Uber,General Expenses,2022-10-03,Japan
    5945,Savings,190.57,Amazon,"Dining, Entertainment, Groceries, General Expenses, Transportation",2022-10-12,Japan
    5946,Joint Account,931.44,Starbucks,"General Expenses, Entertainment, Travel",2022-07-18,Singapore
    5947,Joint Account,694.07,Starbucks,"Dining, Transportation",2022-09-11,Australia
    5948,Savings,755.54,Grab,"Entertainment, Travel, Groceries",2022-11-25,Singapore
    5949,Checking,503.5,Walmart,"General Expenses, Travel, Groceries, Transportation, Dining",2022-11-18,Australia
    5950,Joint Account,568.42,ACME,Travel,2022-08-12,Australia
    5951,Joint Account,98.94,Walmart,"Dining, General Expenses, Travel, Groceries, Entertainment",2022-08-06,Japan
    5952,Checking,176.92,Google,"Entertainment, Transportation, Groceries, Travel, Dining, General Expenses",2022-09-25,Singapore
    5953,Joint Account,411.67,Starbucks,"General Expenses, Travel, Transportation, Entertainment, Groceries, Dining",2022-12-12,Indonesia
    5954,Joint Account,667.19,ACME,"Groceries, Dining, Transportation, General Expenses, Entertainment",2022-06-18,Indonesia
    5955,Savings,760.89,Starbucks,"Groceries, Dining, Travel",2022-07-26,Indonesia
    5956,Checking,950.24,Grab,"General Expenses, Groceries, Entertainment, Transportation, Travel",2022-07-25,Singapore
    5957,Joint Account,854.08,Uber,"Transportation, Entertainment, Groceries, Travel, Dining, General Expenses",2022-11-10,Indonesia
    5958,Savings,777.27,Starbucks,"Groceries, General Expenses",2022-07-02,Japan
    5959,Savings,721.14,Walmart,"Entertainment, Dining, Transportation, Groceries",2022-11-27,Japan
    5960,Checking,756.64,ACME,"Travel, Dining, General Expenses, Transportation, Entertainment, Groceries",2022-06-01,Japan
    5961,Joint Account,607.73,Google,"Dining, Entertainment, Groceries, General Expenses, Transportation",2022-10-23,Australia
    5962,Checking,725.01,Gojek,"Dining, Entertainment, Groceries",2022-12-27,Australia
    5963,Savings,318.22,Walmart,"General Expenses, Travel, Entertainment, Groceries, Dining",2022-12-06,Australia
    5964,Checking,767.76,ACME,"Travel, Dining, Entertainment, Transportation, Groceries, General Expenses",2022-07-15,Australia
    5965,Savings,898.63,Gojek,"Dining, Entertainment, Travel, General Expenses",2022-07-09,Singapore
    5966,Checking,24.37,Google,Entertainment,2022-06-19,Indonesia
    5967,Savings,888.72,Walmart,"Groceries, Transportation, Travel, Dining, Entertainment, General Expenses",2022-07-19,Indonesia
    5968,Savings,491.1,Gojek,"Transportation, Travel, Entertainment, Groceries",2022-06-25,Australia
    5969,Joint Account,484.37,Google,"Travel, Transportation",2022-09-17,Indonesia
    5970,Savings,396.15,Gojek,"General Expenses, Groceries, Dining, Travel, Transportation, Entertainment",2022-07-21,Australia
    5971,Joint Account,797.41,Google,Dining,2022-12-13,Japan
    5972,Checking,892.75,ACME,"Dining, Groceries, Entertainment, Transportation, General Expenses",2022-08-25,Japan
    5973,Checking,269.42,Gojek,"Groceries, Transportation, Travel, Dining, General Expenses",2022-11-07,Singapore
    5974,Joint Account,75.11,Google,Travel,2022-10-14,Indonesia
    5975,Checking,769.37,Gojek,"General Expenses, Groceries, Dining",2022-12-06,Japan
    5976,Joint Account,889.36,Walmart,"Transportation, Groceries, General Expenses, Dining",2022-11-23,Australia
    5977,Savings,490.62,Grab,Groceries,2022-11-30,Japan
    5978,Checking,948.19,Walmart,"Groceries, Dining, Travel, General Expenses",2022-06-23,Singapore
    5979,Savings,393.01,Walmart,"Transportation, Groceries, Travel, Dining",2022-07-01,Singapore
    5980,Joint Account,932.52,Amazon,Transportation,2022-12-09,Japan
    5981,Joint Account,917.06,Uber,"Travel, Entertainment",2022-12-18,Indonesia
    5982,Joint Account,130.6,Gojek,Dining,2022-07-09,Indonesia
    5983,Savings,972.8,Fairprice,Groceries,2022-11-16,Japan
    5984,Joint Account,923.31,Starbucks,"Entertainment, Dining, Transportation, Travel",2022-11-10,Indonesia
    5985,Joint Account,799.01,Google,"General Expenses, Travel, Groceries, Entertainment, Dining, Transportation",2022-11-25,Singapore
    5986,Checking,161.32,Gojek,"Transportation, Travel, Groceries, General Expenses",2022-12-06,Indonesia
    5987,Savings,237.58,Gojek,Travel,2022-10-19,Australia
    5988,Savings,386.37,Google,"Travel, Dining, Transportation, Entertainment, Groceries, General Expenses",2022-11-11,Singapore
    5989,Checking,78.73,Uber,"Groceries, Travel, Entertainment, Transportation, General Expenses",2022-09-07,Japan
    5990,Savings,480.9,Starbucks,"Groceries, Travel",2022-10-07,Indonesia
    5991,Savings,380.78,Uber,"General Expenses, Entertainment, Travel, Groceries",2022-11-21,Australia
    5992,Checking,753.34,Google,"Transportation, General Expenses, Entertainment",2022-12-21,Indonesia
    5993,Checking,503.63,Grab,"Travel, Dining, Transportation, General Expenses, Groceries",2022-11-26,Australia
    5994,Joint Account,103.24,Uber,"Travel, Dining, General Expenses, Entertainment",2022-12-12,Singapore
    5995,Joint Account,237.59,Grab,Travel,2022-12-16,Japan
    5996,Savings,628.75,ACME,"Groceries, Travel, Transportation",2022-08-27,Japan
    5997,Checking,958.96,Walmart,Travel,2022-09-05,Australia
    5998,Joint Account,766.39,Gojek,"Groceries, Transportation, General Expenses, Entertainment, Travel",2022-09-07,Japan
    5999,Joint Account,698.95,Grab,"Dining, General Expenses",2022-11-27,Singapore
    6000,Savings,586.08,ACME,"Entertainment, Transportation, Travel, Dining",2022-12-09,Japan
    6001,Checking,984.44,Uber,General Expenses,2022-07-25,Singapore
    6002,Joint Account,54.74,Uber,"Entertainment, Groceries, General Expenses, Dining",2022-10-26,Japan
    6003,Savings,45.72,Walmart,"Dining, Travel, General Expenses, Transportation, Groceries, Entertainment",2022-08-20,Singapore
    6004,Joint Account,219.95,Google,"Entertainment, Groceries, General Expenses, Travel",2022-12-09,Australia
    6005,Joint Account,226.11,Google,"General Expenses, Entertainment, Travel, Groceries, Dining",2022-11-23,Singapore
    6006,Savings,500.51,Google,"Transportation, Entertainment, General Expenses, Dining, Groceries",2022-10-19,Singapore
    6007,Savings,369.73,Google,Groceries,2022-11-08,Indonesia
    6008,Checking,441.78,Grab,"General Expenses, Transportation, Groceries, Dining, Travel",2022-12-16,Indonesia
    6009,Savings,892.0,Google,"General Expenses, Groceries, Travel, Dining, Transportation, Entertainment",2022-08-28,Singapore
    6010,Savings,561.9,Walmart,"Dining, Entertainment, Transportation, General Expenses, Travel",2022-10-18,Singapore
    6011,Joint Account,556.21,Fairprice,Groceries,2022-07-09,Australia
    6012,Joint Account,812.63,Gojek,"Groceries, Entertainment, General Expenses, Travel, Transportation, Dining",2022-07-04,Singapore
    6013,Joint Account,45.61,Gojek,"Travel, Groceries, Dining, Transportation, General Expenses",2022-11-20,Singapore
    6014,Joint Account,358.77,Walmart,"General Expenses, Transportation, Entertainment, Dining",2022-07-26,Singapore
    6015,Savings,152.56,Walmart,"Travel, Entertainment, Dining, Transportation, Groceries, General Expenses",2022-10-02,Singapore
    6016,Savings,129.65,Walmart,"Dining, Groceries, Travel, General Expenses, Entertainment, Transportation",2022-06-23,Japan
    6017,Checking,315.67,ACME,"Transportation, Dining, General Expenses",2022-06-13,Indonesia
    6018,Joint Account,102.63,ACME,"Dining, Travel, Groceries, General Expenses, Entertainment",2022-07-11,Japan
    6019,Joint Account,428.89,Gojek,General Expenses,2022-08-08,Indonesia
    6020,Joint Account,157.56,Google,"General Expenses, Entertainment",2022-12-15,Australia
    6021,Savings,86.49,Uber,"Travel, Dining",2022-07-03,Singapore
    6022,Savings,243.81,Gojek,"General Expenses, Dining, Groceries, Transportation, Entertainment, Travel",2022-10-06,Japan
    6023,Savings,418.61,Amazon,"Groceries, Dining",2022-11-14,Indonesia
    6024,Joint Account,328.4,Walmart,"Travel, Entertainment, Transportation, Groceries, General Expenses",2022-08-25,Japan
    6025,Joint Account,724.71,Fairprice,"Travel, Transportation, Groceries, Dining",2022-09-28,Indonesia
    6026,Joint Account,326.98,Fairprice,"General Expenses, Groceries, Entertainment, Dining, Travel, Transportation",2022-06-13,Australia
    6027,Savings,42.6,Fairprice,"Travel, Entertainment, Dining, General Expenses, Transportation, Groceries",2022-06-02,Indonesia
    6028,Checking,423.94,Walmart,"Travel, Transportation",2022-11-09,Australia
    6029,Joint Account,924.95,ACME,"Transportation, Dining, Travel, Entertainment, Groceries",2022-06-21,Japan
    6030,Joint Account,245.29,Google,"Dining, General Expenses, Groceries, Travel",2022-06-08,Indonesia
    6031,Checking,186.66,Amazon,"Transportation, Entertainment, General Expenses, Travel, Dining, Groceries",2022-07-29,Indonesia
    6032,Joint Account,195.3,Fairprice,"Groceries, Dining, General Expenses, Transportation, Travel, Entertainment",2022-08-14,Singapore
    6033,Checking,726.83,ACME,Entertainment,2022-11-10,Singapore
    6034,Savings,437.61,Uber,"Travel, Dining, Groceries, Transportation",2022-10-31,Singapore
    6035,Savings,868.16,Fairprice,"Dining, Groceries, Entertainment, Travel, General Expenses",2022-06-19,Singapore
    6036,Checking,510.3,Starbucks,"Travel, Dining, Entertainment, Transportation, General Expenses, Groceries",2022-07-17,Australia
    6037,Savings,489.15,Amazon,"Dining, Travel, Groceries, Entertainment, Transportation, General Expenses",2022-11-28,Indonesia
    6038,Savings,335.37,Grab,"Entertainment, General Expenses",2022-12-14,Singapore
    6039,Savings,436.64,ACME,General Expenses,2022-10-02,Indonesia
    6040,Checking,146.65,Google,"Transportation, Travel",2022-11-04,Japan
    6041,Joint Account,249.98,ACME,"General Expenses, Groceries, Dining, Entertainment",2022-12-29,Japan
    6042,Checking,865.9,Google,"Groceries, General Expenses, Travel, Dining",2022-10-14,Australia
    6043,Joint Account,524.13,ACME,"Groceries, Transportation, Dining, Travel, Entertainment, General Expenses",2022-06-19,Japan
    6044,Joint Account,991.52,Google,"Groceries, General Expenses, Transportation, Dining, Entertainment",2022-11-15,Singapore
    6045,Joint Account,433.53,Starbucks,General Expenses,2022-06-09,Japan
    6046,Savings,906.64,ACME,"Groceries, Dining",2022-07-23,Japan
    6047,Joint Account,879.73,Gojek,"Dining, Groceries, Entertainment",2022-07-18,Indonesia
    6048,Checking,215.0,Walmart,"Groceries, General Expenses, Entertainment, Travel",2022-06-08,Japan
    6049,Checking,38.81,Uber,"Groceries, Entertainment, Transportation, General Expenses, Travel, Dining",2022-12-01,Indonesia
    6050,Savings,303.41,ACME,"Transportation, Groceries, Entertainment, Travel",2022-11-22,Australia
    6051,Checking,326.19,Grab,"Transportation, Groceries, Travel, General Expenses",2022-10-03,Australia
    6052,Checking,137.92,Gojek,"General Expenses, Travel, Entertainment, Transportation, Groceries, Dining",2022-06-20,Australia
    6053,Joint Account,828.63,ACME,"Dining, Travel",2022-08-12,Singapore
    6054,Savings,880.67,Fairprice,"Groceries, General Expenses, Dining",2022-11-26,Australia
    6055,Joint Account,857.16,Gojek,"Entertainment, Transportation, Dining, Groceries, General Expenses",2022-06-08,Japan
    6056,Savings,218.27,Fairprice,"Transportation, Travel, Entertainment, Dining, Groceries",2022-09-29,Japan
    6057,Checking,385.04,Amazon,"Travel, Entertainment, Transportation, General Expenses, Groceries, Dining",2022-10-25,Indonesia
    6058,Checking,295.07,Fairprice,"Entertainment, Transportation, General Expenses",2022-11-11,Singapore
    6059,Savings,170.58,Google,Travel,2022-11-12,Australia
    6060,Checking,182.69,Gojek,"Groceries, Transportation, Travel, Dining",2022-10-16,Indonesia
    6061,Joint Account,606.75,Walmart,"Dining, Travel, Groceries, Transportation, General Expenses, Entertainment",2022-10-31,Indonesia
    6062,Savings,59.79,Uber,"General Expenses, Transportation, Entertainment, Travel, Groceries, Dining",2022-11-27,Indonesia
    6063,Savings,526.04,ACME,"General Expenses, Dining, Groceries, Travel, Transportation, Entertainment",2022-06-28,Japan
    6064,Savings,838.5,Gojek,"Dining, Entertainment",2022-12-15,Singapore
    6065,Checking,128.44,Amazon,"Dining, General Expenses, Entertainment, Transportation",2022-12-13,Singapore
    6066,Savings,261.44,Grab,"General Expenses, Travel",2022-12-14,Singapore
    6067,Joint Account,863.01,Uber,General Expenses,2022-07-31,Indonesia
    6068,Checking,313.43,ACME,Entertainment,2022-11-14,Singapore
    6069,Joint Account,75.3,Gojek,"General Expenses, Travel, Entertainment",2022-07-12,Australia
    6070,Savings,71.52,Amazon,Travel,2022-08-22,Singapore
    6071,Joint Account,327.81,ACME,"General Expenses, Travel",2022-11-14,Australia
    6072,Joint Account,659.44,Grab,"Groceries, General Expenses, Transportation, Dining, Travel",2022-08-12,Japan
    6073,Joint Account,178.67,Grab,"Transportation, Entertainment, Travel",2022-07-06,Japan
    6074,Savings,902.86,Walmart,"Groceries, Dining, General Expenses",2022-11-17,Australia
    6075,Checking,277.47,Google,"Entertainment, Dining, Transportation, Travel, Groceries, General Expenses",2022-10-27,Indonesia
    6076,Joint Account,817.77,Uber,"Entertainment, Groceries",2022-12-29,Japan
    6077,Joint Account,37.52,Fairprice,"General Expenses, Groceries, Transportation",2022-08-31,Japan
    6078,Joint Account,724.75,Uber,"Dining, Entertainment, Groceries, Travel, Transportation, General Expenses",2022-07-12,Japan
    6079,Savings,212.91,Amazon,"Transportation, Travel, Entertainment, Dining, General Expenses, Groceries",2022-10-19,Singapore
    6080,Joint Account,302.83,Walmart,"Entertainment, Travel",2022-08-03,Singapore
    6081,Checking,889.38,Uber,Entertainment,2022-08-18,Singapore
    6082,Checking,989.78,Fairprice,"Dining, Transportation, General Expenses, Travel, Entertainment, Groceries",2022-11-06,Indonesia
    6083,Savings,905.34,Google,"Groceries, Transportation, General Expenses, Entertainment",2022-06-28,Australia
    6084,Checking,72.11,Walmart,"Groceries, Travel, General Expenses, Dining, Transportation, Entertainment",2022-11-07,Indonesia
    6085,Joint Account,27.65,Uber,"Travel, Groceries, General Expenses, Entertainment, Dining, Transportation",2022-12-13,Australia
    6086,Savings,52.34,Starbucks,"Transportation, General Expenses, Groceries, Entertainment",2022-08-08,Singapore
    6087,Joint Account,986.51,Gojek,"Transportation, Travel, Dining, Entertainment, Groceries, General Expenses",2022-07-23,Japan
    6088,Joint Account,405.6,Amazon,"Travel, General Expenses, Transportation",2022-11-26,Australia
    6089,Joint Account,110.13,Google,Transportation,2022-10-10,Australia
    6090,Joint Account,858.42,Walmart,"Entertainment, Dining, Transportation",2022-10-05,Australia
    6091,Checking,431.57,Gojek,General Expenses,2022-07-09,Indonesia
    6092,Checking,776.78,Gojek,"Entertainment, Groceries, Dining, General Expenses, Travel, Transportation",2022-11-03,Indonesia
    6093,Joint Account,371.77,Uber,"Travel, General Expenses",2022-09-20,Indonesia
    6094,Savings,371.19,Walmart,"Transportation, Groceries, Entertainment, Travel",2022-12-19,Singapore
    6095,Checking,339.99,Amazon,"Entertainment, Travel, Groceries, Dining, Transportation, General Expenses",2022-08-07,Indonesia
    6096,Joint Account,400.86,Uber,"Travel, Groceries, General Expenses",2022-10-22,Australia
    6097,Savings,36.38,Grab,"Transportation, Dining, General Expenses, Travel",2022-09-22,Japan
    6098,Checking,762.13,Uber,"Travel, General Expenses, Transportation, Groceries, Entertainment, Dining",2022-08-18,Australia
    6099,Joint Account,787.35,Fairprice,"Groceries, Travel, Dining, Entertainment",2022-11-05,Singapore
    6100,Savings,530.34,Fairprice,"Groceries, Entertainment, General Expenses, Travel, Dining, Transportation",2022-09-15,Indonesia
    6101,Checking,879.89,ACME,"Transportation, Entertainment, Travel",2022-09-18,Japan
    6102,Checking,340.04,Grab,"Entertainment, Dining, Groceries, Travel, Transportation",2022-12-26,Australia
    6103,Joint Account,290.2,Gojek,"Groceries, Entertainment, Travel, Dining, General Expenses, Transportation",2022-07-06,Singapore
    6104,Checking,445.13,Gojek,"General Expenses, Dining, Groceries",2022-06-25,Indonesia
    6105,Checking,990.52,Fairprice,"General Expenses, Travel",2022-10-11,Japan
    6106,Joint Account,685.51,Walmart,"Groceries, General Expenses, Dining, Transportation, Travel",2022-12-14,Japan
    6107,Savings,16.29,Uber,"Dining, Entertainment, General Expenses",2022-12-05,Japan
    6108,Checking,200.2,Gojek,"Travel, Transportation, Entertainment, Groceries, General Expenses, Dining",2022-06-07,Japan
    6109,Checking,963.86,Uber,"Dining, Groceries, General Expenses, Transportation",2022-06-07,Indonesia
    6110,Savings,120.76,Walmart,Transportation,2022-06-30,Australia
    6111,Checking,831.74,Amazon,"Groceries, Travel, General Expenses, Transportation, Dining, Entertainment",2022-07-15,Australia
    6112,Savings,245.93,Fairprice,"General Expenses, Groceries, Travel, Dining",2022-12-17,Indonesia
    6113,Checking,964.86,Amazon,"Transportation, Groceries, Dining, General Expenses, Entertainment, Travel",2022-07-22,Singapore
    6114,Joint Account,391.85,Uber,"Transportation, General Expenses, Entertainment, Groceries, Dining",2022-12-01,Singapore
    6115,Checking,65.22,Fairprice,"Dining, Transportation, Groceries, Entertainment",2022-12-26,Japan
    6116,Savings,631.34,Uber,"Transportation, Entertainment, Dining, General Expenses, Groceries, Travel",2022-09-10,Australia
    6117,Savings,110.68,Gojek,"Entertainment, Transportation, Dining, Groceries, General Expenses, Travel",2022-10-18,Japan
    6118,Savings,998.23,Gojek,"Transportation, Travel",2022-09-13,Australia
    6119,Checking,859.89,Amazon,Transportation,2022-12-21,Australia
    6120,Savings,453.92,Fairprice,"General Expenses, Travel, Transportation, Entertainment",2022-07-31,Japan
    6121,Joint Account,708.71,Uber,"Groceries, Entertainment, Dining, Transportation",2022-08-09,Australia
    6122,Savings,735.21,Grab,"Transportation, Dining, Travel, Entertainment, Groceries, General Expenses",2022-09-09,Japan
    6123,Checking,939.9,ACME,"Groceries, Transportation, Dining, Entertainment, General Expenses, Travel",2022-11-15,Australia
    6124,Savings,317.9,Amazon,"Entertainment, Travel, Dining, Groceries, General Expenses",2022-08-01,Singapore
    6125,Savings,419.75,Amazon,"Entertainment, General Expenses, Travel, Dining, Transportation, Groceries",2022-10-17,Japan
    6126,Savings,930.25,ACME,"Travel, Dining, General Expenses, Groceries, Transportation",2022-09-08,Indonesia
    6127,Checking,112.84,Uber,"Transportation, Dining, Travel",2022-06-20,Australia
    6128,Checking,597.0,Starbucks,Transportation,2022-07-02,Singapore
    6129,Joint Account,917.16,Gojek,"Dining, Transportation, General Expenses",2022-07-19,Indonesia
    6130,Savings,166.39,Grab,"Entertainment, Transportation, Dining, General Expenses",2022-10-28,Japan
    6131,Checking,288.02,Google,"Entertainment, Groceries",2022-08-25,Japan
    6132,Savings,69.29,Amazon,"Groceries, Travel, Dining, Entertainment, Transportation, General Expenses",2022-12-21,Indonesia
    6133,Savings,110.36,ACME,"Dining, Transportation, Entertainment, Travel, General Expenses",2022-09-24,Australia
    6134,Joint Account,968.62,Grab,"Dining, General Expenses, Transportation, Groceries, Entertainment, Travel",2022-11-09,Indonesia
    6135,Joint Account,567.11,ACME,"Entertainment, General Expenses, Transportation, Travel",2022-11-28,Japan
    6136,Joint Account,758.9,Walmart,Travel,2022-09-25,Indonesia
    6137,Joint Account,11.24,Gojek,"General Expenses, Transportation, Groceries, Dining, Entertainment",2022-10-26,Japan
    6138,Joint Account,608.17,Amazon,"General Expenses, Groceries, Transportation",2022-11-18,Australia
    6139,Checking,612.23,Amazon,"Dining, Transportation, Groceries, Entertainment, General Expenses, Travel",2022-11-21,Japan
    6140,Joint Account,829.52,Amazon,"Groceries, Transportation",2022-11-03,Indonesia
    6141,Joint Account,188.51,ACME,"Entertainment, Groceries, Travel, Dining, Transportation, General Expenses",2022-10-28,Singapore
    6142,Joint Account,442.15,Amazon,"Groceries, Travel, Transportation",2022-10-21,Australia
    6143,Savings,423.16,Amazon,Transportation,2022-12-15,Indonesia
    6144,Savings,405.62,Google,"Travel, Dining, General Expenses, Transportation, Groceries",2022-07-16,Japan
    6145,Checking,507.34,Grab,Transportation,2022-08-20,Singapore
    6146,Savings,725.92,Uber,"General Expenses, Groceries",2022-09-14,Indonesia
    6147,Checking,229.84,Gojek,"Transportation, Entertainment, Dining, Travel, Groceries",2022-10-01,Singapore
    6148,Checking,696.18,Fairprice,"Groceries, Dining, Travel",2022-06-16,Singapore
    6149,Joint Account,339.93,ACME,"Dining, Entertainment, Transportation, Groceries, General Expenses, Travel",2022-12-13,Indonesia
    6150,Joint Account,315.98,Grab,"Dining, Groceries",2022-08-03,Japan
    6151,Joint Account,186.76,Fairprice,"Dining, Entertainment, Transportation, Groceries",2022-09-10,Indonesia
    6152,Joint Account,667.28,Google,Entertainment,2022-11-28,Singapore
    6153,Checking,877.04,Walmart,"Dining, Transportation, Travel",2022-08-27,Indonesia
    6154,Savings,256.01,ACME,"General Expenses, Transportation, Groceries, Entertainment",2022-08-28,Australia
    6155,Savings,552.78,Google,"Entertainment, Groceries, Travel, Transportation",2022-06-14,Singapore
    6156,Checking,710.04,Uber,"Entertainment, Travel, General Expenses",2022-06-27,Indonesia
    6157,Savings,957.86,Amazon,"Groceries, Dining, Transportation, Travel",2022-11-27,Indonesia
    6158,Savings,699.87,Amazon,"Travel, Dining, Entertainment, Transportation, General Expenses, Groceries",2022-06-21,Japan
    6159,Joint Account,302.82,Grab,"Dining, Groceries, General Expenses",2022-07-15,Japan
    6160,Savings,814.64,Fairprice,"Travel, General Expenses, Entertainment",2022-12-24,Singapore
    6161,Savings,203.52,Amazon,"Groceries, General Expenses, Transportation",2022-10-01,Australia
    6162,Savings,10.85,Starbucks,Groceries,2022-11-15,Singapore
    6163,Savings,108.0,Gojek,General Expenses,2022-09-04,Singapore
    6164,Savings,509.49,Amazon,"Transportation, Entertainment, Travel, Groceries, General Expenses",2022-11-22,Japan
    6165,Checking,384.35,Walmart,"Entertainment, Travel, General Expenses, Dining",2022-09-12,Indonesia
    6166,Savings,342.38,Uber,Transportation,2022-11-27,Singapore
    6167,Savings,588.28,Uber,"Dining, Groceries, General Expenses, Entertainment, Transportation, Travel",2022-11-04,Singapore
    6168,Savings,602.97,Fairprice,"General Expenses, Groceries, Dining, Entertainment",2022-12-26,Australia
    6169,Checking,395.77,Fairprice,"Dining, Entertainment, Groceries, General Expenses, Transportation",2022-11-11,Australia
    6170,Savings,886.31,Amazon,"Entertainment, General Expenses, Transportation, Travel",2022-08-19,Indonesia
    6171,Joint Account,995.34,Grab,"General Expenses, Travel, Dining, Transportation, Groceries",2022-12-02,Japan
    6172,Checking,712.05,Uber,"Transportation, Travel, Groceries, Entertainment",2022-07-16,Australia
    6173,Checking,150.64,Uber,Transportation,2022-07-23,Indonesia
    6174,Checking,944.89,Gojek,"Groceries, Entertainment, General Expenses, Dining, Travel, Transportation",2022-09-30,Indonesia
    6175,Joint Account,743.53,Amazon,"Transportation, Groceries, Entertainment, Dining, General Expenses",2022-06-02,Singapore
    6176,Checking,453.44,Uber,"Transportation, Travel, Groceries, Entertainment",2022-06-09,Australia
    6177,Savings,578.28,Amazon,"Groceries, General Expenses, Travel, Entertainment, Dining, Transportation",2022-06-20,Singapore
    6178,Savings,352.36,Fairprice,"Travel, Transportation, Entertainment, General Expenses, Groceries, Dining",2022-08-12,Australia
    6179,Checking,899.22,ACME,"Entertainment, Travel, Groceries, Dining, Transportation",2022-11-12,Japan
    6180,Joint Account,431.59,Grab,Travel,2022-09-07,Australia
    6181,Savings,863.39,Google,"Dining, General Expenses, Groceries, Entertainment, Travel, Transportation",2022-10-13,Indonesia
    6182,Joint Account,377.21,Amazon,"Travel, Dining",2022-10-07,Singapore
    6183,Checking,521.1,Starbucks,"Dining, Travel, General Expenses",2022-07-05,Australia
    6184,Joint Account,826.85,Amazon,"Dining, General Expenses, Transportation",2022-09-23,Australia
    6185,Checking,773.42,Starbucks,"General Expenses, Groceries, Travel, Entertainment",2022-10-02,Singapore
    6186,Checking,244.74,Amazon,Transportation,2022-09-07,Australia
    6187,Joint Account,505.13,Fairprice,"Groceries, Transportation, Dining, General Expenses",2022-09-24,Indonesia
    6188,Joint Account,208.23,Starbucks,"General Expenses, Groceries, Transportation, Travel, Entertainment, Dining",2022-11-02,Indonesia
    6189,Checking,670.23,Walmart,Transportation,2022-11-26,Singapore
    6190,Joint Account,387.43,Amazon,"General Expenses, Groceries, Transportation",2022-09-03,Singapore
    6191,Joint Account,964.45,Amazon,"Groceries, Transportation, Travel, Entertainment, Dining",2022-09-12,Australia
    6192,Joint Account,503.31,Fairprice,Travel,2022-11-25,Indonesia
    6193,Savings,467.28,Uber,"General Expenses, Transportation, Groceries, Entertainment",2022-10-09,Australia
    6194,Checking,247.46,Google,Travel,2022-12-09,Indonesia
    6195,Checking,221.44,ACME,"Travel, Dining",2022-09-30,Japan
    6196,Checking,546.99,Fairprice,Groceries,2022-07-06,Indonesia
    6197,Joint Account,119.4,Amazon,"Groceries, Entertainment, Travel",2022-08-09,Singapore
    6198,Joint Account,247.19,ACME,"Transportation, Travel, Entertainment, Dining, Groceries, General Expenses",2022-08-05,Indonesia
    6199,Joint Account,757.87,Google,"Travel, Groceries, Transportation, Entertainment, Dining",2022-11-12,Australia
    6200,Joint Account,70.59,Fairprice,"Transportation, Travel, Entertainment, Dining",2022-08-30,Australia
    6201,Checking,315.79,Fairprice,"Transportation, Groceries, General Expenses, Travel, Dining",2022-12-29,Singapore
    6202,Savings,233.05,ACME,Travel,2022-10-06,Japan
    6203,Checking,681.73,Gojek,"Dining, Travel, Groceries, General Expenses, Entertainment, Transportation",2022-10-26,Japan
    6204,Savings,737.5,Fairprice,"General Expenses, Entertainment, Dining, Groceries, Transportation",2022-06-05,Singapore
    6205,Checking,213.3,Fairprice,"Travel, General Expenses",2022-11-26,Singapore
    6206,Joint Account,658.1,ACME,"Groceries, General Expenses, Entertainment",2022-09-05,Japan
    6207,Checking,261.05,Uber,"General Expenses, Dining, Groceries, Transportation",2022-08-15,Singapore
    6208,Joint Account,595.8,Grab,"Travel, Transportation, Dining, Groceries",2022-11-03,Singapore
    6209,Checking,837.75,Fairprice,"General Expenses, Dining, Entertainment, Transportation, Groceries, Travel",2022-08-11,Japan
    6210,Checking,864.74,Uber,"Groceries, Travel, Entertainment",2022-12-25,Australia
    6211,Checking,440.37,Uber,Transportation,2022-07-29,Indonesia
    6212,Joint Account,372.13,ACME,"Transportation, Travel",2022-10-24,Singapore
    6213,Joint Account,266.62,Grab,"Entertainment, Travel, General Expenses, Transportation, Groceries, Dining",2022-11-20,Japan
    6214,Checking,127.63,Gojek,"Transportation, General Expenses, Entertainment, Travel",2022-07-15,Japan
    6215,Checking,832.37,Google,"Transportation, Travel, Groceries, Entertainment, Dining, General Expenses",2022-12-01,Japan
    6216,Checking,257.73,Gojek,"Entertainment, Groceries, Travel, Transportation",2022-12-02,Indonesia
    6217,Joint Account,343.1,Walmart,"Entertainment, General Expenses",2022-10-07,Indonesia
    6218,Savings,74.39,Gojek,"Groceries, Transportation, Dining",2022-08-19,Japan
    6219,Joint Account,106.91,Google,"Travel, General Expenses",2022-11-11,Indonesia
    6220,Checking,269.95,Walmart,"General Expenses, Entertainment, Travel, Dining, Groceries, Transportation",2022-07-14,Australia
    6221,Checking,77.73,Walmart,"General Expenses, Groceries, Travel, Dining, Entertainment",2022-08-10,Australia
    6222,Checking,43.59,Uber,"Groceries, Dining, General Expenses, Travel, Entertainment",2022-11-06,Indonesia
    6223,Checking,298.14,Google,"General Expenses, Groceries",2022-10-24,Australia
    6224,Joint Account,324.18,Gojek,"Dining, Transportation, Travel, General Expenses",2022-10-29,Singapore
    6225,Savings,527.93,Fairprice,"Entertainment, Transportation, Dining, General Expenses",2022-11-28,Indonesia
    6226,Joint Account,616.64,Fairprice,"Dining, General Expenses, Transportation",2022-06-02,Japan
    6227,Savings,261.66,Grab,"Dining, Transportation, Groceries, Entertainment, Travel",2022-09-26,Japan
    6228,Savings,950.44,Starbucks,"Transportation, Dining",2022-08-11,Australia
    6229,Joint Account,616.57,Google,"Transportation, Entertainment, Groceries, Travel, Dining",2022-07-14,Australia
    6230,Joint Account,240.77,Grab,"Groceries, Travel, Dining, Entertainment",2022-07-22,Australia
    6231,Joint Account,596.03,Gojek,Travel,2022-06-14,Indonesia
    6232,Savings,316.02,Amazon,"Groceries, General Expenses",2022-11-30,Japan
    6233,Savings,347.46,Gojek,"Groceries, Entertainment",2022-08-31,Japan
    6234,Joint Account,63.02,Google,"General Expenses, Transportation, Travel, Groceries, Entertainment, Dining",2022-08-18,Australia
    6235,Checking,739.45,ACME,"General Expenses, Entertainment",2022-09-26,Australia
    6236,Joint Account,12.97,Amazon,"Groceries, Entertainment, Travel",2022-12-08,Japan
    6237,Joint Account,49.18,Fairprice,"General Expenses, Transportation, Groceries",2022-07-29,Australia
    6238,Checking,277.41,Amazon,"Groceries, Entertainment",2022-06-14,Indonesia
    6239,Joint Account,395.96,Fairprice,"Travel, Transportation, General Expenses, Entertainment, Dining, Groceries",2022-09-06,Japan
    6240,Checking,625.94,Grab,"Travel, General Expenses, Entertainment, Groceries",2022-12-27,Australia
    6241,Checking,102.36,Starbucks,"Groceries, General Expenses",2022-06-27,Australia
    6242,Savings,351.35,Fairprice,"Dining, Travel",2022-11-06,Singapore
    6243,Savings,284.86,Grab,"Dining, Groceries, Transportation, General Expenses, Travel, Entertainment",2022-12-05,Japan
    6244,Savings,16.57,Uber,"Entertainment, Groceries, Travel, Dining, General Expenses",2022-11-13,Australia
    6245,Checking,747.14,Walmart,"Groceries, Travel",2022-08-24,Indonesia
    6246,Joint Account,539.97,Gojek,"Dining, Entertainment",2022-10-23,Japan
    6247,Savings,369.13,ACME,"Groceries, Dining, Travel, Transportation, General Expenses",2022-12-31,Japan
    6248,Checking,338.74,Amazon,"General Expenses, Dining, Groceries, Entertainment, Transportation, Travel",2022-11-19,Australia
    6249,Savings,907.33,Grab,General Expenses,2022-07-31,Indonesia
    6250,Joint Account,950.92,Amazon,"Groceries, Travel, Dining, Transportation, Entertainment, General Expenses",2022-06-01,Singapore
    6251,Savings,477.32,Walmart,"Dining, General Expenses, Travel, Groceries, Entertainment",2022-10-13,Australia
    6252,Checking,112.38,Gojek,"Transportation, Entertainment, Groceries, Dining",2022-06-28,Australia
    6253,Joint Account,855.33,ACME,"Dining, Transportation, Groceries, Travel, General Expenses, Entertainment",2022-09-07,Japan
    6254,Savings,660.54,Fairprice,Transportation,2022-07-21,Singapore
    6255,Savings,705.63,Fairprice,Dining,2022-11-22,Singapore
    6256,Checking,925.75,Fairprice,"Transportation, Groceries, General Expenses, Entertainment",2022-06-29,Australia
    6257,Checking,610.95,Google,"Groceries, Transportation",2022-08-17,Singapore
    6258,Savings,272.47,ACME,"Travel, General Expenses, Dining, Entertainment, Transportation, Groceries",2022-07-21,Japan
    6259,Savings,929.38,Gojek,"Travel, Entertainment, Dining, Groceries, Transportation, General Expenses",2022-11-23,Japan
    6260,Savings,622.1,Grab,"Transportation, General Expenses",2022-07-15,Indonesia
    6261,Checking,25.83,Amazon,"Travel, Groceries, Dining, General Expenses, Entertainment",2022-09-23,Japan
    6262,Joint Account,476.81,Grab,"Transportation, Groceries",2022-07-06,Japan
    6263,Joint Account,976.14,Gojek,"Transportation, Groceries",2022-07-10,Japan
    6264,Checking,585.01,Amazon,"General Expenses, Travel, Transportation",2022-08-27,Singapore
    6265,Checking,74.97,Gojek,"Entertainment, Travel, Groceries, Transportation, General Expenses",2022-07-14,Japan
    6266,Joint Account,915.84,Starbucks,"Transportation, Entertainment, General Expenses",2022-09-15,Australia
    6267,Joint Account,492.54,Walmart,"Travel, General Expenses, Entertainment, Transportation, Dining, Groceries",2022-12-09,Singapore
    6268,Checking,904.97,Starbucks,"General Expenses, Entertainment, Dining, Travel",2022-08-23,Indonesia
    6269,Checking,162.91,Fairprice,"Groceries, Travel, Dining",2022-11-26,Australia
    6270,Checking,385.73,Gojek,"General Expenses, Entertainment",2022-09-20,Australia
    6271,Joint Account,82.38,ACME,"Transportation, Groceries",2022-12-19,Australia
    6272,Joint Account,153.21,Fairprice,"Transportation, Groceries, Travel, Entertainment, Dining, General Expenses",2022-10-10,Australia
    6273,Savings,935.09,ACME,"Entertainment, Dining, Groceries",2022-08-03,Indonesia
    6274,Savings,629.86,Uber,"Entertainment, Travel, Transportation",2022-11-28,Indonesia
    6275,Savings,678.65,Fairprice,"Groceries, Dining, Entertainment",2022-07-20,Singapore
    6276,Savings,222.29,Google,"Travel, Groceries, General Expenses, Dining",2022-08-19,Japan
    6277,Savings,538.65,Walmart,"Groceries, Entertainment, Travel, Dining, General Expenses, Transportation",2022-12-01,Australia
    6278,Checking,899.97,Amazon,"Transportation, Groceries, General Expenses, Travel",2022-06-06,Singapore
    6279,Joint Account,361.77,Walmart,"General Expenses, Entertainment, Groceries, Travel, Dining, Transportation",2022-10-01,Australia
    6280,Joint Account,52.89,ACME,"Dining, Groceries, Transportation, General Expenses",2022-12-17,Indonesia
    6281,Savings,38.34,ACME,"General Expenses, Transportation, Groceries",2022-10-18,Australia
    6282,Joint Account,25.2,Fairprice,"Transportation, Dining, Entertainment",2022-09-02,Japan
    6283,Joint Account,637.56,Starbucks,"Travel, Transportation",2022-10-04,Indonesia
    6284,Joint Account,982.15,Uber,Groceries,2022-11-22,Indonesia
    6285,Savings,530.53,ACME,"Travel, Dining, General Expenses",2022-08-17,Singapore
    6286,Checking,957.76,Starbucks,"Dining, Transportation, General Expenses, Entertainment, Travel",2022-09-19,Australia
    6287,Checking,81.03,Walmart,Groceries,2022-06-06,Japan
    6288,Joint Account,821.26,Fairprice,"Travel, Transportation, Groceries, Dining, Entertainment",2022-08-03,Singapore
    6289,Joint Account,307.85,Amazon,"Travel, General Expenses",2022-12-02,Australia
    6290,Checking,115.86,Amazon,"Entertainment, Groceries",2022-06-01,Australia
    6291,Checking,94.33,Uber,"Transportation, Groceries, Entertainment, General Expenses, Travel",2022-09-16,Australia
    6292,Joint Account,417.79,Amazon,"Travel, Entertainment, Groceries",2022-12-15,Australia
    6293,Checking,218.21,Google,"Travel, Entertainment",2022-10-13,Singapore
    6294,Savings,664.86,Amazon,"Dining, General Expenses, Groceries",2022-12-02,Australia
    6295,Checking,618.62,Starbucks,"General Expenses, Entertainment, Dining, Travel, Groceries",2022-12-08,Australia
    6296,Savings,680.99,ACME,"Groceries, General Expenses, Entertainment, Travel, Transportation",2022-09-17,Singapore
    6297,Joint Account,63.5,Grab,"Travel, Dining",2022-10-05,Australia
    6298,Savings,231.22,Fairprice,"Entertainment, Transportation, Travel, General Expenses, Dining",2022-12-22,Singapore
    6299,Savings,656.49,Walmart,"Dining, Travel, Groceries, Entertainment, General Expenses",2022-08-02,Singapore
    6300,Checking,711.26,ACME,"Entertainment, Travel, Groceries, Dining, Transportation, General Expenses",2022-06-11,Indonesia
    6301,Savings,89.2,Gojek,"Groceries, Entertainment, Dining, Transportation",2022-11-16,Japan
    6302,Savings,32.73,Grab,"General Expenses, Entertainment",2022-10-17,Australia
    6303,Checking,733.84,Gojek,"General Expenses, Transportation, Groceries, Dining, Travel, Entertainment",2022-09-04,Indonesia
    6304,Savings,712.93,Uber,"General Expenses, Entertainment",2022-09-15,Singapore
    6305,Savings,405.33,Uber,Groceries,2022-11-09,Indonesia
    6306,Joint Account,276.19,Google,"Entertainment, Travel, Dining, Groceries, Transportation",2022-09-29,Singapore
    6307,Checking,239.92,Gojek,Transportation,2022-11-23,Japan
    6308,Joint Account,931.07,Walmart,"Groceries, Transportation, Dining, Travel, Entertainment, General Expenses",2022-10-23,Singapore
    6309,Savings,22.36,Grab,"Dining, Entertainment, Transportation, Groceries, Travel, General Expenses",2022-07-25,Singapore
    6310,Joint Account,126.68,Fairprice,"Groceries, Entertainment, Dining, Travel, General Expenses",2022-11-27,Australia
    6311,Savings,620.79,Gojek,"General Expenses, Travel, Transportation",2022-06-29,Indonesia
    6312,Checking,318.6,Gojek,"Transportation, Dining, General Expenses, Groceries, Travel, Entertainment",2022-08-11,Indonesia
    6313,Checking,565.34,Starbucks,"Travel, Transportation, Entertainment, Groceries, Dining, General Expenses",2022-09-23,Indonesia
    6314,Savings,722.8,Amazon,"General Expenses, Entertainment, Groceries, Transportation, Travel, Dining",2022-11-18,Japan
    6315,Savings,94.47,Amazon,"Entertainment, Groceries, General Expenses, Dining, Travel, Transportation",2022-07-09,Japan
    6316,Savings,957.85,Uber,"Groceries, Transportation, Entertainment",2022-09-23,Indonesia
    6317,Joint Account,13.8,ACME,"General Expenses, Transportation, Groceries, Entertainment, Dining, Travel",2022-11-30,Japan
    6318,Joint Account,246.28,Grab,"General Expenses, Groceries, Travel, Dining, Transportation, Entertainment",2022-06-03,Indonesia
    6319,Joint Account,149.42,Gojek,"Travel, Entertainment, Dining, General Expenses, Transportation, Groceries",2022-08-26,Japan
    6320,Savings,141.56,Grab,"Groceries, Entertainment, Dining, General Expenses",2022-09-13,Australia
    6321,Checking,551.19,Google,"Groceries, Transportation, Travel, Entertainment, Dining",2022-06-04,Japan
    6322,Checking,644.67,Fairprice,"Entertainment, Transportation, Groceries, General Expenses, Travel, Dining",2022-09-30,Japan
    6323,Savings,493.25,ACME,"Entertainment, Travel, Groceries, General Expenses, Dining",2022-11-07,Australia
    6324,Savings,993.04,Starbucks,General Expenses,2022-08-30,Singapore
    6325,Savings,883.75,Gojek,Travel,2022-09-07,Japan
    6326,Savings,891.26,Starbucks,"Entertainment, Travel, Transportation, Dining, General Expenses",2022-07-30,Indonesia
    6327,Checking,171.01,ACME,"Transportation, General Expenses, Groceries, Travel",2022-11-17,Singapore
    6328,Checking,425.27,Fairprice,"Transportation, Entertainment, General Expenses, Groceries, Dining, Travel",2022-10-31,Japan
    6329,Savings,634.85,Starbucks,"General Expenses, Dining, Travel, Transportation, Entertainment",2022-09-18,Australia
    6330,Checking,736.83,Fairprice,Transportation,2022-06-09,Japan
    6331,Checking,695.34,Amazon,Transportation,2022-11-11,Singapore
    6332,Checking,782.26,Uber,"Groceries, Travel",2022-06-16,Indonesia
    6333,Savings,616.08,Grab,"Groceries, Dining, Entertainment, General Expenses",2022-09-08,Australia
    6334,Savings,329.64,Google,"Groceries, Transportation, Travel, General Expenses, Entertainment, Dining",2022-12-17,Indonesia
    6335,Savings,776.76,Gojek,"Transportation, General Expenses, Travel, Dining",2022-11-14,Japan
    6336,Joint Account,136.97,Google,"Travel, General Expenses",2022-09-22,Indonesia
    6337,Savings,885.63,Walmart,"General Expenses, Groceries, Entertainment, Travel, Dining, Transportation",2022-10-20,Japan
    6338,Savings,219.73,Fairprice,"Transportation, Entertainment, Groceries, General Expenses, Dining",2022-11-02,Indonesia
    6339,Savings,42.69,Starbucks,"General Expenses, Dining, Groceries",2022-10-07,Japan
    6340,Checking,232.54,ACME,Dining,2022-07-18,Japan
    6341,Savings,19.87,Grab,"Travel, Groceries, General Expenses, Transportation, Entertainment",2022-12-19,Japan
    6342,Savings,951.04,Gojek,"Entertainment, Dining, Travel",2022-12-22,Japan
    6343,Checking,568.54,Walmart,"Entertainment, Transportation",2022-11-26,Indonesia
    6344,Joint Account,397.59,Uber,"General Expenses, Entertainment",2022-10-06,Japan
    6345,Checking,5.08,Grab,"Dining, Travel, Entertainment, General Expenses, Transportation",2022-10-02,Singapore
    6346,Checking,568.67,Grab,"Entertainment, Dining, Groceries, Transportation, General Expenses, Travel",2022-10-11,Japan
    6347,Joint Account,741.78,Uber,"General Expenses, Transportation, Travel, Entertainment",2022-11-13,Indonesia
    6348,Checking,745.03,Walmart,Travel,2022-11-01,Australia
    6349,Savings,654.87,Fairprice,"Transportation, Groceries, Travel, Dining",2022-07-18,Japan
    6350,Joint Account,917.72,Fairprice,"Travel, Entertainment, Transportation, Dining, Groceries, General Expenses",2022-06-30,Australia
    6351,Checking,669.64,ACME,General Expenses,2022-12-14,Indonesia
    6352,Savings,973.95,Gojek,"General Expenses, Transportation",2022-11-05,Australia
    6353,Savings,920.36,Fairprice,"Transportation, Dining, General Expenses, Travel, Groceries",2022-12-25,Indonesia
    6354,Checking,399.0,Fairprice,Transportation,2022-06-24,Indonesia
    6355,Savings,326.16,Uber,"Entertainment, General Expenses",2022-10-07,Japan
    6356,Savings,679.1,Starbucks,"Transportation, Entertainment, Travel, Dining",2022-12-01,Japan
    6357,Savings,905.52,Grab,Travel,2022-06-27,Indonesia
    6358,Checking,66.2,Starbucks,"General Expenses, Entertainment, Travel, Dining, Transportation, Groceries",2022-09-20,Japan
    6359,Joint Account,857.93,Grab,"Travel, Entertainment, Dining, Transportation",2022-10-30,Japan
    6360,Joint Account,877.51,Starbucks,"Travel, Entertainment",2022-12-28,Singapore
    6361,Checking,665.28,Grab,"Transportation, Dining, Travel, General Expenses, Groceries, Entertainment",2022-12-25,Japan
    6362,Checking,542.37,Walmart,"Transportation, Travel, Groceries, General Expenses, Entertainment",2022-11-25,Japan
    6363,Checking,994.48,Fairprice,"Transportation, Dining, Travel",2022-08-27,Japan
    6364,Checking,594.25,Starbucks,"Groceries, Transportation, Travel, Entertainment",2022-12-17,Japan
    6365,Checking,291.8,Starbucks,"Dining, General Expenses",2022-10-23,Singapore
    6366,Joint Account,408.73,Grab,"Groceries, Travel, Transportation",2022-12-15,Australia
    6367,Checking,741.81,Uber,"Transportation, General Expenses, Entertainment, Groceries, Dining, Travel",2022-07-12,Australia
    6368,Savings,563.39,ACME,"General Expenses, Entertainment, Groceries",2022-08-24,Australia
    6369,Joint Account,310.38,Uber,Dining,2022-12-24,Singapore
    6370,Savings,971.78,Fairprice,"Entertainment, Transportation, Travel",2022-11-20,Japan
    6371,Checking,289.62,Gojek,"General Expenses, Groceries, Entertainment, Travel, Dining",2022-08-31,Japan
    6372,Joint Account,908.21,Walmart,Groceries,2022-11-02,Australia
    6373,Savings,813.98,Fairprice,"Entertainment, Groceries, General Expenses, Transportation, Dining, Travel",2022-10-05,Indonesia
    6374,Joint Account,13.25,Starbucks,"Transportation, General Expenses, Entertainment, Groceries, Dining, Travel",2022-08-06,Singapore
    6375,Savings,642.47,Grab,"Entertainment, Travel, Transportation",2022-09-07,Japan
    6376,Savings,489.34,Starbucks,"Dining, Transportation, Entertainment, Travel, General Expenses",2022-09-20,Indonesia
    6377,Joint Account,689.27,Grab,"Travel, Groceries",2022-07-29,Singapore
    6378,Savings,662.33,Grab,"Dining, Groceries, Travel, Entertainment, General Expenses",2022-09-19,Singapore
    6379,Savings,214.12,Amazon,"Dining, Transportation, Travel, General Expenses, Entertainment, Groceries",2022-06-15,Australia
    6380,Checking,922.37,Starbucks,"Transportation, Dining",2022-07-22,Indonesia
    6381,Checking,181.52,Google,"Transportation, General Expenses, Entertainment, Dining, Travel",2022-07-11,Indonesia
    6382,Savings,261.96,Uber,"Entertainment, Dining, Transportation, General Expenses",2022-12-22,Singapore
    6383,Checking,661.54,ACME,"Groceries, Dining, Entertainment, General Expenses, Travel",2022-11-07,Singapore
    6384,Joint Account,51.51,Google,"Entertainment, General Expenses",2022-10-06,Australia
    6385,Joint Account,285.54,Google,"Dining, Transportation",2022-12-15,Indonesia
    6386,Joint Account,126.51,Starbucks,"Groceries, Entertainment, Dining",2022-09-06,Japan
    6387,Checking,970.72,Google,"General Expenses, Travel, Dining, Transportation, Entertainment, Groceries",2022-11-03,Australia
    6388,Savings,667.38,Google,Groceries,2022-06-27,Australia
    6389,Savings,500.04,Walmart,"Dining, Entertainment",2022-08-16,Singapore
    6390,Checking,840.06,Uber,Dining,2022-06-22,Australia
    6391,Joint Account,808.24,Gojek,"Groceries, Dining, General Expenses, Travel, Entertainment, Transportation",2022-11-05,Singapore
    6392,Checking,608.09,Uber,"Travel, Groceries, Transportation, Dining, Entertainment, General Expenses",2022-10-21,Australia
    6393,Checking,195.02,Amazon,"Transportation, Entertainment",2022-10-25,Japan
    6394,Joint Account,737.72,Walmart,Entertainment,2022-11-02,Singapore
    6395,Joint Account,945.77,Amazon,"Entertainment, Dining, Transportation, Groceries, General Expenses",2022-11-17,Singapore
    6396,Savings,954.41,Starbucks,"Transportation, Groceries",2022-11-10,Singapore
    6397,Savings,862.66,Uber,"Groceries, Transportation, Dining",2022-07-01,Australia
    6398,Savings,12.26,Grab,"Transportation, Entertainment, Travel, Dining",2022-11-24,Japan
    6399,Checking,36.93,Walmart,"General Expenses, Travel, Dining, Transportation",2022-07-16,Japan
    6400,Checking,650.14,Walmart,"General Expenses, Entertainment, Travel",2022-10-06,Japan
    6401,Checking,579.76,ACME,"General Expenses, Transportation",2022-06-17,Indonesia
    6402,Savings,439.97,Amazon,"Dining, Transportation, Entertainment, Travel",2022-10-11,Japan
    6403,Joint Account,545.72,Amazon,"Travel, Entertainment",2022-06-02,Indonesia
    6404,Joint Account,353.66,Gojek,"Entertainment, Dining",2022-10-14,Singapore
    6405,Joint Account,438.6,Google,"Transportation, Travel, Dining, Entertainment",2022-07-22,Indonesia
    6406,Checking,926.71,Gojek,"General Expenses, Travel, Groceries",2022-09-28,Indonesia
    6407,Checking,26.64,Grab,"General Expenses, Transportation, Dining, Groceries, Entertainment, Travel",2022-10-22,Australia
    6408,Joint Account,139.76,Grab,"Transportation, Groceries, General Expenses",2022-09-29,Australia
    6409,Savings,210.34,Fairprice,"Travel, Transportation, Dining, Entertainment, General Expenses, Groceries",2022-08-04,Singapore
    6410,Joint Account,145.99,Walmart,"Travel, Entertainment",2022-07-30,Indonesia
    6411,Joint Account,32.17,Grab,"Entertainment, General Expenses",2022-07-08,Australia
    6412,Savings,655.85,Google,"Transportation, Groceries, Entertainment",2022-09-01,Indonesia
    6413,Joint Account,698.77,Starbucks,"Groceries, Dining, Travel, Transportation, Entertainment, General Expenses",2022-09-01,Singapore
    6414,Joint Account,761.93,Fairprice,"Travel, Transportation, Entertainment, Dining, Groceries",2022-11-17,Japan
    6415,Checking,983.51,Google,"Dining, General Expenses",2022-08-29,Singapore
    6416,Checking,556.28,Gojek,"Travel, General Expenses, Entertainment, Groceries, Dining, Transportation",2022-10-17,Singapore
    6417,Joint Account,396.62,Fairprice,"Dining, Entertainment, Groceries, General Expenses, Transportation, Travel",2022-11-12,Indonesia
    6418,Savings,625.61,Walmart,General Expenses,2022-08-01,Singapore
    6419,Joint Account,834.97,Fairprice,"General Expenses, Dining",2022-12-30,Indonesia
    6420,Joint Account,990.34,Uber,"Dining, Groceries, Entertainment",2022-11-04,Australia
    6421,Checking,802.54,Uber,Entertainment,2022-09-23,Japan
    6422,Savings,202.16,Gojek,"Entertainment, Groceries, Travel",2022-11-11,Japan
    6423,Joint Account,141.41,Gojek,"Groceries, Transportation, General Expenses, Entertainment",2022-07-13,Indonesia
    6424,Joint Account,415.05,Starbucks,"General Expenses, Dining, Entertainment, Transportation, Travel",2022-12-26,Indonesia
    6425,Joint Account,103.19,Walmart,Groceries,2022-09-01,Indonesia
    6426,Joint Account,424.71,ACME,"General Expenses, Transportation, Travel",2022-11-04,Singapore
    6427,Savings,298.59,ACME,"Transportation, Groceries",2022-10-24,Australia
    6428,Checking,999.23,Fairprice,"Entertainment, Transportation, Dining, General Expenses, Travel",2022-09-06,Singapore
    6429,Checking,618.81,Grab,"Dining, Transportation",2022-07-22,Australia
    6430,Checking,358.46,Google,"General Expenses, Transportation, Travel",2022-08-05,Indonesia
    6431,Checking,205.13,Gojek,"General Expenses, Groceries, Dining, Travel",2022-11-18,Japan
    6432,Joint Account,607.05,Uber,"Dining, Travel, Groceries, General Expenses, Transportation, Entertainment",2022-11-07,Japan
    6433,Savings,27.72,Uber,Dining,2022-12-20,Australia
    6434,Joint Account,745.82,Starbucks,Entertainment,2022-07-14,Japan
    6435,Savings,155.09,Fairprice,"Transportation, Groceries, General Expenses",2022-12-07,Indonesia
    6436,Savings,275.2,Uber,"Travel, Transportation, General Expenses",2022-06-03,Singapore
    6437,Joint Account,419.38,Walmart,Dining,2022-09-27,Indonesia
    6438,Savings,899.94,Grab,"Dining, Transportation, General Expenses, Travel, Groceries, Entertainment",2022-07-13,Australia
    6439,Checking,148.84,ACME,"Transportation, Travel, Dining, Entertainment, Groceries",2022-10-21,Australia
    6440,Joint Account,409.86,ACME,"Transportation, Dining",2022-06-22,Indonesia
    6441,Checking,941.61,ACME,"General Expenses, Travel, Dining, Transportation",2022-09-29,Singapore
    6442,Joint Account,152.47,Amazon,"Travel, General Expenses, Transportation, Dining, Entertainment",2022-12-10,Singapore
    6443,Checking,863.9,Starbucks,Entertainment,2022-07-21,Australia
    6444,Joint Account,331.56,Amazon,"Entertainment, Dining, Transportation, General Expenses",2022-11-19,Indonesia
    6445,Savings,113.68,ACME,"Transportation, Entertainment",2022-07-25,Japan
    6446,Checking,679.98,Amazon,"Transportation, Groceries, Dining, Entertainment",2022-12-05,Singapore
    6447,Savings,446.88,Grab,"Transportation, General Expenses, Travel",2022-11-11,Singapore
    6448,Joint Account,789.64,Google,"Groceries, General Expenses, Dining, Entertainment, Travel, Transportation",2022-08-08,Japan
    6449,Joint Account,133.13,Uber,"Entertainment, Groceries, Dining, Travel",2022-10-10,Indonesia
    6450,Checking,517.02,Uber,"General Expenses, Entertainment",2022-08-04,Singapore
    6451,Checking,421.92,Google,General Expenses,2022-12-08,Japan
    6452,Joint Account,665.42,Starbucks,"Entertainment, Transportation, Groceries, Travel, Dining",2022-08-23,Singapore
    6453,Checking,306.36,ACME,"Dining, Groceries, Travel, Entertainment, General Expenses, Transportation",2022-08-02,Indonesia
    6454,Checking,735.29,ACME,"General Expenses, Groceries, Entertainment",2022-06-29,Japan
    6455,Joint Account,65.19,Walmart,"Transportation, Groceries",2022-09-05,Japan
    6456,Checking,843.82,Grab,"Dining, Groceries, Entertainment, Transportation, General Expenses, Travel",2022-10-05,Australia
    6457,Savings,535.78,Walmart,"Travel, Entertainment, Groceries, Dining, General Expenses, Transportation",2022-07-28,Indonesia
    6458,Checking,56.53,Google,"General Expenses, Transportation, Groceries, Dining, Entertainment",2022-10-29,Australia
    6459,Checking,539.11,Google,"Travel, Dining, Transportation",2022-06-30,Singapore
    6460,Checking,895.08,Starbucks,"General Expenses, Travel, Entertainment",2022-08-28,Singapore
    6461,Joint Account,593.1,Starbucks,"Groceries, Dining, Entertainment",2022-07-22,Indonesia
    6462,Joint Account,722.43,Fairprice,"Dining, Transportation, Groceries, Entertainment, Travel",2022-08-02,Japan
    6463,Joint Account,818.53,ACME,"Entertainment, Groceries, General Expenses, Dining, Transportation",2022-07-09,Australia
    6464,Savings,177.36,ACME,"Dining, General Expenses",2022-10-16,Indonesia
    6465,Checking,253.68,Walmart,"Entertainment, Travel",2022-09-25,Indonesia
    6466,Joint Account,562.52,Fairprice,"Groceries, Travel, Transportation",2022-12-04,Japan
    6467,Savings,567.35,Amazon,"Travel, Transportation, General Expenses, Dining",2022-11-21,Australia
    6468,Checking,738.03,Gojek,"Entertainment, Dining",2022-06-03,Indonesia
    6469,Savings,514.02,Amazon,"Transportation, Travel, Entertainment, General Expenses",2022-11-25,Japan
    6470,Joint Account,649.34,Uber,"Dining, General Expenses, Travel, Entertainment, Transportation, Groceries",2022-10-29,Indonesia
    6471,Joint Account,611.78,Fairprice,"Entertainment, Transportation, Travel, Dining, Groceries",2022-06-06,Australia
    6472,Savings,607.06,Google,"Groceries, Travel",2022-11-20,Indonesia
    6473,Checking,308.86,Walmart,"Travel, Dining",2022-08-30,Singapore
    6474,Checking,988.2,ACME,"Entertainment, Transportation",2022-07-06,Japan
    6475,Checking,737.64,Fairprice,"Travel, Transportation, Groceries",2022-10-25,Japan
    6476,Savings,700.22,Grab,"Groceries, Dining, Transportation, Entertainment",2022-08-17,Singapore
    6477,Savings,80.81,Gojek,"General Expenses, Entertainment",2022-07-14,Singapore
    6478,Checking,398.21,ACME,Groceries,2022-08-10,Indonesia
    6479,Savings,366.18,Google,"Transportation, Travel, Entertainment",2022-11-16,Singapore
    6480,Joint Account,956.76,Amazon,"Groceries, Dining, Transportation, General Expenses",2022-09-15,Indonesia
    6481,Savings,253.38,Google,"Travel, General Expenses",2022-07-11,Singapore
    6482,Savings,177.49,ACME,"Dining, Transportation",2022-07-01,Australia
    6483,Savings,112.11,Gojek,"Dining, General Expenses, Entertainment",2022-09-13,Indonesia
    6484,Savings,360.66,Google,"Dining, Travel, Entertainment, Groceries, Transportation",2022-09-24,Japan
    6485,Joint Account,366.82,Fairprice,"General Expenses, Travel, Transportation, Dining, Entertainment, Groceries",2022-10-29,Japan
    6486,Savings,916.39,ACME,"Transportation, Groceries, Dining",2022-11-11,Indonesia
    6487,Joint Account,638.14,Amazon,"Groceries, General Expenses, Dining, Travel",2022-11-04,Singapore
    6488,Checking,791.34,ACME,"Transportation, Groceries, Dining, General Expenses, Entertainment, Travel",2022-09-30,Singapore
    6489,Checking,638.62,Grab,"Travel, General Expenses",2022-12-04,Singapore
    6490,Savings,521.46,Grab,"Dining, Transportation, Travel, General Expenses",2022-10-31,Australia
    6491,Savings,494.14,Starbucks,"Dining, Entertainment, General Expenses, Transportation, Groceries, Travel",2022-06-20,Australia
    6492,Joint Account,847.72,Uber,"Dining, Transportation, General Expenses, Travel, Groceries",2022-11-16,Singapore
    6493,Joint Account,901.91,Amazon,"Transportation, Travel, Dining, General Expenses, Groceries, Entertainment",2022-08-17,Indonesia
    6494,Checking,734.11,Grab,"Travel, Dining",2022-09-29,Japan
    6495,Checking,965.45,Grab,"Transportation, General Expenses, Entertainment, Travel, Dining, Groceries",2022-07-04,Australia
    6496,Joint Account,916.16,ACME,"Travel, Transportation, Dining",2022-12-31,Japan
    6497,Savings,591.51,Uber,"Travel, Dining, General Expenses, Groceries, Transportation",2022-09-10,Australia
    6498,Savings,371.22,Starbucks,"Dining, Transportation, Entertainment",2022-06-23,Australia
    6499,Savings,589.15,Walmart,"General Expenses, Groceries, Travel, Entertainment, Dining",2022-07-08,Indonesia
    6500,Joint Account,192.55,Grab,"General Expenses, Groceries, Travel, Dining",2022-08-17,Australia
    6501,Checking,726.54,Gojek,"Entertainment, Groceries, Transportation, General Expenses, Dining, Travel",2022-08-06,Singapore
    6502,Checking,28.5,Walmart,"General Expenses, Travel, Dining, Entertainment, Groceries",2022-06-19,Japan
    6503,Savings,6.82,Amazon,"Travel, General Expenses, Transportation, Entertainment, Dining",2022-06-19,Singapore
    6504,Joint Account,575.73,Walmart,"Groceries, Transportation, Entertainment, Dining, Travel",2022-12-29,Australia
    6505,Joint Account,883.22,Amazon,"Dining, Groceries, Entertainment, Travel, Transportation, General Expenses",2022-08-07,Singapore
    6506,Savings,644.64,Gojek,"Dining, General Expenses, Travel, Entertainment, Transportation, Groceries",2022-11-13,Indonesia
    6507,Savings,286.83,Starbucks,"Travel, Dining, Entertainment",2022-07-31,Indonesia
    6508,Joint Account,860.03,Walmart,"Dining, Entertainment, Transportation",2022-06-30,Indonesia
    6509,Checking,369.93,Starbucks,"General Expenses, Travel, Entertainment, Transportation, Dining",2022-08-16,Australia
    6510,Checking,968.73,Amazon,"Transportation, Travel, Groceries, Dining, Entertainment",2022-12-31,Japan
    6511,Joint Account,841.17,Walmart,"Dining, Travel, General Expenses, Entertainment",2022-08-06,Australia
    6512,Checking,688.92,Starbucks,"Dining, Travel, General Expenses, Transportation, Entertainment",2022-08-22,Indonesia
    6513,Checking,274.39,Uber,"Groceries, Travel, General Expenses",2022-11-06,Indonesia
    6514,Checking,346.53,Gojek,Groceries,2022-11-20,Singapore
    6515,Joint Account,52.98,Starbucks,"Travel, Transportation, Dining, General Expenses, Groceries, Entertainment",2022-07-10,Japan
    6516,Joint Account,525.63,Gojek,"Travel, Groceries, Entertainment, General Expenses, Transportation",2022-10-10,Indonesia
    6517,Joint Account,534.84,Google,"Dining, Transportation, Groceries, Travel, General Expenses, Entertainment",2022-09-09,Australia
    6518,Joint Account,30.77,Google,Entertainment,2022-06-23,Australia
    6519,Checking,209.15,Amazon,"Dining, General Expenses, Groceries, Entertainment, Transportation, Travel",2022-09-23,Indonesia
    6520,Savings,173.9,Amazon,"Dining, Travel, Groceries, General Expenses, Transportation, Entertainment",2022-11-26,Singapore
    6521,Joint Account,886.58,Amazon,"Travel, Entertainment, Dining, Groceries, Transportation",2022-10-29,Australia
    6522,Joint Account,332.65,Gojek,"General Expenses, Travel, Transportation, Entertainment",2022-11-18,Australia
    6523,Checking,877.18,Google,"Transportation, Travel, Entertainment, General Expenses, Groceries, Dining",2022-10-17,Indonesia
    6524,Savings,885.75,Walmart,"Travel, General Expenses, Entertainment, Dining, Groceries, Transportation",2022-12-15,Indonesia
    6525,Joint Account,23.54,Starbucks,Transportation,2022-06-15,Japan
    6526,Checking,529.58,Starbucks,"Dining, Transportation, Travel, General Expenses",2022-06-05,Singapore
    6527,Joint Account,311.2,Starbucks,"Transportation, Groceries",2022-06-18,Indonesia
    6528,Savings,337.64,Walmart,"General Expenses, Travel, Entertainment, Transportation",2022-06-10,Singapore
    6529,Checking,361.05,Starbucks,"Transportation, Dining",2022-11-14,Australia
    6530,Joint Account,294.83,Walmart,"Entertainment, Groceries, General Expenses, Transportation",2022-07-28,Singapore
    6531,Savings,573.19,Gojek,"Dining, Transportation, Groceries",2022-10-25,Indonesia
    6532,Checking,388.22,Gojek,"Travel, Transportation, Dining, Entertainment",2022-11-01,Indonesia
    6533,Joint Account,570.74,Gojek,"Groceries, Transportation, Travel, Dining",2022-08-26,Australia
    6534,Checking,696.59,Starbucks,Dining,2022-11-17,Indonesia
    6535,Joint Account,501.52,Google,"Groceries, Dining, General Expenses, Travel",2022-12-14,Australia
    6536,Joint Account,34.19,Uber,Groceries,2022-10-02,Australia
    6537,Joint Account,365.45,Starbucks,"General Expenses, Transportation, Travel, Groceries",2022-12-21,Singapore
    6538,Checking,656.07,Amazon,"Entertainment, Travel, Groceries",2022-07-05,Japan
    6539,Joint Account,762.48,Walmart,"Entertainment, Groceries, Transportation, General Expenses",2022-11-26,Singapore
    6540,Checking,423.91,Grab,"Groceries, Travel, General Expenses, Transportation, Dining, Entertainment",2022-08-01,Japan
    6541,Checking,554.3,Google,Entertainment,2022-12-23,Japan
    6542,Joint Account,141.03,Gojek,"Travel, Transportation, General Expenses, Entertainment",2022-08-29,Indonesia
    6543,Savings,351.61,Grab,"Entertainment, Transportation, Groceries, General Expenses, Dining",2022-06-06,Australia
    6544,Checking,845.22,Google,General Expenses,2022-07-03,Australia
    6545,Savings,703.47,Grab,"Travel, General Expenses, Groceries, Transportation",2022-09-01,Indonesia
    6546,Savings,345.8,Grab,"Dining, Transportation, Travel",2022-09-26,Australia
    6547,Savings,2.59,Walmart,"Entertainment, Dining",2022-11-10,Indonesia
    6548,Checking,230.35,Gojek,"Groceries, Transportation, General Expenses, Entertainment, Travel",2022-11-18,Indonesia
    6549,Joint Account,570.82,Fairprice,"Dining, Transportation, General Expenses",2022-10-24,Singapore
    6550,Joint Account,426.52,Amazon,"Transportation, Dining",2022-06-30,Singapore
    6551,Savings,94.9,Uber,"Travel, Dining, Entertainment, Groceries, Transportation",2022-07-26,Australia
    6552,Joint Account,239.51,ACME,Groceries,2022-09-21,Japan
    6553,Checking,723.6,Walmart,"General Expenses, Entertainment, Groceries",2022-10-24,Japan
    6554,Checking,45.36,Starbucks,Dining,2022-08-06,Australia
    6555,Savings,995.85,Walmart,"Groceries, Entertainment, Travel, General Expenses",2022-08-19,Indonesia
    6556,Savings,706.88,Grab,Dining,2022-10-20,Singapore
    6557,Checking,667.17,Walmart,"Groceries, Transportation, Entertainment, Dining, General Expenses",2022-07-13,Japan
    6558,Checking,296.97,ACME,"Groceries, General Expenses, Dining, Travel, Entertainment",2022-08-22,Australia
    6559,Savings,39.07,Gojek,"General Expenses, Entertainment, Transportation",2022-06-29,Singapore
    6560,Checking,912.63,Google,"Dining, Transportation, Travel, Groceries, Entertainment, General Expenses",2022-06-09,Australia
    6561,Joint Account,119.08,Amazon,"General Expenses, Transportation, Groceries, Entertainment, Dining, Travel",2022-11-11,Indonesia
    6562,Checking,608.53,Google,"Transportation, Entertainment, Dining, Groceries, General Expenses, Travel",2022-07-28,Singapore
    6563,Joint Account,915.18,Grab,"General Expenses, Travel, Groceries",2022-10-13,Indonesia
    6564,Joint Account,178.82,Grab,"Transportation, Travel, General Expenses, Groceries, Dining",2022-12-26,Australia
    6565,Savings,596.9,Walmart,Travel,2022-12-13,Indonesia
    6566,Checking,105.0,Fairprice,Groceries,2022-07-01,Australia
    6567,Checking,31.26,Starbucks,"Entertainment, Dining, Transportation, General Expenses",2022-06-13,Australia
    6568,Savings,395.1,Fairprice,"General Expenses, Travel, Groceries, Transportation",2022-08-24,Japan
    6569,Checking,402.03,ACME,"Travel, Transportation, Groceries, Entertainment, General Expenses, Dining",2022-10-17,Australia
    6570,Checking,586.17,ACME,"Dining, Entertainment, General Expenses, Groceries",2022-08-17,Singapore
    6571,Joint Account,468.5,Google,"General Expenses, Groceries, Transportation, Travel, Dining, Entertainment",2022-09-29,Australia
    6572,Savings,768.83,Walmart,Dining,2022-09-12,Indonesia
    6573,Joint Account,235.25,Uber,"Transportation, Dining, General Expenses, Entertainment",2022-08-24,Indonesia
    6574,Checking,750.81,Gojek,"Entertainment, Groceries, Transportation, Travel, General Expenses",2022-07-03,Australia
    6575,Savings,385.43,ACME,Dining,2022-12-20,Singapore
    6576,Checking,645.15,Uber,Travel,2022-11-19,Singapore
    6577,Savings,774.02,Walmart,"Transportation, General Expenses, Dining, Groceries, Entertainment, Travel",2022-12-27,Australia
    6578,Savings,439.77,Fairprice,"Dining, Entertainment, Transportation",2022-09-07,Indonesia
    6579,Checking,766.56,Uber,"Travel, Groceries, Entertainment, Dining",2022-12-02,Indonesia
    6580,Joint Account,161.81,Grab,"Transportation, Travel",2022-07-28,Japan
    6581,Savings,747.63,Uber,"General Expenses, Transportation, Entertainment, Groceries, Travel, Dining",2022-07-21,Australia
    6582,Savings,360.27,Uber,"Entertainment, Travel",2022-06-02,Japan
    6583,Checking,213.03,Walmart,"Transportation, General Expenses, Groceries, Entertainment, Travel, Dining",2022-12-03,Australia
    6584,Checking,847.36,Grab,"Transportation, Groceries, Travel, Dining",2022-08-16,Japan
    6585,Joint Account,529.31,Fairprice,"Entertainment, Transportation, Travel, Dining",2022-11-06,Australia
    6586,Checking,127.4,Starbucks,"Dining, Groceries",2022-06-10,Australia
    6587,Joint Account,363.34,Fairprice,"Entertainment, Dining, General Expenses",2022-09-04,Indonesia
    6588,Joint Account,986.18,Gojek,"Dining, General Expenses, Travel",2022-12-11,Singapore
    6589,Savings,941.94,Walmart,"General Expenses, Dining",2022-12-01,Japan
    6590,Savings,817.78,Google,Groceries,2022-10-11,Singapore
    6591,Joint Account,777.2,Grab,Groceries,2022-06-11,Indonesia
    6592,Joint Account,792.77,Gojek,"Transportation, General Expenses, Travel, Groceries",2022-08-07,Indonesia
    6593,Savings,796.71,Starbucks,"General Expenses, Travel, Entertainment",2022-08-16,Australia
    6594,Savings,533.8,Starbucks,"Transportation, Groceries, Dining, Travel, General Expenses",2022-10-08,Singapore
    6595,Joint Account,50.37,Gojek,"Entertainment, Travel, General Expenses, Groceries",2022-12-15,Australia
    6596,Checking,36.66,Google,"Transportation, Groceries",2022-11-02,Australia
    6597,Savings,764.54,Fairprice,"Dining, Travel",2022-09-05,Japan
    6598,Checking,660.24,Google,"Transportation, Entertainment, Dining",2022-11-10,Singapore
    6599,Joint Account,625.65,Google,"Transportation, Entertainment, General Expenses, Travel, Dining, Groceries",2022-08-11,Singapore
    6600,Joint Account,434.67,ACME,"Groceries, Entertainment, Travel, General Expenses, Transportation, Dining",2022-09-12,Japan
    6601,Savings,573.37,Gojek,"Dining, Transportation, Groceries",2022-12-19,Japan
    6602,Checking,222.6,Fairprice,"General Expenses, Transportation, Entertainment, Dining, Groceries",2022-11-04,Japan
    6603,Savings,444.31,Starbucks,"Groceries, Entertainment",2022-09-21,Indonesia
    6604,Savings,308.79,Amazon,"Entertainment, Travel, Groceries, Dining",2022-07-30,Australia
    6605,Savings,164.55,Gojek,"Dining, Transportation",2022-06-17,Singapore
    6606,Checking,584.29,Gojek,"Groceries, General Expenses, Entertainment",2022-06-06,Japan
    6607,Savings,404.11,Uber,"Travel, Entertainment, General Expenses, Dining, Groceries, Transportation",2022-07-28,Australia
    6608,Savings,802.09,Fairprice,"General Expenses, Entertainment, Groceries, Transportation",2022-10-21,Japan
    6609,Checking,375.42,Walmart,"Entertainment, Groceries, Travel, Transportation, Dining",2022-11-02,Australia
    6610,Joint Account,962.8,Starbucks,Travel,2022-09-07,Singapore
    6611,Joint Account,808.57,Grab,"Transportation, General Expenses, Dining",2022-12-04,Indonesia
    6612,Joint Account,799.37,ACME,Groceries,2022-10-31,Indonesia
    6613,Savings,443.58,Amazon,"Groceries, Transportation, Dining, Travel",2022-07-05,Indonesia
    6614,Checking,113.99,Gojek,"Dining, Travel, Entertainment, General Expenses, Transportation, Groceries",2022-06-23,Singapore
    6615,Joint Account,74.81,Starbucks,"Entertainment, Travel, General Expenses",2022-11-15,Singapore
    6616,Joint Account,256.17,Google,Travel,2022-10-13,Australia
    6617,Joint Account,580.16,Starbucks,"Transportation, Entertainment",2022-11-04,Japan
    6618,Checking,352.75,Starbucks,"Entertainment, Travel, General Expenses, Groceries",2022-08-27,Indonesia
    6619,Checking,189.62,ACME,"Travel, Entertainment, Transportation, Dining, General Expenses, Groceries",2022-11-22,Singapore
    6620,Checking,870.51,Gojek,"Entertainment, General Expenses, Dining, Travel",2022-12-19,Indonesia
    6621,Checking,912.32,Grab,"Dining, Groceries",2022-10-31,Japan
    6622,Savings,168.79,Uber,"General Expenses, Entertainment, Transportation, Groceries, Travel, Dining",2022-06-03,Japan
    6623,Savings,268.88,Amazon,"Entertainment, Transportation, Travel, Dining, Groceries",2022-07-28,Indonesia
    6624,Savings,749.77,Amazon,"Transportation, Groceries, Travel, General Expenses, Dining",2022-09-03,Indonesia
    6625,Joint Account,196.47,Uber,"Travel, Entertainment, General Expenses",2022-10-11,Japan
    6626,Savings,744.24,Starbucks,"Travel, Groceries, Entertainment",2022-06-05,Australia
    6627,Joint Account,257.61,Walmart,"Dining, General Expenses, Entertainment, Transportation, Groceries",2022-08-16,Singapore
    6628,Joint Account,293.53,Fairprice,"Groceries, Entertainment, Transportation, Dining, Travel, General Expenses",2022-06-17,Australia
    6629,Checking,165.96,Uber,"General Expenses, Travel",2022-06-20,Japan
    6630,Checking,726.07,Amazon,Dining,2022-11-03,Australia
    6631,Joint Account,637.96,Starbucks,"Entertainment, General Expenses, Dining, Transportation",2022-12-06,Singapore
    6632,Checking,786.26,ACME,"Dining, Transportation, Entertainment",2022-09-11,Indonesia
    6633,Savings,350.61,Starbucks,"General Expenses, Travel, Entertainment, Groceries, Dining, Transportation",2022-10-26,Japan
    6634,Joint Account,476.12,Uber,"Groceries, Transportation",2022-11-10,Indonesia
    6635,Checking,396.96,Google,"Transportation, Travel, General Expenses, Groceries",2022-07-10,Singapore
    6636,Checking,166.49,Grab,"General Expenses, Entertainment, Groceries, Travel, Dining",2022-10-09,Australia
    6637,Joint Account,967.23,Amazon,"General Expenses, Groceries, Dining",2022-08-16,Australia
    6638,Savings,60.32,Starbucks,"Transportation, Entertainment, Travel, General Expenses, Dining",2022-10-16,Indonesia
    6639,Checking,50.09,ACME,"Transportation, Travel",2022-08-31,Japan
    6640,Savings,970.93,Amazon,"General Expenses, Transportation, Dining, Groceries",2022-06-12,Australia
    6641,Joint Account,531.84,Google,"General Expenses, Dining, Groceries, Transportation",2022-08-02,Australia
    6642,Joint Account,336.17,Gojek,"Groceries, Transportation, Travel, Entertainment",2022-10-04,Japan
    6643,Joint Account,90.17,Starbucks,"Groceries, Entertainment, Transportation, Dining, General Expenses, Travel",2022-06-07,Indonesia
    6644,Checking,584.41,Starbucks,Groceries,2022-06-27,Indonesia
    6645,Checking,987.63,Amazon,General Expenses,2022-07-29,Japan
    6646,Joint Account,257.15,Fairprice,"Transportation, General Expenses, Dining, Entertainment, Groceries",2022-10-23,Singapore
    6647,Savings,449.58,Google,"Dining, General Expenses, Groceries, Entertainment, Travel, Transportation",2022-12-30,Singapore
    6648,Savings,377.14,Grab,"Entertainment, Travel, Groceries",2022-06-13,Indonesia
    6649,Joint Account,993.27,Grab,"Travel, Transportation, General Expenses, Groceries, Entertainment",2022-10-13,Singapore
    6650,Savings,123.76,Gojek,"General Expenses, Transportation, Travel, Groceries",2022-07-10,Indonesia
    6651,Joint Account,87.83,Starbucks,"Dining, Entertainment, General Expenses, Transportation",2022-12-22,Singapore
    6652,Checking,890.51,Uber,General Expenses,2022-08-28,Singapore
    6653,Joint Account,233.66,Starbucks,"Groceries, Transportation",2022-08-05,Singapore
    6654,Joint Account,113.25,Gojek,"General Expenses, Transportation",2022-08-26,Australia
    6655,Savings,407.01,Walmart,"General Expenses, Dining, Entertainment",2022-06-19,Australia
    6656,Checking,369.25,Starbucks,"Groceries, Dining, General Expenses, Entertainment, Transportation, Travel",2022-09-29,Australia
    6657,Joint Account,987.29,Gojek,"General Expenses, Transportation, Travel",2022-10-11,Singapore
    6658,Checking,403.8,Fairprice,"Groceries, Travel, Dining, Transportation",2022-06-24,Australia
    6659,Joint Account,281.56,Walmart,"Entertainment, Groceries, Travel, Transportation",2022-07-02,Australia
    6660,Checking,37.02,Grab,"Travel, Groceries, General Expenses, Entertainment, Transportation",2022-12-08,Japan
    6661,Joint Account,472.59,ACME,"General Expenses, Dining, Entertainment",2022-11-23,Indonesia
    6662,Joint Account,39.69,Amazon,"Travel, General Expenses, Groceries, Dining, Entertainment",2022-09-26,Japan
    6663,Joint Account,762.97,Uber,"Groceries, General Expenses",2022-07-28,Australia
    6664,Checking,554.75,Amazon,"Groceries, Transportation, Entertainment, General Expenses",2022-07-17,Australia
    6665,Savings,658.68,ACME,"Dining, General Expenses, Transportation",2022-12-27,Australia
    6666,Joint Account,481.1,Grab,"Dining, General Expenses",2022-06-14,Japan
    6667,Checking,529.87,Fairprice,Travel,2022-07-28,Singapore
    6668,Savings,861.2,Grab,"Entertainment, Dining, Travel, Transportation, Groceries, General Expenses",2022-06-30,Indonesia
    6669,Checking,963.72,Grab,"Entertainment, Groceries, Transportation",2022-07-17,Australia
    6670,Checking,724.83,Grab,"Transportation, General Expenses, Dining",2022-09-14,Indonesia
    6671,Savings,640.67,Starbucks,"Travel, General Expenses, Entertainment, Groceries, Transportation, Dining",2022-07-30,Australia
    6672,Joint Account,893.6,Amazon,"Groceries, General Expenses, Transportation, Dining, Entertainment, Travel",2022-07-29,Australia
    6673,Savings,295.04,Fairprice,"Transportation, Groceries",2022-08-03,Singapore
    6674,Savings,471.14,Grab,"Dining, Transportation, Groceries",2022-06-01,Japan
    6675,Savings,432.4,Gojek,"Travel, General Expenses, Transportation, Entertainment, Dining, Groceries",2022-12-15,Indonesia
    6676,Checking,325.93,ACME,"Travel, Transportation",2022-08-07,Australia
    6677,Checking,226.48,Google,"Entertainment, Travel, Dining, Transportation",2022-12-11,Japan
    6678,Joint Account,73.86,Walmart,Groceries,2022-09-12,Singapore
    6679,Joint Account,769.04,Google,"Travel, General Expenses, Transportation, Groceries",2022-10-29,Australia
    6680,Checking,867.24,Walmart,Dining,2022-06-06,Australia
    6681,Joint Account,423.96,Gojek,"Dining, Entertainment, Transportation, Groceries",2022-06-25,Japan
    6682,Checking,893.75,Walmart,"Dining, Travel, Transportation",2022-06-29,Japan
    6683,Savings,723.16,Amazon,"Transportation, General Expenses, Travel, Entertainment, Dining",2022-08-19,Singapore
    6684,Checking,37.47,Fairprice,"Dining, Travel, General Expenses, Transportation, Entertainment",2022-12-14,Singapore
    6685,Checking,705.14,Grab,"Entertainment, Groceries, Transportation, Travel, Dining",2022-12-12,Japan
    6686,Joint Account,133.6,Google,"General Expenses, Transportation, Travel, Entertainment",2022-07-29,Australia
    6687,Savings,829.56,Gojek,"Dining, Entertainment, Transportation, General Expenses, Travel",2022-10-02,Indonesia
    6688,Checking,808.68,Fairprice,"Travel, Dining, Groceries, General Expenses, Entertainment, Transportation",2022-06-02,Indonesia
    6689,Savings,719.97,Uber,"Dining, Entertainment, Travel, General Expenses",2022-12-09,Australia
    6690,Savings,236.6,Amazon,"Entertainment, Groceries, Travel, Dining",2022-07-16,Australia
    6691,Joint Account,822.02,Uber,"Transportation, General Expenses, Entertainment, Dining, Travel",2022-08-07,Singapore
    6692,Savings,433.53,Amazon,"Travel, Groceries, General Expenses, Transportation, Entertainment",2022-08-24,Singapore
    6693,Checking,693.99,Gojek,"Transportation, Entertainment, Dining, Travel, General Expenses, Groceries",2022-09-30,Japan
    6694,Savings,80.97,Walmart,"Transportation, General Expenses, Entertainment, Dining, Groceries",2022-12-31,Indonesia
    6695,Checking,255.72,ACME,"Dining, General Expenses, Travel, Transportation, Entertainment, Groceries",2022-08-03,Indonesia
    6696,Joint Account,680.16,Gojek,"Groceries, General Expenses, Transportation, Entertainment, Travel",2022-12-10,Indonesia
    6697,Checking,266.11,Google,"Dining, Entertainment, Transportation, General Expenses, Groceries",2022-07-28,Japan
    6698,Joint Account,763.05,Grab,"Groceries, Entertainment, Transportation, Travel, General Expenses, Dining",2022-10-01,Singapore
    6699,Savings,559.31,Starbucks,"Groceries, General Expenses, Transportation",2022-07-17,Japan
    6700,Joint Account,358.82,Uber,"General Expenses, Dining, Entertainment, Travel",2022-08-06,Indonesia
    6701,Checking,166.7,Starbucks,"Transportation, Travel, Entertainment, Groceries, Dining",2022-08-11,Indonesia
    6702,Checking,399.87,Grab,"Transportation, Travel, General Expenses, Entertainment, Dining, Groceries",2022-09-26,Japan
    6703,Joint Account,425.53,Grab,Transportation,2022-09-11,Singapore
    6704,Joint Account,936.57,ACME,"Entertainment, Transportation",2022-11-11,Australia
    6705,Savings,140.86,Amazon,"Entertainment, Dining, Groceries, Travel, General Expenses",2022-07-30,Australia
    6706,Joint Account,12.97,Fairprice,Entertainment,2022-07-18,Japan
    6707,Savings,207.96,ACME,Groceries,2022-09-08,Singapore
    6708,Savings,230.75,Amazon,"Groceries, Travel",2022-08-01,Singapore
    6709,Joint Account,422.37,Gojek,"General Expenses, Travel, Groceries, Transportation, Dining, Entertainment",2022-06-23,Indonesia
    6710,Checking,231.55,Grab,Transportation,2022-09-28,Indonesia
    6711,Joint Account,415.95,Uber,Dining,2022-06-26,Japan
    6712,Savings,991.3,Fairprice,"Dining, Entertainment, Transportation, Groceries, General Expenses, Travel",2022-11-26,Singapore
    6713,Checking,993.72,Walmart,Dining,2022-09-30,Indonesia
    6714,Joint Account,266.76,Amazon,"Entertainment, Dining, Travel, Groceries",2022-10-12,Japan
    6715,Joint Account,965.57,Uber,"Transportation, Entertainment, Travel, General Expenses",2022-09-10,Australia
    6716,Savings,734.87,Fairprice,"Transportation, Groceries, Entertainment, General Expenses",2022-06-22,Japan
    6717,Checking,336.06,ACME,"Entertainment, Travel, Dining, Transportation, Groceries, General Expenses",2022-06-25,Australia
    6718,Checking,80.95,Google,"Entertainment, General Expenses, Dining, Travel, Transportation",2022-10-12,Japan
    6719,Savings,410.2,Amazon,"Groceries, Entertainment, Dining",2022-09-22,Indonesia
    6720,Checking,528.53,Fairprice,"General Expenses, Transportation",2022-06-04,Indonesia
    6721,Checking,823.24,ACME,General Expenses,2022-12-09,Indonesia
    6722,Joint Account,415.86,Gojek,"Transportation, Dining, Entertainment",2022-08-06,Australia
    6723,Savings,149.82,ACME,"Entertainment, Transportation, General Expenses, Groceries, Dining",2022-06-01,Indonesia
    6724,Savings,207.41,Amazon,"General Expenses, Transportation, Groceries, Entertainment",2022-08-25,Singapore
    6725,Joint Account,469.06,Uber,"Travel, Groceries",2022-09-07,Singapore
    6726,Joint Account,495.74,Uber,"Travel, General Expenses, Dining, Entertainment, Groceries",2022-11-28,Singapore
    6727,Checking,178.51,Fairprice,"Dining, General Expenses, Transportation, Entertainment",2022-12-13,Australia
    6728,Joint Account,98.86,Amazon,"Travel, Groceries, Transportation",2022-08-19,Singapore
    6729,Checking,866.43,Starbucks,"Dining, General Expenses, Travel, Groceries",2022-12-24,Indonesia
    6730,Joint Account,759.21,Fairprice,Dining,2022-06-15,Singapore
    6731,Joint Account,340.17,ACME,"Entertainment, Travel, General Expenses",2022-08-23,Indonesia
    6732,Checking,137.31,Gojek,"Transportation, Entertainment, Dining, Travel, General Expenses, Groceries",2022-09-25,Indonesia
    6733,Joint Account,263.3,Fairprice,"Dining, Transportation, Groceries",2022-10-20,Singapore
    6734,Joint Account,267.22,Starbucks,"Groceries, General Expenses, Transportation, Dining, Entertainment",2022-07-10,Indonesia
    6735,Savings,651.56,Amazon,"Entertainment, Travel, General Expenses",2022-08-10,Australia
    6736,Checking,528.71,Google,"General Expenses, Travel, Groceries, Dining",2022-06-16,Japan
    6737,Checking,542.57,Starbucks,"Entertainment, Dining, Transportation, General Expenses, Travel, Groceries",2022-07-24,Japan
    6738,Savings,393.89,Walmart,"Transportation, Travel, Groceries, General Expenses, Entertainment, Dining",2022-09-21,Japan
    6739,Savings,816.29,Grab,"Transportation, Travel, Entertainment, General Expenses",2022-08-12,Japan
    6740,Checking,762.56,ACME,Dining,2022-07-09,Indonesia
    6741,Checking,308.47,Gojek,Groceries,2022-09-06,Indonesia
    6742,Checking,148.63,Walmart,Travel,2022-11-01,Singapore
    6743,Joint Account,680.94,Grab,"Groceries, Dining, General Expenses",2022-10-20,Australia
    6744,Checking,155.01,Fairprice,Transportation,2022-10-24,Australia
    6745,Checking,672.6,Grab,"Entertainment, Travel, Groceries, General Expenses, Dining, Transportation",2022-11-02,Indonesia
    6746,Savings,678.4,Uber,"Groceries, Entertainment, Dining, General Expenses, Transportation",2022-06-23,Japan
    6747,Savings,769.98,Fairprice,"Groceries, Transportation, General Expenses, Entertainment, Dining",2022-09-10,Japan
    6748,Joint Account,59.52,Fairprice,Transportation,2022-06-06,Indonesia
    6749,Joint Account,911.32,Google,"Dining, Entertainment, Groceries, Transportation, Travel, General Expenses",2022-11-25,Japan
    6750,Checking,581.72,Gojek,"Travel, General Expenses, Transportation",2022-11-11,Indonesia
    6751,Savings,216.91,Gojek,"Dining, Travel, Entertainment, Groceries, General Expenses, Transportation",2022-10-20,Singapore
    6752,Checking,894.82,ACME,"Groceries, Transportation, Travel",2022-07-23,Singapore
    6753,Joint Account,87.33,Uber,"Entertainment, Transportation, Groceries",2022-09-26,Singapore
    6754,Joint Account,390.15,Google,"Dining, Transportation, General Expenses",2022-11-29,Australia
    6755,Savings,1.08,Uber,"Travel, Entertainment",2022-10-01,Australia
    6756,Checking,920.65,Fairprice,"Groceries, Dining, Entertainment, General Expenses, Transportation, Travel",2022-12-29,Japan
    6757,Savings,502.35,Google,"Groceries, Dining, Transportation, Entertainment",2022-09-30,Japan
    6758,Checking,240.3,Grab,"Dining, Groceries, Entertainment, Transportation, General Expenses, Travel",2022-10-21,Singapore
    6759,Checking,393.78,Grab,"Dining, General Expenses, Travel, Transportation",2022-11-08,Japan
    6760,Savings,202.52,Grab,"Dining, Entertainment, Transportation",2022-10-20,Australia
    6761,Joint Account,443.53,Walmart,"Groceries, Entertainment, Dining, General Expenses, Travel, Transportation",2022-11-26,Japan
    6762,Joint Account,71.74,Uber,"Transportation, Entertainment, Dining, General Expenses",2022-10-02,Japan
    6763,Joint Account,982.58,Uber,"Groceries, Dining",2022-09-12,Japan
    6764,Joint Account,819.28,Google,Transportation,2022-11-20,Japan
    6765,Checking,753.49,Starbucks,"Dining, Entertainment",2022-10-29,Australia
    6766,Joint Account,441.42,Fairprice,"Dining, Travel, General Expenses, Entertainment, Transportation, Groceries",2022-08-07,Japan
    6767,Savings,884.77,Google,"Travel, Entertainment",2022-09-07,Japan
    6768,Checking,275.22,Gojek,"Groceries, Dining",2022-10-16,Indonesia
    6769,Joint Account,807.83,Walmart,"Entertainment, General Expenses, Dining, Transportation, Groceries, Travel",2022-08-23,Singapore
    6770,Joint Account,648.02,Gojek,"Transportation, Groceries, Travel, General Expenses, Dining, Entertainment",2022-06-07,Japan
    6771,Joint Account,154.13,Walmart,"Dining, Transportation, Travel",2022-11-06,Japan
    6772,Checking,544.81,Grab,"Travel, Groceries, Dining, Entertainment",2022-06-19,Singapore
    6773,Savings,955.8,Gojek,"Entertainment, Travel, Transportation, Groceries, General Expenses",2022-06-25,Singapore
    6774,Savings,5.17,Amazon,"Entertainment, Dining",2022-06-15,Japan
    6775,Savings,167.77,Fairprice,"Travel, Entertainment, Groceries, Transportation",2022-07-28,Japan
    6776,Savings,520.85,Gojek,Entertainment,2022-12-14,Indonesia
    6777,Checking,947.74,Amazon,"Groceries, General Expenses",2022-09-07,Japan
    6778,Joint Account,557.22,Grab,"Transportation, Travel, General Expenses, Groceries, Dining",2022-08-01,Singapore
    6779,Joint Account,463.51,ACME,"Travel, General Expenses, Dining, Entertainment",2022-06-09,Indonesia
    6780,Joint Account,157.19,Google,"Dining, Groceries, General Expenses, Travel, Entertainment, Transportation",2022-09-23,Indonesia
    6781,Joint Account,842.1,ACME,"Dining, Groceries, Entertainment, General Expenses, Transportation",2022-10-12,Japan
    6782,Savings,559.17,ACME,"General Expenses, Transportation",2022-09-06,Indonesia
    6783,Checking,124.78,ACME,"Entertainment, General Expenses, Dining, Groceries, Travel, Transportation",2022-08-11,Australia
    6784,Savings,165.01,ACME,"Groceries, Transportation, Entertainment, Dining",2022-10-15,Indonesia
    6785,Joint Account,868.68,Gojek,"Transportation, Groceries, Travel, Dining, General Expenses",2022-08-02,Australia
    6786,Savings,335.76,Walmart,"Travel, General Expenses, Groceries, Dining",2022-08-16,Japan
    6787,Joint Account,488.51,Google,"General Expenses, Entertainment, Dining, Groceries",2022-06-05,Indonesia
    6788,Checking,574.46,ACME,"Transportation, General Expenses, Travel, Dining, Entertainment, Groceries",2022-12-11,Australia
    6789,Savings,894.56,Walmart,"Travel, General Expenses, Entertainment, Dining, Transportation, Groceries",2022-09-08,Japan
    6790,Checking,814.31,Uber,"Groceries, General Expenses, Transportation, Dining",2022-06-14,Singapore
    6791,Checking,234.83,Uber,"Groceries, Transportation, General Expenses, Entertainment",2022-12-06,Japan
    6792,Checking,994.93,Starbucks,Entertainment,2022-10-02,Japan
    6793,Savings,697.75,Grab,Travel,2022-06-02,Japan
    6794,Checking,98.93,Fairprice,"Transportation, Dining, Entertainment, Groceries, Travel",2022-06-08,Singapore
    6795,Joint Account,324.91,Fairprice,"Groceries, Dining, Entertainment, Travel",2022-06-11,Indonesia
    6796,Savings,752.01,Starbucks,"Dining, General Expenses, Entertainment, Transportation, Travel, Groceries",2022-06-21,Japan
    6797,Checking,591.75,Starbucks,"Entertainment, Travel, General Expenses, Transportation",2022-12-29,Indonesia
    6798,Savings,391.94,Fairprice,"Dining, General Expenses, Entertainment, Groceries",2022-10-01,Japan
    6799,Checking,357.45,Walmart,"Groceries, Dining, Travel, Transportation, Entertainment, General Expenses",2022-08-05,Japan
    6800,Savings,740.65,Gojek,"General Expenses, Entertainment, Groceries, Transportation",2022-12-14,Japan
    6801,Checking,680.75,Starbucks,"Groceries, Transportation, General Expenses, Entertainment, Dining",2022-12-14,Australia
    6802,Joint Account,338.57,Fairprice,"Groceries, Travel",2022-06-29,Japan
    6803,Savings,13.73,Amazon,"General Expenses, Travel, Transportation, Dining",2022-12-30,Indonesia
    6804,Joint Account,576.54,Uber,"Transportation, Dining, Entertainment, Travel, Groceries, General Expenses",2022-12-03,Indonesia
    6805,Joint Account,320.13,Starbucks,"Groceries, Dining, Transportation",2022-07-11,Indonesia
    6806,Checking,288.73,Grab,"Dining, Groceries, General Expenses",2022-09-04,Indonesia
    6807,Savings,218.25,Google,"Entertainment, General Expenses, Dining",2022-08-18,Indonesia
    6808,Checking,364.08,Amazon,"Dining, Transportation",2022-09-14,Singapore
    6809,Joint Account,525.25,Walmart,General Expenses,2022-10-20,Japan
    6810,Joint Account,164.38,Uber,"Groceries, Dining, Entertainment, Transportation",2022-10-30,Australia
    6811,Joint Account,154.57,Uber,Dining,2022-06-21,Indonesia
    6812,Savings,800.3,Fairprice,"Travel, Transportation, Groceries, General Expenses",2022-08-19,Japan
    6813,Joint Account,868.98,Uber,"Dining, Transportation",2022-10-28,Japan
    6814,Joint Account,965.69,Gojek,"Entertainment, Dining, General Expenses, Groceries, Transportation, Travel",2022-09-30,Australia
    6815,Savings,791.48,Uber,"Travel, General Expenses, Transportation, Entertainment",2022-12-06,Japan
    6816,Checking,772.72,Walmart,"Groceries, Entertainment, Dining",2022-06-10,Indonesia
    6817,Savings,95.38,Fairprice,"General Expenses, Travel, Dining, Groceries",2022-06-26,Japan
    6818,Joint Account,794.1,Google,"Entertainment, Transportation",2022-08-21,Indonesia
    6819,Checking,837.7,Google,Transportation,2022-06-26,Singapore
    6820,Savings,709.37,Grab,"Entertainment, Dining, Transportation, Groceries, General Expenses",2022-07-15,Japan
    6821,Joint Account,550.73,ACME,"Travel, Dining, General Expenses, Entertainment, Transportation, Groceries",2022-10-15,Australia
    6822,Joint Account,688.83,Amazon,"Groceries, Dining, Transportation, General Expenses, Travel, Entertainment",2022-11-25,Australia
    6823,Joint Account,155.53,ACME,"Transportation, Dining, Entertainment, Travel, General Expenses",2022-10-12,Singapore
    6824,Checking,508.07,Gojek,"Entertainment, Travel, Dining, General Expenses, Groceries",2022-06-10,Singapore
    6825,Savings,208.66,Starbucks,"General Expenses, Entertainment, Dining, Travel",2022-11-25,Australia
    6826,Checking,701.17,ACME,"Dining, General Expenses, Transportation, Groceries, Entertainment, Travel",2022-09-03,Indonesia
    6827,Joint Account,115.61,Amazon,"Entertainment, Groceries, General Expenses, Dining, Transportation",2022-07-03,Indonesia
    6828,Joint Account,664.5,Amazon,Entertainment,2022-09-14,Australia
    6829,Joint Account,447.2,Amazon,Dining,2022-12-11,Indonesia
    6830,Savings,312.57,Fairprice,"Travel, General Expenses, Entertainment",2022-09-23,Indonesia
    6831,Savings,6.09,Starbucks,"Dining, Groceries, Transportation, Entertainment, General Expenses",2022-12-07,Australia
    6832,Checking,392.91,Gojek,"Groceries, Dining",2022-06-30,Australia
    6833,Checking,405.3,Starbucks,"Groceries, Dining, General Expenses, Travel, Transportation",2022-10-23,Indonesia
    6834,Checking,815.12,Amazon,"General Expenses, Dining, Travel",2022-12-28,Australia
    6835,Savings,203.89,Starbucks,"Dining, Travel, General Expenses, Transportation, Entertainment, Groceries",2022-06-02,Singapore
    6836,Checking,575.12,ACME,"General Expenses, Dining",2022-09-15,Japan
    6837,Joint Account,545.35,Gojek,"Travel, Groceries, Entertainment, General Expenses, Dining",2022-11-19,Singapore
    6838,Savings,885.01,Gojek,Entertainment,2022-11-01,Singapore
    6839,Checking,68.35,Starbucks,"Groceries, Entertainment, Travel, Transportation, Dining, General Expenses",2022-11-01,Singapore
    6840,Savings,594.46,Walmart,"General Expenses, Groceries, Transportation",2022-09-09,Indonesia
    6841,Checking,504.84,Google,"Groceries, Dining, Entertainment, Travel",2022-11-21,Indonesia
    6842,Checking,751.14,Amazon,"Groceries, Dining, Transportation",2022-09-08,Indonesia
    6843,Checking,260.13,Google,"Entertainment, Travel, General Expenses, Transportation, Dining, Groceries",2022-10-26,Singapore
    6844,Checking,87.6,Amazon,"Transportation, Entertainment, Travel, General Expenses",2022-11-28,Japan
    6845,Savings,909.86,ACME,Dining,2022-10-24,Japan
    6846,Checking,639.52,Grab,"General Expenses, Dining, Travel",2022-11-24,Indonesia
    6847,Joint Account,464.1,ACME,"General Expenses, Transportation, Groceries, Travel, Dining",2022-07-18,Indonesia
    6848,Savings,741.48,ACME,"Entertainment, Travel",2022-09-22,Singapore
    6849,Checking,974.21,Grab,General Expenses,2022-11-02,Indonesia
    6850,Checking,747.54,Starbucks,Transportation,2022-08-04,Singapore
    6851,Joint Account,294.6,Walmart,"Transportation, Entertainment",2022-11-22,Indonesia
    6852,Joint Account,545.09,Amazon,"Travel, Entertainment, Groceries, General Expenses, Dining, Transportation",2022-09-23,Singapore
    6853,Savings,739.72,Amazon,"Travel, Transportation, Entertainment, Groceries, Dining, General Expenses",2022-12-24,Japan
    6854,Savings,323.66,Google,"General Expenses, Groceries, Dining",2022-10-01,Japan
    6855,Savings,425.97,Gojek,"General Expenses, Travel, Transportation, Dining",2022-12-22,Japan
    6856,Checking,82.43,Walmart,"Entertainment, Dining",2022-07-04,Japan
    6857,Joint Account,444.66,Starbucks,General Expenses,2022-06-14,Japan
    6858,Joint Account,681.59,Fairprice,"General Expenses, Groceries, Entertainment, Dining, Travel, Transportation",2022-06-12,Australia
    6859,Joint Account,764.84,Gojek,"Travel, General Expenses, Entertainment, Transportation",2022-07-20,Japan
    6860,Checking,301.3,Google,"Entertainment, Travel, General Expenses, Dining, Groceries",2022-11-22,Singapore
    6861,Joint Account,47.94,Fairprice,"General Expenses, Travel",2022-10-06,Japan
    6862,Joint Account,337.85,Google,"General Expenses, Entertainment, Transportation",2022-08-26,Japan
    6863,Savings,99.98,Gojek,"Entertainment, Dining, Travel, General Expenses, Transportation",2022-09-13,Singapore
    6864,Checking,328.08,Starbucks,"Groceries, Transportation, General Expenses, Travel",2022-08-18,Japan
    6865,Joint Account,949.11,ACME,"General Expenses, Transportation, Travel, Entertainment, Dining, Groceries",2022-12-22,Indonesia
    6866,Checking,838.94,Amazon,"Transportation, Dining, Travel, Entertainment, General Expenses, Groceries",2022-08-31,Japan
    6867,Checking,289.45,Amazon,"Dining, Entertainment, Transportation, General Expenses",2022-09-12,Singapore
    6868,Checking,742.46,ACME,Dining,2022-06-17,Indonesia
    6869,Joint Account,598.9,Walmart,"Travel, General Expenses, Groceries, Dining, Entertainment, Transportation",2022-08-19,Australia
    6870,Checking,13.08,Uber,"Transportation, Dining, Travel, Groceries, Entertainment",2022-12-28,Singapore
    6871,Checking,677.29,Uber,"General Expenses, Groceries, Transportation",2022-08-26,Japan
    6872,Joint Account,197.42,Walmart,"Entertainment, Groceries, Transportation, Travel",2022-08-09,Japan
    6873,Joint Account,597.26,Uber,"Entertainment, Groceries, Dining, Travel",2022-11-06,Singapore
    6874,Savings,517.68,Fairprice,"Entertainment, Dining, Travel, Groceries, Transportation, General Expenses",2022-06-24,Japan
    6875,Savings,71.37,Grab,"Travel, Entertainment, Transportation",2022-12-16,Indonesia
    6876,Joint Account,360.95,Walmart,"Groceries, Travel, General Expenses",2022-11-18,Japan
    6877,Checking,205.33,Starbucks,Dining,2022-11-24,Indonesia
    6878,Joint Account,416.75,Grab,"Groceries, Transportation, Dining, General Expenses, Travel",2022-11-15,Singapore
    6879,Checking,543.5,Google,"Transportation, Travel, General Expenses",2022-08-31,Singapore
    6880,Joint Account,662.31,Grab,"Groceries, Entertainment, Dining",2022-07-12,Japan
    6881,Joint Account,235.73,ACME,"Transportation, Dining, Travel, Groceries, Entertainment, General Expenses",2022-09-30,Indonesia
    6882,Joint Account,627.73,ACME,"Transportation, Groceries, Dining, Entertainment",2022-08-17,Singapore
    6883,Checking,838.85,Walmart,"Groceries, Transportation, Dining, General Expenses, Entertainment, Travel",2022-08-30,Japan
    6884,Joint Account,901.06,Starbucks,"Dining, Groceries, Entertainment",2022-08-30,Japan
    6885,Savings,693.04,Grab,"Groceries, General Expenses, Entertainment, Dining, Transportation, Travel",2022-07-01,Indonesia
    6886,Joint Account,869.16,Starbucks,"Travel, General Expenses, Transportation, Dining",2022-12-19,Indonesia
    6887,Savings,677.5,Grab,"Entertainment, Groceries, Dining, Transportation, Travel, General Expenses",2022-07-08,Singapore
    6888,Checking,487.8,Walmart,"Travel, General Expenses, Entertainment, Groceries",2022-07-30,Indonesia
    6889,Joint Account,95.86,Grab,"Travel, Transportation, Dining, Groceries",2022-07-31,Australia
    6890,Savings,561.43,ACME,Groceries,2022-07-25,Singapore
    6891,Checking,75.49,Grab,General Expenses,2022-11-17,Japan
    6892,Joint Account,795.78,Walmart,"General Expenses, Groceries, Travel, Entertainment",2022-06-15,Japan
    6893,Joint Account,837.55,Walmart,"Travel, Entertainment, Transportation, General Expenses, Dining",2022-11-06,Japan
    6894,Checking,934.22,Grab,"General Expenses, Entertainment, Groceries",2022-08-16,Japan
    6895,Checking,7.04,Uber,"Groceries, Transportation, Entertainment",2022-07-23,Japan
    6896,Joint Account,828.86,Uber,"Groceries, General Expenses, Entertainment, Travel",2022-12-18,Australia
    6897,Checking,750.02,ACME,"Transportation, General Expenses, Entertainment, Dining, Travel, Groceries",2022-09-28,Indonesia
    6898,Joint Account,114.51,Starbucks,"Travel, Transportation, Entertainment, General Expenses",2022-11-25,Indonesia
    6899,Checking,407.96,Starbucks,"General Expenses, Entertainment, Transportation, Dining, Groceries",2022-08-21,Indonesia
    6900,Checking,707.4,Gojek,"Entertainment, Transportation",2022-08-18,Singapore
    6901,Checking,241.58,Fairprice,"Groceries, Entertainment",2022-07-19,Japan
    6902,Joint Account,362.71,Grab,"Transportation, Dining, Groceries",2022-06-01,Singapore
    6903,Savings,96.52,Walmart,"Entertainment, Dining, Transportation",2022-12-29,Indonesia
    6904,Checking,705.25,Amazon,"Transportation, Travel, General Expenses, Dining, Entertainment, Groceries",2022-12-29,Indonesia
    6905,Checking,165.18,Google,Groceries,2022-09-30,Singapore
    6906,Savings,392.33,Starbucks,"Travel, Dining, Entertainment, General Expenses",2022-07-28,Singapore
    6907,Savings,714.26,Walmart,"Dining, General Expenses",2022-06-08,Singapore
    6908,Joint Account,812.02,Amazon,"Transportation, Dining, Groceries, General Expenses, Entertainment",2022-11-13,Singapore
    6909,Joint Account,695.16,Amazon,"Groceries, Entertainment, Travel, Dining, Transportation, General Expenses",2022-08-12,Japan
    6910,Checking,87.28,Walmart,"General Expenses, Transportation, Dining, Entertainment, Travel",2022-11-08,Singapore
    6911,Checking,948.69,Google,"Dining, General Expenses",2022-11-20,Japan
    6912,Savings,370.7,Starbucks,"Travel, General Expenses, Transportation",2022-10-05,Singapore
    6913,Checking,600.23,Uber,"Dining, Groceries, Transportation, Entertainment, General Expenses",2022-08-27,Japan
    6914,Checking,595.96,Grab,"Travel, Groceries, Dining, Transportation, General Expenses",2022-09-13,Singapore
    6915,Savings,196.5,Walmart,"Transportation, Dining, Travel, General Expenses",2022-07-21,Japan
    6916,Savings,486.79,Starbucks,"Transportation, Travel, Entertainment, Dining, General Expenses",2022-09-16,Singapore
    6917,Savings,124.51,Amazon,Transportation,2022-11-19,Japan
    6918,Joint Account,511.9,Gojek,"Entertainment, Transportation, Travel, General Expenses",2022-09-01,Indonesia
    6919,Checking,643.13,Fairprice,"Transportation, Groceries, Entertainment",2022-08-16,Japan
    6920,Checking,34.16,Uber,"Transportation, Entertainment, Dining, Travel, General Expenses, Groceries",2022-12-26,Indonesia
    6921,Checking,294.09,Amazon,"Dining, Travel, General Expenses, Entertainment",2022-09-24,Japan
    6922,Checking,713.97,Uber,"General Expenses, Travel, Entertainment, Groceries",2022-11-05,Indonesia
    6923,Savings,977.59,Starbucks,"General Expenses, Dining, Entertainment, Transportation",2022-08-01,Australia
    6924,Savings,12.19,Google,"Entertainment, Groceries, Dining, Travel",2022-09-24,Indonesia
    6925,Checking,413.75,Google,Dining,2022-12-15,Indonesia
    6926,Joint Account,12.32,Uber,General Expenses,2022-07-23,Singapore
    6927,Checking,738.53,Starbucks,"Transportation, General Expenses, Travel, Groceries, Entertainment, Dining",2022-12-05,Japan
    6928,Checking,843.95,Fairprice,Entertainment,2022-09-21,Australia
    6929,Savings,926.59,Gojek,"Dining, Groceries",2022-08-30,Indonesia
    6930,Checking,286.47,ACME,Groceries,2022-12-03,Australia
    6931,Savings,111.74,Uber,"Groceries, Travel, Transportation",2022-12-31,Australia
    6932,Joint Account,36.92,Fairprice,"Entertainment, Groceries, Transportation, Dining, Travel",2022-07-23,Japan
    6933,Savings,27.19,Grab,"Dining, Groceries",2022-06-03,Singapore
    6934,Joint Account,266.16,Amazon,"Entertainment, General Expenses, Travel, Transportation",2022-07-20,Indonesia
    6935,Checking,602.69,Uber,Dining,2022-11-30,Australia
    6936,Joint Account,676.89,Amazon,"Transportation, Entertainment, Groceries, Travel, Dining, General Expenses",2022-08-10,Indonesia
    6937,Joint Account,731.59,Starbucks,Travel,2022-11-02,Indonesia
    6938,Joint Account,16.15,Grab,"Travel, Dining, Transportation, General Expenses, Entertainment, Groceries",2022-10-11,Australia
    6939,Checking,498.19,Fairprice,"Groceries, Dining, Travel, General Expenses",2022-07-02,Japan
    6940,Checking,715.49,Google,"Groceries, Travel, Entertainment, General Expenses, Transportation",2022-09-28,Indonesia
    6941,Joint Account,492.28,Starbucks,"Entertainment, Dining, General Expenses, Transportation",2022-11-23,Singapore
    6942,Savings,37.56,Google,"Transportation, Groceries, Entertainment, General Expenses, Dining, Travel",2022-10-11,Singapore
    6943,Savings,469.31,Gojek,"Transportation, Travel, Groceries",2022-09-06,Australia
    6944,Checking,441.11,Gojek,"Dining, Groceries, Entertainment, General Expenses, Transportation, Travel",2022-09-10,Singapore
    6945,Joint Account,206.33,ACME,"Dining, General Expenses, Transportation",2022-11-20,Indonesia
    6946,Savings,75.47,Grab,"Entertainment, Dining, Travel, Groceries, General Expenses",2022-10-13,Australia
    6947,Checking,58.51,Grab,"Dining, General Expenses, Groceries, Entertainment, Travel",2022-09-09,Japan
    6948,Joint Account,855.51,Uber,Transportation,2022-11-02,Singapore
    6949,Savings,968.43,Starbucks,"Entertainment, General Expenses, Transportation, Travel, Groceries",2022-12-06,Singapore
    6950,Savings,748.86,Gojek,"General Expenses, Travel, Transportation",2022-11-08,Indonesia
    6951,Checking,246.27,Uber,"Entertainment, Dining",2022-06-22,Indonesia
    6952,Savings,325.49,Starbucks,"General Expenses, Transportation, Groceries, Dining",2022-10-08,Japan
    6953,Savings,503.31,Uber,"Transportation, Travel, General Expenses, Groceries, Dining, Entertainment",2022-08-21,Japan
    6954,Joint Account,509.32,Grab,"Dining, Transportation, Travel, Entertainment, General Expenses, Groceries",2022-11-23,Japan
    6955,Joint Account,960.18,Fairprice,"Groceries, Dining, Travel, Transportation",2022-08-29,Australia
    6956,Savings,872.66,Grab,"Entertainment, Travel, Dining, Groceries, General Expenses",2022-10-05,Japan
    6957,Joint Account,635.03,ACME,Travel,2022-12-12,Japan
    6958,Joint Account,996.87,ACME,Dining,2022-08-03,Australia
    6959,Checking,709.95,Walmart,"Groceries, Travel, Transportation, Dining",2022-08-18,Indonesia
    6960,Joint Account,629.8,Starbucks,"Travel, Groceries, General Expenses, Transportation, Dining",2022-09-30,Singapore
    6961,Joint Account,615.44,Google,"Transportation, General Expenses, Dining",2022-07-12,Japan
    6962,Savings,810.69,Amazon,Transportation,2022-09-01,Japan
    6963,Joint Account,573.47,Fairprice,Groceries,2022-08-20,Indonesia
    6964,Checking,478.29,Uber,"Groceries, Transportation, Entertainment, Dining, Travel",2022-07-09,Singapore
    6965,Checking,390.3,Uber,"Dining, Groceries",2022-09-20,Indonesia
    6966,Checking,979.83,Google,"Entertainment, Travel, Groceries, General Expenses",2022-08-28,Indonesia
    6967,Checking,617.53,Starbucks,"Entertainment, Transportation, General Expenses, Groceries, Travel, Dining",2022-07-17,Indonesia
    6968,Checking,84.91,Starbucks,"Groceries, Travel, Entertainment",2022-12-29,Australia
    6969,Savings,260.26,Grab,Entertainment,2022-08-02,Singapore
    6970,Joint Account,322.58,Uber,"Groceries, Transportation",2022-08-26,Japan
    6971,Checking,796.84,Starbucks,"Groceries, General Expenses, Transportation, Entertainment, Travel",2022-12-31,Japan
    6972,Checking,877.43,Starbucks,"Entertainment, Transportation, Dining, General Expenses, Groceries, Travel",2022-12-18,Japan
    6973,Joint Account,683.05,ACME,"Entertainment, General Expenses",2022-10-08,Indonesia
    6974,Checking,426.12,Google,"Entertainment, Travel, General Expenses, Transportation, Dining, Groceries",2022-11-26,Indonesia
    6975,Joint Account,10.97,Amazon,"Entertainment, Travel, General Expenses, Transportation",2022-06-12,Singapore
    6976,Savings,7.37,Grab,"Transportation, Dining, Groceries, General Expenses, Entertainment, Travel",2022-06-01,Japan
    6977,Savings,350.28,Starbucks,"General Expenses, Dining, Transportation, Entertainment, Travel",2022-11-01,Australia
    6978,Joint Account,65.5,Gojek,"Dining, Groceries, General Expenses, Travel, Transportation, Entertainment",2022-12-26,Singapore
    6979,Joint Account,342.4,Gojek,"Dining, Travel, Transportation, Groceries",2022-09-13,Indonesia
    6980,Savings,331.77,Uber,"Transportation, Travel, Entertainment, Groceries",2022-11-29,Australia
    6981,Savings,537.46,ACME,"Entertainment, Dining, General Expenses, Groceries, Travel, Transportation",2022-07-29,Australia
    6982,Savings,182.91,Google,"Travel, General Expenses, Entertainment, Dining, Transportation",2022-10-26,Singapore
    6983,Savings,564.27,Amazon,"General Expenses, Dining, Groceries",2022-08-14,Japan
    6984,Savings,453.7,Walmart,Entertainment,2022-09-20,Japan
    6985,Savings,205.65,Amazon,"Entertainment, Travel, Groceries, Dining, Transportation",2022-09-11,Japan
    6986,Joint Account,288.55,Fairprice,Entertainment,2022-10-24,Australia
    6987,Savings,283.33,Amazon,"Entertainment, Travel, Groceries, Dining",2022-10-23,Singapore
    6988,Joint Account,356.23,ACME,"Dining, General Expenses, Travel, Groceries, Entertainment, Transportation",2022-06-27,Indonesia
    6989,Savings,368.67,Gojek,"Dining, Entertainment, Groceries, Transportation, Travel, General Expenses",2022-08-24,Japan
    6990,Joint Account,117.63,ACME,"Entertainment, Groceries",2022-11-15,Japan
    6991,Joint Account,130.3,Grab,"Transportation, Entertainment",2022-08-17,Australia
    6992,Checking,826.78,Amazon,"General Expenses, Groceries, Entertainment, Dining",2022-10-07,Singapore
    6993,Savings,708.53,Gojek,"Entertainment, Groceries",2022-07-06,Japan
    6994,Joint Account,59.04,Gojek,"Travel, General Expenses, Groceries, Transportation, Entertainment, Dining",2022-07-07,Japan
    6995,Checking,68.68,Fairprice,"General Expenses, Groceries, Entertainment",2022-06-30,Singapore
    6996,Checking,804.32,ACME,"General Expenses, Entertainment, Travel, Groceries, Dining",2022-10-31,Japan
    6997,Checking,416.7,Grab,"Transportation, Entertainment",2022-10-26,Australia
    6998,Joint Account,627.49,Google,"Travel, Transportation, Groceries, Entertainment",2022-09-28,Japan
    6999,Checking,71.37,Gojek,"Groceries, Transportation, Dining, General Expenses",2022-06-26,Indonesia
    7000,Joint Account,111.93,ACME,"Dining, General Expenses, Entertainment",2022-11-13,Singapore
    7001,Savings,695.98,Grab,"Entertainment, Travel",2022-06-11,Singapore
    7002,Checking,24.25,Walmart,"Dining, Groceries, Travel",2022-09-03,Indonesia
    7003,Savings,373.69,Starbucks,"Travel, General Expenses, Dining, Transportation, Entertainment",2022-12-21,Japan
    7004,Joint Account,198.64,Uber,"Groceries, Dining, Transportation, Travel",2022-07-01,Singapore
    7005,Savings,310.87,Fairprice,"Travel, General Expenses, Dining",2022-12-23,Australia
    7006,Savings,490.8,Fairprice,"General Expenses, Groceries, Travel, Transportation, Entertainment, Dining",2022-07-05,Indonesia
    7007,Checking,354.06,Fairprice,Dining,2022-12-09,Singapore
    7008,Savings,971.67,Grab,"Entertainment, Transportation, Dining, Groceries, Travel",2022-07-16,Singapore
    7009,Joint Account,331.81,Starbucks,"Transportation, Travel",2022-11-22,Singapore
    7010,Checking,303.13,Walmart,"Transportation, Dining",2022-06-11,Australia
    7011,Joint Account,441.56,Fairprice,"Dining, Transportation",2022-08-15,Indonesia
    7012,Checking,927.03,Fairprice,"General Expenses, Travel, Dining, Entertainment, Transportation, Groceries",2022-09-02,Australia
    7013,Checking,702.86,Amazon,Transportation,2022-11-11,Australia
    7014,Checking,250.08,Starbucks,"Groceries, Dining, Entertainment, General Expenses",2022-10-10,Singapore
    7015,Joint Account,792.47,Walmart,"Travel, General Expenses",2022-08-22,Japan
    7016,Checking,571.92,ACME,"Dining, Travel",2022-10-31,Australia
    7017,Checking,115.96,Google,"General Expenses, Entertainment, Transportation, Groceries, Travel, Dining",2022-10-11,Japan
    7018,Joint Account,720.25,Walmart,Transportation,2022-08-27,Indonesia
    7019,Checking,148.84,Starbucks,General Expenses,2022-10-20,Australia
    7020,Savings,809.36,Grab,Groceries,2022-07-19,Japan
    7021,Joint Account,28.91,Walmart,Travel,2022-06-13,Indonesia
    7022,Joint Account,576.34,Gojek,"Dining, General Expenses, Groceries, Travel",2022-10-31,Japan
    7023,Joint Account,818.72,Fairprice,Dining,2022-08-26,Australia
    7024,Savings,762.92,Google,"Entertainment, Dining, Groceries, General Expenses, Transportation",2022-07-21,Australia
    7025,Savings,896.35,Starbucks,General Expenses,2022-07-08,Japan
    7026,Joint Account,482.9,Fairprice,"Dining, Entertainment, General Expenses, Transportation, Groceries, Travel",2022-08-16,Australia
    7027,Savings,76.06,ACME,"General Expenses, Groceries",2022-09-21,Japan
    7028,Joint Account,576.3,Google,"Transportation, Groceries",2022-06-02,Indonesia
    7029,Joint Account,996.41,Grab,"General Expenses, Dining, Entertainment, Groceries, Transportation",2022-09-03,Australia
    7030,Checking,959.02,Uber,"Entertainment, Dining",2022-06-26,Indonesia
    7031,Savings,715.37,Grab,"Entertainment, Transportation",2022-06-09,Japan
    7032,Checking,518.0,Uber,"Dining, Groceries, Transportation",2022-12-24,Australia
    7033,Joint Account,813.01,Starbucks,"Travel, Entertainment, Transportation",2022-12-08,Indonesia
    7034,Savings,444.33,Grab,"General Expenses, Entertainment, Groceries, Travel",2022-09-14,Australia
    7035,Joint Account,737.96,Grab,"Travel, Transportation, Dining, Groceries, General Expenses",2022-06-26,Australia
    7036,Checking,152.07,Google,"Travel, Transportation, General Expenses",2022-06-08,Japan
    7037,Joint Account,399.87,Walmart,Groceries,2022-08-23,Japan
    7038,Checking,236.88,Walmart,"Dining, General Expenses, Groceries",2022-07-31,Japan
    7039,Joint Account,547.99,Amazon,"Groceries, Transportation",2022-09-02,Japan
    7040,Checking,919.86,Starbucks,"General Expenses, Transportation, Dining, Travel, Entertainment, Groceries",2022-10-17,Australia
    7041,Checking,51.73,Starbucks,Transportation,2022-06-28,Singapore
    7042,Joint Account,297.93,Grab,"Transportation, Groceries, Travel, Entertainment, Dining",2022-12-19,Singapore
    7043,Checking,925.16,ACME,"Transportation, Dining, Travel",2022-06-26,Japan
    7044,Savings,94.93,Grab,"Travel, Entertainment, Transportation, Groceries",2022-06-09,Singapore
    7045,Savings,286.29,Gojek,"Groceries, Travel",2022-09-08,Australia
    7046,Joint Account,601.89,Starbucks,"Dining, Groceries, Travel, Transportation, General Expenses, Entertainment",2022-12-08,Australia
    7047,Savings,616.42,Amazon,"Entertainment, General Expenses, Transportation, Dining",2022-12-31,Japan
    7048,Joint Account,416.27,Amazon,"Travel, General Expenses",2022-11-06,Australia
    7049,Joint Account,582.18,Fairprice,Groceries,2022-12-07,Japan
    7050,Checking,942.52,Grab,"Travel, Entertainment, Dining, Groceries, General Expenses, Transportation",2022-11-23,Japan
    7051,Joint Account,554.04,Grab,"Dining, Entertainment, Travel, Transportation, Groceries, General Expenses",2022-08-25,Indonesia
    7052,Savings,77.64,Google,"Groceries, General Expenses, Dining, Travel, Transportation, Entertainment",2022-12-12,Australia
    7053,Joint Account,379.11,Gojek,"Transportation, Travel, Dining, Entertainment, Groceries",2022-09-06,Australia
    7054,Joint Account,988.98,Starbucks,"Travel, Dining, General Expenses, Groceries",2022-06-09,Indonesia
    7055,Checking,740.54,Google,"Transportation, Entertainment, Groceries, Travel",2022-09-21,Australia
    7056,Checking,679.11,Amazon,General Expenses,2022-12-13,Japan
    7057,Checking,161.35,Grab,"Entertainment, General Expenses, Transportation, Travel",2022-11-16,Australia
    7058,Checking,922.38,Walmart,Entertainment,2022-09-19,Japan
    7059,Joint Account,352.93,Gojek,"Entertainment, Groceries, General Expenses, Travel",2022-09-06,Indonesia
    7060,Joint Account,40.71,Grab,"General Expenses, Transportation, Dining, Entertainment, Groceries",2022-10-21,Japan
    7061,Checking,23.96,ACME,"Travel, Transportation, Dining",2022-06-12,Japan
    7062,Savings,863.76,ACME,"Travel, General Expenses",2022-10-27,Australia
    7063,Joint Account,682.06,Walmart,"Transportation, Travel, Dining, Entertainment, Groceries, General Expenses",2022-07-26,Indonesia
    7064,Checking,894.32,Walmart,"Groceries, Travel",2022-10-02,Japan
    7065,Checking,425.44,Grab,"Entertainment, Transportation, Travel, Dining, General Expenses",2022-07-08,Australia
    7066,Checking,115.35,ACME,"Entertainment, Transportation, General Expenses, Travel",2022-06-18,Japan
    7067,Checking,733.01,Grab,"General Expenses, Entertainment, Dining, Travel, Transportation",2022-11-30,Indonesia
    7068,Savings,937.31,Gojek,"Travel, Transportation, General Expenses",2022-11-19,Indonesia
    7069,Savings,422.78,Gojek,"General Expenses, Travel",2022-10-07,Japan
    7070,Savings,772.17,Starbucks,Dining,2022-11-01,Australia
    7071,Joint Account,858.24,ACME,Transportation,2022-12-28,Japan
    7072,Checking,98.58,Starbucks,"Groceries, Transportation, Entertainment, Dining",2022-10-13,Australia
    7073,Savings,736.91,Gojek,"Transportation, General Expenses, Groceries, Entertainment, Travel, Dining",2022-09-05,Japan
    7074,Savings,431.83,Walmart,"General Expenses, Dining, Entertainment",2022-06-17,Singapore
    7075,Joint Account,634.1,Starbucks,"General Expenses, Entertainment, Travel",2022-11-18,Japan
    7076,Savings,360.08,Starbucks,"Entertainment, Dining, Travel, General Expenses, Transportation",2022-08-11,Australia
    7077,Joint Account,243.34,Grab,"Groceries, Entertainment, General Expenses",2022-07-29,Singapore
    7078,Joint Account,794.08,Amazon,"General Expenses, Transportation, Entertainment",2022-06-25,Australia
    7079,Joint Account,77.05,Starbucks,"Groceries, Dining, Travel, General Expenses, Entertainment",2022-11-19,Indonesia
    7080,Savings,517.29,Starbucks,"Dining, Groceries, General Expenses",2022-06-08,Singapore
    7081,Checking,518.04,Amazon,"Groceries, Dining, Entertainment",2022-11-04,Australia
    7082,Joint Account,755.32,Uber,Transportation,2022-06-18,Singapore
    7083,Checking,271.41,Google,"General Expenses, Groceries, Travel, Dining, Transportation, Entertainment",2022-11-19,Japan
    7084,Savings,229.05,ACME,Entertainment,2022-10-15,Australia
    7085,Checking,114.5,Grab,Travel,2022-08-21,Indonesia
    7086,Joint Account,181.06,Walmart,"General Expenses, Entertainment, Transportation, Dining, Groceries",2022-06-02,Japan
    7087,Joint Account,479.6,Amazon,"Groceries, General Expenses, Transportation, Entertainment, Dining, Travel",2022-10-15,Singapore
    7088,Joint Account,558.37,Starbucks,"Groceries, Dining, General Expenses, Transportation, Travel",2022-06-08,Indonesia
    7089,Joint Account,322.97,Walmart,"Dining, Transportation, General Expenses, Travel",2022-11-29,Australia
    7090,Checking,194.53,Gojek,"Transportation, Dining, Entertainment, Travel",2022-12-24,Australia
    7091,Joint Account,692.39,Uber,"Transportation, General Expenses, Groceries, Travel, Dining, Entertainment",2022-09-17,Japan
    7092,Joint Account,864.1,Starbucks,"Entertainment, Dining, Groceries",2022-08-14,Australia
    7093,Savings,379.45,Grab,"General Expenses, Travel, Entertainment, Transportation",2022-08-05,Indonesia
    7094,Checking,379.78,Google,"Entertainment, General Expenses, Dining",2022-09-03,Australia
    7095,Savings,224.15,Starbucks,Dining,2022-07-04,Japan
    7096,Savings,818.46,Gojek,"Entertainment, Dining, Transportation, General Expenses, Groceries",2022-11-12,Indonesia
    7097,Checking,253.52,Starbucks,"General Expenses, Travel, Dining, Groceries, Transportation, Entertainment",2022-08-10,Australia
    7098,Joint Account,152.89,Gojek,Entertainment,2022-12-19,Indonesia
    7099,Joint Account,650.06,Gojek,"General Expenses, Entertainment",2022-06-05,Singapore
    7100,Savings,145.51,Fairprice,Transportation,2022-06-10,Australia
    7101,Savings,214.36,Uber,"General Expenses, Entertainment, Groceries, Travel",2022-06-28,Australia
    7102,Checking,930.75,ACME,"Transportation, Groceries, General Expenses, Dining, Travel",2022-08-24,Singapore
    7103,Checking,477.5,Google,"Travel, Groceries, Transportation, Dining, General Expenses, Entertainment",2022-12-12,Australia
    7104,Checking,980.2,ACME,Groceries,2022-07-25,Indonesia
    7105,Savings,404.53,Google,"Groceries, General Expenses, Travel, Dining, Transportation",2022-06-30,Indonesia
    7106,Checking,619.98,Gojek,"Transportation, Entertainment, Dining, Groceries, General Expenses, Travel",2022-11-17,Singapore
    7107,Checking,193.14,Fairprice,"Travel, General Expenses, Groceries",2022-10-27,Japan
    7108,Joint Account,224.04,Grab,"Dining, Groceries, Entertainment, Transportation, General Expenses, Travel",2022-10-03,Indonesia
    7109,Joint Account,77.93,Uber,"Transportation, Groceries, Entertainment, Dining, Travel",2022-09-02,Singapore
    7110,Joint Account,94.07,ACME,"Dining, Groceries, Travel, Transportation, General Expenses, Entertainment",2022-09-27,Australia
    7111,Joint Account,600.4,Gojek,"Travel, General Expenses",2022-06-05,Australia
    7112,Savings,715.18,ACME,"Groceries, Travel, Entertainment, General Expenses, Dining, Transportation",2022-09-21,Australia
    7113,Savings,459.64,Gojek,Dining,2022-06-23,Indonesia
    7114,Savings,117.74,Fairprice,"Entertainment, Transportation, General Expenses",2022-11-08,Japan
    7115,Joint Account,120.89,Fairprice,"General Expenses, Entertainment, Transportation",2022-11-28,Australia
    7116,Savings,6.61,Gojek,"Groceries, Transportation, General Expenses",2022-08-02,Japan
    7117,Savings,748.15,Walmart,"Travel, Groceries, Transportation, Entertainment, General Expenses, Dining",2022-11-19,Singapore
    7118,Checking,410.35,Amazon,"Entertainment, General Expenses, Dining, Transportation, Groceries, Travel",2022-06-02,Australia
    7119,Joint Account,139.32,Google,"Travel, Entertainment, Transportation, Dining, Groceries, General Expenses",2022-08-05,Singapore
    7120,Savings,331.56,Starbucks,"General Expenses, Groceries, Dining, Entertainment",2022-06-11,Singapore
    7121,Savings,255.29,Google,Groceries,2022-09-02,Singapore
    7122,Savings,160.53,Gojek,Transportation,2022-06-14,Indonesia
    7123,Savings,215.88,Uber,Groceries,2022-08-28,Japan
    7124,Joint Account,446.61,Walmart,"Entertainment, Groceries",2022-09-14,Singapore
    7125,Checking,570.08,Uber,"Transportation, Groceries, Travel, General Expenses",2022-08-14,Japan
    7126,Savings,263.64,Walmart,"Transportation, Travel, Dining",2022-08-30,Singapore
    7127,Joint Account,684.92,Amazon,"General Expenses, Dining, Transportation, Groceries, Entertainment",2022-08-29,Australia
    7128,Savings,560.32,Walmart,Groceries,2022-10-03,Singapore
    7129,Savings,301.18,Uber,"General Expenses, Transportation, Groceries",2022-06-30,Indonesia
    7130,Joint Account,281.8,Grab,"Entertainment, Travel, General Expenses, Groceries",2022-07-20,Singapore
    7131,Savings,311.54,Amazon,"Transportation, Entertainment",2022-09-01,Japan
    7132,Checking,645.36,Google,"Travel, Transportation, Dining",2022-11-08,Japan
    7133,Joint Account,220.88,Fairprice,"Groceries, Dining, Travel, Entertainment, Transportation, General Expenses",2022-08-19,Indonesia
    7134,Joint Account,158.74,Gojek,"Dining, Travel",2022-12-26,Japan
    7135,Checking,916.72,ACME,Travel,2022-11-21,Singapore
    7136,Joint Account,945.36,Google,"Groceries, Dining, General Expenses, Entertainment",2022-11-07,Singapore
    7137,Checking,167.45,Walmart,Groceries,2022-09-09,Japan
    7138,Checking,990.15,Gojek,"Dining, General Expenses",2022-11-10,Singapore
    7139,Joint Account,786.01,Grab,"Entertainment, Travel, Groceries, Transportation, General Expenses, Dining",2022-06-15,Australia
    7140,Savings,464.1,Grab,"Entertainment, Transportation, Dining, Groceries",2022-12-20,Australia
    7141,Savings,458.37,Starbucks,"Groceries, Dining",2022-12-02,Singapore
    7142,Joint Account,767.14,Walmart,"Entertainment, Transportation, Travel, General Expenses, Dining",2022-07-13,Japan
    7143,Savings,765.9,Google,"Transportation, Groceries, Entertainment, Dining",2022-07-27,Japan
    7144,Joint Account,51.51,Fairprice,"Entertainment, Transportation",2022-09-07,Singapore
    7145,Savings,300.55,Starbucks,"Dining, Travel, General Expenses",2022-08-19,Japan
    7146,Joint Account,736.67,Fairprice,"Entertainment, General Expenses, Travel, Dining, Groceries",2022-06-08,Australia
    7147,Savings,746.13,Amazon,"General Expenses, Dining, Entertainment, Groceries",2022-11-23,Australia
    7148,Savings,536.89,Amazon,"Entertainment, Transportation",2022-12-11,Japan
    7149,Savings,280.64,Uber,"Groceries, Transportation, Travel, General Expenses, Entertainment, Dining",2022-07-15,Indonesia
    7150,Joint Account,311.47,Amazon,"Transportation, Travel, General Expenses",2022-12-03,Japan
    7151,Joint Account,240.99,ACME,"General Expenses, Travel, Transportation, Entertainment, Groceries, Dining",2022-10-31,Japan
    7152,Checking,303.1,Starbucks,"General Expenses, Transportation, Travel, Dining, Groceries",2022-08-31,Singapore
    7153,Savings,807.22,Amazon,Transportation,2022-07-07,Singapore
    7154,Joint Account,662.8,Grab,"Transportation, General Expenses, Entertainment, Travel, Groceries, Dining",2022-10-25,Indonesia
    7155,Checking,698.91,Gojek,"Entertainment, Travel, Groceries, Dining, Transportation, General Expenses",2022-12-18,Singapore
    7156,Joint Account,292.74,Google,"Entertainment, Travel, Groceries",2022-12-04,Japan
    7157,Checking,898.45,Grab,"Groceries, Travel, General Expenses, Transportation",2022-10-09,Singapore
    7158,Checking,740.65,Gojek,Entertainment,2022-09-25,Japan
    7159,Savings,357.55,Walmart,"Entertainment, Travel",2022-09-26,Japan
    7160,Checking,410.65,Gojek,"Entertainment, Groceries, General Expenses",2022-08-09,Australia
    7161,Checking,95.7,Google,"Entertainment, General Expenses, Dining, Transportation, Groceries",2022-08-14,Japan
    7162,Joint Account,66.15,Walmart,"General Expenses, Entertainment",2022-07-15,Singapore
    7163,Checking,971.57,Google,"Dining, Transportation, Entertainment, Groceries, General Expenses",2022-10-28,Indonesia
    7164,Joint Account,431.35,Fairprice,"Transportation, Entertainment, Travel, Groceries, Dining",2022-08-18,Singapore
    7165,Savings,355.81,Google,"Travel, General Expenses, Dining, Transportation, Entertainment",2022-06-06,Indonesia
    7166,Savings,292.3,Uber,"Transportation, Groceries, Travel, Entertainment",2022-08-10,Australia
    7167,Savings,543.24,Fairprice,"Dining, Transportation, Groceries, Travel, Entertainment",2022-11-11,Indonesia
    7168,Checking,105.98,Google,"Travel, General Expenses, Dining",2022-11-13,Australia
    7169,Savings,43.95,Uber,"Transportation, Travel, Dining, General Expenses, Entertainment, Groceries",2022-07-24,Indonesia
    7170,Joint Account,688.02,Google,"Transportation, Groceries, General Expenses, Travel, Entertainment, Dining",2022-07-11,Australia
    7171,Joint Account,363.23,Grab,"Dining, Groceries, Transportation, Travel, General Expenses",2022-08-02,Indonesia
    7172,Checking,641.82,Google,"General Expenses, Dining, Travel, Transportation, Entertainment, Groceries",2022-07-11,Japan
    7173,Joint Account,920.09,Fairprice,"Entertainment, Travel",2022-11-26,Singapore
    7174,Joint Account,403.42,Walmart,"Transportation, Dining, Groceries, General Expenses, Travel",2022-10-12,Singapore
    7175,Checking,764.4,Walmart,"Transportation, General Expenses, Travel",2022-08-01,Japan
    7176,Savings,933.15,Google,"Travel, Dining, Groceries",2022-08-23,Indonesia
    7177,Joint Account,824.35,ACME,"General Expenses, Travel, Groceries, Dining, Transportation",2022-11-06,Japan
    7178,Savings,143.51,Starbucks,"Entertainment, Dining",2022-09-22,Singapore
    7179,Savings,527.52,Starbucks,"Groceries, Transportation",2022-07-17,Singapore
    7180,Checking,812.7,Walmart,"General Expenses, Travel, Groceries, Transportation",2022-08-15,Australia
    7181,Savings,714.25,Uber,"Transportation, Groceries, General Expenses, Entertainment, Dining, Travel",2022-09-22,Japan
    7182,Checking,328.9,ACME,"Groceries, Transportation, Dining, Travel, Entertainment",2022-11-06,Singapore
    7183,Savings,815.69,Gojek,"Entertainment, General Expenses, Groceries, Transportation, Dining",2022-12-27,Singapore
    7184,Savings,481.53,Amazon,"Dining, Groceries, General Expenses, Transportation, Travel",2022-09-11,Singapore
    7185,Joint Account,463.27,ACME,"Transportation, Travel, Groceries, General Expenses",2022-10-23,Australia
    7186,Savings,747.33,Walmart,"General Expenses, Travel, Transportation",2022-10-30,Indonesia
    7187,Savings,672.23,Uber,"General Expenses, Groceries, Entertainment, Transportation, Travel",2022-09-12,Australia
    7188,Savings,484.21,Amazon,"Travel, General Expenses, Dining, Transportation",2022-11-22,Singapore
    7189,Joint Account,335.48,Uber,"Groceries, Travel, Transportation",2022-11-26,Japan
    7190,Joint Account,30.69,Grab,"General Expenses, Entertainment, Groceries, Dining, Travel",2022-06-04,Australia
    7191,Checking,515.51,Amazon,"Dining, Entertainment",2022-06-16,Japan
    7192,Savings,941.72,ACME,"General Expenses, Groceries, Transportation, Dining, Entertainment",2022-08-13,Japan
    7193,Joint Account,737.04,Uber,"Entertainment, Groceries",2022-06-07,Japan
    7194,Checking,407.92,Grab,"Transportation, Entertainment, Dining, General Expenses",2022-09-26,Singapore
    7195,Checking,500.57,Gojek,"Dining, Entertainment, Transportation, Travel, General Expenses, Groceries",2022-08-27,Australia
    7196,Joint Account,573.31,Walmart,"Dining, Entertainment",2022-10-11,Singapore
    7197,Checking,309.31,Grab,"Entertainment, Travel, Groceries, Transportation",2022-07-12,Indonesia
    7198,Joint Account,872.66,Grab,Travel,2022-09-06,Australia
    7199,Checking,5.27,Uber,Entertainment,2022-10-05,Japan
    7200,Joint Account,697.63,ACME,"Transportation, Dining, Travel",2022-10-02,Australia
    7201,Savings,675.82,Starbucks,"Travel, Groceries, Entertainment",2022-08-25,Japan
    7202,Joint Account,89.49,Grab,Entertainment,2022-09-11,Indonesia
    7203,Joint Account,796.83,ACME,Travel,2022-10-07,Japan
    7204,Savings,777.82,Grab,Transportation,2022-06-07,Singapore
    7205,Joint Account,185.73,ACME,"General Expenses, Dining",2022-12-18,Japan
    7206,Checking,32.95,Google,"Dining, Transportation, Travel, General Expenses",2022-08-23,Indonesia
    7207,Joint Account,555.31,Gojek,"Travel, Dining",2022-10-29,Australia
    7208,Savings,694.51,Amazon,Dining,2022-10-11,Japan
    7209,Savings,785.62,Grab,Transportation,2022-11-01,Singapore
    7210,Savings,644.12,Starbucks,"Transportation, Entertainment, Dining, Groceries, Travel",2022-12-29,Japan
    7211,Savings,349.12,Uber,"Travel, General Expenses, Groceries",2022-08-26,Indonesia
    7212,Savings,540.05,Gojek,Transportation,2022-12-21,Australia
    7213,Joint Account,818.96,Google,"Dining, General Expenses, Transportation, Travel, Entertainment",2022-08-11,Australia
    7214,Checking,868.57,Walmart,"Groceries, General Expenses, Entertainment, Transportation, Travel",2022-11-30,Japan
    7215,Joint Account,455.12,Amazon,Transportation,2022-06-05,Australia
    7216,Joint Account,868.11,Uber,"General Expenses, Transportation, Dining",2022-06-09,Singapore
    7217,Savings,22.09,ACME,"Groceries, Dining, Entertainment, General Expenses, Transportation",2022-07-26,Singapore
    7218,Joint Account,27.17,Google,"Transportation, General Expenses, Travel, Groceries",2022-12-31,Singapore
    7219,Checking,326.04,Fairprice,"Transportation, Travel, Dining",2022-12-30,Singapore
    7220,Joint Account,689.85,Grab,"General Expenses, Groceries, Entertainment, Travel, Transportation",2022-06-04,Singapore
    7221,Joint Account,511.48,Starbucks,"Travel, Transportation, Entertainment, Groceries",2022-11-03,Japan
    7222,Joint Account,804.51,Gojek,Groceries,2022-07-02,Indonesia
    7223,Joint Account,3.86,Google,"General Expenses, Travel, Groceries, Transportation",2022-11-22,Australia
    7224,Checking,171.36,Google,"Groceries, General Expenses, Dining, Travel",2022-10-24,Japan
    7225,Joint Account,405.13,Starbucks,"General Expenses, Entertainment, Dining, Transportation, Groceries, Travel",2022-09-12,Australia
    7226,Savings,454.66,Walmart,Transportation,2022-07-17,Indonesia
    7227,Savings,876.84,Amazon,"Transportation, General Expenses, Travel",2022-12-01,Australia
    7228,Checking,360.93,Google,"Travel, Dining, Groceries, Entertainment, General Expenses",2022-10-19,Singapore
    7229,Joint Account,47.79,ACME,"Groceries, Entertainment, Transportation",2022-07-03,Australia
    7230,Checking,850.4,Starbucks,"Dining, Groceries, Transportation",2022-10-28,Indonesia
    7231,Savings,0.35,Starbucks,"Travel, Transportation, Entertainment, Groceries",2022-12-18,Japan
    7232,Joint Account,135.83,Walmart,Transportation,2022-08-04,Japan
    7233,Savings,626.41,Gojek,"Groceries, Travel",2022-10-19,Indonesia
    7234,Checking,731.41,Fairprice,Travel,2022-12-09,Australia
    7235,Joint Account,492.14,Amazon,"Entertainment, Travel, Groceries, Dining, General Expenses",2022-09-30,Indonesia
    7236,Savings,211.1,Uber,"Groceries, Transportation, Entertainment, General Expenses",2022-06-16,Singapore
    7237,Joint Account,4.44,Grab,"Dining, Transportation, Entertainment, Groceries, General Expenses, Travel",2022-10-14,Singapore
    7238,Joint Account,802.89,Fairprice,"Dining, Transportation",2022-09-30,Australia
    7239,Savings,602.82,Gojek,"Travel, Groceries, Transportation, Dining, Entertainment",2022-08-23,Australia
    7240,Checking,351.02,Gojek,"Entertainment, General Expenses, Groceries, Transportation, Dining",2022-12-12,Indonesia
    7241,Savings,939.93,Amazon,General Expenses,2022-06-25,Indonesia
    7242,Joint Account,806.32,Grab,"General Expenses, Transportation",2022-06-28,Singapore
    7243,Checking,824.82,Uber,"Travel, Groceries, General Expenses, Dining, Entertainment, Transportation",2022-12-08,Indonesia
    7244,Savings,75.96,Uber,"General Expenses, Dining, Groceries, Entertainment",2022-06-04,Singapore
    7245,Savings,785.37,Uber,"Travel, General Expenses, Transportation, Groceries, Entertainment, Dining",2022-06-13,Indonesia
    7246,Joint Account,421.56,Starbucks,"Groceries, Dining, General Expenses, Transportation, Travel",2022-09-07,Singapore
    7247,Joint Account,966.27,Grab,"Dining, Entertainment, Travel, Transportation",2022-06-07,Indonesia
    7248,Checking,115.38,Walmart,"Entertainment, Travel, Dining, Transportation, General Expenses",2022-08-02,Singapore
    7249,Joint Account,113.5,Amazon,"Entertainment, Dining, Travel, Transportation",2022-09-18,Australia
    7250,Savings,559.25,Walmart,Entertainment,2022-12-16,Singapore
    7251,Checking,462.41,Gojek,"Transportation, Travel, Groceries, General Expenses",2022-12-25,Indonesia
    7252,Checking,664.75,Fairprice,"General Expenses, Travel",2022-08-29,Indonesia
    7253,Checking,415.23,Gojek,"Transportation, Dining",2022-10-30,Australia
    7254,Savings,868.91,Starbucks,"Travel, Entertainment, Groceries, General Expenses",2022-08-12,Indonesia
    7255,Savings,389.94,Fairprice,"Entertainment, Dining, Groceries, Transportation, Travel",2022-07-17,Australia
    7256,Joint Account,65.12,Gojek,"Travel, Groceries",2022-07-21,Singapore
    7257,Joint Account,368.39,Amazon,"Groceries, General Expenses, Transportation",2022-12-25,Japan
    7258,Checking,289.07,Google,"Dining, Travel, General Expenses",2022-11-05,Australia
    7259,Joint Account,763.13,Walmart,"General Expenses, Groceries, Entertainment, Transportation, Travel",2022-10-15,Indonesia
    7260,Checking,516.77,Google,"Groceries, Dining, Transportation, Entertainment",2022-08-29,Japan
    7261,Joint Account,574.71,Amazon,"General Expenses, Travel, Dining, Entertainment, Transportation, Groceries",2022-09-20,Singapore
    7262,Savings,266.49,Grab,"General Expenses, Transportation, Dining, Entertainment",2022-09-20,Singapore
    7263,Savings,744.37,Amazon,"Travel, Dining, General Expenses, Entertainment, Groceries, Transportation",2022-09-15,Singapore
    7264,Checking,245.96,Starbucks,"Groceries, Dining",2022-10-21,Australia
    7265,Savings,847.58,Gojek,"Transportation, Dining, Entertainment, Groceries, General Expenses, Travel",2022-10-29,Australia
    7266,Joint Account,155.12,Gojek,"Travel, Groceries, Entertainment, General Expenses, Transportation, Dining",2022-09-09,Singapore
    7267,Joint Account,236.16,Google,"General Expenses, Entertainment, Dining, Groceries",2022-06-07,Singapore
    7268,Checking,451.7,Google,"General Expenses, Dining, Groceries",2022-12-11,Australia
    7269,Savings,352.22,ACME,"Groceries, Travel, Transportation",2022-07-08,Singapore
    7270,Checking,420.8,Amazon,"Entertainment, Travel, Transportation, Groceries, Dining, General Expenses",2022-08-04,Japan
    7271,Joint Account,418.7,Gojek,"Groceries, General Expenses, Dining, Travel, Entertainment",2022-06-13,Indonesia
    7272,Joint Account,466.68,Google,"Dining, Groceries, Travel, Entertainment, General Expenses",2022-12-11,Singapore
    7273,Checking,522.15,Uber,"Entertainment, Transportation, General Expenses, Travel, Dining, Groceries",2022-10-21,Japan
    7274,Savings,743.84,Grab,"Travel, General Expenses, Groceries, Transportation",2022-11-03,Indonesia
    7275,Savings,139.25,Starbucks,"General Expenses, Dining",2022-08-26,Indonesia
    7276,Savings,542.39,Uber,"Transportation, Groceries",2022-11-16,Australia
    7277,Checking,102.85,Grab,"Entertainment, Groceries, Dining, General Expenses",2022-08-05,Australia
    7278,Checking,98.19,Starbucks,"Groceries, Travel, General Expenses",2022-08-06,Japan
    7279,Savings,151.68,Walmart,Entertainment,2022-09-09,Japan
    7280,Joint Account,480.72,Fairprice,"Travel, Entertainment",2022-10-14,Australia
    7281,Checking,871.44,ACME,"Groceries, Transportation, General Expenses, Travel",2022-08-19,Singapore
    7282,Checking,961.75,Walmart,"Travel, General Expenses, Dining",2022-10-27,Australia
    7283,Savings,337.82,Uber,"Entertainment, General Expenses, Groceries, Transportation, Travel, Dining",2022-09-02,Japan
    7284,Savings,959.77,Starbucks,"Transportation, Travel, Dining, Groceries, General Expenses, Entertainment",2022-10-06,Indonesia
    7285,Joint Account,708.88,Starbucks,"Travel, Groceries, General Expenses",2022-06-01,Japan
    7286,Checking,707.51,ACME,"Transportation, Groceries, Entertainment, General Expenses, Dining",2022-07-23,Australia
    7287,Checking,162.74,Uber,"Travel, General Expenses, Groceries",2022-06-30,Indonesia
    7288,Checking,710.21,Uber,"General Expenses, Travel, Entertainment, Groceries, Transportation",2022-06-09,Japan
    7289,Checking,194.88,Google,"Entertainment, Transportation, Dining, Groceries",2022-07-14,Singapore
    7290,Savings,508.31,Amazon,"Entertainment, Dining, Groceries, General Expenses",2022-07-21,Indonesia
    7291,Checking,669.62,Fairprice,"General Expenses, Dining, Entertainment, Travel, Groceries, Transportation",2022-09-24,Australia
    7292,Savings,997.09,Uber,"Entertainment, Dining, General Expenses, Groceries",2022-08-31,Singapore
    7293,Joint Account,994.49,Starbucks,Transportation,2022-11-27,Australia
    7294,Checking,586.01,Uber,"Transportation, Groceries, Entertainment",2022-12-18,Japan
    7295,Joint Account,60.99,Grab,"Groceries, Entertainment, Travel, Transportation, General Expenses",2022-12-12,Indonesia
    7296,Checking,364.48,Walmart,"Travel, Transportation, Dining",2022-08-16,Indonesia
    7297,Savings,161.48,Uber,Groceries,2022-11-15,Indonesia
    7298,Joint Account,270.52,Amazon,"Dining, General Expenses, Groceries, Entertainment, Transportation, Travel",2022-10-22,Indonesia
    7299,Joint Account,964.5,Walmart,"General Expenses, Transportation, Travel, Entertainment",2022-07-31,Australia
    7300,Checking,27.66,Walmart,"General Expenses, Dining, Travel, Entertainment",2022-07-14,Singapore
    7301,Joint Account,240.45,Grab,"Dining, Entertainment, Transportation",2022-12-25,Indonesia
    7302,Checking,545.21,Fairprice,"General Expenses, Travel, Groceries, Entertainment, Dining, Transportation",2022-10-31,Singapore
    7303,Joint Account,727.65,Uber,General Expenses,2022-09-14,Indonesia
    7304,Checking,906.81,Amazon,"Transportation, Entertainment, Dining",2022-11-09,Australia
    7305,Savings,960.66,Fairprice,"General Expenses, Transportation, Entertainment, Travel",2022-11-25,Australia
    7306,Joint Account,526.26,Gojek,"Entertainment, Transportation, Groceries",2022-09-29,Japan
    7307,Savings,136.75,Amazon,"Groceries, Entertainment, Transportation, Dining, Travel, General Expenses",2022-09-23,Singapore
    7308,Checking,331.37,Walmart,"Transportation, Entertainment, General Expenses, Dining, Travel",2022-07-24,Japan
    7309,Joint Account,793.14,Starbucks,"Entertainment, Dining, Groceries, General Expenses, Transportation, Travel",2022-11-18,Japan
    7310,Joint Account,622.58,Google,Transportation,2022-11-18,Australia
    7311,Joint Account,86.57,Grab,"Groceries, Dining, Travel, Transportation",2022-08-09,Indonesia
    7312,Joint Account,355.75,Google,"Transportation, General Expenses, Groceries, Travel, Dining, Entertainment",2022-11-21,Japan
    7313,Joint Account,973.02,Starbucks,"General Expenses, Transportation, Entertainment, Dining",2022-12-20,Singapore
    7314,Checking,451.86,Grab,"General Expenses, Dining, Groceries",2022-09-10,Japan
    7315,Savings,834.4,Fairprice,"Entertainment, Groceries",2022-11-15,Singapore
    7316,Checking,614.55,ACME,"Transportation, Groceries",2022-07-27,Australia
    7317,Joint Account,436.97,Grab,"Travel, General Expenses",2022-10-04,Singapore
    7318,Joint Account,63.14,Uber,"Transportation, Entertainment",2022-08-19,Singapore
    7319,Savings,11.08,Fairprice,"Entertainment, Groceries",2022-08-12,Australia
    7320,Checking,637.7,Uber,"Travel, Entertainment, General Expenses, Transportation",2022-06-16,Indonesia
    7321,Savings,624.15,Walmart,"Dining, Transportation, Travel",2022-10-31,Singapore
    7322,Joint Account,957.56,Amazon,"Travel, Transportation, Entertainment, General Expenses, Dining, Groceries",2022-06-12,Australia
    7323,Checking,50.91,Gojek,"Transportation, Groceries, Dining, Entertainment, General Expenses",2022-08-17,Japan
    7324,Savings,305.57,Gojek,"Transportation, Dining, Groceries, Travel, General Expenses",2022-07-20,Japan
    7325,Savings,154.68,Google,"Entertainment, Transportation, Groceries, Travel, Dining, General Expenses",2022-07-21,Indonesia
    7326,Savings,111.56,Grab,"Dining, General Expenses, Travel, Groceries, Entertainment, Transportation",2022-09-29,Singapore
    7327,Savings,230.83,Fairprice,Groceries,2022-08-01,Indonesia
    7328,Joint Account,312.78,Fairprice,"General Expenses, Dining, Travel",2022-12-29,Australia
    7329,Savings,711.92,Gojek,"Groceries, Transportation, Travel, Dining, Entertainment, General Expenses",2022-08-02,Singapore
    7330,Savings,73.83,Gojek,"Travel, Dining, Transportation, Groceries, General Expenses",2022-09-12,Singapore
    7331,Savings,718.75,Walmart,General Expenses,2022-06-03,Japan
    7332,Checking,979.96,Amazon,"General Expenses, Transportation, Entertainment",2022-12-08,Singapore
    7333,Savings,865.92,Amazon,"General Expenses, Entertainment, Travel, Transportation",2022-10-19,Indonesia
    7334,Checking,67.91,Grab,"Dining, Travel",2022-11-21,Japan
    7335,Joint Account,603.37,Grab,General Expenses,2022-11-18,Australia
    7336,Joint Account,209.56,Amazon,"Groceries, Transportation, Travel",2022-11-13,Indonesia
    7337,Checking,843.95,Fairprice,"Travel, General Expenses",2022-11-12,Singapore
    7338,Savings,797.68,Amazon,"General Expenses, Transportation, Entertainment",2022-12-24,Singapore
    7339,Savings,949.64,Fairprice,"Transportation, Dining",2022-07-03,Singapore
    7340,Checking,43.31,Starbucks,"General Expenses, Entertainment",2022-09-26,Japan
    7341,Checking,457.34,Gojek,"Groceries, Entertainment, Transportation",2022-10-13,Japan
    7342,Savings,996.67,ACME,"Entertainment, Transportation, General Expenses, Travel, Groceries, Dining",2022-08-26,Indonesia
    7343,Joint Account,584.41,Uber,"Transportation, Entertainment",2022-09-27,Japan
    7344,Checking,121.8,Uber,"Entertainment, General Expenses, Travel, Groceries, Transportation",2022-08-23,Japan
    7345,Checking,464.85,Uber,"Transportation, Entertainment, General Expenses, Groceries, Dining",2022-07-23,Japan
    7346,Checking,181.36,Gojek,"Transportation, Groceries, General Expenses, Dining, Travel, Entertainment",2022-09-26,Australia
    7347,Savings,949.17,Starbucks,"Transportation, Dining, Groceries, Travel",2022-12-09,Indonesia
    7348,Checking,640.65,Gojek,"Transportation, Travel, Dining, General Expenses, Entertainment",2022-09-13,Japan
    7349,Joint Account,329.14,Gojek,"Groceries, Travel, General Expenses, Transportation, Dining, Entertainment",2022-11-15,Japan
    7350,Joint Account,829.25,Walmart,Entertainment,2022-09-29,Indonesia
    7351,Checking,679.41,Uber,"Groceries, General Expenses, Dining, Travel, Transportation, Entertainment",2022-07-28,Indonesia
    7352,Joint Account,920.01,Gojek,"Dining, Entertainment, Transportation, General Expenses, Groceries, Travel",2022-08-14,Japan
    7353,Joint Account,686.65,Amazon,"Transportation, Travel",2022-07-17,Japan
    7354,Savings,290.73,Grab,"Travel, General Expenses, Dining, Transportation",2022-09-11,Japan
    7355,Checking,201.51,Google,"Travel, Entertainment, Transportation, Groceries, General Expenses, Dining",2022-12-21,Australia
    7356,Checking,617.45,Amazon,"Travel, Entertainment",2022-08-14,Indonesia
    7357,Joint Account,157.57,Fairprice,"Travel, Entertainment, Groceries, General Expenses",2022-09-04,Indonesia
    7358,Savings,651.55,Grab,"General Expenses, Transportation, Travel, Groceries, Entertainment",2022-06-04,Australia
    7359,Joint Account,795.61,Fairprice,"General Expenses, Transportation, Groceries",2022-06-18,Japan
    7360,Joint Account,349.53,Walmart,"General Expenses, Transportation, Entertainment, Dining, Groceries, Travel",2022-12-20,Australia
    7361,Checking,725.92,Uber,"Groceries, Entertainment, Transportation, General Expenses, Dining",2022-09-27,Japan
    7362,Checking,664.68,Grab,"Entertainment, General Expenses",2022-07-05,Indonesia
    7363,Savings,597.42,Uber,"General Expenses, Entertainment, Travel",2022-11-27,Indonesia
    7364,Joint Account,501.25,Starbucks,"Entertainment, Travel",2022-07-05,Japan
    7365,Savings,418.02,Starbucks,"Entertainment, Groceries, Dining, Travel, General Expenses",2022-11-15,Singapore
    7366,Checking,820.86,Fairprice,"Dining, Entertainment, General Expenses, Transportation",2022-10-27,Japan
    7367,Joint Account,362.25,Starbucks,"Entertainment, Transportation, General Expenses",2022-12-14,Singapore
    7368,Savings,137.12,Starbucks,"Dining, Entertainment",2022-11-24,Australia
    7369,Savings,50.01,Grab,Dining,2022-07-05,Singapore
    7370,Joint Account,409.39,Fairprice,"Entertainment, Transportation, Dining",2022-11-28,Indonesia
    7371,Checking,695.94,Google,"Dining, Groceries, Entertainment, Travel",2022-11-04,Indonesia
    7372,Checking,606.7,Walmart,"Groceries, Entertainment",2022-12-27,Japan
    7373,Savings,139.9,Grab,"Transportation, Entertainment, Groceries, Travel, Dining, General Expenses",2022-07-21,Australia
    7374,Savings,864.68,Gojek,"Travel, General Expenses, Groceries, Entertainment",2022-11-01,Japan
    7375,Savings,473.64,Starbucks,"Transportation, Travel",2022-06-27,Japan
    7376,Checking,360.09,Starbucks,"Entertainment, Travel, Transportation, Dining, Groceries, General Expenses",2022-09-25,Singapore
    7377,Savings,410.25,Fairprice,Dining,2022-08-05,Singapore
    7378,Savings,345.8,Uber,"Entertainment, Groceries",2022-12-03,Singapore
    7379,Checking,854.57,Amazon,"Groceries, Entertainment, Dining, Travel",2022-12-11,Australia
    7380,Savings,186.51,ACME,"Transportation, Travel, Dining, Entertainment",2022-09-24,Indonesia
    7381,Savings,483.2,Google,"Transportation, Groceries, General Expenses, Entertainment, Dining, Travel",2022-12-24,Indonesia
    7382,Checking,606.86,Uber,"Transportation, Travel, Entertainment",2022-11-18,Indonesia
    7383,Joint Account,152.43,Uber,"Entertainment, General Expenses, Dining, Groceries, Travel",2022-10-05,Indonesia
    7384,Joint Account,871.49,Fairprice,"Entertainment, General Expenses, Travel, Groceries, Transportation",2022-11-01,Japan
    7385,Checking,99.91,Fairprice,"Dining, Travel, General Expenses",2022-10-08,Indonesia
    7386,Joint Account,112.55,ACME,"Transportation, Dining, Travel, Groceries, General Expenses, Entertainment",2022-06-14,Indonesia
    7387,Savings,175.87,Fairprice,"Groceries, Entertainment, Transportation, Dining, Travel",2022-12-25,Singapore
    7388,Savings,724.96,Amazon,"Entertainment, Dining, Travel, General Expenses, Transportation",2022-09-25,Japan
    7389,Joint Account,480.36,Walmart,"Dining, Entertainment, Groceries, Transportation, General Expenses, Travel",2022-06-25,Singapore
    7390,Savings,700.45,ACME,"General Expenses, Groceries, Entertainment, Travel, Transportation, Dining",2022-07-07,Australia
    7391,Joint Account,429.78,Grab,"General Expenses, Groceries",2022-08-25,Indonesia
    7392,Joint Account,19.25,Grab,"Groceries, Travel, Entertainment, General Expenses, Dining, Transportation",2022-11-28,Japan
    7393,Checking,800.84,Starbucks,"General Expenses, Transportation, Entertainment, Travel, Dining",2022-06-20,Indonesia
    7394,Savings,281.69,ACME,"Dining, Groceries, Entertainment, General Expenses, Travel, Transportation",2022-11-29,Japan
    7395,Savings,975.95,Gojek,"General Expenses, Entertainment, Travel",2022-09-12,Indonesia
    7396,Savings,687.91,Starbucks,"General Expenses, Entertainment, Transportation, Groceries",2022-07-19,Singapore
    7397,Checking,550.6,Amazon,"Entertainment, Transportation, Groceries, General Expenses, Dining, Travel",2022-08-04,Indonesia
    7398,Checking,112.44,Starbucks,Travel,2022-08-04,Japan
    7399,Checking,239.61,Grab,"Groceries, Dining, Travel, Transportation, Entertainment, General Expenses",2022-12-20,Australia
    7400,Savings,26.08,Fairprice,"Dining, Transportation, Groceries, Entertainment",2022-06-13,Australia
    7401,Checking,285.9,Fairprice,"Travel, General Expenses, Transportation, Dining",2022-12-24,Japan
    7402,Joint Account,906.03,Amazon,"Entertainment, Dining, Transportation, Groceries",2022-09-27,Australia
    7403,Checking,589.23,Google,Entertainment,2022-12-04,Singapore
    7404,Savings,963.55,Google,"Dining, Transportation, General Expenses, Groceries, Entertainment",2022-10-10,Indonesia
    7405,Savings,729.91,Google,"General Expenses, Dining, Transportation, Entertainment",2022-07-10,Australia
    7406,Joint Account,290.04,Uber,"Dining, Transportation, Groceries, General Expenses",2022-08-26,Indonesia
    7407,Checking,362.63,Grab,"Groceries, Entertainment, General Expenses, Transportation, Travel, Dining",2022-07-05,Australia
    7408,Savings,447.37,Walmart,"Groceries, Travel",2022-11-21,Indonesia
    7409,Checking,951.95,Gojek,"Dining, Transportation, Entertainment, General Expenses, Groceries",2022-06-18,Japan
    7410,Checking,795.85,ACME,Dining,2022-06-15,Japan
    7411,Checking,744.27,Gojek,"Dining, Transportation",2022-08-12,Japan
    7412,Checking,826.77,Uber,"Dining, Transportation",2022-06-05,Singapore
    7413,Checking,123.15,Grab,"Travel, Entertainment, Dining, Groceries, General Expenses, Transportation",2022-06-30,Singapore
    7414,Joint Account,639.62,Uber,"General Expenses, Groceries, Entertainment, Transportation, Travel",2022-11-03,Indonesia
    7415,Checking,544.81,Uber,"Entertainment, Travel, Dining, General Expenses, Groceries",2022-07-12,Japan
    7416,Checking,237.26,ACME,"Travel, Groceries, Dining",2022-09-27,Japan
    7417,Checking,360.24,Fairprice,General Expenses,2022-06-24,Australia
    7418,Savings,89.16,Google,"Transportation, Groceries, Travel, General Expenses, Dining, Entertainment",2022-10-16,Japan
    7419,Joint Account,223.57,ACME,"Dining, Groceries",2022-12-01,Japan
    7420,Savings,488.49,Google,"Entertainment, Groceries, Travel, General Expenses, Dining, Transportation",2022-07-03,Japan
    7421,Savings,867.32,Walmart,"Travel, Dining, Groceries",2022-06-29,Japan
    7422,Joint Account,39.73,Starbucks,"Entertainment, Groceries, Transportation",2022-09-02,Australia
    7423,Checking,180.96,Uber,"Entertainment, Dining",2022-09-24,Singapore
    7424,Checking,597.05,ACME,"General Expenses, Entertainment, Travel, Dining, Transportation",2022-11-19,Japan
    7425,Joint Account,843.12,Google,"Transportation, General Expenses, Entertainment",2022-07-19,Australia
    7426,Checking,573.79,Uber,Travel,2022-08-28,Japan
    7427,Joint Account,209.76,ACME,"Travel, Groceries, General Expenses, Transportation, Dining",2022-09-29,Singapore
    7428,Checking,528.62,Starbucks,Transportation,2022-11-11,Singapore
    7429,Checking,9.11,ACME,Transportation,2022-11-24,Singapore
    7430,Checking,480.29,ACME,"Dining, Groceries, Entertainment, General Expenses, Travel",2022-10-01,Australia
    7431,Savings,505.5,Fairprice,Entertainment,2022-10-14,Australia
    7432,Savings,287.0,Amazon,"General Expenses, Transportation, Dining, Groceries, Entertainment",2022-10-27,Japan
    7433,Joint Account,701.35,Uber,"Entertainment, Groceries",2022-07-01,Australia
    7434,Checking,39.34,Grab,"Travel, Groceries, Entertainment, General Expenses",2022-07-08,Indonesia
    7435,Joint Account,387.86,Gojek,"General Expenses, Entertainment, Transportation, Travel",2022-09-08,Singapore
    7436,Savings,312.05,Fairprice,"Transportation, Dining, Travel, General Expenses",2022-12-01,Japan
    7437,Joint Account,945.02,Fairprice,Travel,2022-11-10,Australia
    7438,Savings,190.04,Gojek,"Transportation, General Expenses, Entertainment",2022-08-21,Australia
    7439,Joint Account,388.85,ACME,"General Expenses, Entertainment, Dining, Travel, Groceries, Transportation",2022-07-11,Singapore
    7440,Joint Account,90.93,Amazon,"Travel, Dining",2022-07-05,Japan
    7441,Savings,67.03,Google,Transportation,2022-08-16,Indonesia
    7442,Joint Account,608.1,Google,"Dining, Transportation",2022-08-09,Indonesia
    7443,Checking,998.08,Starbucks,"Transportation, Travel, Groceries, General Expenses",2022-09-15,Japan
    7444,Checking,399.16,Walmart,"General Expenses, Travel, Dining",2022-10-28,Australia
    7445,Checking,46.1,Fairprice,"Transportation, General Expenses, Dining",2022-08-02,Japan
    7446,Checking,962.85,Gojek,"Entertainment, Groceries, Transportation, Dining, General Expenses, Travel",2022-09-16,Singapore
    7447,Checking,431.7,Google,"Travel, Groceries, General Expenses, Transportation, Entertainment",2022-09-26,Australia
    7448,Savings,14.13,Walmart,"Transportation, Entertainment, Dining, General Expenses",2022-10-30,Australia
    7449,Joint Account,439.43,Walmart,"Dining, Entertainment, Transportation, Travel",2022-12-29,Singapore
    7450,Joint Account,312.92,Starbucks,"Travel, Entertainment, Transportation, Groceries, Dining, General Expenses",2022-11-13,Singapore
    7451,Checking,268.96,Grab,Groceries,2022-07-21,Singapore
    7452,Savings,82.08,Walmart,Travel,2022-12-28,Australia
    7453,Joint Account,85.74,Uber,"Dining, Entertainment",2022-06-14,Australia
    7454,Joint Account,974.33,Grab,"Transportation, Entertainment, Groceries, General Expenses, Dining, Travel",2022-10-19,Japan
    7455,Savings,537.72,Google,"Groceries, General Expenses",2022-10-23,Australia
    7456,Checking,137.09,Starbucks,"Travel, Groceries, General Expenses",2022-09-19,Australia
    7457,Savings,835.77,Gojek,"Travel, Transportation, Groceries, General Expenses, Dining",2022-08-22,Japan
    7458,Savings,180.58,Google,"Entertainment, General Expenses",2022-09-11,Singapore
    7459,Checking,207.82,Starbucks,"Entertainment, General Expenses, Dining, Groceries, Transportation",2022-06-29,Singapore
    7460,Joint Account,453.24,Amazon,General Expenses,2022-09-05,Singapore
    7461,Checking,887.61,Uber,"Dining, Travel",2022-09-13,Japan
    7462,Savings,393.98,Starbucks,"Travel, Entertainment, Dining, Groceries",2022-10-11,Australia
    7463,Savings,973.27,Google,"Travel, Entertainment, Dining, Transportation",2022-06-13,Indonesia
    7464,Savings,780.58,ACME,Dining,2022-07-10,Japan
    7465,Savings,226.67,Starbucks,Dining,2022-11-11,Indonesia
    7466,Savings,171.64,Starbucks,"Entertainment, Transportation, Travel",2022-08-04,Australia
    7467,Savings,698.04,Amazon,"Groceries, Travel, Dining, Entertainment, Transportation, General Expenses",2022-06-17,Singapore
    7468,Savings,334.32,Gojek,Entertainment,2022-08-05,Singapore
    7469,Joint Account,918.73,Starbucks,"General Expenses, Transportation, Dining, Travel, Groceries, Entertainment",2022-07-31,Australia
    7470,Joint Account,942.92,Gojek,"Groceries, General Expenses, Dining, Entertainment, Transportation",2022-08-31,Australia
    7471,Joint Account,315.24,Gojek,"General Expenses, Groceries, Transportation, Entertainment",2022-06-03,Japan
    7472,Checking,654.48,Gojek,"General Expenses, Groceries, Entertainment, Dining",2022-08-11,Singapore
    7473,Savings,636.56,Uber,"Groceries, Transportation, Dining, General Expenses, Travel, Entertainment",2022-07-11,Indonesia
    7474,Savings,177.12,Gojek,"Groceries, Transportation",2022-07-22,Singapore
    7475,Savings,264.04,Walmart,"Transportation, Travel, Entertainment, Dining",2022-10-08,Australia
    7476,Savings,699.12,Gojek,"Groceries, Entertainment, Transportation, General Expenses, Dining",2022-10-05,Singapore
    7477,Savings,539.32,Gojek,"Travel, Groceries, Dining, General Expenses, Transportation, Entertainment",2022-12-31,Australia
    7478,Checking,417.19,Fairprice,Entertainment,2022-10-15,Singapore
    7479,Checking,822.18,Grab,"Dining, Transportation, General Expenses, Groceries, Travel, Entertainment",2022-12-05,Japan
    7480,Checking,237.44,Uber,"Entertainment, Groceries, Transportation, Dining, Travel, General Expenses",2022-11-02,Singapore
    7481,Savings,453.87,Starbucks,"Entertainment, Groceries",2022-07-04,Indonesia
    7482,Savings,164.6,Grab,"Entertainment, General Expenses, Dining, Travel",2022-12-04,Singapore
    7483,Joint Account,229.69,ACME,"General Expenses, Dining",2022-11-08,Japan
    7484,Savings,43.81,Grab,"Entertainment, General Expenses, Groceries",2022-11-19,Japan
    7485,Checking,471.09,Gojek,Transportation,2022-10-12,Indonesia
    7486,Joint Account,147.93,Starbucks,"Entertainment, General Expenses, Dining, Transportation",2022-08-05,Japan
    7487,Checking,829.94,ACME,"Entertainment, General Expenses, Groceries, Transportation, Travel",2022-10-15,Japan
    7488,Checking,964.17,Starbucks,"Transportation, Groceries, Entertainment, General Expenses, Travel, Dining",2022-12-14,Singapore
    7489,Joint Account,134.98,Uber,Travel,2022-07-15,Indonesia
    7490,Savings,413.35,Grab,"Entertainment, General Expenses, Dining, Travel, Groceries",2022-08-21,Indonesia
    7491,Joint Account,641.78,Google,"General Expenses, Entertainment, Travel",2022-11-07,Singapore
    7492,Joint Account,130.11,Starbucks,"Transportation, General Expenses, Travel, Groceries",2022-07-24,Indonesia
    7493,Checking,194.77,Starbucks,Transportation,2022-08-01,Australia
    7494,Savings,783.64,Fairprice,"Entertainment, General Expenses, Transportation, Groceries",2022-12-04,Indonesia
    7495,Checking,713.59,Fairprice,"Entertainment, Dining, Travel, General Expenses, Transportation",2022-12-11,Australia
    7496,Savings,480.09,Fairprice,"Groceries, Travel, Entertainment, Transportation, Dining",2022-06-28,Indonesia
    7497,Savings,406.35,ACME,"Groceries, General Expenses, Entertainment",2022-07-15,Australia
    7498,Savings,606.75,Grab,"General Expenses, Groceries, Transportation, Entertainment, Travel",2022-09-26,Singapore
    7499,Checking,973.15,Gojek,"Groceries, Transportation",2022-12-11,Australia
    7500,Checking,14.46,Gojek,"Transportation, Entertainment",2022-10-10,Indonesia
    7501,Joint Account,267.64,Amazon,Groceries,2022-07-21,Singapore
    7502,Savings,221.62,Fairprice,"General Expenses, Entertainment, Travel, Groceries",2022-09-07,Indonesia
    7503,Savings,78.79,Amazon,"Groceries, Entertainment, Dining, General Expenses, Transportation, Travel",2022-11-13,Indonesia
    7504,Joint Account,940.65,Google,Groceries,2022-08-18,Australia
    7505,Savings,877.36,Walmart,"Travel, Entertainment",2022-08-17,Singapore
    7506,Joint Account,270.01,Google,"Travel, General Expenses, Entertainment, Transportation, Dining",2022-09-18,Singapore
    7507,Joint Account,265.99,Walmart,Transportation,2022-10-11,Australia
    7508,Joint Account,17.64,Google,"Entertainment, Transportation, Travel",2022-06-23,Australia
    7509,Savings,627.4,Uber,"Groceries, Dining, Travel, General Expenses, Transportation",2022-10-16,Indonesia
    7510,Joint Account,93.92,Gojek,"Travel, Entertainment, Transportation",2022-06-20,Singapore
    7511,Joint Account,520.08,Uber,"Entertainment, General Expenses, Transportation",2022-10-10,Indonesia
    7512,Savings,192.88,Uber,"Groceries, Transportation, General Expenses, Dining, Travel",2022-10-27,Singapore
    7513,Savings,293.86,Gojek,"Transportation, Groceries",2022-12-07,Australia
    7514,Checking,727.47,Grab,"Travel, Entertainment, General Expenses, Transportation, Groceries, Dining",2022-08-02,Australia
    7515,Joint Account,856.17,ACME,"Dining, Groceries, General Expenses, Travel",2022-06-02,Japan
    7516,Checking,263.26,Walmart,"General Expenses, Entertainment, Dining, Transportation, Travel, Groceries",2022-06-10,Australia
    7517,Joint Account,439.05,Walmart,"General Expenses, Entertainment, Travel, Dining, Groceries",2022-08-08,Indonesia
    7518,Joint Account,162.06,Walmart,Transportation,2022-09-25,Indonesia
    7519,Savings,930.39,Gojek,"General Expenses, Travel",2022-12-01,Japan
    7520,Checking,880.24,Google,Travel,2022-12-20,Singapore
    7521,Checking,239.72,Grab,"Transportation, Travel, Dining",2022-12-23,Singapore
    7522,Savings,530.13,Uber,"General Expenses, Transportation",2022-11-04,Australia
    7523,Savings,198.42,Uber,"General Expenses, Dining, Entertainment",2022-09-20,Singapore
    7524,Joint Account,455.99,Uber,"Groceries, Transportation, General Expenses, Entertainment",2022-12-02,Singapore
    7525,Checking,245.02,Starbucks,Dining,2022-10-14,Australia
    7526,Checking,146.11,Grab,"Transportation, Travel",2022-07-21,Japan
    7527,Checking,394.13,Fairprice,"Dining, Travel, Groceries",2022-07-29,Australia
    7528,Joint Account,875.27,Walmart,"Dining, Transportation, Entertainment",2022-10-05,Singapore
    7529,Savings,338.14,Google,Transportation,2022-10-06,Indonesia
    7530,Checking,669.05,Walmart,"Transportation, Travel",2022-10-16,Japan
    7531,Joint Account,712.05,Gojek,"Entertainment, Groceries, Travel, General Expenses",2022-10-03,Indonesia
    7532,Checking,171.83,Google,"Entertainment, Travel, Transportation, General Expenses, Dining, Groceries",2022-06-23,Japan
    7533,Joint Account,328.08,ACME,"Groceries, General Expenses, Transportation",2022-12-24,Australia
    7534,Joint Account,229.01,Grab,General Expenses,2022-12-11,Australia
    7535,Checking,544.81,Amazon,"Travel, General Expenses, Entertainment, Groceries, Transportation",2022-12-25,Japan
    7536,Checking,524.12,Google,"Transportation, Entertainment, Travel, General Expenses, Groceries",2022-10-16,Singapore
    7537,Savings,489.3,Walmart,"Travel, Entertainment, Groceries, Dining, General Expenses, Transportation",2022-07-02,Japan
    7538,Joint Account,141.67,Fairprice,Transportation,2022-08-02,Indonesia
    7539,Checking,279.82,Google,"General Expenses, Travel, Entertainment",2022-07-26,Japan
    7540,Checking,913.58,Grab,Travel,2022-11-03,Indonesia
    7541,Savings,438.97,Uber,"Groceries, Dining",2022-06-07,Indonesia
    7542,Joint Account,95.95,Gojek,"Groceries, Dining, Transportation",2022-07-27,Australia
    7543,Savings,514.53,Starbucks,"Dining, General Expenses, Entertainment, Groceries, Transportation, Travel",2022-07-29,Singapore
    7544,Savings,412.31,Amazon,Travel,2022-10-20,Japan
    7545,Savings,302.19,Google,"Travel, General Expenses, Dining, Groceries, Transportation",2022-06-19,Australia
    7546,Savings,765.41,Grab,Entertainment,2022-08-30,Japan
    7547,Checking,295.28,Gojek,"General Expenses, Dining, Transportation",2022-10-21,Japan
    7548,Joint Account,499.37,Fairprice,Transportation,2022-07-13,Japan
    7549,Checking,596.37,ACME,"Dining, Transportation, Entertainment, Groceries, General Expenses, Travel",2022-07-13,Singapore
    7550,Checking,128.16,Uber,"Dining, Transportation, Entertainment, Groceries, Travel, General Expenses",2022-11-05,Indonesia
    7551,Joint Account,349.71,Starbucks,"Dining, Entertainment",2022-07-12,Singapore
    7552,Joint Account,89.05,ACME,Dining,2022-08-09,Japan
    7553,Joint Account,165.49,Amazon,"Travel, Groceries, Entertainment, Transportation, Dining",2022-07-27,Japan
    7554,Savings,280.66,Fairprice,"Groceries, Dining, Entertainment, Transportation",2022-10-26,Japan
    7555,Savings,598.56,Gojek,"Travel, Dining, Groceries, General Expenses, Transportation, Entertainment",2022-07-12,Japan
    7556,Checking,852.26,Gojek,General Expenses,2022-11-02,Indonesia
    7557,Savings,42.12,Grab,"Groceries, Transportation, Travel, General Expenses",2022-06-25,Indonesia
    7558,Checking,954.25,Uber,"Entertainment, Transportation",2022-09-26,Indonesia
    7559,Checking,564.5,Uber,"Transportation, Groceries, Travel",2022-07-31,Singapore
    7560,Savings,790.47,Walmart,"Transportation, Dining, Travel, Groceries, General Expenses, Entertainment",2022-11-08,Singapore
    7561,Joint Account,620.86,Uber,"Travel, General Expenses, Dining, Entertainment, Transportation, Groceries",2022-09-15,Australia
    7562,Savings,38.02,Walmart,"Transportation, Entertainment, Dining, Travel",2022-09-13,Indonesia
    7563,Joint Account,773.41,ACME,"Travel, Groceries, Transportation, General Expenses, Entertainment, Dining",2022-08-04,Singapore
    7564,Joint Account,277.95,Gojek,General Expenses,2022-09-18,Japan
    7565,Checking,202.04,Google,"Travel, Transportation",2022-09-14,Australia
    7566,Joint Account,884.54,ACME,Entertainment,2022-12-02,Singapore
    7567,Checking,414.19,Walmart,Travel,2022-11-25,Indonesia
    7568,Checking,37.9,Grab,"Dining, Groceries, Transportation, Entertainment",2022-06-09,Singapore
    7569,Checking,651.24,Starbucks,"General Expenses, Entertainment, Travel, Transportation, Dining",2022-10-29,Australia
    7570,Joint Account,766.02,Amazon,"Travel, Transportation, Groceries, General Expenses, Entertainment, Dining",2022-09-11,Indonesia
    7571,Checking,675.58,ACME,"Dining, Transportation, General Expenses",2022-07-19,Indonesia
    7572,Savings,61.45,ACME,"Dining, Transportation, Groceries, Entertainment, General Expenses, Travel",2022-07-15,Singapore
    7573,Joint Account,848.05,ACME,Groceries,2022-06-30,Indonesia
    7574,Joint Account,922.83,Amazon,"Travel, Groceries, Transportation",2022-12-04,Indonesia
    7575,Savings,624.33,Walmart,"Transportation, Entertainment, Travel, Dining, Groceries, General Expenses",2022-07-21,Singapore
    7576,Joint Account,17.83,Walmart,"Travel, Transportation, Groceries",2022-10-17,Indonesia
    7577,Joint Account,6.93,Google,"Entertainment, Transportation, Travel, Groceries, Dining",2022-10-23,Australia
    7578,Checking,414.36,Gojek,"Transportation, Dining, Groceries, Travel, Entertainment, General Expenses",2022-12-24,Australia
    7579,Savings,974.39,Google,"General Expenses, Entertainment, Travel, Groceries, Dining, Transportation",2022-12-18,Australia
    7580,Checking,946.91,Walmart,"Dining, Travel, Transportation, General Expenses",2022-10-04,Australia
    7581,Savings,502.68,ACME,"Groceries, Transportation, Dining",2022-06-17,Singapore
    7582,Checking,522.89,Uber,"General Expenses, Entertainment, Groceries, Dining",2022-12-16,Indonesia
    7583,Checking,423.22,Amazon,"Groceries, General Expenses",2022-10-04,Singapore
    7584,Joint Account,302.57,Amazon,"Transportation, Entertainment, Travel, Groceries, General Expenses, Dining",2022-07-29,Singapore
    7585,Checking,430.3,Fairprice,"Groceries, Entertainment, General Expenses, Dining",2022-12-18,Indonesia
    7586,Checking,450.49,Starbucks,"Groceries, Travel, Transportation",2022-06-07,Indonesia
    7587,Savings,337.01,Grab,"Entertainment, Travel, Transportation, General Expenses, Dining, Groceries",2022-11-28,Indonesia
    7588,Savings,186.68,Uber,"Entertainment, Transportation, Groceries, Travel, General Expenses, Dining",2022-10-18,Japan
    7589,Checking,937.37,Walmart,"General Expenses, Transportation",2022-12-01,Australia
    7590,Savings,37.5,Starbucks,"Entertainment, Groceries, Travel",2022-12-03,Indonesia
    7591,Savings,552.22,Fairprice,Transportation,2022-10-01,Japan
    7592,Savings,93.97,Gojek,"Groceries, Dining, Transportation",2022-12-29,Japan
    7593,Checking,573.04,Amazon,"Travel, Dining, Entertainment",2022-08-21,Indonesia
    7594,Checking,425.84,Gojek,"Transportation, Travel, General Expenses, Entertainment, Dining",2022-06-16,Australia
    7595,Checking,177.96,ACME,"Groceries, General Expenses, Transportation, Entertainment, Dining",2022-07-08,Indonesia
    7596,Savings,709.43,Uber,"Dining, Entertainment",2022-08-03,Japan
    7597,Savings,679.6,Starbucks,"Groceries, General Expenses, Entertainment, Travel",2022-07-10,Indonesia
    7598,Joint Account,617.22,Walmart,"Dining, Groceries, Entertainment",2022-07-27,Japan
    7599,Savings,695.78,Grab,"General Expenses, Dining",2022-11-10,Australia
    7600,Checking,603.65,ACME,General Expenses,2022-06-28,Japan
    7601,Checking,301.1,Walmart,Dining,2022-12-05,Indonesia
    7602,Checking,249.98,Fairprice,"Dining, Groceries, Entertainment",2022-07-27,Singapore
    7603,Joint Account,872.68,ACME,Transportation,2022-11-03,Singapore
    7604,Savings,664.2,ACME,"Groceries, General Expenses",2022-08-05,Japan
    7605,Savings,835.35,Uber,"Travel, Dining, Transportation, General Expenses, Entertainment, Groceries",2022-06-27,Indonesia
    7606,Checking,852.48,Starbucks,"Travel, General Expenses, Dining, Groceries",2022-11-21,Singapore
    7607,Savings,530.2,Google,"General Expenses, Travel, Transportation",2022-08-09,Indonesia
    7608,Joint Account,298.0,Uber,"Transportation, Travel",2022-12-25,Indonesia
    7609,Checking,949.8,Gojek,"Travel, Entertainment, Transportation, General Expenses, Dining",2022-10-31,Australia
    7610,Checking,811.82,Gojek,"Entertainment, Travel, Groceries, General Expenses",2022-08-14,Indonesia
    7611,Joint Account,929.62,Fairprice,"Travel, Dining",2022-09-07,Singapore
    7612,Joint Account,397.58,Uber,"Travel, Transportation, Groceries, General Expenses",2022-10-23,Australia
    7613,Checking,150.27,Uber,"Entertainment, Dining, Travel, Transportation, Groceries",2022-08-26,Australia
    7614,Checking,582.03,Uber,"Travel, General Expenses, Entertainment, Groceries, Transportation, Dining",2022-12-21,Australia
    7615,Savings,224.94,Gojek,"General Expenses, Groceries, Dining, Travel, Transportation",2022-12-04,Singapore
    7616,Checking,897.91,Google,"General Expenses, Transportation, Dining, Travel",2022-11-10,Japan
    7617,Checking,545.11,Google,"Travel, Transportation, Entertainment, General Expenses, Groceries",2022-07-04,Singapore
    7618,Savings,266.66,Uber,"Dining, Transportation, General Expenses, Travel, Groceries",2022-11-20,Australia
    7619,Joint Account,252.53,Walmart,"General Expenses, Dining, Transportation, Travel",2022-08-04,Japan
    7620,Checking,29.17,Starbucks,"Transportation, General Expenses, Dining, Groceries",2022-07-07,Australia
    7621,Joint Account,107.96,ACME,Transportation,2022-06-03,Japan
    7622,Joint Account,457.39,Walmart,"Travel, Entertainment, General Expenses, Dining, Groceries, Transportation",2022-11-16,Singapore
    7623,Joint Account,594.82,Walmart,"Travel, Entertainment, Groceries, Dining, Transportation, General Expenses",2022-10-01,Australia
    7624,Savings,306.82,Fairprice,"Groceries, Entertainment",2022-09-20,Australia
    7625,Checking,393.21,Uber,"Groceries, Transportation, General Expenses",2022-10-27,Australia
    7626,Joint Account,922.08,Walmart,"Travel, Groceries, Transportation",2022-08-07,Singapore
    7627,Savings,776.21,Walmart,"Groceries, Entertainment, Travel, Transportation, Dining",2022-12-23,Australia
    7628,Checking,818.28,ACME,"Travel, Entertainment, Groceries, Dining, Transportation",2022-09-02,Japan
    7629,Joint Account,305.01,Amazon,"Transportation, General Expenses, Entertainment, Dining, Travel",2022-07-22,Australia
    7630,Checking,847.99,Grab,"Entertainment, Dining, Transportation, Groceries, Travel, General Expenses",2022-06-10,Indonesia
    7631,Joint Account,831.53,ACME,Travel,2022-06-01,Japan
    7632,Savings,226.02,Fairprice,General Expenses,2022-07-09,Singapore
    7633,Checking,351.96,Fairprice,"Dining, Travel",2022-11-14,Japan
    7634,Joint Account,116.84,Fairprice,Entertainment,2022-06-30,Australia
    7635,Joint Account,752.45,Fairprice,Transportation,2022-07-20,Singapore
    7636,Joint Account,471.27,Starbucks,"General Expenses, Travel, Groceries, Dining, Transportation, Entertainment",2022-11-12,Singapore
    7637,Checking,733.26,Starbucks,"Dining, Transportation, Groceries, Entertainment, General Expenses, Travel",2022-09-02,Japan
    7638,Savings,854.02,Google,"Travel, Entertainment, Dining",2022-08-08,Indonesia
    7639,Savings,249.81,Amazon,"Dining, Entertainment, Groceries",2022-06-30,Japan
    7640,Savings,806.99,Grab,General Expenses,2022-12-11,Indonesia
    7641,Savings,760.17,Starbucks,"Dining, Transportation, General Expenses",2022-08-04,Australia
    7642,Checking,426.45,Starbucks,"Entertainment, Dining, Groceries",2022-09-07,Australia
    7643,Joint Account,855.86,Starbucks,"Entertainment, General Expenses, Travel, Groceries, Dining",2022-11-01,Australia
    7644,Joint Account,961.07,Uber,"General Expenses, Groceries",2022-10-24,Australia
    7645,Joint Account,567.96,ACME,Groceries,2022-07-28,Australia
    7646,Savings,915.33,Fairprice,"General Expenses, Travel, Transportation",2022-06-04,Singapore
    7647,Savings,288.22,Gojek,"Dining, Entertainment, General Expenses, Transportation, Travel, Groceries",2022-07-03,Singapore
    7648,Joint Account,85.31,Walmart,"Entertainment, General Expenses",2022-08-20,Japan
    7649,Savings,618.69,Google,"Transportation, Entertainment",2022-06-03,Singapore
    7650,Savings,888.54,Gojek,"Entertainment, Travel, Transportation",2022-11-30,Singapore
    7651,Savings,148.64,Grab,"Travel, Dining, Groceries, Entertainment",2022-09-20,Japan
    7652,Joint Account,191.49,Starbucks,"Groceries, Dining, Travel",2022-12-10,Indonesia
    7653,Joint Account,964.21,Gojek,"Transportation, Dining, Travel, Groceries",2022-06-17,Indonesia
    7654,Checking,3.79,Uber,"Travel, General Expenses, Entertainment, Dining, Groceries",2022-07-20,Japan
    7655,Savings,252.84,Uber,Groceries,2022-07-24,Indonesia
    7656,Savings,239.73,Starbucks,"Dining, Transportation",2022-06-27,Singapore
    7657,Savings,80.71,Uber,"Dining, Groceries, General Expenses, Entertainment",2022-12-30,Australia
    7658,Joint Account,247.23,Gojek,"Transportation, Travel, Dining, Groceries",2022-08-02,Australia
    7659,Joint Account,258.02,Gojek,"General Expenses, Transportation, Groceries",2022-11-23,Indonesia
    7660,Checking,358.03,Grab,Transportation,2022-12-28,Japan
    7661,Savings,511.91,ACME,"Transportation, Dining, Entertainment, Groceries",2022-11-09,Australia
    7662,Joint Account,13.28,Grab,"Travel, Transportation, Dining, Groceries, Entertainment, General Expenses",2022-07-06,Japan
    7663,Savings,995.31,Walmart,Entertainment,2022-10-30,Indonesia
    7664,Joint Account,72.14,Amazon,"Dining, Travel",2022-10-18,Indonesia
    7665,Savings,6.19,Fairprice,"Transportation, General Expenses",2022-12-20,Australia
    7666,Joint Account,453.87,Google,"Travel, Groceries, Dining",2022-12-06,Australia
    7667,Joint Account,311.95,Starbucks,"Dining, General Expenses",2022-07-01,Australia
    7668,Savings,295.75,ACME,"Transportation, Entertainment",2022-06-12,Japan
    7669,Savings,448.25,Amazon,"Entertainment, Travel, Transportation, Dining, Groceries",2022-09-23,Singapore
    7670,Joint Account,459.65,Walmart,Entertainment,2022-07-15,Singapore
    7671,Joint Account,795.28,Amazon,"Groceries, General Expenses",2022-09-16,Japan
    7672,Savings,607.3,Grab,"Groceries, General Expenses, Travel, Transportation",2022-10-30,Indonesia
    7673,Checking,610.91,ACME,"Groceries, Travel, Entertainment",2022-12-29,Australia
    7674,Joint Account,43.08,Amazon,"Transportation, Dining",2022-08-07,Singapore
    7675,Checking,38.35,Gojek,"Entertainment, General Expenses",2022-09-06,Australia
    7676,Joint Account,29.74,Fairprice,"Travel, Dining",2022-07-06,Japan
    7677,Joint Account,445.57,ACME,Travel,2022-12-26,Japan
    7678,Checking,232.2,ACME,"Groceries, Dining",2022-08-26,Australia
    7679,Joint Account,608.75,Amazon,"Travel, Transportation, Dining, Groceries, Entertainment, General Expenses",2022-09-04,Japan
    7680,Joint Account,91.33,Walmart,"Transportation, Dining, General Expenses, Travel",2022-11-03,Indonesia
    7681,Joint Account,578.54,Starbucks,"Dining, Transportation, Travel",2022-10-28,Singapore
    7682,Checking,882.3,Fairprice,General Expenses,2022-12-17,Australia
    7683,Checking,365.41,Uber,"Transportation, Travel, Dining, Groceries, Entertainment",2022-08-08,Japan
    7684,Savings,392.3,Starbucks,"Transportation, Travel, Dining",2022-11-28,Indonesia
    7685,Joint Account,113.29,Uber,Groceries,2022-08-09,Indonesia
    7686,Joint Account,458.02,Grab,"Dining, General Expenses, Entertainment, Groceries",2022-12-26,Japan
    7687,Joint Account,999.81,Fairprice,Travel,2022-08-04,Japan
    7688,Checking,728.78,ACME,"Entertainment, Dining, General Expenses",2022-10-12,Singapore
    7689,Savings,774.7,Grab,"General Expenses, Dining, Groceries, Travel, Entertainment, Transportation",2022-08-08,Japan
    7690,Joint Account,370.41,Amazon,"Travel, General Expenses, Groceries",2022-07-20,Singapore
    7691,Savings,9.79,Google,"Dining, Transportation, Travel, Entertainment, Groceries, General Expenses",2022-11-29,Indonesia
    7692,Savings,130.01,Walmart,"Travel, Entertainment, Groceries, Dining",2022-06-06,Singapore
    7693,Checking,774.96,Google,"Entertainment, Groceries",2022-07-11,Australia
    7694,Savings,709.69,Walmart,Dining,2022-09-04,Indonesia
    7695,Joint Account,796.69,Uber,"Groceries, Entertainment",2022-09-20,Japan
    7696,Savings,6.99,ACME,"Entertainment, Groceries",2022-11-03,Japan
    7697,Joint Account,383.03,Amazon,"General Expenses, Entertainment, Groceries, Transportation, Travel, Dining",2022-12-21,Singapore
    7698,Checking,472.86,Starbucks,"Dining, Entertainment, Travel, General Expenses, Groceries, Transportation",2022-06-05,Japan
    7699,Savings,117.37,Walmart,"Groceries, Travel, General Expenses, Dining, Entertainment",2022-09-24,Singapore
    7700,Checking,371.21,Walmart,"Dining, Transportation",2022-10-19,Australia
    7701,Checking,101.08,Uber,"General Expenses, Entertainment, Groceries, Travel, Transportation",2022-10-27,Japan
    7702,Checking,560.92,Uber,"General Expenses, Travel, Groceries, Transportation",2022-06-27,Indonesia
    7703,Joint Account,478.85,Walmart,"Travel, Dining",2022-12-16,Indonesia
    7704,Savings,733.46,Amazon,"Groceries, Dining, Travel",2022-06-21,Australia
    7705,Joint Account,821.02,Starbucks,"Entertainment, General Expenses",2022-09-30,Japan
    7706,Savings,873.33,Uber,"Dining, Transportation, Travel, General Expenses, Entertainment, Groceries",2022-06-17,Australia
    7707,Savings,464.84,Starbucks,"Entertainment, Travel, General Expenses, Transportation",2022-11-22,Australia
    7708,Checking,116.84,Fairprice,"Transportation, Travel, General Expenses, Entertainment, Dining, Groceries",2022-09-27,Australia
    7709,Savings,356.66,Starbucks,Transportation,2022-07-22,Australia
    7710,Savings,672.26,ACME,"Dining, General Expenses, Travel",2022-12-26,Singapore
    7711,Joint Account,574.89,Gojek,"Dining, Entertainment, Travel",2022-09-08,Japan
    7712,Savings,800.93,Uber,"General Expenses, Travel, Transportation, Entertainment, Groceries, Dining",2022-09-30,Australia
    7713,Checking,254.95,Uber,"Transportation, Entertainment, General Expenses, Travel, Groceries",2022-08-23,Singapore
    7714,Checking,240.7,ACME,"Travel, Groceries, Transportation, Dining, Entertainment",2022-12-14,Singapore
    7715,Savings,223.36,Fairprice,"Groceries, Dining, General Expenses",2022-09-10,Australia
    7716,Checking,398.43,Uber,"Groceries, Dining, Entertainment, Transportation, Travel, General Expenses",2022-08-20,Singapore
    7717,Checking,463.69,Starbucks,"Travel, Entertainment",2022-10-11,Japan
    7718,Joint Account,984.7,Google,"General Expenses, Groceries, Dining",2022-11-27,Australia
    7719,Checking,220.54,Grab,General Expenses,2022-08-03,Indonesia
    7720,Savings,986.0,Google,"Transportation, Travel, Dining, General Expenses, Entertainment",2022-11-02,Indonesia
    7721,Checking,588.81,Walmart,"Entertainment, Groceries, Transportation, Dining, General Expenses, Travel",2022-10-23,Singapore
    7722,Savings,928.11,Gojek,"Transportation, Travel, Entertainment, Dining, Groceries",2022-09-05,Australia
    7723,Joint Account,351.54,Fairprice,"Transportation, Groceries",2022-06-27,Singapore
    7724,Joint Account,824.1,Fairprice,"General Expenses, Entertainment",2022-12-15,Australia
    7725,Savings,472.82,Amazon,"Travel, Transportation, General Expenses, Entertainment, Groceries",2022-06-08,Singapore
    7726,Savings,458.52,Amazon,"Dining, Entertainment, Groceries, General Expenses",2022-12-04,Indonesia
    7727,Checking,628.59,Fairprice,"Dining, Entertainment, Transportation, Groceries",2022-09-30,Singapore
    7728,Checking,850.59,Grab,"General Expenses, Transportation, Groceries",2022-06-17,Japan
    7729,Savings,831.08,Google,"Dining, General Expenses, Transportation, Entertainment, Travel",2022-11-15,Indonesia
    7730,Savings,62.01,Fairprice,"Transportation, Entertainment",2022-06-29,Indonesia
    7731,Savings,442.07,Walmart,Groceries,2022-10-20,Indonesia
    7732,Joint Account,362.64,Amazon,Transportation,2022-11-18,Singapore
    7733,Checking,902.67,Walmart,"General Expenses, Entertainment, Groceries, Travel, Dining",2022-06-10,Indonesia
    7734,Savings,758.39,Walmart,"Groceries, General Expenses, Travel, Transportation",2022-09-07,Indonesia
    7735,Joint Account,170.19,Walmart,Travel,2022-09-25,Singapore
    7736,Checking,571.18,ACME,Travel,2022-08-29,Japan
    7737,Savings,539.85,Fairprice,Travel,2022-10-30,Singapore
    7738,Savings,608.92,Amazon,Dining,2022-07-19,Indonesia
    7739,Savings,263.05,Walmart,"General Expenses, Groceries, Travel, Dining",2022-10-25,Australia
    7740,Checking,586.91,Walmart,"Transportation, Travel, Entertainment, Dining, Groceries",2022-11-04,Indonesia
    7741,Joint Account,978.59,Google,"Transportation, Entertainment, Travel, Groceries, Dining, General Expenses",2022-12-12,Japan
    7742,Checking,99.02,Walmart,"Dining, General Expenses, Entertainment, Groceries, Transportation, Travel",2022-06-11,Singapore
    7743,Checking,174.93,Google,"General Expenses, Transportation, Travel, Entertainment",2022-12-07,Singapore
    7744,Savings,643.08,Google,General Expenses,2022-10-12,Indonesia
    7745,Checking,139.02,ACME,"Transportation, General Expenses",2022-09-05,Japan
    7746,Checking,296.15,Starbucks,"Groceries, Travel, Entertainment",2022-11-04,Australia
    7747,Checking,630.75,Amazon,"Groceries, Transportation",2022-06-30,Japan
    7748,Joint Account,310.35,Fairprice,"Dining, Entertainment, General Expenses, Groceries, Travel, Transportation",2022-08-19,Indonesia
    7749,Joint Account,429.37,Uber,"Groceries, Transportation, Travel, Entertainment",2022-08-27,Australia
    7750,Joint Account,383.76,ACME,"Travel, Entertainment, Groceries",2022-09-12,Japan
    7751,Savings,835.95,Gojek,"Entertainment, Transportation, Dining, Groceries",2022-09-26,Australia
    7752,Joint Account,522.06,Grab,"Travel, Transportation",2022-07-09,Singapore
    7753,Joint Account,339.8,ACME,"Dining, Groceries, Entertainment, Travel",2022-08-13,Indonesia
    7754,Joint Account,361.0,Gojek,"General Expenses, Transportation, Groceries, Travel, Dining",2022-09-27,Indonesia
    7755,Savings,518.0,Google,"Groceries, Dining",2022-09-04,Japan
    7756,Joint Account,844.44,Gojek,"Entertainment, Dining",2022-10-16,Indonesia
    7757,Savings,172.63,Walmart,"Entertainment, Transportation, Dining, Groceries",2022-09-20,Indonesia
    7758,Joint Account,20.52,Fairprice,"Dining, General Expenses, Travel",2022-11-15,Singapore
    7759,Joint Account,414.5,Gojek,"General Expenses, Entertainment, Groceries, Dining",2022-09-09,Singapore
    7760,Checking,541.78,Grab,"Groceries, Travel, General Expenses",2022-08-23,Japan
    7761,Joint Account,667.28,Amazon,"Entertainment, Dining",2022-06-13,Australia
    7762,Checking,50.25,Starbucks,"Entertainment, Dining, Travel, General Expenses",2022-08-19,Japan
    7763,Joint Account,641.58,Starbucks,"Travel, Groceries, Transportation, Dining, General Expenses",2022-12-07,Indonesia
    7764,Checking,230.24,Fairprice,"General Expenses, Dining, Groceries, Entertainment, Transportation",2022-09-29,Australia
    7765,Checking,914.63,Uber,"Travel, General Expenses, Dining, Transportation",2022-12-02,Singapore
    7766,Joint Account,99.69,Gojek,"Travel, Transportation",2022-12-09,Japan
    7767,Joint Account,246.3,Uber,"General Expenses, Travel",2022-11-07,Japan
    7768,Savings,30.96,Uber,"Transportation, Groceries, Dining",2022-08-07,Singapore
    7769,Savings,245.03,Gojek,Dining,2022-09-11,Japan
    7770,Checking,576.95,Gojek,"Transportation, Entertainment, Dining, General Expenses, Travel",2022-11-25,Indonesia
    7771,Joint Account,659.17,ACME,"Transportation, General Expenses, Travel",2022-09-10,Indonesia
    7772,Checking,496.86,Google,Groceries,2022-08-26,Australia
    7773,Joint Account,399.48,Fairprice,"Travel, Entertainment",2022-12-11,Australia
    7774,Savings,361.35,Google,"Travel, Transportation, Dining",2022-09-04,Japan
    7775,Savings,393.07,Starbucks,"Entertainment, Dining, Travel",2022-12-01,Japan
    7776,Savings,104.34,Walmart,"Entertainment, Groceries, General Expenses, Dining, Transportation",2022-09-06,Indonesia
    7777,Joint Account,752.84,Gojek,"Travel, Groceries, Dining",2022-09-14,Australia
    7778,Checking,238.16,Fairprice,"Entertainment, Dining, Groceries, Transportation",2022-07-14,Japan
    7779,Joint Account,362.68,Gojek,"Groceries, Transportation, Dining, Travel",2022-08-24,Indonesia
    7780,Joint Account,707.72,Walmart,"Transportation, Entertainment, Dining",2022-11-29,Australia
    7781,Checking,742.31,Grab,"Entertainment, Groceries, Travel, General Expenses, Dining",2022-06-05,Indonesia
    7782,Checking,111.36,Grab,"Travel, Entertainment, Groceries, Transportation, General Expenses, Dining",2022-07-16,Indonesia
    7783,Checking,667.9,Fairprice,"Transportation, Groceries, Entertainment",2022-06-08,Singapore
    7784,Savings,374.97,ACME,"Entertainment, Dining, Transportation, Groceries, Travel, General Expenses",2022-12-02,Indonesia
    7785,Savings,992.32,Walmart,Groceries,2022-06-11,Singapore
    7786,Checking,806.66,Amazon,"General Expenses, Transportation, Groceries",2022-06-20,Australia
    7787,Checking,340.5,Walmart,"Dining, Groceries",2022-06-16,Australia
    7788,Checking,605.8,Fairprice,"General Expenses, Dining, Transportation, Groceries",2022-09-26,Australia
    7789,Checking,218.4,Gojek,"Dining, Groceries, General Expenses, Transportation, Entertainment",2022-06-01,Singapore
    7790,Joint Account,780.72,Starbucks,"Transportation, Dining, General Expenses",2022-09-20,Japan
    7791,Checking,816.54,Starbucks,"Entertainment, General Expenses",2022-07-13,Singapore
    7792,Checking,957.04,Grab,"General Expenses, Entertainment, Dining, Travel",2022-08-03,Indonesia
    7793,Checking,724.5,Amazon,"Transportation, Entertainment",2022-08-20,Japan
    7794,Joint Account,146.39,Walmart,"Entertainment, Travel",2022-08-23,Singapore
    7795,Joint Account,584.9,Starbucks,"Groceries, Dining, General Expenses",2022-08-17,Australia
    7796,Joint Account,895.85,Amazon,"Transportation, Travel, Groceries, Entertainment, General Expenses",2022-08-16,Japan
    7797,Savings,282.12,Google,Travel,2022-09-13,Australia
    7798,Checking,674.32,ACME,"General Expenses, Groceries, Entertainment, Transportation, Dining",2022-10-17,Japan
    7799,Savings,592.65,Starbucks,"Transportation, Entertainment",2022-07-21,Indonesia
    7800,Checking,58.88,Walmart,"Dining, Groceries, Transportation, General Expenses",2022-07-04,Indonesia
    7801,Savings,57.87,Google,"Entertainment, Dining",2022-06-05,Indonesia
    7802,Checking,720.88,Google,"Groceries, Entertainment",2022-07-01,Indonesia
    7803,Checking,465.01,ACME,"Groceries, Travel",2022-06-06,Japan
    7804,Savings,488.12,Amazon,"Groceries, General Expenses, Dining, Transportation",2022-07-31,Singapore
    7805,Joint Account,471.9,Amazon,"Travel, Entertainment",2022-08-09,Singapore
    7806,Checking,855.58,Fairprice,"Entertainment, Travel, Dining",2022-06-18,Japan
    7807,Joint Account,399.85,Google,"Entertainment, Dining",2022-11-05,Indonesia
    7808,Joint Account,423.29,Fairprice,Transportation,2022-09-12,Indonesia
    7809,Savings,540.1,Uber,Travel,2022-09-14,Singapore
    7810,Savings,322.0,Grab,"Travel, Groceries, Transportation, Dining",2022-08-28,Australia
    7811,Checking,394.32,Amazon,"Travel, Groceries, Entertainment, Transportation",2022-10-26,Indonesia
    7812,Checking,724.07,Uber,"Entertainment, Dining",2022-09-04,Australia
    7813,Savings,328.19,Gojek,Groceries,2022-09-29,Singapore
    7814,Joint Account,688.74,Google,"Travel, Dining, General Expenses, Groceries, Entertainment, Transportation",2022-08-06,Australia
    7815,Checking,298.53,Gojek,Travel,2022-12-28,Japan
    7816,Savings,377.11,Google,Transportation,2022-07-06,Indonesia
    7817,Savings,395.83,Grab,"Dining, Groceries, Travel, Entertainment",2022-08-31,Indonesia
    7818,Checking,341.78,Starbucks,"Dining, Travel, Entertainment, Groceries",2022-12-17,Australia
    7819,Savings,304.77,Google,"Groceries, Entertainment, Dining, Transportation",2022-12-24,Indonesia
    7820,Savings,114.51,Uber,"Entertainment, Groceries",2022-07-13,Japan
    7821,Joint Account,442.38,Google,"General Expenses, Travel, Entertainment, Dining",2022-06-17,Indonesia
    7822,Checking,789.58,Uber,"Transportation, Entertainment, Groceries, General Expenses, Dining",2022-07-30,Japan
    7823,Checking,298.27,Uber,"General Expenses, Dining, Travel, Transportation",2022-08-17,Singapore
    7824,Checking,481.6,Google,Dining,2022-12-27,Indonesia
    7825,Savings,600.31,Uber,"Groceries, Dining, General Expenses",2022-10-01,Indonesia
    7826,Checking,64.02,Grab,"Transportation, Travel, Entertainment, Groceries, General Expenses, Dining",2022-07-28,Australia
    7827,Joint Account,513.11,Grab,Dining,2022-09-10,Japan
    7828,Savings,261.93,Amazon,"Groceries, Travel",2022-06-04,Singapore
    7829,Checking,534.06,Uber,"Dining, General Expenses, Travel, Entertainment",2022-11-14,Japan
    7830,Joint Account,911.8,Amazon,"Transportation, General Expenses, Groceries",2022-10-20,Indonesia
    7831,Savings,90.58,Walmart,"Dining, Travel, General Expenses, Transportation, Groceries",2022-06-22,Japan
    7832,Checking,308.57,Gojek,Travel,2022-09-29,Japan
    7833,Checking,709.46,Walmart,Dining,2022-09-02,Singapore
    7834,Joint Account,309.93,Grab,"Entertainment, Travel, Transportation, General Expenses, Dining",2022-08-13,Singapore
    7835,Checking,907.23,Google,"Dining, Entertainment, General Expenses",2022-10-09,Japan
    7836,Savings,277.18,Amazon,"Transportation, Dining",2022-09-29,Japan
    7837,Checking,517.24,Walmart,"Groceries, General Expenses",2022-11-28,Indonesia
    7838,Savings,482.54,Amazon,"Groceries, General Expenses, Entertainment, Travel",2022-11-24,Australia
    7839,Savings,293.36,Uber,"General Expenses, Transportation",2022-09-15,Indonesia
    7840,Savings,54.08,Gojek,"Travel, Groceries, General Expenses, Transportation",2022-09-15,Indonesia
    7841,Checking,511.21,Gojek,"General Expenses, Groceries, Dining, Travel, Transportation, Entertainment",2022-11-07,Indonesia
    7842,Savings,209.13,ACME,"Travel, Dining, Transportation, Entertainment, General Expenses, Groceries",2022-09-11,Indonesia
    7843,Joint Account,55.31,Gojek,"Transportation, General Expenses, Groceries, Entertainment",2022-11-08,Singapore
    7844,Joint Account,306.03,Google,"Entertainment, Dining",2022-06-23,Singapore
    7845,Joint Account,926.8,Gojek,"General Expenses, Entertainment, Dining, Transportation",2022-10-19,Singapore
    7846,Joint Account,776.21,Amazon,"General Expenses, Groceries, Travel",2022-09-13,Japan
    7847,Checking,786.96,Amazon,"Groceries, General Expenses, Entertainment",2022-09-27,Japan
    7848,Savings,102.07,Uber,"Transportation, Travel",2022-12-22,Singapore
    7849,Joint Account,523.66,ACME,"Transportation, Travel, Entertainment, Dining, Groceries",2022-07-22,Japan
    7850,Joint Account,125.62,Uber,"Entertainment, Dining, Transportation, Groceries, General Expenses, Travel",2022-10-13,Singapore
    7851,Savings,7.59,Uber,"Entertainment, Groceries, General Expenses",2022-08-26,Australia
    7852,Checking,261.96,Amazon,General Expenses,2022-06-13,Singapore
    7853,Checking,702.46,Fairprice,"Groceries, Travel, Dining, General Expenses, Entertainment",2022-06-15,Japan
    7854,Checking,238.66,Google,"Travel, Dining, Entertainment, General Expenses",2022-10-12,Australia
    7855,Checking,279.8,Uber,"Travel, Transportation, General Expenses, Groceries, Entertainment",2022-09-10,Indonesia
    7856,Joint Account,150.73,Walmart,"Travel, General Expenses, Entertainment, Groceries, Dining",2022-10-11,Australia
    7857,Joint Account,69.46,Fairprice,"Dining, Groceries, Entertainment, Travel",2022-07-24,Australia
    7858,Savings,216.23,ACME,Dining,2022-09-04,Indonesia
    7859,Joint Account,489.81,Uber,"Dining, Entertainment, General Expenses",2022-11-15,Indonesia
    7860,Joint Account,31.72,Amazon,"Dining, General Expenses, Transportation, Entertainment",2022-10-25,Japan
    7861,Savings,857.16,Grab,"Entertainment, Travel, Transportation, Groceries, General Expenses, Dining",2022-11-17,Singapore
    7862,Joint Account,452.15,ACME,"Transportation, Groceries, General Expenses",2022-07-16,Australia
    7863,Savings,495.85,Uber,"Entertainment, Transportation, Travel",2022-11-29,Australia
    7864,Savings,118.65,Uber,"Transportation, Travel, General Expenses",2022-11-23,Australia
    7865,Joint Account,395.46,Google,"Transportation, Travel, General Expenses, Entertainment, Dining",2022-08-09,Indonesia
    7866,Joint Account,954.32,Google,Transportation,2022-08-06,Singapore
    7867,Checking,289.86,Uber,"Transportation, Entertainment",2022-07-23,Indonesia
    7868,Savings,887.04,Amazon,"Groceries, General Expenses, Entertainment, Travel, Dining, Transportation",2022-08-31,Singapore
    7869,Joint Account,800.13,Grab,"Travel, General Expenses, Entertainment, Groceries, Dining, Transportation",2022-06-07,Indonesia
    7870,Savings,112.38,ACME,"Dining, Travel, Groceries",2022-06-08,Singapore
    7871,Savings,443.08,Grab,"Groceries, Transportation, Dining, Travel, Entertainment",2022-07-18,Australia
    7872,Checking,557.37,Starbucks,"Entertainment, Transportation",2022-10-23,Japan
    7873,Joint Account,815.73,Google,"Groceries, Travel, General Expenses, Transportation",2022-10-28,Indonesia
    7874,Savings,262.31,Walmart,"Groceries, General Expenses, Dining, Travel, Transportation, Entertainment",2022-12-06,Japan
    7875,Savings,454.3,Walmart,"Groceries, Travel",2022-09-05,Japan
    7876,Checking,174.28,Fairprice,"Travel, General Expenses, Entertainment",2022-06-17,Singapore
    7877,Savings,943.25,Google,"Groceries, Entertainment, Travel",2022-06-25,Indonesia
    7878,Savings,541.29,Starbucks,"Entertainment, Groceries, Travel, General Expenses, Transportation",2022-07-25,Singapore
    7879,Joint Account,160.47,Google,"Dining, General Expenses, Groceries, Transportation, Travel",2022-12-23,Australia
    7880,Checking,181.84,Google,"General Expenses, Dining, Travel, Transportation",2022-06-13,Japan
    7881,Checking,964.9,Uber,"Groceries, Entertainment, Transportation, Travel, Dining, General Expenses",2022-07-03,Japan
    7882,Checking,418.78,Starbucks,"Transportation, Travel, Entertainment, General Expenses, Dining",2022-10-20,Singapore
    7883,Savings,123.79,Fairprice,"Travel, Entertainment, Dining, Groceries",2022-12-16,Japan
    7884,Savings,111.66,Gojek,Travel,2022-11-04,Singapore
    7885,Joint Account,761.13,ACME,"Dining, Transportation, General Expenses",2022-10-10,Japan
    7886,Joint Account,272.93,Starbucks,"Dining, General Expenses",2022-09-04,Australia
    7887,Checking,261.69,Starbucks,Entertainment,2022-12-15,Indonesia
    7888,Checking,572.46,Google,"General Expenses, Entertainment, Travel",2022-08-01,Australia
    7889,Savings,800.21,Fairprice,"Dining, Travel, Entertainment",2022-06-26,Australia
    7890,Joint Account,680.48,Amazon,"Entertainment, General Expenses, Groceries, Dining, Transportation",2022-07-12,Singapore
    7891,Savings,660.76,Starbucks,Travel,2022-06-14,Singapore
    7892,Joint Account,961.4,Amazon,"Dining, Transportation, Travel",2022-11-21,Indonesia
    7893,Savings,845.96,Gojek,Travel,2022-10-21,Indonesia
    7894,Checking,784.0,Starbucks,"Dining, Travel, Groceries, General Expenses",2022-07-18,Singapore
    7895,Savings,315.41,Fairprice,"Groceries, Transportation, Travel, Dining, General Expenses, Entertainment",2022-08-28,Singapore
    7896,Checking,900.32,Amazon,"General Expenses, Travel, Transportation, Entertainment, Dining, Groceries",2022-08-12,Australia
    7897,Joint Account,450.56,Grab,"Dining, Groceries, General Expenses",2022-07-05,Australia
    7898,Joint Account,15.75,Grab,"Travel, Entertainment, Transportation",2022-08-17,Singapore
    7899,Joint Account,453.38,Grab,"Transportation, Groceries, Dining",2022-09-28,Singapore
    7900,Checking,257.8,Walmart,Dining,2022-08-21,Japan
    7901,Savings,453.69,Google,"Groceries, General Expenses, Dining, Entertainment, Transportation",2022-06-17,Singapore
    7902,Joint Account,467.16,Grab,"Dining, Transportation, Groceries, Travel, General Expenses",2022-12-31,Australia
    7903,Checking,386.21,Amazon,"Transportation, Entertainment, Dining, General Expenses, Travel",2022-06-27,Singapore
    7904,Joint Account,667.3,Gojek,"Travel, Groceries, Transportation, Entertainment, General Expenses",2022-10-20,Indonesia
    7905,Joint Account,84.83,Fairprice,"Travel, General Expenses, Entertainment",2022-07-05,Japan
    7906,Joint Account,327.61,Fairprice,"Entertainment, Dining",2022-09-25,Japan
    7907,Checking,750.52,Fairprice,"Dining, Entertainment, Groceries, Transportation",2022-06-15,Indonesia
    7908,Joint Account,133.77,Amazon,"Travel, Groceries, General Expenses, Dining, Transportation, Entertainment",2022-12-25,Japan
    7909,Joint Account,150.57,Gojek,Entertainment,2022-11-17,Australia
    7910,Checking,909.03,ACME,"General Expenses, Transportation, Groceries, Travel, Dining",2022-12-29,Indonesia
    7911,Checking,667.36,ACME,"Groceries, Travel",2022-06-11,Singapore
    7912,Savings,514.07,ACME,"Dining, Travel",2022-06-17,Singapore
    7913,Joint Account,651.23,Grab,"Groceries, Dining, Transportation, Entertainment",2022-09-22,Indonesia
    7914,Joint Account,144.69,Google,"Travel, Entertainment, Dining",2022-09-26,Indonesia
    7915,Joint Account,551.05,Gojek,"General Expenses, Groceries, Dining, Travel, Entertainment, Transportation",2022-07-08,Indonesia
    7916,Savings,263.96,Starbucks,"Transportation, Entertainment, General Expenses, Dining",2022-08-09,Australia
    7917,Savings,182.78,Fairprice,"Dining, Groceries, General Expenses, Transportation, Travel, Entertainment",2022-12-19,Singapore
    7918,Savings,336.43,Walmart,"Entertainment, Groceries, General Expenses",2022-09-18,Indonesia
    7919,Joint Account,38.96,Google,"Travel, General Expenses, Transportation, Entertainment, Dining, Groceries",2022-11-30,Indonesia
    7920,Joint Account,708.71,Starbucks,"Groceries, Dining, Travel, Transportation",2022-09-14,Indonesia
    7921,Joint Account,43.03,Gojek,"Groceries, General Expenses",2022-08-06,Indonesia
    7922,Savings,415.77,Google,"Groceries, General Expenses, Travel",2022-08-31,Japan
    7923,Joint Account,516.15,Uber,"General Expenses, Dining, Entertainment",2022-09-19,Indonesia
    7924,Joint Account,957.03,Amazon,"Groceries, Travel, General Expenses, Entertainment, Transportation",2022-07-21,Australia
    7925,Joint Account,323.18,ACME,General Expenses,2022-12-28,Singapore
    7926,Savings,685.79,Uber,"Travel, Groceries, Transportation, Entertainment, General Expenses, Dining",2022-12-30,Australia
    7927,Joint Account,59.21,Grab,"Dining, General Expenses, Groceries",2022-09-07,Japan
    7928,Savings,903.49,Gojek,"Transportation, Dining, General Expenses, Travel, Groceries",2022-11-09,Japan
    7929,Savings,593.91,Grab,"General Expenses, Groceries, Entertainment, Dining",2022-10-23,Australia
    7930,Joint Account,636.89,Starbucks,"Entertainment, Groceries, General Expenses",2022-08-25,Japan
    7931,Savings,488.58,Google,"Entertainment, Groceries",2022-10-28,Japan
    7932,Joint Account,366.57,Starbucks,"Transportation, Travel",2022-06-03,Singapore
    7933,Joint Account,748.73,Grab,Transportation,2022-06-07,Australia
    7934,Joint Account,201.48,Fairprice,"Travel, Entertainment",2022-08-22,Australia
    7935,Joint Account,459.81,Gojek,"General Expenses, Entertainment",2022-11-15,Singapore
    7936,Savings,188.81,Fairprice,"Travel, Dining, Groceries",2022-10-18,Singapore
    7937,Checking,838.33,Grab,"General Expenses, Dining, Travel, Transportation, Groceries",2022-08-19,Australia
    7938,Checking,624.71,Uber,"Transportation, Groceries, Dining",2022-07-16,Singapore
    7939,Checking,332.64,Uber,Transportation,2022-09-06,Australia
    7940,Savings,443.26,Amazon,"Travel, Entertainment, Dining, Groceries, Transportation",2022-09-30,Japan
    7941,Joint Account,255.72,Grab,"Groceries, Travel, General Expenses",2022-09-23,Indonesia
    7942,Savings,296.73,Google,Groceries,2022-11-14,Japan
    7943,Savings,133.2,ACME,"Transportation, General Expenses, Entertainment, Dining, Groceries",2022-11-21,Singapore
    7944,Joint Account,339.61,Google,Dining,2022-07-29,Australia
    7945,Checking,699.41,Grab,"Dining, Entertainment, Groceries, Travel, General Expenses, Transportation",2022-08-20,Australia
    7946,Joint Account,833.24,Uber,"Travel, Dining, General Expenses",2022-07-23,Japan
    7947,Savings,765.29,Google,"Dining, Transportation, Travel, General Expenses, Groceries",2022-08-12,Australia
    7948,Savings,305.73,Grab,General Expenses,2022-10-29,Australia
    7949,Joint Account,929.87,Google,"General Expenses, Dining",2022-12-21,Singapore
    7950,Checking,546.36,Google,"General Expenses, Travel",2022-10-24,Australia
    7951,Joint Account,137.32,Gojek,"General Expenses, Entertainment, Transportation, Dining",2022-06-06,Japan
    7952,Checking,300.26,Walmart,"General Expenses, Dining, Travel",2022-12-12,Australia
    7953,Checking,718.48,Starbucks,"Transportation, Travel, Dining",2022-09-09,Indonesia
    7954,Joint Account,86.35,Grab,"Dining, General Expenses, Transportation, Entertainment",2022-12-21,Singapore
    7955,Checking,427.25,Starbucks,"Travel, General Expenses, Dining, Groceries",2022-07-06,Japan
    7956,Joint Account,436.17,ACME,"Transportation, Travel, General Expenses, Entertainment",2022-10-13,Japan
    7957,Joint Account,707.0,Gojek,"Travel, Dining",2022-08-30,Japan
    7958,Joint Account,104.73,ACME,Entertainment,2022-09-26,Japan
    7959,Savings,696.38,Amazon,"Entertainment, Travel",2022-08-30,Singapore
    7960,Savings,239.15,Uber,Groceries,2022-10-07,Indonesia
    7961,Joint Account,19.2,Google,Transportation,2022-11-19,Singapore
    7962,Savings,786.52,Starbucks,"Transportation, Dining, Entertainment, General Expenses, Travel",2022-12-08,Singapore
    7963,Checking,45.83,Uber,"Travel, Entertainment, Groceries, Dining, Transportation, General Expenses",2022-06-01,Singapore
    7964,Joint Account,414.34,Fairprice,"Entertainment, General Expenses",2022-09-26,Indonesia
    7965,Savings,596.1,ACME,"Dining, General Expenses, Entertainment, Transportation, Groceries",2022-08-23,Singapore
    7966,Savings,367.64,Grab,"Travel, Dining, Groceries, Transportation, Entertainment, General Expenses",2022-09-15,Japan
    7967,Checking,70.63,Amazon,"General Expenses, Travel, Groceries, Dining, Transportation, Entertainment",2022-09-30,Australia
    7968,Joint Account,338.77,ACME,Transportation,2022-09-28,Singapore
    7969,Joint Account,327.32,Fairprice,"Transportation, General Expenses",2022-12-14,Singapore
    7970,Savings,587.86,Gojek,"Transportation, Entertainment, Groceries, Dining, General Expenses, Travel",2022-09-17,Japan
    7971,Checking,44.75,Fairprice,"Transportation, Entertainment",2022-07-04,Singapore
    7972,Savings,600.04,Fairprice,"Travel, Entertainment, Dining, Transportation, Groceries, General Expenses",2022-10-13,Indonesia
    7973,Joint Account,225.87,ACME,Entertainment,2022-09-14,Australia
    7974,Savings,876.13,Fairprice,"Travel, Transportation",2022-09-20,Indonesia
    7975,Joint Account,912.65,Fairprice,"Groceries, Travel, Transportation, General Expenses, Dining, Entertainment",2022-09-08,Australia
    7976,Checking,299.37,Walmart,"Transportation, Entertainment, Groceries, Travel, Dining, General Expenses",2022-07-26,Japan
    7977,Checking,544.01,Gojek,Groceries,2022-07-26,Australia
    7978,Checking,615.49,Gojek,Groceries,2022-07-02,Australia
    7979,Joint Account,325.62,Fairprice,"Dining, Travel, General Expenses, Groceries, Entertainment",2022-07-06,Japan
    7980,Checking,375.94,Uber,"Transportation, Dining, Groceries, Entertainment, General Expenses, Travel",2022-09-26,Singapore
    7981,Joint Account,97.74,Starbucks,"Groceries, Dining, General Expenses, Travel, Entertainment, Transportation",2022-09-30,Indonesia
    7982,Joint Account,459.2,Starbucks,"General Expenses, Groceries, Entertainment",2022-09-28,Indonesia
    7983,Joint Account,277.13,Amazon,General Expenses,2022-09-02,Australia
    7984,Checking,522.89,Amazon,Entertainment,2022-09-05,Indonesia
    7985,Checking,820.97,Walmart,"Entertainment, Groceries, Travel",2022-09-16,Australia
    7986,Savings,968.19,Fairprice,Travel,2022-07-15,Australia
    7987,Joint Account,432.37,Amazon,"General Expenses, Entertainment, Groceries, Dining",2022-07-21,Australia
    7988,Checking,386.41,Uber,"General Expenses, Travel, Dining, Groceries, Entertainment, Transportation",2022-08-11,Australia
    7989,Checking,105.14,Starbucks,"Travel, Transportation, General Expenses, Entertainment, Dining, Groceries",2022-08-25,Indonesia
    7990,Joint Account,638.52,Uber,"Transportation, Groceries, Travel",2022-12-07,Singapore
    7991,Savings,54.62,Starbucks,Entertainment,2022-11-19,Australia
    7992,Joint Account,44.33,Google,"Transportation, Dining, Groceries",2022-09-17,Singapore
    7993,Checking,563.16,Amazon,"Groceries, General Expenses, Entertainment",2022-08-30,Australia
    7994,Checking,328.48,Starbucks,"Groceries, Entertainment, Dining, Travel, General Expenses",2022-07-10,Australia
    7995,Joint Account,848.94,ACME,"Travel, Transportation, General Expenses",2022-06-11,Indonesia
    7996,Checking,675.14,Google,"Dining, General Expenses, Travel, Groceries, Transportation, Entertainment",2022-08-17,Singapore
    7997,Savings,165.94,Gojek,"General Expenses, Dining, Entertainment, Groceries, Travel, Transportation",2022-08-31,Japan
    7998,Joint Account,252.25,Grab,"Transportation, Travel, Dining, Groceries, Entertainment, General Expenses",2022-09-18,Japan
    7999,Joint Account,539.99,Grab,General Expenses,2022-12-27,Indonesia
    8000,Checking,510.21,Fairprice,"Transportation, General Expenses",2022-08-09,Australia
    8001,Joint Account,928.42,Uber,"Groceries, Travel, Entertainment, Dining, Transportation",2022-07-21,Japan
    8002,Savings,977.11,Grab,"Entertainment, Transportation, Groceries, General Expenses, Dining",2022-09-05,Singapore
    8003,Joint Account,334.58,Fairprice,"General Expenses, Transportation, Groceries",2022-06-22,Australia
    8004,Joint Account,528.41,Starbucks,General Expenses,2022-08-04,Japan
    8005,Joint Account,347.51,ACME,"Entertainment, Groceries, Dining, Transportation",2022-09-08,Indonesia
    8006,Checking,1.65,Uber,"General Expenses, Entertainment, Groceries",2022-12-16,Australia
    8007,Checking,741.75,Gojek,"Travel, General Expenses, Entertainment, Dining",2022-12-22,Australia
    8008,Savings,741.45,ACME,"Dining, General Expenses",2022-10-13,Australia
    8009,Savings,943.65,Google,"Travel, Entertainment, Dining, Transportation, Groceries",2022-10-21,Indonesia
    8010,Joint Account,756.53,Amazon,Entertainment,2022-10-16,Japan
    8011,Checking,266.24,Google,"Entertainment, General Expenses",2022-07-03,Japan
    8012,Checking,978.44,Gojek,"Travel, Entertainment, Groceries",2022-07-20,Singapore
    8013,Savings,396.33,Uber,"Groceries, Transportation",2022-10-25,Indonesia
    8014,Joint Account,426.45,Fairprice,"Travel, Dining, Groceries, Transportation, General Expenses",2022-10-08,Australia
    8015,Joint Account,907.87,Google,"General Expenses, Groceries, Entertainment",2022-09-20,Singapore
    8016,Checking,32.39,Walmart,"Entertainment, Transportation, Dining",2022-11-18,Australia
    8017,Checking,55.89,Walmart,"Dining, Travel, Groceries, General Expenses, Entertainment, Transportation",2022-09-04,Indonesia
    8018,Joint Account,484.81,Google,General Expenses,2022-08-14,Japan
    8019,Checking,576.26,Amazon,Dining,2022-07-01,Indonesia
    8020,Checking,210.8,Walmart,"Dining, Transportation, Groceries, Travel",2022-06-13,Indonesia
    8021,Joint Account,646.77,Starbucks,Groceries,2022-12-06,Singapore
    8022,Savings,346.35,ACME,"Entertainment, Dining, Travel, General Expenses, Transportation",2022-11-08,Indonesia
    8023,Savings,573.68,ACME,"Groceries, Travel, General Expenses, Entertainment, Transportation",2022-07-20,Indonesia
    8024,Joint Account,791.56,Grab,Travel,2022-11-14,Singapore
    8025,Checking,283.49,Gojek,"Dining, Travel, General Expenses, Groceries, Entertainment",2022-12-07,Australia
    8026,Checking,147.99,Fairprice,"Groceries, Travel, Entertainment, Transportation",2022-12-06,Japan
    8027,Checking,234.41,ACME,"Transportation, Travel, Dining, Groceries, Entertainment, General Expenses",2022-08-19,Australia
    8028,Savings,400.87,Google,"Transportation, Travel, Groceries, Dining",2022-08-09,Singapore
    8029,Savings,984.89,Amazon,"Groceries, Entertainment",2022-06-23,Australia
    8030,Checking,509.01,Grab,"Dining, Transportation",2022-08-02,Indonesia
    8031,Joint Account,788.29,ACME,Dining,2022-12-07,Japan
    8032,Checking,551.83,Amazon,"Entertainment, Groceries, Travel, Transportation, Dining, General Expenses",2022-07-02,Singapore
    8033,Savings,164.03,Starbucks,"Dining, Travel",2022-08-23,Indonesia
    8034,Joint Account,976.0,Uber,"Groceries, Transportation, Entertainment, General Expenses, Dining",2022-11-10,Japan
    8035,Joint Account,401.64,Amazon,"Transportation, General Expenses",2022-11-07,Singapore
    8036,Savings,751.13,Walmart,"Dining, General Expenses",2022-10-28,Japan
    8037,Savings,359.23,Grab,"Groceries, General Expenses, Entertainment, Travel",2022-10-21,Australia
    8038,Savings,825.15,Grab,"Groceries, Dining, Travel, General Expenses",2022-06-01,Indonesia
    8039,Savings,850.01,Grab,Travel,2022-10-11,Australia
    8040,Joint Account,141.51,Grab,"Groceries, Transportation, Entertainment, Dining, General Expenses, Travel",2022-10-06,Indonesia
    8041,Checking,488.57,Grab,"Travel, Transportation, Dining, Entertainment, Groceries, General Expenses",2022-08-07,Indonesia
    8042,Checking,705.17,Walmart,General Expenses,2022-11-22,Indonesia
    8043,Checking,1.32,Walmart,"Transportation, Dining, Groceries, Travel, General Expenses",2022-06-21,Singapore
    8044,Checking,803.42,Walmart,"Groceries, Entertainment, Travel",2022-10-11,Japan
    8045,Joint Account,732.97,Google,"Transportation, Groceries, Travel, General Expenses, Dining, Entertainment",2022-12-15,Singapore
    8046,Joint Account,366.52,Uber,"Dining, Groceries",2022-07-17,Japan
    8047,Joint Account,691.96,Gojek,"Dining, Travel, Groceries, Entertainment, Transportation",2022-09-29,Indonesia
    8048,Checking,924.42,Google,Entertainment,2022-11-08,Japan
    8049,Joint Account,988.32,Amazon,"General Expenses, Entertainment",2022-10-23,Australia
    8050,Joint Account,120.01,Uber,Transportation,2022-09-11,Australia
    8051,Joint Account,221.15,Gojek,"Entertainment, General Expenses, Transportation",2022-07-08,Indonesia
    8052,Checking,844.83,Fairprice,"General Expenses, Travel, Groceries, Transportation, Dining",2022-08-14,Australia
    8053,Checking,113.15,Gojek,"Dining, Entertainment, Travel, Groceries",2022-10-09,Indonesia
    8054,Joint Account,827.05,Uber,Dining,2022-09-19,Indonesia
    8055,Joint Account,77.82,Fairprice,"Groceries, Dining, Travel, General Expenses",2022-07-19,Australia
    8056,Joint Account,400.03,Uber,General Expenses,2022-08-16,Singapore
    8057,Joint Account,992.78,Google,"Dining, General Expenses",2022-09-10,Australia
    8058,Savings,596.51,Walmart,"Groceries, Transportation",2022-10-16,Australia
    8059,Joint Account,26.54,Google,"General Expenses, Entertainment, Transportation",2022-09-08,Singapore
    8060,Savings,208.24,Uber,"Transportation, Entertainment, General Expenses, Groceries",2022-07-29,Australia
    8061,Checking,69.85,Fairprice,"Travel, Transportation",2022-09-07,Australia
    8062,Checking,345.53,Walmart,Transportation,2022-06-09,Singapore
    8063,Checking,23.97,Gojek,Entertainment,2022-11-08,Singapore
    8064,Savings,514.68,Walmart,"Dining, Travel, Groceries, Entertainment",2022-08-06,Singapore
    8065,Checking,738.9,Google,"Travel, Transportation, Groceries, General Expenses, Entertainment",2022-07-04,Singapore
    8066,Checking,891.39,Grab,"General Expenses, Dining, Transportation, Groceries, Entertainment",2022-10-08,Australia
    8067,Checking,897.56,Grab,"Transportation, Entertainment, Groceries, Dining",2022-07-30,Indonesia
    8068,Savings,269.23,Walmart,"Groceries, General Expenses",2022-10-18,Australia
    8069,Checking,434.0,Grab,"General Expenses, Transportation",2022-09-21,Japan
    8070,Savings,121.3,Google,"Travel, Dining, Transportation, General Expenses",2022-07-18,Singapore
    8071,Savings,264.8,Fairprice,Groceries,2022-12-30,Japan
    8072,Savings,118.93,Amazon,Travel,2022-12-02,Australia
    8073,Savings,517.17,Fairprice,"Transportation, Entertainment, Dining, Travel, Groceries, General Expenses",2022-10-28,Japan
    8074,Checking,107.19,Walmart,"Dining, Entertainment, Groceries, General Expenses, Travel, Transportation",2022-09-02,Australia
    8075,Joint Account,845.07,ACME,"Groceries, Dining",2022-09-02,Singapore
    8076,Checking,105.21,Starbucks,"Entertainment, Transportation, Dining, Travel, Groceries",2022-06-18,Australia
    8077,Checking,646.99,Starbucks,"Transportation, Groceries, General Expenses, Entertainment, Travel",2022-07-09,Japan
    8078,Joint Account,807.12,ACME,"Dining, Transportation, Travel, General Expenses",2022-10-17,Australia
    8079,Savings,592.71,Google,"General Expenses, Transportation, Entertainment, Travel, Dining",2022-08-14,Japan
    8080,Joint Account,916.9,Google,"General Expenses, Transportation, Travel, Entertainment, Dining",2022-11-27,Singapore
    8081,Checking,710.39,Grab,"Transportation, Travel",2022-09-17,Singapore
    8082,Checking,378.73,Fairprice,"Transportation, General Expenses",2022-10-08,Indonesia
    8083,Checking,487.54,Uber,"Groceries, General Expenses, Entertainment, Travel",2022-08-31,Indonesia
    8084,Checking,1.63,Amazon,"Transportation, Entertainment, Dining, Travel",2022-08-26,Singapore
    8085,Savings,563.75,Starbucks,"Dining, Groceries, General Expenses, Entertainment, Transportation",2022-09-16,Japan
    8086,Joint Account,422.36,ACME,"Travel, Dining, Groceries, Entertainment",2022-08-30,Indonesia
    8087,Savings,234.08,Amazon,"Groceries, General Expenses, Travel",2022-07-31,Singapore
    8088,Joint Account,224.76,Uber,Transportation,2022-06-08,Australia
    8089,Checking,452.92,Fairprice,"Transportation, Entertainment",2022-10-29,Australia
    8090,Savings,916.78,Fairprice,"General Expenses, Entertainment",2022-08-25,Japan
    8091,Checking,462.84,Walmart,"Dining, General Expenses",2022-10-30,Singapore
    8092,Joint Account,516.53,Google,Entertainment,2022-12-20,Indonesia
    8093,Savings,964.43,Amazon,"Groceries, Travel, Entertainment, Transportation, Dining",2022-12-20,Australia
    8094,Joint Account,761.4,Starbucks,"Dining, Transportation, Entertainment, Travel",2022-07-26,Australia
    8095,Savings,821.17,ACME,"Entertainment, Dining, Travel, General Expenses, Groceries, Transportation",2022-11-22,Singapore
    8096,Savings,813.54,Walmart,"General Expenses, Groceries, Dining",2022-11-17,Indonesia
    8097,Savings,92.97,Uber,"Groceries, Travel, Dining, Entertainment, General Expenses",2022-06-15,Indonesia
    8098,Joint Account,673.76,ACME,General Expenses,2022-06-24,Japan
    8099,Checking,583.52,Walmart,"Groceries, Transportation, Entertainment",2022-09-12,Indonesia
    8100,Joint Account,72.88,Fairprice,"Dining, Groceries, Transportation, Entertainment",2022-10-27,Singapore
    8101,Savings,557.33,Grab,"Travel, Dining, General Expenses",2022-12-20,Australia
    8102,Savings,361.45,Grab,"Groceries, Dining, Travel, Entertainment, General Expenses",2022-06-16,Japan
    8103,Savings,370.12,ACME,"Entertainment, General Expenses, Groceries, Travel, Dining, Transportation",2022-10-23,Australia
    8104,Savings,846.98,Grab,"Travel, Entertainment, Groceries, General Expenses, Dining, Transportation",2022-08-01,Japan
    8105,Checking,341.19,Amazon,Dining,2022-08-14,Indonesia
    8106,Joint Account,840.78,ACME,"Dining, General Expenses, Transportation, Entertainment, Travel",2022-10-11,Indonesia
    8107,Savings,985.57,Walmart,"Dining, Entertainment, General Expenses, Travel",2022-09-24,Indonesia
    8108,Joint Account,654.1,Walmart,"Groceries, Dining, Travel, General Expenses",2022-09-14,Singapore
    8109,Joint Account,413.67,Google,"Travel, General Expenses, Groceries, Dining, Transportation, Entertainment",2022-12-26,Australia
    8110,Checking,972.11,Fairprice,"Groceries, General Expenses, Entertainment, Transportation",2022-06-24,Indonesia
    8111,Joint Account,826.07,Starbucks,"General Expenses, Dining, Travel, Entertainment, Transportation",2022-09-03,Japan
    8112,Savings,64.97,Fairprice,"General Expenses, Dining, Travel, Entertainment",2022-08-10,Australia
    8113,Savings,369.44,Google,"Groceries, Transportation, Dining, Travel, General Expenses, Entertainment",2022-08-19,Australia
    8114,Checking,835.74,Gojek,"Dining, Transportation, Travel, Entertainment, Groceries, General Expenses",2022-08-18,Japan
    8115,Joint Account,121.43,Google,"General Expenses, Travel, Groceries, Dining",2022-06-05,Singapore
    8116,Checking,147.27,ACME,"Transportation, Groceries, General Expenses",2022-06-04,Singapore
    8117,Joint Account,325.69,Starbucks,"Entertainment, Dining, Travel, Transportation, Groceries",2022-10-27,Singapore
    8118,Joint Account,404.64,Uber,"Groceries, Travel, General Expenses, Transportation, Entertainment",2022-11-03,Japan
    8119,Savings,398.22,Uber,"General Expenses, Travel, Transportation",2022-12-03,Singapore
    8120,Joint Account,72.87,Walmart,"Dining, Groceries, Transportation, Travel",2022-06-28,Singapore
    8121,Joint Account,805.9,Starbucks,"Entertainment, Travel",2022-07-03,Japan
    8122,Checking,917.02,Google,General Expenses,2022-08-25,Australia
    8123,Savings,482.42,Gojek,"Transportation, Groceries",2022-09-06,Japan
    8124,Savings,704.22,ACME,"Dining, Transportation, Groceries",2022-08-17,Indonesia
    8125,Savings,176.82,Starbucks,"Travel, General Expenses, Dining, Entertainment, Groceries",2022-12-21,Japan
    8126,Checking,574.53,Uber,"Travel, Entertainment",2022-06-20,Japan
    8127,Joint Account,842.12,Google,"Groceries, Entertainment, General Expenses",2022-09-02,Singapore
    8128,Checking,810.5,Fairprice,"General Expenses, Dining, Travel",2022-07-31,Japan
    8129,Savings,292.51,ACME,"Groceries, Entertainment, Travel, General Expenses, Transportation, Dining",2022-11-29,Japan
    8130,Savings,618.26,ACME,"Groceries, Dining, Transportation, General Expenses, Travel",2022-07-16,Japan
    8131,Checking,927.15,Amazon,"General Expenses, Entertainment, Groceries, Travel, Transportation, Dining",2022-12-22,Singapore
    8132,Checking,653.83,Google,"Travel, Entertainment, Dining",2022-12-19,Singapore
    8133,Savings,828.16,Starbucks,Travel,2022-09-08,Singapore
    8134,Joint Account,100.52,Grab,"Transportation, Travel, Entertainment, Dining",2022-11-14,Indonesia
    8135,Joint Account,849.05,Fairprice,"Entertainment, Groceries, Dining, Transportation",2022-08-03,Singapore
    8136,Checking,692.53,Fairprice,"Groceries, Transportation, Entertainment, Dining, General Expenses",2022-11-25,Indonesia
    8137,Joint Account,718.8,ACME,"Groceries, Dining, Transportation",2022-07-10,Singapore
    8138,Checking,201.24,Fairprice,"General Expenses, Dining, Travel, Entertainment, Groceries, Transportation",2022-12-08,Singapore
    8139,Joint Account,807.79,Uber,"Travel, General Expenses",2022-12-20,Australia
    8140,Checking,523.98,Fairprice,"Transportation, General Expenses, Travel, Dining, Entertainment",2022-08-21,Australia
    8141,Checking,894.14,Grab,"Entertainment, Groceries, Travel, Dining, Transportation, General Expenses",2022-07-30,Australia
    8142,Checking,676.06,Gojek,"Transportation, Travel, Groceries, Entertainment",2022-08-20,Indonesia
    8143,Joint Account,403.6,Grab,Dining,2022-11-03,Australia
    8144,Savings,57.38,Starbucks,"Dining, Travel",2022-09-27,Australia
    8145,Checking,283.43,Uber,"Groceries, Travel, Dining, General Expenses, Transportation",2022-12-11,Indonesia
    8146,Joint Account,760.96,Walmart,Groceries,2022-08-19,Indonesia
    8147,Joint Account,897.72,Fairprice,"Transportation, Groceries, Entertainment, General Expenses, Travel",2022-09-09,Singapore
    8148,Joint Account,282.53,Starbucks,"Travel, Entertainment",2022-12-11,Australia
    8149,Savings,839.04,Fairprice,"Groceries, Dining, Transportation, Travel, Entertainment, General Expenses",2022-08-28,Japan
    8150,Joint Account,721.17,Google,"Travel, General Expenses, Entertainment",2022-10-12,Japan
    8151,Joint Account,237.37,Starbucks,"Travel, General Expenses, Groceries, Dining, Entertainment",2022-10-13,Japan
    8152,Savings,355.47,Starbucks,"Travel, Entertainment, General Expenses, Transportation",2022-07-15,Japan
    8153,Checking,386.9,ACME,"General Expenses, Entertainment, Transportation, Groceries, Travel, Dining",2022-10-16,Japan
    8154,Joint Account,985.48,Amazon,General Expenses,2022-06-14,Australia
    8155,Joint Account,828.1,ACME,"Travel, Entertainment, Groceries, Dining, General Expenses, Transportation",2022-11-02,Singapore
    8156,Joint Account,453.36,Grab,"General Expenses, Groceries, Travel",2022-09-21,Japan
    8157,Joint Account,183.11,Walmart,"Groceries, Dining, General Expenses, Travel, Transportation",2022-08-10,Singapore
    8158,Savings,178.85,Starbucks,"Dining, General Expenses, Groceries",2022-10-07,Japan
    8159,Savings,950.4,Grab,"Groceries, General Expenses, Travel, Transportation, Dining, Entertainment",2022-10-28,Japan
    8160,Joint Account,221.24,Google,Travel,2022-08-18,Australia
    8161,Savings,116.61,ACME,"General Expenses, Dining, Travel, Groceries, Entertainment",2022-11-15,Japan
    8162,Joint Account,84.48,Amazon,"Groceries, Transportation",2022-12-24,Japan
    8163,Joint Account,206.37,Gojek,Dining,2022-07-17,Indonesia
    8164,Savings,921.93,Starbucks,"Dining, Transportation, Entertainment, Groceries, General Expenses, Travel",2022-07-31,Japan
    8165,Checking,869.32,ACME,"Entertainment, Groceries, Dining",2022-06-05,Japan
    8166,Savings,499.67,Amazon,"Dining, Travel",2022-10-20,Australia
    8167,Joint Account,691.36,Fairprice,Groceries,2022-09-15,Japan
    8168,Joint Account,185.16,Gojek,"Entertainment, Travel, Dining, Groceries",2022-10-28,Australia
    8169,Joint Account,532.76,Starbucks,Entertainment,2022-10-03,Australia
    8170,Savings,426.33,Uber,"Transportation, Groceries, Entertainment, Travel",2022-06-12,Singapore
    8171,Joint Account,513.95,Starbucks,"General Expenses, Dining, Travel, Entertainment, Groceries",2022-11-05,Indonesia
    8172,Savings,152.47,Google,"General Expenses, Entertainment, Transportation, Travel, Dining, Groceries",2022-10-08,Japan
    8173,Savings,458.66,Gojek,"General Expenses, Transportation, Groceries, Travel, Dining",2022-07-29,Australia
    8174,Checking,312.07,Walmart,"General Expenses, Transportation",2022-09-10,Indonesia
    8175,Joint Account,942.19,Grab,"Travel, Groceries",2022-12-10,Australia
    8176,Savings,676.37,Google,"Dining, Entertainment, Transportation, Groceries, Travel",2022-12-05,Japan
    8177,Checking,874.4,Fairprice,"Travel, Transportation, Groceries",2022-10-12,Singapore
    8178,Joint Account,646.12,ACME,"Groceries, Entertainment, Transportation",2022-07-02,Australia
    8179,Savings,704.1,Amazon,"Dining, Transportation, General Expenses, Travel, Groceries",2022-07-13,Japan
    8180,Savings,539.01,Grab,"Transportation, Travel, Entertainment, Groceries",2022-06-17,Japan
    8181,Joint Account,36.54,ACME,"Travel, Transportation",2022-08-20,Indonesia
    8182,Checking,456.41,Google,"Groceries, Travel",2022-06-03,Japan
    8183,Joint Account,655.67,Uber,"Entertainment, Dining, Transportation, Groceries",2022-07-11,Japan
    8184,Joint Account,689.71,Fairprice,General Expenses,2022-12-21,Japan
    8185,Checking,733.51,Amazon,"General Expenses, Dining, Groceries, Entertainment, Transportation",2022-09-11,Australia
    8186,Checking,364.27,Fairprice,"Groceries, Transportation",2022-09-13,Australia
    8187,Joint Account,667.66,ACME,Travel,2022-11-19,Japan
    8188,Savings,952.83,Google,Transportation,2022-07-15,Indonesia
    8189,Savings,708.36,Gojek,"General Expenses, Transportation, Groceries",2022-06-09,Singapore
    8190,Joint Account,502.28,Walmart,General Expenses,2022-11-27,Australia
    8191,Checking,760.19,Google,"Dining, Entertainment, Transportation, Groceries, Travel, General Expenses",2022-10-25,Singapore
    8192,Checking,473.63,Gojek,Transportation,2022-10-10,Japan
    8193,Savings,868.99,Uber,"Travel, Transportation, General Expenses, Entertainment, Dining",2022-06-19,Australia
    8194,Joint Account,561.27,Uber,"Transportation, Entertainment, Travel, Groceries, Dining, General Expenses",2022-10-05,Singapore
    8195,Savings,97.45,Google,"Dining, Groceries",2022-10-07,Japan
    8196,Joint Account,904.92,Starbucks,"Travel, Transportation, Groceries, General Expenses",2022-09-14,Australia
    8197,Joint Account,857.79,Starbucks,"Transportation, Dining, Travel, General Expenses, Entertainment",2022-06-19,Singapore
    8198,Savings,715.89,Amazon,"Entertainment, Dining, General Expenses",2022-10-09,Singapore
    8199,Savings,302.27,Google,"General Expenses, Groceries, Transportation, Entertainment, Travel, Dining",2022-12-20,Australia
    8200,Savings,190.42,Google,"Dining, Travel, Entertainment, Groceries",2022-10-07,Singapore
    8201,Checking,621.16,Grab,"Transportation, Travel, General Expenses, Dining, Entertainment",2022-11-21,Japan
    8202,Savings,173.34,Google,"General Expenses, Groceries",2022-11-29,Japan
    8203,Joint Account,237.17,Uber,"Travel, Dining, Transportation, General Expenses",2022-11-09,Australia
    8204,Checking,103.5,Starbucks,Entertainment,2022-07-03,Singapore
    8205,Checking,229.5,Uber,"Entertainment, Transportation, Dining, General Expenses, Travel, Groceries",2022-09-02,Australia
    8206,Checking,803.41,Walmart,"Travel, General Expenses",2022-09-01,Indonesia
    8207,Joint Account,80.46,Starbucks,"Entertainment, Groceries, Transportation, General Expenses, Travel, Dining",2022-08-13,Indonesia
    8208,Joint Account,176.15,Grab,"Dining, Entertainment, Travel",2022-11-07,Indonesia
    8209,Savings,599.65,Grab,"General Expenses, Dining, Groceries, Travel, Transportation",2022-10-02,Indonesia
    8210,Checking,647.77,Google,"Dining, General Expenses, Travel",2022-10-11,Australia
    8211,Joint Account,168.69,ACME,"Transportation, Travel, Entertainment, Groceries, Dining, General Expenses",2022-11-30,Indonesia
    8212,Joint Account,280.8,Gojek,"General Expenses, Transportation, Dining, Groceries, Entertainment",2022-12-28,Australia
    8213,Savings,158.95,Amazon,"Dining, Travel, Entertainment",2022-11-14,Singapore
    8214,Checking,351.97,Gojek,"Transportation, Groceries, Entertainment, General Expenses, Travel",2022-06-10,Indonesia
    8215,Checking,667.29,Amazon,Groceries,2022-08-19,Indonesia
    8216,Joint Account,216.72,Fairprice,"Dining, General Expenses, Groceries",2022-06-13,Japan
    8217,Checking,918.78,Google,"Entertainment, General Expenses, Transportation, Travel, Dining",2022-09-29,Australia
    8218,Savings,64.19,Uber,"Entertainment, Dining, General Expenses, Groceries",2022-08-27,Australia
    8219,Savings,564.85,Starbucks,Dining,2022-12-02,Singapore
    8220,Joint Account,730.32,Walmart,"Travel, Transportation, Dining, Groceries, General Expenses",2022-07-16,Indonesia
    8221,Savings,818.04,Starbucks,"Travel, Dining, Entertainment, General Expenses",2022-10-21,Singapore
    8222,Joint Account,282.9,Amazon,"Groceries, General Expenses, Entertainment, Dining",2022-11-26,Australia
    8223,Joint Account,865.31,Fairprice,"Travel, Entertainment",2022-09-23,Singapore
    8224,Joint Account,256.65,Fairprice,"Groceries, Entertainment",2022-06-17,Japan
    8225,Joint Account,623.35,Gojek,"Groceries, Transportation",2022-08-19,Australia
    8226,Checking,589.99,Google,"Transportation, Groceries",2022-09-04,Australia
    8227,Checking,440.58,Grab,"Transportation, Dining, Travel, Entertainment",2022-08-27,Singapore
    8228,Savings,392.07,Walmart,"Transportation, Groceries, General Expenses",2022-07-28,Japan
    8229,Joint Account,74.12,Amazon,"Groceries, Travel",2022-07-06,Singapore
    8230,Checking,630.32,Gojek,"General Expenses, Dining, Entertainment, Groceries, Transportation",2022-06-30,Indonesia
    8231,Joint Account,317.38,Walmart,General Expenses,2022-08-27,Indonesia
    8232,Checking,67.76,Starbucks,"Groceries, Transportation, Entertainment, Dining, General Expenses",2022-08-21,Singapore
    8233,Joint Account,452.48,Starbucks,"Dining, Entertainment, General Expenses, Transportation, Travel",2022-08-29,Japan
    8234,Savings,906.77,Amazon,"Transportation, Travel, Entertainment, General Expenses, Groceries",2022-11-04,Singapore
    8235,Joint Account,896.48,Grab,"Entertainment, General Expenses, Transportation",2022-11-03,Indonesia
    8236,Savings,972.5,ACME,"Dining, General Expenses, Entertainment, Groceries, Transportation",2022-12-30,Indonesia
    8237,Checking,64.49,Walmart,"General Expenses, Groceries, Entertainment, Transportation, Dining, Travel",2022-06-13,Australia
    8238,Joint Account,505.26,Grab,"Transportation, Groceries",2022-12-08,Indonesia
    8239,Savings,388.05,Google,"Travel, Dining, Groceries, General Expenses, Transportation",2022-11-04,Singapore
    8240,Savings,260.28,Uber,Groceries,2022-11-14,Japan
    8241,Checking,234.72,Amazon,"Dining, Travel, Groceries, Entertainment, General Expenses",2022-12-04,Indonesia
    8242,Checking,774.92,Amazon,Transportation,2022-10-16,Japan
    8243,Joint Account,598.93,Starbucks,"Dining, Entertainment, Transportation",2022-07-06,Japan
    8244,Savings,189.87,Google,"Entertainment, Dining, Transportation, Travel",2022-06-18,Australia
    8245,Savings,380.15,Grab,"Travel, Transportation, Groceries, Dining, Entertainment, General Expenses",2022-07-18,Japan
    8246,Checking,254.81,Uber,"Dining, Groceries, General Expenses, Entertainment",2022-10-10,Japan
    8247,Joint Account,231.31,Walmart,"Dining, Transportation",2022-12-03,Indonesia
    8248,Checking,827.45,ACME,Entertainment,2022-06-03,Singapore
    8249,Joint Account,268.01,Grab,"Dining, General Expenses, Entertainment",2022-08-18,Australia
    8250,Savings,349.87,Amazon,"Travel, Transportation",2022-06-10,Australia
    8251,Joint Account,636.02,Walmart,"Travel, General Expenses, Entertainment, Dining, Transportation, Groceries",2022-11-30,Singapore
    8252,Savings,584.94,Grab,"Travel, Entertainment, Transportation, General Expenses, Groceries",2022-06-09,Australia
    8253,Joint Account,209.24,Fairprice,"Dining, Groceries, Entertainment, General Expenses, Transportation, Travel",2022-10-28,Australia
    8254,Joint Account,52.38,Walmart,"Travel, General Expenses, Dining, Entertainment",2022-12-17,Indonesia
    8255,Checking,390.77,Gojek,"Groceries, Entertainment, Dining",2022-12-21,Singapore
    8256,Savings,494.74,Walmart,"Groceries, Dining, General Expenses, Transportation",2022-07-06,Australia
    8257,Checking,897.66,Amazon,"General Expenses, Transportation, Groceries",2022-06-22,Singapore
    8258,Checking,924.8,Fairprice,General Expenses,2022-08-16,Indonesia
    8259,Savings,458.32,ACME,"Travel, General Expenses, Groceries",2022-12-16,Indonesia
    8260,Joint Account,382.41,Grab,"General Expenses, Transportation, Groceries, Entertainment",2022-08-08,Japan
    8261,Checking,280.66,Grab,"General Expenses, Transportation, Entertainment",2022-11-07,Japan
    8262,Joint Account,572.97,Walmart,"Travel, Transportation, Dining, Entertainment",2022-08-05,Singapore
    8263,Joint Account,244.47,Gojek,Entertainment,2022-06-24,Singapore
    8264,Checking,533.45,Starbucks,"Dining, Transportation, General Expenses, Travel, Entertainment",2022-07-13,Indonesia
    8265,Savings,198.21,Uber,Dining,2022-06-17,Japan
    8266,Checking,255.02,Google,Dining,2022-09-06,Japan
    8267,Checking,297.03,Fairprice,"Dining, Travel",2022-12-03,Indonesia
    8268,Checking,443.72,Amazon,Dining,2022-07-05,Japan
    8269,Joint Account,894.99,Fairprice,"Groceries, Travel, Dining",2022-12-21,Indonesia
    8270,Savings,669.88,Fairprice,"Dining, Travel, Transportation, Groceries, Entertainment, General Expenses",2022-06-06,Indonesia
    8271,Savings,145.66,Fairprice,Groceries,2022-11-24,Singapore
    8272,Savings,562.58,Google,"Entertainment, Transportation, Dining, Groceries, Travel",2022-12-06,Japan
    8273,Joint Account,169.22,Grab,"Entertainment, General Expenses, Transportation",2022-12-04,Japan
    8274,Joint Account,765.9,Amazon,"Entertainment, Travel",2022-11-29,Japan
    8275,Checking,246.13,Fairprice,"Dining, General Expenses, Transportation, Groceries",2022-08-18,Indonesia
    8276,Checking,787.43,Grab,"Entertainment, General Expenses, Transportation, Groceries, Dining, Travel",2022-10-05,Japan
    8277,Savings,475.81,Walmart,"Groceries, Dining",2022-11-02,Australia
    8278,Checking,405.02,Gojek,"Transportation, Entertainment, Dining, Travel, General Expenses",2022-06-30,Singapore
    8279,Checking,431.48,Walmart,"Groceries, General Expenses",2022-08-19,Singapore
    8280,Joint Account,14.44,Gojek,"Dining, General Expenses",2022-08-05,Japan
    8281,Savings,889.53,Uber,"Entertainment, Groceries",2022-11-08,Singapore
    8282,Joint Account,352.82,Gojek,"Dining, Travel",2022-12-30,Japan
    8283,Savings,899.85,Uber,Groceries,2022-06-20,Singapore
    8284,Savings,933.12,Fairprice,"Transportation, Dining, Entertainment, Groceries, Travel",2022-06-09,Australia
    8285,Joint Account,708.76,Amazon,"Groceries, Dining, Entertainment",2022-10-08,Australia
    8286,Savings,24.67,ACME,"Groceries, Dining",2022-11-24,Indonesia
    8287,Savings,298.67,Fairprice,"Dining, Groceries, Travel",2022-09-11,Australia
    8288,Checking,75.31,Fairprice,"Entertainment, Groceries, Travel, General Expenses, Transportation",2022-06-19,Australia
    8289,Savings,375.78,Fairprice,"Travel, General Expenses, Transportation",2022-06-09,Australia
    8290,Joint Account,623.25,Starbucks,"Groceries, Entertainment, General Expenses",2022-12-24,Singapore
    8291,Checking,278.92,Google,"Entertainment, Transportation, Dining",2022-09-29,Singapore
    8292,Checking,843.16,Gojek,"Groceries, General Expenses, Transportation",2022-09-19,Japan
    8293,Savings,215.66,Amazon,"Dining, Travel",2022-09-28,Singapore
    8294,Checking,689.13,Amazon,"Travel, Groceries, General Expenses",2022-10-02,Japan
    8295,Checking,562.12,Uber,"Transportation, Travel, Dining, Entertainment",2022-12-13,Singapore
    8296,Checking,412.62,Amazon,"Travel, Transportation, General Expenses, Dining",2022-08-10,Japan
    8297,Savings,43.29,Gojek,"Transportation, Dining, Groceries",2022-11-10,Australia
    8298,Checking,5.42,Starbucks,"Travel, Groceries, Entertainment",2022-10-24,Singapore
    8299,Checking,107.76,Grab,"Transportation, Travel, Entertainment, Dining, General Expenses",2022-10-27,Australia
    8300,Savings,420.87,ACME,"Travel, Groceries, General Expenses, Dining",2022-08-02,Singapore
    8301,Joint Account,619.55,Walmart,Travel,2022-10-15,Japan
    8302,Checking,546.68,Gojek,Dining,2022-10-11,Japan
    8303,Savings,243.53,ACME,"Dining, Entertainment, Groceries, Travel, General Expenses, Transportation",2022-07-27,Singapore
    8304,Joint Account,129.76,Fairprice,"Transportation, Travel, Dining, Entertainment",2022-08-28,Indonesia
    8305,Savings,886.52,Grab,"Dining, Groceries, Travel, Transportation, Entertainment",2022-10-17,Australia
    8306,Joint Account,525.7,Walmart,"Entertainment, General Expenses, Groceries, Travel, Transportation, Dining",2022-12-31,Singapore
    8307,Savings,26.71,Starbucks,"Dining, General Expenses, Transportation, Entertainment",2022-08-19,Australia
    8308,Joint Account,356.63,ACME,Transportation,2022-11-15,Singapore
    8309,Joint Account,765.7,Amazon,"Transportation, Travel, General Expenses, Groceries",2022-09-18,Indonesia
    8310,Joint Account,552.58,Uber,"Groceries, Transportation",2022-12-22,Indonesia
    8311,Savings,3.28,Google,"Entertainment, Dining",2022-12-22,Australia
    8312,Joint Account,36.93,Starbucks,"Travel, Transportation, Entertainment, Groceries, Dining",2022-09-20,Australia
    8313,Savings,386.41,Uber,"Transportation, Entertainment, General Expenses, Dining, Groceries",2022-08-18,Japan
    8314,Savings,49.11,Amazon,Dining,2022-07-24,Japan
    8315,Checking,972.03,Uber,"Entertainment, General Expenses, Travel, Transportation, Dining",2022-12-29,Japan
    8316,Joint Account,772.6,Starbucks,"General Expenses, Transportation, Travel, Groceries, Entertainment",2022-11-15,Australia
    8317,Checking,944.08,ACME,"Entertainment, General Expenses, Dining, Groceries, Transportation",2022-09-30,Australia
    8318,Joint Account,446.3,Google,"Travel, Entertainment, Dining, General Expenses",2022-08-04,Singapore
    8319,Joint Account,250.19,Uber,"Transportation, Dining",2022-06-06,Singapore
    8320,Savings,615.29,Fairprice,"Travel, Transportation, Dining, General Expenses, Groceries",2022-08-07,Japan
    8321,Joint Account,367.79,Fairprice,"Transportation, Groceries, Travel, General Expenses, Entertainment",2022-12-25,Australia
    8322,Joint Account,790.01,Google,"Entertainment, Travel, Transportation, Groceries",2022-06-14,Singapore
    8323,Checking,861.52,Grab,Groceries,2022-10-11,Indonesia
    8324,Checking,968.12,Grab,"General Expenses, Groceries, Dining, Transportation, Entertainment, Travel",2022-07-02,Singapore
    8325,Joint Account,194.74,Amazon,"Entertainment, Groceries, Transportation",2022-10-11,Australia
    8326,Joint Account,2.73,Google,"Groceries, Travel, General Expenses, Transportation",2022-10-01,Singapore
    8327,Savings,775.95,ACME,"Travel, General Expenses, Dining, Entertainment, Transportation",2022-08-21,Japan
    8328,Savings,523.29,Walmart,"Dining, Entertainment, Transportation, Groceries, General Expenses",2022-07-05,Singapore
    8329,Joint Account,478.64,ACME,"Entertainment, Dining, General Expenses, Transportation, Groceries",2022-07-24,Indonesia
    8330,Savings,774.26,Amazon,"Travel, Transportation, Groceries",2022-09-14,Indonesia
    8331,Savings,132.56,Grab,"Travel, Dining, General Expenses, Groceries",2022-10-09,Australia
    8332,Checking,419.95,Fairprice,"Transportation, General Expenses, Groceries, Dining, Entertainment, Travel",2022-12-24,Singapore
    8333,Joint Account,426.08,Walmart,"Entertainment, General Expenses, Travel",2022-12-02,Japan
    8334,Checking,603.57,Grab,"Groceries, Entertainment, Dining, General Expenses, Transportation",2022-12-25,Australia
    8335,Checking,28.82,ACME,"Entertainment, Groceries",2022-10-08,Indonesia
    8336,Checking,723.42,Grab,"Travel, General Expenses, Groceries",2022-12-08,Australia
    8337,Joint Account,562.41,Fairprice,"Travel, Dining, Transportation, General Expenses",2022-08-07,Australia
    8338,Joint Account,956.61,Google,"Dining, Entertainment, Travel",2022-11-19,Indonesia
    8339,Joint Account,83.51,Walmart,"Travel, Groceries",2022-07-13,Indonesia
    8340,Savings,728.21,Gojek,"Travel, General Expenses",2022-12-27,Australia
    8341,Checking,458.64,Starbucks,"General Expenses, Travel, Transportation, Entertainment",2022-06-26,Singapore
    8342,Savings,979.2,Fairprice,"Transportation, General Expenses, Entertainment, Dining, Groceries, Travel",2022-08-13,Australia
    8343,Checking,159.97,Walmart,"Travel, Entertainment, General Expenses",2022-08-22,Indonesia
    8344,Checking,462.36,Grab,"Entertainment, Travel, Transportation",2022-07-13,Indonesia
    8345,Checking,979.51,Walmart,"Dining, Groceries",2022-09-04,Australia
    8346,Checking,551.71,ACME,"Dining, Travel",2022-06-14,Japan
    8347,Joint Account,578.69,Starbucks,"General Expenses, Dining, Travel",2022-07-15,Japan
    8348,Joint Account,40.01,Google,"Transportation, Dining, Travel",2022-11-09,Japan
    8349,Savings,481.79,Google,"Dining, General Expenses, Travel, Transportation",2022-10-20,Australia
    8350,Savings,575.13,ACME,"Groceries, Transportation, Entertainment, Travel",2022-07-23,Australia
    8351,Checking,158.77,Fairprice,"Transportation, Travel",2022-11-12,Australia
    8352,Checking,331.96,Gojek,Dining,2022-07-18,Singapore
    8353,Savings,257.12,ACME,Dining,2022-07-05,Japan
    8354,Checking,82.87,Starbucks,General Expenses,2022-07-03,Singapore
    8355,Joint Account,365.24,Gojek,"Dining, Travel, Transportation, Entertainment, General Expenses",2022-08-31,Indonesia
    8356,Checking,796.96,Gojek,"Dining, Travel",2022-10-20,Indonesia
    8357,Checking,312.82,Google,"General Expenses, Groceries, Dining, Entertainment, Travel, Transportation",2022-08-14,Australia
    8358,Joint Account,351.69,Google,"Dining, Transportation, Travel, Entertainment, General Expenses, Groceries",2022-08-13,Singapore
    8359,Savings,739.04,Uber,"Travel, General Expenses",2022-09-27,Australia
    8360,Savings,732.78,Walmart,"Entertainment, Transportation, General Expenses",2022-08-21,Indonesia
    8361,Savings,766.92,ACME,"Groceries, Entertainment, Transportation, General Expenses",2022-08-03,Australia
    8362,Checking,394.54,Fairprice,"Travel, Groceries, Transportation",2022-10-26,Singapore
    8363,Checking,576.6,Amazon,"Groceries, Dining",2022-06-27,Australia
    8364,Joint Account,683.7,ACME,"General Expenses, Groceries, Dining, Entertainment",2022-08-10,Indonesia
    8365,Savings,705.77,Google,"Dining, Groceries, Entertainment, Transportation, Travel",2022-08-17,Indonesia
    8366,Checking,567.47,Uber,Dining,2022-06-29,Japan
    8367,Checking,923.26,Google,"Groceries, Dining, Travel, Entertainment, General Expenses, Transportation",2022-09-25,Singapore
    8368,Joint Account,233.42,Amazon,Transportation,2022-12-21,Indonesia
    8369,Checking,929.09,Amazon,Dining,2022-10-24,Indonesia
    8370,Savings,467.62,Gojek,"Entertainment, Groceries",2022-07-06,Singapore
    8371,Joint Account,859.7,Google,General Expenses,2022-12-20,Indonesia
    8372,Checking,870.49,Gojek,"Dining, Travel, Entertainment",2022-09-10,Indonesia
    8373,Savings,9.45,ACME,"Dining, Transportation, General Expenses, Groceries, Entertainment",2022-06-24,Japan
    8374,Savings,86.98,ACME,"Groceries, Entertainment",2022-06-21,Singapore
    8375,Checking,601.14,Gojek,Travel,2022-08-26,Japan
    8376,Checking,954.77,Fairprice,"Groceries, Dining, General Expenses",2022-09-02,Australia
    8377,Joint Account,133.81,Walmart,"Dining, Entertainment",2022-09-29,Indonesia
    8378,Joint Account,979.37,Grab,"Dining, Transportation",2022-09-08,Singapore
    8379,Joint Account,158.96,Uber,"Transportation, Dining, Groceries",2022-07-15,Japan
    8380,Savings,576.75,Starbucks,"Groceries, Transportation, Dining, General Expenses",2022-08-07,Singapore
    8381,Savings,788.03,Walmart,"Travel, General Expenses",2022-11-09,Singapore
    8382,Savings,347.08,Walmart,"Dining, Transportation, Groceries, Travel, Entertainment, General Expenses",2022-12-15,Japan
    8383,Checking,739.01,Fairprice,"Entertainment, Groceries, Dining, General Expenses, Transportation",2022-06-30,Indonesia
    8384,Checking,56.02,Starbucks,"General Expenses, Dining, Groceries, Transportation, Travel, Entertainment",2022-07-28,Singapore
    8385,Savings,733.52,Walmart,"Entertainment, Travel, Groceries, Transportation",2022-06-23,Japan
    8386,Checking,770.02,Grab,"Groceries, Travel, Entertainment, Dining",2022-11-09,Indonesia
    8387,Checking,354.69,Walmart,Transportation,2022-06-05,Japan
    8388,Checking,271.86,Fairprice,"General Expenses, Groceries",2022-10-11,Singapore
    8389,Savings,618.12,Grab,"Groceries, Entertainment",2022-06-15,Australia
    8390,Savings,750.22,ACME,Groceries,2022-06-25,Indonesia
    8391,Checking,201.76,Uber,"General Expenses, Dining",2022-06-23,Japan
    8392,Savings,688.61,ACME,"Entertainment, Groceries, Transportation, Dining",2022-09-25,Australia
    8393,Checking,30.98,Gojek,"Entertainment, Dining, Travel, Transportation",2022-12-10,Japan
    8394,Checking,802.91,Gojek,"General Expenses, Travel, Transportation, Entertainment, Groceries",2022-07-31,Singapore
    8395,Savings,388.35,Gojek,"Transportation, Groceries, General Expenses",2022-11-09,Indonesia
    8396,Savings,898.72,Starbucks,"Transportation, Dining, Travel, General Expenses, Groceries, Entertainment",2022-11-05,Singapore
    8397,Checking,787.33,Starbucks,"Groceries, Transportation, Dining",2022-08-09,Australia
    8398,Checking,60.43,Gojek,"General Expenses, Entertainment, Groceries",2022-11-17,Singapore
    8399,Joint Account,287.7,ACME,"Entertainment, Dining, Travel, Groceries, Transportation",2022-09-26,Indonesia
    8400,Checking,688.89,Uber,"Dining, General Expenses, Groceries, Travel, Transportation, Entertainment",2022-10-17,Japan
    8401,Savings,708.5,Walmart,"Travel, General Expenses",2022-11-06,Australia
    8402,Savings,629.71,Uber,Transportation,2022-07-09,Japan
    8403,Savings,747.47,Grab,General Expenses,2022-11-14,Singapore
    8404,Savings,707.5,Amazon,"Travel, Entertainment, Groceries",2022-09-11,Japan
    8405,Savings,712.82,Fairprice,"Travel, Entertainment, Groceries, Dining",2022-11-15,Australia
    8406,Savings,80.99,Google,"Entertainment, Travel, Dining, Groceries",2022-06-05,Singapore
    8407,Savings,177.45,Gojek,"Dining, Entertainment, Transportation, Travel, General Expenses, Groceries",2022-06-27,Japan
    8408,Joint Account,128.18,Walmart,"Transportation, Groceries",2022-07-03,Japan
    8409,Savings,628.32,Uber,"Entertainment, Travel",2022-06-10,Japan
    8410,Savings,713.38,ACME,"Dining, Groceries, Travel",2022-07-27,Japan
    8411,Checking,916.94,Gojek,Dining,2022-11-30,Indonesia
    8412,Joint Account,995.83,ACME,Transportation,2022-07-02,Japan
    8413,Savings,629.02,Walmart,"General Expenses, Groceries, Entertainment, Travel",2022-07-17,Japan
    8414,Joint Account,224.68,Google,"Groceries, Transportation, Dining, Travel, Entertainment",2022-11-02,Singapore
    8415,Savings,527.0,ACME,"Dining, Groceries, Transportation",2022-10-18,Singapore
    8416,Joint Account,892.85,Gojek,"Dining, Travel, General Expenses, Entertainment, Transportation, Groceries",2022-12-12,Japan
    8417,Checking,234.2,Fairprice,"General Expenses, Groceries",2022-09-14,Indonesia
    8418,Checking,434.89,Google,"Transportation, Dining, General Expenses, Travel",2022-10-09,Indonesia
    8419,Savings,737.24,ACME,"General Expenses, Dining",2022-12-26,Indonesia
    8420,Checking,237.58,Uber,"Groceries, Travel, General Expenses, Transportation, Dining, Entertainment",2022-11-11,Singapore
    8421,Joint Account,378.18,Google,Entertainment,2022-08-06,Japan
    8422,Checking,291.13,Starbucks,"Travel, Transportation",2022-06-27,Japan
    8423,Joint Account,809.52,Amazon,"Travel, Transportation, Entertainment, General Expenses",2022-12-04,Australia
    8424,Savings,937.55,Starbucks,"Transportation, Travel, General Expenses",2022-08-04,Indonesia
    8425,Checking,409.52,Amazon,"Travel, Entertainment, General Expenses",2022-06-09,Indonesia
    8426,Checking,878.54,Gojek,"Transportation, Groceries, Dining",2022-10-09,Singapore
    8427,Joint Account,924.97,Walmart,"General Expenses, Transportation",2022-12-18,Indonesia
    8428,Joint Account,624.01,Gojek,Dining,2022-10-11,Japan
    8429,Joint Account,972.45,Uber,"Groceries, Entertainment, Transportation, Dining",2022-11-10,Indonesia
    8430,Joint Account,112.76,Gojek,"Travel, General Expenses, Groceries, Dining, Entertainment",2022-12-13,Singapore
    8431,Savings,332.3,Walmart,"Entertainment, Transportation, Travel, Dining, General Expenses",2022-12-29,Australia
    8432,Joint Account,528.54,Starbucks,"Dining, General Expenses, Entertainment, Travel, Groceries",2022-10-08,Indonesia
    8433,Joint Account,108.18,Amazon,"General Expenses, Entertainment, Transportation, Groceries, Dining",2022-11-25,Japan
    8434,Checking,894.04,Walmart,Groceries,2022-11-28,Japan
    8435,Checking,88.35,Fairprice,"General Expenses, Entertainment",2022-09-18,Australia
    8436,Savings,332.66,Uber,"Transportation, General Expenses, Entertainment, Dining, Travel",2022-06-22,Japan
    8437,Joint Account,5.49,Grab,"Dining, Groceries, Transportation, General Expenses, Entertainment",2022-09-28,Japan
    8438,Savings,594.81,Gojek,"General Expenses, Groceries, Travel, Entertainment, Dining, Transportation",2022-12-06,Singapore
    8439,Joint Account,530.21,Gojek,Groceries,2022-11-25,Australia
    8440,Checking,446.98,Grab,"Groceries, Dining, Travel",2022-09-12,Indonesia
    8441,Savings,83.38,Gojek,"Transportation, Entertainment, Dining, General Expenses",2022-06-05,Japan
    8442,Joint Account,962.74,Fairprice,Travel,2022-08-09,Indonesia
    8443,Joint Account,439.41,Amazon,"Transportation, Dining",2022-10-02,Singapore
    8444,Checking,209.48,Starbucks,"Groceries, Entertainment, Transportation, General Expenses, Travel, Dining",2022-07-22,Japan
    8445,Joint Account,31.67,Gojek,"General Expenses, Entertainment, Dining, Transportation, Travel",2022-11-04,Japan
    8446,Joint Account,565.98,ACME,"Groceries, Travel, Transportation, General Expenses",2022-06-28,Indonesia
    8447,Checking,39.6,Grab,"Groceries, Entertainment, Transportation, General Expenses, Dining",2022-11-09,Australia
    8448,Joint Account,840.15,Grab,"Entertainment, Transportation, General Expenses, Dining",2022-09-11,Japan
    8449,Checking,374.37,Google,"Entertainment, Travel, Dining, General Expenses, Groceries, Transportation",2022-08-09,Japan
    8450,Checking,604.81,Amazon,"Transportation, Travel, General Expenses, Groceries",2022-10-09,Australia
    8451,Savings,156.48,Grab,"Entertainment, Transportation, General Expenses, Groceries, Travel",2022-08-29,Australia
    8452,Joint Account,345.33,Google,"General Expenses, Dining, Groceries, Entertainment",2022-09-04,Japan
    8453,Joint Account,37.58,Amazon,Dining,2022-06-15,Japan
    8454,Savings,394.23,Uber,"Groceries, Travel",2022-08-27,Australia
    8455,Joint Account,20.66,Fairprice,"Dining, Groceries, Travel",2022-10-23,Indonesia
    8456,Savings,824.45,Grab,"Travel, Dining, General Expenses, Transportation, Groceries",2022-10-26,Australia
    8457,Savings,969.1,Gojek,"Entertainment, Travel, Dining",2022-06-12,Indonesia
    8458,Checking,568.11,Amazon,"Groceries, Transportation, Travel, General Expenses, Dining, Entertainment",2022-08-15,Singapore
    8459,Savings,345.97,Amazon,"Entertainment, Groceries",2022-08-08,Singapore
    8460,Joint Account,835.25,Gojek,"Travel, Dining, Groceries, General Expenses, Transportation",2022-09-05,Indonesia
    8461,Savings,394.01,Fairprice,"Dining, Travel, Groceries, General Expenses, Transportation",2022-07-05,Singapore
    8462,Joint Account,822.99,Walmart,"Entertainment, Travel, General Expenses, Transportation, Groceries",2022-08-14,Indonesia
    8463,Savings,778.8,Walmart,"Dining, Entertainment",2022-09-20,Japan
    8464,Checking,929.62,Amazon,"Groceries, Transportation, General Expenses",2022-12-10,Australia
    8465,Checking,569.66,Google,"General Expenses, Travel, Transportation, Entertainment",2022-07-05,Singapore
    8466,Joint Account,570.82,Gojek,"Travel, Dining, Transportation, General Expenses",2022-10-02,Japan
    8467,Joint Account,526.27,ACME,"Entertainment, Travel, Dining, Transportation, General Expenses",2022-08-24,Japan
    8468,Checking,44.02,ACME,"Travel, Dining, Transportation, General Expenses, Entertainment, Groceries",2022-11-23,Singapore
    8469,Checking,453.45,Gojek,"Entertainment, Dining",2022-10-18,Singapore
    8470,Joint Account,796.9,Starbucks,"Travel, General Expenses, Dining",2022-07-07,Australia
    8471,Joint Account,80.09,Walmart,Dining,2022-08-28,Indonesia
    8472,Savings,503.28,Google,"Travel, Dining, Entertainment, General Expenses, Groceries",2022-11-08,Australia
    8473,Checking,31.12,Walmart,"Groceries, Transportation, Entertainment, Travel",2022-09-05,Singapore
    8474,Joint Account,382.89,Google,"Travel, Groceries",2022-09-14,Indonesia
    8475,Savings,822.44,Google,"General Expenses, Travel, Entertainment, Transportation, Groceries",2022-11-04,Indonesia
    8476,Checking,14.04,Google,"Transportation, General Expenses, Dining",2022-08-08,Australia
    8477,Checking,172.88,Google,"Groceries, Travel, Transportation, Entertainment, Dining",2022-09-07,Australia
    8478,Joint Account,202.78,Grab,"General Expenses, Transportation",2022-08-30,Indonesia
    8479,Joint Account,662.99,Uber,"Transportation, Travel, General Expenses",2022-12-28,Singapore
    8480,Savings,518.6,Fairprice,"Dining, Travel",2022-08-17,Singapore
    8481,Checking,213.67,Google,"Groceries, Travel, Dining, Transportation, General Expenses, Entertainment",2022-10-30,Singapore
    8482,Joint Account,222.69,Starbucks,"Transportation, General Expenses, Groceries",2022-11-03,Japan
    8483,Checking,612.97,Walmart,"Transportation, General Expenses, Travel, Groceries",2022-09-08,Japan
    8484,Joint Account,902.53,Starbucks,"Entertainment, Groceries, Dining, General Expenses, Travel",2022-09-20,Japan
    8485,Savings,259.16,Grab,"Entertainment, Travel",2022-12-25,Australia
    8486,Joint Account,169.62,Google,"Groceries, General Expenses, Dining, Entertainment",2022-08-18,Singapore
    8487,Savings,951.56,Starbucks,"General Expenses, Groceries, Transportation, Travel",2022-11-03,Singapore
    8488,Checking,560.66,Fairprice,General Expenses,2022-08-08,Japan
    8489,Checking,468.15,Gojek,"General Expenses, Travel, Groceries, Transportation, Entertainment, Dining",2022-12-17,Indonesia
    8490,Savings,575.84,Starbucks,Transportation,2022-07-26,Indonesia
    8491,Checking,199.2,Starbucks,"Entertainment, General Expenses",2022-09-08,Singapore
    8492,Joint Account,248.07,Gojek,"Transportation, Entertainment",2022-07-05,Singapore
    8493,Checking,603.35,Amazon,"General Expenses, Entertainment",2022-12-24,Australia
    8494,Checking,479.06,Fairprice,"General Expenses, Travel",2022-11-26,Australia
    8495,Joint Account,173.8,Gojek,"Travel, Transportation, Groceries, General Expenses, Entertainment, Dining",2022-10-07,Singapore
    8496,Joint Account,981.71,Starbucks,"Transportation, Entertainment, General Expenses, Groceries, Dining",2022-10-24,Japan
    8497,Checking,658.96,Uber,"Entertainment, Dining, Travel, Transportation, Groceries",2022-09-03,Australia
    8498,Checking,103.87,Walmart,General Expenses,2022-08-28,Japan
    8499,Checking,0.87,Grab,"Entertainment, Transportation, Groceries, General Expenses, Travel",2022-07-30,Indonesia
    8500,Checking,137.09,Walmart,"Groceries, Dining",2022-12-05,Singapore
    8501,Savings,872.46,Amazon,"Entertainment, Travel, Dining, Transportation, Groceries",2022-07-01,Indonesia
    8502,Savings,740.58,Fairprice,"Groceries, Dining, Transportation, Entertainment, Travel, General Expenses",2022-10-12,Indonesia
    8503,Joint Account,527.99,Walmart,"Groceries, General Expenses, Entertainment, Dining, Travel, Transportation",2022-09-03,Singapore
    8504,Savings,328.88,Amazon,"Dining, General Expenses",2022-11-09,Indonesia
    8505,Checking,483.24,Walmart,Dining,2022-10-10,Singapore
    8506,Savings,7.39,Gojek,"Dining, Groceries, Entertainment, Transportation, Travel",2022-06-23,Indonesia
    8507,Checking,231.02,Gojek,"Dining, Groceries, Travel, General Expenses",2022-09-03,Singapore
    8508,Joint Account,137.89,Gojek,"Dining, Entertainment",2022-12-17,Singapore
    8509,Joint Account,152.17,Walmart,"Transportation, Dining",2022-11-02,Australia
    8510,Savings,351.88,Gojek,"Transportation, General Expenses, Groceries, Entertainment, Dining, Travel",2022-06-10,Australia
    8511,Checking,463.96,Walmart,"General Expenses, Entertainment, Travel, Transportation",2022-07-05,Japan
    8512,Joint Account,708.74,ACME,"Entertainment, Groceries, General Expenses",2022-06-24,Japan
    8513,Checking,992.4,Amazon,"Entertainment, Groceries, General Expenses, Dining, Travel, Transportation",2022-09-05,Australia
    8514,Checking,560.61,Uber,"Dining, General Expenses, Travel, Entertainment, Groceries",2022-07-09,Japan
    8515,Checking,639.63,Starbucks,"Entertainment, Groceries, Transportation, Dining",2022-12-05,Indonesia
    8516,Joint Account,688.58,Fairprice,Transportation,2022-07-29,Singapore
    8517,Joint Account,319.76,Google,"Travel, Entertainment",2022-06-25,Singapore
    8518,Checking,273.09,Google,"Entertainment, Transportation, General Expenses",2022-12-05,Australia
    8519,Savings,358.49,Gojek,"Transportation, Entertainment",2022-11-08,Indonesia
    8520,Checking,739.51,Starbucks,"Dining, Groceries, Transportation, Entertainment, Travel, General Expenses",2022-12-28,Indonesia
    8521,Savings,749.77,Gojek,Dining,2022-07-17,Indonesia
    8522,Checking,810.69,Gojek,"Dining, Entertainment, General Expenses, Transportation, Groceries, Travel",2022-08-23,Australia
    8523,Savings,915.31,Walmart,"Groceries, Dining",2022-09-21,Australia
    8524,Joint Account,325.87,Fairprice,Travel,2022-07-18,Indonesia
    8525,Joint Account,833.35,Uber,"General Expenses, Transportation, Groceries, Entertainment, Travel, Dining",2022-06-23,Australia
    8526,Checking,861.51,Fairprice,"Groceries, General Expenses",2022-06-28,Japan
    8527,Joint Account,370.35,Grab,Travel,2022-09-06,Indonesia
    8528,Savings,130.32,Gojek,"General Expenses, Dining, Entertainment, Transportation, Travel",2022-11-10,Indonesia
    8529,Savings,897.09,Uber,"Dining, Transportation, Groceries",2022-10-23,Japan
    8530,Checking,689.89,Amazon,"Travel, Entertainment",2022-11-22,Singapore
    8531,Checking,187.7,Amazon,"Travel, Entertainment, Dining, Transportation, General Expenses, Groceries",2022-07-29,Japan
    8532,Savings,733.85,Grab,"Travel, Groceries, Entertainment, Transportation, Dining",2022-12-01,Japan
    8533,Joint Account,598.05,Starbucks,"Transportation, General Expenses, Dining, Entertainment, Groceries, Travel",2022-11-01,Australia
    8534,Savings,127.85,Starbucks,"Transportation, General Expenses, Dining, Groceries, Travel",2022-09-16,Japan
    8535,Joint Account,895.94,Grab,"Transportation, Groceries, General Expenses, Entertainment",2022-12-12,Australia
    8536,Joint Account,989.71,Google,"General Expenses, Dining, Transportation, Groceries",2022-09-18,Indonesia
    8537,Savings,725.69,Walmart,"Travel, Dining",2022-12-18,Australia
    8538,Savings,329.4,Uber,"Dining, Travel, General Expenses",2022-09-07,Indonesia
    8539,Savings,96.84,Gojek,"Dining, Travel, General Expenses",2022-11-12,Japan
    8540,Joint Account,183.03,Fairprice,"Dining, Entertainment, Transportation, Groceries, General Expenses",2022-06-11,Japan
    8541,Checking,80.46,ACME,"Groceries, Entertainment",2022-10-28,Indonesia
    8542,Joint Account,822.32,Grab,"General Expenses, Transportation",2022-08-21,Japan
    8543,Joint Account,67.7,Google,Transportation,2022-10-27,Indonesia
    8544,Joint Account,937.87,ACME,Entertainment,2022-06-16,Singapore
    8545,Savings,26.82,Gojek,Entertainment,2022-07-10,Singapore
    8546,Checking,130.94,Grab,"Dining, Transportation, General Expenses",2022-09-01,Australia
    8547,Joint Account,572.92,Amazon,"Dining, Travel",2022-10-19,Australia
    8548,Joint Account,471.75,Fairprice,"Travel, Entertainment, General Expenses, Dining",2022-08-13,Indonesia
    8549,Checking,369.39,Walmart,Travel,2022-09-11,Australia
    8550,Savings,536.85,Uber,"Travel, General Expenses, Entertainment, Dining, Transportation",2022-12-28,Australia
    8551,Checking,85.79,Amazon,"Dining, Groceries, Entertainment, Transportation, General Expenses",2022-12-05,Australia
    8552,Savings,62.47,Starbucks,"Entertainment, Groceries, Travel, Transportation, Dining",2022-11-05,Australia
    8553,Joint Account,382.94,ACME,Groceries,2022-08-17,Australia
    8554,Savings,275.98,Uber,"Travel, Transportation, Groceries, General Expenses, Entertainment",2022-07-13,Indonesia
    8555,Joint Account,753.53,ACME,"Travel, Transportation, General Expenses, Dining, Entertainment, Groceries",2022-12-07,Australia
    8556,Joint Account,190.5,Google,"Dining, Groceries",2022-10-24,Australia
    8557,Savings,203.24,Amazon,Groceries,2022-11-17,Japan
    8558,Savings,5.56,Starbucks,"Transportation, Travel, General Expenses",2022-11-11,Australia
    8559,Savings,538.88,Google,"General Expenses, Dining, Entertainment, Groceries, Transportation",2022-07-17,Indonesia
    8560,Checking,673.05,Uber,"Dining, Groceries, Travel",2022-12-18,Australia
    8561,Joint Account,232.39,ACME,"Groceries, Dining",2022-06-11,Indonesia
    8562,Checking,165.47,ACME,"Groceries, Travel",2022-06-13,Australia
    8563,Joint Account,582.88,Grab,"Entertainment, Groceries, General Expenses, Travel",2022-11-08,Singapore
    8564,Savings,930.33,Amazon,"Travel, General Expenses, Transportation, Entertainment",2022-11-05,Singapore
    8565,Checking,464.84,ACME,"Groceries, Dining, Entertainment, Travel",2022-06-26,Japan
    8566,Checking,932.94,Starbucks,"Entertainment, Dining",2022-08-01,Australia
    8567,Savings,455.65,Gojek,"Travel, Transportation, General Expenses, Groceries, Dining",2022-06-17,Australia
    8568,Savings,164.03,Walmart,"Transportation, Travel",2022-09-05,Japan
    8569,Checking,31.84,Gojek,"Entertainment, Travel, Dining, Transportation",2022-12-06,Japan
    8570,Savings,326.72,Uber,"Travel, Dining, Entertainment, General Expenses",2022-10-07,Australia
    8571,Savings,794.63,Grab,"Dining, Transportation, Travel, Groceries",2022-06-27,Japan
    8572,Joint Account,98.77,Fairprice,"Transportation, Groceries, Entertainment",2022-08-10,Singapore
    8573,Joint Account,500.8,ACME,"Groceries, Transportation, Dining, General Expenses, Travel",2022-08-11,Singapore
    8574,Savings,380.55,Walmart,Entertainment,2022-11-29,Singapore
    8575,Joint Account,369.01,ACME,"Dining, Transportation, Travel",2022-06-11,Australia
    8576,Savings,186.88,Walmart,"Groceries, Entertainment, Dining, Transportation, Travel, General Expenses",2022-09-24,Japan
    8577,Joint Account,714.36,Starbucks,General Expenses,2022-09-30,Australia
    8578,Checking,918.76,Grab,"Entertainment, General Expenses, Travel, Transportation",2022-08-09,Australia
    8579,Joint Account,325.08,Uber,"Groceries, Transportation",2022-08-13,Australia
    8580,Savings,717.95,Gojek,"Dining, Groceries",2022-11-20,Indonesia
    8581,Savings,886.24,Fairprice,General Expenses,2022-10-21,Singapore
    8582,Joint Account,22.3,Amazon,Groceries,2022-07-23,Australia
    8583,Savings,498.77,Grab,General Expenses,2022-06-03,Singapore
    8584,Joint Account,44.87,Amazon,Entertainment,2022-11-20,Australia
    8585,Checking,388.18,Starbucks,"Entertainment, Travel, Transportation",2022-12-15,Australia
    8586,Joint Account,811.29,Amazon,Groceries,2022-11-15,Japan
    8587,Savings,372.46,Grab,"Entertainment, Travel, Groceries, General Expenses, Dining, Transportation",2022-07-05,Singapore
    8588,Savings,957.38,Starbucks,"Dining, Entertainment, Travel",2022-10-06,Indonesia
    8589,Checking,460.28,Walmart,Travel,2022-08-11,Australia
    8590,Savings,237.37,Grab,"Dining, Transportation, General Expenses, Entertainment",2022-11-16,Indonesia
    8591,Savings,462.62,Gojek,"Dining, Groceries",2022-06-14,Japan
    8592,Savings,679.23,Starbucks,"General Expenses, Transportation, Dining",2022-08-22,Japan
    8593,Savings,152.76,Walmart,"Groceries, General Expenses, Travel, Dining, Transportation, Entertainment",2022-06-14,Australia
    8594,Joint Account,502.05,Walmart,"Transportation, Dining, Travel, General Expenses",2022-12-25,Japan
    8595,Joint Account,501.16,ACME,"General Expenses, Groceries, Transportation",2022-10-22,Australia
    8596,Savings,780.23,Google,Travel,2022-10-13,Australia
    8597,Checking,565.55,ACME,"Entertainment, General Expenses, Dining",2022-06-25,Singapore
    8598,Checking,709.81,Gojek,"General Expenses, Travel",2022-06-17,Japan
    8599,Joint Account,138.93,ACME,"General Expenses, Travel",2022-07-09,Australia
    8600,Checking,588.23,Walmart,"General Expenses, Dining, Groceries, Transportation",2022-07-05,Japan
    8601,Checking,492.22,Walmart,"Dining, Travel, Groceries",2022-09-04,Indonesia
    8602,Savings,682.57,Starbucks,"Transportation, Dining, General Expenses",2022-08-16,Singapore
    8603,Savings,992.37,Google,"Dining, Entertainment, Travel, Transportation, General Expenses, Groceries",2022-12-26,Japan
    8604,Joint Account,430.19,Uber,Dining,2022-06-09,Japan
    8605,Savings,196.01,Gojek,"General Expenses, Groceries, Entertainment",2022-07-10,Australia
    8606,Joint Account,381.57,Amazon,"Dining, Travel, Entertainment",2022-08-14,Indonesia
    8607,Joint Account,106.72,Grab,"Dining, Groceries",2022-10-28,Singapore
    8608,Savings,983.1,Walmart,"Groceries, Transportation, Dining",2022-10-11,Indonesia
    8609,Savings,5.7,Google,"Dining, Entertainment, Groceries",2022-09-19,Singapore
    8610,Savings,156.29,ACME,"Dining, Travel, General Expenses, Transportation",2022-10-22,Indonesia
    8611,Savings,903.49,ACME,"General Expenses, Transportation, Dining, Entertainment",2022-11-09,Australia
    8612,Joint Account,43.55,ACME,"Transportation, Dining, Travel, Groceries, Entertainment",2022-12-20,Japan
    8613,Joint Account,992.68,Grab,"Travel, Groceries, Transportation",2022-08-15,Indonesia
    8614,Checking,407.91,Walmart,"Transportation, Groceries, Dining",2022-12-13,Singapore
    8615,Joint Account,19.01,Walmart,"Groceries, Travel, Entertainment",2022-06-07,Singapore
    8616,Savings,510.79,Uber,Entertainment,2022-07-10,Japan
    8617,Checking,38.87,Amazon,"General Expenses, Entertainment, Travel, Dining",2022-12-27,Singapore
    8618,Savings,551.51,Grab,"Transportation, Groceries, General Expenses",2022-10-20,Indonesia
    8619,Checking,159.73,Gojek,"Groceries, Dining, Transportation, Travel, Entertainment, General Expenses",2022-06-20,Indonesia
    8620,Joint Account,115.91,Fairprice,"Travel, Dining, Entertainment, General Expenses",2022-07-10,Australia
    8621,Checking,858.52,Amazon,"Entertainment, Groceries, General Expenses, Transportation, Travel",2022-09-02,Australia
    8622,Savings,148.53,Uber,"Travel, Entertainment, Transportation, Dining, Groceries",2022-11-20,Singapore
    8623,Joint Account,836.41,Walmart,"Entertainment, General Expenses, Dining, Transportation, Groceries, Travel",2022-06-02,Japan
    8624,Savings,51.06,Fairprice,"Groceries, Transportation, General Expenses, Dining",2022-09-24,Indonesia
    8625,Checking,387.25,Amazon,"Groceries, Dining",2022-12-24,Japan
    8626,Checking,695.96,Uber,"General Expenses, Transportation, Entertainment, Dining, Groceries, Travel",2022-10-06,Australia
    8627,Checking,162.57,Google,General Expenses,2022-10-29,Singapore
    8628,Savings,355.89,Uber,"Dining, General Expenses",2022-11-16,Singapore
    8629,Checking,11.84,Google,"Dining, Entertainment",2022-10-09,Japan
    8630,Joint Account,808.84,Starbucks,"Travel, Transportation, Groceries, Dining",2022-08-18,Singapore
    8631,Savings,465.41,Google,"Travel, General Expenses, Entertainment, Dining",2022-08-14,Singapore
    8632,Savings,660.61,Starbucks,"Travel, Dining, Entertainment, General Expenses, Groceries, Transportation",2022-10-28,Japan
    8633,Joint Account,357.41,Uber,"Transportation, General Expenses",2022-07-03,Singapore
    8634,Checking,369.55,Grab,"Entertainment, Transportation, General Expenses",2022-06-05,Australia
    8635,Joint Account,32.24,Uber,Travel,2022-12-04,Australia
    8636,Checking,198.83,Gojek,"Dining, Entertainment, Transportation, Travel",2022-08-25,Singapore
    8637,Joint Account,921.67,ACME,"Transportation, Travel",2022-07-27,Japan
    8638,Checking,295.38,Amazon,"General Expenses, Transportation, Travel, Groceries",2022-12-31,Singapore
    8639,Checking,859.9,Google,"Groceries, General Expenses",2022-07-25,Australia
    8640,Checking,537.54,ACME,"Entertainment, Transportation, Groceries",2022-06-14,Australia
    8641,Checking,836.33,Gojek,"Dining, Groceries, Transportation, Travel",2022-08-02,Singapore
    8642,Savings,752.44,Walmart,"Travel, Dining, Transportation",2022-08-03,Indonesia
    8643,Checking,169.28,Google,"Dining, Entertainment, Travel, General Expenses",2022-11-14,Indonesia
    8644,Savings,876.15,Gojek,"Transportation, Groceries, Dining, Travel",2022-09-12,Indonesia
    8645,Checking,539.31,ACME,"Dining, Transportation, Groceries, Travel, General Expenses, Entertainment",2022-09-28,Japan
    8646,Checking,198.44,Amazon,"Entertainment, General Expenses, Dining",2022-06-27,Japan
    8647,Savings,469.81,Gojek,Groceries,2022-06-19,Singapore
    8648,Checking,625.19,Fairprice,"Entertainment, Travel, Groceries, General Expenses",2022-06-20,Japan
    8649,Savings,204.66,Starbucks,"Entertainment, Groceries, Travel, General Expenses, Dining, Transportation",2022-09-28,Singapore
    8650,Checking,467.74,Fairprice,Transportation,2022-06-28,Singapore
    8651,Joint Account,913.94,Grab,Groceries,2022-09-06,Japan
    8652,Joint Account,936.71,Starbucks,"General Expenses, Dining, Transportation",2022-08-09,Singapore
    8653,Joint Account,550.47,ACME,"Entertainment, General Expenses, Dining, Groceries, Travel",2022-12-25,Indonesia
    8654,Savings,284.98,Gojek,"Travel, Entertainment, Groceries, Transportation, Dining",2022-09-24,Indonesia
    8655,Checking,730.11,Google,"General Expenses, Entertainment, Transportation, Travel",2022-06-25,Singapore
    8656,Checking,603.5,Fairprice,Transportation,2022-06-24,Indonesia
    8657,Joint Account,12.68,Grab,"Dining, Transportation, Entertainment, Travel",2022-06-22,Indonesia
    8658,Savings,98.95,Fairprice,"Travel, Groceries, Dining",2022-06-18,Indonesia
    8659,Savings,774.38,Uber,"Dining, Entertainment, Groceries",2022-07-19,Singapore
    8660,Checking,56.09,Fairprice,"Dining, Transportation, Travel",2022-08-06,Singapore
    8661,Joint Account,865.08,Grab,"Transportation, Entertainment, Groceries, Travel, General Expenses, Dining",2022-08-22,Japan
    8662,Savings,131.91,Walmart,"Groceries, Entertainment, Dining, Travel, Transportation",2022-06-01,Singapore
    8663,Joint Account,580.69,Fairprice,"General Expenses, Groceries, Dining",2022-08-15,Australia
    8664,Joint Account,495.68,ACME,"Groceries, Dining, Travel",2022-10-10,Indonesia
    8665,Checking,348.84,Amazon,"Groceries, Transportation, General Expenses",2022-07-23,Indonesia
    8666,Checking,908.93,ACME,"General Expenses, Entertainment, Dining, Groceries, Travel",2022-12-17,Australia
    8667,Checking,918.77,Uber,Travel,2022-11-12,Indonesia
    8668,Joint Account,249.39,Fairprice,Dining,2022-06-06,Australia
    8669,Joint Account,993.27,Google,"Travel, Groceries",2022-08-31,Japan
    8670,Checking,375.89,Grab,"Transportation, Entertainment, Dining, Travel, Groceries",2022-06-07,Singapore
    8671,Joint Account,132.92,Starbucks,"Entertainment, Travel, Dining, Groceries, General Expenses, Transportation",2022-12-07,Indonesia
    8672,Savings,168.06,Gojek,"Groceries, Entertainment",2022-06-19,Japan
    8673,Checking,631.48,ACME,"General Expenses, Entertainment, Travel, Groceries, Transportation",2022-06-28,Singapore
    8674,Checking,734.45,Amazon,"Dining, Transportation, Travel",2022-09-16,Japan
    8675,Savings,346.11,Starbucks,"Entertainment, Travel, General Expenses, Groceries, Transportation",2022-06-29,Japan
    8676,Joint Account,167.9,Uber,"Travel, Groceries",2022-10-28,Indonesia
    8677,Savings,262.37,Google,Groceries,2022-07-27,Australia
    8678,Joint Account,634.08,Uber,Groceries,2022-07-13,Singapore
    8679,Savings,719.0,ACME,Entertainment,2022-09-27,Indonesia
    8680,Checking,807.4,Fairprice,"Dining, Entertainment, General Expenses, Transportation, Groceries, Travel",2022-07-29,Japan
    8681,Checking,643.8,Walmart,"Groceries, Dining, Travel, Transportation",2022-10-11,Indonesia
    8682,Checking,738.35,Gojek,"General Expenses, Groceries, Dining, Entertainment, Transportation",2022-12-27,Singapore
    8683,Checking,538.23,Google,"General Expenses, Travel, Dining, Entertainment",2022-11-24,Japan
    8684,Joint Account,530.31,Amazon,"General Expenses, Dining, Travel, Entertainment",2022-06-04,Singapore
    8685,Savings,633.29,Amazon,Transportation,2022-11-06,Indonesia
    8686,Joint Account,897.51,Grab,"Entertainment, General Expenses, Travel, Dining, Transportation",2022-08-02,Australia
    8687,Savings,531.55,Google,"Travel, Dining",2022-08-10,Japan
    8688,Savings,902.14,Fairprice,"General Expenses, Groceries",2022-10-06,Australia
    8689,Joint Account,409.13,Starbucks,"Transportation, General Expenses, Travel",2022-07-05,Australia
    8690,Savings,290.61,ACME,"Transportation, Dining, General Expenses",2022-10-09,Japan
    8691,Savings,382.38,Uber,Groceries,2022-11-10,Indonesia
    8692,Savings,571.83,Walmart,"Transportation, Groceries, Travel",2022-12-03,Japan
    8693,Checking,737.42,Amazon,"Groceries, Dining, Travel, Transportation, General Expenses, Entertainment",2022-06-04,Japan
    8694,Joint Account,112.08,Starbucks,"General Expenses, Dining, Travel, Entertainment, Transportation, Groceries",2022-11-23,Indonesia
    8695,Savings,544.97,Grab,"Entertainment, General Expenses, Dining, Transportation, Groceries",2022-06-29,Japan
    8696,Savings,500.85,Uber,"General Expenses, Dining, Entertainment",2022-08-30,Japan
    8697,Joint Account,775.61,Starbucks,"Groceries, Travel, Transportation, Dining, Entertainment",2022-06-06,Australia
    8698,Savings,585.39,Starbucks,"General Expenses, Groceries",2022-12-05,Japan
    8699,Checking,903.17,Walmart,"Entertainment, Transportation, Dining",2022-11-24,Australia
    8700,Checking,59.34,Starbucks,Groceries,2022-10-09,Singapore
    8701,Checking,959.45,Google,"General Expenses, Travel, Transportation, Dining, Entertainment, Groceries",2022-11-19,Singapore
    8702,Savings,544.37,Gojek,"General Expenses, Dining",2022-08-05,Australia
    8703,Joint Account,54.64,ACME,"Entertainment, General Expenses, Travel, Groceries, Dining",2022-08-27,Indonesia
    8704,Checking,226.18,Starbucks,Travel,2022-08-19,Australia
    8705,Joint Account,776.12,Walmart,"Groceries, Travel",2022-09-14,Singapore
    8706,Joint Account,27.45,Google,"Travel, Transportation, Dining",2022-09-13,Japan
    8707,Savings,627.11,ACME,"Transportation, General Expenses, Entertainment, Dining, Groceries, Travel",2022-07-17,Australia
    8708,Checking,370.67,Gojek,"Transportation, Travel, Groceries, Dining, General Expenses",2022-12-19,Japan
    8709,Checking,16.58,Starbucks,Transportation,2022-07-06,Australia
    8710,Joint Account,539.7,Amazon,"Entertainment, Dining",2022-10-21,Japan
    8711,Checking,797.31,ACME,"General Expenses, Travel, Transportation, Dining",2022-11-08,Australia
    8712,Savings,482.64,Walmart,"Transportation, Groceries, Dining",2022-06-22,Singapore
    8713,Joint Account,852.44,Google,"Dining, Entertainment",2022-08-03,Singapore
    8714,Joint Account,394.07,Walmart,"Travel, Transportation, Dining, Groceries, Entertainment",2022-12-11,Australia
    8715,Joint Account,185.91,Amazon,"Transportation, Entertainment, General Expenses",2022-08-06,Australia
    8716,Checking,867.68,Google,"Entertainment, General Expenses",2022-06-28,Japan
    8717,Checking,49.78,Grab,Entertainment,2022-07-11,Japan
    8718,Checking,855.06,Amazon,Entertainment,2022-08-27,Indonesia
    8719,Checking,262.83,Google,"Transportation, General Expenses, Dining, Groceries, Travel, Entertainment",2022-12-20,Japan
    8720,Savings,357.86,Grab,"Travel, Entertainment, Transportation",2022-08-18,Indonesia
    8721,Checking,552.43,ACME,"Groceries, General Expenses",2022-08-21,Singapore
    8722,Savings,510.5,Uber,"Groceries, Dining, Transportation",2022-12-19,Australia
    8723,Joint Account,531.46,Uber,Groceries,2022-10-25,Indonesia
    8724,Joint Account,298.18,Fairprice,"Entertainment, Groceries, Dining, Transportation, Travel",2022-12-19,Australia
    8725,Checking,146.61,Gojek,"Transportation, Dining, General Expenses, Groceries, Entertainment",2022-12-21,Indonesia
    8726,Savings,908.91,Starbucks,"Transportation, Dining, Entertainment, General Expenses, Groceries",2022-06-30,Australia
    8727,Checking,799.47,ACME,"Entertainment, General Expenses, Dining, Groceries",2022-08-21,Singapore
    8728,Savings,197.9,Walmart,"Dining, Groceries",2022-09-12,Australia
    8729,Checking,104.85,Gojek,"Dining, Transportation, Travel, Groceries, General Expenses, Entertainment",2022-08-21,Indonesia
    8730,Savings,34.62,Fairprice,Groceries,2022-06-23,Australia
    8731,Savings,260.06,Gojek,"Travel, Entertainment, Groceries, General Expenses, Dining",2022-11-17,Australia
    8732,Savings,798.66,Uber,Travel,2022-06-17,Singapore
    8733,Joint Account,928.53,Google,"Entertainment, Groceries, Dining, Travel, General Expenses, Transportation",2022-12-20,Japan
    8734,Joint Account,988.19,Gojek,"Groceries, Dining, General Expenses, Transportation, Entertainment",2022-06-28,Australia
    8735,Checking,970.97,Fairprice,Transportation,2022-09-06,Indonesia
    8736,Savings,837.32,Gojek,Entertainment,2022-10-30,Singapore
    8737,Savings,647.87,Walmart,"Travel, Transportation, Entertainment, General Expenses, Dining",2022-12-28,Japan
    8738,Joint Account,630.67,Starbucks,Travel,2022-08-05,Singapore
    8739,Joint Account,95.98,Fairprice,"Dining, Entertainment",2022-10-23,Japan
    8740,Checking,284.46,Starbucks,"Dining, Travel, Entertainment",2022-06-12,Indonesia
    8741,Joint Account,920.48,Uber,"Entertainment, Transportation, Travel, General Expenses, Groceries",2022-07-09,Japan
    8742,Checking,660.14,Starbucks,"Groceries, Dining, Transportation",2022-08-01,Indonesia
    8743,Savings,633.99,Uber,Groceries,2022-12-22,Singapore
    8744,Joint Account,71.9,ACME,"Transportation, Groceries, Travel",2022-10-27,Japan
    8745,Checking,97.22,Amazon,"Dining, Entertainment, Travel, Transportation, General Expenses, Groceries",2022-12-11,Japan
    8746,Checking,424.74,Fairprice,"Travel, Groceries, General Expenses, Dining, Transportation",2022-11-20,Japan
    8747,Joint Account,986.88,Uber,"Transportation, General Expenses, Dining, Groceries, Entertainment",2022-07-29,Australia
    8748,Joint Account,55.34,Grab,"Transportation, Entertainment",2022-10-09,Indonesia
    8749,Savings,596.01,Fairprice,"Dining, Transportation, Entertainment",2022-10-22,Singapore
    8750,Savings,964.98,Grab,"General Expenses, Travel, Dining, Entertainment",2022-06-04,Singapore
    8751,Savings,413.6,Amazon,"Groceries, Dining, Transportation",2022-09-24,Singapore
    8752,Checking,629.55,Grab,"Groceries, Entertainment, Transportation, Travel, General Expenses",2022-11-01,Singapore
    8753,Checking,630.97,ACME,"General Expenses, Travel, Transportation, Dining, Groceries",2022-12-03,Australia
    8754,Checking,65.5,Grab,"Travel, Dining, Entertainment, Transportation, General Expenses",2022-12-15,Australia
    8755,Checking,542.33,Grab,"Travel, General Expenses, Entertainment, Transportation, Groceries, Dining",2022-08-22,Singapore
    8756,Joint Account,681.74,Uber,"Transportation, Travel",2022-09-07,Singapore
    8757,Checking,685.77,Starbucks,"Entertainment, Travel, Transportation, General Expenses, Dining",2022-12-16,Australia
    8758,Joint Account,366.27,Walmart,"General Expenses, Transportation",2022-11-13,Singapore
    8759,Checking,79.12,Amazon,"Transportation, Entertainment",2022-09-07,Japan
    8760,Joint Account,118.78,Google,"Dining, Transportation, Travel",2022-06-18,Indonesia
    8761,Joint Account,877.68,Uber,"Dining, General Expenses, Travel, Entertainment",2022-12-10,Indonesia
    8762,Checking,731.13,ACME,Entertainment,2022-10-29,Australia
    8763,Joint Account,136.48,Walmart,Entertainment,2022-11-19,Indonesia
    8764,Joint Account,467.26,Amazon,"Transportation, Travel, General Expenses, Groceries, Dining, Entertainment",2022-09-29,Japan
    8765,Checking,96.8,Grab,Dining,2022-11-09,Indonesia
    8766,Joint Account,193.49,Uber,Entertainment,2022-12-19,Australia
    8767,Checking,463.56,Google,"Groceries, Transportation",2022-09-23,Australia
    8768,Checking,810.07,Amazon,Entertainment,2022-07-01,Japan
    8769,Checking,493.45,Grab,"Travel, Dining, General Expenses, Entertainment, Groceries, Transportation",2022-07-18,Japan
    8770,Joint Account,277.19,Starbucks,"Groceries, Transportation, Travel, Dining, General Expenses",2022-07-30,Australia
    8771,Joint Account,319.79,Google,"Transportation, Dining, Travel, General Expenses, Groceries, Entertainment",2022-10-31,Singapore
    8772,Joint Account,846.26,Starbucks,"Travel, Groceries, General Expenses, Dining, Entertainment",2022-09-12,Singapore
    8773,Savings,679.31,Walmart,"Transportation, Groceries, Entertainment",2022-07-01,Singapore
    8774,Checking,584.54,Starbucks,Travel,2022-11-07,Australia
    8775,Savings,41.39,Amazon,"General Expenses, Dining, Travel, Groceries",2022-12-28,Indonesia
    8776,Joint Account,780.85,Starbucks,"Entertainment, General Expenses, Travel, Transportation, Dining, Groceries",2022-12-10,Japan
    8777,Joint Account,939.03,Google,"Travel, Dining, Groceries, General Expenses, Entertainment",2022-10-16,Japan
    8778,Joint Account,632.96,Walmart,Entertainment,2022-10-18,Japan
    8779,Joint Account,800.79,Starbucks,"Travel, Groceries, Entertainment",2022-06-01,Japan
    8780,Joint Account,457.84,Grab,Entertainment,2022-08-06,Singapore
    8781,Checking,729.01,Google,"Entertainment, Groceries, Transportation, Dining",2022-11-12,Japan
    8782,Joint Account,763.6,Fairprice,"Entertainment, General Expenses, Dining, Travel, Transportation, Groceries",2022-12-18,Indonesia
    8783,Checking,892.31,Gojek,"General Expenses, Travel, Entertainment, Transportation, Groceries",2022-06-01,Japan
    8784,Savings,19.83,Google,"Groceries, Transportation, General Expenses, Dining, Entertainment, Travel",2022-11-19,Singapore
    8785,Joint Account,616.56,Grab,General Expenses,2022-11-25,Singapore
    8786,Checking,990.39,ACME,"General Expenses, Transportation",2022-08-07,Australia
    8787,Joint Account,362.03,Grab,"Travel, Entertainment, Groceries",2022-06-07,Australia
    8788,Savings,902.06,Fairprice,"Dining, Entertainment, Transportation, General Expenses, Groceries",2022-07-23,Japan
    8789,Checking,442.75,ACME,"Travel, Groceries",2022-12-11,Japan
    8790,Checking,178.25,Grab,"Transportation, Travel, Entertainment, Dining",2022-12-14,Japan
    8791,Savings,798.66,Starbucks,"Dining, Transportation, Entertainment, General Expenses, Groceries, Travel",2022-12-02,Singapore
    8792,Savings,635.16,Gojek,"Dining, Entertainment",2022-11-24,Japan
    8793,Savings,797.41,ACME,Entertainment,2022-11-12,Australia
    8794,Joint Account,877.41,Starbucks,Groceries,2022-08-21,Singapore
    8795,Checking,264.66,Walmart,"Entertainment, Dining, General Expenses, Travel, Groceries",2022-12-07,Australia
    8796,Savings,75.66,Uber,"Entertainment, Groceries",2022-07-20,Australia
    8797,Checking,582.77,Starbucks,"Travel, Dining, Groceries",2022-11-15,Japan
    8798,Joint Account,75.69,Amazon,"Transportation, Travel, Groceries",2022-10-29,Japan
    8799,Savings,968.81,Amazon,"Transportation, General Expenses",2022-10-08,Indonesia
    8800,Savings,1.39,Walmart,"Travel, Entertainment, Groceries, General Expenses",2022-09-25,Japan
    8801,Savings,181.03,Walmart,"Travel, Groceries, Dining, General Expenses, Entertainment, Transportation",2022-06-30,Australia
    8802,Joint Account,909.23,Google,"Transportation, Dining, Groceries, General Expenses, Entertainment, Travel",2022-07-18,Australia
    8803,Savings,320.59,Gojek,"Dining, General Expenses, Entertainment",2022-08-13,Australia
    8804,Joint Account,678.95,Google,"Entertainment, Groceries, General Expenses, Travel, Transportation, Dining",2022-11-12,Australia
    8805,Checking,646.91,Gojek,"Entertainment, Dining, Groceries",2022-10-24,Indonesia
    8806,Joint Account,728.96,Starbucks,"Travel, Dining, Transportation",2022-09-21,Indonesia
    8807,Savings,145.72,Grab,"Groceries, Travel, Transportation, Entertainment, Dining",2022-12-13,Singapore
    8808,Checking,294.2,Uber,"Groceries, Transportation, Entertainment, Travel, General Expenses, Dining",2022-07-12,Singapore
    8809,Checking,724.33,Amazon,Travel,2022-07-10,Singapore
    8810,Joint Account,564.36,Grab,"Entertainment, Travel, Transportation",2022-06-02,Australia
    8811,Checking,836.51,Grab,"Groceries, Travel, General Expenses, Entertainment",2022-12-07,Japan
    8812,Savings,467.66,Uber,"Entertainment, Dining, Travel, Transportation, General Expenses, Groceries",2022-11-15,Indonesia
    8813,Joint Account,863.03,Starbucks,"Dining, Transportation, Entertainment, Groceries",2022-10-12,Japan
    8814,Savings,986.64,Walmart,Groceries,2022-06-30,Japan
    8815,Joint Account,163.64,Uber,"Entertainment, Dining, Groceries, General Expenses, Travel",2022-09-08,Singapore
    8816,Savings,162.59,Gojek,"Travel, General Expenses, Transportation, Entertainment",2022-07-22,Australia
    8817,Checking,625.5,Grab,"Entertainment, Groceries, General Expenses, Dining, Transportation",2022-11-15,Japan
    8818,Checking,838.38,Amazon,"Dining, Transportation",2022-08-05,Indonesia
    8819,Checking,512.12,Grab,"Groceries, Dining, Entertainment",2022-09-30,Singapore
    8820,Checking,160.47,ACME,Entertainment,2022-10-23,Indonesia
    8821,Savings,406.68,Grab,"Entertainment, General Expenses, Dining",2022-06-24,Singapore
    8822,Joint Account,369.06,Walmart,"Groceries, Dining, Entertainment",2022-09-26,Singapore
    8823,Savings,160.05,Grab,"General Expenses, Travel, Transportation, Groceries, Dining",2022-07-10,Singapore
    8824,Checking,176.51,Walmart,"Transportation, Groceries, Travel, General Expenses, Entertainment, Dining",2022-12-26,Indonesia
    8825,Joint Account,790.58,Uber,"Transportation, Travel, Groceries, General Expenses, Dining, Entertainment",2022-08-30,Australia
    8826,Joint Account,176.27,ACME,"Travel, Dining, Groceries",2022-09-23,Singapore
    8827,Joint Account,256.01,Grab,"Travel, General Expenses, Dining, Groceries, Entertainment",2022-06-03,Japan
    8828,Joint Account,137.71,Amazon,Transportation,2022-11-14,Singapore
    8829,Joint Account,718.43,Fairprice,"Dining, General Expenses, Entertainment, Transportation",2022-10-23,Japan
    8830,Joint Account,865.36,ACME,"General Expenses, Entertainment",2022-06-05,Singapore
    8831,Checking,146.13,ACME,"Groceries, Travel, Entertainment, General Expenses",2022-08-16,Australia
    8832,Joint Account,194.66,Amazon,Entertainment,2022-06-04,Indonesia
    8833,Savings,564.88,Gojek,"Transportation, Dining, Travel, Entertainment",2022-08-09,Singapore
    8834,Savings,855.13,Grab,"Dining, Groceries, General Expenses, Travel, Transportation",2022-09-04,Japan
    8835,Joint Account,221.34,Amazon,"Transportation, General Expenses, Entertainment, Travel, Dining",2022-12-07,Japan
    8836,Checking,265.55,Walmart,"General Expenses, Transportation, Entertainment, Travel, Groceries",2022-12-22,Australia
    8837,Checking,945.28,Google,"Dining, General Expenses",2022-06-17,Australia
    8838,Joint Account,107.2,Grab,"Entertainment, Groceries, Travel, General Expenses",2022-11-13,Singapore
    8839,Savings,101.51,Starbucks,"General Expenses, Dining, Travel, Groceries, Entertainment",2022-06-08,Indonesia
    8840,Savings,784.53,Walmart,"Dining, Groceries, General Expenses, Travel, Entertainment, Transportation",2022-06-16,Singapore
    8841,Joint Account,452.27,Amazon,"Groceries, Entertainment, Transportation, Travel",2022-06-13,Indonesia
    8842,Checking,609.21,Google,"Transportation, Travel, General Expenses, Dining, Entertainment",2022-09-03,Japan
    8843,Joint Account,211.31,ACME,"General Expenses, Dining, Transportation, Entertainment, Groceries, Travel",2022-09-23,Indonesia
    8844,Joint Account,781.32,Google,"Travel, Transportation, Dining, Groceries, Entertainment, General Expenses",2022-07-31,Indonesia
    8845,Savings,474.99,Google,"Dining, Groceries, General Expenses",2022-11-23,Japan
    8846,Joint Account,151.15,Gojek,"Entertainment, Travel, Dining",2022-10-16,Indonesia
    8847,Savings,790.73,Fairprice,"Dining, Entertainment, Groceries",2022-09-16,Indonesia
    8848,Savings,872.99,Google,"General Expenses, Groceries, Entertainment, Dining, Transportation, Travel",2022-11-28,Japan
    8849,Savings,723.19,Grab,"Entertainment, Transportation",2022-09-22,Japan
    8850,Savings,506.43,Grab,"Groceries, General Expenses, Travel, Transportation, Entertainment, Dining",2022-09-04,Australia
    8851,Savings,1.59,Uber,"Groceries, Dining, Transportation",2022-08-15,Indonesia
    8852,Checking,537.18,ACME,"Travel, Transportation, Dining",2022-07-14,Indonesia
    8853,Joint Account,982.15,Walmart,"General Expenses, Transportation, Entertainment",2022-08-17,Japan
    8854,Joint Account,42.97,Walmart,"General Expenses, Dining, Entertainment, Transportation",2022-09-12,Indonesia
    8855,Joint Account,543.99,Amazon,"Transportation, Groceries, Travel, Entertainment",2022-10-22,Japan
    8856,Savings,795.13,Google,"Transportation, Entertainment",2022-09-08,Indonesia
    8857,Checking,388.63,Starbucks,"General Expenses, Travel, Entertainment, Groceries",2022-08-04,Singapore
    8858,Joint Account,881.34,Uber,"Dining, General Expenses, Travel",2022-06-26,Singapore
    8859,Checking,401.55,Google,"Travel, Transportation, General Expenses",2022-09-23,Japan
    8860,Joint Account,179.19,Google,"Travel, Groceries",2022-12-08,Australia
    8861,Joint Account,976.48,Google,"Groceries, Transportation, Travel",2022-09-22,Singapore
    8862,Checking,82.61,Amazon,"General Expenses, Transportation, Groceries, Entertainment, Dining, Travel",2022-07-08,Australia
    8863,Checking,290.57,Google,"Groceries, General Expenses, Entertainment, Transportation, Travel, Dining",2022-11-08,Singapore
    8864,Joint Account,136.67,Google,Entertainment,2022-09-08,Japan
    8865,Joint Account,370.27,Gojek,"Travel, Entertainment, General Expenses, Dining, Groceries",2022-06-17,Japan
    8866,Joint Account,781.38,ACME,"General Expenses, Entertainment, Groceries, Travel, Transportation, Dining",2022-10-28,Australia
    8867,Joint Account,937.07,Google,"Groceries, General Expenses, Travel",2022-11-24,Australia
    8868,Joint Account,177.12,Grab,"Transportation, General Expenses, Groceries",2022-07-18,Japan
    8869,Savings,323.73,Amazon,Groceries,2022-12-16,Singapore
    8870,Savings,974.05,Walmart,"Dining, Travel, Transportation, Groceries, General Expenses, Entertainment",2022-10-25,Japan
    8871,Checking,868.0,Uber,"Dining, Travel, Entertainment",2022-10-11,Indonesia
    8872,Savings,654.3,Gojek,"Dining, Transportation, General Expenses, Groceries, Travel, Entertainment",2022-12-03,Japan
    8873,Checking,823.49,Walmart,"Transportation, Groceries",2022-12-09,Australia
    8874,Joint Account,760.97,Google,"Transportation, Travel",2022-12-19,Indonesia
    8875,Checking,591.97,Starbucks,"Dining, Transportation, Travel",2022-09-14,Australia
    8876,Savings,9.09,Grab,"Entertainment, General Expenses, Groceries, Travel",2022-11-10,Indonesia
    8877,Savings,110.01,Uber,General Expenses,2022-09-05,Australia
    8878,Joint Account,628.06,ACME,"Transportation, Entertainment, Dining, Travel, Groceries, General Expenses",2022-08-10,Australia
    8879,Savings,901.8,Starbucks,Dining,2022-06-04,Japan
    8880,Savings,511.98,ACME,"General Expenses, Groceries, Travel, Entertainment",2022-12-14,Indonesia
    8881,Joint Account,512.92,Grab,"General Expenses, Groceries, Travel, Entertainment",2022-08-16,Australia
    8882,Joint Account,241.93,Gojek,"Travel, Groceries, Dining, Transportation",2022-11-07,Japan
    8883,Joint Account,246.8,Gojek,"Travel, Dining",2022-12-11,Singapore
    8884,Checking,199.09,Fairprice,"General Expenses, Travel",2022-06-18,Australia
    8885,Joint Account,191.66,Fairprice,"General Expenses, Dining, Groceries, Transportation, Entertainment",2022-12-15,Japan
    8886,Checking,50.48,Walmart,"Transportation, Entertainment, General Expenses, Dining, Travel",2022-12-24,Australia
    8887,Joint Account,476.5,Fairprice,"Travel, Groceries, General Expenses",2022-12-26,Indonesia
    8888,Checking,730.99,Fairprice,"General Expenses, Transportation, Dining, Entertainment",2022-11-28,Japan
    8889,Savings,8.56,Gojek,Transportation,2022-08-15,Australia
    8890,Joint Account,52.67,Gojek,"Groceries, Dining, Transportation, Travel",2022-07-18,Indonesia
    8891,Savings,63.24,Starbucks,"Groceries, Transportation, Travel, Dining",2022-06-14,Japan
    8892,Checking,744.63,Walmart,Travel,2022-09-19,Indonesia
    8893,Joint Account,608.78,Fairprice,"Dining, Transportation, Groceries, Entertainment, Travel, General Expenses",2022-09-14,Japan
    8894,Checking,120.32,Amazon,"Entertainment, Dining, Groceries",2022-10-08,Australia
    8895,Joint Account,791.07,Starbucks,"Entertainment, Groceries, Transportation, General Expenses",2022-07-28,Japan
    8896,Joint Account,196.31,Uber,"Groceries, General Expenses, Dining",2022-06-13,Japan
    8897,Savings,511.34,Uber,"Entertainment, Travel",2022-10-18,Australia
    8898,Checking,374.23,Starbucks,"Transportation, Dining, Entertainment, Groceries, General Expenses, Travel",2022-10-09,Japan
    8899,Savings,230.72,Fairprice,"General Expenses, Travel",2022-10-11,Singapore
    8900,Savings,833.99,Starbucks,Transportation,2022-08-02,Australia
    8901,Joint Account,929.53,Starbucks,"Transportation, Groceries, General Expenses, Travel, Entertainment, Dining",2022-08-23,Japan
    8902,Joint Account,705.16,Fairprice,"Travel, General Expenses, Entertainment, Groceries, Transportation",2022-09-27,Australia
    8903,Joint Account,696.16,Amazon,"Entertainment, Travel",2022-09-17,Indonesia
    8904,Checking,889.23,Uber,"Travel, General Expenses, Entertainment, Dining, Transportation",2022-09-25,Japan
    8905,Joint Account,995.86,Amazon,"Groceries, Dining",2022-07-26,Indonesia
    8906,Joint Account,536.41,Grab,Groceries,2022-12-17,Indonesia
    8907,Savings,615.22,Walmart,"Dining, Travel",2022-08-27,Singapore
    8908,Checking,34.68,Walmart,"Travel, General Expenses",2022-07-08,Indonesia
    8909,Joint Account,507.41,Gojek,"Groceries, Travel",2022-07-18,Japan
    8910,Checking,524.98,Amazon,"Entertainment, Groceries, Transportation, Travel, General Expenses, Dining",2022-08-02,Australia
    8911,Checking,304.07,ACME,"Entertainment, Travel, General Expenses, Groceries, Dining, Transportation",2022-11-21,Indonesia
    8912,Joint Account,862.18,Amazon,"Travel, General Expenses, Groceries",2022-06-25,Japan
    8913,Savings,48.2,Walmart,"General Expenses, Transportation, Entertainment, Travel, Dining, Groceries",2022-08-13,Australia
    8914,Joint Account,99.53,Starbucks,"Transportation, General Expenses, Travel, Groceries, Dining, Entertainment",2022-07-03,Singapore
    8915,Savings,640.57,ACME,"General Expenses, Dining, Travel, Groceries, Transportation, Entertainment",2022-07-14,Indonesia
    8916,Checking,30.81,Amazon,"Groceries, Entertainment",2022-09-14,Indonesia
    8917,Checking,640.83,Walmart,"Dining, Travel, Groceries, General Expenses, Transportation",2022-12-26,Japan
    8918,Checking,124.66,Fairprice,"Entertainment, Travel, Transportation, Dining, Groceries",2022-09-18,Indonesia
    8919,Savings,404.88,Starbucks,"Entertainment, Dining, Transportation, Travel, Groceries, General Expenses",2022-06-27,Japan
    8920,Savings,969.78,Amazon,Entertainment,2022-08-21,Australia
    8921,Savings,255.34,Grab,"Dining, Entertainment, Transportation, Groceries",2022-06-07,Indonesia
    8922,Joint Account,707.47,Google,"Dining, Transportation, General Expenses, Groceries, Travel",2022-08-12,Indonesia
    8923,Joint Account,644.66,Google,"Travel, Dining, Groceries",2022-06-21,Indonesia
    8924,Savings,892.05,Uber,Groceries,2022-06-14,Singapore
    8925,Checking,136.05,Gojek,"Transportation, Groceries, Entertainment, General Expenses",2022-10-07,Singapore
    8926,Checking,591.89,Starbucks,"Travel, Dining, General Expenses, Transportation",2022-10-24,Indonesia
    8927,Checking,439.73,Gojek,"Transportation, General Expenses, Dining, Groceries, Travel, Entertainment",2022-07-09,Singapore
    8928,Joint Account,437.58,ACME,"Entertainment, Dining, Travel",2022-09-16,Australia
    8929,Savings,320.58,Walmart,"General Expenses, Groceries, Travel",2022-12-12,Indonesia
    8930,Joint Account,240.16,ACME,"Transportation, Travel, General Expenses, Entertainment",2022-10-21,Australia
    8931,Savings,573.92,Google,"General Expenses, Entertainment, Travel, Transportation, Groceries",2022-08-16,Singapore
    8932,Joint Account,81.62,Grab,Transportation,2022-12-24,Japan
    8933,Savings,533.31,Gojek,"Transportation, General Expenses, Groceries, Dining",2022-11-26,Japan
    8934,Checking,626.11,Gojek,"Transportation, Dining, Entertainment, Groceries",2022-06-23,Singapore
    8935,Checking,327.49,ACME,"Entertainment, Transportation, Dining, Travel, General Expenses",2022-12-18,Indonesia
    8936,Savings,773.92,Grab,Groceries,2022-07-01,Japan
    8937,Savings,326.9,Starbucks,"Dining, Entertainment, Travel, Transportation, General Expenses, Groceries",2022-10-14,Singapore
    8938,Checking,238.91,Amazon,Groceries,2022-07-02,Singapore
    8939,Joint Account,159.97,Google,"Transportation, Dining, Travel, Groceries",2022-07-24,Australia
    8940,Savings,400.98,Gojek,"Groceries, Travel, Transportation, Dining, Entertainment, General Expenses",2022-11-22,Japan
    8941,Joint Account,576.82,Walmart,"Travel, Transportation, Groceries, Entertainment, General Expenses, Dining",2022-06-29,Singapore
    8942,Savings,415.37,Fairprice,"Travel, Groceries, Dining, Entertainment",2022-11-05,Singapore
    8943,Checking,561.54,Amazon,"Travel, Groceries, Transportation, Entertainment, Dining",2022-12-23,Australia
    8944,Joint Account,615.62,Fairprice,"Entertainment, Dining",2022-09-03,Singapore
    8945,Savings,302.06,ACME,"General Expenses, Groceries, Travel, Dining, Entertainment",2022-12-07,Singapore
    8946,Joint Account,173.15,ACME,"Travel, Dining, Entertainment",2022-07-07,Australia
    8947,Checking,953.66,ACME,Travel,2022-10-13,Australia
    8948,Checking,269.7,ACME,"Entertainment, Groceries",2022-12-07,Singapore
    8949,Savings,655.04,ACME,General Expenses,2022-06-05,Australia
    8950,Checking,75.22,Fairprice,"Groceries, General Expenses, Dining, Travel, Transportation, Entertainment",2022-08-19,Indonesia
    8951,Joint Account,308.46,Fairprice,Dining,2022-07-25,Australia
    8952,Savings,188.7,Starbucks,"General Expenses, Groceries",2022-07-11,Japan
    8953,Joint Account,637.85,Uber,"General Expenses, Transportation, Entertainment, Dining, Groceries",2022-12-27,Australia
    8954,Savings,387.85,Fairprice,"Travel, General Expenses, Groceries, Transportation",2022-07-03,Japan
    8955,Joint Account,727.9,Starbucks,"Entertainment, General Expenses",2022-10-11,Singapore
    8956,Joint Account,175.83,Walmart,"Dining, Travel, General Expenses",2022-06-09,Indonesia
    8957,Checking,330.12,Fairprice,"Travel, Dining, General Expenses, Transportation, Groceries, Entertainment",2022-08-15,Indonesia
    8958,Joint Account,546.14,ACME,Groceries,2022-11-04,Singapore
    8959,Savings,459.3,Fairprice,Groceries,2022-09-04,Singapore
    8960,Savings,884.03,Gojek,Travel,2022-06-08,Singapore
    8961,Savings,681.37,Grab,Groceries,2022-06-14,Australia
    8962,Checking,221.08,ACME,"Groceries, Dining, Transportation, General Expenses, Entertainment",2022-07-19,Australia
    8963,Savings,955.21,Grab,Dining,2022-08-30,Australia
    8964,Joint Account,960.52,Amazon,"Transportation, General Expenses, Dining",2022-12-12,Australia
    8965,Savings,396.33,Starbucks,"Dining, Groceries, Travel, Transportation, Entertainment",2022-08-05,Indonesia
    8966,Checking,475.96,ACME,"Dining, Entertainment, Transportation",2022-07-27,Australia
    8967,Checking,344.76,ACME,"Entertainment, Travel, Dining, General Expenses, Groceries",2022-08-08,Singapore
    8968,Savings,635.03,Uber,"Travel, Entertainment, Groceries, Dining, General Expenses",2022-09-03,Singapore
    8969,Checking,829.99,Amazon,"Travel, Dining, General Expenses, Entertainment",2022-11-04,Singapore
    8970,Savings,426.88,Amazon,Dining,2022-12-04,Australia
    8971,Joint Account,195.0,Grab,Transportation,2022-10-07,Indonesia
    8972,Joint Account,249.31,Grab,"Dining, Entertainment, Travel, General Expenses, Transportation",2022-09-04,Japan
    8973,Savings,90.25,Grab,"Entertainment, General Expenses, Dining, Groceries, Transportation",2022-09-22,Singapore
    8974,Savings,210.17,Google,"Travel, Transportation, Dining, General Expenses, Entertainment",2022-11-08,Japan
    8975,Savings,401.38,Google,"Transportation, Entertainment",2022-10-01,Australia
    8976,Joint Account,835.83,Gojek,"Dining, Travel, Transportation, General Expenses, Groceries, Entertainment",2022-12-04,Japan
    8977,Savings,265.59,Walmart,"Dining, Travel, General Expenses, Entertainment, Groceries, Transportation",2022-12-05,Indonesia
    8978,Joint Account,563.41,Uber,Travel,2022-07-26,Indonesia
    8979,Checking,156.7,Uber,Transportation,2022-12-19,Indonesia
    8980,Savings,252.67,ACME,"Travel, Groceries, Transportation, Dining",2022-10-23,Indonesia
    8981,Savings,743.98,Fairprice,Transportation,2022-07-19,Indonesia
    8982,Joint Account,824.85,Uber,"General Expenses, Groceries, Entertainment, Dining, Travel, Transportation",2022-12-21,Australia
    8983,Savings,100.77,Fairprice,"Transportation, Travel, General Expenses, Groceries",2022-08-11,Indonesia
    8984,Savings,666.3,Uber,"Travel, Entertainment, General Expenses, Dining, Transportation, Groceries",2022-11-16,Indonesia
    8985,Checking,282.85,Uber,"Entertainment, Dining",2022-10-02,Japan
    8986,Joint Account,258.21,ACME,"Entertainment, General Expenses, Dining, Travel, Groceries",2022-10-23,Singapore
    8987,Savings,159.07,Google,"Transportation, General Expenses, Dining",2022-12-05,Indonesia
    8988,Joint Account,654.45,Uber,"Entertainment, Dining, Transportation, General Expenses, Travel",2022-07-05,Indonesia
    8989,Savings,529.36,Amazon,"Entertainment, Groceries, General Expenses",2022-08-18,Indonesia
    8990,Joint Account,865.69,Grab,"Groceries, General Expenses",2022-08-26,Singapore
    8991,Checking,798.28,Gojek,"Groceries, Dining, General Expenses, Travel, Transportation, Entertainment",2022-06-11,Japan
    8992,Joint Account,485.86,Walmart,"Dining, Groceries",2022-09-13,Australia
    8993,Joint Account,561.96,Grab,Entertainment,2022-12-14,Australia
    8994,Savings,79.27,Gojek,"Transportation, Dining, Groceries, Travel, Entertainment",2022-08-05,Indonesia
    8995,Savings,252.42,Fairprice,"General Expenses, Dining, Travel",2022-11-17,Australia
    8996,Savings,882.15,Grab,"General Expenses, Groceries, Entertainment, Dining, Transportation",2022-08-31,Australia
    8997,Checking,691.21,Google,"General Expenses, Travel, Entertainment, Dining, Transportation",2022-07-28,Singapore
    8998,Savings,449.34,Uber,"Dining, Groceries, Travel, General Expenses",2022-12-23,Indonesia
    8999,Checking,350.49,Google,"General Expenses, Transportation, Groceries, Entertainment, Travel",2022-07-02,Indonesia
    9000,Checking,448.72,Gojek,"General Expenses, Entertainment, Dining, Groceries",2022-07-23,Australia
    9001,Savings,92.16,Walmart,"Travel, Entertainment, General Expenses, Transportation, Dining",2022-09-21,Australia
    9002,Checking,768.39,Grab,"Entertainment, Travel, Groceries, Dining, General Expenses, Transportation",2022-11-16,Japan
    9003,Checking,210.71,Uber,"Dining, Entertainment, Travel",2022-08-30,Australia
    9004,Savings,32.76,Google,"Entertainment, Transportation, Travel, Dining, General Expenses",2022-08-06,Indonesia
    9005,Checking,479.91,Amazon,"Entertainment, Dining, Transportation, Groceries, Travel, General Expenses",2022-09-29,Indonesia
    9006,Savings,128.53,Uber,"Entertainment, Transportation, Dining, Groceries, General Expenses",2022-07-21,Australia
    9007,Joint Account,486.73,Amazon,"Dining, Entertainment",2022-06-15,Japan
    9008,Savings,812.23,Uber,Groceries,2022-07-23,Singapore
    9009,Checking,843.54,Amazon,"Entertainment, Groceries",2022-08-25,Japan
    9010,Joint Account,523.28,Google,"Travel, Entertainment",2022-09-01,Japan
    9011,Joint Account,414.39,ACME,"Entertainment, Transportation, Groceries",2022-06-02,Japan
    9012,Checking,786.52,Walmart,"Transportation, Groceries, Entertainment",2022-11-29,Japan
    9013,Joint Account,420.37,Grab,"General Expenses, Transportation, Dining, Travel, Entertainment, Groceries",2022-08-15,Japan
    9014,Joint Account,823.0,ACME,"Travel, Groceries, Dining",2022-07-04,Japan
    9015,Joint Account,439.61,ACME,"Dining, Entertainment",2022-08-22,Singapore
    9016,Joint Account,999.19,Starbucks,"Transportation, Dining, Entertainment",2022-12-07,Indonesia
    9017,Checking,45.16,Starbucks,"General Expenses, Entertainment, Transportation, Dining, Groceries, Travel",2022-09-02,Japan
    9018,Joint Account,149.82,Grab,"General Expenses, Transportation, Travel, Groceries, Dining, Entertainment",2022-07-19,Australia
    9019,Joint Account,182.27,Starbucks,"Entertainment, Groceries, General Expenses, Travel, Transportation",2022-09-27,Japan
    9020,Savings,842.97,Google,"Groceries, Entertainment, Transportation, Travel, General Expenses",2022-06-16,Australia
    9021,Checking,131.34,ACME,"General Expenses, Entertainment",2022-06-17,Indonesia
    9022,Checking,496.1,Grab,"Transportation, Dining, Entertainment, Groceries, Travel, General Expenses",2022-09-15,Singapore
    9023,Savings,680.17,Gojek,"Dining, Transportation, Entertainment, General Expenses, Travel, Groceries",2022-10-31,Japan
    9024,Savings,458.64,Grab,"General Expenses, Groceries, Dining",2022-07-25,Japan
    9025,Checking,626.82,Fairprice,"Travel, Transportation, Entertainment, Groceries, General Expenses, Dining",2022-07-28,Australia
    9026,Savings,522.25,Amazon,"Groceries, Travel, General Expenses, Entertainment",2022-11-04,Australia
    9027,Checking,658.8,Starbucks,"General Expenses, Transportation",2022-08-22,Australia
    9028,Savings,334.51,Uber,"Travel, Groceries",2022-10-11,Japan
    9029,Savings,851.48,Fairprice,"Dining, Transportation, Entertainment",2022-11-25,Australia
    9030,Checking,86.82,Walmart,Groceries,2022-07-16,Singapore
    9031,Checking,649.51,Fairprice,"Transportation, General Expenses, Dining, Entertainment, Groceries",2022-07-09,Indonesia
    9032,Savings,852.41,Google,Transportation,2022-10-07,Australia
    9033,Checking,41.98,Fairprice,Travel,2022-12-18,Singapore
    9034,Savings,901.52,Uber,"General Expenses, Transportation, Groceries",2022-11-21,Japan
    9035,Checking,265.39,ACME,"General Expenses, Entertainment",2022-07-09,Australia
    9036,Joint Account,234.7,Fairprice,"Transportation, Groceries",2022-09-16,Japan
    9037,Joint Account,650.44,Walmart,"Travel, Entertainment, Groceries, Dining, General Expenses",2022-12-17,Australia
    9038,Checking,667.78,Gojek,"Travel, Dining, Entertainment, General Expenses, Transportation",2022-06-20,Australia
    9039,Savings,341.48,Google,"Entertainment, Groceries, Dining, General Expenses, Travel, Transportation",2022-10-10,Singapore
    9040,Checking,713.38,Amazon,"Transportation, Entertainment, Travel, Groceries, General Expenses, Dining",2022-10-10,Australia
    9041,Joint Account,248.03,Grab,"Transportation, Travel, General Expenses, Dining, Entertainment",2022-08-09,Australia
    9042,Checking,992.1,Gojek,"General Expenses, Transportation",2022-11-29,Australia
    9043,Joint Account,168.27,Grab,Groceries,2022-07-02,Japan
    9044,Checking,579.26,Uber,"Entertainment, General Expenses, Dining, Groceries, Travel, Transportation",2022-07-23,Indonesia
    9045,Savings,488.41,Grab,"General Expenses, Dining, Travel, Transportation, Entertainment, Groceries",2022-09-26,Japan
    9046,Checking,808.51,Google,"General Expenses, Groceries, Transportation, Travel",2022-07-26,Indonesia
    9047,Savings,331.87,Grab,"Entertainment, Groceries",2022-07-05,Australia
    9048,Joint Account,224.4,Amazon,"General Expenses, Groceries, Travel, Entertainment, Dining",2022-06-08,Japan
    9049,Joint Account,844.81,Fairprice,Entertainment,2022-06-09,Indonesia
    9050,Joint Account,410.74,Fairprice,"Groceries, Travel, General Expenses",2022-09-06,Indonesia
    9051,Savings,816.57,Amazon,"Entertainment, Travel, Dining",2022-07-31,Indonesia
    9052,Savings,179.64,Uber,"Transportation, General Expenses, Groceries, Entertainment, Dining, Travel",2022-10-06,Singapore
    9053,Joint Account,68.45,Grab,"Dining, Transportation, General Expenses, Entertainment, Groceries",2022-07-26,Indonesia
    9054,Checking,682.94,Starbucks,"Dining, General Expenses, Entertainment, Groceries, Travel, Transportation",2022-07-20,Japan
    9055,Joint Account,76.13,Walmart,Dining,2022-09-05,Indonesia
    9056,Checking,802.14,ACME,"Dining, Travel, Entertainment, Groceries",2022-11-04,Indonesia
    9057,Checking,745.36,Fairprice,"Groceries, Entertainment, General Expenses, Dining, Travel",2022-10-23,Australia
    9058,Joint Account,472.67,Fairprice,"General Expenses, Entertainment, Dining",2022-10-17,Indonesia
    9059,Joint Account,199.15,Amazon,"Travel, Entertainment, Groceries, General Expenses, Transportation, Dining",2022-07-17,Australia
    9060,Joint Account,492.01,Gojek,"Groceries, Travel",2022-12-03,Indonesia
    9061,Checking,489.31,ACME,"Transportation, Dining, General Expenses, Groceries",2022-11-03,Singapore
    9062,Savings,535.6,Uber,"Travel, Groceries, Transportation, Entertainment",2022-11-14,Singapore
    9063,Checking,527.07,Amazon,"Dining, Entertainment, Transportation, General Expenses",2022-06-07,Singapore
    9064,Joint Account,55.55,Uber,"Groceries, Entertainment, Travel, Transportation, Dining",2022-08-26,Singapore
    9065,Checking,400.68,Grab,"Travel, General Expenses, Transportation",2022-07-19,Japan
    9066,Savings,85.28,Gojek,"Dining, Travel, Entertainment, General Expenses, Transportation, Groceries",2022-08-13,Singapore
    9067,Checking,449.72,Fairprice,"Dining, Transportation, Groceries, Entertainment",2022-10-11,Singapore
    9068,Checking,913.04,ACME,"Dining, Groceries, General Expenses",2022-09-24,Singapore
    9069,Joint Account,226.9,Grab,"Dining, Groceries, Travel",2022-07-03,Japan
    9070,Joint Account,407.66,Starbucks,"General Expenses, Travel, Entertainment, Groceries, Transportation, Dining",2022-10-01,Australia
    9071,Checking,877.05,Walmart,"Dining, Travel, Transportation, Groceries, General Expenses, Entertainment",2022-08-07,Australia
    9072,Joint Account,869.36,Grab,"Travel, Dining, Entertainment, Groceries",2022-12-31,Japan
    9073,Checking,793.69,Grab,"Travel, Groceries",2022-09-08,Japan
    9074,Joint Account,494.08,Amazon,"General Expenses, Travel, Transportation, Groceries",2022-06-08,Singapore
    9075,Checking,801.88,Walmart,"Groceries, Transportation, Entertainment, Dining, General Expenses, Travel",2022-08-07,Australia
    9076,Checking,66.46,ACME,"Transportation, Groceries, Dining",2022-07-20,Indonesia
    9077,Checking,145.18,Walmart,"General Expenses, Dining, Transportation, Entertainment, Travel, Groceries",2022-10-06,Indonesia
    9078,Joint Account,832.96,Uber,"General Expenses, Dining, Transportation",2022-06-12,Japan
    9079,Savings,91.05,Walmart,Transportation,2022-07-09,Japan
    9080,Joint Account,245.48,Amazon,"Transportation, General Expenses",2022-11-30,Indonesia
    9081,Joint Account,669.27,Walmart,"Groceries, Travel, Entertainment, General Expenses",2022-09-17,Indonesia
    9082,Savings,504.59,ACME,"Entertainment, Travel, General Expenses, Transportation, Dining, Groceries",2022-09-05,Singapore
    9083,Checking,278.68,Grab,"Dining, Groceries, Transportation, General Expenses",2022-11-24,Japan
    9084,Joint Account,407.77,Walmart,"Dining, General Expenses, Transportation, Groceries",2022-08-16,Singapore
    9085,Checking,530.31,Google,General Expenses,2022-12-21,Singapore
    9086,Savings,787.1,Fairprice,"Dining, Travel, Groceries",2022-07-24,Indonesia
    9087,Checking,979.41,Amazon,"Groceries, Dining, Transportation, General Expenses",2022-11-29,Indonesia
    9088,Savings,101.24,Starbucks,Entertainment,2022-09-21,Australia
    9089,Checking,863.74,Fairprice,"Entertainment, Dining, Transportation, Travel",2022-07-23,Australia
    9090,Savings,89.85,Starbucks,"Transportation, General Expenses",2022-11-16,Indonesia
    9091,Savings,558.59,Fairprice,"Travel, Dining, Groceries, General Expenses, Transportation",2022-06-05,Singapore
    9092,Checking,53.48,Uber,"General Expenses, Groceries, Travel",2022-12-06,Indonesia
    9093,Checking,769.94,Google,"Dining, Groceries",2022-10-04,Japan
    9094,Joint Account,83.43,Gojek,"Transportation, Groceries",2022-10-30,Singapore
    9095,Joint Account,553.85,Walmart,"Dining, Entertainment",2022-12-03,Australia
    9096,Checking,880.63,Gojek,"Travel, Entertainment, Groceries, General Expenses",2022-06-18,Australia
    9097,Checking,845.74,Fairprice,"Transportation, Dining, Groceries, General Expenses, Travel, Entertainment",2022-09-02,Japan
    9098,Checking,569.22,Amazon,Travel,2022-10-25,Japan
    9099,Joint Account,747.13,Uber,"General Expenses, Transportation, Entertainment",2022-12-26,Indonesia
    9100,Savings,510.71,Fairprice,"General Expenses, Dining, Travel, Transportation",2022-09-30,Indonesia
    9101,Joint Account,787.19,Grab,Groceries,2022-09-15,Japan
    9102,Joint Account,878.63,Walmart,"Travel, Entertainment",2022-08-04,Australia
    9103,Joint Account,811.35,Amazon,"Entertainment, Groceries, Dining, Transportation, General Expenses",2022-09-13,Japan
    9104,Checking,403.62,Grab,"Entertainment, Groceries, General Expenses, Travel, Transportation, Dining",2022-08-04,Australia
    9105,Joint Account,252.59,Starbucks,"Transportation, Dining, General Expenses, Travel",2022-09-12,Singapore
    9106,Joint Account,505.68,ACME,"General Expenses, Transportation, Groceries, Travel, Entertainment, Dining",2022-11-30,Japan
    9107,Savings,271.99,Fairprice,"Dining, Groceries, Transportation",2022-09-04,Indonesia
    9108,Savings,976.81,Grab,"Entertainment, Groceries, Transportation, Dining, General Expenses",2022-07-13,Japan
    9109,Checking,292.2,Fairprice,"Transportation, Entertainment, Travel",2022-11-16,Australia
    9110,Checking,309.4,Gojek,"Dining, Groceries, Travel, General Expenses",2022-09-11,Japan
    9111,Checking,881.62,Amazon,General Expenses,2022-08-02,Singapore
    9112,Savings,700.51,Google,"Dining, Groceries, Transportation, Entertainment, Travel",2022-12-07,Indonesia
    9113,Savings,706.97,Uber,"Dining, Transportation, Groceries",2022-07-03,Indonesia
    9114,Joint Account,902.35,Grab,"Travel, Groceries, Entertainment, Dining",2022-06-22,Australia
    9115,Checking,835.44,ACME,"Transportation, Groceries",2022-10-16,Australia
    9116,Joint Account,702.84,Google,"General Expenses, Entertainment, Groceries",2022-06-13,Japan
    9117,Joint Account,350.91,Starbucks,"Entertainment, Transportation, General Expenses",2022-07-07,Japan
    9118,Checking,522.32,Grab,"Entertainment, Groceries",2022-12-10,Australia
    9119,Checking,479.44,Starbucks,Groceries,2022-07-22,Indonesia
    9120,Savings,264.17,Google,"Entertainment, Dining, Groceries",2022-09-28,Australia
    9121,Checking,745.74,Walmart,Transportation,2022-06-29,Japan
    9122,Joint Account,267.26,Starbucks,"Groceries, Dining, Travel, Transportation, General Expenses",2022-09-06,Japan
    9123,Checking,431.08,Fairprice,"Groceries, Transportation",2022-11-21,Japan
    9124,Joint Account,343.51,Starbucks,"Transportation, Travel, General Expenses, Entertainment, Dining",2022-09-08,Singapore
    9125,Checking,439.03,Grab,"Groceries, Transportation, General Expenses, Entertainment",2022-06-06,Japan
    9126,Savings,978.72,Google,"Entertainment, Transportation, General Expenses, Dining, Travel, Groceries",2022-11-19,Singapore
    9127,Checking,792.84,Gojek,"Travel, Dining, Entertainment, Transportation, General Expenses, Groceries",2022-07-20,Japan
    9128,Checking,364.62,Fairprice,"Travel, Transportation, General Expenses, Entertainment, Groceries",2022-10-07,Singapore
    9129,Checking,595.75,Grab,"General Expenses, Groceries, Dining, Entertainment",2022-07-16,Japan
    9130,Savings,3.88,Gojek,"Groceries, General Expenses, Entertainment, Travel, Dining",2022-09-22,Japan
    9131,Joint Account,468.37,Starbucks,"Transportation, General Expenses",2022-07-11,Singapore
    9132,Checking,96.75,Amazon,"Transportation, Travel, Dining, General Expenses",2022-07-30,Singapore
    9133,Joint Account,740.79,Amazon,"Dining, Transportation",2022-06-06,Indonesia
    9134,Savings,344.59,Google,Dining,2022-06-13,Indonesia
    9135,Savings,377.19,Amazon,"Transportation, Entertainment, Travel, Groceries, Dining",2022-07-20,Indonesia
    9136,Savings,251.71,Fairprice,"Transportation, Groceries, Entertainment, Dining, General Expenses, Travel",2022-12-23,Australia
    9137,Joint Account,265.11,Grab,"Transportation, Groceries, Dining, General Expenses",2022-08-14,Australia
    9138,Joint Account,376.68,Grab,"Transportation, Groceries, Travel, General Expenses, Dining",2022-10-28,Singapore
    9139,Checking,787.87,ACME,Groceries,2022-12-27,Singapore
    9140,Checking,554.6,Gojek,"Travel, Entertainment, Transportation, Groceries",2022-09-16,Indonesia
    9141,Checking,798.5,Starbucks,"Dining, Travel, Groceries, Entertainment, Transportation, General Expenses",2022-11-12,Japan
    9142,Savings,910.99,Amazon,"General Expenses, Groceries, Travel, Entertainment, Transportation",2022-11-01,Japan
    9143,Joint Account,702.21,Uber,"Travel, Transportation, Dining, General Expenses",2022-12-17,Indonesia
    9144,Joint Account,431.42,Uber,"General Expenses, Dining, Travel, Groceries, Entertainment, Transportation",2022-11-23,Singapore
    9145,Checking,516.91,Grab,"Groceries, General Expenses, Transportation, Entertainment, Travel, Dining",2022-08-26,Singapore
    9146,Joint Account,347.85,Fairprice,"General Expenses, Travel, Entertainment, Dining, Transportation, Groceries",2022-12-17,Singapore
    9147,Joint Account,421.89,Fairprice,"Transportation, Groceries, Entertainment",2022-10-01,Indonesia
    9148,Savings,582.19,Uber,"Transportation, Groceries, Travel, General Expenses, Dining",2022-08-24,Japan
    9149,Joint Account,80.7,Uber,"Entertainment, General Expenses, Travel, Groceries, Transportation, Dining",2022-08-03,Singapore
    9150,Savings,415.05,Gojek,"Groceries, Travel, Transportation, Entertainment, General Expenses",2022-08-29,Australia
    9151,Savings,413.83,Grab,"Entertainment, Dining, Transportation",2022-08-09,Australia
    9152,Checking,333.28,Fairprice,"General Expenses, Groceries, Entertainment, Dining",2022-11-12,Australia
    9153,Joint Account,98.29,Starbucks,"Entertainment, General Expenses",2022-10-30,Australia
    9154,Checking,54.15,Amazon,"Transportation, General Expenses, Groceries, Entertainment, Travel, Dining",2022-11-06,Singapore
    9155,Checking,826.64,Uber,"Transportation, General Expenses, Entertainment, Dining, Groceries",2022-07-31,Indonesia
    9156,Checking,84.95,Walmart,"General Expenses, Dining, Groceries, Travel",2022-06-22,Japan
    9157,Savings,806.28,Walmart,"Groceries, General Expenses, Travel, Entertainment",2022-10-14,Australia
    9158,Joint Account,481.19,Google,"Travel, Transportation, Entertainment, Dining, General Expenses",2022-07-16,Indonesia
    9159,Joint Account,926.61,Google,"General Expenses, Travel",2022-11-05,Australia
    9160,Checking,893.16,Starbucks,"Travel, Dining, Entertainment, Transportation, Groceries",2022-10-27,Australia
    9161,Checking,776.07,Uber,"General Expenses, Groceries, Transportation, Travel",2022-10-24,Japan
    9162,Checking,421.86,Gojek,Travel,2022-07-16,Australia
    9163,Checking,486.09,Fairprice,"Entertainment, Travel, Groceries, General Expenses, Dining",2022-09-25,Japan
    9164,Joint Account,837.67,Fairprice,Travel,2022-06-12,Japan
    9165,Checking,723.59,Grab,"Entertainment, Transportation, Groceries, Dining",2022-07-03,Indonesia
    9166,Joint Account,215.5,Fairprice,"Dining, Travel, General Expenses",2022-07-09,Singapore
    9167,Checking,95.69,Grab,General Expenses,2022-10-01,Indonesia
    9168,Savings,278.47,Fairprice,"General Expenses, Travel, Entertainment",2022-06-08,Japan
    9169,Joint Account,420.53,Uber,"Transportation, Groceries, General Expenses, Travel",2022-09-28,Australia
    9170,Savings,774.09,Amazon,"Groceries, Dining, Entertainment",2022-07-30,Australia
    9171,Joint Account,385.59,Gojek,Groceries,2022-11-07,Australia
    9172,Checking,236.31,Google,"Groceries, Travel",2022-12-12,Japan
    9173,Checking,151.33,ACME,"Travel, Dining",2022-07-09,Indonesia
    9174,Savings,650.71,Google,Travel,2022-10-26,Australia
    9175,Joint Account,494.28,Uber,Travel,2022-12-04,Japan
    9176,Joint Account,377.7,ACME,Entertainment,2022-09-23,Singapore
    9177,Joint Account,861.03,Starbucks,"Entertainment, Travel",2022-10-26,Australia
    9178,Checking,30.71,Google,"Groceries, General Expenses, Travel, Transportation",2022-12-10,Indonesia
    9179,Checking,111.1,Starbucks,"Dining, Entertainment, Groceries, Transportation, General Expenses",2022-08-28,Singapore
    9180,Joint Account,622.89,ACME,"Transportation, Travel, General Expenses, Entertainment, Groceries",2022-11-18,Indonesia
    9181,Joint Account,837.08,Amazon,Groceries,2022-12-31,Australia
    9182,Savings,917.53,Gojek,Travel,2022-06-12,Japan
    9183,Joint Account,605.48,Gojek,Groceries,2022-07-18,Indonesia
    9184,Joint Account,385.9,Amazon,"Travel, General Expenses, Transportation, Entertainment",2022-12-18,Singapore
    9185,Joint Account,120.29,Amazon,"Groceries, Transportation, Travel, Dining, Entertainment, General Expenses",2022-09-06,Singapore
    9186,Savings,697.61,Starbucks,"Dining, Transportation",2022-08-17,Singapore
    9187,Joint Account,781.42,ACME,"Dining, General Expenses, Transportation, Entertainment, Travel, Groceries",2022-08-27,Australia
    9188,Savings,517.98,Walmart,"Dining, Entertainment, Transportation, General Expenses, Groceries",2022-10-04,Australia
    9189,Savings,481.35,Starbucks,"General Expenses, Transportation, Travel, Groceries",2022-10-26,Singapore
    9190,Savings,451.85,ACME,"Groceries, Transportation, Travel, Entertainment",2022-09-30,Australia
    9191,Savings,149.15,Starbucks,"Travel, General Expenses, Dining, Entertainment",2022-10-26,Singapore
    9192,Savings,362.18,Gojek,"Travel, Groceries, Dining, Entertainment, General Expenses",2022-11-29,Indonesia
    9193,Savings,989.77,Gojek,"Travel, Dining, Entertainment, Transportation, Groceries",2022-08-31,Indonesia
    9194,Checking,370.94,Gojek,"General Expenses, Entertainment, Groceries, Dining, Travel",2022-11-09,Singapore
    9195,Joint Account,556.61,Grab,"Groceries, General Expenses, Dining",2022-08-01,Japan
    9196,Joint Account,135.8,Uber,Dining,2022-07-25,Australia
    9197,Checking,179.92,Amazon,"General Expenses, Entertainment, Transportation, Dining",2022-08-29,Indonesia
    9198,Savings,327.99,Starbucks,Transportation,2022-10-21,Japan
    9199,Savings,921.02,Grab,"Travel, Groceries",2022-11-17,Australia
    9200,Joint Account,910.58,Gojek,"Dining, General Expenses, Entertainment, Transportation",2022-10-05,Australia
    9201,Savings,734.83,Walmart,"Groceries, Transportation, Dining",2022-11-03,Singapore
    9202,Checking,112.67,Fairprice,"Transportation, General Expenses, Groceries, Entertainment, Dining, Travel",2022-08-23,Indonesia
    9203,Checking,434.96,Amazon,"Entertainment, General Expenses, Groceries",2022-06-07,Australia
    9204,Savings,78.34,Uber,"Transportation, Travel, General Expenses",2022-07-13,Singapore
    9205,Checking,817.24,Google,"Travel, General Expenses, Dining",2022-08-20,Indonesia
    9206,Checking,889.26,ACME,"Entertainment, Travel, Groceries, General Expenses, Transportation",2022-12-23,Indonesia
    9207,Savings,773.85,Gojek,"Entertainment, Travel, Dining, General Expenses, Groceries, Transportation",2022-12-11,Australia
    9208,Joint Account,264.7,Gojek,"Travel, Transportation, Dining, General Expenses, Entertainment",2022-12-26,Japan
    9209,Checking,454.0,Grab,"Groceries, General Expenses, Transportation, Entertainment",2022-10-19,Australia
    9210,Checking,654.79,Walmart,"Travel, Dining, Transportation, Entertainment, General Expenses",2022-07-04,Singapore
    9211,Savings,26.65,Walmart,"Groceries, Travel, General Expenses, Entertainment, Dining",2022-08-24,Australia
    9212,Checking,198.03,Fairprice,"Groceries, Entertainment, Travel",2022-06-04,Australia
    9213,Joint Account,16.67,Gojek,Transportation,2022-10-06,Indonesia
    9214,Savings,823.62,Starbucks,"General Expenses, Transportation, Entertainment",2022-09-10,Australia
    9215,Joint Account,244.84,Google,Entertainment,2022-08-12,Australia
    9216,Savings,982.94,Google,"General Expenses, Entertainment, Transportation",2022-10-24,Japan
    9217,Checking,145.15,Uber,Entertainment,2022-12-27,Singapore
    9218,Savings,289.33,Grab,"Groceries, Dining, Transportation",2022-08-11,Japan
    9219,Savings,248.83,Grab,"Transportation, Groceries",2022-06-15,Japan
    9220,Joint Account,611.77,Uber,"Transportation, General Expenses, Groceries, Travel, Dining, Entertainment",2022-11-29,Singapore
    9221,Savings,896.65,Starbucks,"Dining, Entertainment",2022-09-12,Japan
    9222,Joint Account,838.77,Uber,"Transportation, General Expenses, Groceries, Dining, Entertainment",2022-06-07,Singapore
    9223,Joint Account,607.42,Amazon,"General Expenses, Transportation, Entertainment, Travel, Dining, Groceries",2022-09-07,Singapore
    9224,Checking,954.95,Grab,Travel,2022-12-15,Singapore
    9225,Checking,417.91,Google,"Dining, General Expenses, Travel, Transportation",2022-10-23,Japan
    9226,Checking,115.72,Google,"Transportation, Entertainment, General Expenses, Groceries, Travel",2022-12-24,Indonesia
    9227,Joint Account,28.3,Fairprice,"General Expenses, Transportation, Entertainment, Travel",2022-08-19,Singapore
    9228,Checking,966.17,Starbucks,Entertainment,2022-08-28,Singapore
    9229,Checking,177.03,Walmart,"Entertainment, Dining, Travel",2022-09-09,Singapore
    9230,Joint Account,726.06,Google,Travel,2022-11-17,Singapore
    9231,Savings,141.89,Starbucks,"Groceries, Travel, Dining, General Expenses",2022-10-11,Singapore
    9232,Joint Account,790.19,Google,"General Expenses, Entertainment",2022-12-16,Japan
    9233,Checking,407.31,Gojek,"Entertainment, Travel, General Expenses",2022-09-26,Japan
    9234,Savings,136.16,Grab,"Transportation, General Expenses, Groceries",2022-11-21,Australia
    9235,Checking,987.71,Walmart,Entertainment,2022-07-02,Indonesia
    9236,Joint Account,218.31,Uber,Dining,2022-11-25,Australia
    9237,Savings,486.99,Uber,"Travel, Groceries",2022-11-17,Japan
    9238,Savings,22.24,Google,"Entertainment, Groceries, General Expenses, Transportation, Travel, Dining",2022-08-21,Australia
    9239,Joint Account,79.21,Gojek,Dining,2022-08-16,Japan
    9240,Joint Account,885.64,ACME,Travel,2022-07-31,Singapore
    9241,Joint Account,466.48,ACME,"Transportation, Entertainment, Groceries, Dining",2022-11-18,Singapore
    9242,Joint Account,499.7,Uber,"Groceries, Entertainment, Dining, General Expenses, Transportation",2022-06-11,Indonesia
    9243,Savings,849.82,Starbucks,"Transportation, Dining",2022-10-04,Indonesia
    9244,Checking,520.96,Amazon,"Entertainment, Dining",2022-12-08,Singapore
    9245,Checking,235.87,Fairprice,"General Expenses, Groceries, Transportation, Travel, Entertainment",2022-11-01,Singapore
    9246,Joint Account,162.71,Uber,"General Expenses, Travel, Groceries",2022-11-28,Japan
    9247,Joint Account,326.97,Google,"Entertainment, Dining, Groceries, General Expenses, Transportation",2022-06-20,Australia
    9248,Checking,726.01,Grab,"Transportation, General Expenses, Entertainment",2022-12-30,Singapore
    9249,Savings,258.12,Fairprice,"Groceries, Entertainment, Dining",2022-06-22,Indonesia
    9250,Checking,874.72,Gojek,"Groceries, Dining, Entertainment, Travel, Transportation",2022-12-12,Indonesia
    9251,Checking,472.97,Starbucks,"Travel, General Expenses, Entertainment",2022-12-22,Japan
    9252,Checking,317.37,Amazon,"Groceries, General Expenses, Entertainment, Travel, Transportation, Dining",2022-11-12,Japan
    9253,Savings,82.33,Fairprice,"General Expenses, Groceries, Travel, Dining, Entertainment",2022-10-31,Indonesia
    9254,Checking,202.95,Google,"Travel, Dining, Transportation, Groceries, General Expenses",2022-06-03,Singapore
    9255,Checking,564.76,Google,"Groceries, Entertainment, Travel, General Expenses",2022-06-08,Australia
    9256,Checking,119.79,Uber,General Expenses,2022-07-09,Japan
    9257,Checking,66.34,ACME,"General Expenses, Entertainment",2022-11-07,Japan
    9258,Joint Account,164.61,Starbucks,Transportation,2022-12-08,Australia
    9259,Savings,281.11,Grab,"Entertainment, General Expenses, Groceries",2022-09-28,Indonesia
    9260,Checking,921.68,Starbucks,"Transportation, Travel, Entertainment, Dining, General Expenses",2022-10-11,Japan
    9261,Joint Account,208.34,Gojek,"Travel, Dining, Entertainment, General Expenses, Groceries",2022-09-06,Indonesia
    9262,Joint Account,514.95,Uber,Travel,2022-11-23,Australia
    9263,Checking,696.36,Gojek,"General Expenses, Groceries, Travel, Entertainment",2022-11-08,Australia
    9264,Savings,619.29,Uber,"Transportation, Entertainment, Dining, General Expenses",2022-11-04,Australia
    9265,Checking,894.08,Grab,"Groceries, Entertainment, General Expenses, Travel, Transportation, Dining",2022-11-12,Japan
    9266,Checking,699.88,Google,"Groceries, Entertainment, Dining",2022-12-02,Australia
    9267,Joint Account,392.69,ACME,"Transportation, Groceries",2022-06-06,Australia
    9268,Joint Account,989.72,Starbucks,Entertainment,2022-06-12,Indonesia
    9269,Joint Account,616.48,ACME,"Dining, Transportation",2022-10-28,Japan
    9270,Checking,78.21,Grab,Groceries,2022-12-17,Singapore
    9271,Joint Account,66.4,Starbucks,Dining,2022-08-08,Japan
    9272,Joint Account,612.06,Amazon,"Dining, General Expenses",2022-06-30,Australia
    9273,Savings,253.27,Fairprice,Entertainment,2022-11-21,Australia
    9274,Savings,495.93,Amazon,"Travel, General Expenses, Groceries, Transportation, Entertainment",2022-08-16,Indonesia
    9275,Checking,295.13,Starbucks,"Entertainment, General Expenses, Travel, Dining",2022-10-22,Indonesia
    9276,Checking,708.59,Google,"General Expenses, Groceries, Travel, Dining, Entertainment, Transportation",2022-09-21,Singapore
    9277,Checking,362.61,Starbucks,Groceries,2022-09-08,Singapore
    9278,Checking,77.64,Uber,Groceries,2022-07-27,Indonesia
    9279,Savings,839.81,Uber,General Expenses,2022-07-13,Australia
    9280,Checking,746.11,Amazon,"Transportation, Groceries, Dining",2022-11-20,Australia
    9281,Checking,844.81,Grab,"Travel, Dining, Transportation, General Expenses, Entertainment, Groceries",2022-06-03,Indonesia
    9282,Checking,188.52,Walmart,"Dining, Transportation, Entertainment",2022-10-13,Indonesia
    9283,Savings,848.03,Gojek,General Expenses,2022-08-14,Singapore
    9284,Joint Account,140.61,Uber,"General Expenses, Dining, Entertainment, Transportation, Groceries, Travel",2022-09-26,Japan
    9285,Checking,947.26,Walmart,"Entertainment, Transportation, Groceries, Travel",2022-11-22,Singapore
    9286,Checking,63.14,Fairprice,Travel,2022-08-07,Japan
    9287,Savings,907.35,Grab,"Travel, Groceries, Transportation, General Expenses, Dining",2022-11-23,Japan
    9288,Joint Account,749.59,Google,Travel,2022-06-01,Australia
    9289,Joint Account,725.97,Fairprice,"Travel, Groceries, Dining, General Expenses, Entertainment",2022-12-29,Indonesia
    9290,Checking,723.83,Fairprice,"Transportation, Dining, Entertainment, Groceries, General Expenses",2022-10-16,Japan
    9291,Savings,901.06,Fairprice,"Transportation, General Expenses, Groceries",2022-07-04,Australia
    9292,Savings,938.42,Amazon,"Transportation, Dining, Travel, Groceries, Entertainment",2022-09-19,Indonesia
    9293,Checking,830.99,Google,"General Expenses, Groceries, Entertainment, Dining, Transportation",2022-09-06,Japan
    9294,Savings,932.45,Walmart,"Dining, Transportation, Travel, Entertainment, Groceries",2022-06-04,Singapore
    9295,Joint Account,441.79,Uber,Travel,2022-10-11,Australia
    9296,Checking,254.15,Uber,"Entertainment, Travel, Groceries, Transportation, Dining",2022-06-27,Japan
    9297,Checking,957.3,ACME,"Dining, Entertainment, Travel, General Expenses",2022-08-10,Australia
    9298,Joint Account,93.98,Starbucks,"Entertainment, Travel, Groceries, Dining, General Expenses, Transportation",2022-06-30,Indonesia
    9299,Joint Account,687.95,Fairprice,"Transportation, Dining, General Expenses",2022-07-07,Singapore
    9300,Savings,15.37,Uber,"Transportation, Dining, Entertainment, General Expenses, Groceries, Travel",2022-12-10,Indonesia
    9301,Joint Account,490.31,Fairprice,"Entertainment, Transportation, Groceries, Dining",2022-10-25,Indonesia
    9302,Savings,773.16,Walmart,"Groceries, Transportation, Travel",2022-09-30,Japan
    9303,Checking,924.95,Starbucks,Entertainment,2022-06-03,Indonesia
    9304,Checking,706.92,Fairprice,"Groceries, Travel, Transportation, Dining, General Expenses",2022-12-01,Japan
    9305,Checking,541.37,Starbucks,"Dining, Transportation",2022-06-24,Indonesia
    9306,Joint Account,836.47,Google,Dining,2022-07-25,Japan
    9307,Savings,4.2,ACME,"Travel, Groceries, Dining",2022-09-05,Japan
    9308,Savings,204.49,Grab,"Groceries, Transportation, Entertainment, Dining, General Expenses, Travel",2022-10-26,Singapore
    9309,Savings,154.45,Uber,Dining,2022-11-25,Australia
    9310,Checking,459.7,Starbucks,"Travel, Entertainment",2022-08-05,Indonesia
    9311,Joint Account,519.4,ACME,"General Expenses, Travel, Entertainment, Groceries, Dining, Transportation",2022-10-13,Singapore
    9312,Joint Account,751.05,ACME,"General Expenses, Travel, Groceries, Entertainment, Transportation",2022-10-31,Japan
    9313,Checking,598.52,Walmart,Entertainment,2022-06-29,Japan
    9314,Savings,604.54,Uber,"Travel, Entertainment, Groceries, General Expenses",2022-06-27,Singapore
    9315,Checking,757.92,Gojek,"Groceries, Transportation, Dining, Entertainment, General Expenses, Travel",2022-09-09,Australia
    9316,Savings,172.26,Uber,"General Expenses, Groceries, Transportation",2022-07-18,Singapore
    9317,Joint Account,485.42,Walmart,"Dining, Travel",2022-12-14,Singapore
    9318,Checking,51.09,Walmart,"General Expenses, Groceries, Dining, Transportation",2022-11-22,Japan
    9319,Savings,0.05,Google,"Dining, Groceries, Travel, Entertainment, General Expenses, Transportation",2022-08-07,Japan
    9320,Checking,613.84,Google,"Transportation, Travel, General Expenses, Groceries, Entertainment",2022-10-18,Singapore
    9321,Savings,473.35,Walmart,"Transportation, General Expenses, Dining, Groceries, Entertainment, Travel",2022-11-05,Singapore
    9322,Joint Account,641.27,ACME,Dining,2022-08-21,Indonesia
    9323,Checking,861.64,Walmart,"General Expenses, Groceries",2022-11-08,Indonesia
    9324,Savings,161.1,Grab,"Dining, Travel, Entertainment, Transportation, General Expenses, Groceries",2022-12-07,Japan
    9325,Joint Account,457.03,Fairprice,Transportation,2022-10-02,Indonesia
    9326,Joint Account,184.55,Grab,"Entertainment, Transportation, Dining, General Expenses, Travel",2022-11-17,Australia
    9327,Joint Account,636.43,Grab,"Groceries, Travel",2022-06-03,Australia
    9328,Checking,186.19,Uber,"General Expenses, Dining, Entertainment, Travel",2022-11-04,Indonesia
    9329,Checking,879.45,Grab,"General Expenses, Groceries, Dining, Entertainment, Travel",2022-09-17,Australia
    9330,Savings,220.46,ACME,"Groceries, Entertainment, Dining, Transportation, Travel",2022-12-01,Australia
    9331,Joint Account,398.06,Amazon,Groceries,2022-07-05,Indonesia
    9332,Savings,390.37,Grab,Travel,2022-12-24,Japan
    9333,Joint Account,859.29,Amazon,Travel,2022-11-15,Indonesia
    9334,Checking,353.94,ACME,Transportation,2022-07-18,Japan
    9335,Checking,686.39,Grab,"General Expenses, Dining, Transportation, Entertainment",2022-06-02,Indonesia
    9336,Joint Account,245.2,Amazon,"Dining, Entertainment, Travel, General Expenses, Groceries, Transportation",2022-08-16,Singapore
    9337,Joint Account,554.17,ACME,"Entertainment, General Expenses, Transportation, Travel, Dining",2022-10-08,Indonesia
    9338,Checking,376.06,Grab,"Dining, General Expenses, Groceries, Entertainment, Travel",2022-10-13,Australia
    9339,Joint Account,282.05,Grab,"Entertainment, Travel, Transportation",2022-12-19,Australia
    9340,Savings,716.94,Google,"Entertainment, Travel",2022-12-02,Singapore
    9341,Savings,949.22,Grab,Groceries,2022-08-03,Australia
    9342,Joint Account,400.01,Amazon,"Transportation, Groceries",2022-08-10,Singapore
    9343,Joint Account,130.16,Walmart,General Expenses,2022-11-23,Indonesia
    9344,Joint Account,841.66,Fairprice,"Travel, Dining",2022-08-04,Singapore
    9345,Savings,540.3,Fairprice,"Dining, Entertainment, General Expenses, Groceries",2022-11-27,Indonesia
    9346,Checking,272.69,Walmart,"Groceries, Dining, Entertainment, General Expenses",2022-09-28,Australia
    9347,Checking,214.78,Fairprice,Travel,2022-12-03,Singapore
    9348,Joint Account,254.33,Google,"Travel, Transportation, General Expenses, Dining, Entertainment, Groceries",2022-09-05,Singapore
    9349,Joint Account,561.86,Grab,"Transportation, Groceries, Dining",2022-11-25,Japan
    9350,Joint Account,693.83,Amazon,"Transportation, Travel, Entertainment",2022-06-05,Singapore
    9351,Joint Account,972.42,Google,"Groceries, Dining, General Expenses",2022-12-04,Japan
    9352,Joint Account,882.39,Walmart,"General Expenses, Dining, Travel, Groceries",2022-06-25,Japan
    9353,Checking,738.72,Starbucks,"Entertainment, Travel, Transportation, Dining, General Expenses",2022-10-06,Singapore
    9354,Savings,895.57,Gojek,"Groceries, General Expenses",2022-11-08,Australia
    9355,Checking,887.07,Fairprice,"Travel, Entertainment",2022-10-16,Singapore
    9356,Savings,766.69,Amazon,"Groceries, Transportation, General Expenses, Dining, Travel",2022-08-11,Japan
    9357,Checking,886.04,Walmart,"Travel, Groceries, General Expenses, Dining",2022-10-11,Indonesia
    9358,Savings,660.83,Gojek,"Transportation, General Expenses, Dining, Travel, Groceries",2022-11-25,Indonesia
    9359,Joint Account,26.01,Google,"Groceries, Transportation, Travel, Dining, General Expenses, Entertainment",2022-12-17,Indonesia
    9360,Checking,623.83,Gojek,"Entertainment, Groceries, Transportation, General Expenses, Travel",2022-08-06,Indonesia
    9361,Savings,703.25,Gojek,"Groceries, Dining, Entertainment, Travel",2022-08-20,Singapore
    9362,Checking,585.91,Fairprice,"Transportation, Dining",2022-09-07,Indonesia
    9363,Checking,632.67,Starbucks,Transportation,2022-08-21,Japan
    9364,Checking,649.61,Walmart,Travel,2022-07-12,Singapore
    9365,Joint Account,906.24,Walmart,"Dining, Groceries, Entertainment",2022-10-19,Singapore
    9366,Savings,840.65,Amazon,"General Expenses, Transportation, Entertainment, Dining, Travel",2022-08-16,Japan
    9367,Checking,81.97,Grab,"Groceries, Dining, Travel",2022-09-26,Australia
    9368,Checking,355.59,Fairprice,"General Expenses, Travel, Entertainment, Transportation, Dining",2022-08-29,Indonesia
    9369,Checking,652.66,Walmart,"Transportation, Entertainment, General Expenses",2022-12-14,Indonesia
    9370,Joint Account,263.85,Gojek,"Entertainment, Transportation",2022-07-22,Singapore
    9371,Savings,26.74,Amazon,"Entertainment, Travel, Groceries, Dining, Transportation, General Expenses",2022-10-14,Australia
    9372,Checking,898.95,Grab,"Transportation, Travel, General Expenses, Entertainment, Groceries",2022-10-14,Australia
    9373,Joint Account,365.5,Starbucks,General Expenses,2022-06-10,Australia
    9374,Joint Account,846.4,Gojek,"General Expenses, Transportation, Groceries, Travel",2022-12-05,Indonesia
    9375,Joint Account,583.71,ACME,"Groceries, Dining, Entertainment",2022-09-12,Singapore
    9376,Checking,622.53,Amazon,General Expenses,2022-10-09,Australia
    9377,Savings,619.47,Gojek,Transportation,2022-12-18,Singapore
    9378,Savings,565.82,Gojek,"Dining, General Expenses, Entertainment, Travel, Transportation",2022-08-26,Japan
    9379,Savings,866.27,Walmart,"General Expenses, Transportation, Groceries, Entertainment, Travel",2022-06-03,Singapore
    9380,Joint Account,658.43,Google,"Entertainment, Groceries, General Expenses, Dining, Transportation, Travel",2022-08-27,Singapore
    9381,Joint Account,201.18,Amazon,"Travel, Transportation, Groceries, General Expenses, Entertainment",2022-12-28,Singapore
    9382,Savings,531.14,Uber,"General Expenses, Dining, Transportation",2022-09-16,Japan
    9383,Savings,600.73,Walmart,"Dining, Groceries, Transportation, Travel",2022-10-04,Singapore
    9384,Savings,449.63,ACME,"Dining, Entertainment, Transportation, Groceries",2022-11-16,Japan
    9385,Checking,842.71,Gojek,"Transportation, Dining",2022-11-06,Japan
    9386,Savings,415.16,Walmart,"Transportation, Dining",2022-09-30,Indonesia
    9387,Savings,676.8,Starbucks,Dining,2022-11-25,Indonesia
    9388,Checking,267.63,Fairprice,"Entertainment, General Expenses, Dining, Travel",2022-09-23,Australia
    9389,Joint Account,949.64,Google,"Entertainment, Travel, Dining, General Expenses",2022-06-23,Australia
    9390,Joint Account,85.92,Gojek,"Transportation, Dining",2022-11-07,Singapore
    9391,Checking,585.89,Gojek,"Transportation, Groceries, Travel, Entertainment",2022-12-08,Japan
    9392,Checking,990.29,Uber,"Transportation, General Expenses, Travel, Groceries, Entertainment",2022-07-05,Australia
    9393,Joint Account,289.11,Uber,"Travel, Groceries, Dining, General Expenses, Transportation",2022-07-17,Indonesia
    9394,Joint Account,795.01,ACME,"Groceries, General Expenses, Entertainment",2022-09-16,Japan
    9395,Checking,120.84,Amazon,"Groceries, General Expenses, Entertainment, Dining, Travel, Transportation",2022-11-24,Japan
    9396,Savings,400.45,Amazon,"Entertainment, Travel, Dining, Transportation, Groceries, General Expenses",2022-10-31,Indonesia
    9397,Joint Account,749.22,Starbucks,Entertainment,2022-10-29,Singapore
    9398,Checking,567.33,Fairprice,"Travel, Groceries, General Expenses, Dining, Transportation",2022-11-28,Singapore
    9399,Joint Account,142.45,Fairprice,"General Expenses, Entertainment",2022-12-30,Indonesia
    9400,Joint Account,877.02,Starbucks,"Entertainment, General Expenses, Dining, Groceries, Transportation, Travel",2022-06-22,Australia
    9401,Checking,296.9,Google,"General Expenses, Dining, Groceries",2022-12-29,Indonesia
    9402,Savings,592.98,Amazon,Travel,2022-11-23,Indonesia
    9403,Joint Account,813.35,Google,"Entertainment, Travel, General Expenses",2022-08-22,Singapore
    9404,Savings,780.37,Amazon,"Groceries, Dining, Transportation",2022-12-27,Indonesia
    9405,Checking,888.65,Grab,Transportation,2022-06-03,Singapore
    9406,Joint Account,69.35,Uber,"Groceries, Dining, Transportation",2022-09-02,Japan
    9407,Savings,946.75,Starbucks,"Groceries, General Expenses, Entertainment, Travel",2022-08-27,Indonesia
    9408,Savings,77.15,Grab,"General Expenses, Entertainment, Groceries, Travel, Dining, Transportation",2022-11-10,Australia
    9409,Savings,441.97,Starbucks,Travel,2022-06-26,Australia
    9410,Savings,932.36,Grab,Transportation,2022-08-22,Australia
    9411,Savings,988.1,Amazon,"Travel, Dining, Entertainment, Groceries",2022-08-22,Japan
    9412,Checking,8.57,Google,"General Expenses, Groceries, Entertainment, Dining",2022-09-13,Singapore
    9413,Checking,861.67,Google,Groceries,2022-06-25,Australia
    9414,Checking,692.69,Amazon,"Dining, Travel, Entertainment, General Expenses, Transportation, Groceries",2022-09-26,Singapore
    9415,Checking,487.53,Grab,"General Expenses, Entertainment, Transportation",2022-06-09,Australia
    9416,Joint Account,156.23,Fairprice,"Dining, Transportation, General Expenses",2022-06-17,Singapore
    9417,Checking,981.01,Uber,Groceries,2022-12-31,Japan
    9418,Checking,853.67,Google,"Transportation, General Expenses, Travel, Groceries, Dining",2022-06-07,Japan
    9419,Savings,157.43,Starbucks,Transportation,2022-06-20,Australia
    9420,Joint Account,450.67,Starbucks,"Groceries, Dining, Travel",2022-10-07,Japan
    9421,Joint Account,55.93,Grab,"Dining, General Expenses, Groceries, Travel, Transportation, Entertainment",2022-07-18,Australia
    9422,Joint Account,2.22,Uber,"General Expenses, Travel, Dining, Entertainment",2022-11-08,Singapore
    9423,Savings,70.24,Walmart,"General Expenses, Travel",2022-09-22,Japan
    9424,Checking,464.76,Walmart,"Groceries, General Expenses, Entertainment, Dining, Transportation",2022-11-04,Indonesia
    9425,Savings,897.02,Grab,"Travel, Dining, Transportation, Groceries",2022-09-30,Indonesia
    9426,Savings,491.89,Gojek,"Travel, General Expenses, Dining",2022-10-14,Australia
    9427,Savings,911.32,Walmart,"Transportation, Dining, General Expenses, Travel, Groceries, Entertainment",2022-11-21,Japan
    9428,Joint Account,720.67,ACME,Entertainment,2022-09-26,Singapore
    9429,Joint Account,707.84,Starbucks,"Groceries, Dining, Travel",2022-09-13,Singapore
    9430,Checking,777.77,Gojek,"Groceries, Entertainment, General Expenses, Transportation, Dining, Travel",2022-12-23,Singapore
    9431,Checking,124.04,Walmart,Groceries,2022-11-21,Australia
    9432,Joint Account,992.21,Fairprice,"Entertainment, Groceries",2022-09-26,Indonesia
    9433,Savings,261.16,Google,"Dining, Groceries, General Expenses",2022-09-20,Indonesia
    9434,Joint Account,156.67,Gojek,"Groceries, General Expenses, Travel, Entertainment",2022-11-24,Australia
    9435,Joint Account,307.17,Gojek,"Dining, Groceries, Travel, Entertainment, General Expenses",2022-08-11,Singapore
    9436,Checking,376.23,Amazon,"Dining, Transportation, Entertainment, General Expenses",2022-11-26,Japan
    9437,Savings,674.03,Fairprice,"General Expenses, Entertainment, Travel, Transportation, Groceries, Dining",2022-06-25,Indonesia
    9438,Savings,998.11,Walmart,"Entertainment, Groceries, Transportation, General Expenses",2022-06-19,Australia
    9439,Savings,28.27,Starbucks,Entertainment,2022-07-21,Japan
    9440,Checking,638.86,ACME,"Transportation, Entertainment, Travel, Dining, Groceries, General Expenses",2022-11-09,Australia
    9441,Savings,432.83,Fairprice,"Entertainment, Dining, Travel, Transportation, Groceries, General Expenses",2022-08-10,Singapore
    9442,Joint Account,839.77,Google,General Expenses,2022-06-29,Singapore
    9443,Savings,422.71,ACME,"Travel, Groceries, Entertainment",2022-07-13,Australia
    9444,Savings,433.17,Amazon,"General Expenses, Groceries",2022-10-23,Japan
    9445,Savings,812.77,Fairprice,"Dining, Travel",2022-07-04,Indonesia
    9446,Checking,713.05,Walmart,"Entertainment, Groceries, General Expenses, Dining",2022-09-12,Japan
    9447,Savings,566.19,Amazon,Travel,2022-07-10,Singapore
    9448,Savings,763.1,Google,"Transportation, Dining, Entertainment, General Expenses, Travel, Groceries",2022-12-06,Indonesia
    9449,Joint Account,272.03,Uber,"Travel, General Expenses, Entertainment, Dining, Groceries",2022-06-13,Japan
    9450,Joint Account,825.88,Starbucks,Transportation,2022-08-26,Singapore
    9451,Checking,228.95,Fairprice,"Transportation, General Expenses, Groceries",2022-06-25,Japan
    9452,Savings,578.87,Starbucks,"Travel, General Expenses, Transportation",2022-10-15,Australia
    9453,Savings,180.52,Walmart,"General Expenses, Entertainment, Transportation, Travel",2022-10-31,Australia
    9454,Joint Account,553.14,Walmart,General Expenses,2022-09-18,Japan
    9455,Checking,467.13,Walmart,"Groceries, General Expenses, Transportation, Dining, Travel, Entertainment",2022-08-16,Australia
    9456,Checking,184.09,ACME,"Entertainment, Travel, General Expenses, Groceries",2022-07-28,Indonesia
    9457,Savings,760.37,Uber,"Transportation, Travel, General Expenses, Entertainment, Dining",2022-12-30,Singapore
    9458,Checking,313.65,Grab,"Groceries, Dining, Transportation, General Expenses",2022-10-16,Australia
    9459,Savings,303.33,Google,"Groceries, Transportation, Dining, Entertainment, Travel, General Expenses",2022-12-27,Indonesia
    9460,Joint Account,833.8,Amazon,"Entertainment, Dining, Transportation",2022-08-01,Singapore
    9461,Checking,155.45,Gojek,"Groceries, Entertainment",2022-08-03,Singapore
    9462,Joint Account,990.66,Walmart,"Dining, General Expenses, Travel, Groceries",2022-09-17,Singapore
    9463,Savings,529.24,Walmart,"Transportation, Groceries, Entertainment, Travel, Dining",2022-08-08,Japan
    9464,Checking,285.45,Fairprice,"Dining, Groceries, Entertainment",2022-06-21,Indonesia
    9465,Savings,597.17,Grab,"Dining, Travel, Groceries, Transportation, Entertainment, General Expenses",2022-10-21,Singapore
    9466,Checking,599.68,Uber,Entertainment,2022-10-26,Singapore
    9467,Joint Account,164.73,Starbucks,"Entertainment, Dining, General Expenses, Groceries, Travel, Transportation",2022-11-10,Australia
    9468,Checking,200.22,Uber,"Entertainment, General Expenses",2022-07-14,Japan
    9469,Savings,796.86,Uber,"Entertainment, General Expenses, Groceries, Transportation, Travel, Dining",2022-07-21,Indonesia
    9470,Savings,869.81,Walmart,Entertainment,2022-09-12,Japan
    9471,Savings,268.19,Gojek,"Groceries, Transportation",2022-11-25,Singapore
    9472,Joint Account,135.21,Gojek,"Entertainment, Groceries, Dining",2022-08-20,Singapore
    9473,Checking,614.1,Fairprice,"General Expenses, Transportation, Dining, Groceries",2022-11-21,Japan
    9474,Savings,77.38,ACME,"Dining, General Expenses",2022-06-16,Indonesia
    9475,Checking,895.89,Starbucks,"Travel, Entertainment, Groceries, Dining, General Expenses",2022-11-08,Indonesia
    9476,Savings,910.95,Uber,"Groceries, Travel, Entertainment, General Expenses, Transportation",2022-06-22,Indonesia
    9477,Checking,851.71,Starbucks,Travel,2022-10-09,Indonesia
    9478,Savings,397.49,Grab,"Transportation, Entertainment",2022-09-25,Singapore
    9479,Checking,212.44,Starbucks,"Transportation, General Expenses, Dining, Groceries, Travel",2022-09-13,Indonesia
    9480,Checking,702.35,Gojek,Entertainment,2022-07-24,Australia
    9481,Joint Account,60.97,Grab,"Entertainment, Transportation, Groceries, General Expenses, Dining",2022-12-08,Singapore
    9482,Savings,111.0,Google,"Dining, Transportation, Entertainment",2022-09-09,Japan
    9483,Savings,979.06,Uber,"General Expenses, Transportation, Groceries, Dining, Entertainment",2022-12-10,Singapore
    9484,Savings,388.66,ACME,"Groceries, Dining, Entertainment, Transportation, General Expenses",2022-09-26,Indonesia
    9485,Joint Account,431.38,Amazon,"General Expenses, Groceries, Travel, Transportation, Dining",2022-06-16,Australia
    9486,Joint Account,726.63,Google,"Travel, Groceries, Transportation, Dining, Entertainment",2022-11-26,Japan
    9487,Checking,273.81,Amazon,"Dining, General Expenses, Entertainment, Groceries",2022-06-24,Japan
    9488,Joint Account,270.52,Walmart,Transportation,2022-12-24,Australia
    9489,Joint Account,206.88,Amazon,Groceries,2022-08-02,Singapore
    9490,Checking,933.94,Grab,"Transportation, Travel, Entertainment, General Expenses, Dining, Groceries",2022-10-21,Australia
    9491,Joint Account,995.2,Amazon,"Groceries, Dining",2022-08-09,Australia
    9492,Joint Account,578.39,Grab,Dining,2022-10-30,Japan
    9493,Checking,972.26,Amazon,"Entertainment, Dining, General Expenses",2022-07-25,Japan
    9494,Joint Account,431.14,ACME,"Groceries, Entertainment, Travel",2022-12-12,Australia
    9495,Savings,559.94,Google,Travel,2022-12-31,Japan
    9496,Savings,8.7,ACME,Transportation,2022-09-30,Indonesia
    9497,Checking,286.85,Walmart,"Transportation, Travel, General Expenses",2022-09-28,Indonesia
    9498,Joint Account,367.04,Google,"Transportation, Travel, Groceries, General Expenses, Dining, Entertainment",2022-08-06,Singapore
    9499,Savings,80.02,Gojek,"Groceries, General Expenses, Travel, Transportation, Dining, Entertainment",2022-09-11,Japan
    9500,Joint Account,602.72,Grab,"Travel, General Expenses",2022-10-11,Japan
    9501,Checking,874.7,Uber,"Entertainment, General Expenses, Travel, Dining, Transportation, Groceries",2022-12-20,Australia
    9502,Checking,583.04,Fairprice,"Entertainment, Dining, Travel",2022-08-28,Indonesia
    9503,Joint Account,313.9,ACME,Dining,2022-12-13,Singapore
    9504,Checking,47.6,ACME,"Dining, Entertainment, Transportation, General Expenses",2022-10-21,Australia
    9505,Joint Account,67.24,ACME,"Dining, Transportation, Groceries, Entertainment, General Expenses",2022-09-23,Indonesia
    9506,Joint Account,467.26,Uber,"Transportation, Dining, Travel, Groceries, Entertainment",2022-07-23,Australia
    9507,Joint Account,752.01,ACME,"Entertainment, Transportation",2022-12-06,Japan
    9508,Savings,789.7,Grab,"General Expenses, Entertainment",2022-06-20,Japan
    9509,Joint Account,897.09,Starbucks,Transportation,2022-08-23,Indonesia
    9510,Joint Account,127.79,Amazon,"Travel, Transportation, Entertainment, General Expenses",2022-07-14,Singapore
    9511,Joint Account,300.62,Starbucks,"Travel, General Expenses, Dining, Transportation, Entertainment, Groceries",2022-08-15,Japan
    9512,Checking,55.0,Fairprice,"Travel, Entertainment",2022-09-21,Japan
    9513,Savings,148.76,Google,"Dining, Entertainment, Travel, Groceries, Transportation",2022-06-08,Indonesia
    9514,Savings,818.73,Grab,General Expenses,2022-12-05,Singapore
    9515,Checking,249.92,Gojek,"Entertainment, Transportation",2022-10-09,Australia
    9516,Savings,802.94,Gojek,"Travel, Dining",2022-11-25,Singapore
    9517,Savings,974.38,Starbucks,"Dining, Groceries, Transportation",2022-11-22,Japan
    9518,Savings,32.28,Grab,Transportation,2022-10-08,Australia
    9519,Joint Account,135.46,Gojek,"Entertainment, Transportation",2022-06-15,Japan
    9520,Joint Account,95.25,Uber,Dining,2022-11-05,Australia
    9521,Savings,448.42,Google,"General Expenses, Dining",2022-07-13,Japan
    9522,Joint Account,958.13,Uber,"Groceries, Dining",2022-12-05,Australia
    9523,Joint Account,160.34,Amazon,"Groceries, Travel, Entertainment, Transportation, General Expenses",2022-08-28,Japan
    9524,Joint Account,138.88,Fairprice,"General Expenses, Dining, Travel, Groceries, Transportation, Entertainment",2022-11-14,Indonesia
    9525,Joint Account,780.3,Gojek,"Entertainment, Dining, General Expenses, Groceries",2022-08-15,Japan
    9526,Savings,293.35,Google,"Entertainment, General Expenses, Transportation, Dining, Travel, Groceries",2022-08-12,Japan
    9527,Savings,355.02,Google,"Dining, Groceries, Entertainment",2022-09-18,Australia
    9528,Checking,421.96,Walmart,"Dining, General Expenses, Transportation, Groceries, Entertainment, Travel",2022-07-09,Singapore
    9529,Savings,91.59,Walmart,"Dining, Transportation, General Expenses, Groceries, Travel",2022-10-18,Australia
    9530,Savings,509.72,Amazon,"Dining, General Expenses, Groceries",2022-06-03,Australia
    9531,Savings,857.95,Starbucks,"Transportation, Dining",2022-10-19,Australia
    9532,Joint Account,449.27,Amazon,"Dining, Groceries, Transportation",2022-08-16,Australia
    9533,Checking,760.78,Fairprice,"Entertainment, Groceries, Transportation, Travel, General Expenses, Dining",2022-12-21,Singapore
    9534,Savings,160.58,Google,"General Expenses, Entertainment, Groceries, Transportation, Travel, Dining",2022-06-07,Australia
    9535,Checking,933.39,Grab,"Groceries, General Expenses",2022-06-03,Japan
    9536,Joint Account,701.31,Uber,"Dining, Travel",2022-11-06,Singapore
    9537,Joint Account,544.04,Walmart,"Transportation, Entertainment, General Expenses",2022-11-11,Indonesia
    9538,Savings,873.31,Gojek,"General Expenses, Entertainment, Dining, Transportation, Travel, Groceries",2022-10-26,Indonesia
    9539,Checking,760.3,Uber,"Transportation, Travel, Entertainment, Groceries",2022-12-31,Indonesia
    9540,Savings,316.24,Grab,Travel,2022-10-04,Australia
    9541,Joint Account,952.47,ACME,"Travel, General Expenses, Dining, Groceries",2022-12-10,Japan
    9542,Checking,62.53,Uber,"Travel, Dining",2022-12-28,Indonesia
    9543,Checking,25.09,Grab,Dining,2022-11-13,Singapore
    9544,Savings,21.96,Gojek,"General Expenses, Travel",2022-12-25,Indonesia
    9545,Savings,718.39,Google,"Dining, Transportation, General Expenses, Entertainment, Travel, Groceries",2022-10-26,Australia
    9546,Savings,343.23,ACME,"General Expenses, Travel, Entertainment, Transportation, Dining, Groceries",2022-07-05,Singapore
    9547,Savings,68.09,Starbucks,"Dining, Transportation, Entertainment",2022-12-26,Japan
    9548,Checking,777.43,Walmart,"General Expenses, Travel, Groceries, Entertainment, Transportation, Dining",2022-09-23,Japan
    9549,Savings,348.22,Google,Travel,2022-12-11,Japan
    9550,Savings,180.41,Google,"Dining, Groceries, Travel, General Expenses, Transportation, Entertainment",2022-10-02,Singapore
    9551,Savings,217.18,Amazon,"Transportation, Entertainment",2022-06-28,Japan
    9552,Savings,108.41,Walmart,Transportation,2022-08-14,Australia
    9553,Savings,974.23,Starbucks,"Travel, Dining",2022-11-16,Singapore
    9554,Joint Account,554.94,Gojek,"Groceries, Entertainment, Dining",2022-07-13,Australia
    9555,Checking,341.17,Fairprice,"Transportation, General Expenses, Entertainment, Groceries, Travel",2022-11-17,Japan
    9556,Joint Account,645.59,ACME,Groceries,2022-11-24,Singapore
    9557,Checking,335.18,Google,Dining,2022-11-07,Indonesia
    9558,Savings,145.5,Uber,"Transportation, General Expenses, Travel, Entertainment, Groceries, Dining",2022-11-08,Indonesia
    9559,Joint Account,513.44,Starbucks,"Groceries, Travel, Transportation",2022-11-09,Indonesia
    9560,Checking,329.02,Walmart,Groceries,2022-07-04,Japan
    9561,Savings,578.57,Starbucks,"Transportation, General Expenses, Dining, Travel, Groceries, Entertainment",2022-08-23,Japan
    9562,Savings,762.43,Fairprice,"Travel, Entertainment, Dining, Groceries, Transportation, General Expenses",2022-10-10,Japan
    9563,Savings,172.16,Walmart,"General Expenses, Groceries, Entertainment, Travel, Transportation, Dining",2022-12-21,Indonesia
    9564,Savings,423.45,ACME,"Travel, Transportation",2022-08-19,Indonesia
    9565,Joint Account,392.45,Grab,General Expenses,2022-09-25,Australia
    9566,Joint Account,91.12,Fairprice,"Entertainment, General Expenses, Groceries",2022-08-21,Japan
    9567,Savings,473.85,Gojek,Transportation,2022-10-06,Singapore
    9568,Checking,192.56,Starbucks,"Dining, Transportation, Entertainment",2022-12-08,Japan
    9569,Savings,380.13,ACME,"Travel, Entertainment",2022-06-30,Singapore
    9570,Checking,8.05,Starbucks,"Travel, Groceries",2022-07-21,Singapore
    9571,Checking,493.7,Uber,Entertainment,2022-12-25,Indonesia
    9572,Checking,524.17,Starbucks,General Expenses,2022-07-28,Japan
    9573,Joint Account,427.56,Grab,"Dining, Travel, Transportation",2022-09-21,Japan
    9574,Joint Account,560.19,Grab,Transportation,2022-09-22,Australia
    9575,Joint Account,498.13,ACME,Transportation,2022-07-02,Indonesia
    9576,Joint Account,897.66,Grab,"Dining, Travel, Transportation, Groceries, Entertainment",2022-11-01,Japan
    9577,Savings,808.62,Starbucks,Transportation,2022-12-22,Indonesia
    9578,Savings,718.46,Grab,"Transportation, Travel",2022-08-26,Australia
    9579,Checking,325.47,Google,"Dining, Entertainment, Transportation",2022-07-07,Singapore
    9580,Joint Account,371.17,Amazon,"Dining, General Expenses",2022-10-18,Indonesia
    9581,Checking,131.29,Uber,"General Expenses, Transportation, Groceries, Travel, Dining",2022-06-25,Singapore
    9582,Joint Account,37.27,Fairprice,"Transportation, Dining",2022-07-31,Australia
    9583,Savings,25.18,Uber,Groceries,2022-10-26,Australia
    9584,Checking,35.28,Walmart,"Groceries, General Expenses, Dining",2022-07-21,Singapore
    9585,Joint Account,847.93,Grab,"Dining, Transportation",2022-06-23,Japan
    9586,Savings,435.83,Grab,"Travel, General Expenses, Transportation, Groceries, Entertainment, Dining",2022-08-09,Singapore
    9587,Joint Account,667.6,ACME,Dining,2022-11-11,Singapore
    9588,Joint Account,658.93,Starbucks,"Transportation, General Expenses, Travel, Dining, Entertainment, Groceries",2022-07-29,Japan
    9589,Checking,766.23,Starbucks,"Entertainment, Groceries",2022-12-01,Singapore
    9590,Savings,942.17,Amazon,"General Expenses, Travel, Groceries, Transportation, Entertainment",2022-12-16,Singapore
    9591,Joint Account,696.72,Google,Dining,2022-10-23,Australia
    9592,Checking,862.63,Walmart,Transportation,2022-10-08,Japan
    9593,Savings,417.58,ACME,"Transportation, General Expenses, Travel, Dining, Groceries",2022-06-28,Japan
    9594,Savings,205.2,Fairprice,"Groceries, Entertainment, Dining, Travel, General Expenses",2022-06-06,Australia
    9595,Checking,87.85,ACME,"Entertainment, Dining",2022-06-29,Indonesia
    9596,Checking,971.05,ACME,Dining,2022-12-13,Indonesia
    9597,Joint Account,78.77,Amazon,Groceries,2022-07-21,Japan
    9598,Joint Account,480.1,Starbucks,"Transportation, Dining",2022-10-03,Australia
    9599,Joint Account,945.14,Uber,"Travel, Entertainment, Groceries",2022-10-27,Singapore
    9600,Savings,766.3,Gojek,Travel,2022-09-09,Singapore
    9601,Joint Account,423.78,ACME,"Groceries, Dining, General Expenses, Travel",2022-09-29,Singapore
    9602,Checking,663.27,Starbucks,"Groceries, Entertainment",2022-10-04,Singapore
    9603,Checking,175.38,Google,"Travel, General Expenses",2022-08-23,Indonesia
    9604,Joint Account,410.77,Gojek,Travel,2022-08-21,Japan
    9605,Savings,22.45,Google,"General Expenses, Transportation, Entertainment, Groceries, Dining, Travel",2022-06-30,Australia
    9606,Checking,606.95,Starbucks,"General Expenses, Dining, Groceries, Travel, Transportation",2022-09-14,Japan
    9607,Savings,144.11,Grab,"Travel, Transportation, Entertainment, Dining, General Expenses",2022-11-11,Japan
    9608,Checking,686.93,Gojek,"Transportation, Groceries, Travel, General Expenses, Entertainment",2022-06-08,Indonesia
    9609,Savings,367.66,Uber,"Entertainment, General Expenses, Travel",2022-07-22,Australia
    9610,Checking,222.77,Walmart,"Transportation, Groceries, General Expenses, Dining, Entertainment, Travel",2022-06-09,Singapore
    9611,Checking,652.76,Walmart,"Dining, Entertainment, Transportation, General Expenses, Travel, Groceries",2022-09-13,Australia
    9612,Checking,992.39,Walmart,"Dining, Transportation, General Expenses, Travel",2022-07-15,Australia
    9613,Joint Account,668.88,Uber,"General Expenses, Entertainment, Transportation, Groceries, Travel, Dining",2022-12-20,Japan
    9614,Checking,764.18,Walmart,"Dining, Transportation, Travel, Entertainment, General Expenses",2022-07-02,Australia
    9615,Checking,416.08,Gojek,"Travel, Groceries",2022-07-09,Australia
    9616,Savings,874.66,ACME,Dining,2022-07-08,Australia
    9617,Joint Account,683.13,ACME,"General Expenses, Travel, Groceries, Transportation",2022-08-28,Australia
    9618,Checking,274.55,ACME,"Transportation, Groceries",2022-12-07,Indonesia
    9619,Checking,471.55,Gojek,"General Expenses, Entertainment",2022-08-16,Indonesia
    9620,Savings,396.72,Grab,Groceries,2022-06-27,Singapore
    9621,Checking,934.33,Uber,Transportation,2022-11-19,Japan
    9622,Checking,772.79,ACME,"Dining, Groceries, Entertainment, Travel, Transportation, General Expenses",2022-09-07,Australia
    9623,Checking,191.95,Google,Entertainment,2022-07-28,Australia
    9624,Checking,316.81,ACME,Travel,2022-11-03,Indonesia
    9625,Checking,721.79,Fairprice,"Travel, Dining",2022-08-17,Japan
    9626,Joint Account,773.11,Walmart,"Travel, Transportation, General Expenses, Dining",2022-11-02,Singapore
    9627,Checking,952.98,Fairprice,"General Expenses, Entertainment, Dining",2022-06-29,Indonesia
    9628,Joint Account,348.12,ACME,"General Expenses, Dining, Groceries",2022-06-01,Japan
    9629,Checking,994.2,Google,"Transportation, Groceries",2022-08-18,Singapore
    9630,Joint Account,605.04,Starbucks,"Groceries, Dining, Travel",2022-09-14,Australia
    9631,Checking,457.81,Gojek,"Travel, Groceries, Dining, Entertainment, General Expenses",2022-11-05,Singapore
    9632,Savings,492.23,Gojek,"Entertainment, Dining, Transportation, Groceries, General Expenses",2022-07-10,Japan
    9633,Savings,415.22,Walmart,"Travel, Entertainment, Groceries",2022-06-10,Indonesia
    9634,Savings,866.76,Grab,"Entertainment, Dining, Groceries",2022-07-29,Singapore
    9635,Joint Account,555.85,Fairprice,"Groceries, Entertainment, Dining, General Expenses, Travel, Transportation",2022-10-23,Japan
    9636,Joint Account,577.25,Starbucks,"Travel, General Expenses, Groceries",2022-12-12,Australia
    9637,Checking,34.87,Amazon,"Transportation, Dining, Groceries, Entertainment, General Expenses, Travel",2022-10-21,Australia
    9638,Checking,986.63,Amazon,"General Expenses, Dining, Entertainment, Transportation, Groceries, Travel",2022-12-30,Australia
    9639,Joint Account,817.48,Google,"Groceries, Entertainment, General Expenses",2022-06-17,Japan
    9640,Checking,667.12,Grab,"Groceries, Transportation, General Expenses, Dining, Entertainment",2022-09-18,Australia
    9641,Savings,149.37,Fairprice,General Expenses,2022-12-11,Japan
    9642,Joint Account,135.68,ACME,"Entertainment, Transportation, Dining, Groceries",2022-11-08,Indonesia
    9643,Savings,871.78,ACME,"Dining, Transportation",2022-07-24,Australia
    9644,Joint Account,48.67,Walmart,"Travel, Entertainment, General Expenses, Transportation, Dining",2022-09-23,Singapore
    9645,Checking,841.5,Fairprice,"Transportation, Entertainment",2022-12-17,Australia
    9646,Joint Account,222.32,Google,"General Expenses, Dining, Travel, Transportation, Groceries, Entertainment",2022-07-03,Australia
    9647,Checking,683.08,Starbucks,"Transportation, Groceries, Entertainment, General Expenses, Travel, Dining",2022-07-03,Indonesia
    9648,Joint Account,500.65,Uber,Travel,2022-06-07,Australia
    9649,Joint Account,580.69,Grab,"Entertainment, Travel, Transportation, Dining, Groceries, General Expenses",2022-06-12,Japan
    9650,Savings,243.98,Gojek,Dining,2022-06-28,Singapore
    9651,Savings,27.53,Uber,"Dining, Travel, General Expenses, Transportation, Groceries, Entertainment",2022-09-06,Japan
    9652,Checking,229.07,Amazon,"Groceries, General Expenses, Travel, Dining, Transportation, Entertainment",2022-07-13,Japan
    9653,Checking,907.47,Amazon,"Transportation, Dining",2022-06-25,Japan
    9654,Checking,335.04,Walmart,"Groceries, Transportation, Travel, Entertainment, Dining, General Expenses",2022-10-25,Japan
    9655,Joint Account,507.01,Gojek,"Transportation, Dining, Groceries, General Expenses",2022-06-25,Indonesia
    9656,Joint Account,249.49,Amazon,"Dining, General Expenses, Travel, Groceries, Entertainment, Transportation",2022-12-26,Japan
    9657,Joint Account,160.74,ACME,"Travel, General Expenses",2022-10-27,Indonesia
    9658,Checking,873.51,Gojek,"Transportation, Dining, Entertainment, Groceries, General Expenses, Travel",2022-10-14,Japan
    9659,Joint Account,190.16,ACME,"General Expenses, Dining, Travel",2022-08-13,Japan
    9660,Savings,922.81,Amazon,"Entertainment, Transportation",2022-08-13,Japan
    9661,Checking,827.37,Walmart,"Transportation, Entertainment, Travel",2022-06-21,Japan
    9662,Checking,879.34,Amazon,Travel,2022-11-06,Indonesia
    9663,Checking,17.05,Uber,"Groceries, Travel, Dining, Entertainment",2022-07-22,Indonesia
    9664,Savings,644.76,Fairprice,"Dining, Entertainment, Groceries, Transportation",2022-06-01,Japan
    9665,Checking,41.88,Starbucks,"Entertainment, Dining, Travel, General Expenses, Transportation, Groceries",2022-09-17,Singapore
    9666,Joint Account,756.63,Uber,"Travel, Entertainment, Dining, General Expenses, Groceries",2022-10-10,Japan
    9667,Checking,819.67,ACME,"Entertainment, Groceries, Travel, General Expenses, Transportation, Dining",2022-07-13,Japan
    9668,Checking,576.88,Starbucks,"Transportation, Entertainment, Dining, General Expenses, Travel",2022-12-16,Japan
    9669,Joint Account,397.16,Fairprice,"Groceries, Dining, Travel, Entertainment",2022-07-20,Singapore
    9670,Joint Account,977.57,ACME,"Groceries, Dining, Entertainment, Travel, Transportation, General Expenses",2022-09-19,Japan
    9671,Joint Account,595.65,Uber,"Travel, Entertainment, General Expenses, Groceries",2022-12-22,Indonesia
    9672,Savings,61.78,Fairprice,Travel,2022-06-15,Singapore
    9673,Checking,7.92,Walmart,"Groceries, Entertainment, Transportation",2022-11-13,Singapore
    9674,Savings,364.83,Grab,General Expenses,2022-07-01,Indonesia
    9675,Joint Account,551.14,Fairprice,"Entertainment, Transportation",2022-10-16,Singapore
    9676,Savings,525.52,Amazon,"Groceries, Dining, Travel",2022-08-21,Singapore
    9677,Joint Account,581.09,Google,"Travel, Groceries, Entertainment, General Expenses, Dining, Transportation",2022-07-24,Australia
    9678,Savings,10.18,Google,"Travel, General Expenses, Groceries, Entertainment, Dining, Transportation",2022-06-13,Indonesia
    9679,Joint Account,727.3,Gojek,"Transportation, General Expenses, Dining, Entertainment",2022-06-06,Japan
    9680,Savings,663.93,Starbucks,"Transportation, Travel",2022-11-16,Singapore
    9681,Checking,299.99,ACME,"Travel, Entertainment",2022-11-22,Singapore
    9682,Checking,961.69,Google,"Entertainment, Dining, Travel",2022-11-14,Japan
    9683,Savings,95.3,Uber,"Transportation, Entertainment, Dining, Travel, General Expenses",2022-07-11,Singapore
    9684,Checking,246.39,Amazon,"Travel, Dining, Groceries",2022-07-14,Australia
    9685,Joint Account,835.43,Fairprice,"Entertainment, Transportation, Groceries, Travel",2022-06-14,Japan
    9686,Checking,599.54,Gojek,"Entertainment, Transportation, Groceries",2022-09-13,Australia
    9687,Joint Account,327.47,Uber,"Transportation, Groceries, Entertainment, General Expenses, Travel",2022-10-25,Indonesia
    9688,Savings,860.7,Grab,General Expenses,2022-06-24,Indonesia
    9689,Checking,673.81,Walmart,"Transportation, Travel, Groceries, Entertainment, General Expenses",2022-09-16,Japan
    9690,Joint Account,516.45,Starbucks,"General Expenses, Travel, Groceries",2022-08-20,Singapore
    9691,Joint Account,264.8,Amazon,"Transportation, Dining, Groceries, Travel, Entertainment",2022-10-17,Indonesia
    9692,Savings,919.79,Amazon,Transportation,2022-12-10,Australia
    9693,Joint Account,926.24,Fairprice,"Groceries, Dining, Travel, General Expenses, Entertainment",2022-11-09,Japan
    9694,Checking,508.91,Grab,"General Expenses, Dining, Travel",2022-12-20,Singapore
    9695,Joint Account,682.93,Walmart,"General Expenses, Entertainment, Dining, Transportation, Groceries",2022-11-24,Japan
    9696,Savings,158.12,Grab,"Entertainment, Travel, Dining, Transportation, Groceries",2022-07-25,Japan
    9697,Joint Account,247.33,Walmart,"Groceries, Travel, Transportation",2022-12-26,Australia
    9698,Joint Account,328.92,ACME,"Entertainment, Dining, Travel, Transportation, Groceries, General Expenses",2022-10-07,Japan
    9699,Checking,378.61,Walmart,"Dining, Transportation, Entertainment, Groceries, General Expenses",2022-09-03,Indonesia
    9700,Checking,261.2,Walmart,Dining,2022-10-31,Australia
    9701,Joint Account,493.51,Uber,"Groceries, Transportation, Dining",2022-12-25,Japan
    9702,Checking,171.14,Google,"Entertainment, Groceries, Dining, Transportation, Travel",2022-12-17,Indonesia
    9703,Checking,590.12,Amazon,"Groceries, General Expenses, Transportation",2022-10-20,Indonesia
    9704,Savings,835.16,Google,"General Expenses, Transportation, Travel, Groceries, Dining",2022-10-29,Japan
    9705,Checking,503.88,Gojek,Groceries,2022-12-09,Japan
    9706,Checking,690.43,ACME,"Transportation, Entertainment, Dining, Travel",2022-11-03,Singapore
    9707,Savings,753.1,Gojek,"Entertainment, Transportation, Groceries, Dining",2022-11-03,Singapore
    9708,Joint Account,321.09,Walmart,Entertainment,2022-10-08,Japan
    9709,Joint Account,647.47,Google,"Dining, Entertainment, Travel, General Expenses",2022-08-17,Australia
    9710,Checking,321.9,Grab,"Entertainment, Travel, General Expenses, Dining, Groceries",2022-07-16,Indonesia
    9711,Savings,625.18,ACME,Dining,2022-06-27,Singapore
    9712,Joint Account,794.97,Google,"Entertainment, General Expenses, Travel, Groceries, Transportation, Dining",2022-09-12,Australia
    9713,Joint Account,774.87,Google,"Entertainment, Groceries, Dining",2022-10-21,Japan
    9714,Joint Account,74.79,Grab,"Dining, Groceries, Transportation, Entertainment, Travel",2022-12-15,Singapore
    9715,Joint Account,597.15,Amazon,"Transportation, Dining, Groceries",2022-09-27,Japan
    9716,Joint Account,161.79,Fairprice,"Entertainment, Travel, Dining, General Expenses",2022-12-20,Indonesia
    9717,Checking,895.06,Amazon,"Dining, Travel",2022-08-11,Japan
    9718,Joint Account,325.92,Starbucks,"General Expenses, Travel",2022-11-15,Indonesia
    9719,Checking,302.49,Grab,"Travel, General Expenses, Dining, Groceries, Transportation, Entertainment",2022-10-30,Japan
    9720,Joint Account,131.35,Amazon,"Groceries, Travel, Transportation, Dining, Entertainment",2022-06-06,Australia
    9721,Checking,336.16,Walmart,General Expenses,2022-09-08,Japan
    9722,Joint Account,967.44,Grab,"Travel, Entertainment, General Expenses, Dining, Groceries, Transportation",2022-06-28,Indonesia
    9723,Checking,365.37,Grab,"Groceries, Entertainment, Travel, Dining",2022-06-24,Singapore
    9724,Savings,996.41,Gojek,"Transportation, Groceries, General Expenses, Travel",2022-07-10,Indonesia
    9725,Joint Account,155.36,Fairprice,"General Expenses, Transportation",2022-07-02,Singapore
    9726,Checking,658.67,Starbucks,"Dining, Transportation, General Expenses, Entertainment, Travel, Groceries",2022-11-15,Indonesia
    9727,Savings,679.08,Grab,"General Expenses, Dining, Transportation, Entertainment, Groceries",2022-10-24,Indonesia
    9728,Savings,19.54,Grab,"Dining, General Expenses, Transportation, Entertainment, Groceries, Travel",2022-07-13,Indonesia
    9729,Checking,517.41,Gojek,"Groceries, Travel, Transportation, General Expenses, Dining, Entertainment",2022-08-29,Singapore
    9730,Savings,569.28,Google,"Travel, Dining, Transportation, General Expenses",2022-08-31,Japan
    9731,Checking,186.58,Google,Dining,2022-08-28,Japan
    9732,Savings,476.97,Fairprice,"Entertainment, Dining",2022-10-27,Japan
    9733,Joint Account,480.73,Grab,"Dining, Groceries, Travel, Entertainment, General Expenses",2022-08-06,Japan
    9734,Savings,423.47,Walmart,"Groceries, Transportation, Travel, General Expenses, Dining, Entertainment",2022-06-11,Indonesia
    9735,Savings,186.44,Google,"Transportation, Dining",2022-10-28,Indonesia
    9736,Joint Account,121.14,Uber,"Entertainment, Transportation, Travel, Groceries, General Expenses",2022-10-30,Singapore
    9737,Checking,3.61,ACME,"Dining, Travel, General Expenses, Transportation",2022-07-08,Singapore
    9738,Checking,91.5,Grab,Travel,2022-07-06,Singapore
    9739,Joint Account,787.62,Starbucks,"General Expenses, Transportation, Dining, Travel, Groceries, Entertainment",2022-07-27,Singapore
    9740,Joint Account,35.89,Walmart,"Travel, Dining, Groceries",2022-07-15,Singapore
    9741,Joint Account,402.16,Amazon,"Dining, Travel, Entertainment, General Expenses, Groceries, Transportation",2022-08-18,Indonesia
    9742,Savings,792.22,Amazon,"Groceries, Dining",2022-10-02,Japan
    9743,Joint Account,311.81,Starbucks,"Groceries, Dining",2022-07-18,Singapore
    9744,Savings,471.42,Walmart,"Travel, Groceries",2022-06-02,Indonesia
    9745,Joint Account,112.78,Walmart,"General Expenses, Travel, Dining, Groceries",2022-11-23,Japan
    9746,Joint Account,783.29,Walmart,Dining,2022-12-09,Australia
    9747,Checking,651.94,Starbucks,"General Expenses, Travel, Entertainment",2022-08-10,Singapore
    9748,Checking,846.49,Gojek,"Travel, Dining, Entertainment, General Expenses, Groceries",2022-07-14,Indonesia
    9749,Checking,924.74,Fairprice,"Entertainment, Dining, General Expenses, Groceries, Transportation",2022-12-11,Australia
    9750,Joint Account,917.06,ACME,"Transportation, Groceries",2022-08-07,Singapore
    9751,Joint Account,680.69,Amazon,"Travel, General Expenses",2022-12-29,Singapore
    9752,Savings,230.35,Fairprice,"Transportation, Dining, Travel",2022-09-18,Australia
    9753,Savings,23.67,Google,General Expenses,2022-08-25,Japan
    9754,Checking,432.23,Amazon,Groceries,2022-11-19,Singapore
    9755,Checking,535.72,ACME,"Travel, Dining, Entertainment, Groceries, Transportation",2022-07-17,Japan
    9756,Checking,125.76,Gojek,"Groceries, General Expenses, Entertainment, Transportation",2022-12-08,Indonesia
    9757,Checking,489.41,Amazon,Groceries,2022-09-21,Australia
    9758,Checking,769.12,Walmart,"General Expenses, Transportation, Travel, Entertainment, Groceries, Dining",2022-10-07,Australia
    9759,Savings,461.17,Walmart,"Travel, General Expenses, Dining",2022-10-29,Singapore
    9760,Joint Account,428.11,Starbucks,Transportation,2022-08-08,Japan
    9761,Checking,761.24,Google,"Travel, General Expenses, Transportation, Dining, Groceries",2022-10-12,Indonesia
    9762,Joint Account,836.21,Grab,"General Expenses, Transportation, Groceries, Travel",2022-11-13,Singapore
    9763,Joint Account,473.32,Fairprice,"General Expenses, Groceries, Dining, Travel",2022-08-15,Japan
    9764,Joint Account,498.16,Walmart,Transportation,2022-06-28,Singapore
    9765,Checking,530.67,ACME,General Expenses,2022-06-14,Japan
    9766,Joint Account,387.39,ACME,"Groceries, Dining",2022-12-31,Indonesia
    9767,Joint Account,723.02,Amazon,"General Expenses, Dining, Transportation, Entertainment, Groceries",2022-10-18,Australia
    9768,Checking,189.78,Grab,"Transportation, Travel, Groceries, Entertainment, General Expenses, Dining",2022-07-04,Australia
    9769,Checking,935.64,Gojek,"Entertainment, Travel",2022-08-11,Japan
    9770,Savings,621.85,Gojek,Travel,2022-11-03,Japan
    9771,Savings,682.61,Uber,"Entertainment, Groceries, General Expenses, Travel, Transportation, Dining",2022-08-11,Australia
    9772,Checking,147.69,Walmart,"Dining, Groceries, Transportation, Travel",2022-11-05,Indonesia
    9773,Savings,99.56,Starbucks,"Entertainment, Transportation, Dining, Groceries, General Expenses",2022-08-05,Indonesia
    9774,Joint Account,154.94,Grab,"Entertainment, Dining, Groceries, Transportation",2022-07-31,Indonesia
    9775,Joint Account,404.13,Walmart,"Transportation, Dining, General Expenses, Entertainment, Travel",2022-10-18,Singapore
    9776,Checking,371.33,Walmart,"Groceries, General Expenses, Dining, Travel",2022-10-07,Australia
    9777,Savings,404.82,Grab,"Transportation, Entertainment",2022-10-01,Japan
    9778,Checking,92.71,Google,"Groceries, Transportation, General Expenses, Dining",2022-06-04,Indonesia
    9779,Checking,982.14,Fairprice,"Groceries, Transportation, Travel, Dining, Entertainment",2022-09-29,Australia
    9780,Savings,486.25,ACME,"Groceries, Dining, Entertainment, General Expenses",2022-10-27,Japan
    9781,Checking,671.02,ACME,Groceries,2022-10-07,Indonesia
    9782,Checking,134.7,ACME,"Transportation, Groceries",2022-10-30,Australia
    9783,Joint Account,814.45,Starbucks,"Entertainment, General Expenses, Transportation",2022-07-23,Indonesia
    9784,Checking,687.92,ACME,"General Expenses, Entertainment, Groceries, Dining",2022-11-03,Australia
    9785,Checking,772.63,Starbucks,"Entertainment, Dining, Transportation, Groceries, General Expenses",2022-09-03,Indonesia
    9786,Joint Account,278.07,Amazon,"Groceries, Dining",2022-11-13,Australia
    9787,Joint Account,464.69,Starbucks,"Entertainment, Groceries, General Expenses, Travel, Dining",2022-10-01,Japan
    9788,Checking,259.09,Google,Travel,2022-07-14,Australia
    9789,Joint Account,89.72,Grab,"General Expenses, Travel, Transportation, Groceries, Dining",2022-09-10,Australia
    9790,Joint Account,441.88,Grab,Dining,2022-12-30,Singapore
    9791,Savings,350.23,Uber,General Expenses,2022-11-09,Singapore
    9792,Savings,563.27,Amazon,"Transportation, Travel",2022-08-18,Australia
    9793,Checking,990.68,Amazon,General Expenses,2022-08-24,Australia
    9794,Checking,939.05,Gojek,Travel,2022-10-18,Singapore
    9795,Savings,966.11,Grab,"Dining, Groceries",2022-07-25,Indonesia
    9796,Savings,932.77,Uber,Dining,2022-12-09,Indonesia
    9797,Savings,185.54,Fairprice,"Groceries, General Expenses, Dining, Travel, Transportation, Entertainment",2022-09-13,Japan
    9798,Joint Account,364.39,Fairprice,"General Expenses, Groceries",2022-09-27,Singapore
    9799,Checking,912.73,Starbucks,"Transportation, Dining, Entertainment, Travel, Groceries",2022-10-13,Singapore
    9800,Checking,763.6,Uber,"Travel, Transportation, Entertainment",2022-11-14,Indonesia
    9801,Savings,215.4,Starbucks,"Travel, General Expenses, Transportation, Dining",2022-09-11,Australia
    9802,Joint Account,413.95,Fairprice,Entertainment,2022-09-15,Japan
    9803,Savings,166.16,Google,Groceries,2022-12-07,Indonesia
    9804,Checking,917.29,ACME,"Transportation, Groceries, Travel, General Expenses",2022-08-14,Australia
    9805,Checking,135.1,Walmart,"Groceries, Entertainment, Travel, Dining, Transportation",2022-07-27,Indonesia
    9806,Joint Account,789.73,ACME,"Dining, General Expenses",2022-09-01,Australia
    9807,Savings,493.12,Starbucks,"Transportation, Groceries, General Expenses, Dining",2022-07-22,Japan
    9808,Checking,792.35,Grab,"Transportation, Entertainment, Travel",2022-10-28,Australia
    9809,Savings,836.67,Fairprice,"Dining, Entertainment, Travel, Groceries, Transportation, General Expenses",2022-07-28,Australia
    9810,Checking,128.94,Google,"Transportation, General Expenses, Dining, Travel",2022-06-27,Japan
    9811,Savings,866.04,Gojek,"Groceries, Travel, General Expenses, Entertainment, Transportation, Dining",2022-07-02,Australia
    9812,Checking,802.59,Walmart,"Groceries, Transportation",2022-09-14,Indonesia
    9813,Joint Account,75.47,Walmart,"Entertainment, General Expenses, Transportation, Dining, Groceries",2022-06-21,Australia
    9814,Checking,631.08,Walmart,"Transportation, Dining, Entertainment, General Expenses, Groceries",2022-12-12,Singapore
    9815,Joint Account,713.0,Gojek,"Transportation, Travel, Entertainment, General Expenses, Groceries",2022-09-19,Australia
    9816,Savings,852.58,Fairprice,"Dining, Groceries, Entertainment, General Expenses, Travel, Transportation",2022-11-10,Indonesia
    9817,Joint Account,302.89,Amazon,"Dining, Travel, General Expenses, Groceries, Transportation",2022-12-29,Japan
    9818,Checking,420.11,Google,"Travel, General Expenses, Entertainment",2022-12-23,Indonesia
    9819,Joint Account,59.91,ACME,"Travel, General Expenses",2022-10-21,Singapore
    9820,Checking,614.57,Fairprice,"Transportation, Travel",2022-06-19,Australia
    9821,Joint Account,42.26,Starbucks,"Entertainment, Travel, General Expenses, Groceries, Dining",2022-12-23,Indonesia
    9822,Savings,848.68,Google,"Entertainment, Travel, Dining, Transportation, Groceries, General Expenses",2022-11-10,Japan
    9823,Checking,834.57,Fairprice,"Groceries, Travel, General Expenses, Dining, Transportation, Entertainment",2022-08-26,Japan
    9824,Joint Account,710.51,Google,"Dining, Entertainment, Transportation",2022-06-30,Singapore
    9825,Savings,263.48,Gojek,Entertainment,2022-11-03,Australia
    9826,Joint Account,912.02,Amazon,"Dining, Travel, Groceries, General Expenses",2022-10-24,Singapore
    9827,Checking,327.35,Grab,"Transportation, General Expenses, Travel",2022-06-10,Japan
    9828,Joint Account,934.72,Walmart,"General Expenses, Entertainment, Groceries, Travel, Dining",2022-06-18,Indonesia
    9829,Savings,475.75,Google,"Dining, Groceries",2022-10-25,Japan
    9830,Checking,184.39,Starbucks,"Travel, Dining, Transportation, Entertainment",2022-12-04,Singapore
    9831,Joint Account,969.02,Google,"Dining, General Expenses, Groceries, Transportation",2022-06-26,Japan
    9832,Joint Account,710.3,Google,"General Expenses, Entertainment, Transportation, Travel, Dining",2022-06-06,Singapore
    9833,Joint Account,879.62,Walmart,Transportation,2022-11-19,Japan
    9834,Joint Account,745.82,ACME,"Travel, Entertainment, Transportation, General Expenses, Dining, Groceries",2022-12-26,Australia
    9835,Checking,84.46,Google,"Dining, Groceries, Transportation, Entertainment, General Expenses, Travel",2022-11-10,Indonesia
    9836,Checking,18.23,Fairprice,"Groceries, General Expenses, Travel, Dining, Entertainment",2022-06-09,Singapore
    9837,Checking,229.64,Gojek,"Groceries, Travel, Transportation, General Expenses",2022-09-29,Indonesia
    9838,Joint Account,822.28,Amazon,"General Expenses, Groceries, Transportation, Dining",2022-10-22,Australia
    9839,Savings,833.98,Walmart,"Dining, Groceries, Travel",2022-09-03,Singapore
    9840,Checking,832.75,Starbucks,"Travel, General Expenses, Groceries, Entertainment, Transportation",2022-08-20,Japan
    9841,Checking,590.2,ACME,Groceries,2022-09-14,Japan
    9842,Joint Account,32.53,Amazon,"Transportation, Entertainment, Groceries, General Expenses, Dining",2022-11-01,Indonesia
    9843,Savings,68.99,Starbucks,"Transportation, Dining, Travel, Groceries, Entertainment",2022-06-01,Japan
    9844,Checking,76.31,Grab,"Groceries, Travel, Transportation, General Expenses, Dining, Entertainment",2022-10-22,Singapore
    9845,Checking,171.9,Grab,"General Expenses, Groceries, Entertainment, Transportation, Travel, Dining",2022-09-19,Australia
    9846,Joint Account,791.92,Google,"Travel, Entertainment, General Expenses, Groceries, Dining",2022-07-18,Singapore
    9847,Savings,375.91,Fairprice,"Transportation, Entertainment, General Expenses, Groceries, Travel",2022-11-04,Singapore
    9848,Checking,707.62,Amazon,"General Expenses, Travel",2022-12-18,Singapore
    9849,Checking,213.01,Starbucks,"Groceries, Travel",2022-08-16,Australia
    9850,Joint Account,977.72,Fairprice,General Expenses,2022-06-30,Japan
    9851,Checking,798.75,Grab,"Groceries, Transportation",2022-11-22,Australia
    9852,Savings,283.86,Starbucks,"General Expenses, Groceries, Travel",2022-10-14,Australia
    9853,Joint Account,676.17,Grab,"Dining, Travel, Entertainment, General Expenses",2022-09-03,Indonesia
    9854,Savings,65.52,Uber,"Travel, Transportation, Dining, General Expenses, Entertainment",2022-10-28,Singapore
    9855,Joint Account,325.13,Walmart,"Travel, Entertainment",2022-06-13,Singapore
    9856,Savings,174.03,ACME,"Groceries, General Expenses, Travel, Transportation",2022-10-23,Australia
    9857,Checking,748.88,Gojek,"Transportation, Dining",2022-07-21,Australia
    9858,Joint Account,766.0,Fairprice,"Entertainment, Groceries, Travel, Transportation",2022-08-27,Japan
    9859,Joint Account,547.33,Grab,"Travel, Groceries",2022-12-08,Australia
    9860,Savings,250.67,Amazon,Entertainment,2022-09-04,Japan
    9861,Savings,49.86,Walmart,"General Expenses, Entertainment, Travel",2022-10-11,Indonesia
    9862,Savings,150.93,Uber,"Transportation, Groceries",2022-10-31,Singapore
    9863,Checking,153.71,ACME,"General Expenses, Travel, Entertainment",2022-07-19,Singapore
    9864,Savings,728.03,Uber,General Expenses,2022-10-04,Indonesia
    9865,Savings,178.26,Gojek,"Travel, General Expenses, Dining, Entertainment, Groceries, Transportation",2022-07-27,Japan
    9866,Checking,523.96,Google,"Transportation, General Expenses",2022-07-09,Japan
    9867,Joint Account,720.04,Uber,Groceries,2022-08-14,Singapore
    9868,Savings,266.68,Fairprice,"Entertainment, General Expenses, Dining, Travel, Groceries",2022-08-14,Japan
    9869,Joint Account,62.01,Gojek,"Entertainment, Dining, Groceries, General Expenses, Transportation, Travel",2022-09-18,Japan
    9870,Checking,166.87,Google,General Expenses,2022-07-15,Indonesia
    9871,Joint Account,740.24,Uber,"Groceries, Transportation, Entertainment, General Expenses, Travel",2022-11-17,Singapore
    9872,Savings,70.23,Fairprice,"General Expenses, Dining, Entertainment, Groceries, Transportation",2022-09-03,Singapore
    9873,Checking,679.44,Fairprice,"General Expenses, Transportation, Travel, Groceries, Entertainment, Dining",2022-10-10,Indonesia
    9874,Checking,505.67,Google,Transportation,2022-08-23,Japan
    9875,Checking,41.05,Uber,"Travel, Transportation, General Expenses, Dining, Entertainment",2022-12-19,Japan
    9876,Savings,895.41,Uber,"General Expenses, Travel, Dining, Groceries, Entertainment, Transportation",2022-06-27,Singapore
    9877,Savings,31.78,Amazon,"Entertainment, Groceries, Transportation, Travel, General Expenses",2022-11-05,Australia
    9878,Savings,19.19,ACME,"Transportation, Entertainment",2022-10-03,Indonesia
    9879,Checking,422.64,Walmart,"Travel, General Expenses, Groceries",2022-08-28,Australia
    9880,Savings,310.42,Grab,"Groceries, Travel",2022-07-26,Japan
    9881,Joint Account,405.61,Grab,"Groceries, General Expenses, Entertainment, Transportation, Travel, Dining",2022-06-17,Japan
    9882,Savings,945.06,Grab,"Entertainment, Groceries",2022-09-20,Australia
    9883,Checking,963.57,Uber,"Transportation, Travel, Dining, Groceries, General Expenses, Entertainment",2022-09-26,Japan
    9884,Joint Account,396.7,Google,"Entertainment, Groceries, Dining, Transportation, General Expenses",2022-06-03,Indonesia
    9885,Savings,783.0,Google,"Transportation, General Expenses",2022-07-22,Australia
    9886,Savings,933.21,Starbucks,"Groceries, General Expenses, Transportation, Travel",2022-07-30,Japan
    9887,Checking,777.43,Uber,"Dining, Entertainment, Groceries, Transportation, General Expenses",2022-08-11,Singapore
    9888,Savings,578.45,Grab,"Travel, Transportation, Groceries, General Expenses, Entertainment",2022-12-24,Singapore
    9889,Joint Account,412.81,Uber,"Travel, Dining, Transportation, Entertainment, General Expenses",2022-10-17,Australia
    9890,Joint Account,703.55,ACME,"Entertainment, General Expenses, Transportation, Dining",2022-11-05,Singapore
    9891,Savings,225.59,ACME,"Groceries, Entertainment, Travel, Transportation",2022-07-10,Indonesia
    9892,Joint Account,230.79,Grab,"Travel, General Expenses, Entertainment, Transportation",2022-09-19,Australia
    9893,Joint Account,104.17,Starbucks,"Groceries, Travel, Entertainment",2022-07-12,Australia
    9894,Savings,339.22,Amazon,"Dining, Groceries, Travel, Entertainment, General Expenses, Transportation",2022-07-07,Indonesia
    9895,Savings,128.91,Google,"Travel, General Expenses, Groceries, Transportation",2022-09-05,Japan
    9896,Savings,328.57,Walmart,"Dining, General Expenses, Transportation, Travel, Groceries, Entertainment",2022-07-15,Indonesia
    9897,Joint Account,292.46,Amazon,"Travel, Transportation, Dining",2022-06-19,Singapore
    9898,Joint Account,949.73,Google,"Travel, Transportation, General Expenses",2022-07-20,Singapore
    9899,Checking,825.55,Fairprice,"Groceries, Travel",2022-11-15,Japan
    9900,Joint Account,958.3,Walmart,"Dining, Entertainment, Transportation, General Expenses, Travel",2022-10-23,Japan
    9901,Savings,977.64,Grab,Entertainment,2022-06-27,Japan
    9902,Checking,501.28,ACME,"Transportation, Entertainment, Groceries, General Expenses",2022-10-11,Japan
    9903,Joint Account,469.96,Fairprice,Groceries,2022-10-12,Japan
    9904,Joint Account,534.08,Uber,Travel,2022-11-23,Japan
    9905,Checking,276.85,Uber,Dining,2022-12-04,Indonesia
    9906,Savings,809.34,Walmart,"Travel, Groceries, Entertainment, Dining",2022-07-07,Indonesia
    9907,Checking,44.62,Fairprice,"Transportation, Groceries",2022-12-06,Singapore
    9908,Checking,286.68,Google,"General Expenses, Transportation, Travel, Dining, Groceries",2022-12-26,Japan
    9909,Checking,29.92,Uber,"Travel, Groceries, Dining, Transportation, Entertainment",2022-10-30,Indonesia
    9910,Joint Account,746.59,Gojek,"General Expenses, Groceries, Transportation, Entertainment, Travel",2022-09-23,Indonesia
    9911,Joint Account,467.24,Walmart,"Groceries, Transportation, General Expenses",2022-08-14,Australia
    9912,Checking,456.73,Walmart,"General Expenses, Travel, Transportation",2022-07-21,Singapore
    9913,Joint Account,403.41,Google,"Entertainment, Travel",2022-09-27,Japan
    9914,Joint Account,175.85,ACME,"Transportation, Dining",2022-11-28,Australia
    9915,Joint Account,284.49,Uber,"Entertainment, Travel, Transportation",2022-06-03,Indonesia
    9916,Joint Account,868.86,Grab,"Transportation, Travel",2022-09-19,Australia
    9917,Joint Account,164.91,Grab,General Expenses,2022-10-15,Singapore
    9918,Savings,348.54,ACME,General Expenses,2022-08-15,Singapore
    9919,Savings,843.43,Amazon,"Entertainment, Travel, Groceries, General Expenses, Dining",2022-11-23,Australia
    9920,Joint Account,329.08,Grab,Entertainment,2022-11-27,Indonesia
    9921,Checking,860.91,Gojek,"General Expenses, Travel, Dining, Entertainment, Groceries, Transportation",2022-09-14,Indonesia
    9922,Checking,547.0,Starbucks,"Transportation, Travel",2022-07-31,Australia
    9923,Joint Account,826.3,Starbucks,"Dining, General Expenses, Entertainment, Transportation, Groceries",2022-11-29,Australia
    9924,Checking,550.85,Starbucks,"Entertainment, Groceries, General Expenses, Transportation, Travel",2022-09-08,Indonesia
    9925,Joint Account,61.35,Amazon,"Dining, Travel, Groceries",2022-07-11,Singapore
    9926,Joint Account,136.77,Starbucks,"Travel, Dining, Entertainment",2022-06-10,Singapore
    9927,Checking,556.23,Fairprice,"Entertainment, Groceries, General Expenses, Dining, Travel, Transportation",2022-10-13,Australia
    9928,Checking,56.16,Gojek,"Travel, Transportation, General Expenses, Groceries, Dining, Entertainment",2022-06-13,Indonesia
    9929,Savings,224.13,Grab,"General Expenses, Transportation, Dining, Travel, Groceries",2022-06-17,Singapore
    9930,Checking,134.18,Uber,"Entertainment, General Expenses",2022-06-30,Indonesia
    9931,Savings,473.83,Amazon,"Groceries, General Expenses, Dining, Entertainment, Travel, Transportation",2022-06-09,Singapore
    9932,Savings,910.71,Amazon,"General Expenses, Groceries, Entertainment, Travel, Dining",2022-10-28,Singapore
    9933,Checking,869.11,Grab,"Entertainment, Transportation",2022-09-12,Japan
    9934,Savings,381.48,Amazon,"Transportation, Travel, Entertainment, General Expenses, Groceries, Dining",2022-06-15,Singapore
    9935,Joint Account,46.48,Google,"General Expenses, Transportation, Entertainment, Travel, Dining",2022-06-14,Australia
    9936,Savings,702.18,Grab,"Dining, Transportation, Groceries, General Expenses, Entertainment",2022-11-14,Singapore
    9937,Joint Account,979.74,Grab,"Entertainment, General Expenses, Dining, Travel, Groceries, Transportation",2022-07-30,Singapore
    9938,Joint Account,311.46,Amazon,Dining,2022-07-14,Japan
    9939,Savings,296.77,Uber,"Entertainment, Dining",2022-10-31,Australia
    9940,Checking,472.41,ACME,"Entertainment, Groceries",2022-11-16,Indonesia
    9941,Checking,408.57,Gojek,"General Expenses, Travel, Transportation",2022-10-20,Australia
    9942,Joint Account,453.25,Amazon,"Groceries, Entertainment, Travel, Transportation",2022-12-23,Japan
    9943,Joint Account,113.26,Gojek,"Dining, Entertainment, General Expenses, Travel, Groceries, Transportation",2022-07-25,Australia
    9944,Savings,607.28,Fairprice,"General Expenses, Entertainment, Dining, Travel, Groceries",2022-09-16,Australia
    9945,Joint Account,369.62,Uber,Groceries,2022-07-05,Singapore
    9946,Checking,531.28,Grab,"Entertainment, Transportation",2022-09-08,Australia
    9947,Checking,188.6,Gojek,"General Expenses, Groceries, Transportation, Travel",2022-09-22,Australia
    9948,Checking,182.65,Gojek,"General Expenses, Transportation, Dining, Travel",2022-12-05,Indonesia
    9949,Joint Account,170.25,Google,"Entertainment, Transportation, Dining",2022-11-26,Australia
    9950,Joint Account,837.34,Uber,"Transportation, Travel, Dining, Groceries",2022-11-06,Singapore
    9951,Joint Account,242.67,Walmart,"Entertainment, Transportation, General Expenses",2022-11-17,Japan
    9952,Checking,314.56,ACME,"Entertainment, Dining, Transportation, Groceries, Travel, General Expenses",2022-11-30,Australia
    9953,Checking,816.88,Google,"Groceries, Entertainment, Travel, Dining, Transportation",2022-09-09,Australia
    9954,Joint Account,353.82,Gojek,"Groceries, Transportation, Dining, Travel",2022-06-09,Indonesia
    9955,Checking,630.26,Walmart,"Travel, Dining, Groceries",2022-10-16,Australia
    9956,Savings,707.65,Walmart,"General Expenses, Dining",2022-09-28,Australia
    9957,Joint Account,368.13,Amazon,"General Expenses, Groceries, Transportation",2022-08-19,Japan
    9958,Checking,270.66,Walmart,"Travel, Dining, Transportation",2022-11-10,Australia
    9959,Savings,37.59,Uber,"Travel, Dining, Transportation, Entertainment, Groceries",2022-11-26,Indonesia
    9960,Joint Account,642.63,Google,"General Expenses, Travel, Groceries",2022-10-09,Japan
    9961,Joint Account,304.94,Walmart,"Transportation, Groceries",2022-12-10,Indonesia
    9962,Savings,409.28,Gojek,"Transportation, General Expenses",2022-08-30,Singapore
    9963,Joint Account,428.24,Fairprice,"Entertainment, Travel, Dining, Groceries, Transportation, General Expenses",2022-10-24,Indonesia
    9964,Savings,984.03,Grab,"Travel, Dining, General Expenses",2022-10-16,Japan
    9965,Savings,28.04,Walmart,Groceries,2022-11-04,Australia
    9966,Savings,57.01,Google,"Groceries, General Expenses, Transportation, Travel, Dining, Entertainment",2022-12-23,Indonesia
    9967,Joint Account,201.5,Fairprice,"Transportation, Travel, Groceries",2022-12-19,Singapore
    9968,Checking,104.97,Starbucks,"Transportation, General Expenses, Dining, Travel, Entertainment",2022-06-15,Australia
    9969,Savings,171.23,Grab,General Expenses,2022-10-04,Indonesia
    9970,Savings,65.37,Uber,"Dining, Transportation, Entertainment",2022-06-12,Indonesia
    9971,Joint Account,837.2,Grab,"General Expenses, Entertainment",2022-07-24,Singapore
    9972,Checking,143.53,Amazon,"General Expenses, Travel, Dining",2022-08-26,Indonesia
    9973,Checking,812.2,Walmart,"Travel, Entertainment, Groceries, General Expenses",2022-11-06,Indonesia
    9974,Savings,26.29,Starbucks,"General Expenses, Dining, Travel, Groceries",2022-06-18,Australia
    9975,Checking,82.29,Amazon,"Groceries, Transportation, General Expenses",2022-08-07,Indonesia
    9976,Savings,803.97,Amazon,Entertainment,2022-06-18,Japan
    9977,Savings,436.04,Amazon,Groceries,2022-07-30,Indonesia
    9978,Joint Account,884.09,Starbucks,"Dining, Entertainment, Groceries, General Expenses, Transportation",2022-10-13,Singapore
    9979,Checking,760.39,Amazon,Entertainment,2022-10-16,Australia
    9980,Savings,308.69,Amazon,"Groceries, Travel, Transportation, Dining, Entertainment",2022-07-13,Japan
    9981,Checking,278.17,Amazon,"Dining, Transportation, General Expenses, Entertainment, Travel, Groceries",2022-10-09,Japan
    9982,Joint Account,288.87,Uber,"Dining, Transportation, General Expenses",2022-09-04,Singapore
    9983,Savings,100.57,Starbucks,"Transportation, Travel, Groceries, General Expenses, Dining, Entertainment",2022-11-27,Indonesia
    9984,Checking,940.86,Grab,"Groceries, Transportation, Entertainment",2022-10-12,Indonesia
    9985,Savings,678.03,Google,"Groceries, Dining, General Expenses, Entertainment, Travel, Transportation",2022-10-20,Indonesia
    9986,Checking,834.12,Google,"Entertainment, General Expenses",2022-10-16,Japan
    9987,Checking,900.98,Starbucks,"General Expenses, Groceries, Dining, Entertainment, Travel, Transportation",2022-10-27,Singapore
    9988,Savings,663.59,Uber,"Travel, General Expenses, Transportation",2022-07-23,Australia
    9989,Joint Account,622.91,Grab,"Groceries, Transportation, General Expenses",2022-06-17,Japan
    9990,Checking,851.92,Fairprice,"Entertainment, General Expenses, Groceries",2022-06-05,Japan
    9991,Savings,385.82,ACME,Groceries,2022-12-03,Indonesia
    9992,Checking,756.38,Google,Entertainment,2022-12-31,Australia
    9993,Checking,138.47,ACME,"Transportation, Entertainment",2022-10-01,Indonesia
    9994,Checking,447.59,Starbucks,"Travel, Dining, Transportation, General Expenses",2022-11-26,Japan
    9995,Checking,14.81,ACME,Travel,2022-10-18,Indonesia
    9996,Checking,950.21,Grab,"General Expenses, Travel, Groceries, Entertainment, Transportation, Dining",2022-11-26,Indonesia
    9997,Savings,867.57,Walmart,"Travel, General Expenses, Dining, Transportation, Entertainment",2022-08-07,Japan
    9998,Savings,883.51,Google,Dining,2022-10-25,Australia
    9999,Savings,181.86,Amazon,"Transportation, Dining, Entertainment, General Expenses, Travel, Groceries",2022-10-30,Australia
    `;
    const lines = rawData.trim().split('\n');
  
    const jsonData = [];
  
    for (const line of lines) {
      if(line.includes("\"")){
        const components1 = line.split(',"');
        const components2 = components1[1].split('",')
        const [ID, Account, Amount, Counterparty] = components1[0].split(',')
        const [Date, Location] = components2[1].split(',')
        const Tags = components2[0]
        jsonData.push({
          id: ID.trim(),
          Account: Account.trim(),
          Amount: parseFloat(Amount),
          Counterparty: Counterparty.trim(),
          Tags: Tags.trim(),
          Date: Date.trim(),
          Location: Location.trim(),
        });
      } else {
        const [ID, Account, Amount, Counterparty, Tags, Date, Location] = line.split(',');
        jsonData.push({
          id: ID.trim(),
          Account: Account.trim(),
          Amount: parseFloat(Amount),
          Counterparty: Counterparty.trim(),
          Tags: Tags.trim(),
          Date: Date.trim(),
          Location: Location.trim(),
        });
      }
    }
    return jsonData
  }

export default GetData