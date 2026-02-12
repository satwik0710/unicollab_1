import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ArrowLeft,
  Calendar,
  Users,
  Briefcase,
  Clock,
  Send,
  Share2,
  Bookmark,
} from "lucide-react";
import { mockProjects } from "@/data/mockData";
import { toast } from "sonner";
import { useState } from "react";

const typeColors: Record<string, string> = {
  capstone: "bg-primary/10 text-primary",
  startup: "bg-accent/10 text-accent",
  research: "bg-success/10 text-success",
  hackathon: "bg-warning/10 text-warning",
  club: "bg-secondary text-secondary-foreground",
  other: "bg-muted text-muted-foreground",
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = mockProjects.find((p) => p.id === id);
  const [applicationMessage, setApplicationMessage] = useState("");
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="container mx-auto px-4 pt-24">
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">Project not found</p>
            <Button asChild className="mt-4">
              <Link to="/feed">Back to Feed</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const daysLeft = project.deadline
    ? Math.ceil((new Date(project.deadline).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : null;

  const handleApply = () => {
    toast.success("Application submitted!", {
      description: `You've applied to "${project.title}". The project owner will review your application.`,
    });
    setIsApplyOpen(false);
    setApplicationMessage("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6 -ml-2">
          <Link to="/feed" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Feed
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <div className="flex items-start justify-between mb-4">
                <Badge className={typeColors[project.type]} variant="secondary">
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </Badge>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                {project.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {project.applicants} applicants
                </span>
                {daysLeft !== null && daysLeft > 0 && (
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {daysLeft} days left
                  </span>
                )}
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Posted {new Date(project.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4">
                Required Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Open Roles */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="text-xl font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                Open Roles
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.openRoles.map((role) => (
                  <div
                    key={role}
                    className="p-4 bg-primary/5 border border-primary/20 rounded-xl"
                  >
                    <p className="font-medium text-foreground">{role}</p>
                    <p className="text-sm text-muted-foreground">Position open</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Author Card */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                Project Owner
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center text-primary-foreground font-display font-bold text-xl">
                  {project.author.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{project.author.name}</p>
                  <p className="text-sm text-muted-foreground">{project.author.department}</p>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View Profile
              </Button>
            </div>

            {/* Apply CTA */}
            <div className="bg-gradient-hero rounded-2xl border border-primary/20 p-6">
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                Interested in this project?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Apply now and join an amazing team
              </p>
              <Dialog open={isApplyOpen} onOpenChange={setIsApplyOpen}>
                <DialogTrigger asChild>
                  <Button variant="hero" className="w-full">
                    <Send className="w-4 h-4" />
                    Apply Now
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="text-xl font-display">
                      Apply to {project.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 mt-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Introduce yourself and explain why you'd be a great fit:
                      </p>
                      <Textarea
                        rows={5}
                        placeholder="Hi! I'm excited about this project because..."
                        value={applicationMessage}
                        onChange={(e) => setApplicationMessage(e.target.value)}
                      />
                    </div>
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setIsApplyOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button variant="hero" className="flex-1" onClick={handleApply}>
                        Submit Application
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Department */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <p className="text-sm text-muted-foreground">Department</p>
              <p className="font-semibold text-foreground">{project.department}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;
