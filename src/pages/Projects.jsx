export default function Projects() {
  const cardStyle =
    "group flex flex-col justify-between bg-[#f5f5f5] text-[#222222] border border-neutral-300 rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#222222] hover:shadow-2xl";

  return (
    <section className="bg-[#222222] text-[#f5f5f5] max-w-7xl mx-auto min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">
            Projects_
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-neutral-400 leading-relaxed">
            A collection of projects I've built while learning software
            development, ranging from small console applications to larger,
            real-world projects.
          </p>
        </div>

        {/* Mini Projects */}
        <div>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-medium whitespace-nowrap">
              _mini_projects
            </h2>
            <div className="h-px flex-1 bg-neutral-700" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className={cardStyle}>
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  C#
                </span>

                <h3 className="mt-3 text-2xl font-semibold">_hackerMission</h3>

                <p className="mt-4 text-neutral-600 leading-relaxed">
                  A command-line simulated hacker game built with C#.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-neutral-300 pt-4">
                <span className="text-sm text-neutral-500">
                  Console Application
                </span>

                <a
                  href="https://github.com/abduli-vex/hacker-mission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium group-hover:translate-x-1 transition-transform hover:underline"
                >
                  View Project →
                </a>
              </div>
            </article>

            <article className={cardStyle}>
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  C#
                </span>

                <h3 className="mt-3 text-2xl font-semibold">
                  _SteinPapierSchere
                </h3>

                <p className="mt-4 text-neutral-600 leading-relaxed">
                  A command-line Rock, Paper, Scissors game.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-neutral-300 pt-4">
                <span className="text-sm text-neutral-500">
                  Console Application
                </span>

                <a
                  href="https://github.com/abduli-vex/SteinPapierSchere"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium group-hover:translate-x-1 transition-transform hover:underline"
                >
                  View Project →
                </a>
              </div>
            </article>
          </div>
        </div>

        {/* <div className="my-24 h-px bg-neutral-700" /> */}

        <div>
          <div className="flex items-center gap-4 my-10">
            <div className="h-px flex-1 bg-neutral-700" />
            <h2 className="text-3xl md:text-4xl font-medium whitespace-nowrap">
              _big_projects
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className={cardStyle}>
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Open Source
                </span>

                <h3 className="mt-3 text-2xl font-semibold">_Aseprite</h3>

                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Contributed to the open-source Aseprite project, a pixel art
                  editor and animated sprite creation tool available on Windows,
                  macOS, and Linux.
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-neutral-300 pt-4">
                <span className="text-sm text-neutral-500">
                  Open Source Contribution
                </span>

                <a
                  href="https://github.com/abduli-vex/asesprite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium group-hover:translate-x-1 transition-transform hover:underline"
                >
                  View Project →
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
