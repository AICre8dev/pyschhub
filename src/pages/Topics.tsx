import { Link } from 'react-router-dom';
import { Brain, Heart, Users, Baby, Microscope, Scale, Pill, Eye, Zap, BookOpen, FlaskConical, Lightbulb } from 'lucide-react';

const topics = [
  {
    id: 'social-influence',
    title: 'Social Influence',
    icon: Users,
    description: 'Conformity, obedience, minority influence, and social change',
    color: 'primary',
    subtopics: ['Conformity', 'Obedience', 'Minority Influence', 'Social Change'],
  },
  {
    id: 'memory',
    title: 'Memory',
    icon: Brain,
    description: 'Multi-store model, working memory, eyewitness testimony',
    color: 'secondary',
    subtopics: ['Multi-Store Model', 'Working Memory', 'EWT', 'Forgetting'],
  },
  {
    id: 'attachment',
    title: 'Attachment',
    icon: Heart,
    description: 'Bowlby, Ainsworth, cultural variations, and maternal deprivation',
    color: 'accent',
    subtopics: ['Bowlby', 'Ainsworth', 'Cultural Variations', 'Deprivation'],
  },
  {
    id: 'psychopathology',
    title: 'Psychopathology',
    icon: Pill,
    description: 'Definitions of abnormality, phobias, depression, OCD',
    color: 'primary',
    subtopics: ['Definitions', 'Phobias', 'Depression', 'OCD'],
  },
  {
    id: 'approaches',
    title: 'Approaches in Psychology',
    icon: Lightbulb,
    description: 'Biological, cognitive, behaviorist, psychodynamic, humanistic',
    color: 'secondary',
    subtopics: ['Biological', 'Cognitive', 'Behaviorist', 'Psychodynamic'],
  },
  {
    id: 'biopsychology',
    title: 'Biopsychology',
    icon: Microscope,
    description: 'Nervous system, neurons, brain plasticity, biological rhythms',
    color: 'accent',
    subtopics: ['Nervous System', 'Neurons', 'Brain Plasticity', 'Rhythms'],
  },
  {
    id: 'research-methods',
    title: 'Research Methods',
    icon: FlaskConical,
    description: 'Experimental design, sampling, data analysis, ethics',
    color: 'primary',
    subtopics: ['Experiments', 'Sampling', 'Data Analysis', 'Ethics'],
  },
  {
    id: 'issues-debates',
    title: 'Issues & Debates',
    icon: Scale,
    description: 'Nature vs nurture, free will, gender bias, cultural bias',
    color: 'secondary',
    subtopics: ['Nature-Nurture', 'Free Will', 'Gender Bias', 'Reductionism'],
  },
  {
    id: 'relationships',
    title: 'Relationships',
    icon: Heart,
    description: 'Attraction, romantic relationships, virtual relationships',
    color: 'accent',
    subtopics: ['Attraction', 'Theories', 'Virtual Relationships', 'Breakdown'],
  },
  {
    id: 'schizophrenia',
    title: 'Schizophrenia',
    icon: Brain,
    description: 'Classification, biological and psychological explanations',
    color: 'primary',
    subtopics: ['Classification', 'Biological', 'Psychological', 'Treatments'],
  },
  {
    id: 'aggression',
    title: 'Aggression',
    icon: Zap,
    description: 'Neural and hormonal mechanisms, social learning, media',
    color: 'secondary',
    subtopics: ['Neural Mechanisms', 'Social Learning', 'Media', 'Institutional'],
  },
  {
    id: 'forensic',
    title: 'Forensic Psychology',
    icon: Eye,
    description: 'Offender profiling, biological explanations, custodial sentencing',
    color: 'accent',
    subtopics: ['Profiling', 'Explanations', 'Treatment', 'Punishment'],
  },
];

export default function Topics() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">A-Level Psychology Topics</h1>
        <p className="text-gray-400">
          Comprehensive coverage of all major exam board specifications (AQA, OCR, Edexcel)
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/topics/${topic.id}`}
            className="group p-6 bg-surface border border-border rounded-xl hover:border-primary transition-all"
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                topic.color === 'primary'
                  ? 'bg-primary/20'
                  : topic.color === 'secondary'
                  ? 'bg-secondary/20'
                  : 'bg-accent/20'
              }`}
            >
              <topic.icon
                className={`w-6 h-6 ${
                  topic.color === 'primary'
                    ? 'text-primary'
                    : topic.color === 'secondary'
                    ? 'text-secondary'
                    : 'text-accent'
                }`}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
              {topic.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{topic.description}</p>
            <div className="flex flex-wrap gap-2">
              {topic.subtopics.map((sub) => (
                <span
                  key={sub}
                  className="px-2 py-1 bg-background text-xs rounded-full text-gray-400"
                >
                  {sub}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
