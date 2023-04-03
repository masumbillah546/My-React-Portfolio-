import { useSelector } from 'react-redux'
import { Banner, NavigationBar } from '../components'

function Header() {
  const { isDark } = useSelector((store) => store.theme)
  return (
    <>
      <NavigationBar />
      <Banner />
    </>
  )
}

export default Header
