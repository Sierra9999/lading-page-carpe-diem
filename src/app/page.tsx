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
    </main>
  )
}
