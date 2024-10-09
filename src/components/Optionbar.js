import React, { useCallback } from 'react';
import { useReactFlow } from '@xyflow/react';
import { ZoomIn, ZoomOut, ArrowLeft, Undo, Redo } from "lucide-react";

export default function OptionBar({ undo, redo }) {
  const { setViewport, zoomIn, zoomOut } = useReactFlow();

  const handleTransform = useCallback(() => {
    setViewport({ x: 540, y: 200, zoom: 1 }, { duration: 800 });
  }, [setViewport]);

  return (
    <div className="fixed backdrop-blur-md bg-white/30 border border-gray-300 flex justify-between items-center gap-3 py-2 px-5 left-1/2 transform -translate-x-1/2 top-[120px] rounded-full shadow-lg z-10">
      {/* Zoom In */}
      <button
        className="p-2 rounded-full text-black hover:bg-black/20 focus:outline-none"
        onClick={() => zoomIn({ duration: 500 })}
      >
        <ZoomIn className="h-5 w-5" />
        <span className="sr-only">Zoom In</span>
      </button>

      {/* Zoom Out */}
      <button
        className="p-2 rounded-full text-black hover:bg-black/20 focus:outline-none"
        onClick={() => zoomOut({ duration: 500 })}
      >
        <ZoomOut className="h-5 w-5" />
        <span className="sr-only">Zoom Out</span>
      </button>

      {/* Reset */}
      <button
        className="text-black bg-white/80 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={handleTransform}
      >
        <ArrowLeft className="h-5 w-5" />
        <span className="sr-only">Back to Me</span>
      </button>

      {/* Undo */}
      <button
        className="p-2 rounded-full text-black hover:bg-black/20 focus:outline-none"
        onClick={undo}
      >
        <Undo className="h-5 w-5" />
        <span className="sr-only">Undo</span>
      </button>

      {/* Redo */}
      <button
        className="p-2 rounded-full text-black hover:bg-black/20 focus:outline-none"
        onClick={redo}
      >
        <Redo className="h-5 w-5" />
        <span className="sr-only">Redo</span>
      </button>
    </div>
  );
}
