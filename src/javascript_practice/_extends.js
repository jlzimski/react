// ES6 JS Classes
class User {
    constructor(name) {
        this.name = name;
        this.type = 'Trial User'
    };

    // Method 1
    greet() {
        console.log(`Welcome back, ${this.name}`);
    };

    // Method 2
    status() {
        console.log(`Current status: ${this.type}`);
    };
};

class TrialUser extends User {
    trialEnding() {
        console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
    };
};

// Instance of User Class
let anonDude = new User('Anonymous');
anonDude.greet();
anonDude.status();

// Instance of TrialUser Class
let trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();

// Banned User Class
class BannedUser extends User {
    bannedForLife() {
        console.log(`${this.name}, You have been banned for bad taste in music!`);
    };
};

let bannedUser = new BannedUser('Anonymous');
bannedUser.greet();
bannedUser.bannedForLife();
bannedUser.status();