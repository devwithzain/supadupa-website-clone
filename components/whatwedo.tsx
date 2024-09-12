import { Marquee } from "@/components";
import { whatwedoImg1 } from "@/public";
import Image from "next/image";
import Link from "next/link";

export default function Whatwedo() {
	return (
		<div className="w-full py-20 bg-[#FFD7EF]">
			<Marquee
				className="text-[#260A2F]"
				titile1="What we do"
				titile2="What we do"
			/>
			<div className="w-[80%] flex justify-center">
				<div>
					<p className="text-[25px] text-[#260A2F] leading-normal tracking-tight">
						Together we will look at your organization through four lenses of
						expertise: Business <br /> development, Branding, Sustainability and
						People & Culture. We help organizations <br /> evolve their value
						proposition to generate sustainable business.
					</p>
				</div>
			</div>
			<div className="w-full padding-x py-20">
				<div className="w-full p-20 flex justify-between rounded-[30px] gap-10 bg-[#260A2F]">
					<div className="w-1/2 h-full flex flex-col gap-14">
						<div className="flex flex-col gap-2">
							<h4 className="text-[24px] text-[#FFD7EF] leading-tight tracking-tighter">
								SDG, ESG, B-corp & Steward Ownership
							</h4>

							<h1 className="text-[80px] text-[#FFD7EF] font-bold leading-[80px] tracking-tighter">
								Business <br /> Development
							</h1>
							<h4 className="text-[20px] text-[#FFD7EF] leading-normal tracking-tighter">
								Implementing next generation business models & frameworks that
								drive <br /> positive change for your organization.
							</h4>
						</div>
						<div className="w-fit flex flex-col gap-2">
							<Link
								className="text-[18px] text-secondary font-normal leading-tight tracking-tight"
								href="/">
								Book an inspiration workshop
							</Link>
							<div className="w-full h-[1px] rounded-lg bg-secondary" />
						</div>
					</div>
					<div className="w-1/2 h-full flex items-center justify-center">
						<Image
							src={whatwedoImg1}
							alt="whatwedoImg"
							className="w-[80%] object-cover"
						/>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-start items-center padding-x py-20">
				<div className="w-[72%] flex flex-col gap-7">
					<h4 className="text-[24px] text-[#260A2F] leading-tight tracking-tighter">
						Pioneers for the new normal
					</h4>

					<h1 className="text-[80px] text-[#260A2F] font-bold leading-[80px] tracking-tighter">
						Business transformation is a journey that demands time, space and a
						contagious dose of positive energy.
					</h1>
					<h4 className="text-[24px] text-[#260A2F] leading-normal tracking-tighter">
						Our philosophy is that everyone knows their destination; sometimes,
						you just need a guide who knows the way to get there. With our
						transformation journey process, we tailor a unique path aligned with
						your company&apos;s specific needs.
					</h4>
				</div>
			</div>
		</div>
	);
}
