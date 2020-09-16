/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var printArray = function(array) {
  // [1, 2, ,[3, 4], 5]
  let result = "";

  // 인자로 받은 배열의 요소를 하나씩 검사한다
  // 만약 그 요소가 빈 문자열이라면, 무시한다.
  // 만약에 그 요소가 배열이 아니면, result에 추가한다.
  // 만약에 그 요소가 배열이라면, 재귀를 사용하여, 다시 한번 더 검사한다.
  function recursive(arr) {
    for (let el of arr) {
      if (el === undefined) {
        result = result;
      } else {
        if (!Array.isArray(el)) {
          result = result + el;
        }
      }

      if (Array.isArray(el)) {
        recursive(el);
      }
    }
  }
  recursive(array);
  console.log(result);
};

//
// debugger;
// printArray([1, 2, , [3, 4], 5]);

// for (let el of arr) {
//   if (el === undefined) {
//     result = result;
//   } else {
//     if (!Array.isArray(el)) {
//       result = result + el;
//     }
//   }

//   if (Array.isArray(el)) {
//     printArray(el);
//   }
// }
// return result;

module.exports = printArray;

// it('should console.log() all of the items in the array, in order', function() {
//   var newArray = '';
//   var oldLog = console.log;
//   console.log = function(item) {
//     newArray += item;
//   };
//   printArray([1, 2, ,[3, 4], 5]);
//   console.log = oldLog;
//   newArray.should.eql('12345');
// });

// console.log = function() {
// for (let el of arr) {
//   if (el === undefined) {
//     result = result;
//   } else {
//     if (!Array.isArray(el)) {
//       result = result + el;
//     }
//   }

//   if (Array.isArray(el)) {
//     printArray(el);
//   }
// }
// return result;
// };
// printArray(arr);
// console.log();
