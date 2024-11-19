"use client";
import { cn, Switch } from "@nextui-org/react";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
    const [isSelected, setIsSelected] = useState(false);

    useEffect(() => {
        if (!isSelected) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isSelected]);

    return (
        <Switch
            isSelected={isSelected}
            onValueChange={setIsSelected}
            size="lg"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <MdWbSunny className={`text-black`} />
                ) : (
                    <FaMoon className={`text-black`} />
                )
            }
        >
        </Switch>
    );
}
