import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select";

import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CircleDashed,
} from "lucide-react";

const SelectDemo = () => {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectDemo;

export function SelectDemo2() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Large List" />
      </SelectTrigger>
      <SelectContent>
        {Array.from({ length: 100 }).map((_, i) => (
          <SelectItem key={i} value={"item-" + i}>
            Item {i}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function SelectDemo3() {
  return (
    <Select disabled>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Disabled" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes" disabled>
          Grapes
        </SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectContent>
    </Select>
  );
}

export function SelectDemo4() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue
          placeholder={
            <>
              <CircleDashed />
              With Icon
            </>
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="line">
          <ChartLineIcon />
          Line
        </SelectItem>
        <SelectItem value="bar">
          <ChartBarIcon />
          Bar
        </SelectItem>
        <SelectItem value="pie">
          <ChartPieIcon />
          Pie
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
