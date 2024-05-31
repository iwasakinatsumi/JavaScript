let obj = {
  title: "星の王子様",
  author: "サン・テグジュペリ",
};

let newObj = Object.create(obj);

console.log(Object.getPrototypeOf(newObj));
