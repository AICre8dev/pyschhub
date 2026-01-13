import { Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Sparkles, Users, ArrowRight, CheckCircle } from 'lucide-react';
import { UserRole } from '../App';

interface HomeProps {
  role: UserRole;
  onRoleSelect: (role: UserRole) => void;
}

export default function Home({ role, onRoleSelect }: HomeProps) {
  if (!role) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to <span className="text-primary">PsychHub</span>
            </h1>
            <p className="text-xl text-gray-400">
              Your complete A-Level Psychology resource center
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <button
              onClick={() => onRoleSelect('student')}
              className="group p-8 bg-surface border border-border rounded-2xl hover:border-primary transition-all text-left"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">I'm a Student</h2>
              <p className="text-gray-400 mb-4">
                Access study materials, AI-powered revision tools, practice questions, and exam resources.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  AI Essay Marking
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Flashcard Generator
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Practice Quizzes
                </li>
              </ul>
            </button>

            <button
              onClick={() => onRoleSelect('teacher')}
              className="group p-8 bg-surface border border-border rounded-2xl hover:border-secondary transition-all text-left"
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold mb-2">I'm a Teacher</h2>
              <p className="text-gray-400 mb-4">
                Create lesson plans, generate worksheets, access teaching resources and assessment tools.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Lesson Plan Generator
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Worksheet Creator
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  Assessment Builder
                </li>
              </ul>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const studentFeatures = [
    {
      icon: BookOpen,
      title: 'Topic Browser',
      description: 'Explore all A-Level Psychology topics with detailed notes and summaries',
      link: '/topics',
      color: 'primary',
    },
    {
      icon: Sparkles,
      title: 'AI Study Tools',
      description: 'Get your essays marked, generate flashcards, and create practice quizzes',
      link: '/ai-tools',
      color: 'secondary',
    },
    {
      icon: GraduationCap,
      title: 'Exam Resources',
      description: 'Past papers, mark schemes, and examiner reports',
      link: '/resources',
      color: 'accent',
    },
  ];

  const teacherFeatures = [
    {
      icon: BookOpen,
      title: 'Topic Resources',
      description: 'Comprehensive teaching materials for every A-Level topic',
      link: '/topics',
      color: 'primary',
    },
    {
      icon: Sparkles,
      title: 'Lesson Planner',
      description: 'AI-powered lesson plan generator with activities and assessments',
      link: '/lesson-planner',
      color: 'secondary',
    },
    {
      icon: Users,
      title: 'Teacher Hub',
      description: 'Worksheets, presentations, and classroom activities',
      link: '/teacher-hub',
      color: 'accent',
    },
  ];

  const features = role === 'teacher' ? teacherFeatures : studentFeatures;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {role === 'student' ? 'Student Dashboard' : 'Teacher Dashboard'}
        </h1>
        <p className="text-xl text-gray-400">
          {role === 'student'
            ? 'Everything you need to ace your A-Level Psychology'
            : 'Tools and resources to deliver outstanding Psychology lessons'}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {features.map((feature) => (
          <Link
            key={feature.title}
            to={feature.link}
            className="group p-6 bg-surface border border-border rounded-xl hover:border-primary transition-all"
          >
            <div
              className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                feature.color === 'primary'
                  ? 'bg-primary/20'
                  : feature.color === 'secondary'
                  ? 'bg-secondary/20'
                  : 'bg-accent/20'
              }`}
            >
              <feature.icon
                className={`w-6 h-6 ${
                  feature.color === 'primary'
                    ? 'text-primary'
                    : feature.color === 'secondary'
                    ? 'text-secondary'
                    : 'text-accent'
                }`}
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400 mb-4">{feature.description}</p>
            <span className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
              Explore <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>

      <div className="bg-surface border border-border rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Quick Stats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-background rounded-lg">
            <div className="text-3xl font-bold text-primary">12</div>
            <div className="text-sm text-gray-400">Core Topics</div>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <div className="text-3xl font-bold text-secondary">50+</div>
            <div className="text-sm text-gray-400">Study Resources</div>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <div className="text-3xl font-bold text-accent">100+</div>
            <div className="text-sm text-gray-400">Practice Questions</div>
          </div>
          <div className="p-4 bg-background rounded-lg">
            <div className="text-3xl font-bold text-success">AI</div>
            <div className="text-sm text-gray-400">Powered Tools</div>
          </div>
        </div>
      </div>
    </div>
  );
}
