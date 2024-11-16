'use client'

import React, { useState } from 'react';
import Link from 'next/link'; // Use Link from Next.js
import Categoryitems from './Categoryitems';

export default function Categorybar() {
  const [activeItem, setActiveItem] = useState(null); // Keep track of the active item

  // Function to set the active item
  const handleItemClick = (itemIndex) => {
    setActiveItem(itemIndex);
  };

  return (
    <div className="flex flex-col min-h-screen"> {/* This ensures the container takes full height */}
      <div className="flex-grow"> {/* This section will take the remaining space */}
        {/* You can place your content here */}
      </div>

      <div className="category-bar flex items-center justify-between w-full py-2 px-5 shadow-lg border-t border-white pt-4">
        <Link href="/" passHref>
          <Categoryitems
            path="/HomeIcons.svg"
            activePath="/Home1.svg"
            title="Home"
            isActive={activeItem === 0}
            onClick={() => handleItemClick(0)}
          />
        </Link>
        <Link href="/buzzwallet" passHref>
          <Categoryitems
            path="/BuzzIcon.svg"
            activePath="/Buzz1.svg"
            title="Buzz"
            isActive={activeItem === 1}
            onClick={() => handleItemClick(1)}
          />
        </Link>
        <Link href="/hive" passHref>
          <Categoryitems
            path="/HiveIcon.svg"
            activePath="/Hive1.svg"
            title="Hive"
            isActive={activeItem === 2}
            onClick={() => handleItemClick(2)}
          />
        </Link>
        <Link href="/wallet" passHref>
          <Categoryitems
            path="/WalletIcon.svg"
            activePath="/Wallet.svg"
            title="Wallet"
            isActive={activeItem === 3}
            onClick={() => handleItemClick(3)}
          />
        </Link>
      </div>
    </div>
  );
}
