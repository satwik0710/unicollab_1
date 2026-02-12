import { Project } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Users, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const typeColors: Record<string, string> = {
  capstone: "bg-primary/10 text-primary",
  startup: "bg-accent/10 text-accent",
  research: "bg-success/10 text-success",
  hackathon: "bg-warning/10 text-warning",
  club: "bg-secondary text-secondary-foreground",
  other: "bg-muted text-muted-foreground",
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const daysLeft = project.deadline
    ? Math.ceil((new Date(project.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null;

  return (
    <div className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground font-display font-bold text-lg">
            {project.author.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium text-foreground">{project.author.name}</p>
            <p className="text-sm text-muted-foreground">{project.author.department}</p>
          </div>
        </div>
        <Badge className={typeColors[project.type]} variant="secondary">
          {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
        </Badge>
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground mb-4 line-clamp-2">
        {project.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.skills.slice(0, 4).map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
        {project.skills.length > 4 && (
          <Badge variant="secondary" className="text-xs">
            +{project.skills.length - 4}
          </Badge>
        )}
      </div>

      {/* Open Roles */}
      <div className="mb-4">
        <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-1">
          <Briefcase className="w-4 h-4" />
          Looking for:
        </p>
        <div className="flex flex-wrap gap-2">
          {project.openRoles.map((role) => (
            <span
              key={role}
              className="text-xs px-2 py-1 bg-primary/5 text-primary rounded-md border border-primary/20"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {project.applicants} applied
          </span>
          {daysLeft !== null && daysLeft > 0 && (
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {daysLeft} days left
            </span>
          )}
        </div>
        <Button variant="ghost" size="sm" className="group/btn" asChild>
          <Link to={`/project/${project.id}`}>
            View
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProjectCard;
