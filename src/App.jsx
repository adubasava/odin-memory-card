import { useState } from 'react';
import './App.css';
import './styles/style.css';
import Header from './components/Header.jsx';
import Cards from './components/Cards.jsx';
import names from './components/data.jsx';

function App() {
  function shuffleArray() {
    const newArray = [];
    let i = 0;
    while (i < names.length) {
      let index = Math.floor(Math.random() * names.length);
      while (newArray[index] != undefined) {
        index = Math.floor(Math.random() * names.length);
      }
      newArray[index] = names[i];
      i++;
    }
    return newArray;
  }
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [Img, setImg] = useState(names);

  function handleclick(picture) {
    if (picture.clicked === true) {
      setScore(0);
      names.map((name) => {
        name.clicked = false;
      });
    } else {
      const index = names.findIndex((name) => name.name === picture.name);
      names[index].clicked = true;
      setScore(score + 1);
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
    }
    setImg(shuffleArray());
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <main>
        <div className="cards">
          {Img.map((item) => (
            <button
              key={item.name}
              className="card"
              onClick={(click) => {
                click.preventDefault();
                handleclick(item);
              }}
            >
              <Cards name={item} />
            </button>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
