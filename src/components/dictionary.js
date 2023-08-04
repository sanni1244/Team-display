import React, { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi"; // Importing Feather Icons

export default function Dictionary() {
  const [word, setWord] = useState([]);
  const [worda, setWorda] = useState([]);
  const [newWord, setNewWord] = useState('');

  useEffect(() => {
    fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + newWord)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setWord(data[0].meanings);
        setWorda(data[0]); 
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setWord([]);
      });
  }, [newWord]);

  return (
    <div className="p-8 mx-auto max-w-md bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 rounded-md shadow-lg text-white font-body">
      <div className="flex items-center justify-center mb-4">
        <h2 className="text-3xl font-bold">Dictionary App</h2>
      </div>
      <div className="relative mb-4">
        <input
          id="searchInput"
          className="block w-full mt-1 px-4 py-2 border rounded-md bg-gray-100 focus:ring focus:ring-purple-300 focus:outline-none text-gray-800 font-body"
          type="text"
          placeholder="Enter your word..."
          value={newWord}
          onChange={(e) => setNewWord(e.target.value)}
        />
        <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
      </div>
      {word.length > 0 && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold">You searched: <span className="font-medium">{worda.word}</span></h2>
        </div>
      )}
      {word.map((e, index) => (
        <div key={index} className="mb-2 bg-white text-red-900 bg-opacity-75 p-4 rounded-md shadow-md">
          <p className="font-semibold">Meaning: <span className="font-medium text-red-500">[{e.partOfSpeech}]</span> {e.definitions[0].definition}</p>
        </div>
      ))}
    </div>
  )
}
