import Image from 'next/image'
import './page.css'

export default function Home() {
  return (
    <main>
      <section className='hero division'>
        <section className='hero-cta'>
          <h1 className='hero-cta-title'>Carpe Diem</h1>
          <h2 className='hero-cta-description'>Your perfect journey, made with care and personal attention</h2>
          <section className='newsletter'>
            <h3>Be the first to know about our deals <br />
              sign up for our news letter</h3>
            <form className='newsletter-form' action="">
              <input type="email" placeholder='your-email@email.com' />
              <button>Start Journey</button>
            </form>

          </section>

        </section>
      </section>
      <section className='division' id='about-us'>
        <h3>about us</h3>
        <h1>we are individuals as should be our vacation and services</h1>

        <section className="services">
          <div className="service-card">
            <h2 className="service">Original route</h2>
            <p className="description">Travel to the most interesting and unique places with local guides</p>
          </div>
          <div className="service-card">
            <h2 className="service">Original route</h2>
            <p className="description">Travel to the most interesting and unique places with local guides</p>
          </div>
          <div className="service-card">
            <h2 className="service">Original route</h2>
            <p className="description">Travel to the most interesting and unique places with local guides</p>
          </div>
          <div className="service-card">
            <h2 className="service">Original route</h2>
            <p className="description">Travel to the most interesting and unique places with local guides</p>
          </div>

        </section>
      </section>
    </main>
  )
}
