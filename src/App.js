import React, {useState} from 'react';
import "./index.css";
import Menu from './Menu.js';
import Spline from '@splinetool/react-spline';




function App() {
  const [activePage, setActivePage] = useState('home');
  return (
    <div className="scroll-snap-container h-screen overflow-auto scroll-snap-y scroll-snap-mandatory">
      {/* Home page */}
      <div id='home' className="background bg-gradient-to-b from-[#174564] to-[#3679A7]" onMouseEnter={() => setActivePage('home')}>
        <Menu activePage={activePage} />
        <img
          src="img/rättmoln.png"
          alt="moln"
          className="absolute top-[-10%] right-[55%] w-300 animate-float z-0"
        />
        <img
          src="img/rättmoln.png"
          alt="moln"
          className="absolute bottom-[-4%] left-[40%] w-300 animate-float z-0"
        />
        <img
          src="img/white-cloud.png"
          alt="moln"
          className="absolute top-[7%] left-[10%] w-300 animate-float z-0"
        />

      </div>
      {/* About me page */}
      <div id='about' className="background bg-gradient-to-b from-[#3679A7] to-[#5699C7]" onMouseEnter={() => setActivePage('about')}>
        <Menu activePage={activePage} />
        <div className="text-center z-10 font-body">
          <h1 className="text-orange2 text-6xl mb-10">ABOUT ME</h1>
          <div className="relative bg-blue_rectangle bg-opacity-60  border border-[#FDFDFD] p-6 rounded-xl shadow max-w-3xl mx-auto z-10">
      <p className="text-sm text-[#FDFDFD] drop-shadow-md">
        
        Hi! I’m Olivia, currently studying my fourth year of the Master of Science in Media Technology at Kungliga Tekniska Högskolan, set to graduate in 2026. I’m really interested in strategic decision-making and project management, especially using business intelligence and data analytics to improve efficiency.
        <br /><br />
        I’m currently looking for a part-time job during the semester and a summer internship in 2025 to keep learning and getting hands-on experience. I’d love to be part of a team where I can bring my analytical mindset and contribute to meaningful work!
        <br /><br />
        Feel free to reach out — I’m always open to new opportunities, projects, or just a good conversation!
      </p>
      <div className="flex justify-center gap-4 mt-5 text-[#FDFDFD] border-[#FDFDFD]">
          <div className="relative bg-blue_rectangle bg-opacity-60 border p-4 rounded-3xl shadow w-44 mx-auto z-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-orange2 hover:text-orange2">
            <a href="mailto:martinolivia00@gmail.com" className="text-sm drop-shadow-md ">Gmail</a>
          </div>
          <div className="relative bg-blue_rectangle bg-opacity-60 border  p-4 rounded-3xl shadow w-44 mx-auto z-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-orange2 hover:text-orange2">
            <a href="https://www.linkedin.com/in/olivia-martin-5655b921b/" className="text-sm  drop-shadow-md">LinkedIn</a>
          </div>
        </div>
    </div>
        </div>
        <img
          src="img/rättmoln.png"
          alt="moln"
          className="absolute bottom-[-4%] right-[20%] w-300 animate-float z-0"
        />
        <img
          src="img/rättmoln.png"
          alt="moln"
          className="absolute top-[2%] left-[60%] w-300 animate-float z-0"
        />
      </div>
      {/* Projects page */}
      <div id='projects' className="background bg-gradient-to-b from-[#5699C7] to-[#78B3D9]" onMouseEnter={() => setActivePage('projects')}>
        <Menu activePage={activePage} />
        <div className="text-center z-10 font-body">
          <h1 className="text-orange2 text-6xl mb-10">PROJECTS</h1>
        </div>
        <img
          src="img/rättmoln.png"
          alt="moln"
          className="absolute bottom-[5%] left-[20%] w-300 animate-float z-0"
        />

      </div>
    </div>
  );
}

export default App;