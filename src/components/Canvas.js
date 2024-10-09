import React, { useState } from 'react';
import ReactFamilyTree from 'react-family-tree';
import FamilyNode from './FamilyNode'; // Assuming you created this component

const WIDTH = 70;
const HEIGHT = 80;

const Canvas = ({ familyData, rootId }) => {
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  // Safeguard for undefined or empty data
  if (!familyData || !Array.isArray(familyData) || familyData.length === 0) {
    return <p className="text-center text-red-500">No valid family data provided.</p>;
  }

  return (
    <div className="relative flex justify-center items-center bg-gray-100 min-h-screen overflow-auto">
      <ReactFamilyTree
        nodes={familyData}
        rootId={rootId}
        width={WIDTH}
        height={HEIGHT}
        renderNode={(node) => (
          <FamilyNode
            key={node.id}
            node={node}
            style={{
              width: WIDTH,
              height: HEIGHT,
              transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
            }}
            onClick={() => setSelectedNodeId(node.id)}
            isSelected={node.id === selectedNodeId}
          />
        )}
      />
    </div>
  );
};

export default Canvas;
