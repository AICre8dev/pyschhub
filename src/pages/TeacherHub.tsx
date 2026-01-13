import { useState } from 'react';
import { FileText, Presentation, Users, ClipboardList, Download, Plus, Sparkles } from 'lucide-react';

interface TeacherResource {
  id: string;
  title: string;
  type: 'worksheet' | 'presentation' | 'activity' | 'assessment';
  topic: string;
  description: string;
  duration?: string;
}

const teacherResources: TeacherResource[] = [
  { id: '1', title: 'Conformity Introduction Slides', type: 'presentation', topic: 'Social Influence', description: '25 slides covering types of conformity with embedded videos', duration: '45 min' },
  { id: '2', title: 'Asch Study Role Play Activity', type: 'activity', topic: 'Social Influence', description: 'Students recreate Asch\'s line study in groups', duration: '30 min' },
  { id: '3', title: 'Memory Models Comparison Worksheet', type: 'worksheet', topic: 'Memory', description: 'Fill-in-the-blank and diagram labeling exercises', duration: '20 min' },
  { id: '4', title: 'End of Topic Assessment: Attachment', type: 'assessment', topic: 'Attachment', description: '16-mark essay question with mark scheme', duration: '25 min' },
  { id: '5', title: 'Biopsychology Neuron Diagram Activity', type: 'activity', topic: 'Biopsychology', description: 'Cut-and-paste neuron labeling activity', duration: '15 min' },
  { id: '6', title: 'Research Methods Quiz', type: 'assessment', topic: 'Research Methods', description: '20 multiple choice questions on experimental design', duration: '15 min' },
  { id: '7', title: 'Psychopathology Case Studies', type: 'worksheet', topic: 'Psychopathology', description: 'Real-world scenarios for applying definitions of abnormality', duration: '30 min' },
  { id: '8', title: 'Approaches Jigsaw Activity', type: 'activity', topic: 'Approaches', description: 'Expert groups teach each approach to home groups', duration: '50 min' },
];

export default function TeacherHub() {
  const [filter, setFilter] = useState<string>('all');
  const [showGenerator, setShowGenerator] = useState(false);
  const [generatorTopic, setGeneratorTopic] = useState('');
  const [generatorType, setGeneratorType] = useState('worksheet');
  const [generatedContent, setGeneratedContent] = useState('');
  const [generating, setGenerating] = useState(false);

  const filteredResources = teacherResources.filter(
    (r) => filter === 'all' || r.type === filter
  );

  const getIcon = (type: string) => {
    switch (type) {
      case 'worksheet': return FileText;
      case 'presentation': return Presentation;
      case 'activity': return Users;
      case 'assessment': return ClipboardList;
      default: return FileText;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'worksheet': return 'text-primary bg-primary/20';
      case 'presentation': return 'text-secondary bg-secondary/20';
      case 'activity': return 'text-accent bg-accent/20';
      case 'assessment': return 'text-success bg-success/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const handleGenerate = () => {
    if (!generatorTopic.trim()) return;
    
    setGenerating(true);
    
    setTimeout(() => {
      let content = '';
      
      if (generatorType === 'worksheet') {
        content = `# ${generatorTopic} Worksheet

## Learning Objectives
- Understand key concepts related to ${generatorTopic}
- Apply knowledge to exam-style questions
- Evaluate relevant research studies

---

## Section A: Key Terms (10 marks)

Define the following terms:

1. _________________________________ (2 marks)

2. _________________________________ (2 marks)

3. _________________________________ (2 marks)

4. _________________________________ (2 marks)

5. _________________________________ (2 marks)

---

## Section B: Short Answer Questions (12 marks)

1. Outline one study related to ${generatorTopic}. (4 marks)

_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

2. Explain one strength of this study. (4 marks)

_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

3. Explain one limitation of this study. (4 marks)

_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________

---

## Section C: Application Question (6 marks)

Read the scenario below and answer the question that follows.

[Scenario placeholder - customize based on topic]

Using your knowledge of ${generatorTopic}, explain the behavior described in the scenario above. (6 marks)

_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________
_________________________________________________________________`;
      } else if (generatorType === 'quiz') {
        content = `# ${generatorTopic} Quiz

## Multiple Choice Questions

1. Which of the following best describes...?
   a) Option A
   b) Option B
   c) Option C
   d) Option D

2. According to research on ${generatorTopic}...
   a) Option A
   b) Option B
   c) Option C
   d) Option D

3. A key criticism of studies into ${generatorTopic} is...
   a) Option A
   b) Option B
   c) Option C
   d) Option D

## True or False

4. Statement about ${generatorTopic} [ T / F ]
5. Statement about ${generatorTopic} [ T / F ]
6. Statement about ${generatorTopic} [ T / F ]

## Fill in the Blanks

7. The __________ model suggests that...
8. Research by __________ (year) found that...
9. One ethical issue with this research is __________

---

## Answer Key
1. [Answer]
2. [Answer]
3. [Answer]
4. [Answer]
5. [Answer]
6. [Answer]
7. [Answer]
8. [Answer]
9. [Answer]`;
      } else {
        content = `# ${generatorTopic} Activity Plan

## Activity Overview
**Topic:** ${generatorTopic}
**Duration:** 30-45 minutes
**Group Size:** 3-4 students

## Learning Objectives
By the end of this activity, students will be able to:
- Demonstrate understanding of key concepts
- Apply knowledge to practical scenarios
- Work collaboratively to solve problems

## Materials Needed
- Printed activity sheets
- Scissors and glue (if applicable)
- Timer
- Whiteboard markers

## Instructions

### Setup (5 minutes)
1. Divide class into groups of 3-4
2. Distribute materials to each group
3. Explain the task and success criteria

### Main Activity (25 minutes)
1. Groups work through the activity
2. Teacher circulates to support and challenge
3. Groups prepare to share findings

### Plenary (10 minutes)
1. Each group shares key findings
2. Class discussion of main points
3. Address any misconceptions

## Differentiation
- **Support:** Provide sentence starters and key term glossary
- **Challenge:** Additional extension questions

## Assessment Opportunities
- Observation of group discussions
- Quality of group presentations
- Exit ticket questions`;
      }
      
      setGeneratedContent(content);
      setGenerating(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Teacher Hub</h1>
          <p className="text-gray-400">Ready-made resources and AI-powered generators</p>
        </div>
        <button
          onClick={() => setShowGenerator(!showGenerator)}
          className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/80 rounded-lg transition-colors"
        >
          <Plus className="w-5 h-5" />
          Create Resource
        </button>
      </div>

      {showGenerator && (
        <div className="bg-surface border border-border rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            AI Resource Generator
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Topic</label>
              <input
                type="text"
                value={generatorTopic}
                onChange={(e) => setGeneratorTopic(e.target.value)}
                placeholder="e.g., Social Influence, Memory"
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Resource Type</label>
              <select
                value={generatorType}
                onChange={(e) => setGeneratorType(e.target.value)}
                className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="worksheet">Worksheet</option>
                <option value="quiz">Quiz</option>
                <option value="activity">Activity Plan</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={handleGenerate}
                disabled={generating || !generatorTopic.trim()}
                className="w-full px-4 py-2 bg-primary hover:bg-primary/80 disabled:bg-gray-600 rounded-lg transition-colors"
              >
                {generating ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </div>

          {generatedContent && (
            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">Generated Content</span>
                <button
                  onClick={() => navigator.clipboard.writeText(generatedContent)}
                  className="text-sm text-primary hover:underline"
                >
                  Copy to Clipboard
                </button>
              </div>
              <pre className="p-4 bg-background border border-border rounded-lg overflow-x-auto text-sm text-gray-300 whitespace-pre-wrap max-h-96 overflow-y-auto">
                {generatedContent}
              </pre>
            </div>
          )}
        </div>
      )}

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['all', 'worksheet', 'presentation', 'activity', 'assessment'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              filter === type
                ? 'bg-primary text-white'
                : 'bg-surface text-gray-400 hover:text-white'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}s
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map((resource) => {
          const Icon = getIcon(resource.type);
          const colorClass = getColor(resource.type);
          
          return (
            <div
              key={resource.id}
              className="p-4 bg-surface border border-border rounded-xl hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${colorClass}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold mb-1">{resource.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{resource.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-background text-xs rounded-full text-gray-400">
                      {resource.topic}
                    </span>
                    {resource.duration && (
                      <span className="text-xs text-gray-500">{resource.duration}</span>
                    )}
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-background hover:bg-border rounded-lg text-sm flex items-center justify-center gap-2 transition-colors">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
