import ProjectPhoto1 from './assets/images/project1.png';

import './assets/scss/index.scss';

const  Header = () => {
  return (
    <header className='header-wrap'>
      <div className='header-content'>
        <div className='left'>
          <a href='#home' >Home</a>
          <a href='#music' >Music</a>
          <a href='' >Photos</a>
          <a href='' >About Me</a>
          <a href='' >Contact</a>
        </div>
        <div className='right'>
          <a href='' >Some</a>
          <a href='' >Youtube</a>
        </div>
      </div>
    </header>
  )
}

const Home = () => {
  return (
    <div id='home' className='home-wrap'>
      <div className='home-content'>
        <h1>CANDLE MUSIC</h1>
        <h3>COMPOSER</h3>
        <h5>Orchestra , EDM , Pop</h5>
        <div className='home-photo'>
          <div />
          <div />
          <div >
            Candle Music 2024.12.01
          </div>
        </div>
      </div>
    </div>
  )
}

const Music = () => {
  return (
    <div id='music' className='music-wrap'>
      <div className='music-content'>
        <div className='project-tab'>
          <a href='#project1' className='tab'> Project 1 </a>
          <a href='#project2' className='tab'> Project 2 </a>
          <a href='#project2' className='tab'> Project 3 </a>
          <a href='#project2' className='tab'> Project 4 </a>
        </div>
        <div id='project1' className='project'>
          <p className='title'>Project 1</p>
          <div className='info'>
            <img src={ProjectPhoto1} className='photo'/>
          </div>
        </div>
      </div>
    </div>
  )
}
function App() {
  return (
    <>
      <Header />
      <Home />
      <Music />
    </>
  )
}

export default App
