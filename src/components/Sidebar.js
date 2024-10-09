import React, { useState } from 'react';
import Dialogbox from './Dialogboxes/Dialogbox'; // Assuming Dialogbox is Dialog.js
import Optiondialog from './Dialogboxes/Optiondialog';
import Timelinedialog from './Dialogboxes/Timelinedialog';

const Sidebar = ({ addParents, addChild, addSibling, deleteNode, editNode }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [openTimeline, setOpenTimeline] = useState(false);
  const [openAddMenu, setOpenAddMenu] = useState(false); // State to control the Add menu visibility
  const [openEditDialog, setOpenEditDialog] = useState(false); // State to control the Edit dialog
  const [selectedColor, setSelectedColor] = useState('#000'); // Default color

  const handleCloseOptions = () => setOpenOptions(false);
  const handleOpenOptions = () => setOpenOptions(true);

  const handleCloseTimeline = () => setOpenTimeline(false);
  const handleOpenTimeline = () => setOpenTimeline(true);

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleAddMenuOpen = () => setOpenAddMenu(true);  // Open the Add menu
  const handleAddMenuClose = () => setOpenAddMenu(false); // Close the Add menu

  const handleAddParents = () => {
    addParents();
    handleAddMenuClose(); // Close the menu after selecting
  };

  const handleAddChild = () => {
    addChild();
    handleAddMenuClose(); // Close the menu after selecting
  };

  const handleAddSibling = () => {
    addSibling();
    handleAddMenuClose(); // Close the menu after selecting
  };

  const handleOpenEditDialog = () => setOpenEditDialog(true);  // Open Edit dialog
  const handleCloseEditDialog = () => setOpenEditDialog(false); // Close Edit dialog

  const people = [
    { id: 1, name: 'John Doe', event: 'Birthday', date: '01/15/1975' },
    { id: 2, name: 'Jane Doe', event: 'Anniversary', date: '06/22/2000' },
    // Add more people if necessary
  ];

  return (
    <>
      <nav className="z-10 flex shrink-0 grow-0 justify-around gap-4 p-2.5 shadow-lg fixed top-2/4 -translate-y-2/4 left-6 min-h-[auto] min-w-[64px] flex-col rounded-lg border border-white/30 bg-black/10 backdrop-blur-lg dark:bg-slate-800/20">
        <button
          onClick={handleAddMenuOpen} // Open the add options menu
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50/30 text-indigo-600 dark:bg-sky-900/30 dark:text-sky-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          <small className="text-center text-xs font-medium">Add</small>
        </button>

        <button
          onClick={deleteNode}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-2 bg-indigo-50/30 text-indigo-600 dark:bg-sky-900/30 dark:text-sky-50"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>
          <small className="text-center text-xs font-medium">Delete</small>
        </button>

        <button
          onClick={handleOpenOptions}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50/30 text-indigo-600 dark:bg-sky-900/30 dark:text-sky-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 4.5v15M17.25 4.5v15" />
          </svg>
          <small className="text-center text-xs font-medium">Options</small>
        </button>

        <button
          onClick={handleOpenTimeline}
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50/30 text-indigo-600 dark:bg-sky-900/30 dark:text-sky-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M17.25 12h-10.5" />
          </svg>
          <small className="text-center text-xs font-medium">Timeline</small>
        </button>

        {/* Edit Button */}
        <button
          onClick={handleOpenEditDialog} // Open the Edit dialog
          className="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50/30 text-indigo-600 dark:bg-sky-900/30 dark:text-sky-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 3.487c.363-.363.958-.363 1.322 0l2.328 2.328c.363.364.363.959 0 1.322l-8.83 8.83a1.75 1.75 0 01-.707.436l-4.86 1.62c-.591.197-1.15-.361-.953-.953l1.62-4.86a1.75 1.75 0 01.436-.707l8.83-8.83zM19.499 7.14l-2.329-2.328M15.125 9.936l2.93 2.93M6 18h12" />
          </svg>
          <small className="text-center text-xs font-medium">Edit</small>
        </button>
      </nav>

      {/* Add options menu */}
      {openAddMenu && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md shadow-lg z-30 max-w-sm w-full">
            <button
              className="mt-4 w-full p-2 bg-blue-600 text-white rounded-md"
              onClick={handleAddParents}
            >
              Add Parent
            </button>
            <button
              className="mt-4 w-full p-2 bg-blue-600 text-white rounded-md"
              onClick={handleAddSibling}
            >
              Add Sibling
            </button>
            <button
              className="mt-4 w-full p-2 bg-blue-600 text-white rounded-md"
              onClick={handleAddChild}
            >
              Add Child
            </button>
            <button
              className="mt-4 w-full p-2 bg-gray-600 text-white rounded-md"
              onClick={handleAddMenuClose}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Option dialog */}
      {openOptions && (
        <Optiondialog
          onCancel={handleCloseOptions}
          onColorChange={handleColorChange}
          selectedColor={selectedColor}
        />
      )}

      {/* Timeline dialog */}
      {openTimeline && (
        <Timelinedialog
          onCancel={handleCloseTimeline}
          people={people} // Pass people data to Timelinedialog
        />
      )}

      {/* Edit Dialog (Dialog.js) */}
      {openEditDialog && (
        <Dialogbox
          onCancel={handleCloseEditDialog}
          // Add any props needed by Dialogbox
        />
      )}
    </>
  );
};

export default Sidebar;
