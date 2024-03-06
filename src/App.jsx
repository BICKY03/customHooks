import React from 'react';
import Random from './components/Random';
import Tag from './components/Tag';
import './index.css'; // Import the index.css file

const App = () => {
  return (
    <div className='w-full h-full flex flex-col background relative  items-center'>
      <h1 className='bg-white rounded-md absolute w-11/12 text-center mt-[40px]
        px-10 py-2 text-3xl font-bold'>RANDOM GIFS</h1>
      <div className='flex flex-col w-full items-center 
      gap-y-10 mt-[130px]'>
         <Random/>
         <Tag/>
      </div>
    </div>
  );
}

export default App;


