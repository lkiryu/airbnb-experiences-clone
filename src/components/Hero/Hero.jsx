import heroImg from '../../assets/photo-grid.png'
import './Hero.css'

export default function Hero() {
    return (
        <section className="hero">
            <img src={heroImg} alt='photo grid' className='hero-photo'/>
            <h1 className='hero-title'>Online Experiences</h1>
            <p className='hero-description'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}