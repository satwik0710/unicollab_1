import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-mesh">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Cards */}
      <div className="absolute hidden lg:block top-32 left-[10%] animate-float">
        <div className="glass-effect rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Team Formed!</p>
              <p className="text-xs text-muted-foreground">3 members joined</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute hidden lg:block bottom-40 right-[12%] animate-float" style={{ animationDelay: "2s" }}>
        <div className="glass-effect rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Project Posted</p>
              <p className="text-xs text-muted-foreground">Looking for designer</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute hidden lg:block top-48 right-[20%] animate-float" style={{ animationDelay: "3s" }}>
        <div className="glass-effect rounded-2xl p-4 shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-success rounded-full flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-success-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Skill Verified</p>
              <p className="text-xs text-muted-foreground">Python · Machine Learning</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">The Campus LinkedIn for Student Collaboration</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 animate-slide-up">
            Where{" "}
            <span className="text-gradient-primary">Ideas</span>
            {" "}Meet{" "}
            <span className="text-gradient-accent">Talent</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Break down department silos. Discover projects. Build teams. Transform your university into a unified innovation network.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/feed" className="group">
                Explore Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/profile">Create Your Passport</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">500+</p>
              <p className="text-sm text-muted-foreground">Active Projects</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-gradient-accent">2.5K</p>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-display font-bold text-foreground">15</p>
              <p className="text-sm text-muted-foreground">Departments</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
