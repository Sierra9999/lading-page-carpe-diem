import Image from 'next/image'
import './page.css'

export default function Home() {
  return (
    <main>
      <section className='division hero-section'>
        <section className='hero-cta'>
          <h1>Carpe Diem</h1>
          <h2>Your perfect journey, made with care and personal attention</h2>
          <h3>Be the first to know about our deals <br />
            sign up for our news letter</h3>
          <input type="text" placeholder='your-email@email.com' />
          <button>Start Journey</button>
        </section>
        <Image src={'/hero.jpeg'} alt='hero' width={900} height={500}></Image>
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
