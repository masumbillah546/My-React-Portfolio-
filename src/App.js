import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.css'
import { ScrollRocket } from './components'
import {
  Header,
  Footer,
  Skills,
  Education,
  TopSkills,
  Projects,
  Experiences,
} from './sections'
import { footerHeight } from './constants/constants'
import { useSelector } from 'react-redux'

function App() {
  const { isDark } = useSelector((store) => store.theme)
  return (
    <div className='App' style={{ backgroundColor: isDark ? '' : '#FFFFFF' }}>
      <div
        className='pb-5'
        style={{ minHeight: window.innerHeight - footerHeight }}
      >
        <Header />
        <Experiences />
        <TopSkills />
        <Skills />
        {/* <Projects /> */}
        <Education />
      </div>
      <Footer />
      <ScrollRocket />
    </div>
  )
}

export default App
