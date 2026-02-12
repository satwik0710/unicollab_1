import { IdCard, Search, MessageSquare, BarChart3, Palette } from "lucide-react";

const features = [
  {
    icon: IdCard,
    title: "Digital Passport",
    description: "Showcase your skills, portfolio, and achievements beyond GPA. Your dynamic identity on campus.",
    color: "bg-gradient-primary",
  },
  {
    icon: Search,
    title: "Smart Discovery",
    description: "Find the right project in under 30 seconds with powerful filters by department, year, and skills.",
    color: "bg-gradient-accent",
  },
  {
    icon: MessageSquare,
    title: "Collaboration Engine",
    description: "Apply, accept, and track project applications with built-in notifications and status updates.",
    color: "bg-success",
  },
  {
    icon: BarChart3,
    title: "Admin Analytics",
    description: "Insights into campus collaboration trends, popular skills, and cross-department connections.",
    color: "bg-warning",
  },
  {
    icon: Palette,
    title: "Inclusive Design",
    description: "Mobile-first, accessible platform designed for every student on campus.",
    color: "bg-gradient-primary",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Built for <span className="text-gradient-primary">Real Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Five powerful modules working together to transform how students collaborate across campus.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-gradient-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                🎯 Our Goal: <span className="text-gradient-primary">50% Increase</span> in Cross-Department Projects
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're not just building a website—we're building the connective tissue of your campus. A student body that is more connected, collaborative, and prepared for the real world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
