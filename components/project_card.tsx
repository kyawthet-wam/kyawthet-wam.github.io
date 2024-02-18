import { FileVideo2, Link, LucideIcon, Play, Videotape } from "lucide-react";
import { Project } from "@/types/definitions";
import { Photos } from "./photos";
import { Video } from "./videos";

export function ProjectCard({ project }: { project: Project }) {

  const showVideo = (video: string) => {
    const show:any = document.getElementById(video) as HTMLElement;

        if(show) {
          show.showModal();
        }
  }

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
        <div className="card-actions flex items-center justify-start pt-2">
          {project.photos == null ? null : <Photos key={project.photos.toString()} title={project.title} photos={project.photos} />}
          {project.video == null ? null : <Video key={project.video} title={project.title} video={project.video} />}
          {/* {project.video == null ? null : (
            <button onClick={() => showVideo(project?.video)} className="btn btn-sm btn-outline border-slate-300 hover:border-none hover:bg-blue-200 hover:text-sky-600  rounded-sm h-2 items-center  text-sky-600 font-bold text-xs">
              <FileVideo2 size={16} />
              Video
            </button>
          )} */}
          <div className="flex ml-auto space-x-3">
            <Platform
              name="Play Store"
              link={project.playStoreLink}
              icon={Play}
            />
            <Platform
              name="App Store"
              link={project.appStoreLink}
              icon={Link}
            />
            <Platform name="Web" link={project.webLink} icon={Link} />
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
        <div className="flex space-x-1 items-center text-sky-600 font-bold text-sm">
          <Icon size={iconsize} />
          <div>{name}</div>
        </div>
      )}
    </a>
  );
}
