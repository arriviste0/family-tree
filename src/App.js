import React, {useContext} from 'react';
import Navigationbar from "./components/Navigationbar";
import Sidebar, { SidebarItem } from './components/Sidebar';
import {LayoutDashboard, BarChart3,UserCircle, Boxes,Package,Receipt,Settings,LifeBuoy} from  "lucide-react";
import Canvas from "./components/Canvas";
// import { Dialog } from '@headlessui/react';

import Dialogbox from './components/Dialogboxes/Dialogbox';
// import Dialogbox from './components/Dialogbox';
// import {MessageDialog} from "./Dialog"


function App() {
  return (
 <>
    <div>
      <Navigationbar />
    </div>

    <div className='items-center justify-left flex'>



<div style={{ height: 1080 , width: 1920 }}>
<Canvas/>
</div>
</div>
    </>

  );
}

export default App;
