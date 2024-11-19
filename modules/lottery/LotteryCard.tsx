import { LotteryCardType } from "@/types";
import Image from "next/image";

const LotteryCard = ({lottery}: {lottery: LotteryCardType}) => {
    return (
        <div
            className="card bg-cLightGrey dark:bg-cBlack2 shadow-xl border border-gray-400 dark:border-gray-700 rounded-md cursor-pointer hover:scale-105 trans"
            key={lottery.creationTime}
        >
            <div className="img aspect-square mb-4">
                <Image
                    src="/lottery card 1.jpg"
                    alt="lottery"
                    width={200}
                    height={200}
                    className="object-cover w-full rounded-t-md"
                />
            </div>
            <div className="card-body p-[1rem]">
                <h2 className="card-title text-2xl font-fredoka uppercase">
                    {lottery.name}
                </h2>
                <p>{lottery.creationTime.toString()}</p>
            </div>
        </div>
    );
};

export default LotteryCard;
