/*
  Write your explanation here as a comment.
  For example, you might say...
    -This function has [insert time complexity], because [some line of code] means [something describing the nature of the implementation]
*/
var TimeComplexity = {
  FIX_ME: "wrong answer",
  CONSTANT: "constant",
  LOGARITHMIC: "logarithmic",
  LINEAR: "linear",
  QUADRATIC: "quadratic",
  EXPONENTIAL: "exponential"
};
exports.TimeComplexity = TimeComplexity;

// Problem 1: Sum the squares of the values in a given array.
//          :  주어진 배열에서 밸류들의 제곱의 값을 더해라.
/*
 * Complexity:이 함수는 O(n)의 시간 복잡도를 가지고 있다. 
              그 이유는 배열의 길이가 n번 만큼 요소들을 제곱하고, 또 더해야하기 때문입니다.
 */

exports.sumSquaresTimeComplexity = TimeComplexity.LINEAR; // TODO: Update this constant

var sumSquares = function(array) {
  return array.reduce(function(memo, val) {
    return memo + Math.pow(val, 2);
  });
}; //O(lg(exponent))/*END SOLUTION*/

// Problem 2: Calculate the n-th power of given number.
//          : 주어진 숫자의 n슴을 계산하라. => val의 2제곱의 복잡도는 ?
/*
 * Complexity: O(logN) 의 시간 복잡도를 가지고 있다. 
              처음에는 O(1)의 시간 복잡도라고 생각했다. 왜냐하면 그냥 제곱만하면 그 값이 바로 나오기때문이라고 생각했기때문이다. 그러나 리서치를 한 후에 생각을 바꿨다. 
              그 이유는 주로 입력된 데이터 크기에 따라 처리 시간이 증가하기때문에 O(log N)이 맞다.
              val 의  크기가 커지면 커질 수록 처리 시간이 미세하게 증가한다. 
 */
/*START SOLUTION*/ exports.nthPowerTimeComplexity = TimeComplexity.LOGARITHMIC; // TODO: Update this constant

var nthPower = function(base, exponent) {
  // Base case:
  if (exponent === 0) {
    return 1;
    // If exponent is odd
  } else if (exponent % 2 !== 0) {
    return base * nthPower(base, exponent - 1);
    // If exponent is even
  } else {
    return nthPower(base * base, exponent / 2);
  }
}; //O(3^n)/*END SOLUTION*/

// Problem 3: Generate every sequence of throws for an n-round rock-paper-scissors game.

/*
 * Complexity: 답은 O(3^n)이다. 이유는 음.... 풀어서 설명하자면.
              한명에서 혼자 가위 바위 보를 한다면 3가지 경우수가 나온다. 가위, 바위, 보
              두명에서 가위바위보를 한다면 가위-가위, 가위-바위, 가위-보, 
                                    바위-가위, 바위-바위, 바위-보
                                    보-가위, 보-바위, - 보-보
              이렇게 총 9가지가 나올 수있다. 
              만약 3명이서 가위바위보를 한다면 27경우의 수를 가진다. 즉 이 말은 3^n의 복잡도를 가진다고 말할 수 있다.
 */
/*START SOLUTION*/ exports.rockPaperScissorsTimeComplexity =
  TimeComplexity.EXPONENTIAL; // TODO: Update this constant

var rockPaperScissors = function(rounds) {
  var sequences = [];
  var plays = ["rock", "paper", "scissors"];

  var generate = function(sequence, round) {
    // Base case:
    if (round === rounds) {
      sequences.push(sequence);
    } else {
      plays.forEach(function(play) {
        generate(sequence.concat(play), round + 1);
      });
    }
  };

  generate([], 0);
  return sequences;
};
