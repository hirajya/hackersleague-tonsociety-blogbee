import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <Image
        className=""
        src="./BnWLogo.svg"
        alt="Blogbee Logo"
        width={180}
        height={180}
      />
      <div className="p-4">
        <h2 className="text-xs">Introducing</h2>
        <h1 className="text-2xl font-bold mb-2">blogbee</h1>
        <p className="text-[0.5rem] mb-6">
          Earn rewards while exploring engaging blogs and quality content
          tailored to your interests. Let's get you started!
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
