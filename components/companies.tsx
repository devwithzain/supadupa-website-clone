import { Marquee } from "@/components";
import { useTranslations } from "next-intl";

export default function Companies() {
	const t = useTranslations("companiesContent");
	return (
		<>
			<Marquee
				className="text-[#ffeb69]"
				titile1="Let's build"
				titile2="good companies"
			/>
			<div className="w-full py-20 flex justify-center items-center padding-x">
				<div className="w-[70%] xm:w-full sm:w-full flex flex-col gap-10">
					<div>
						<h1 className="text-[70px] xm:text-[35px] sm:text-[40px] xm:leading-none sm:leading-none text-[#ffeb69] font-bold leading-[60px] tracking-tight">
							{t("companiesHeading")}
						</h1>
					</div>
					<div>
						<p className="text-[23px] text-[#ffeb69] leading-normal tracking-tight">
							{t("companiesPara")}
						</p>
					</div>
					<div>
						<p className="text-[23px] text-[#ffeb69] leading-normal tracking-tight">
							{t("companiesPara1")}
						</p>
					</div>
					<div>
						<p className="text-[23px] text-[#ffeb69] leading-normal tracking-tight">
							{t("companiesPara2")}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
