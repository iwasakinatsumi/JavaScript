function counterIter(max) {
  console.log("counterIter");
  let c = 1;
  return {
    [Symbol.iterator]() {
      console.log("counterIter: Symbol.iterator");
      return this;
    },
    next() {
      console.log("counterIter: next");
      if (c >= max + 1) {
        return { value: undefined, done: true };
      }
      const value = c;
      c++;
      return { value, done: false };
    },
    return(value) {
      console.log("counterIter: return:", value);
      return { value, done: true };
    },
    throw(e) {
      console.log("counterIter: throw:", e);
      throw e;
    },
  };
}

//1.
//counterIter(5);

//4.
let iter = counterIter(5);
iter.next().value;
iter.return(3);
iter.throw("Error");

function* counterGen(max) {
  console.log("counterGen");
  try {
    for (let c = 1; c <= max; c++) {
      console.log("counterGen: next");
      yield c;
    }
  } catch (e) {
    console.log("counterGen: catch:", e);
  } finally {
    console.log("counterGen: finally");
  }
}

//2.
//counterGen(5);

//3.
// let gen = counterGen(5);
// gen.next().value;
// gen.next().value;
// gen.next().value;
// gen.next().value;
// gen.next().value;
// gen.next().value;
// gen.next().value;
