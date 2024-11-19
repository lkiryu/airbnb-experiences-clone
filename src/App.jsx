import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Card from './components/Card/Card'
import CardsData from './data/data'
import './App.css'

function App() {
  const cards = CardsData.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <main className='container'>
      <Navbar />
      <Hero/>
      <section className='cardList'>
        {cards}
      </section>
    </main>
  )
}

export default App
