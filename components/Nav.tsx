"use client";
import { Button } from "@nextui-org/react";
import { useConnectModal } from "thirdweb/react";
import { useActiveWallet } from "thirdweb/react";
import { client } from "@/app/client";

const Nav = () => {
    const { connect, isConnecting } = useConnectModal();
    const wallet = useActiveWallet();

    console.log(wallet?.getAdminAccount)

    async function handleConnect() {
        console.log("Connecting")
        const wallet = await connect({ client }); // opens the connect modal
        console.log("connected to", wallet);
    }

    return (
        <nav>
            <Button onClick={handleConnect} isLoading={isConnecting}>Connect</Button>
        </nav>
    );
};

export default Nav;
