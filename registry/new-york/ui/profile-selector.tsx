"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ProfileSelectorProps {
  profiles: { name: string; image: string }[];
  defaultSelected?: number;
  onSelect?: (profile: { name: string; image: string }) => void;
  className?: string;
}

function ProfileSelector({
  profiles,
  defaultSelected = 0,
  onSelect,
  className,
}: ProfileSelectorProps) {
  const safeIndex = defaultSelected < profiles.length ? defaultSelected : 0;
  const [selected, setSelected] = React.useState(profiles[safeIndex]);

  const handleSelect = (profile: { name: string; image: string }) => {
    setSelected(profile);
    onSelect?.(profile);
  };

  return (
    <div className={cn("w-[300px]", className)}>
      {/* Selected Profile Display */}
      <div className="w-full outline-2 outline-hero flex gap-3 items-center rounded-sm justify-start pl-4 h-11 bg-background border-2 border-foreground transition-all duration-200">
        <div className="h-8 w-8 border-2 border-foreground rounded-full overflow-hidden">
          <img
            src={selected.image}
            alt={selected.name}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <h1 className="font-medium">{selected.name}</h1>
      </div>

      {/* Profile List */}
      <div
        className="w-full mt-2 grid grid-cols-1 shadow-neo rounded-sm bg-background border-2 border-foreground overflow-hidden"
        style={{ gridTemplateRows: `repeat(${profiles.length}, 1fr)` }}
      >
        {profiles.map((profile) => (
          <ProfileItem
            key={profile.name}
            name={profile.name}
            image={profile.image}
            isSelected={selected.name === profile.name}
            onSelect={() => handleSelect(profile)}
          />
        ))}
      </div>
    </div>
  );
}

function ProfileItem({
  name,
  image,
  isSelected,
  onSelect,
}: {
  name: string;
  image: string;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <div
      onClick={onSelect}
      className={cn(
        "w-full flex items-center p-2 gap-3 cursor-pointer transition-all duration-150 hover:bg-hero/30",
        isSelected && "bg-hero",
      )}
    >
      <div className="h-8 w-8 border-2 border-foreground rounded-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full rounded-full object-cover object-top"
        />
      </div>
      <h1 className={isSelected ? "font-semibold" : ""}>{name}</h1>
    </div>
  );
}

export { ProfileSelector, ProfileItem };
