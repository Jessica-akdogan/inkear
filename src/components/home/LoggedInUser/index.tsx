import { Feature108 } from "@/components/ui/shadcnblocks-feature108";
import ProjectSection from "./ProjectSection";
import {
  featuredProjects,
  myProjects,
  newProjects,
  starredProjects,
} from "@/constants";
import FlickeringGridWrapper from "@/components/auth/FlickeringGridWrapper";
import BackgroundDecor from "@/components/auth/BackgroundDecor";

const LoggedInUser = () => {
  return (
    <div className="mb-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <FlickeringGridWrapper />
      <BackgroundDecor />

      <div className="relative z-10">
        {/* Welcome Message */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <h1 className="section-title">
                Welcome back! 👋
              </h1>
              <p className="section-subtitle max-w-3xl mx-auto">
                Continue your engineering journey and showcase your skills with
                new challenges.
              </p>
            </div>
          </div>
        </section>

     <div className="-mt-[15px]">
         <Feature108 />
     </div>

        <div className="space-y-2">
          <ProjectSection
            title="Featured Projects"
            projects={featuredProjects}
          />
          <ProjectSection 
          title="New Projects"
           projects={newProjects}
            />
          <ProjectSection 
          title="My Projects"
           projects={myProjects} 
           />
          <ProjectSection 
          title="Starred Projects"
           projects={starredProjects}
            />
        </div>
      </div>
    </div>
  );
};

export default LoggedInUser;
