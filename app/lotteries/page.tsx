"use client";
import useProvideContract from "@/hooks/useProvideContract";
import { useReadContract } from "thirdweb/react";

const Lotteries = () => {
    const { contract } = useProvideContract();
    const { data, isPending } = useReadContract({
        contract,
        method: "function getAllLotteries() view returns ((address lotteryAddress, address owner, string name, uint256 creationTime)[])",
        params: [],
    });

    console.log(data)
    
    return (
        <div>Lotteries</div>
    )
}

export default Lotteries