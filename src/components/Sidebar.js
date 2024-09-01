import React, { useState } from 'react';
import Dialogbox from './Dialogboxes/Dialogbox';
import Optiondialog from './Dialogboxes/Optiondialog';
import Timelinedialog from './Dialogboxes/Timelinedialog';

const Sidebar = ({ addNode, deleteNode, editNode }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [openTimeline, setOpenTimeline] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000'); // Default color

  const handleCloseOptions = () => setOpenOptions(false);
  const handleOpenOptions = () => setOpenOptions(true);

  const handleCloseTimeline = () => setOpenTimeline(false);
  const handleOpenTimeline = () => setOpenTimeline(true);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    // Implement logic to apply color to the image
  };

  const people = [
    { id: 1, name: 'John Doe', event: 'Birthday', date: '01/15/1975' },
    { id: 2, name: 'Jane Doe', event: 'Anniversary', date: '06/22/2000' },
    { id: 3, name: 'John Doe', event: 'Birthday', date: '01/15/1975' },
    { id: 4, name: 'Jane Doe', event: 'Anniversary', date: '06/22/2000' },
    { id: 5, name: 'John Doe', event: 'Birthday', date: '01/15/1975' },
    { id: 6, name: 'Jane Doe', event: 'Anniversary', date: '06/22/2000' },
    // Add more people and events here
  ];

  return (
    <>
      <nav className="z-20 flex shrink-0 grow-0 justify-around gap-4 p-2.5 shadow-lg fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border border-white/30 bg-black/10 backdrop-blur-lg dark:bg-slate-800/20">
        <button
          onClick={addNode}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50/30 text-indigo-600 dark:bg-sky-900/30 dark:text-sky-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <small className="text-center text-xs font-medium">Add</small>
        </button>

        <button
          onClick={deleteNode}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 text-gray-700 hover:bg-gray-100/30 dark:text-gray-400 dark:hover:bg-slate-800/30"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
          </svg>
          <small className="text-center text-xs font-medium">Delete</small>
        </button>

        <button
          onClick={handleOpenOptions}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50/30 text-indigo-600 dark:bg-sky-900/30 dark:text-sky-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <small className="text-center text-xs font-medium">Options</small>
        </button>

        <button
          onClick={handleOpenTimeline}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50/30 text-indigo-600 dark:bg-sky-900/30 dark:text-sky-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <small className="text-center text-xs font-medium">Timeline</small>
        </button>

        <button
          onClick={addNode}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50/30 text-indigo-600 dark:bg-sky-900/30 dark:text-sky-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          <small className="text-center text-xs font-medium">Print</small>
        </button>
      </nav>

      {openOptions && (
        <Optiondialog
          onCancel={handleCloseOptions}
          onColorChange={handleColorChange}
          selectedColor={selectedColor}
        />
      )}

      {openTimeline && (
        <Timelinedialog
          onCancel={handleCloseTimeline}
          people={people} // Pass people data to Timelinedialog
        />
      )}
    </>
  );
};

export default Sidebar;
