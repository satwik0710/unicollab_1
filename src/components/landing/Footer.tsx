import { Link } from "react-router-dom";
import { GraduationCap, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold">UNI Colab</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Transforming universities from isolated departments into unified innovation networks. Where talent, ideas, and projects flow freely.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link to="/feed" className="hover:text-primary-foreground transition-colors">Explore Projects</Link></li>
              <li><Link to="/profile" className="hover:text-primary-foreground transition-colors">Digital Passport</Link></li>
              <li><Link to="/feed" className="hover:text-primary-foreground transition-colors">Post Opportunity</Link></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">For Admins</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>© 2026 UNI Colab. Built for students, by students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
