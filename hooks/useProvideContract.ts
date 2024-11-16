"use client"
import {
  getContract,
} from "thirdweb";
import { defineChain } from "thirdweb/chains";
import { client } from "@/app/client"
import { CHAIN, WEEN_CONTRACT_ADDRESS } from "@/utils/constants";


const useProvideContract = () => {
  const contract = getContract({
    client,
    chain: defineChain(CHAIN),
    address: WEEN_CONTRACT_ADDRESS,
  });

  return { contract };
}

export default useProvideContract;