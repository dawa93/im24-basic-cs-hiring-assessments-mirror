/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
// var Queue = function() {
//   this._storage = [];
// };
// // 배열의 뒤에 새로운 데이터가 저장되는것
// Queue.prototype.add = function(el) {
//   this._storage.push(el);
// };

// //가장 먼저들어온 데이터가 삭제된다.
// Queue.prototype.remove = function() {
//   let head = this._storage[0];

//   if (this._storage.length === 1) {
//     this._storage = [];
//     return head;
//   }

//   this._storage.slice(1);
//   return head;
// };

var Queue = function() {
  this._storage = {};
  this._size = 0;
  this._deleteCount = 0;
};

// 배열의 뒤에 새로운 데이터가 저장되는것
Queue.prototype.add = function(el) {
  this._storage[this._size] = el;
  this._size++;
};

//가장 먼저들어온 데이터가 삭제된다.
Queue.prototype.remove = function() {
  if (this._size === 0) {
    return undefined;
  }
  let deleted = this._storage[this._deleteCount];
  delete this._storage[this._deleteCount];
  this._deleteCount++;
  return deleted;
};

// let q = new Queue();
module.exports = Queue;
