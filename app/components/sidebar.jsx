'use client';
import { SIDEBAR_TABS } from './../constants/sidebar';
import { useState } from "react";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";


const Sidebar = () => {
  const [openTabs, setOpenTabs] = useState([]);

const toggleTab = (id) => {
  setOpenTabs(prev =>
    prev.includes(id)
      ? prev.filter(tabId => tabId !== id)
      : [...prev, id]
  );
};

const isOpen = (id) => openTabs.includes(id);

  return (
    <aside className="w-48 min-h-screen bg-primary text-white p-4 gap-5 flex flex-col">
      <img src='/Header.png' alt='logo' className='ml-1' />
  <ul className="space-y-3">
    {SIDEBAR_TABS.map(({ id, label, icon: Icon, children }) => {
      const open = isOpen(id);

      return (
        <li key={id}>
          {/* Parent Tab */}
          <div
            className="flex items-center justify-between cursor-pointer hover:bg-secondary hover:text-black py-2 pr-3 pl-4 h-10 w-40 rounded-full"
            onClick={() => children && toggleTab(id)}
          >
            <div className="flex items-center gap-3">
              <Icon size={24} />
              <span className='text-[14px]'>{label}</span>
            </div>

            {/* Right-side toggle icon */}
            {children && (
              open ? (
                <VscChevronUp height={18} width={14} />
              ) : (
                <VscChevronDown height={18} width={14} />
              )
            )}
          </div>

          {/* Sub Tabs */}
          {children && open && (
            <ul className=" border-l border-white ml-7 ">
              {children.map(({ id, label, icon: ChildIcon }) => (
                <li
                  key={id}
                  className="flex ml-3 items-center py-2 pr-3 pl-4  hover:bg-secondary rounded-full hover:text-black cursor-pointer "
                >
                  <span className='text-[14px]'>{label}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      );
    })}
  </ul>
 <div className="mt-auto">
  <div className="w-40 h-53 bg-primary-light rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden">
    
    {/* Decorative shape (top-right) */}
     <div className="absolute top-0 right-0 "> 
    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="48" viewBox="0 0 45 48" fill="none">
<path opacity="0.5" d="M21.3094 -10.6663L0.50628 39.063C-1.27103 43.3116 1.8498 48 6.45518 48C9.03852 48 11.8371 46.2222 12.9135 45.3334C19.9181 38.1029 28.2732 32.9637 34.0727 30.6717C37.1608 29.4512 40.1733 31.3847 41.3544 34.488L45.0931 44.3116C45.9382 46.5322 48.0673 48 50.4434 47.9999C54.4578 47.9998 57.2299 43.9881 55.7923 40.24C50.7881 27.1933 40.8305 1.25181 36.7098 -9.34652C35.5988 -12.204 32.9239 -13.9999 29.8581 -13.9998L26.476 -13.9996C23.8927 -13.9996 21.9552 -11.9994 21.3094 -10.6663Z" fill="#00413D"/>
</svg>
    </div>


    {/* Icon */}
    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center z-10">
      {/* Placeholder for icon */}
   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
<path d="M12.375 5.0625H4.78125V3.09375C4.78125 2.5716 4.98867 2.07085 5.35788 1.70163C5.7271 1.33242 6.22786 1.125 6.75 1.125C7.27214 1.125 7.7729 1.33242 8.14212 1.70163C8.51133 2.07085 8.71875 2.5716 8.71875 3.09375C8.71875 3.24293 8.77801 3.38601 8.8835 3.4915C8.98899 3.59699 9.13207 3.65625 9.28125 3.65625C9.43043 3.65625 9.57351 3.59699 9.679 3.4915C9.78449 3.38601 9.84375 3.24293 9.84375 3.09375C9.84375 2.27324 9.5178 1.48633 8.93761 0.906138C8.35742 0.325948 7.57051 0 6.75 0C5.92949 0 5.14258 0.325948 4.56239 0.906138C3.9822 1.48633 3.65625 2.27324 3.65625 3.09375V5.0625H1.125C0.826631 5.0625 0.540483 5.18103 0.329505 5.392C0.118526 5.60298 0 5.88913 0 6.1875V14.0625C0 14.3609 0.118526 14.647 0.329505 14.858C0.540483 15.069 0.826631 15.1875 1.125 15.1875H12.375C12.6734 15.1875 12.9595 15.069 13.1705 14.858C13.3815 14.647 13.5 14.3609 13.5 14.0625V6.1875C13.5 5.88913 13.3815 5.60298 13.1705 5.392C12.9595 5.18103 12.6734 5.0625 12.375 5.0625ZM6.75 10.9688C6.58312 10.9688 6.41999 10.9193 6.28124 10.8266C6.14248 10.7338 6.03434 10.6021 5.97048 10.4479C5.90662 10.2937 5.88991 10.1241 5.92246 9.96039C5.95502 9.79672 6.03538 9.64638 6.15338 9.52838C6.27138 9.41038 6.42172 9.33002 6.58539 9.29746C6.74906 9.26491 6.91871 9.28162 7.07289 9.34548C7.22706 9.40934 7.35884 9.51748 7.45155 9.65624C7.54426 9.79499 7.59375 9.95812 7.59375 10.125C7.59375 10.3488 7.50485 10.5634 7.34662 10.7216C7.18839 10.8799 6.97378 10.9688 6.75 10.9688Z" fill="#00413D"/>
</svg>
    </div>

    {/* Text */}
    <p className="text-primary text-[12px] text-sm leading-[1.3] z-10 ]">
      Gain full access to your finances with detailed analytics and graphs
    </p>

    {/* Button */}
    <button className="bg-secondary  text-black hover:bg-primary hover:text-white hover:cursor-pointer font-medium py-2 rounded-xl z-10">
      Get Pro
    </button>
  </div>
</div>



</aside>

  );
};

export default Sidebar;
