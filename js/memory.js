class MemoryGame {
  constructor(cards) {
    this.cards = cards

    this.pickedCards = []
    this.pairsClicked = 0
    this.pairsGuessed = 0
  }
  shuffleCards(cards) {

    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    return cards

  }
  checkIfPair(card1, card2) {

    this.pairsClicked++

    if (card1 === card2) {
      this.pairsGuessed++
      return true
    } else {
      return false

    }
  }

  isFinished() {

    console.log(this.cards.length)
    console.log(this.pairsGuessed)

    return this.cards.length / 2 === this.pairsGuessed ? true : false



  }
}