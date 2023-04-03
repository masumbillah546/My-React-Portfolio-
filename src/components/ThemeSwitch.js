import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
// import {} from '@fortawesome/free-brands-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/reducers';

function ThemeSwitch() {
  const dispatch = useDispatch()
  const {isDark} = useSelector((state) => state.theme)
  const toggle = () => {
    localStorage.setItem('theme', !isDark)
    dispatch(toggleTheme())
  }
  return (
    <div style={{right: 20, top: 12}} className='position-absolute'>
      <input onChange={toggle} type="checkbox" checked={isDark} class="checkbox" id="checkbox"/>
      <label for="checkbox" class="label">
        <FontAwesomeIcon className='fa-moon' icon={faMoon}/>
        <FontAwesomeIcon className='fa-sun' icon={faSun}/>
        <div class='ball'/>
      </label>
    </div>
  );
}

export default ThemeSwitch;