import React, { useState } from 'react';

const DeleteNodeDialog = ({ nodes, onDeleteNode, onCancel }) => {
  const [selectedNodeId, setSelectedNodeId] = useState('');

  const handleDelete = () => {
    if (!selectedNodeId) {
      alert("Please select a node to delete.");
      return;
    }

    onDeleteNode(selectedNodeId);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-black/10 bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg w-[400px] border border-gray-500">
        <h3 className="text-lg font-semibold mb-4 text-white">Delete Node</h3>

        <label className="block text-sm font-medium text-gray-300">Select Node to Delete:</label>
        <select
          value={selectedNodeId}
          onChange={(e) => setSelectedNodeId(e.target.value)}
          className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
        >
          <option value="">Select a node</option>
          {nodes.map((node) => (
            <option key={node.id} value={node.id}>
              {node.data.label} (ID: {node.id})
            </option>
          ))}
        </select>

        <button
          onClick={handleDelete}
          className="mt-4 p-2 bg-red-500 text-white rounded-md w-full hover:bg-red-600 transition-colors duration-300"
        >
          Delete Node
        </button>
        <button
          onClick={onCancel}
          className="mt-2 p-2 bg-gray-500 text-white rounded-md w-full hover:bg-gray-600 transition-colors duration-300"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteNodeDialog;

