import React, { useState } from 'react';

const RelationshipDialog = ({ nodes, onAddNode, onCancel }) => {
  const [selectedNodeId, setSelectedNodeId] = useState('');
  const [relationship, setRelationship] = useState('');

  const handleAddNode = () => {
    if (!selectedNodeId || !relationship) {
      alert("Please select a node and specify a relationship.");
      return;
    }

    onAddNode({ selectedNodeId, relationship });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="bg-black/10 bg-opacity-20 backdrop-blur-lg p-6 rounded-lg shadow-lg w-[400px] border border-gray-500">
        <h3 className="text-lg font-semibold mb-4 text-white">Add Node</h3>

        <label className="block text-sm font-medium text-gray-300">Select Node:</label>
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

        <label className="block text-sm font-medium text-gray-300 mt-4">Relationship:</label>
        <select
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
          className="border border-gray-400 bg-gray-700 bg-opacity-30 text-white p-2 rounded-md w-full mt-1"
        >
          <option value="">Select a relationship</option>
          <option value="child">Child</option>
          <option value="parent">Parent</option>
          <option value="sibling">Sibling</option>
        </select>

        <button
          onClick={handleAddNode}
          className="mt-4 p-2 bg-blue-500 text-white rounded-md w-full hover:bg-blue-600 transition-colors duration-300"
        >
          Add Node
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

export default RelationshipDialog;
