import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface SkillBadgeProps {
  skill: string;
  onRemove?: () => void;
  editable?: boolean;
}

const SkillBadge = ({ skill, onRemove, editable = false }: SkillBadgeProps) => {
  return (
    <Badge
      variant="secondary"
      className="py-1.5 px-3 text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
    >
      {skill}
      {editable && onRemove && (
        <X
          className="w-3 h-3 ml-1 cursor-pointer hover:text-destructive transition-colors"
          onClick={onRemove}
        />
      )}
    </Badge>
  );
};

export default SkillBadge;
