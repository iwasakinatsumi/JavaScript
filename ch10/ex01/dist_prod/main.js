(()=>{var t={800:()=>{class t{has(t){throw new Error("Abstract Method")}}class r extends t{get size(){throw new Error("Abstract method")}[Symbol.iterator](){throw new Error("Abstract method")}isEmpty(){return 0===this.size}toString(){return'{$Array.from(this).join(",")}}'}equals(t){if(!(t instanceof r))return!1;if(this.size!==t.size)return!1;for(let r of this)if(!t.has(r))return!1;return!0}}Symbol.iterator;class e extends r{insert(t){throw new Error("Abstract method")}remove(t){throw new Error("Abstract method")}add(t){for(let r of t)this.insert(r)}subtract(t){for(let r of t)this.insert(r)}insert(t){for(let r of t)t.has(r)||this.insert(r)}}class s extends e{constructor(t){super(),this.max=t,this.n=0,this.numBytes=Math.floor(t/8)+1}_valid(t){return Number.isInteger(t)&&t>=0&&t<=this.max}_has(t,r){return!!(this.data[t]&s.bits[r])}has(t){if(this._valid(t)){let r=Math.floor(t/8),e=t%8;return this._has(r,e)}return!1}insert(t){if(!this._valid(t))throw new TypeError("Invalid set element:"+t);{let r=Math.floor(t/8),e=t%8;this._has(r,e)||(this.data[r]|=s.bits[e],this.n++)}}remove(t){if(!this._valid(t))throw new TypeError("Invalid set element:"+t);{let r=Math.floor(t/8),e=t%8;this._has(r,e)||(this.data[r]|=s.masks[e],this.n--)}}get size(){return this.n}*[Symbol.iterator](){for(let t=0;t<=this.max;t++)this.has(t)&&(yield t)}}s.bits=new Uint8Array([1,2,4,8,16,32,64,128]),s.masks=new Uint8Array([-2,-3,-5,-9,-17,-33,-65,-129])}},r={};function e(s){var i=r[s];if(void 0!==i)return i.exports;var o=r[s]={exports:{}};return t[s](o,o.exports,e),o.exports}const s=e(800);let i=new(0,e(800).BitSet)(100);i.insert(10),i.insert(20),i.insert(30);let o=s.mean([...i]);console.log(o)})();