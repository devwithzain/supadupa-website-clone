import "@/styles/globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "One Task At A Time",
	description: "One Task At A Time Landing Page by devwithzain",
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
