import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SkillBadge from "@/components/profile/SkillBadge";
import PortfolioCard from "@/components/profile/PortfolioCard";
import {
  Mail,
  GraduationCap,
  Calendar,
  CheckCircle,
  Edit3,
  Plus,
  Save,
  X,
} from "lucide-react";
import { currentUser, allSkills } from "@/data/mockData";
import { toast } from "sonner";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(currentUser.bio || "");
  const [skills, setSkills] = useState(currentUser.skills);
  const [showSkillPicker, setShowSkillPicker] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    toast.success("Profile updated!", {
      description: "Your Digital Passport has been saved.",
    });
  };

  const handleAddSkill = (skill: string) => {
    if (!skills.includes(skill) && skills.length < 10) {
      setSkills([...skills, skill]);
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Header Section */}
        <div className="relative mb-8">
          {/* Cover */}
          <div className="h-48 md:h-56 bg-gradient-primary rounded-3xl" />

          {/* Profile Info */}
          <div className="absolute -bottom-20 left-6 md:left-10 flex items-end gap-6">
            <div className="w-32 h-32 md:w-40 md:h-40 bg-card rounded-2xl border-4 border-background shadow-xl flex items-center justify-center">
              <span className="text-5xl md:text-6xl font-display font-bold text-gradient-primary">
                {currentUser.name.charAt(0)}
              </span>
            </div>
          </div>

          {/* Edit Button */}
          <div className="absolute top-4 right-4">
            {isEditing ? (
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                  <X className="w-4 h-4" />
                  Cancel
                </Button>
                <Button variant="hero" size="sm" onClick={handleSave}>
                  <Save className="w-4 h-4" />
                  Save
                </Button>
              </div>
            ) : (
              <Button variant="glass" size="sm" onClick={() => setIsEditing(true)}>
                <Edit3 className="w-4 h-4" />
                Edit Profile
              </Button>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-24 grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Name & Basic Info */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-display font-bold text-foreground">
                  {currentUser.name}
                </h1>
                {currentUser.verified && (
                  <CheckCircle className="w-6 h-6 text-success" />
                )}
              </div>

              <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  {currentUser.department}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {currentUser.year}
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {currentUser.email}
                </span>
              </div>

              {/* Bio */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">About</h3>
                {isEditing ? (
                  <Textarea
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    rows={3}
                    placeholder="Tell others about yourself..."
                    className="resize-none"
                  />
                ) : (
                  <p className="text-foreground leading-relaxed">
                    {bio || "No bio added yet."}
                  </p>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-display font-semibold text-foreground">
                  Skills & Expertise
                </h2>
                {isEditing && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowSkillPicker(!showSkillPicker)}
                  >
                    <Plus className="w-4 h-4" />
                    Add Skill
                  </Button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <SkillBadge
                    key={skill}
                    skill={skill}
                    editable={isEditing}
                    onRemove={() => handleRemoveSkill(skill)}
                  />
                ))}
              </div>

              {/* Skill Picker */}
              {isEditing && showSkillPicker && (
                <div className="mt-4 p-4 bg-secondary/30 rounded-xl border border-border">
                  <p className="text-sm text-muted-foreground mb-3">
                    Click to add skills:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {allSkills
                      .filter((s) => !skills.includes(s))
                      .slice(0, 15)
                      .map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="cursor-pointer hover:bg-primary/10 transition-colors"
                          onClick={() => handleAddSkill(skill)}
                        >
                          + {skill}
                        </Badge>
                      ))}
                  </div>
                </div>
              )}
            </div>

            {/* Portfolio */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-display font-semibold text-foreground">
                  Portfolio
                </h2>
                {isEditing && (
                  <Button variant="outline" size="sm">
                    <Plus className="w-4 h-4" />
                    Add Project
                  </Button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {currentUser.portfolio.map((item) => (
                  <PortfolioCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Actions */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                Profile Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Profile Views</span>
                  <span className="font-semibold text-foreground">128</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Projects Applied</span>
                  <span className="font-semibold text-foreground">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Connections</span>
                  <span className="font-semibold text-foreground">24</span>
                </div>
              </div>
            </div>

            {/* Verification Status */}
            <div className="bg-gradient-hero rounded-2xl border border-primary/20 p-6">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-success" />
                <h3 className="text-lg font-display font-semibold text-foreground">
                  Verified Student
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Your university email has been verified. You have full access to all platform features.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h3 className="text-lg font-display font-semibold text-foreground mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  📤 Share Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  📥 Download Passport
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  🔗 Connect LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
