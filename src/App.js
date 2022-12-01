import { useEffect, useState } from "react";
import Line from "./Components/Line";
import "./App.css";

const WORD_LENGTH = 5;

function App() {
  const [solution, setSolution] = useState("");
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const handleType = (event) => {
      if (isGameOver) {
        return;
      }
      if (event.key === "Enter") {
        if (currentGuess.length !== 5) {
          return;
        }
        const newGuesses = [...guesses];
        newGuesses[guesses.findIndex((val) => val == null)] = currentGuess;
        setGuesses(newGuesses);
        setCurrentGuess("");

        const isCorrect = solution === currentGuess;
        if (isCorrect) {
          setIsGameOver(true);
        }
      }
      if (event.key === "Backspace") {
        setCurrentGuess(currentGuess.slice(0, -1));
        return;
      }
      if (currentGuess.length >= 5) {
        return;
      }

      const isLetter = event.key.match(/^[a-z]{1}$/) != null;
      if (isLetter) {
        setCurrentGuess((oldGuess) => oldGuess + event.key);
      }
    };

    window.addEventListener("keydown", handleType);

    return () => window.removeEventListener("keydown", handleType);
  }, [currentGuess, isGameOver, solution, guesses]);

  useEffect(() => {
    setSolution(
      words_list[Math.floor(Math.random() * words_list.length)].toLowerCase()
    );
  }, []);

  return (
    <div className="board">
      {guesses.map((guess, index) => {
        const isCurrentGuess =
          index === guesses.findIndex((val) => val == null);
        return (
          <Line
            key={index}
            guess={isCurrentGuess ? currentGuess : guess ?? ""}
            WORD_LENGTH={WORD_LENGTH}
            isFinal={!isCurrentGuess && guess != null}
            solution={solution}
          />
        );
      })}
      <div className="btn-container">
        <button className="btn" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    </div>
  );
}

const words_list = [
  "Abuse",
  "Adult",
  "Agent",
  "Anger",
  "Apple",
  "Award",
  "Basis",
  "Beach",
  "Birth",
  "Block",
  "Blood",
  "Board",
  "Brain",
  "Bread",
  "Break",
  "Brown",
  "Buyer",
  "Cause",
  "Chain",
  "Chair",
  "Chest",
  "Chief",
  "Child",
  "China",
  "Claim",
  "Class",
  "Clock",
  "Coach",
  "Coast",
  "Court",
  "Cover",
  "Cream",
  "Crime",
  "Cross",
  "Crowd",
  "Crown",
  "Cycle",
  "Dance",
  "Death",
  "Depth",
  "Doubt",
  "Draft",
  "Drama",
  "Dream",
  "Dress",
  "Drink",
  "Drive",
  "Earth",
  "Enemy",
  "Entry",
  "Error",
  "Event",
  "Faith",
  "Fault",
  "Field",
  "Fight",
  "Final",
  "Floor",
  "Focus",
  "Force",
  "Frame",
  "Frank",
  "Front",
  "Fruit",
  "Glass",
  "Grant",
  "Grass",
  "Green",
  "Group",
  "Guide",
  "Heart",
  "Henry",
  "Horse",
  "Hotel",
  "House",
  "Image",
  "Index",
  "Input",
  "Issue",
  "Japan",
  "Jones",
  "Judge",
  "Knife",
  "Laura",
  "Layer",
  "Level",
  "Lewis",
  "Light",
  "Limit",
  "Lunch",
  "Major",
  "March",
  "Match",
  "Metal",
  "Model",
  "Money",
  "Month",
  "Motor",
  "Mouth",
  "Music",
  "Night",
  "Noise",
  "North",
  "Novel",
  "Nurse",
  "Offer",
  "Order",
  "Other",
  "Owner",
  "Panel",
  "Paper",
  "Party",
  "Peace",
  "Peter",
  "Phase",
  "Phone",
  "Piece",
  "Pilot",
  "Pitch",
  "Place",
  "Plane",
  "Plant",
  "Plate",
  "Point",
  "Pound",
  "Power",
  "Press",
  "Price",
  "Pride",
  "Prize",
  "Proof",
  "Queen",
  "Radio",
  "Range",
  "Ratio",
  "Reply",
  "Right",
  "River",
  "Round",
  "Route",
  "Rugby",
  "Scale",
  "Scene",
  "Scope",
  "Score",
  "Sense",
  "Shape",
  "Share",
  "Sheep",
  "Sheet",
  "Shift",
  "Shirt",
  "Shock",
  "Sight",
  "Simon",
  "Skill",
  "Sleep",
  "Smile",
  "Smith",
  "Smoke",
  "Sound",
  "South",
  "Space",
  "Speed",
  "Spite",
  "Sport",
  "Squad",
  "Staff",
  "Stage",
  "Start",
  "State",
  "Steam",
  "Steel",
  "Stock",
  "Stone",
  "Store",
  "Study",
  "Stuff",
  "Style",
  "Sugar",
  "Table",
  "Taste",
  "Terry",
  "Theme",
  "Thing",
  "Title",
  "Total",
  "Touch",
  "Tower",
  "Track",
  "Trade",
  "Train",
  "Trend",
  "Trial",
  "Trust",
  "Truth",
  "Uncle",
  "Union",
  "Unity",
  "Value",
  "Video",
  "Visit",
  "Waste",
  "Voice",
  "Watch",
  "Water",
  "While",
  "White",
  "Whole",
  "Woman",
  "World",
  "Youth",
];

export default App;
