const obj = {
  x: 0,
  y: 0,
  sum() {
    mock();
    return this.x + this.y;
  },
};

obj.x = 1;
obj.y = 2;

console.log(JSON.stringify(obj));
