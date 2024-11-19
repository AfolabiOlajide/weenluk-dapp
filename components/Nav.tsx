"use client";
import { Button } from "@nextui-org/react";
import { useConnectModal } from "thirdweb/react";
import { useActiveWallet } from "thirdweb/react";
import { client } from "@/app/client";
import ThemeSwitch from "./Switch";
import Link from "next/link";

const Nav = () => {
    const { connect, isConnecting } = useConnectModal();
    const wallet = useActiveWallet();

    console.log(wallet?.getAdminAccount);

    async function handleConnect() {
        console.log("Connecting");
        const wallet = await connect({ client }); // opens the connect modal
        console.log("connected to", wallet);
    }

    return (
        <nav className="flex justify-between items-center py-4">
            <div className="logo text-[3rem] text-cAccent font-bol font-fredoka uppercase">
                weenluk
            </div>
            <div className="nav-menu flex gap-4">
                <Link href="/" className="trans nav-list-style">
                    <p>Home</p>
                </Link>
                <Link href="/lotteries" className="trans nav-list-style">
                    <p>Lotteries</p>
                </Link>
                <p className="trans nav-list-style">Create</p>
                <Link href="/profile" className="trans nav-list-style">
                    <p>Profile</p>
                </Link>
            </div>
            <div className="flex gap-4 items-center">
                <ThemeSwitch />
                <Button onClick={handleConnect} isLoading={isConnecting}>
                    Connect
                </Button>
            </div>
        </nav>
    );
};

export default Nav;
