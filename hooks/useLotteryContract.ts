"use client";
import { getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { client } from "@/app/client";
import { CHAIN } from "@/utils/constants";

const useLotteryContract = (contractAddress: string) => {
    const lotteryContract = getContract({
        client,
        chain: defineChain(CHAIN),
        address: contractAddress,
    });

    return { lotteryContract };
};

export default useLotteryContract;
