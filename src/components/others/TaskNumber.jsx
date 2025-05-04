import React from 'react';

const TaskNumber = () => {
  return (
    <div
      className="grid grid-cols-2 grid-rows-2 gap-3 p-6"
      style={{
        gridTemplateAreas: `"A B"
                            "C D"`
      }}
    >
      <div className="bg-red-400 p-4 text-white  h-50 rounded-3xl text-left text-8xl" style={{ gridArea: "A" }}>A <p className='text-white text-2xl font-bold py-5'>New Task</p></div>
      <div className="bg-green-400 p-4 text-white  h-50 rounded-3xl text-left text-8xl" style={{ gridArea: "B" }}>B
      <p className='text-white text-2xl font-bold py-5'>Completed</p>
      </div>
      <div className="bg-blue-400 p-4 text-white  h-50 rounded-3xl text-left text-8xl" style={{ gridArea: "C" }}>C
      <p className='text-white text-2xl font-bold py-5'>Accepted</p>
      </div>
      <div className="bg-yellow-400 p-4 text-white  h-50 rounded-3xl text-left text-8xl" style={{ gridArea: "D" }}>D
      <p className='text-white text-2xl font-bold py-5'>Failed</p>
      </div>
    </div>
  );
};

export default TaskNumber;
