import {
  Computer,
  FileVideo2,
  Link,
  LucideIcon,
  Play,
  Videotape,
} from "lucide-react";
import { Project } from "@/types/definitions";
import { Photos } from "./photos";
import { Video } from "./videos";

export function ProjectCard({ project }: { project: Project }) {
  const showVideo = (video: string) => {
    const show: any = document.getElementById(video) as HTMLElement;

    if (show) {
      show.showModal();
    }
  };

  return (
    <div className="card shadow-xl">
      <figure>
        <img src={project.image} alt="Image" />
      </figure>
      <div className="card-body p-4">
        <div className="card-title text-sm font-bold text-slate-800">
          {project.title}
        </div>
        <div className="text-xs text-slate-500 font-semibold">
          {project.description}
        </div>
        <div className="card-actions flex flex-col justify-start pt-2">
          <div className="flex w-full justify-between items-center mb-2">
            <div>
              {project.photos == null ? null : (
                <Photos
                  key={project.photos.toString()}
                  title={project.title}
                  photos={project.photos}
                />
              )}
              {project.video == null ? null : (
                <Video
                  key={project.video}
                  title={project.title}
                  video={project.video}
                />
              )}
            </div>

            <div className="hidden sm:flex items-center space-x-3">
              {project.playStoreLink && (
                <Platform
                  name="Play Store"
                  link={project.playStoreLink}
                  icon={Play}
                />
              )}
              {project.appStoreLink && (
                <Platform
                  name="App Store"
                  link={project.appStoreLink}
                  icon={Link}
                />
              )}
              {project.webLink && (
                <Platform name="Web" link={project.webLink} icon={Link} />
              )}
              {project.inDevelopment && <Development icon={Computer} />}
            </div>
          </div>

          <div className="pl-2 sm:hidden">
            <div className="flex ml-auto space-x-3">
              {project.playStoreLink && (
                <Platform
                  name="Play Store"
                  link={project.playStoreLink}
                  icon={Play}
                />
              )}
              {project.appStoreLink && (
                <Platform
                  name="App Store"
                  link={project.appStoreLink}
                  icon={Link}
                />
              )}
              {project.webLink && (
                <Platform name="Web" link={project.webLink} icon={Link} />
              )}
              {project.inDevelopment && <Development icon={Computer} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Platform({
  link,
  icon: Icon,
  iconsize = 16,
  name,
}: {
  link?: string;
  icon: LucideIcon;
  iconsize?: number;
  name: string;
}) {
  return (
    <a href={link} target="_blank">
      {link == null ? null : (
        <div className="flex space-x-1 items-center text-[#083f99] font-bold text-sm">
          <Icon size={iconsize} />
          <div className="text-xs">{name}</div>
        </div>
      )}
    </a>
  );
}

function Development({
  icon: Icon,
  iconsize = 16,
}: {
  icon: LucideIcon;
  iconsize?: number;
}) {
  return (
    <div className="flex space-x-1 items-center text-[#083f99] font-bold text-sm">
      <Icon size={iconsize} />
      <div className="text-xs">Under Development</div>
    </div>
  );
}
