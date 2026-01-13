import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, FileText, Video, Download, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const topicData: Record<string, {
  title: string;
  overview: string;
  keyStudies: { name: string; researcher: string; year: string; findings: string }[];
  keyTerms: { term: string; definition: string }[];
  examTips: string[];
}> = {
  'social-influence': {
    title: 'Social Influence',
    overview: 'Social influence refers to the ways in which people affect the thoughts, feelings, and behaviors of others. This topic covers conformity (changing behavior to fit in with a group), obedience (following orders from authority figures), and how minorities can influence the majority.',
    keyStudies: [
      { name: 'Asch Line Study', researcher: 'Solomon Asch', year: '1951', findings: '75% of participants conformed at least once when confederates gave wrong answers about line lengths.' },
      { name: 'Milgram Obedience Study', researcher: 'Stanley Milgram', year: '1963', findings: '65% of participants administered the maximum 450V shock when ordered by an authority figure.' },
      { name: 'Zimbardo Prison Study', researcher: 'Philip Zimbardo', year: '1971', findings: 'Participants quickly adopted their assigned roles, demonstrating the power of situational factors.' },
    ],
    keyTerms: [
      { term: 'Conformity', definition: 'A change in behavior or opinions as a result of real or imagined group pressure.' },
      { term: 'Compliance', definition: 'Going along with the group publicly while privately disagreeing.' },
      { term: 'Internalization', definition: 'Genuinely accepting group norms as your own, both publicly and privately.' },
      { term: 'Obedience', definition: 'Following direct orders from an authority figure.' },
      { term: 'Agentic State', definition: 'When a person sees themselves as an agent carrying out another person\'s wishes.' },
    ],
    examTips: [
      'Always include AO3 evaluation points - strengths AND limitations of studies',
      'Use the PEEL structure: Point, Evidence, Explain, Link',
      'Reference specific statistics from studies (e.g., "65% in Milgram\'s study")',
      'Discuss ethical issues with classic studies',
      'Compare and contrast different explanations',
    ],
  },
  'memory': {
    title: 'Memory',
    overview: 'Memory is the cognitive process of encoding, storing, and retrieving information. This topic covers different models of memory, factors affecting eyewitness testimony, and explanations for forgetting.',
    keyStudies: [
      { name: 'Multi-Store Model', researcher: 'Atkinson & Shiffrin', year: '1968', findings: 'Proposed three separate stores: sensory register, STM, and LTM with different capacities and durations.' },
      { name: 'Working Memory Model', researcher: 'Baddeley & Hitch', year: '1974', findings: 'Replaced the concept of STM with a multi-component system including the central executive.' },
      { name: 'Loftus & Palmer', researcher: 'Loftus & Palmer', year: '1974', findings: 'Leading questions significantly affected speed estimates in car crash videos.' },
    ],
    keyTerms: [
      { term: 'Encoding', definition: 'The process of converting information into a form that can be stored in memory.' },
      { term: 'Capacity', definition: 'The amount of information that can be held in memory.' },
      { term: 'Duration', definition: 'How long information can be held in memory.' },
      { term: 'Central Executive', definition: 'The component of working memory that directs attention and coordinates slave systems.' },
      { term: 'Episodic Buffer', definition: 'A temporary store that integrates information from different sources.' },
    ],
    examTips: [
      'Draw diagrams of memory models in your answers',
      'Know the differences between STM and LTM characteristics',
      'Evaluate studies using GRAVE (Generalizability, Reliability, Application, Validity, Ethics)',
      'Link EWT research to real-world applications in the justice system',
      'Discuss the cognitive interview as an application',
    ],
  },
};

export default function TopicDetail() {
  const { topicId } = useParams();
  const [activeTab, setActiveTab] = useState<'overview' | 'studies' | 'terms' | 'tips'>('overview');
  
  const topic = topicData[topicId || ''] || {
    title: 'Topic Not Found',
    overview: 'This topic is coming soon. Check back later for comprehensive notes and resources.',
    keyStudies: [],
    keyTerms: [],
    examTips: [],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/topics"
        className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Topics
      </Link>

      <h1 className="text-3xl font-bold mb-6">{topic.title}</h1>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {(['overview', 'studies', 'terms', 'tips'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              activeTab === tab
                ? 'bg-primary text-white'
                : 'bg-surface text-gray-400 hover:text-white'
            }`}
          >
            {tab === 'overview' && 'Overview'}
            {tab === 'studies' && 'Key Studies'}
            {tab === 'terms' && 'Key Terms'}
            {tab === 'tips' && 'Exam Tips'}
          </button>
        ))}
      </div>

      <div className="bg-surface border border-border rounded-xl p-6">
        {activeTab === 'overview' && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Topic Overview</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">{topic.overview}</p>
            
            <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <button className="p-4 bg-background rounded-lg hover:bg-border transition-colors text-center">
                <FileText className="w-6 h-6 mx-auto mb-2 text-primary" />
                <span className="text-sm">Notes PDF</span>
              </button>
              <button className="p-4 bg-background rounded-lg hover:bg-border transition-colors text-center">
                <Video className="w-6 h-6 mx-auto mb-2 text-secondary" />
                <span className="text-sm">Video Lesson</span>
              </button>
              <button className="p-4 bg-background rounded-lg hover:bg-border transition-colors text-center">
                <Download className="w-6 h-6 mx-auto mb-2 text-accent" />
                <span className="text-sm">Flashcards</span>
              </button>
              <button className="p-4 bg-background rounded-lg hover:bg-border transition-colors text-center">
                <CheckCircle className="w-6 h-6 mx-auto mb-2 text-success" />
                <span className="text-sm">Quiz</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'studies' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Key Studies</h2>
            <div className="space-y-4">
              {topic.keyStudies.map((study, index) => (
                <div key={index} className="p-4 bg-background rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-primary">{study.name}</h3>
                    <span className="text-sm text-gray-400">{study.year}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">By {study.researcher}</p>
                  <p className="text-gray-300">{study.findings}</p>
                </div>
              ))}
              {topic.keyStudies.length === 0 && (
                <p className="text-gray-400">Key studies coming soon...</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'terms' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Key Terms</h2>
            <div className="space-y-3">
              {topic.keyTerms.map((item, index) => (
                <div key={index} className="p-4 bg-background rounded-lg">
                  <h3 className="font-semibold text-secondary mb-1">{item.term}</h3>
                  <p className="text-gray-300 text-sm">{item.definition}</p>
                </div>
              ))}
              {topic.keyTerms.length === 0 && (
                <p className="text-gray-400">Key terms coming soon...</p>
              )}
            </div>
          </div>
        )}

        {activeTab === 'tips' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Exam Tips</h2>
            <ul className="space-y-3">
              {topic.examTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 p-3 bg-background rounded-lg">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{tip}</span>
                </li>
              ))}
              {topic.examTips.length === 0 && (
                <p className="text-gray-400">Exam tips coming soon...</p>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
