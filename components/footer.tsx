import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { blackCircle } from "@/public";
import { useTranslations } from "next-intl";
import { TextHover, Marquee } from "@/components";

export default function Footer() {
	const t = useTranslations("footerContent");
	return (
		<>
			<div
				id="get-in-touch"
				className="w-full h-screen flex flex-col items-center padding-x justify-between">
				<Marquee
					titile1="Get in touch"
					titile2="Get in touch"
					className="text-[#ffeb69]"
				/>
				<div className="w-[80%] flex flex-col gap-10">
					<div>
						<h1 className="text-[60px] text-[#ffeb69] font-bold leading-[62px] tracking-tight text-center">
							{t("footerHeading1")}
						</h1>
					</div>
					<div>
						<p className="text-[25px] text-[#ffeb69] leading-normal tracking-tight text-center">
							{t("footerHeading2")}
						</p>
					</div>
					<div className="flex items-center justify-center">
						<button className="group flex gap-2 items-center text-[17px] font-semibold capitalize text-[#260A2F] bg-secondary rounded-full leading-tight tracking-tight px-4 py-3">
							<Image
								src={blackCircle}
								alt="blackCircle"
								width={30}
								height={30}
								className="group-hover:rotate-[60deg] transition-all duration-300 ease-linear"
							/>
							<TextHover
								titile1={t("footerBtn")}
								titile2={t("footerBtn")}
							/>
						</button>
					</div>
				</div>
				<div className="w-full flex justify-between gap-5 py-10">
					<div className="w-1/2 flex gap-5 justify-between">
						<div className="flex flex-col gap-5">
							<div className="flex flex-col">
								<p className="text-[16px] text-[#9FE870] leading-tight tracking-tight">
									Phone
								</p>
								<Link
									className="text-[30px] font-semibold text-[#9FE870] leading-tight tracking-tight"
									href="tell:+31 53 234 0188">
									+31 53 234 0188
								</Link>
							</div>
							<div className="flex flex-col">
								<p className="text-[16px] text-[#9FE870] leading-tight tracking-tight">
									linkedin
								</p>
								<Link
									className="text-[30px] font-semibold text-[#9FE870] leading-tight tracking-tight"
									href="/">
									@SupaDupaNL
								</Link>
							</div>
						</div>
						<div className="flex flex-col gap-5">
							<div className="flex flex-col">
								<p className="text-[16px] text-[#9FE870] leading-tight tracking-tight">
									E-mail
								</p>
								<Link
									className="text-[30px] font-semibold text-[#9FE870] leading-tight tracking-tight"
									href="mailTo:hello@supadupa.nl">
									hello@supadupa.nl
								</Link>
							</div>
							<div className="flex flex-col">
								<p className="text-[16px] text-[#9FE870] leading-tight tracking-tight">
									Instagram
								</p>
								<Link
									className="text-[30px] font-semibold text-[#9FE870] leading-tight tracking-tight"
									href="/">
									@SupaDupaNL
								</Link>
							</div>
						</div>
					</div>
					<div className="w-[30%]">
						<div className="flex flex-col gap-10">
							<div className="flex flex-col">
								<p className="text-[16px] text-[#9FE870] leading-tight tracking-tight">
									Enschede
								</p>
								<Link
									className="text-[30px] font-semibold text-[#9FE870] leading-tight tracking-tight"
									href="/">
									Langestraat 45a, <br /> 7511 HB
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full flex flex-col overflow-hidden">
					<motion.div
						initial={{ borderTopWidth: 0, width: "0%" }}
						viewport={{ once: true }}
						whileInView={{
							borderTopWidth: 1,
							width: "100%",
							borderColor: "#9FE870",
							origin: "left",
						}}
						transition={{
							duration: 1,
							ease: "easeInOut",
						}}
					/>
					<div className="w-full flex items-center justify-between py-4">
						<motion.h2
							initial={{ y: "100%" }}
							viewport={{ once: true }}
							whileInView={{
								y: 0,
							}}
							transition={{
								duration: 1,
								ease: "easeInOut",
							}}
							className="text-[#9FE870] text-sm">
							Supa Dupa 2024
						</motion.h2>
						<motion.h2
							initial={{ y: "100%" }}
							viewport={{ once: true }}
							whileInView={{
								y: 0,
							}}
							transition={{
								duration: 1,
								ease: "easeInOut",
							}}
							className="text-[#9FE870] text-sm">
							Privacy Statement
						</motion.h2>
					</div>
				</div>
			</div>
		</>
	);
}
