import React, { useState } from 'react';

const sidebarItems = [
  { id: 1, name: 'Analytical' },
  { id: 2, name: 'Ecommerce', pro: true  },
  { id: 3, name: 'Notes', pro: true, notifications: 3  },
  { id: 4, name: 'Calender', pro: true},
  { id: 5, name: 'Extra', pro: true },
];

const Layout = ({children}) => {
  const [activeTab, setActiveTab] = useState('Analytical');

  const handleTabClick = (name) => {
    if (name === "Analytical") {
      setActiveTab(name);

    }else{
      alert("Purchase pro plan")
    }
  };

  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm  rounded-lg sm:hidden"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sidebar toggle icon */}
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100">
         <h2 className='text-primary text-2xl font-bold text-center pb-5' >Dashboard</h2>
         
          <ul className="space-y-2 font-medium">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <a
                  href="#"
                  className={`flex items-center p-2 rounded-md text-gray-600 hover:bg-primary hover:text-white group ${
                    activeTab === item.name ? 'bg-primary text-white' : ''
                  }`}
                  onClick={() => handleTabClick(item.name)}
                >
                  <svg
                    className={`flex-shrink-0 w-5 h-5 transition duration-75 text-gray-400 ${
                      activeTab === item.name ? 'text-gray-600' : ''
                    }`}
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    {/* Icon for the sidebar item */}
                  </svg>
                  <span className="flex-1 ml-3 whitespace-nowrap">{item.name}</span>
                  {item.notifications && (
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-xs font-medium text-white bg-primary rounded-full ">
                      {item.notifications}
                    </span>
                  )}
                  {item.pro && (
                    <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full  ">
                      Pro
                    </span>
                  )}
                 
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="p-4 pt-16 sm:ml-64 h-screen border-b-2 border-white overflow-auto bg-white">
       {children}
       
      </div>
    </div>
  );
};

export default Layout;
