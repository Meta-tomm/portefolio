import { useTranslation } from "react-i18next";
import { useTheme } from "../../context/themecontext";
import { useScrollAnimation } from "../../hooks/UseScrollAnimation";
function Projects() {
  const [ref, isVisible] = useScrollAnimation();
  const { isDark } = useTheme();
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Indeed Be Like",
      description:
        "Clone d'Indeed - Plateforme de recherche d'emploi avec système de candidatures et gestion des offres. Interface moderne et responsive.",
      technologies: ["React", "Node.js", "JavaScript", "Tailwind"],
      github: "https://github.com/tommathis/indeed-clone",
      demo: null,
      status: "inProgress",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Portfolio Professionnel",
      description:
        "Portfolio personnel moderne avec animations fluides, construit avec React et Tailwind CSS. Design minimaliste et performant.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/tommathis/portfolio",
      demo: "https://tommathis.dev",
      status: "inProgress",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Système de Gestion Hospitalière",
      description:
        "Projet académique - Application de gestion de données médicales respectant les normes FHIR/HL7 et RGPD.",
      technologies: ["C#", ".NET", "MySQL", "FHIR/HL7"],
      github: null,
      demo: null,
      status: "academic",
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`relative min-h-screen py-20 transition-all duration-1000 overflow-hidden ${
        isDark ? "bg-gray-900" : "bg-white"
      } ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Fond avec particules */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-10 ${
            isDark ? "bg-blue-500" : "bg-blue-300"
          }`}
          style={{ top: "30%", left: "10%" }}
        />
        <div
          className={`absolute w-96 h-96 rounded-full blur-3xl opacity-10 ${
            isDark ? "bg-purple-500" : "bg-purple-300"
          }`}
          style={{ bottom: "30%", right: "10%" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {t("projects.title")}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 backdrop-blur-sm ${
                isDark
                  ? "bg-white/5 border border-white/10 hover:bg-white/10"
                  : "bg-white border border-gray-100 shadow-lg hover:shadow-2xl"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              {/* Gradient top bar */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>

              <div className="p-6 flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3
                    className={`text-xl font-bold ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      isDark
                        ? "bg-blue-600/20 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {t(`projects.status.${project.status}`)}
                  </span>
                </div>

                <p
                  className={`text-sm mb-4 leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        isDark
                          ? "bg-gray-800 text-gray-300"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`p-4 flex gap-3 border-t ${
                  isDark
                    ? "bg-white/5 border-white/5"
                    : "bg-gray-50 border-gray-100"
                }`}
              >
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 px-4 py-2 text-center rounded-lg transition-all text-sm font-medium flex items-center justify-center gap-2 ${
                      isDark
                        ? "bg-gray-800 text-white hover:bg-gray-700"
                        : "bg-white text-gray-900 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-lg hover:shadow-lg transition-all text-sm font-medium flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Demo
                  </a>
                )}
                {!project.github && !project.demo && (
                  <span
                    className={`flex-1 px-4 py-2 text-center rounded-lg text-sm font-medium ${
                      isDark
                        ? "bg-gray-800 text-gray-500"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    Privé
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/tommathis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 font-medium hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            {t("projects.viewMore")}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
