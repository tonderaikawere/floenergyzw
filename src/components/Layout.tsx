import React from 'react';
import FloatingCallButton from './FloatingCallButton';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col font-sans">
      {children}
      <FloatingCallButton />
    </div>
  );
};

export default Layout;
