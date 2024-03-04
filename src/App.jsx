import React, { useState } from 'react';
import PlusButton from './Components/PlusButton';
import Infobtn from './Components/Infobtn';
import EditButton from './Components/Editbtn';
import UpdateButton from './Components/Updatebtn';
import Deletebutton from './Components/Deletebtn';
import Alertcard from './Components/Alertcard';

export default function App() {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [selectedTaskIndex, setSelectedTaskIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (title && task) {
      setTasks([...tasks, { title, task }]);
      setTitle('');
      setTask('');
    }
  };

  const handleEditClick = (index) => {
    setTitle(tasks[index].title);
    setTask(tasks[index].task);
    setIsEditing(true);
    setSelectedTaskIndex(index);
  };

  const handleDeleteClick = (index) => {
    setShowAlert(true);
    setSelectedTaskIndex(index);
  };
  
  
  const handleYesClick = () => {
    const updatedTasks = tasks.filter((_, index) => index !== selectedTaskIndex);
    setTasks(updatedTasks);
    setShowAlert(false);
  };
  

  const handleNoClick = () => {
    setShowAlert(false);
  };

  const handleUpdateClick = () => {
    const updatedTasks = [...tasks];
    updatedTasks[selectedTaskIndex] = { title, task };
    setTasks(updatedTasks);
    setIsEditing(false);
    setTitle('');
    setTask('');
  };

  const taskSets = [];
  for (let i = 0; i < tasks.length; i += 3) {
    taskSets.push(tasks.slice(i, i + 3));
  }

  return (
    <>
      {/* header bar starts */}
      <div className='w-full h-16 bg-stone-800 border border-orange-500 rounded text-orange-100 flex items-center justify-start '>
        <div className="flex flex-col ml-6">
          <span className='font-bold text-xl'>GYIZER</span>
          <span >TODO APP</span>
        </div>
      </div>

      {/* form start */}
      <div className="relative flex items-center justify-center mt-10 ">
        <div className="flex items-center ">
          <form onSubmit={isEditing ? handleUpdateClick : handleAddTask} className="flex flex-col items-center ">
            <div className="flex flex-col ">
              <input
                type="text"
                className="w-80 h-8 text-orange-100 bg-stone-800 border border-orange-500 rounded focus:border-orange-800 p-2 mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
              <div className="flex">
                <input
                  type="text"
                  className="w-80 h-8 text-orange-100 bg-stone-800 border border-orange-500 rounded focus:border-orange-800 p-2 mb-2"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Task"
                />
              
              </div>
            </div>
            {isEditing ? (
              <UpdateButton onClick={handleUpdateClick}  />
            ) : (
              <PlusButton type="submit"  />
            )}
          </form>
        </div>
      </div>

      {/* input fields over */}

      {/* task palette */}
      <div className='flex justify-center mt-6 p-4'>
        <div className='w-full max-w-[900px] bg-stone-800 border border-orange-500 rounded p-4'>
          {taskSets.length === 0 ? (
            <div className="text-orange-100 text-center">No task</div>
          ) : (
            <>
              {taskSets.map((taskSet, rowIndex) => (
                 <div className='flex flex-wrap justify-between'>
                 {taskSet.map((task, colIndex) => (
                   <div key={colIndex} className='w-full md:w-64 h-16 bg-stone-900 border border-orange-500 rounded mb-4 flex flex-col p-1'>
                     <div className='flex justify-between items-start'>
                       <span className='text-orange-100 font-bold'>{task.title}</span>
                       <div className="flex items-center space-x-1">
                         {isEditing && selectedTaskIndex === rowIndex * 3 + colIndex ? (
                           <>
                             <EditButton onClick={handleUpdateClick} isActive={true} />
                             <Deletebutton onClick={() => handleDeleteClick(rowIndex * 3 + colIndex)} /> 
                           </>
                         ) : (
                           <Infobtn onClick={() => handleEditClick(rowIndex * 3 + colIndex)} />
                         )}
                       </div>
                     </div>
                     <span className='text-orange-100 overflow-hidden orange-100space-nowrap overflow-ellipsis'>{task.task}</span>
                   </div>
                 ))}
                 {Array.from({ length: 3 - taskSet.length }, (_, placeholderIndex) => (
                   <div key={`placeholder-${placeholderIndex}`} className='w-full md:w-64 h-16' />
                 ))}
               </div>
              ))}
            </>
          )}
        </div>
      </div>

      {/* alert card for deleting*/}
      {showAlert && (
        <Alertcard
          onYes={handleYesClick}
          onNo={handleNoClick}
        />
      )}
    </>
  );
}
