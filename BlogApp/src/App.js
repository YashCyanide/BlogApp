import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">BlogG</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>


      <div className="post">
        <div className="image">
          <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*POAUldBjPRY5DCewGpXx8Q.png" alt="" />
        </div>
        <div className="texts">
          <h2>Special Report: Extreme Heat and Human Health</h2>
            <p className="info">
                <a className="author">
                    YashSonavane
                </a>
                <time>2023-01-06 12:00</time>
            </p>
          <p>Excessive heat is pushing the limits of human tolerability. In more than a dozen articles, Wise & Well examines how hot is too hot, how…</p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*POAUldBjPRY5DCewGpXx8Q.png" alt="" />
        </div>
        <div className="texts">
          <h2>Special Report: Extreme Heat and Human Health</h2>
          <p>Excessive heat is pushing the limits of human tolerability. In more than a dozen articles, Wise & Well examines how hot is too hot, how…</p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*POAUldBjPRY5DCewGpXx8Q.png" alt="" />
        </div>
        <div className="texts">
          <h2>Special Report: Extreme Heat and Human Health</h2>
          <p>Excessive heat is pushing the limits of human tolerability. In more than a dozen articles, Wise & Well examines how hot is too hot, how…</p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*POAUldBjPRY5DCewGpXx8Q.png" alt="" />
        </div>
        <div className="texts">
          <h2>Special Report: Extreme Heat and Human Health</h2>
          <p>Excessive heat is pushing the limits of human tolerability. In more than a dozen articles, Wise & Well examines how hot is too hot, how…</p>
        </div>
      </div>

    </main>
  );
}

export default App;
