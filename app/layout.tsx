import type { Metadata } from "next";
import { Inter, Fredoka } from "next/font/google";
import { ThirdwebProvider } from "thirdweb/react";
import "./globals.css";
import { APP_DESCRIPTION, APP_TITLE } from "@/utils/constants";
import { NextUIProvider } from "@nextui-org/react";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });
const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", weight: ["400", "500", "700"] });

export const metadata: Metadata = {
    title: `${APP_TITLE}`,
    description: `${APP_DESCRIPTION}`,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} ${fredoka.variable} w-full h-screen dark:bg-dark`}
            >
                <main className="cont">
                    <ThirdwebProvider>
                        <NextUIProvider>
                            <Nav />
                            <div className="mt-[1.3rem]">{children}</div>
                        </NextUIProvider>
                    </ThirdwebProvider>
                </main>
            </body>
        </html>
    );
}
