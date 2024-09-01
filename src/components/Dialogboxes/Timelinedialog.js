import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { CalendarIcon, CakeIcon } from '@heroicons/react/24/outline';

const Timelinedialog = ({ onCancel, people }) => {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-lg p-6 rounded-xl shadow-lg bg-white/70 backdrop-blur-lg dark:bg-gray-800/70">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Timeline Events</h2>
          <button onClick={onCancel} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {people.map((person) => (
            <div
              key={person.id}
              className="flex items-center p-4 bg-white rounded-lg shadow-sm dark:bg-gray-700/30 hover:shadow-md hover:bg-indigo-50 dark:hover:bg-slate-700 transition-shadow duration-200"
            >
              <div className="mr-4">
                {person.event === 'Birthday' ? (
                  <CakeIcon className="h-6 w-6 text-pink-500" />
                ) : (
                  <CalendarIcon className="h-6 w-6 text-indigo-500" />
                )}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">{person.name}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">{person.event} on {person.date}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onCancel}
          className="mt-6 w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 transition-colors duration-200"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Timelinedialog;
