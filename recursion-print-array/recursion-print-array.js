/* CODE GOES HERE
 * Don't forget newlines at the end of all files :) */
var printArray = function(array) {
  //   // [1, 2, ,[3, 4], 5]
  //   // 인자로 받은 배열의 요소를 하나씩 검사한다
  //   // 만약 그 요소가 빈 문자열이라면, 무시한다.
  //   // 만약에 그 요소가 배열이 아니면, result에 추가한다.
  //   // 만약에 그 요소가 배열이라면, 재귀를 사용하여, 다시 한번 더 검사한다.
  let result = "";
  function recursive(el) {
    if (array.length === 0) {
      return;
    }
    el.forEach(function(arrInArr) {
      if (!Array.isArray(arrInArr)) {
        // result = result + arrInArr;
        console.log(arrInArr);
      } else if (Array.isArray(arrInArr)) {
        recursive(arrInArr);
      }
    });
  }
  recursive(array);
  console.log(result);
};

// let result = "";
//   function recursive(arr) {
//     for (let el of arr) {
//       if (el === undefined) {
//         result = result;
//       } else {
//         if (!Array.isArray(el)) {
//           result = result + el;
//         }
//       }

//       if (Array.isArray(el)) {
//         recursive(el);
//       }
//     }
//   }
//   recursive(array);
//   console.log(result);

module.exports = printArray;
