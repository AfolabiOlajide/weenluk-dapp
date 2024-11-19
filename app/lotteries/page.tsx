"use client";
import Loader from "@/components/Loader";
import useProvideContract from "@/hooks/useProvideContract";
import LotteryCard from "@/modules/lottery/LotteryCard";
import { LotteryCardType } from "@/types";
import { useReadContract } from "thirdweb/react";

const Lotteries = () => {
    const { contract } = useProvideContract();
    const { data, isPending } = useReadContract({
        contract,
        method: "function getAllLotteries() view returns ((address lotteryAddress, address owner, string name, uint256 creationTime)[])",
        params: [],
    });

    // console.log(data)
    
    return (
        <div>
            <header className="text-3xl font-fredoka uppercase">Lotteries Gallery</header>
            { isPending && <Loader /> }
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-[2rem]">
                {data?.map((lottery: LotteryCardType) => (
                    <LotteryCard key={lottery.creationTime} lottery={lottery} />
                ))}
            </div>
        </div>
    )
}

export default Lotteries