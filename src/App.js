import './App.css'
import { filmData } from './film-data'
import { Slideshow } from './Slideshow'

const App = () => {
  return (
    <div className="slides-app" style={{ textAlign: 'center'}}>
      <h1>Your Slideshow</h1>
      <Slideshow/>
    </div>
  )
}

export default App
