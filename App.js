import React from "react";
import "./styles.css";
import { useState } from "react";

const myGenres = {
  Travel: [
    {
      name: "Tanya Khanijow",
      ratings: "4.5/5"
    },
    {
      name: "Kritika Goel",
      ratings: "4/5"
    }
  ],

  Food: [
    {
      name: "rockyandmayur",
      ratings: "4/5"
    },
    {
      name: "Golgappa girl",
      ratings: "3.5/5"
    }
  ],

  TedX: [
    {
      name: "Aman Dhattarwal",
      ratings: "4.5/5"
    },
    {
      name: "Lara Boyd",
      ratings: "5/5"
    }
  ],
  Music: [
    {
      name: "Miracle Music",
      ratings: "3.5/5"
    },
    {
      name: "The Saccharide",
      ratings: "4/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Travel");
  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#F472B6" }}> 😄GoodGenres </h1>
      <h3 style={{ fontSize: "smaller", fontStyle: "italic" }}>
        {" "}
        explore some of my favorites youtubers in the genres listed below with
        ratings!!
      </h3>
      <div>
        {Object.keys(myGenres).map((genre) => (
          <button
            onClick={() => {
              genreClickHandler(genre);
            }}
            style={{
              cursor: "pointer",
              padding: "1rem",
              margin: "2rem",
              border: "3px solid #F472B6",
              borderRadius: "1rem",
              backgroundColor: "#FBCFE8"
            }}
          >
            {" "}
            {genre}{" "}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ paddingInlineStart: "0" }}>
        <ul>
          {myGenres[selectedGenre].map((youtubers) => (
            <li
              style={{
                listStyle: "none",
                padding: "1rem",
                margin: "0.8rem",
                border: "1px solid #F472B6",
                borderRadius: "0.5rem",
                width: "70%"
              }}
            >
              <div style={{ fontSize: "larger" }}>{youtubers.name}</div>
              <div style={{ fontSize: "smaller" }}>{youtubers.ratings}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
