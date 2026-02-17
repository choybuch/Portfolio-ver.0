import React from 'react';

export const Background: React.FC = () => {
  return (
    <>
      {/* CRT Scanlines */}
      <div className="scanlines" />
      
      {/* Grid Pattern */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
             backgroundSize: '100% 2px, 3px 100%'
           }} 
      />
      
      <div className="fixed inset-0 z-0 bg-grid-pattern bg-[size:40px_40px] opacity-10 pointer-events-none" />
      
      {/* Vignette */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
    </>
  );
};