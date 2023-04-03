import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/style.css'
import {
  Header,
  Footer,
  Banner,
  Skills,
  Education,
  TopSkills,
  Projects,
  ScrollRocket,
} from './components'
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
        <Banner />
        <TopSkills />
        <Skills />
        <Projects />
        <Education />
      </div>
      <ScrollRocket />
      <Footer />
    </div>
  )
}

export default App
