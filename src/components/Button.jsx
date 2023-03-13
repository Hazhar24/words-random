import React, { useState, useEffect } from 'react';
import randomWords from 'random-words';


const Word = ({ onClick, children }) => {
  return (
    <button
      className="border w-56 h-12 rounded-lg text-sm font-medium text-gray-800 m-1 hover:bg-gray-200"
      onClick={onClick}>
      {children}
    </button>
  );
}

const Words = ({ length, onWordClick }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const rwords = randomWords({ exactly: 20, maxLength: length })
    console.table(rwords);
    setWords(rwords);
  }, [length]);

  return (
    <div className="mb-12">
      {words.map((word, index) => (
        <Word key={index} onClick={() => onWordClick(word)}>
          {word}
        </Word>
      ))}
    </div>
  );
}

const LevelSelection = ({ options, onOptionSelect }) => {
  return (
    <div className="mb-10">
      {options.map((option) => (
        <Word
          key={option}
          onClick={() => onOptionSelect(option)}
          className={`px-4 py-2 border rounded-lg text-sm font-medium text-gray-800 mr-2 mb-2 hover:bg-gray-200`}>
          {option}
        </Word>
      ))}
    </div>
  );
}

const ListWordsSelected = ({ words }) => {
  return (
    <ul className="list-disc list-inside">
      {words.map((word, index) => (
        <ol key={index}>{word}</ol>
      ))}
    </ul>
  );
}

export default function App() {
  const [selectedWord, setSelectedWords] = useState([]);
  const [selectedLength, setSelectedLength] = useState(3);

  function handleWordClick(word) {
    setSelectedWords((items) => [...items, word]);
  }

  function handleOptionSelect(option) {
    setSelectedLength(option);
  }

  return (
    <div className="container mx-auto py-4">
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Words</h2>
        <LevelSelection
          options={['Easy', 'Medium', 'Hard']}
          onOptionSelect={handleOptionSelect}
        />
        <Words length={selectedLength} onWordClick={handleWordClick} />
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-medium mb-2">Selected Words</h2>
        <ListWordsSelected words={selectedWord} />
      </div>
    </div>
  );
};