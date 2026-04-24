import CountUp from "react-countup";
import { Fragment } from "react";
import { BookOpen, GraduationCap, School, Users } from "lucide-react";
import { schoolStatsConfig } from "@/lib/homeData";
import type { SchoolStat, StatIconKey } from "@/types/home";

const statsIconMap: Record<StatIconKey, SchoolStat["icon"]> = {
  students: Users,
  teachers: School,
  programs: BookOpen,
  alumni: GraduationCap,
};

const schoolStats: SchoolStat[] = schoolStatsConfig.map((stat) => ({
  label: stat.label,
  value: stat.value,
  icon: statsIconMap[stat.iconKey],
}));

export default function StatsSection() {
  return (
    <div className=" relative w-full bg-slate-900 mt-16 md:mt-24 py-12 md:py-20 bg-[url('https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center bg-fixed">
      {/* Background image dengan overlay */}
      <div className="absolute inset-0 bg-black/70 "></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap justify-center gap-8 md:justify-between text-white text-center">
        {schoolStats.map((stat, index) => (
          <Fragment key={stat.label}>
            <div className="flex flex-col items-center w-32 md:w-auto">
              <stat.icon className="w-7 h-7 md:w-8 md:h-8 mb-3 text-white/90" aria-hidden="true" />
              <CountUp start={0} end={stat.value} duration={2.5} separator="," className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg" />
              <span className="uppercase text-xs md:text-sm font-semibold mt-2 tracking-wider">{stat.label}</span>
            </div>

            {index < schoolStats.length - 1 && <div className="hidden md:block w-px bg-white/30 self-stretch"></div>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
