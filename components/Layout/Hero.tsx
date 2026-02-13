"use client";

import { Button } from "@/registry/new-york/ui/button";
import { CircleX, CodeXml, Link2, Plus, Search, X } from "lucide-react";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar";
import { FcApproval } from "react-icons/fc";
import ProgressDemo from "@/renders/component/ProgressDemo";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { Textarea } from "@/registry/new-york/ui/textarea";
import { AvatarGroupCountExample } from "@/renders/component/AvatarDemo";
import { InputWithLabelDemo } from "@/renders/component/InputDemo";
import { IoIosAlert } from "react-icons/io";
import { ProfileSelector } from "@/registry/new-york/ui/profile-selector";
import { CreatorCard } from "./CreatorCard";
import TooltipCardDemo from "@/renders/component/TooltipCardDemo";

const profiles_mh = [
  {
    name: "Sarah Wilson",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    name: "James Miller",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
  },
  {
    name: "Emily Davis",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    name: "Michael Brown",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    name: "Jessica Taylor",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
  },
  {
    name: "David Anderson",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
  },
];

const Hero = () => {
  return (
    <>
      <div className="relative font-grotesk flex justify-between h-screen w-full mask-b-from-90% overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col gap-3 pl-20 justify-between w-[60%]">
          <div className="flex flex-col gap-4 mt-40">
            <h1 className="text-6xl font-bold leading-[1.4] tracking-wide">
              <span className="border-4 border-foreground bg-hero p-2 px-4 shadow-[8px_8px_0px_0px_var(--foreground)] inline-block transition-all duration-200 hover:shadow-[16px_16px_0px_0px_var(--foreground)] hover:-translate-y-2 hover:-translate-x-2 hover:-rotate-2 hover:bg-[#FFC900] cursor-pointer active:translate-x-0 active:translate-y-0 active:shadow-none active:rotate-0 animate-[neoBrutalBounce_0.6s_ease-out_0.3s_1]">
                Neo-Brutal
              </span>{" "}
              UI for <br /> Bold Builders.
            </h1>
            <p className="text-lg leading-[1.5]">
              A neo-brutalist UI library for{" "}
              <span className="font-bold text-hero">developers</span> who hate
              boring design. <br />
              Sharp borders, bold colors, zero fluff — just{" "}
              <span className="font-bold text-hero">components</span> that stand
              out.
            </p>
            <div className="mt-5">
              <button className="border-2 border-foreground p-2 px-4 font-semibold bg-hero shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150">
                <Link href="/components/accordion">Browse Components</Link>
              </button>
            </div>
          </div>

          {/* Bottom Left Avatars */}
          <div className="flex justify-between items-center mr-16">
            <CreatorCard />

            <div className="flex flex-col gap-8">
              <AvatarGroupCountExample />
              <InputWithLabelDemo />
              <div className="w-[300px] h-20 flex items-center justify-between p-6 border-2 bg-[#E9DCFE] rounded-sm rounded-b-none border-b-0 border-hero cursor-pointer">
                <div className="flex gap-2 items-center">
                  <IoIosAlert className="size-6 text-black" />
                  <h2 className="font-semibold text-black text-lg">
                    Information
                  </h2>
                </div>
                <X className="size-6 text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[40%] flex flex-col gap-6">
          {/* Badges Row */}
          <div className="flex gap-5 justify-between">
            <div className="flex mt-24 h-10 gap-5">
              <button className="border border-foreground p-1 px-5 font-semibold bg-[#FFC900] rounded-sm shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150">
                Badge
              </button>
              <button className="border border-foreground p-1 px-5 font-semibold bg-[#11A365] rounded-lg shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150">
                Badge
              </button>
              <button className="border border-foreground p-1 px-5 font-semibold bg-[#FF7051] rounded-full shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150">
                Badge
              </button>
            </div>
            <div className="flex items-center justify-center gap-4 mt-15 h-20 w-[400px] border-2 border-foreground border-r-0 rounded-sm shadow-neo rounded-br-none bg-card-alt hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150">
              <Link
                href="#"
                className="flex items-center gap-2 underline underline-offset-2"
              >
                <Link2 />
                Copy link
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 underline underline-offset-2"
              >
                <CodeXml />
                Get embed code
              </Link>
            </div>
          </div>

          {/* Buttons Row */}
          <div className="flex justify-between">
            <Button className="w-[220px] rounded-sm h-11 text-lg shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150">
              Button CTA
            </Button>
            <Button className="w-[220px] rounded-sm h-11 bg-background text-lg shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150">
              Button CTA
            </Button>
            <Button className="w-[220px] rounded-sm h-11 bg-[#11A365] text-foreground border-r-0 rounded-r-none text-lg shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150">
              Button CTA
            </Button>
          </div>

          {/* Main Content Area */}
          <div className="flex justify-between mt-5">
            {/* Left Column */}
            <div className="flex flex-col gap-10">
              {/* Tooltip Card */}
              <TooltipCardDemo />

              {/* Search Inputs */}
              <div className="flex gap-4 h-10 w-[400px] border-2 bg-background p-2 border-foreground shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150 focus-within:shadow-none focus-within:translate-x-[5px] focus-within:translate-y-[5px]">
                <Search className="ml-2 size-[18px]" />
                <input
                  className="outline-none bg-transparent"
                  type="text"
                  placeholder="Search"
                />
              </div>

              <div className="flex gap-4 h-10 w-[400px] border-2 outline-3 outline-hero bg-background p-2 border-foreground">
                <Search className="ml-2 size-[18px]" />
                <input
                  className="outline-none bg-transparent"
                  type="text"
                  placeholder="Search"
                />
                <CircleX className="ml-25 size-[18px]" />
              </div>

              {/* Avatars with badges */}
              <div className="relative flex justify-around">
                <div className="absolute top-13 left-21 bg-green-500 text-foreground h-5 w-5 z-10 rounded-full ring-1 ring-background select-none" />
                <FcApproval className="absolute z-10 size-7 top-12 right-40" />
                <div className="absolute bg-hero text-foreground h-5 w-5 z-10 top-13 right-7 rounded-sm ring-1 outline-1 outline-background outline-offset-1 ring-foreground flex items-center justify-center select-none">
                  <Plus className="size-4" />
                </div>

                <Avatar className="outline-foreground size-18">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="outline-foreground size-18">
                  <AvatarImage
                    src="https://i.pinimg.com/736x/3c/f2/0f/3cf20fb883610c063ecf936fbc4e4235.jpg"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="outline-foreground size-18">
                  <AvatarImage
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1k2CGi9bJc7c0iQONfI4v1MYsBJe-Nlwntg&s"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>

              <ProgressDemo />

              {/* Tag Chips */}
              <div className="flex h-10 gap-5">
                <div className="flex items-center gap-3 border border-foreground w-[120px] p-1 px-2 font-semibold bg-[#FFC900] rounded-sm shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150 cursor-pointer">
                  <div className="h-7 w-7 border-2 border-foreground rounded-sm">
                    <Image
                      src="/image/icon.jfif"
                      alt="@shadcn"
                      width={100}
                      height={100}
                      className="h-full w-full rounded-[4px] object-fill"
                    />
                  </div>
                  <h2>Orla</h2>
                  <X className="size-4" />
                </div>
                <div className="flex items-center gap-3 border border-foreground w-[120px] p-1 px-2 font-semibold bg-[#11A365] rounded-lg shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150 cursor-pointer">
                  <div className="h-7 w-7 border-2 border-foreground rounded-md">
                    <Image
                      src="/image/icon2.jpg"
                      alt="@shadcn"
                      width={100}
                      height={100}
                      className="h-full w-full rounded-sm object-cover"
                    />
                  </div>
                  <h2>Orla</h2>
                  <X className="size-4" />
                </div>
                <div className="flex items-center gap-3 border border-foreground w-[120px] p-1 px-2 font-semibold bg-[#FF7051] rounded-full shadow-neo hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150 cursor-pointer">
                  <div className="h-7 w-7 border-2 border-foreground rounded-full">
                    <Image
                      src="/image/icon3.jfif"
                      alt="@shadcn"
                      width={100}
                      height={100}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  <h2>Orla</h2>
                  <X className="size-4" />
                </div>
              </div>

              {/* Notification Card */}
              <div className="w-[400px] p-4 bg-background flex gap-4 h-30 shadow-neo rounded-sm border-2 border-foreground hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150 cursor-pointer">
                <div className="h-11 w-11 border-2 border-foreground rounded-full">
                  <Image
                    src="/image/icon4.jpg"
                    alt="@shadcn"
                    width={100}
                    height={100}
                    className="h-full w-full rounded-full object-cover object-top"
                  />
                </div>
                <div>
                  <h2>John Snow</h2>
                  <p className="text-sm text-muted-neo">
                    Sent you an invite to connect
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {/* Google Sign In */}
              <div className="w-[300px] flex gap-3 items-center justify-center h-12 bg-background shadow-neo border-2 border-r-0 border-foreground hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-150 cursor-pointer">
                <FaGoogle className="size-6" />
                <h2 className="font-semibold">Sign in with Google</h2>
              </div>

              {/* Profile Selector */}
              <ProfileSelector
                profiles={profiles_mh}
                defaultSelected={3}
                className="w-[300px]"
              />

              <Textarea
                className="w-[300px] border-r-0 bg-background"
                placeholder="What are your thoughts on Madrich UI?"
              />

              {/* Stats Card */}
              <div className="w-[300px] flex flex-col justify-center items-start pl-5 gap-2 h-30 border-2 border-foreground border-r-0 border-b-0  bg-background hover:bg-hero/10 transition-all duration-150">
                <h2 className="text-md text-foreground/70">Total Income</h2>
                <h2 className="text-4xl font-semibold">$129,000.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
