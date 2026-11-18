import './Home.css'

export default function Home() {
    return (
        <div id="home" className="hero-container">
            <video autoPlay loop muted playsInline className="background-video">
                <source src="/Zurich_bahnhof_video.mp4" type="video/mp4" />
            </video>
            <div className="overlay"></div>

            <div className='content'>
                <h1 className='landingH1Title'>Progetto a Zurigo Stazione</h1>
                <a href="#contest" className='scroll-button'> DOWN ↓ </a>
            </div>
        </div >
    )
}