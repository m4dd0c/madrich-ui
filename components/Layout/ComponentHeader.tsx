"use client"
import Link from "next/link";
import { Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Mode, SearchBar, Social } from "./Header";



const ComponentHeader = () => {
    return (
        <div className="w-full h-18 border-y-2 flex items-center border-y-black">
            <div className="w-[95rem] mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">Components</h1>
                <SearchBar className="w-[500px]"/>
                <div className="flex space-x-6">
                    <Social />
                    <Mode />
                </div>
            </div>
        </div>
    );
};

export default ComponentHeader;