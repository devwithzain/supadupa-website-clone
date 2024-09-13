"use client";
import Swiper from "swiper";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import { useEffect, useRef } from "react";
import { testimonialsItems } from "@/constants";
import { arrowLeft, arrowRight } from "@/public";
import { Navigation, Pagination } from "swiper/modules";

Swiper.use([Pagination, Navigation]);

export default function Slider() {
	const swiperRef = useRef<Swiper | null>(null);

	useEffect(() => {
		swiperRef.current = new Swiper(".card-wrapper", {
			loop: true,
			spaceBetween: 30,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 2,
				},
			},
		});
	}, []);

	return (
		<div className="w-full pb-10 bg-[#FFD7EF]">
			<div className="swiper">
				<div className="card-wrapper p-5 overflow-hidden">
					<ul className="swiper-wrapper">
						{testimonialsItems.map((item) => (
							<div
								key={item.id}
								className="bg-[#260A2F] p-7 rounded-[30px] swiper-slide min-h-[400px] cursor-grab">
								<div className="flex flex-col gap-3">
									<h2 className="text-[70px] font-bold leading-tight text-[#FFD7EF]">
										{item.title}
									</h2>
									<h2 className="text-[40px] font-medium leading-tight text-[#FFD7EF]">
										{item.heading}
									</h2>
									<p className="text-[20px] font-normal leading-normal text-[#FFD7EF] tracking-tight">
										{item.para}
									</p>
								</div>
							</div>
						))}
					</ul>
					<div className="flex mt-6 !relative w-full">
						<div className="bg-[#9fe870] hover:bg-[#FFEB69] transition-all duration-200 ease-linear cursor-pointer px-10 py-[17px] rounded-[30px]">
							<Image
								src={arrowLeft}
								alt="arrowLeft"
								className="!w-[55px] swiper-button-prev"
								width={55}
								height={55}
							/>
						</div>
						<div className="!absolute !left-20 bg-[#9fe870] hover:bg-[#FFEB69] transition-all duration-200 ease-linear cursor-pointer px-10 py-[17px] rounded-[30px] ml-3">
							<Image
								src={arrowRight}
								alt="arrowRight"
								className="!w-[55px] swiper-button-next"
								width={55}
								height={55}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
