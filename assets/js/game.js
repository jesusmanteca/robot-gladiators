var playerName = window.prompt("What is your robot's name?");
console.log("Player Name: ", playerName)
// Do something about the NULL - what if user hits cancel instead of typing name?

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log("Name: ", playerName, "- Attack: ", playerAttack, "- Health: ", playerHealth,"- Money: $", playerMoney);
// -----------
var enemyName = "Roborto";
var enemyHealth = 100;
var enemyAttack = 12;
console.log("Name: " , enemyName, "- Attack: " , enemyAttack, " - Health: " , enemyHealth);

var fight = function() {

    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators, " + playerName + "!");
    
    // Ask player if they wanna go at it
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.").toLocaleLowerCase();


    console.log ("User chose to " + promptFight)

    // if player choses to fight, then fight
    if (promptFight === "fight") {

        // Announce commencement of fight
        window.alert(playerName + " has chosen to FIGHT!");

        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    
        // check enemy's health
        if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
        } else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }
    
        // remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );

        // check player's health
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }

        // if player choses to skip
    } else if (promptFight === "skip") {
        // confirm user wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to skip?");
        // if yes (true), leave fight
            if (confirmSkip) {
                
                playerMoney = playerMoney - 2;
                window.alert(playerName + " has decided to skip this fight. You have lost 2 coins and now have $" + playerMoney + "!");
                // subtract money from playerMoney for skipping
                
                console.log("Name: " + playerName, "- Attack: " + playerAttack, "- Health: " + playerHealth + "- Money: $" + playerMoney);
            } else { // if no (false), ask question again by running fight() again
              fight();
            }
    } else if (promptFight === "Gavilan Cresta" || promptFight === "Hawkridge") {
        confirm("You are securely signed in. Welcome, Mr. " + promptFight + "!");
    } else {
        window.alert("You chose '" + promptFight + "'. You need to pick a valid option. Refresh and try again!");
    }

  };

fight();



