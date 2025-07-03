import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types";
import ProjectSwiper from "./ProjectSwiper";

interface ProjectSectionProps {
  title: string;
  projects: Project[];
  showSeeAll?: boolean;
}

const ProjectSection = ({
  title,
  projects,
  showSeeAll = true,
}: ProjectSectionProps) => {
  return (
    <section className="py-6 sm:py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-2xl font-sora font-bold text-gray-900">
            {title}
          </h2>
          {showSeeAll && (
            <Button
              variant="ghost"
              className="text-sm sm:text-base text-inkaer-blue hover:text-inkaer-dark-blue font-sora font-semibold"
            >
              See All
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-4 ml-1" />
            </Button>
          )}
        </div>

        <ProjectSwiper projects={projects} />
      </div>
    </section>
  );
};

export default ProjectSection;
