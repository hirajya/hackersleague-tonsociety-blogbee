"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

export default function NavbarItem({ title, param, customClass }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div
      className={`hover:text-[#ffc83d] hover:underline hover:underline-offset-8 hover:decoration-yellow-500 font-medium ${
        genre === param
          ? "text-[#ffc83d] underline underline-offset-8 decoration-4 decoration-yellow-500 rounded-lg"
          : ""
      } ${customClass}`}
    >
      {title}
    </div>
  );
}
