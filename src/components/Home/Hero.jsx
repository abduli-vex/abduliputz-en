import Resume from "../../assets/files/Abduli_Pütz_CV.pdf";
import HeroImage from "../../assets/imgs/Hello_World.svg";

export default function Hero() {
  return (
    <section className="w-full py-6 sm:py-10 md:py-0">
      <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tight">
        _Abduli_Pütz
      </h1>

      <p className="mt-4 sm:mt-6 w-full md:max-w-3xl lg:w-1/2 text-sm sm:text-base md:text-lg leading-relaxed md:indent-20">
        <span className="italic font-semibold block sm:inline">
          Aspiring Software Developer & ITA Student.
        </span>

        <span className="block mt-2 sm:mt-0 sm:inline">
          I specialize in building modern web experiences using React while
          expanding my knowledge of C#, SQL, and software development. Through
          personal projects and my ITA studies, I'm focused on writing clean
          code, solving real-world problems, and continuously growing as a
          developer.
        </span>
      </p>

      <div className="mt-8">
        <a
          href={Resume}
          download="Abduli_Pütz_Resume.pdf"
          className="inline-block cursor-pointer border px-6 py-3 bg-[#222222] text-[#f5f5f5] transition-colors duration-300 hover:bg-[#f5f5f5] hover:text-[#222222]"
        >
          _Resume
        </a>

        {/* Mobile Image */}
        <div className="mt-7 md:hidden">
          <img
            src={HeroImage}
            alt="Hello World illustration"
            className="w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
