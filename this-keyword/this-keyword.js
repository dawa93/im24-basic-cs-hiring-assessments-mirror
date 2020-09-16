// Example use :
//
// sport.playerNames();
// returns ["Lebron James plays basketball", "Kevin Durant plays basketball"]

var sport = {
  name: "basketball",
  players: [
    { name: "LeBron James", age: 31 },
    { name: "Kevin Durant", age: 28 }
  ],
  playerNames: function() {
    // YOUR CODE HERE
    // 빈배열을 만든다.
    this.storage = [];
    // 반복문을 사용하여서 players의 name + plays +sport.name을 더한 string  을 만든다.
    // 그 string을 빈배열에 넣는다.
    for (let player of this.players) {
      let somePlayer = "";
      // somePlayer = somePlayer + player['name'] +
      somePlayer = `${player["name"]} plays ${this.name}`;
      this.storage.push(somePlayer);
    }
    return this.storage;
  }
};
// it('should return correct results', function() {
//   sport.playerNames()[0].should.eql('LeBron James plays basketball');
//   sport.playerNames()[1].should.eql('Kevin Durant plays basketball');
// });
module.exports = sport;
