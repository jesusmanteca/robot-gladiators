var playerName = window.prompt("What is your robot's name?");
console.log("Player Name: ", playerName)
// 
// 
// Do something about the NULL - what if user hits cancel instead of typing name?
//
//


var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
console.log("Name: ", playerName, "- Attack: ", playerAttack, "- Health: ", playerHealth,"- Money: $", playerMoney);
//
//
// -----------
// 
//
// ENEMY DATA
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble", "Caiden Hawkridge"];
console.log(enemyNames);
var enemyHealth = 100;
var enemyAttack = 12;

console.log(" ")
console.log("Length of the Enemy array:", enemyNames.length);

//fight function
var fight = function(enemyName) {
        // repeat and execute as long as the enemy robot is alive 
    while(enemyHealth > 0) {
        
        // Ask player if they wanna go at it
        var promptFight = window.prompt("Would you like to fight - " + enemyNames[i] + " - or skip his battle? Enter 'FIGHT' or 'SKIP' to choose.").toLocaleLowerCase();

        console.log ("User chose to " , promptFight)
        var penaltyMoney = 2

        // if player choses to fight, then fight
        if (promptFight === "fight") {

            // Announce commencement of fight
            window.alert(playerName + " has chosen to 👊 FIIIIIIIGHT!");

            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;
            console.log(
            playerName, "attacked", enemyName, ".",enemyName, "now has" ,enemyHealth , "health remaining."
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
            enemyName , "attacked " , playerName , "." , playerName, "now has", playerHealth, "health remaining."
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
            var confirmSkip = window.confirm("Are you sure you'd like to skip? It's gonna cost you, " + playerName);
            // if yes (true), leave fight
                if (confirmSkip) {
                    
                    playerMoney = playerMoney - penaltyMoney;
                    window.alert(playerName + " has decided to skip this fight. You have lost " + penaltyMoney + " coins and now have $" + playerMoney + " left!");
                    // subtract money from playerMoney for skipping
                    
                    console.log("Name:", playerName, "- Attack:" , playerAttack, "- Health:" , playerHealth , "- Money: $" , playerMoney);
                } else { // if no (false), ask question again by running fight() again
                fight();
                }
        } else if (promptFight === "Gavi Cresta" || promptFight === "Hawkridge") {
            confirm("You are securely signed in. Welcome, Mr. " + promptFight + "!");
        } else {
            window.alert("You chose '" + promptFight + "'. You need to pick a valid option. Refresh and try again!");
        }
    }


  };

for(var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    // if we add enemyHealth here, the new value for the variable will reflect once it goes through the function
    enemyHealth = 50;
    // call fight function with enemy robot
    fight(pickedEnemyName);
}


// fight(enemyNames[3]);



