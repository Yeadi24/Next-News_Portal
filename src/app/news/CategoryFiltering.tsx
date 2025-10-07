import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface CategoryChangeProps {
  onCategoryChange: (category: string) => void;
}
const CategoryFiltering = ({ onCategoryChange }: CategoryChangeProps) => {
  const categories = ["all", "health", "tech", "sports", "business"];
  return (
    <div className="flex gap-2 items-center justify-center mx-4">
      <h3 className="font-bold text-lg mb-2">Filter By Category:</h3>
      <Select
        onValueChange={(value) =>
          onCategoryChange(value === "all" ? "" : value)
        }
      >
        <SelectTrigger className="w-[180px] capitalize">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          {categories.map((category) => (
            <SelectItem className="capitalize" key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFiltering;
