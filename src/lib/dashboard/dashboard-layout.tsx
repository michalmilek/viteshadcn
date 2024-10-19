import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { SidebarItems } from '@/lib/dashboard/sidebar-items';
import { Settings, Menu } from 'lucide-react';
import React from 'react';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden w-64 bg-white border-r md:flex md:flex-col">
        <div className="flex items-center justify-center h-16 border-b">
          <span className="text-2xl font-semibold">MyApp</span>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <SidebarItems />
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Navbar */}
        <header className="flex items-center justify-between h-16 px-4 bg-white border-b md:px-6">
          <div className="flex items-center md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="mr-2">
                  <Menu className="w-5 h-5" />
                  <span className="sr-only">Toggle sidebar</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SheetHeader className="border-b h-16 flex items-center justify-center">
                  <SheetTitle>MyApp</SheetTitle>
                </SheetHeader>
                <nav className="flex-1 p-4">
                  <ul className="space-y-2">
                    <SidebarItems />
                  </ul>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <span className="text-xl font-semibold md:hidden">MyApp</span>
          <div className="flex items-center gap-4">
            <span className="text-sm">John Doe</span>
            <Button variant="outline" size="icon">
              <Settings className="w-5 h-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
