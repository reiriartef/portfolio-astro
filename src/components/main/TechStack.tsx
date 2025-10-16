import StackIcon from "tech-stack-icons";

function TechStack() {
  return (
    <section
      id="tech-stack"
      className="min-h-96 flex flex-col items-center justify-center bg-black px-6 py-16"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-10">
        Main Tech Stack
      </h2>
      <div className="flex flex-wrap gap-8 justify-center items-center w-full max-w-5xl">
        <div
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-6 min-w-[120px] transition-transform hover:scale-105 hover:shadow-blue-700/30"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31,38,135,0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
          }}
        >
          <StackIcon name="nextjs" className="w-24 h-24" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-6 min-w-[120px] transition-transform hover:scale-105 hover:shadow-blue-700/30"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31,38,135,0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
          }}
        >
          <StackIcon name="astro" className="w-24 h-24" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-6 min-w-[120px] transition-transform hover:scale-105 hover:shadow-blue-700/30"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31,38,135,0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
          }}
        >
          <StackIcon name="react" className="w-24 h-24" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-6 min-w-[120px] transition-transform hover:scale-105 hover:shadow-blue-700/30"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31,38,135,0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
          }}
        >
          <StackIcon name="nodejs" className="w-24 h-24" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-6 min-w-[120px] transition-transform hover:scale-105 hover:shadow-blue-700/30"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31,38,135,0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
          }}
        >
          <StackIcon name="expressjs" className="w-24 h-24" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-6 min-w-[120px] transition-transform hover:scale-105 hover:shadow-blue-700/30"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31,38,135,0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
          }}
        >
          <StackIcon name="nestjs" className="w-24 h-24" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-6 min-w-[120px] transition-transform hover:scale-105 hover:shadow-blue-700/30"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31,38,135,0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
          }}
        >
          <StackIcon name="postgresql" className="w-24 h-24" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-6 min-w-[120px] transition-transform hover:scale-105 hover:shadow-blue-700/30"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31,38,135,0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
          }}
        >
          <StackIcon name="postman" className="w-24 h-24" />
        </div>
        <div
          className="flex flex-col items-center justify-center rounded-2xl shadow-2xl backdrop-blur-lg bg-white/10 border border-white/20 p-6 min-w-[120px] transition-transform hover:scale-105 hover:shadow-blue-700/30"
          style={{
            boxShadow:
              "0 8px 32px 0 rgba(31,38,135,0.37), 0 1.5px 8px 0 rgba(0,0,0,0.25)",
          }}
        >
          <StackIcon name="vscode" className="w-24 h-24" />
        </div>
      </div>
    </section>
  );
}

export default TechStack;
