import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Search, Bell, User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-glow transition-shadow duration-300">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">
              UNI<span className="text-gradient-primary">Colab</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {!isLanding && (
              <>
                <Link
                  to="/feed"
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  Explore
                </Link>
                <Link
                  to="/feed"
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  Projects
                </Link>
                <Link
                  to="/profile"
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                >
                  My Passport
                </Link>
              </>
            )}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            {isLanding ? (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/feed">Sign In</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/feed">Get Started</Link>
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" size="icon">
                  <Search className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
                </Button>
                <Link to="/profile">
                  <div className="w-9 h-9 bg-gradient-primary rounded-full flex items-center justify-center cursor-pointer hover:shadow-glow transition-shadow">
                    <User className="w-4 h-4 text-primary-foreground" />
                  </div>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background animate-slide-in-right">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {isLanding ? (
              <>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link to="/feed">Sign In</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/feed">Get Started</Link>
                </Button>
              </>
            ) : (
              <>
                <Link
                  to="/feed"
                  className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Explore
                </Link>
                <Link
                  to="/feed"
                  className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </Link>
                <Link
                  to="/profile"
                  className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  My Passport
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
