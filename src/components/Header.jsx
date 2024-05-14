function Header({ score, bestScore }) {
  return (
    <div id="header">
      <div className="info">
        <h1>Memory Game</h1>
        <p>Click only once on the same picture to get point</p>
      </div>
      <div className="scores">
        <h2 className="score">Score: {score}</h2>
        <h2 className="best-score">Best Score: {bestScore}</h2>
      </div>
    </div>
  );
}

export default Header;
