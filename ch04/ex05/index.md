以下のプログラムは 1 から 100 までの FizzBuzz を出力する。 Fizz、Buzz、FizzBuzz、数値、それぞれのケースで式がどのように評価されるか言及しつつ処理を説明しなさい。

for(i=1;i<101;i++)  
 console.log((i%3?"":"Fizz") + (i%5?"":"Buzz")|| i);

## 処理

Fizz が出力されるとき：  
3 で割り切れるが、5 では割り切れないとき  
Buzz が出力されるとき：  
5 で割り切れるが、3 では割り切れないとき  
FizzBuzz が出力されるとき：  
15 で割り切れるとき(最初に 3 で割り切れるか確認して、5 でも割れたら Buzz が後ろにつく)  
数値：  
上記の条件のどれにも該当しないとき

## 実行結果

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz
undefined

実行すると、最後 undefined が出力された
i=1 開始なので、最後 i が 101 になるが、i<101 に反しているので undefined？  
101 が出力されるかと思った。
