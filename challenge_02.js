/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */

"use strict";
const name = prompt("Bitte geben Sie einen Namen ein:");
const age = prompt("Bitte geben Sie ein Alter ein:");

const parsedAge = parseInt(age);

if (parsedAge >= 0 && parsedAge <= 5) {
  console.log(`${name} trinkt Milch.`);
} else if (parsedAge >= 6 && parsedAge <= 12) {
  console.log(`${name} trinkt Saft.`);
} else if (parsedAge >= 13 && parsedAge <= 17) {
  console.log(`${name} trinkt Cola.`);
} else if (parsedAge >= 18) {
  console.log(`${name} trinkt Wein.`);
} else {
  console.log('Ungültiges Alter.');
}



//Du kannst diesen Code in einer JavaScript-Umgebung wie Node.js ausführen, um die gewünschte Funktionalität zu erhalten. Er wird dich nach dem Namen und dem Alter fragen und entsprechend der Altersangabe die Getränkeauswahl ausgeben.
