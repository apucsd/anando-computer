import { Outlet, ScrollRestoration, NavLink } from "react-router-dom";
import { PiGaugeLight, PiListLight, PiQuestionLight, PiInfoLight, PiImagesLight, PiChatsCircleLight, PiGearLight, PiPaletteLight, PiImageLight } from "react-icons/pi";

type AdminNavItem = {
  label: string;
  path: string;
  icon?: React.ReactNode;
  children?: AdminNavItem[];
};

const adminNav: AdminNavItem[] = [
  { label: "Dashboard", path: "/admin", icon: <PiGaugeLight size={20} /> },
  { label: "Services", path: "/admin/services", icon: <PiListLight size={20} /> },
 
  { label: "About Us", path: "/admin/about", icon: <PiInfoLight size={20} /> },
  { label: "Gallery", path: "/admin/gallery", icon: <PiImagesLight size={20} /> },

  { label: "Settings", path: "/admin/settings", icon: <PiGearLight size={20} />, children: [
    { label: "Banner", path: "/admin/settings/banner", icon: <PiImageLight size={18} /> },
    { label: "Theme Color", path: "/admin/settings/theme", icon: <PiPaletteLight size={18} /> },
    { label: "FAQ", path: "/admin/faq", icon: <PiQuestionLight size={20} /> },
    { label: "Contact Info", path: "/admin/contact-info", icon: <PiChatsCircleLight size={20} /> },
  ]},
];

import { useState } from "react";
import { PiCaretDownLight, PiCaretRightLight } from "react-icons/pi";

const Sidebar = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const handleToggle = (key: string) => {
    setOpenKey(prev => (prev === key ? null : key));
  };

  return (
    <aside className="bg-white border-r w-64 min-h-screen flex flex-col py-6 px-3">
      <div className="mb-10 text-2xl font-bold text-primary text-center tracking-wide">Admin Panel</div>
      <nav className="flex-1 space-y-2">
        {adminNav.map((item) => {
          const hasChildren = !!item.children && item.children.length > 0;
          const isOpen = openKey === item.label;
          return (
            <div key={item.label}>
              <button
                type="button"
                onClick={() => hasChildren ? handleToggle(item.label) : undefined}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition font-medium hover:bg-primary/10 focus:outline-none ${isOpen ? 'bg-primary/10 text-primary' : 'text-gray-700'} ${hasChildren ? 'justify-between' : ''}`}
                
              >
                <span className="flex items-center gap-3">
                  {item.icon && item.icon}
                  {item.label}
                </span>
                {hasChildren && (
                  isOpen ? <PiCaretDownLight size={18} /> : <PiCaretRightLight size={18} />
                )}
              </button>
              {hasChildren && (
                <div
                  className={`ml-7 mt-1 space-y-1 overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
                >
                  {item.children?.map((child) => (
                    <NavLink
                      key={child.label}
                      to={child.path}
                      className={({ isActive }) =>
                        `block px-3 py-1.5 flex items-center gap-3 rounded hover:bg-primary/10 text-sm transition ${isActive ? 'bg-primary/10 text-primary' : 'text-gray-600'}`
                      }
                    >
                      {child.icon && child.icon} {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 min-h-screen overflow-x-auto">
        <Outlet />
        <ScrollRestoration />
      </main>
    </div>
  );
};

export default AdminLayout;
