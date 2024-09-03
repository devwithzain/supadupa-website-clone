import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "SupaDupa - Let's build some good companies!",
	description: "SupaDupa website clone by devwithzain",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
