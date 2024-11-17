'use client';

import React, { useState } from 'react';
import Link from 'next/link'; // Use Link from Next.js
import Categoryitems from './Categoryitems'; // Ensure you have Categoryitems component

export default function Categorybar() {
  const [activeItem, setActiveItem] = useState(0); // Set "Home" as default active item (index 0)

  // Function to set the active item
  const handleItemClick = (itemIndex) => {
    setActiveItem(itemIndex);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Content section */}
      <div className="flex-grow-0"> {/* Remove flex-grow to stop expansion */}</div>

      {/* Categorybar at the bottom, changed to horizontal layout with background color #212120 */}
      <div className="category-bar fixed bottom-0 left-0 w-full py-2 px-5 shadow-lg border-t border-white bg-[#212120]">
        <div className="flex justify-between items-center space-x-4"> {/* Add horizontal spacing and alignment */}
          <Link href="/" passHref>
            <Categoryitems
              path="/HomeIcons.svg"
              activePath="/Home1.svg"
              title="Home"
              isActive={activeItem === 0} // "Home" is active by default
              onClick={() => handleItemClick(0)}
            />
          </Link>
          <Link href="/coin" passHref>
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
    </div>
  );
}
