'use client';

import React from 'react';
import Image from 'next/image';

export default function Categoryitems({ path, activePath, title, isActive, onClick }) {
  return (
    <div
      className="category-item flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={isActive ? activePath : path} // Use activePath if isActive is true, else use the original path
        alt={title}
        className={`category-icon ${isActive ? 'filter brightness-100' : 'filter brightness-50'}`} // Optional: Adjust brightness for inactive state
        width={20}
        height={20}
      />
      <p
        className="category-title text-[16px] mt-1"
        style={{ color: isActive ? '#FFC93D' : '#9DB2CE' }}
      >
        {title}
      </p>
    </div>
  );
}
