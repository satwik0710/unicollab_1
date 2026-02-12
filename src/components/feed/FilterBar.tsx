import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Plus, SlidersHorizontal } from "lucide-react";
import { departments, projectTypes } from "@/data/mockData";

interface FilterBarProps {
  onSearch: (query: string) => void;
  onDepartmentChange: (dept: string) => void;
  onTypeChange: (type: string) => void;
  onCreatePost: () => void;
}

const FilterBar = ({
  onSearch,
  onDepartmentChange,
  onTypeChange,
  onCreatePost,
}: FilterBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="bg-card rounded-2xl border border-border p-4 mb-6 sticky top-20 z-40">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Search */}
        <form onSubmit={handleSearch} className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search projects, skills, or roles..."
            className="pl-10 h-11"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              onSearch(e.target.value);
            }}
          />
        </form>

        {/* Filters */}
        <div className="flex gap-3 flex-wrap">
          <Select onValueChange={onDepartmentChange} defaultValue="All Departments">
            <SelectTrigger className="w-[160px] h-11">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              {departments.map((dept) => (
                <SelectItem key={dept} value={dept}>
                  {dept}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={onTypeChange} defaultValue="all">
            <SelectTrigger className="w-[140px] h-11">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon" className="h-11 w-11">
            <SlidersHorizontal className="w-5 h-5" />
          </Button>

          <Button variant="hero" className="h-11" onClick={onCreatePost}>
            <Plus className="w-5 h-5" />
            Post Opportunity
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
