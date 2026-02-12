import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Rocket } from "lucide-react";
import { projectTypes, allSkills, departments } from "@/data/mockData";
import { toast } from "sonner";

interface CreatePostModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (postData: any) => void;
}

const CreatePostModal = ({ open, onClose, onSubmit }: CreatePostModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [department, setDepartment] = useState("");
  const [type, setType] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [newRole, setNewRole] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleAddRole = () => {
    if (newRole.trim() && !roles.includes(newRole.trim())) {
      setRoles([...roles, newRole.trim()]);
      setNewRole("");
    }
  };

  const handleRemoveRole = (role: string) => {
    setRoles(roles.filter((r) => r !== role));
  };

  const handleSkillToggle = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill));
    } else if (selectedSkills.length < 6) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      title,
      description,
      department,
      type,
      skills: selectedSkills,
      openRoles: roles,
      deadline,
    });

    toast.success("Project posted successfully!", {
      description: "Your opportunity is now visible to other students.",
    });

    // Reset form
    setTitle("");
    setDescription("");
    setDepartment("");
    setType("");
    setSelectedSkills([]);
    setRoles([]);
    setDeadline("");

    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display flex items-center gap-2">
            <Rocket className="w-6 h-6 text-primary" />
            Post New Opportunity
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Project Title *</Label>
            <Input
              id="title"
              placeholder="e.g., AI-Powered Study Assistant"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              placeholder="Describe your project and what kind of help you're looking for..."
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          {/* Department & Type */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Department *</Label>
              <Select value={department} onValueChange={setDepartment} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.slice(1).map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Project Type *</Label>
              <Select value={type} onValueChange={setType} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.slice(1).map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            <Label>Required Skills (max 6)</Label>
            <div className="flex flex-wrap gap-2 p-3 border border-border rounded-lg bg-secondary/30">
              {allSkills.slice(0, 20).map((skill) => (
                <Badge
                  key={skill}
                  variant={selectedSkills.includes(skill) ? "default" : "secondary"}
                  className={`cursor-pointer transition-all ${selectedSkills.includes(skill)
                      ? "bg-primary hover:bg-primary/90"
                      : "hover:bg-primary/10"
                    }`}
                  onClick={() => handleSkillToggle(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Open Roles */}
          <div className="space-y-2">
            <Label>Open Roles *</Label>
            <div className="flex gap-2">
              <Input
                placeholder="e.g., Frontend Developer"
                value={newRole}
                onChange={(e) => setNewRole(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), handleAddRole())}
              />
              <Button type="button" variant="outline" onClick={handleAddRole}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {roles.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {roles.map((role) => (
                  <Badge key={role} variant="secondary" className="gap-1 py-1">
                    {role}
                    <X
                      className="w-3 h-3 cursor-pointer hover:text-destructive"
                      onClick={() => handleRemoveRole(role)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Deadline */}
          <div className="space-y-2">
            <Label htmlFor="deadline">Application Deadline (optional)</Label>
            <Input
              id="deadline"
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" variant="hero" className="flex-1">
              Post Opportunity
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostModal;
