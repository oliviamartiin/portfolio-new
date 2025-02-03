import React, {useState} from 'react';
import "./index.css";
import Menu from './Menu.js';




function App() {
  const [activePage, setActivePage] = useState('home');
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [isModalOpen4, setIsModalOpen4] = useState(false);


  const toggleModal1 = () => setIsModalOpen1(!isModalOpen1);
  const toggleModal2 = () => setIsModalOpen2(!isModalOpen2);
  const toggleModal3 = () => setIsModalOpen3(!isModalOpen3);
  const toggleModal4 = () => setIsModalOpen4(!isModalOpen4);

  return (
    <div className="scroll-snap-container h-screen overflow-auto scroll-snap-y scroll-snap-mandatory max-w-full overflow-x-hidden">
      {/* Home page */}
      <div id='home' className="background bg-gradient-to-b from-[#174564] to-[#3679A7]" onMouseEnter={() => setActivePage('home')}>
        <Menu activePage={activePage} />
        <div className="text-center z-20 font-body">
        <div className="flex justify-center items-center mt-10 md:mt-12 lg:mt-10 mb-10">
          <h1 className="text-orange2 p-6 text-3xl md:text-5xl lg:text-6xl z-20">HELLO,</h1>
          <h1 className="text-orange2 text-3xl md:text-5xl lg:text-6xl z-20"> <br /><br />I'M OLIVIA</h1>
        </div>

        </div>
        <img src="img/rättmoln.png" alt="moln" className="absolute top-[-20%] right-[-50%] sm:w-300  animate-float z-0" />
        <img src="img/rättmoln.png" alt="moln" className="absolute bottom-[-4%] left-[-10%] sm:w-300 animate-float z-0" />
        <img src="img/white-cloud.png" alt="moln" className="absolute top-[20%] left-[10%] sm: w-300 animate-float  animate-floatz-0 md:hidden" />
        <img src="img/white-cloud.png" alt="moln" className="absolute top-[-20%] left-[10%] sm: w-300  animate-float z-0" />

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-orange2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" animate-bounce w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
      </div>
      </div>

      {/* About me page */}
      <div id='about' className="background bg-gradient-to-b from-[#3679A7] to-[#5699C7]" onMouseEnter={() => setActivePage('about')}>
        <Menu activePage={activePage} />
        <div className="text-center z-10 font-body">
        <div className="flex justify-center items-center mt-10 md:mt-12 lg:mt-10 mb-10">
          <h1 className="text-orange2 text-3xl md:text-5xl lg:text-6xl">ABOUT ME</h1>
        </div>
          <div className="relative bg-blue_rectangle bg-opacity-60 border border-[#FDFDFD] p-4 md:p-8 rounded-xl shadow max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto z-10">
            <p className="text-xs sm:text-sm md:text-base text-[#FDFDFD] drop-shadow-md">
            Hey! I’m Olivia, a first-year master’s student at KTH, specializing in Interactive Media Technology and Engineering. I’m set to graduate in 2026 and aiming for a career in project management—where I can blend my skills in user research, design and machine learning. I love structured planning, thrive on solving complex challenges and get excited about making a real impact through my work.
              <br /><br />
              Right now, I’m looking for a summer internship in 2025 to keep learning and gaining hands-on experience. I’d love to join a team where I can bring both my analytical and creative mindset and contribute to something meaningful.
              <br /><br />
              Feel free to reach out - I’m always up for new opportunities, projects or just a great conversation!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-5 text-[#FDFDFD] border-[#FDFDFD]">
              <div className="relative bg-blue_rectangle bg-opacity-60 border p-3 sm:p-4 rounded-3xl shadow w-28 md:w-44 mx-auto z-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-orange2 hover:text-orange2">
                <a href="mailto:martinolivia00@gmail.com" className="text-xs sm:text-sm drop-shadow-md">Gmail</a>
              </div>
              <div className="relative bg-blue_rectangle bg-opacity-60 border p-3 sm:p-4 rounded-3xl shadow w-28 md:w-44 mx-auto z-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-orange2 hover:text-orange2">
                <a href="https://www.linkedin.com/in/olivia-martin-5655b921b/" className="text-xs sm:text-sm drop-shadow-md">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
        <img src="img/rättmoln.png" alt="moln" className="absolute bottom-[-4%] right-[20%] w-300 animate-float z-0" />
        <img src="img/rättmoln.png" alt="moln" className="absolute top-[2%] left-[60%] w-300 animate-float z-0" />
      </div>

{/* Projects page */}
<div id='projects' className="background bg-gradient-to-b from-[#5699C7] to-[#78B3D9]" onMouseEnter={() => setActivePage('projects')}>
  <Menu activePage={activePage} />
  <div className="text-center z-10 font-body">
  {/* Centered Headline with Consistent Spacing */}
  <div className="mt-10 mb-10">
    <h1 className="text-orange2 text-5xl md:text-6xl">PROJECTS</h1>
  </div>

  <div className="flex flex-col items-center space-y-6">
    {/* First Row of Rectangles */}
    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 px-10">
      {/* Clickable rectangle (Plant app project) */}
      <div className="relative text-[#FDFDFD] bg-blue_rectangle bg-opacity-60 border border-[#FDFDFD] p-8 md:p-8 lg:p-14 rounded-xl shadow w-80 md:w-80 lg:w-96 z-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-orange2 hover:text-orange2 flex items-center justify-center" onClick={toggleModal3}>
        <h2 className="text-lg md:text-xl drop-shadow-md transition-colors duration-300">PLANT CARE APP</h2>
      </div>

      {/* Clickable rectangle (Multimodala) */}
      <div className="relative text-[#FDFDFD] bg-blue_rectangle bg-opacity-60 border border-[#FDFDFD] p-8 md:p-8 lg:p-14 rounded-xl shadow w-80 md:w-80 lg:w-96 z-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-orange2 hover:text-orange2 flex items-center justify-center" onClick={toggleModal4}>
        <h2 className="text-lg md:text-xl drop-shadow-md">AI IN DATING PROFILES
</h2>
      </div>
    </div>

    {/* Second Row of Rectangles */}
    <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 px-10">
      {/* Clickable rectangle (Internship) */}
      <div className="relative text-[#FDFDFD] bg-blue_rectangle bg-opacity-60 border border-[#FDFDFD] p-8 md:p-8 lg:p-14 rounded-xl shadow w-80 md:w-80 lg:w-96 z-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-orange2 hover:text-orange2 flex items-center justify-center" onClick={toggleModal1}>
        <h2 className="text-lg md:text-xl drop-shadow-md">INTERNSHIP</h2>
      </div>

      {/* Clickable rectangle (Bachelor thesis) */}
      <div className="relative text-[#FDFDFD] bg-blue_rectangle bg-opacity-60 border border-[#FDFDFD] p-8 md:p-8 lg:p-14 rounded-xl shadow w-80 md:w-80 lg:w-96 z-10 cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-orange2 hover:text-orange2 flex items-center justify-center" onClick={toggleModal2}>
        <h2 className="text-lg md:text-xl drop-shadow-md">BACHELOR THESIS</h2>
      </div>
    </div>
  </div>



          {/* Internship pop-up */}
          {isModalOpen1 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
              <div className="relative bg-blue_rectangle bg-opacity-90 border border-[#FDFDFD] p-4 md:p-8 rounded-xl shadow max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto z-20">
                <button className="absolute top-4 left-4 text-[#FDFDFD] text-xl cursor-pointer transform transition-transform duration-300 hover:scale-150 z-30" onClick={toggleModal1}>X</button>
                <h2 className="text-lg md:text-xl text-[#FDFDFD] drop-shadow-md">INTERNSHIP AT ALSTER</h2>
                <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md">
                  <br /><br />During my internship, I worked as a consultant for a startup developing an AI-personalized smartphone learning journey. My main responsibility was automating the creation of learning materials using large language models (LLMs), which involved extensive research into how LLMs work and how to craft effective prompts. The process focused on documenting which prompts succeeded and which didn’t. I took on a lot of responsibility during the internship, as it was primarily me and another intern managing our project and ensuring we met the goals we set from the beginning.
                </p>
                <div className="flex justify-center gap-8 md:gap-20">
                  <div>
                    <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md"><br /><br /> HARD SKILLS:</p>
                    {['AUTOMATION', 'PROMPT ENGINEERING', 'PROMPT CHAINING'].map(skill => (
                      <div key={skill} className="relative bg-[#FDFDFD] bg-opacity-90 p-2 rounded-3xl shadow w-32 md:w-44 mx-auto z-10 mt-4">
                        <p className="text-xs md:text-sm text-blue_rectangle drop-shadow-md">{skill}</p>
                      </div>))}
                    <div className="flex justify-center">
                      {['RAG', 'LLM'].map(skill => (
                        <div key={skill} className="relative bg-[#FDFDFD] bg-opacity-90 p-2 rounded-3xl shadow w-14 md:w-20 mx-auto z-10 mt-4">
                          <p className="text-xs md:text-sm text-blue_rectangle drop-shadow-md">{skill}</p>
                        </div>))}
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md"><br /><br /> SOFT SKILLS:
                    {['PROBLEM-SOLVING', 'RESPONSABILITY', 'CONSULTANCY', 'TEAMWORK'].map(skill => (
                      <div key={skill} className="relative bg-blue_rectangle bg-opacity-10 border border-[#FDFDFD] p-2 rounded-3xl shadow w-32 md:w-44 mx-auto z-10 mt-4">
                        <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md">{skill}</p>
                      </div>))}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bachelor pop-up */}
          {isModalOpen2 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
              <div className="relative bg-blue_rectangle bg-opacity-90 border border-[#FDFDFD] p-4 md:p-8 rounded-xl shadow max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto z-20">
                <button className="absolute top-4 left-4 text-[#FDFDFD] text-xl cursor-pointer transform transition-transform duration-300 hover:scale-150 z-30" onClick={toggleModal2}>X</button>
                <h2 className="text-lg md:text-xl text-[#FDFDFD] drop-shadow-md">BACHELOR THESIS AT ALSTER</h2>
                <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md">
                  <br /><br />I conducted my bachelor thesis with another student at Alster, where I worked as a consultant for a startup developing an AI-personalized smartphone learning journey. In our thesis, we investigated how a performance-based gamification strategy impacts student motivation on an e-learning platform. We designed a Figma prototype that included game elements like rewards, progress, and feedback, integrated into a quiz format. We tested the prototype with 23 students and conducted semi-structured interviews to gather insights. 
                </p>
                <div className="flex justify-center gap-8 md:gap-20">
                  <div>
                    <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md"><br /><br /> HARD SKILLS:</p>
                    {['USER RESEARCH', 'UX DESIGN', 'PROJECT MANAGEMENT', 'DATA ANALYZING'].map(skill => (
                      <div key={skill} className="relative bg-[#FDFDFD] bg-opacity-90 p-2 rounded-3xl shadow w-32 md:w-44 mx-auto z-10 mt-4">
                        <p className="text-xs md:text-sm text-blue_rectangle drop-shadow-md">{skill}</p>
                      </div>))}
                  </div>
                  <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md"><br /><br /> SOFT SKILLS:
                    {['TEAMWORK', 'COMMUNICATION', 'ADAPTABILITY', 'PLANNING'].map(skill => (
                      <div key={skill} className="relative bg-blue_rectangle bg-opacity-10 border border-[#FDFDFD] p-2 rounded-3xl shadow w-32 md:w-44 mx-auto z-10 mt-4">
                        <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md">{skill}</p>
                      </div>))}
                  </p>
                </div>
              </div>
            </div>
          )}
          {/* Plant app pop-up */}
          {isModalOpen3 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="relative bg-blue_rectangle bg-opacity-90 border border-[#FDFDFD] p-4 md:p-8 rounded-xl shadow max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto z-30">
              <button className="absolute top-4 left-4 text-[#FDFDFD] text-xl cursor-pointer transform transition-transform duration-300 hover:scale-150 z-30" onClick={toggleModal3}>X</button>
              <h2 className="text-lg md:text-xl text-[#FDFDFD] drop-shadow-md">PLANT CARE APP</h2>
              <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md">
                <br /><br />This project was part of an Interactive Design course focused on creating interactive high-fidelity prototypes in groups. The course theme was "Designing for Interdependent Living." My group chose to target plant owners with houseplants, and we developed a Figma prototype to help them build a consistent plant care routine, addressing what we found to be their biggest challenge. We structured our design process around the Double Diamond approach, utilizing methods such as semi-structured interviews, diary studies, persona creation, brainwriting, worst-possible-idea generation, parallel design, and usability testing with think-aloud protocol. 
              </p>
              <div className="flex justify-center mt-8">
              <img src="img/file3.png" alt="list" className="w-28 md:w-48 z-10"></img>
              <img src="img/file4.png" alt="details" className="w-28 md:w-44 z-10"></img>

              <div className="hidden lg:flex justify-center gap-2 md:gap-4 ml-5">
                  <div>
                    <p className=" text-xs md:text-sm text-[#FDFDFD] drop-shadow-md"><br /><br /> HARD SKILLS:</p>
                    {['USER RESEARCH', 'UX DESIGN', 'MIRO'].map(skill => (
                      <div key={skill} className="relative bg-[#FDFDFD] bg-opacity-90 p-2 rounded-3xl shadow w-32 md:w-40 mx-auto z-10 mt-4">
                        <p className="text-xs md:text-sm text-blue_rectangle drop-shadow-md">{skill}</p>
                      </div>))}
                  </div>
                  <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md"><br /><br /> SOFT SKILLS:
                    {['TEAMWORK', 'COMMUNICATION', 'PROBLEM-SOLVING'].map(skill => (
                      <div key={skill} className="relative bg-blue_rectangle bg-opacity-10 border border-[#FDFDFD] p-2 rounded-3xl shadow w-32 md:w-40 mx-auto z-10 mt-4">
                        <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md">{skill}</p>
                      </div>))}
                  </p>
                </div>

              </div>
            </div>
          </div>
          )}

          {/* AI Dating pop-up */}
{isModalOpen4 && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
    <div className="relative bg-blue_rectangle bg-opacity-90 border border-[#FDFDFD] p-4 md:p-8 rounded-xl shadow max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto z-20">
      <button
        className="absolute top-4 left-4 text-[#FDFDFD] text-xl cursor-pointer transform transition-transform duration-300 hover:scale-150 z-30"
        onClick={toggleModal4}>X</button>
      <h2 className="text-lg md:text-xl text-[#FDFDFD] drop-shadow-md">
        AI IN DATING PROFILES
      </h2>

      <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md">
        <br />
        <br />
        This project, part of a Human Perception course, investigated how young women perceive real versus AI-generated faces in dating profiles and their impact on user experience. Our group created both real and AI-generated dating profiles and conducted a between-subject test with 20 participants. We also carried out semi-structured interviews to gain deeper insights, performed thematic analysis to identify patterns, and analyzed classification accuracy to assess participants' ability to differentiate between real and AI-generated profiles. Click on the "Project Poster" button to read more about the study and the results.
      </p>
      <div className="flex justify-center gap-2 md:gap-20">
      <a 
  href="img/PJ1_a-Poster.png" 
  download="ProjectPoster" 
  className="bg-blue_rectangle bg-opacity-60 text-[#FDFDFD] border border-[#FDFDFD] text-xs mt-32 w-40 h-10 p-2 rounded-xl shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:border-orange2 hover:text-orange2 flex items-center justify-center"
>
  PROJECT POSTER
</a>

        <div>
          <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md">
            <br />
            <br /> HARD SKILLS:
          </p>
          {['USER RESEARCH', 'DATA ANALYZING', 'AI KNOWLEDGE', 'RESEARCH DESIGN'].map(skill => (
            <div key={skill} className="relative bg-[#FDFDFD] bg-opacity-90 p-2 rounded-3xl shadow w-28 md:w-44 mx-auto z-10 mt-2 md:mt-4">
              <p className="text-xs md:text-sm text-blue_rectangle drop-shadow-md">{skill}</p>
            </div>
          ))}
        </div>
        <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md">
          <br />
          <br /> SOFT SKILLS:
          {['TEAMWORK', 'COMMUNICATION', 'PROBLEM-SOLVING'].map(skill => (
            <div key={skill} className="relative bg-blue_rectangle bg-opacity-10 border border-[#FDFDFD] p-2 rounded-3xl shadow w-28 md:w-44 mx-auto z-10 mt-2 md:mt-4">
              <p className="text-xs md:text-sm text-[#FDFDFD] drop-shadow-md">{skill}</p>
            </div>
          ))}
        </p>
      </div>
    </div>
  </div>
)}


        </div>
        <img src="img/rättmoln.png" alt="moln" className="absolute bottom-[5%] left-[20%] w-300 animate-float z-0" />
      </div>

    </div>
  );
}

export default App;
