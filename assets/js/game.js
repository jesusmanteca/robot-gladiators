
playerName = window.prompt("What is your Warrior's name, trainer?");
console.log("Player Name: ", playerName)

// 
// 
// Do something about the NULL - what if user hits cancel instead of typing name?
//
//


//for skipping a fight --> penaltyMoney
var penaltyMoney = 5




// ENEMY DATA
var enemyNames = ["Dr. Grouchy Crache", "Amy Android", "Robo Trumble", "Caiden Hawkridge"];
console.log("_____________")
console.log(enemyNames);
console.log("_____________")


//fight function

// Game Start //
var startGame = function () {


    //reset player stats
    var playerHealth = 100;
    var playerAttack = 50;
    var playerMoney = 10;
    console.log("Name: ", playerName, "- Attack: ", playerAttack, "- Health: ", playerHealth, "- Money: $", playerMoney);
    
    var enemyAttack = 50;

    var fight = function (enemyName) {

        window.alert("Your next opponent is: " + enemyNames[i] + " - Health: " + enemyHealth)

        // repeat and execute as long as the enemy robot is alive 
        while (enemyHealth > 0 && playerHealth > 0) {

            // Ask player if they wanna go at it
            var promptFight = window.prompt("Would you like to fight - " + pickedEnemyName + " - or skip his battle? Enter 'FIGHT' or 'SKIP' to choose.").toLowerCase();

            console.log("User chose to ", promptFight)

            if (promptFight === "skip") {
                // confirm user wants to skip
                var confirmSkip = window.confirm("Are you sure you'd like to skip? It's gonna cost you, " + playerName);
                // if yes (true), leave fight
                if (confirmSkip) {

                    playerMoney = Math.max(0, playerMoney - penaltyMoney);
                    // enemyMoney = enemyMoney + penaltyMoney;
                    window.alert(playerName + " has decided to skip this fight. You have lost " + penaltyMoney + " coins and now have $" + playerMoney + " left!");
                    // subtract money from playerMoney for skipping

                    console.log("Name:", playerName, "- Attack:", playerAttack, "- Health:", playerHealth, "- Money: $", playerMoney);
                    console.log("Name:", enemyName, "- Attack:", enemyAttack, "- Health:", enemyHealth);
                    break
                } else { // if no (false), ask question again by running fight() again
                    fight();
                }
            }
            else if (promptFight === "fight") {

                // Announce commencement of fight
                window.alert(playerName + " has chosen to 👊 FIIIIIIIGHT!");
                console.log("Enemy:", enemyNames[i])
                console.log("Enemy Health: ", enemyHealth)

                // remove enemy's health by subtracting the amount set in the playerAttack variable
                var damage = randomNumber(playerAttack - 3, playerAttack);
                enemyHealth = Math.max(0, enemyHealth - damage);
                console.log(
                    playerName, "attacked", enemyName, "with", damage, "attack points.", enemyName, "now has", enemyHealth, "health remaining."
                );

                var damage = randomNumber(enemyAttack-3, enemyAttack)
                playerHealth = Math.max(0, playerHealth - damage);
                console.log(
                    enemyName, "attacked ", playerName, "with", damage, "attack points.", playerName, "now has", playerHealth, "health remaining."
                );

                // check enemy's health
                if (enemyHealth <= 0) {
                    window.alert("You have destroyed " + enemyName + "!!");
                    playerMoney = playerMoney + penaltyMoney;
                    console.log(playerName, "has now $", playerMoney);
                    break;
                } else {
                    window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }

                // check player's health
                if (playerHealth <= 0) {
                    window.alert(playerName + " has been terribly wounded! 😱");
                    break;
                } else {
                    window.alert(playerName + " still has " + playerHealth + " ♥ health left.");
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
        console.log("Entered shop with $", playerMoney)
        //Lay it out
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
        ).toLowerCase();
        // use switch to carry out action
        switch (shopOptionPrompt) {
            case "refill":
                if (playerMoney >= 7) {
                    window.alert("Refilling player's health by 20 for 7 dollars.");
    
                    // increase health and decrease money
                    playerHealth = playerHealth + 20;
                    playerMoney = playerMoney - 7;
                } else {
                    window.alert("You broke, get outta here!.")
                    break;
                }
                break;
            case "upgrade":
                if (playerMoney >= 7) {
                    window.alert("Upgrading player's attack by 6 for 7 dollars.");
    
                    // increase attack and decrease money
                    playerAttack = playerAttack + 6;
                    playerMoney = playerMoney - 7;
                    console.log("Player Attack now: ", playerAttack);
                } else {
                    window.alert("You broke, get outta here!.")
                }
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

    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {

            window.alert(
                "Welcome to Gladiators, " + playerName + "! Round No. " + [i + 1] + "... is about to begin!"
            );

            var pickedEnemyName = enemyNames[i];

            // if we add enemyHealth here, the new value for the variable will reflect once it goes through the function
            var randomNumber = function(min, max) {
                var value = Math.floor(Math.random()* (max - min + 1) + min);
                return value;
            }
            var enemyHealth = randomNumber(60,80);
            console.log(pickedEnemyName, "health:", enemyHealth)

            // call fight function with enemy robot
            fight(pickedEnemyName);

            // if we're not at the last enemy of the array
            if (playerHealth > 0 && i < enemyNames.length - 1) {

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
    if (playerHealth > 0) {
        window.alert("You survived the game! You made out with $" + playerMoney + " G's.")
    }
    else {
        window.alert("Game over for you. Let's see how you did!")
    }
    
    var playAgainConfirm = window.confirm("Would you like to play again?")
    if (playAgainConfirm){
        //restart the game
        startGame()
    } else {
        window.alert("Thank you for playing Gladiators! Come back soon!")
    }
};



// start game when page loads
// startGame()




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
};
// practiceMode();

// for the scope of the array, and going through each index until the end... so if the array has 3 things in there, we're going to go through a loop one by one starting with index 0 and move our way up to index 2, because there are only three things in there... the loop will run 3 times. What you do in the those three times can have to do with the actual array if you want. By getting the Math.random *3 and math floor i'm saying... pick a number from 0 to .9999 etc... and multiply it by 3 and round down (so it'll never be 3 which is helpful considering there is nothing at index 3. it's undefined). now, to return a value for a random charachter, i get a random number and say, return character in index number [random num] - well, in this case, that's what's happening but because we're going through the array as long as the list items, we'll do it three times. if we add more numbers to the list, we'll keep picking random people will be picked twice sometimes




