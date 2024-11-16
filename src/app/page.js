// Page.js
import React from "react";
import Navbar from "@/components/Navbar";
import SubscriptionCard from "@/components/SubscriptionCard";

export default function Page() {
  return (
    <div className="px-4 sm:px-6 lg:px-10"> {/* Adjust padding for responsiveness */}
      <h1 className="text-2xl font-black mb-4 text-[#ffc83d] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[35px] font-['DM Sans'] mt-10">
        Home
      </h1>
      <Navbar />

      <div className="space-y-6"> {/* Add vertical spacing between cards */}
        <SubscriptionCard
          title="The 5 paid subscriptions I actually use in 2024 as a software engineer"
          description="Tools I use that are cheaper than Netflix"
          views="12.3K"
          comments="133"
          date="Jan 4, 2024"
          author="Jacob Bennett"
          category="Level Up Coding"
          authorImage="./authorImage1.svg"
          cardImage="./cardImage1.svg"
        />

        <SubscriptionCard
          title="My Favourite Software Architecture Patterns"
          description="Exploring my most loved Software Architecture patterns."
          views="2.4K"
          comments="33"
          date="3 days ago"
          author="Matt Bentley"
          category="Level Up Coding"
          authorImage="./authorImage2.svg"
          cardImage="./cardImage2.svg"
        />

        <SubscriptionCard
          title="7 Strategies To Help You Remember 80% of Everything You Read"
          description="Will help you remember at least 60%."
          views="9K"
          comments="33"
          date="Mar 3, 2024"
          author="Vincent Carlos"
          category="Books Are Our Superpower"
          authorImage="./authorImage3.svg"
          cardImage="./cardImage3.svg"
        />

        <SubscriptionCard
          title="7 Strategies To Help You Remember 80% of Everything You Read"
          description="Will help you remember at least 60%."
          views="9K"
          comments="33"
          date="Mar 3, 2024"
          author="Vincent Carlos"
          category="Books Are Our Superpower"
          authorImage="./authorImage3.svg"
          cardImage="./cardImage3.svg"
        />
      </div>
    </div>
  );
}
