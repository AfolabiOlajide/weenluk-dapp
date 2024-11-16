import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThirdwebProvider } from "thirdweb/react";
import "./globals.css";
import { APP_DESCRIPTION, APP_TITLE } from "@/utils/constants";
import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

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
            <body className={inter.className}>
                <ThirdwebProvider>
                    <NextUIProvider>{children}</NextUIProvider>
                </ThirdwebProvider>
            </body>
        </html>
    );
}
