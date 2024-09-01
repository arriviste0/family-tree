import React, { useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

function Optionbar({ undo, redo }) {
  const { setViewport, zoomIn, zoomOut } = useReactFlow();

  const handleTransform = useCallback(() => {
    setViewport({ x: 540, y: 200, zoom: 1 }, { duration: 800 });
  }, [setViewport]);

  return (
    <div className="fixed bg-black/5 border border-white/40 backdrop-blur-md flex justify-between items-center gap-3 py-2 px-5 left-1/2 transform -translate-x-1/2 top-[120px] rounded-full shadow-lg z-10">
      {/* Zoom In */}
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={() => zoomIn({ duration: 500 })}
      >
        +
      </button>

      {/* Zoom Out */}
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={() => zoomOut({ duration: 500 })}
      >
        -
      </button>

      {/* Reset */}
      <button
        className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        onClick={handleTransform}
      >
        Back to Me
      </button>

      {/* Undo */}
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={undo}
      >
        Undo
      </button>

      {/* Redo */}
      <button
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        onClick={redo}
      >
        Redo
      </button>
    </div>
  );
}

export default Optionbar;
