import Abduli from "../../assets/imgs/AP_Profile_E.png";

export default function AboutMeCo() {
  return (
    <section>
      <h1 className="text-8xl my-20">About Me_</h1>
      <div className="flex items-start bg-[#222222] text-[#f5f5f5] justify-between min-w-5xl mx-auto p-5">
        <div className="w-[50%] flex flex-col gap-5">
          <h1 className="font-bold text-5xl">Abduli Pütz</h1>
          <h2 className="font-bold italic">An Aspiring Software Developer.</h2>
          <p className="text-justify">
            I'm an Information Technology Assistant (ITA) student in Germany
            with a strong interest in software development and modern web
            technologies.
            <br />
            I enjoy building responsive and user-focused web applications using
            React, while also working with C#, SQL, and foundational computer
            science concepts such as networking and binary systems.
            <br />
            Through my studies and personal projects, I’m continuously improving
            my understanding of how software is designed, built, and structured.
            I value clean code, logical thinking, and practical problem-solving,
            and I enjoy turning ideas into working applications.
            <br />
            My goal is to grow into a full-stack developer by gaining real-world
            experience, improving my technical skills, and building meaningful
            projects that solve real problems.
          </p>
          <div className="flex flex-col w-fit gap-3 mt-10">
            <a
              href={Resume}
              download="Abduli_Pütz_Resume.pdf"
              className="cursor-pointer border px-6 py-3 bg-[#222222] text-[#f5f5f5] transition-colors duration-300 hover:bg-[#f5f5f5] hover:text-[#222222]"
            >
              _Resume
            </a>
          </div>
        </div>

        <div className="w-[320px] h-[420px] overflow-hidden rounded-sm border-[0.5px] bg-[#f5f5f5]">
          <img src={Abduli} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
