
import React from 'react';

export default function LogosSection() {
  return (
    <div className="py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img 
            src="/lovable-uploads/ff453ebd-fc21-466b-9091-e01f48381864.png" 
            alt="TOEIC Logo" 
            className="h-12 object-contain"
          />
          <img 
            src="/lovable-uploads/4b4e6b35-b375-409a-b10a-8f130027fc5b.png" 
            alt="LILATE Logo" 
            className="h-12 object-contain"
          />
          <img 
            src="/lovable-uploads/ca4c7164-c7e3-462f-b4ea-80274b873c2e.png" 
            alt="Cambridge Assessment English Logo" 
            className="h-14 object-contain"
          />
          <img 
            src="/lovable-uploads/2614c0f0-8fce-45d7-bcef-93258dead6d5.png" 
            alt="Global Exam Logo" 
            className="h-12 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
