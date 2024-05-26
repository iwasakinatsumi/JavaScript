const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  {
    name: "Dave",
    class: "B",
    math: 40,
    chemistry: 20,
    geography: 60,
  },
  {
    name: "Ellen",
    class: "B",
    math: 60,
    chemistry: 70,
    geography: 40,
  },
  {
    name: "Frank",
    class: "B",
    math: 90,
    chemistry: 70,
    geography: 80,
  },
  {
    name: "Isaac",
    class: "C",
    math: 70,
    chemistry: 40,
    geography: 50,
  },
  {
    name: "Justin",
    class: "C",
    math: 80,
    chemistry: 40,
    geography: 30,
  },
  {
    name: "Mallet",
    class: "C",
    math: 60,
    chemistry: 70,
    geography: 90,
  },
];

//1.mathの全員の合計点
let sum = 0;
data.forEach((value) => {
  sum += value.math;
});
//console.log(sum); //530

//2.クラスAのchemistryの平均点
let total_chemistry = 0;
let count_A = 0;
data.forEach((value) => {
  if (value.class == "A") {
    total_chemistry += value.chemistry;
    count_A++;
  }
});
//console.log(total_chemistry / count_A); //45

//3.3科目合計点のクラスC内での平均点
let ave_total = 0;
let count_C = 0;
data.forEach((value) => {
  if (value.class == "C") {
    ave_total += value.chemistry + value.math + value.geography;
    count_C++;
  }
});
//console.log(ave_total / count_C);//176.6666

//4.3科目合計点が最も高い人のname
let highScoreName = "";
let compareTotal = 0;
data.forEach((value) => {
  let total = value.chemistry + value.geography + value.math;
  if (compareTotal < total) {
    highScoreName = value.name;
  }
});
//console.log(highScoreName); //Mallet

//5.全体のgeographyの標準偏差
//{(各データ)-(平均値)}^2の和を全体のデータ数で割る
//↑の平方根を求める

//geographyの平均値
let total_geography = 0;
let count = 0;
data.forEach((value) => {
  total_geography += value.geography;
  count++;
});
let ave_geography = total_geography / count;

//(各データ-平均値)^2の和をcountで割る
let conv = 0;
data.forEach((value) => {
  conv += (value.geography - ave_geography) * (value.geography - ave_geography); //2乗のよいやり方？
});

let standard_deviation = Math.sqrt(conv / count);
//console.log(standard_deviation); //22.3330569358242
