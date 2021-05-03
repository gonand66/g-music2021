import React from "react";
import { AlBumsList, CategorySection, HomeBanner } from "../components/home";

function HomePage() {
  return (
    <div>
      <HomeBanner />
      <CategorySection />
      <AlBumsList />
    </div>
  );
}

export default HomePage;
