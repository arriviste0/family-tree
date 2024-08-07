import React from 'react';
import Navbar from "./components/Navbar";
// import Sidebar, { SidebarItem } from './components/Sidebar';
// import {LayoutDashboard, BarChart3,UserCircle, Boxes,Package,Receipt,Settings,LifeBuoy} from  "lucide-react";
import Canvas from "./components/Canvas";
// import { Dialog } from '@headlessui/react';
import Dialogbox from './components/Dialogbox';
// import Dialogbox from './components/Dialogbox';
// import {MessageDialog} from "./Dialog"


function App() {
  return (
 <>
    <div>
      <Navbar />
    </div>

    <div className='items-center justify-left flex'>

      <Dialogbox />
{/* <Sidebar>

<SidebarItem

icon={<LayoutDashboard size={20} />}

text="Add "

alert
/>

<SidebarItem icon={<BarChart3 size={20} />} text="Edit  " active />

<SidebarItem icon={<UserCircle size={20} />} text="Find " >

</SidebarItem><SidebarItem icon={<Boxes size={20} />} text="Dates" />

<SidebarItem icon={<Package size={20} />} text="Options" alert />

<SidebarItem icon={<Receipt size={20} />} text="Clear" />

<SidebarItem icon={<Receipt size={20} />} text="Print" />

<hr className="my-3" />

<SidebarItem icon={<Settings size={20} />} text="Settings" />

<SidebarItem icon={<LifeBuoy size={20} />} text="Help" />

</Sidebar>  */}

<div style={{ height: 1080 , width: 1920 }}>
<Canvas/>
</div>
</div>
    </>

  );
}

export default App;
