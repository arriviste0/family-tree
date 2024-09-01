import React, { useCallback, useState } from 'react';
import Sidebar from './Sidebar';
import Optionbar from './Optionbar';
import {
  ReactFlow,
  addEdge,
  useNodesState,
  useEdgesState,
  Background,
  ReactFlowProvider,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Dialogbox from './Dialogboxes/Dialogbox';
import RelationshipDialog from './Dialogboxes/RelationshipDialog';
import DeleteNodeDialog from './Dialogboxes/DeleteNodeDialog';


const initialNodes = [
  
{
  id: '1',
  type: 'input',
  data: { label: 'Smooth Transition' },
  position: { x: 250, y: 5 },
},
{
  id: '2',
  type: 'output',
  data: { label: 'zoom-in' },
  position: { x: 100, y: 100 },
}

];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
];

const ZoomTransition = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeLabel, setNodeLabel] = useState('');
  const [isRelationshipDialogOpen, setIsRelationshipDialogOpen] = useState(false);
  const [isDeleteNodeDialogOpen, setIsDeleteNodeDialogOpen] = useState(false);

  // Undo/Redo state
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const saveState = () => {
    setUndoStack((prev) => [...prev, { nodes, edges }]);
    setRedoStack([]);
  };

  const undo = () => {
    if (undoStack.length === 0) return;
    const lastState = undoStack[undoStack.length - 1];
    setUndoStack((prev) => prev.slice(0, -1));
    setRedoStack((prev) => [{ nodes, edges }, ...prev]);
    setNodes(lastState.nodes);
    setEdges(lastState.edges);
  };

  const redo = () => {
    if (redoStack.length === 0) return;
    const nextState = redoStack[0];
    setRedoStack((prev) => prev.slice(1));
    setUndoStack((prev) => [...prev, { nodes, edges }]);
    setNodes(nextState.nodes);
    setEdges(nextState.edges);
  };

  const onConnect = useCallback(
    (params) => {
      saveState();
      setEdges((eds) => addEdge(params, eds));
    },
    [setEdges]
  );

  const addNode = () => {
    if (nodes.length === 0) {
      alert("No nodes available to add relationships.");
      return;
    }
    setIsRelationshipDialogOpen(true);
  };

  const handleAddNode = (relationshipData) => {
    const { selectedNodeId, relationship } = relationshipData;

    const selectedNode = nodes.find((node) => node.id === selectedNodeId);

    if (!selectedNode) {
      alert("Invalid node selected.");
      return;
    }

    const newNode = {
      id: (nodes.length + 1).toString(),
      data: { label: 'New Node' },
      position: { x: selectedNode.position.x + Math.random() * 150 - 75, y: selectedNode.position.y + Math.random() * 150 - 75 },
    };

    saveState();
    setNodes((nds) => nds.concat(newNode));

    switch (relationship.toLowerCase()) {
      case 'child':
        setEdges((eds) => eds.concat({ id: `e${selectedNode.id}-${newNode.id}`, source: selectedNode.id, target: newNode.id }));
        break;
      case 'parent':
        setEdges((eds) => eds.concat({ id: `e${newNode.id}-${selectedNode.id}`, source: newNode.id, target: selectedNode.id }));
        break;
      case 'sibling':
        const siblingEdge = edges.find((edge) => edge.source === selectedNode.id || edge.target === selectedNode.id);
        if (siblingEdge) {
          setEdges((eds) => eds.concat({ id: `e${siblingEdge.source}-${newNode.id}`, source: siblingEdge.source, target: newNode.id }));
        } else {
          alert("No sibling relationship found.");
        }
        break;
      default:
        alert("Invalid relationship specified.");
    }

    setIsRelationshipDialogOpen(false);
  };

  const deleteNode = () => {
    if (nodes.length === 0) {
      alert("No nodes available to delete.");
      return;
    }
    setIsDeleteNodeDialogOpen(true);
  };

  const handleDeleteNode = (nodeId) => {
    saveState();
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
    setSelectedNode(null);
    setIsDeleteNodeDialogOpen(false);
  };

  const editNode = () => {
    if (selectedNode) {
      saveState();
      setNodes((nds) =>
        nds.map((node) =>
          node.id === selectedNode.id ? { ...node, data: { label: nodeLabel } } : node
        )
      );
      setSelectedNode(null);
      setNodeLabel('');
    }
  };

  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    setNodeLabel(node.data.label);
  };

  const handleSave = (data) => {
    saveState();
    setNodes((nds) =>
      nds.map((node) =>
        node.id === selectedNode.id ? { ...node, data: { label: data.personalInfo.firstName } } : node
      )
    );
    setSelectedNode(null);
  };

  const handleCancel = () => {
    setSelectedNode(null);
  };

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        fitView
      >
        <Optionbar undo={undo} redo={redo} />
        <Sidebar addNode={addNode} deleteNode={deleteNode} editNode={editNode} />
        <Background />
      </ReactFlow>
      {selectedNode && (
        <Dialogbox
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}
      {isRelationshipDialogOpen && (
        <RelationshipDialog
          nodes={nodes}
          onAddNode={handleAddNode}
          onCancel={() => setIsRelationshipDialogOpen(false)}
        />
      )}
      {isDeleteNodeDialogOpen && (
        <DeleteNodeDialog
          nodes={nodes}
          onDeleteNode={handleDeleteNode}
          onCancel={() => setIsDeleteNodeDialogOpen(false)}
        />
      )}
    </>
  );
};

export default () => (
  <ReactFlowProvider>
    <ZoomTransition />
  </ReactFlowProvider>
);
