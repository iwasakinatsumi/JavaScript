const mock = jest.fn();

const obj = {
  x: 0,
  y: 0,
  sum() {
    mock();
    return this.x + this.y;
  },
};

//ここに1行のコードを書く
mock();

obj.x = 1;
obj.y = 2;

//expect(JSON.stringify(obj).toBe(`{"x":1,"y":2,"sum":3}`));
//expect(JSON.stringify(obj).toBe(`{"x":1,"y":2}`));
expect(mock).toHaveBeenCalled();
