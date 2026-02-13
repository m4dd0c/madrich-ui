"use client";

import React from "react";
import { ProfileSelector } from "@/registry/new-york/ui/profile-selector";

const profiles = [
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
    name: "Emily Chen",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
];

const ProfileSelectorDemo = () => {
  return <ProfileSelector profiles={profiles} defaultSelected={3} />;
};

export default ProfileSelectorDemo;
