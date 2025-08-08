import KubernetesPod from './KubernetesPod';
import CPUDisplay from './CPUDisplay';

const Hero = () => {
  return (
    <section className="h-screen min-h-[800px] flex items-center justify-center relative overflow-hidden pt-16">
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
          Senior DevOps & Cloud Engineer | Frontend Designer
        </p>
        <p className="max-w-2xl mx-auto mt-4 text-muted-foreground">
          Senior DevOps/Cloud Engineer with 5+ years of extensive experience leading Kubernetes migrations, fintech integrations, and blockchain infrastructure upgrades. Adept at cloud platforms including AWS, Azure, and GCP, with proficiency in Terraform, Ansible, Kubernetes, and CI/CD pipelines. Passionate about delivering scalable, secure, and innovative solutions in complex environments.
        </p>
        <div className="mt-8">
          <CPUDisplay />
        </div>
      </div>
    </section>
  );
};

export default Hero;
