"use client"
import React from 'react';

const openWhatsApp = () => {
  const message = encodeURIComponent('Hello, I have a question regarding PAWAN.');
  const phoneNumber = '+918069543300';
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};

const WhatsAppButton = () => {
  return (
    <button
      onClick={openWhatsApp}
      className="fixed z-[30] bottom-4 right-4 
                 flex items-center justify-center 
                 bg-accent text-white cursor-pointer 
                 transition-all duration-300
                 p-3 md:px-6 md:py-3 
                 rounded-full md:rounded-4xl xl:rounded-4xl lg:rounded-4xl
                 shadow-lg"
    >
      {/* WhatsApp Logo */}
      <img
        src="/whatsapp-logo-trans.png"
        alt="WhatsApp Logo"
        width="24"
        height="24"
      />

      {/* Text only on md and above */}
      <span className="hidden md:inline-block ml-2 text-sm sm:text-base">
        WhatsApp Us
      </span>
    </button>
  );
};

export default WhatsAppButton;
