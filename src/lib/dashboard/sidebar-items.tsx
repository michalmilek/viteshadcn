import { cn } from '@/lib/utils';
import { BarChart, LayoutDashboard, Settings, Users } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';


const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Users', href: '/dashboard/users', icon: Users },
  { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export const SidebarItems = () => {
  const location = useLocation();
  return (
    <>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            to={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900',
              location.pathname === item.href ? 'bg-gray-100 text-gray-900' : '',
            )}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        </li>
      ))}
    </>
  );
};
