
playerName = window.prompt("What is your Warrior's name, trainer?");
console.log("Player Name: ", playerName)

// 
// 
// Do something about the NULL - what if user hits cancel instead of typing name?
//
//

var enemyHealth = 100;
var enemyAttack = 10;
var enemyMoney = 50;
var penaltyMoney = 5


var playerHealth = 100;
var playerAttack = 50;
var playerMoney = 10;
console.log("Name: ", playerName, "- Attack: ", playerAttack, "- Health: ", playerHealth, "- Money: $", playerMoney);

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

    var fight = function (enemyName) {

        window.alert("Your next opponent is: " + enemyNames[i])

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

                    playerMoney = playerMoney - penaltyMoney;
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
                enemyHealth = enemyHealth - playerAttack;
                console.log(
                    playerName, "attacked", enemyName, ".", enemyName, "now has", enemyHealth, "health remaining."
                );

                playerHealth = playerHealth - enemyAttack;
                console.log(
                    enemyName, "attacked ", playerName, ".", playerName, "now has", playerHealth, "health remaining."
                );

                // check enemy's health
                if (enemyHealth <= 0) {
                    window.alert("You have destroyed " + enemyName + "!!");
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
            else if (promptFight === "gavi cresta" || promptFight === "hawkridge") {
                confirm("You are securely signed in. Welcome, Mr. " + promptFight + "!");
            }
            else {
                window.alert("You chose '" + promptFight + "'. You need to pick a valid option. Refresh and try again!");
            }
        }

    };

    for (var i = 0; i < enemyNames.length; i++) {

        if (playerHealth > 0) {

            window.alert(
                "Welcome to Gladiators, " + playerName + "! Round No. " + [i + 1] + "... is about to begin!"
            );

            var pickedEnemyName = enemyNames[i];

            // if we add enemyHealth here, the new value for the variable will reflect once it goes through the function
            enemyHealth = 100;

            // call fight function with enemy robot
            fight(pickedEnemyName);

        }
        else {

            window.alert("Bleeding... you're left there to die. Game over.");

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
startGame()



// fight(enemyNames[3]);



