import { useTranslation } from "react-i18next";
import {
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiDotnet,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiSpring,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { useTheme } from "../../context/themecontext";
import { useScrollAnimation } from "../../hooks/UseScrollAnimation";

function Skills() {
  const [ref, isVisible] = useScrollAnimation();
  const { isDark } = useTheme();
  const { t } = useTranslation();

  const skillsData = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "HTML/CSS", icon: FaHtml5, color: "#E34F26" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Java", icon: FaJava, color: "#007396" },
    { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
    { name: "C#", icon: TbBrandCSharp, color: "#239120" },
    { name: ".NET", icon: SiDotnet, color: "#512BD4" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
  ];

  const softSkillsKeys = [
    "adaptation",
    "rigor",
    "teamwork",
    "ethics",
    "confidentiality",
    "english",
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className={`relative min-h-screen py-20 transition-all duration-1000 overflow-hidden ${
        isDark ? "bg-black" : "bg-gray-50"
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Fond avec particules */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-10 ${
            isDark ? "bg-purple-500" : "bg-purple-300"
          }`}
          style={{ top: "10%", right: "10%" }}
        />
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-10 ${
            isDark ? "bg-blue-500" : "bg-blue-300"
          }`}
          style={{ bottom: "10%", left: "10%" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {t("skills.title")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4"></div>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"}`}>
            {t("skills.subtitle")}
          </p>
        </div>

        {/* Grid de compétences avec effet 3D */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className={`group relative p-6 rounded-2xl transition-all duration-300 hover:scale-110 cursor-pointer flex flex-col items-center justify-center backdrop-blur-sm ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"
                  : "bg-white shadow-md hover:shadow-2xl border border-gray-100"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 30}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />

              <skill.icon
                className="relative text-5xl mb-3 transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12"
                style={{ color: skill.color }}
              />
              <span
                className={`relative text-sm font-medium text-center ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Soft Skills avec design amélioré */}
        <div
          className={`p-8 rounded-2xl backdrop-blur-sm border ${
            isDark
              ? "bg-white/5 border-white/10"
              : "bg-white shadow-lg border-gray-100"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-6 text-center ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {t("skills.softSkills")}
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {softSkillsKeys.map((key) => (
              <span
                key={key}
                className={`px-5 py-2 rounded-full border-2 font-medium transition-all hover:scale-105 hover:shadow-lg ${
                  isDark
                    ? "border-blue-600 bg-blue-600/10 text-blue-400 hover:bg-blue-600/20 hover:shadow-blue-500/50"
                    : "border-blue-600 bg-blue-50 text-blue-600 hover:bg-blue-100 hover:shadow-blue-500/20"
                }`}
              >
                {t(`skills.${key}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
