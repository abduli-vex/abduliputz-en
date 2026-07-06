import Abduli from "../assets/imgs/AP_Profile_E.png";

export default function Aboutme() {
  return (
    <section className="bg-[#222222] text-[#f5f5f5] max-w-7xl mx-auto min-h-screen flex flex-col justify-start px-6 py-20">
      <h1 className="text-6xl md:text-8xl mb-16">About Me_</h1>

      <div className="w-full h-[1px] bg-[#f5f5f5]/20 mb-12" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="font-bold text-4xl md:text-5xl">Abduli Pütz</h1>

          <h2 className="font-bold italic text-lg md:text-xl opacity-90">
            An Aspiring Software Developer.
          </h2>

          <p className="text-justify leading-relaxed opacity-90">
            I'm an Information Technology Assistant (ITA) student in Germany
            with a strong interest in software development and modern web
            technologies.
            <br />
            <br />
            I enjoy building responsive and user-focused web applications using
            React, while also working with C#, SQL, and foundational computer
            science concepts such as networking and binary systems.
            <br />
            <br />
            Through my studies and personal projects, I’m continuously improving
            my understanding of how software is designed, built, and structured.
            I value clean code, logical thinking, and practical problem-solving,
            and I enjoy turning ideas into working applications.
            <br />
            <br />
            My goal is to grow into a full-stack developer by gaining real-world
            experience, improving my technical skills, and building meaningful
            projects that solve real problems.
          </p>
          <div className="flex flex-col w-fit gap-3 mt-10">
            <a
              href="/contact"
              className="cursor-pointer border px-6 py-3 bg-[#222222] text-[#f5f5f5] transition-colors duration-300 hover:bg-[#f5f5f5] hover:text-[#222222]"
            >
              _Contact Me
            </a>
          </div>
        </div>

        <div className="w-[280px] md:w-[320px] aspect-[9/13] overflow-hidden border border-[#f5f5f5]/20 bg-[#222222] shrink-0">
          <img src={Abduli} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
