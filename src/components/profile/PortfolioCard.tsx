import { PortfolioItem } from "@/types";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Folder } from "lucide-react";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <div className="group bg-card rounded-2xl border border-border p-5 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
      {/* Icon/Image */}
      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <Folder className="w-6 h-6 text-primary-foreground" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {item.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Link */}
      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
        >
          View Project
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
};

export default PortfolioCard;
