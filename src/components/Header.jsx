import React from "react";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <div className="flex align-middle  ml-2 p-3 lg:text justify-left gap-6">
      <NavbarItem
        title="For you"
        customClass="text-[#9db2ce] text-12 font-normal"
        style={{ fontFamily: 'DM Sans, sans-serif' }}
        />

    <NavbarItem
            title="Cryptocurrency"
            customClass="text-[#9db2ce] text-12 font-normal"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            />

   <NavbarItem  
            title="Technology"
            customClass="text-[#9db2ce] text-12 font-normal"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            />

   <NavbarItem
            title="Fashion"
            customClass="text-[#9db2ce] text-12 font-normal"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            />

    </div>
  );
}
