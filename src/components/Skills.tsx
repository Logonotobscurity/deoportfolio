import { Badge } from './ui/badge';
import FadeIn from './FadeIn';

const skills = {
  "Cloud Platforms": ["AWS", "GCP", "Azure", "DigitalOcean", "OKTA"],
  "Languages": ["Python", "Bash", "Golang", "Powershell"],
  "Infrastructure as Code": ["Terraform", "Ansible", "Pulumi", "CloudFormation", "AWS CDK", "Puppet"],
  "Monitoring": ["CloudWatch", "Grafana", "Datadog", "Pagerduty"],
  "Containerization": ["Docker", "Kubernetes", "AWS ECS", "Openshift"],
  "CI/CD": ["Jenkins", "GitHub Actions", "Azure DevOps", "Gitlab", "CircleCI"],
  "Databases": ["RDS", "MySQL", "Postgres", "MongoDB", "Redis", "DynamoDB"],
  "Messaging Queues": ["Kafka", "RabbitMQ", "SQS", "SNS"],
  "IAM Tools": ["Okta", "LDAP", "AWS IAM", "GCP IAM"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
            Technical Skills
          </h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, tools], index) => (
            <FadeIn key={category} delay={index * 0.1}>
              <div className="bg-card/50 p-6 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold text-primary mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary border border-primary/20">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
