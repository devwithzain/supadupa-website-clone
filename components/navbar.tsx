"use client";
import Link from "next/link";
import Image from "next/image";
import { links } from "@/constants";
import TextHover from "./text-hover";
import { navVariants } from "@/motion";
import { useRouter } from "next/navigation";
import { blackCircle, logo } from "@/public";
import { useState, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
	const t = useTranslations("navbarContent");
	const [active, setActive] = useState(false);
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const currentLocale = useLocale();

	const onSelectChange = () => {
		const nextLocale = currentLocale === "en" ? "nl" : "en";
		startTransition(() => {
			router.replace(`/${nextLocale}`);
		});
	};

	return (
		<>
			<motion.nav
				className="w-full py-3 padding-x fixed top-0 left-0 z-50 backdrop-blur-[5px] flex items-center justify-between"
				initial="hidden"
				whileInView="vissible"
				variants={navVariants}>
				<div className="w-[50%]">
					<Link href="/">
						<Image
							src={logo}
							alt="supadupa logo"
							width={100}
							height={100}
						/>
					</Link>
				</div>
				<div className="flex gap-x-[20px]">
					<button
						className="text-[17px] font-semibold uppercase text-[#260A2F] bg-secondary rounded-full leading-tight tracking-tight px-6 py-3"
						onClick={onSelectChange}
						disabled={isPending}>
						{currentLocale === "nl" ? "en" : "nl"}
					</button>

					<div className="relative">
						<button
							className="flex gap-2 items-center text-[17px] font-semibold capitalize text-[#260A2F] bg-secondary rounded-full leading-tight tracking-tight px-4 py-3 group"
							onClick={() => setActive(!active)}>
							<Image
								src={blackCircle}
								alt="blackCircle"
								width={20}
								height={20}
								className="group-hover:rotate-[60deg] transition-all duration-300 ease-linear"
							/>
							<TextHover
								titile1="Menu"
								titile2="Menu"
							/>
						</button>
						<motion.div
							initial={{ scaleY: 0 }}
							animate={active ? { scaleY: 1 } : { scaleY: 0 }}
							transition={{
								duration: 0.4,
								ease: "easeInOut",
							}}>
							<AnimatePresence mode="wait">
								{active && (
									<motion.div
										className="absolute flex flex-col gap-2 bg-secondary pl-5 pr-16 py-8 rounded-[20px] right-0 mt-8"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}>
										{links.map((link) => (
											<div key={link.id}>
												<Link
													href={`#${link.href}`}
													className="text-[16px] font-semibold capitalize text-[#260A2F] bg-secondary leading-tight tracking-tight"
													onClick={() => setActive(!active)}>
													{t(link.href)}
												</Link>
											</div>
										))}
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					</div>
				</div>
			</motion.nav>
		</>
	);
}
