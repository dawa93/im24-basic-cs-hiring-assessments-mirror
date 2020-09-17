/**
 *
 * Implement a `addChild` and map` method on this Tree class, using psuedoclassical instantiation.
 *
 * Map accepts a mapping function as its only argument. It traverses the tree,
 * passing each node's value into the mapping function, and generates a new
 * tree containing the results.
 *
 * So `map` should return a tree with the same structure, and different values,
 * but it should NOT modify the tree that was passed in.
 *
 * Example:
 *   var root1 = new Tree(1);
 *   var branch2 = root1.addChild(2);
 *   var branch3 = root1.addChild(3);
 * //
 *   var leaf4 = branch2.addChild(4);
 *   var leaf5 = branch2.addChild(5);
 * //
 *   var leaf6 = branch3.addChild(6);
 *   var leaf7 = branch3.addChild(7);
 * //
 *   var newTree = root1.map(function (value) {
 *     return value * 2;
 *   })
 *  newTree.value // 2
 *  newTree.children[0].value // 4
 *  newTree.children[1].value // 6
 *  newTree.children[0].children[1].value // 10
 *  newTree.children[1].children[1].value // 14
 *  root1.value // still 1
 */

var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  // your code here
  // 자식중 같은 값이 없다면
  //재귀(?)를 사용하여, 새로운 노드를만든다.
  // 그 노드를 상위 노드의 자식에 넣는다.
  // if (!this.children.includes(value)) {
  let temp = new Tree(value);
  this.children.push(temp);
  // }
};

Tree.prototype.map = function(callback) {
  // your code here
  // 새로운 함수의 리턴값을 루트 노드로 대입.
  // 해야 할것 : 기존 트리가 가지고 있던 노드들 2배하고, 새로운 트리에 추가하고, .
  // 자식이 존재한다면. 자식들의 값을 바꾸자.
  // 반복문을 사용해서, 모든 자식들을 순회한다.
  //새로운 트리에다가 map을 적용한 밸류값을 대입
  // callback은 함수 !!

  let newTree = new Tree(callback(this.value));

  if (this.children.length === 0) {
    return newTree;
  } else if (this.children.length > 0) {
    this.children.forEach(function(children) {
      newTree.children.push(children.map(callback));
    });
  }
  return newTree;
};

// Tree.prototype.map = function(callback) {
//   // your code here
//   // 새로운 함수의 리턴값을 루트 노드로 대입.
//   let newTree = new Tree(callback(this.value));

//   if (this.children.length === 0) {
//     return newTree;
//   }
//   // 해야 할것 : 기존 트리가 가지고 있던 노드들 2배하고, 새로운 트리에 추가하고, .
//   // 자식이 존재한다면. 자식들의 값을 바꾸자.
//   if (this.children.length > 0) {
//     // 반복문을 사용해서, 모든 자식들을 순회한다.
//     for (let i = 0; i < this.children.length; i++) {
//       //새로운 트리에다가 map을 적용한 밸류값을 대입
//       // let doubledVal = callback(this.children[i].value);
//       // newTree.addChild(doubledVal);
//       newTree.children.push(this.children[i].map(callback));
//     }
//   }
//   return newTree;
// };

// let a = new Tree(1);

// a.addChild(2);
// a.addChild(3);
// a.children[0].addChild(4);
// a.children[0].addChild(5);
// a.children[1].addChild(6);

// let double = function(el) {
//   return el * 2;
// };

// let b = a.map(double);

module.exports = Tree;
