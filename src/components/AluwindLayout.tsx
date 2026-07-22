import React from 'react';
import AluwindHeader from './AluwindHeader';
import AluwindFooter from './AluwindFooter';
import AluwindPriceTicker from './AluwindPriceTicker';
import AluwindFloatingCall from './AluwindFloatingCall';

interface LayoutProps {
  children: React.ReactNode;
}

export const AluwindLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-[#0f1f17]">
      <AluwindHeader />
      <AluwindPriceTicker />
      <main className="flex-grow">{children}</main>
      <AluwindFooter />
      <AluwindFloatingCall />
    </div>
  );
};

export default AluwindLayout;
