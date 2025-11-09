This is a simple, browser-based Rock, Paper, Scissors game where you play against the computer. The game is built entirely with HTML  and vanilla JavaScript and demonstrates core concepts of DOM manipulation and event handling.

## 🎮 How to Play

1.  **Open the Game:** Open the `index.html` file in any web browser.
2.  **Start:** You will be greeted with a welcome message. Click the **"Lets start"** button to begin.
3.  **Make Your Choice:** Three buttons ("rock", "paper", "scissors") will appear. Click one to play your hand.
4.  **See the Results:** The game will display your choice, the computer's randomly generated choice, and the winner of the round.
5.  **Track the Score:** A running score is kept for both you and the computer.
6.  **Win the Game:** The first player to reach **5 points** wins the entire game! The game will announce the final winner and the game buttons will be removed.

---

## ✨ Features

* **Clean UI:** A simple, easy-to-understand interface.
* **Computer Opponent:** Play against a computer that makes a random choice each round.
* **Score Tracking:** The game tracks the score for both the "Human" and "Computer" player.
* **First-to-Five:** The game automatically ends when one player reaches 5 points, declaring an overall winner.
* **Results Log:** A running log shows the results of each round so you can see the history of play.

---

## 🛠️ Technologies Used

* **HTML5:** For the basic structure and content of the game.
* **CSS3:** For minimal styling (like the background color).
* **JavaScript (Vanilla):** For all the game logic, including:
    * **DOM Manipulation:** Using `querySelector`, `createElement`, `appendChild`, and `innerHTML` to dynamically create buttons and display results.
    * **Event Handling:** Using `addEventListener` to respond to user button clicks.
    * **Game Logic:** Implementing the rules of Rock, Paper, Scissors and tracking the score using functions and conditional statements.
