// src/Profile.tsx
import React from 'react';
import profileImage from './download.jpg';


const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className='w-40 h-40 mb-14 ml-[650px]'>
        <img src={profileImage} alt='profile'/>
        </div>
        <h1 className="text-3xl font-bold mt-24 text-black">Reagile Setalala</h1>
        <p className="text-gray-700 mb-2">Hello!, a passionate business analyst and front end developer with a strong foundation in data analysis and web development. Currently, I’m part of NuHome Africa, where I leverage my analytical skills to drive strategic decisions and help clients optimize their operations.With a degree in Business Analytics from the Tshwane University of Technology and a BSc in Computer Science from the University of Pretoria, I have developed a solid technical background. My experience spans various roles, including front-end development and project management, allowing me to bridge the gap between technical teams and business stakeholders effectively.I thrive in collaborative environments where I can contribute to innovative solutions, and I’m always eager to learn new technologies and methodologies. In my spare time, I enjoy participating in hackathons and working on personal projects that challenge my skills and creativity.Let’s connect and explore how we can collaborate to create impactful solutions!</p>
        <div className="mt-4">
          <a href="https://www.linkedin.com/in/reagile-s-a88a40207/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
          <span className="mx-2">|</span>
          <a href="https://github.com/Reagile-commits" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
        </div>
        <div>
          {/* Button as a link to download CV */}
          <a
            href="./RCV.pdf" // Ensure this path is correct
            download
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-center inline-block"
          >
            DOWNLOAD CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile; // Ensure this line exists
export {}; // Add this line to mark the file as a module
