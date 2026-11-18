import './style.css';

export default function App() {
  return (
    <div className='app'>
      <header className="header">
        <a href='#home'>HOME</a>
        <a href='#contest'>FRAGE</a>
        <a href='#map'>KARTE</a>
        <a href="#charts">GRAPHIKEN</a>
        <a href='#credits'> CREDITS</a>
      </header>


      <div id="home" className="hero-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/Zurich_bahnhof_video.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>

        <div className='content'>
          <h1 className='landingH1Title'>Progetto a Zurigo Stazione</h1>
          <a href="#contest" className='scroll-button'> DOWN ↓ </a>
        </div>
      </div>

      <div className='sections'>
        <div id="contest" className='contest'>

        </div>
        <div id="map" className='map'>

        </div>
        <div id="charts" className='charts'></div>
      </div>
      <footer id="credits" className='footer'>
        <span>
          Ein Projekt von Tiago Palma Cardoso & Antoine Balestra
        </span>
        <span>
          © 2026 - Webprogrammierung HS26
        </span>
      </footer>
    </div>
  );
}