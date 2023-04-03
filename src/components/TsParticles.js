// import "../styles.css";
import { useSelector } from 'react-redux'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
// import ExampleDoc from "../../Dotnet_CV.pdf";

export default function TsParticles() {
  const { isDark } = useSelector((store) => store.theme)
  const particlesInit = async (main) => {
    // console.log(main)
    await loadFull(main)
  }

  const particlesLoaded = (container) => {
    // console.log(container)
  }

  return (
    <Particles
      id='tsparticles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: false,
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            // value: '#ffffff',
            value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363'],
          },
          links: {
            color: '#ffffff',
            // color: isDark ? '#FFFFFF' : '#000000',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
