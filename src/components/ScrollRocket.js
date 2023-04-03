import React from 'react'

function ScrollRocket() {
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollUp = document.querySelector('#scrollUp')
      if (currentScrollY > 400) {
        scrollUp.style.display = 'block'
      } else {
        scrollUp.style.display = 'none'
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollUp = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return (
    <a href='#' onClick={scrollUp} id='scrollUp'>
      <img src={require('../assets/icons/scroll-up.png')} alt='rocket' />
    </a>
  )
}

export default ScrollRocket
