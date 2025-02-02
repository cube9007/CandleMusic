// img 
import ProjectPhoto1 from './assets/images/project1.png';
import ProjectPhoto2 from './assets/images/project2.png';
import Photo3 from './assets/images/photo3.png';
import Photo4 from './assets/images/photo4.png';
import Photo5 from './assets/images/photo5.png';
import Photo6 from './assets/images/photo6.png';
import AboutMeImg from './assets/images/about-me.png';
// audio
import Sample1_1 from './assets/audio/sample1-1.mp3';
import Sample1_2 from './assets/audio/sample1-2.mp3';
import Sample1_3 from './assets/audio/sample1-3.mp3';
import Sample2_1 from './assets/audio/sample2-1.mp3';
import Sample2_2 from './assets/audio/sample2-2.mp3';
import Sample2_3 from './assets/audio/sample2-3.mp3';

// audio library
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

// css
import './assets/scss/index.scss';
import { useEffect, useState } from 'react';

const  Header = () => {
  return (
    <header className='header-wrap'>
      <div className='header-content'>
        <div className='left'>
          <a href='#home' >Home</a>
          <a href='#music' >Music</a>
          <a href='#photos' >Photos</a>
          <a href='#about-me' >About Me</a>
          <a href='#contact' >Contact</a>
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
  const initialProject1Audio = [
    {
      src: Sample1_1,
      project: 'Project 1',
      title: 'Project 1 Music Sample 1',
      desc: 'Bubble Bubble P 1',
      number: 0,
      time: 0,
    },
    {
      src: Sample1_2,
      project: 'Project 1',
      title: 'Project 1 Music Sample 2',
      desc: 'Bubble Bubble P 2',
      number: 1,
      time: 0,
    },
    {
      src: Sample1_3,
      project: 'Project 1',
      title: 'Project 1 Music Sample3',
      desc: 'Bubble Bubble P 3',
      number: 2,
      time: 0,
    },
  ];

  const initialProject2Audio = [
    {
      src: Sample2_1,
      project: 'Project 2',
      title: 'Project 2 Music Sample 1',
      desc: 'Sonic Advanture P 1',
      number: 0,
      time: 0,
    },
    {
      src: Sample2_2,
      project: 'Project 2',
      title: 'Project 2 Music Sample 2',
      desc: 'Sonic Advanture P 2',
      number: 1,
      time: 0,
    },
    {
      src: Sample2_3,
      project: 'Project 2',
      title: 'Project 2 Music Sample3',
      desc: 'Sonic Advanture P 3',
      number: 2,
      time: 0,
    },
  ];

  const ProjectItem = ({ initialProjectAudio, coverImg }) => {
    const [projectAudio, setProjectAudio] = useState(initialProjectAudio);
    const [currentAudio, setCurrentAudio] = useState(projectAudio[0]);

    useEffect(() => {
      const updateAudioTimes = async () => {
        const updatedAudio = await Promise.all(
          projectAudio.map(audio => {
            return new Promise(resolve => {
              const audioElement = new Audio(audio.src);
              audioElement.addEventListener('loadedmetadata', () => {
                resolve({ ...audio, time: audioElement.duration });
              });
            });
          })
        );
        setProjectAudio(updatedAudio);
      };
  
      updateAudioTimes();
    }, []);
  
    const formatTime = (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
  
    
    return (
        <>
          <div className='info'>
            <img src={coverImg} className='photo'/>
            <div className='audio-player'>
              <div className='audio-title'>
                <h1>{currentAudio.project}</h1>
                <h3>{currentAudio.title}</h3>
                <h5>{currentAudio.desc}</h5>
              </div>
              <AudioPlayer
                src={currentAudio.src}
                progressJumpSteps={{backward: 15000, forward: 15000}}
                autoPlayAfterSrcChange
              />
            </div>
          </div>
          <div className='list'>
            {projectAudio.map((obj, index) => (
              <div 
                className={`list-item ${index == currentAudio.number ? 'current' : ''}`} 
                key={index} 
                onClick={()=>{
                  setCurrentAudio(obj)
                }}
              >
                <div> { index == currentAudio.number ? <div className='play-btn'/> : index + 1 }</div>
                <p> {obj.title} </p>
                <p> {formatTime(obj.time)} </p>
              </div>
            ))}
          </div>
        </>
    )
  }
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
          <ProjectItem initialProjectAudio={initialProject1Audio} coverImg={ProjectPhoto1}/>
        </div>
        <div id='project2' className='project'>
          <p className='title'>Project 2</p>
          <ProjectItem initialProjectAudio={initialProject2Audio} coverImg={ProjectPhoto2}/>
        </div>
      </div>
    </div>
  )
}

const Photos = () => {
  return (
    <div id='photos' className='photos-wrap'>
      <div className='photos-content'>
        <p className='title'>Photos</p>
        <div className='photo-list'>
          <img src={Photo3} className='photo'/>
          <img src={Photo4} className='photo'/>
          <div >
            Candle Music 2024.12.01
          </div>
        </div>
        <div className='photo-list'>
          <img src={Photo5} className='photo'/>
          <img src={Photo6} className='photo'/>
          <div >
            Candle Music 2024.12.01
          </div>
        </div>
      </div>
    </div>
  )
}

const AboutMe = () => {
  return (
    <div id='about-me' className='about-me-wrap'>
      <div className='about-me-content'>
        <p className='title'>About Me</p>
        <div className='info'>
          <img src={AboutMeImg} className='photo'/>
          <p className='text'>
            서울예술대학교에서 베이스를 전공하며, 전자음악과 게임 음악을 중심으로 창작 활동을 하고 있는 음악가. 깊이 있는 저음과 독창적인 사운드를 탐구하며, 다양한 장르의 음악을 실험적으로 접목하는 데 관심이 많습니다.<br/>
            <br/>
            신스 웨이브(Synthwave), 퓨처 베이스(Future Bass), 앰비언트(Ambient) 등 전자음악의 다양한 스타일을 연구하며, 게임 음악에서는 몰입감 높은 사운드 디자인과 감성적인 멜로디 라인을 강조합니다. 베이스 연주자로서 탄탄한 리듬과 감각적인 그루브를 살린 음악을 만들고 있습니다.<br/>
            <br/>
            다양한 프로젝트에서 작곡, 편곡 및 사운드 디자인을 맡았으며, 개인적으로도 사운드트랙 및 독립 게임 음악 작업을 진행 중입니다. DAW(디지털 오디오 워크스테이션)를 활용한 프로덕션 능력을 갖추고 있으며, 실험적인 음악을 통해 자신만의 색깔을 만들어가고 있습니다.<br/>
            <br/><br/>
            A musician majoring in bass at Seoul Institute of the Arts, focusing on electronic music and game music creation. Passionate about exploring deep bass tones and unique sounds, with a strong interest in experimentally blending various musical genres.<br/>
            <br/>
            Studying diverse styles of electronic music such as Synthwave, Future Bass, and Ambient, while emphasizing immersive sound design and emotional melodies in game music. As a bass player, strives to create music with solid rhythm and a distinctive groove.<br/>
            <br/>
            Has participated in various projects as a composer, arranger, and sound designer, while also working on soundtracks and independent game music. Possesses strong production skills using DAWs (Digital Audio Workstations) and continues to develop a unique sound through experimental music.
          </p>
        </div>
      </div>
    </div>
  )
}

const Contact = () => {
  return (
    <div id='contact' className='contact-wrap'>
      <div className='contact-content'>
        <div className='title'>
          <a>CONTACT ME</a>
          <p>Connect to open KakaoTalk</p>
        </div>
        <div className='info'>
          <a href='#home'>CANDLE MUSIC</a>
          <p className='text'>
            010-4691-2861 <br/>
            Email@naver.com <br/>
            함승우 Ham Seung Woo / 대한민국 서울 노원구 Nowon-gu, Seoul, Republic of Korea
          </p>
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
      <Photos />
      <AboutMe />
      <Contact />
    </>
  )
}

export default App
