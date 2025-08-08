import KubernetesPod from './KubernetesPod';
import CPUDisplay from './CPUDisplay';

const Hero = () => {
  return (
    <section className="h-screen min-h-[700px] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <KubernetesPod />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-0" />
      <div className="absolute inset-0 bg-background/30 z-0" />
      
      <div className="relative z-10 text-center px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground pb-2">
          Adeola Daramola
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-primary font-semibold">
          Senior DevOps / Cloud Engineer
        </p>
        <p className="max-w-lg mx-auto mt-4 text-muted-foreground">
          5+ years orchestrating large-scale Kubernetes migrations,
          fintech integrations & blockchain infra.
        </p>
        <div className="mt-8">
          <CPUDisplay />
        </div>
      </div>
    </section>
  );
};

export default Hero;
