import React from 'react';
import Navbar from "./Navbar";
import Tree from './Tree';
import Sidebar, { SidebarItem } from './Sidebar';
import {LayoutDashboard, BarChart3,UserCircle, Boxes,Package,Receipt,Settings,LifeBuoy} from  "lucide-react";
import Canvas from "./Canvas";

function App() {
  return (
<>
    <div>
      <Navbar />
    </div>

    <div className='items-center justify-left flex'>
<Sidebar>

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

</Sidebar>
<Canvas canvasHeight={1080} canvasWidth={1920} />
</div>
<div className='items-left justify-left flex'>
<Tree />
</div>
    </>

  );
}

export default App;
