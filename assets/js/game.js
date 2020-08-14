var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
}
//fight function

// Game Start //
var startGame = function () {

    playerInfo.reset();
    //reset player stats
    console.log("Name: ", playerInfo.name, "- Attack: ", playerInfo.attack, "- Health: ", playerInfo.health, "- Money: $", playerInfo.money);

    

    var fight = function (enemy) {

        window.alert("Your next opponent is: " + enemy.name + " - Health: " + enemy.health)

        // repeat and execute as long as the enemy robot is alive 
        while (enemy.health > 0 && playerInfo.health > 0) {

            // Ask player if they wanna go at it
            var promptFight = window.prompt("Would you like to fight - " + enemy.name + " - or skip his battle? Enter 'FIGHT' or 'SKIP' to choose.").toLowerCase();

            console.log("User chose to ", promptFight)

            if (promptFight === "skip") {
                // confirm user wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to skip? It's gonna cost you, " + playerInfo.name);
                // if yes (true), leave fight
                if (confirmSkip) {

                    playerInfo.money = Math.max(0, playerInfo.money - penaltyMoney);
                    // enemyMoney = enemyMoney + penaltyMoney;
                    window.alert(playerInfo.name + " has decided to skip this fight. You have lost " + penaltyMoney + " coins and now have $" + playerInfo.money + " left!");
                    // subtract money from playerInfo.money for skipping

                    console.log("Name:", playerInfo.name, "- Attack:", playerInfo.attack, "- Health:", playerInfo.health, "- Money: $", playerInfo.money);
                    console.log("Name:", enemy.name, "- Attack:", enemy.attack, "- Health:", enemy.health);
                    break
                } else { // if no (false), ask question again by running fight() again
                    fight();
                }
            }
            else if (promptFight === "fight") {

                // Announce commencement of fight
                window.alert(playerInfo.name + " has chosen to 👊 FIIIIIIIGHT!");
                console.log("Enemy:", enemy.name)
                console.log("Enemy Health: ", enemy.health)

                // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
                var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
                enemy.health = Math.max(0, enemy.health - damage);
                console.log(
                    playerInfo.name, "attacked", enemy.name, "with", damage, "attack points.", enemy.name, "now has", enemy.health, "health remaining."
                );

                var damage = randomNumber(enemy.attack-3, enemy.attack)
                playerInfo.health = Math.max(0, playerInfo.health - damage);
                console.log(
                    enemy.name, "attacked ", playerInfo.name, "with", damage, "attack points.", playerInfo.name, "now has", playerInfo.health, "health remaining."
                );

                // check enemy's health
                if (enemy.health <= 0) {
                    window.alert("You have destroyed " + enemy.name + "!!");
                    playerInfo.money = playerInfo.money + penaltyMoney;
                    console.log(playerInfo.name, "has now $", playerInfo.money);
                    break;
                } else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }

                // check player's health
                if (playerInfo.health <= 0) {
                    window.alert(playerInfo.name + " has been terribly wounded! 😱");
                    break;
                } else {
                    window.alert(playerInfo.name + " still has " + playerInfo.health + " ♥ health left.");
                }
            }
            else if (promptFight === "hawkridge") {
                confirm("You are securely signed in. Welcome, Mr. " + promptFight + "!");
            }
            else {
                window.alert("You chose '" + promptFight + "'. You need to pick a valid option. Refresh and try again!");
            }
        }

    };

    var shop = function(){
        console.log("Entered shop with $", playerInfo.money)
        //Lay it out
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        ).toLowerCase();
        // use switch to carry out action
        switch (shopOptionPrompt) {
            case "refill":
                playerInfo.refillHealth();
                break;
            case "upgrade":
                playerInfo.upgradeAttack();
                break;
            case "leave":
                window.alert("Leaving the store.");
    
                // do nothing, so function will end
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");
    
                // call shop() again to force player to pick a valid option
                shop();
                break;
        }
    };



    for (var i = 0; i < enemyInfo.length; i++) {

        if (playerInfo.health > 0) {

            window.alert(
                "Welcome to Gladiators, " + playerInfo.name + "! Round No. " + [i + 1] + "... is about to begin!"
            );

            var pickedEnemyObj = enemyInfo[i];

            // if we add enemy.health here, the new value for the variable will reflect once it goes through the function

            console.log(pickedEnemyObj.name, "health:", pickedEnemyObj.health)

            // call fight function with enemy robot
            fight(pickedEnemyObj);

            // if we're not at the last enemy of the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {

                // ask user if they want to go into the shop
                var storeConfirm = window.confirm("Fight is over, want to shop before the next beat down?")
                // if so, then take them to the store function
                if (storeConfirm) {
                   shop(); 
                }
            }
        }
        else {

            window.alert("🩸🩸🩸 Bleeding... you're left there to die. Game over.");
            break
        }
    };

    endGame();
};

var endGame = function() {
    if (playerInfo.health > 0) {
        window.alert("You survived the game! You made out with $" + playerInfo.money + " G's.")
    }
    else {
        window.alert("Game over for you. Let's see how you did!")
        window.alert("You have $" + playerInfo.money +" G's.")
    }
    
    var playAgainConfirm = window.confirm("Would you like to play again?")
    if (playAgainConfirm){
        //restart the game
        startGame()
    } else {
        window.alert("Thank you for playing Gladiators! Come back soon!")
    }
};

var playerInfo = {
    name: window.prompt("What is your Warrior's name, trainer?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You're broke! You only got $" + this.money + ". You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You're broke! You only got $" + this.money + ". You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        this.attack += 6;
        this.money -= 7;
    }
};

console.log("You have submitted a fighter!")
console.log("Warrior's Name:", playerInfo.name)

var enemyInfo = [
    {
        name: "Poison Ivy",
        attack: randomNumber(10, 14),
        health: randomNumber(20, 40),
    },
    {
        name: "Bo",
        attack: randomNumber(10, 14),
        health: randomNumber(20, 40),
    },
    {
        name: "Caiden Hawkridge",
        attack: randomNumber(10, 14),
        health: randomNumber(20, 40),
    },
    {
        name: "Miss. O'Gyny",
        attack: randomNumber(10, 14),
        health: randomNumber(20, 40),
    }

]
// start game when page loads
startGame()




// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
var practiceMode = function () {
    var array = ["Tom", "Cat", "Bob", "Junior", "Julia", "Sophie"];
    console.log(array.length)
    for (var i = 0; i < array.length; i++) {
        var randomNumberGenerated = Math.floor(Math.random() * array.length);
        console.log(array[randomNumberGenerated])
    }
    var randomFloor = Math.random()
    console.log(randomFloor)
    console.log(Math.floor(randomFloor * 100))

    var randomNumberGenerated = Math.floor(Math.random() * array.length);
    console.log(array[randomNumberGenerated])
};
// practiceMode();

// for the scope of the array, and going through each index until the end... so if the array has 3 things in there, we're going to go through a loop one by one starting with index 0 and move our way up to index 2, because there are only three things in there... the loop will run 3 times. What you do in the those three times can have to do with the actual array if you want. By getting the Math.random *3 and math floor i'm saying... pick a number from 0 to .9999 etc... and multiply it by 3 and round down (so it'll never be 3 which is helpful considering there is nothing at index 3. it's undefined). now, to return a value for a random charachter, i get a random number and say, return character in index number [random num] - well, in this case, that's what's happening but because we're going through the array as long as the list items, we'll do it three times. if we add more numbers to the list, we'll keep picking random people will be picked twice sometimes




