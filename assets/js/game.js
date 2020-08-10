var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log multiple values at once like this
console.log("Name: " + playerName, "- Attack: " + playerAttack, "- Health: " + playerHealth);

var enemyName = "Roborto";
var enemyHealth = 100;
var enemyAttack = 12;

console.log("Name: " + enemyName, "- Attack: " + enemyAttack, "- Health: " + enemyHealth);

var fight = function() {
    // Alert users that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
  
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = (enemyHealth - playerAttack);
  
    // Log a resulting message to the console so we know that it worked.
    console.log(
        enemyName + " Health: " + enemyHealth
        );
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + "pts. of health remaining."
      );

    // check enemy health
    if (enemyHealth <=0) {
        window.alert(enemyName + " is dead.")
    } else {
        window.alert(enemyName + " still has " + enemyHealth + "pts. of health left.")
    }
  
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;
  
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + " Health: " + playerHealth
        );
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + "pts. of health remaining."
      );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " is dead.");
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + "pts. of health left.");
    }
  };

fight();

