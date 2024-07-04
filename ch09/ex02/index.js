class C {
  constructor() {
    //初期値は0
    let x = 0;
  }
}

const c = new C();
console.log(c.x); //1
console.log(c.x); //2
console.log(c.x); //3
