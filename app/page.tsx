import { projects, works, dover } from "@/types/definitions";
import { Footer } from "@/components/footer";
import { WorkTile } from "@/components/work_tile";
import { SkillBadge } from "@/components/skill_badge";
import { Suspense, useState } from "react";
import { CardSkeleton, ProfileSkeleton } from "@/components/skeleton";
import NavBar from "@/components/nav_bar";
import { ProfileImage } from "../components/profile_image";
import { Projects } from "../components/projects";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="m-10">
        {/* laptop size */}
        <div className="hidden lg:grid grid-cols-12 gap-3 items-center">
          <div className="mr-2 lg:col-span-7">
            <div
              id="about"
              className="relative text-2xl text-[#083f99] font-bold pt-10"
            >
              About Me
            </div>
            <div className="relative text-sm text-slate-500 font-semibold pt-2">
              I am Kyaw Thet Wam, Mobile Developer from Mandalay, Myanmar.
            </div>
            <div className="max-w-5xl text-justify text-slate-600 text-sm whitespace-normal py-8">
              Experienced mobile developer with a proven track record of
              creating polished cross-platform mobile applications using
              Flutter. With three plus years of hands-on experience, I am able
              to deliver high-quality, performant apps for both iOS and Android.
              My focus on clean code, efficient UI/UX design, and collaboration
              with cross-functional teams has consistently contributed to
              successful project outcomes. My dedication to staying updated with
              industry trends ensures I utilize the latest tools and techniques.
              With a passion for crafting exceptional user experiences, I am
              committed to contributing to your mobile app projects&apos;
              success.
            </div>
          </div>
          <div className="lg:col-span-5 mx-auto">
            <Suspense fallback={<ProfileSkeleton />}>
              <ProfileImage />
            </Suspense>
          </div>
        </div>

        {/* tablet and mobile size */}
        <div className="flex flex-col-reverse lg:hidden gap-3 items-center">
          <div className="mr-2">
            <div
              id="about"
              className="relative text-2xl text-[#083f99] font-bold pt-10"
            >
              About Me
            </div>
            <div className="relative text-sm text-slate-500 font-semibold pt-2">
              I am Kyaw Thet Wam, Mobile Developer from Mandalay, Myanmar.
            </div>
            <div className="max-w-5xl text-justify text-slate-600 text-sm whitespace-normal py-8">
              Experienced mobile developer with a proven track record of
              creating polished cross-platform mobile applications using
              Flutter. With three plus years of hands-on experience, I am able
              to deliver high-quality, performant apps for both iOS and Android.
              My focus on clean code, efficient UI/UX design, and collaboration
              with cross-functional teams has consistently contributed to
              successful project outcomes. My dedication to staying updated with
              industry trends ensures I utilize the latest tools and techniques.
              With a passion for crafting exceptional user experiences, I am
              committed to contributing to your mobile app projects&apos;
              success.
            </div>
          </div>
          <div className="mx-auto">
            <Suspense fallback={<ProfileSkeleton />}>
              <ProfileImage />
            </Suspense>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col md:col-span-1 lg:col-span-1 gap-12">
            <div id="education" className="flex flex-col gap-2">
              <div className="relative text-xl text-[#083f99] font-semibold">
                Education
              </div>
              <div className="relative text-slate-500 font-semibold text-sm">
                B.E. (Hons) in Computer Science<br></br> Myanmar Institute of
                Information Technology
              </div>
            </div>
          </div>

          <div id="skills">
            <div className="relative text-xl text-[#083f99] font-bold mb-3">
              Skills
            </div>

            {/* mobile */}
            <div className="space-y-2 sm:hidden">
              <div className="flex flex-row gap-2">
                <SkillBadge skill="Flutter" />
                <SkillBadge skill="Dart" />
                <SkillBadge skill="Java" />
                <SkillBadge skill="Python" />
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="NextJs" />
                <SkillBadge skill="Firebase" />
                <SkillBadge skill="Html" />
                <SkillBadge skill="CSS" />
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="SQlite" />
                <SkillBadge skill="Git" />
                <SkillBadge skill="Problem Solving" />
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="Communication" />
                <SkillBadge skill="Teamwork" />
              </div>
            </div>

            {/* greater than mobile */}
            <div className="space-y-2 hidden sm:flex flex-col">
              <div className="flex flex-row gap-2">
                <SkillBadge skill="Flutter" />
                <SkillBadge skill="Dart" />
                <SkillBadge skill="Java" />
                <SkillBadge skill="Python" />
                <SkillBadge skill="Spring" />
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="Firebase" />
                <SkillBadge skill="Html" />
                <SkillBadge skill="CSS" />
                <SkillBadge skill="SQlite" />
                <SkillBadge skill="Git" />
              </div>
              <div className="flex flex-row gap-2">
                <SkillBadge skill="Problem Solving" />
                <SkillBadge skill="Communication" />
                <SkillBadge skill="Teamwork" />
              </div>
            </div>
          </div>
        </div>

        <div
          id="experiences"
          className="grid grid-cols-1 lg:grid-cols-[60%_80%] xl:grid-cols-2 gap-10"
        >
          <div className="flex flex-col gap-2 pt-10">
            <div className="relative text-xl text-[#083f99] font-bold">
              Experience
            </div>
            <div className="relative text-slate-500 font-semibold text-sm">
              I have 3+ years of experience in Software Development
            </div>
            <div className="pt-10 space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#083f99] before:to-[#083f99]">
              {works.toReversed().map((work) => (
                <WorkTile key={work.title} work={work} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className="mx-0 p-1 text-center text-white font-sans font-bold text-lg bg-[#083f99]"
      >
        Projects
      </div>
      <Suspense fallback={<CardSkeleton />}>
        <Projects />
      </Suspense>
      <Footer />
    </div>
  );
}
