import React, { useContext } from 'react';
import Sidebar, { SidebarItem } from './components/Sidebar';
import { LayoutDashboard, BarChart3, UserCircle, Boxes, Package, Receipt, Settings, LifeBuoy } from "lucide-react";
import Canvas from "./components/Canvas";
// import { Dialog } from '@headlessui/react';

import Dialogbox from './components/Dialogboxes/Dialogbox';
import Navbar from './components/Navbar';
// import Dialogbox from './components/Dialogbox';
// import {MessageDialog} from "./Dialog"

const familyData = [
  {
    id: '1',
    parentId: null,   // Root node has no parent
    name: 'John Doe',
    image: 'https://via.placeholder.com/80', // Optional image
    left: 0,
    top: 0
  },
  {
    id: '2',
    parentId: '1',    // Child of node 1
    name: 'Jane Doe',
    image: 'https://via.placeholder.com/80',
    left: 1,
    top: 1
  },
  {
    id: '3',
    parentId: '1',
    name: 'Alex Doe',
    image: 'https://via.placeholder.com/80',
    left: -1,
    top: 1
  },
  // Add more family nodes...
];


function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='items-center justify-left flex'>
        <div style={{ height: 1080, width: 1920 }}>
        <Canvas familyData={familyData} rootId="1" />
        </div>
      </div>
    </>

  );
}

export default App;
