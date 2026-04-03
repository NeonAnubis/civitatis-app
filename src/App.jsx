import Header from './components/Header'
import Hero from './components/Hero'
import TopDestinations from './components/TopDestinations'
import TrendingActivities from './components/TrendingActivities'
import AppDownload from './components/AppDownload'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TopDestinations />
      <TrendingActivities />
      <AppDownload />
      <Footer />
    </div>
  )
}

export default App
