import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mt-10">
      <Image
        className="mb-6"
        src="/BnWLogo.svg" // Make sure the path is correct
        alt="Blogbee Logo"
        width={180}
        height={180}
      />
      <div className="p-4">
        <h2 className="text-xs">Introducing</h2>
        <h1 className="text-[#FFC93D] text-2xl font-bold mb-2">blogbee</h1>
        <p className="text-[0.5rem] mb-6 mr-8">
          Earn rewards while exploring engaging blogs and quality content
          tailored to your interests. Let's get you started!
        </p>
        <button className="bg-[#FFC93D] text-black text-xs w-full py-2 px-4 rounded hover:bg-blue-600 transition text-center">
          Get Started
        </button>
      </div>
    </div>
  );
}
