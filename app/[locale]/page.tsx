"use client";
import Slider from "@/components/slider";
import Lenis from "@studio-freight/lenis";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
	Collaboration,
	Companies,
	Footer,
	Hero,
	Journey,
	Preload,
	Whatwedo,
} from "@/components";

export default function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const lenis = new Lenis();

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		const timeout = setTimeout(() => {
			setIsLoading(false);
			document.body.style.cursor = "default";
		}, 2000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<AnimatePresence mode="wait">{isLoading && <Preload />}</AnimatePresence>
			{!isLoading && (
				<>
					<Hero />
					<Journey />
					<Companies />
					<Whatwedo />
					<Slider />
					<Collaboration />
					<Footer />
				</>
			)}
		</>
	);
}
