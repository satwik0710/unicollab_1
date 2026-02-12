import { useState, useMemo } from "react";
import Navbar from "@/components/layout/Navbar";
import FilterBar from "@/components/feed/FilterBar";
import ProjectCard from "@/components/feed/ProjectCard";
import CreatePostModal from "@/components/feed/CreatePostModal";
import { mockProjects, currentUser } from "@/data/mockData";
import { Project } from "@/types";

const Feed = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedType, setSelectedType] = useState("all");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [projects, setProjects] = useState<Project[]>(mockProjects);

  const handleCreatePost = (postData: any) => {
    const newProject: Project = {
      id: Date.now().toString(),
      ...postData,
      author: {
        id: currentUser.id,
        name: currentUser.name,
        department: currentUser.department,
      },
      applicants: 0,
      createdAt: new Date().toISOString().split('T')[0],
      status: "open",
    };
    setProjects([newProject, ...projects]);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower) ||
        project.skills.some((s) => s.toLowerCase().includes(searchLower)) ||
        project.openRoles.some((r) => r.toLowerCase().includes(searchLower));

      // Department filter
      const matchesDepartment =
        selectedDepartment === "All Departments" ||
        project.department === selectedDepartment;

      // Type filter
      const matchesType = selectedType === "all" || project.type === selectedType;

      return matchesSearch && matchesDepartment && matchesType;
    });
  }, [projects, searchQuery, selectedDepartment, selectedType]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
            Opportunity Marketplace
          </h1>
          <p className="text-lg text-muted-foreground">
            Discover projects looking for talent like you
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar
          onSearch={setSearchQuery}
          onDepartmentChange={setSelectedDepartment}
          onTypeChange={setSelectedType}
          onCreatePost={() => setIsCreateModalOpen(true)}
        />

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> opportunities
          </p>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-4">No projects found</p>
            <p className="text-muted-foreground">Try adjusting your filters or search query</p>
          </div>
        )}
      </main>

      {/* Create Post Modal */}
      <CreatePostModal
        open={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSubmit={handleCreatePost}
      />
    </div>
  );
};

export default Feed;
