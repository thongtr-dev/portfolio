'use client';

import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<HeroSection />
			<ProjectsSection />
		</main>
	);
}
