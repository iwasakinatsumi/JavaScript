const f = new Function()

















console.log(arr.reduce(f("$1 + $2"), 0));
console.log(arr.sort(f("$1 - $2")));
