class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

let userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first); // undefined
console.log(userOne.f); // Paul
console.log(userOne.l); // O'Connor
console.log(userOne); // User {f: "Paul", l: "O'Connor", e: "poconnor@elevenfifty.org"}

// More practice
class Card {
    constructor(value, suit, isFace) {
        this.v = value;
        this.s = suit;
        this.isFace = isFace;
    }
}

let cardOne = new Card("Queen", "Spades", true);
console.log(cardOne.v);
console.log(cardOne.s);
console.log(cardOne.isFace);
console.log(cardOne);