// /app/components/SidebarHRD.tsx

import { NavItem } from './NavItem';
import { Briefcase, Users, Clock, FileText, ClipboardList } from 'lucide-react'; 

const menuItemsHRD = {
  main: [
    { name: 'Employee Data', icon: Users, href: '/dashboard/hrd/employees' }, 
    { name: 'Attendance Records', icon: Clock, href: '/dashboard/hrd/attendance' },
    { name: 'Payroll Summary', icon: FileText, href: '/dashboard/hrd/payroll' }, 
    { name: 'Recruitment', icon: Briefcase, href: '/dashboard/hrd/recruitment' },
  ],
  general: [
    { name: 'Training Modules', icon: ClipboardList, href: '/dashboard/hrd/training' },
  ],
};

export default function SidebarHRD() {
  return (
    <>
      {/* 1. Main HRD Menu */}
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-2 mb-2 px-3">
        HRD Operations
      </h3>
      <nav className="flex flex-col space-y-2">
        {menuItemsHRD.main.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </nav>

      {/* 2. General HRD Menu */}
      <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mt-6 mb-2 px-3">
        General
      </h3>
      <nav className="flex flex-col space-y-2">
        {menuItemsHRD.general.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </nav>
    </>
  );
}