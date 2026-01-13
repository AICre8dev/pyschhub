import { useState } from 'react';
import { Sparkles, Clock, Target, BookOpen, Users, CheckCircle, Copy, Download } from 'lucide-react';

export default function LessonPlanner() {
  const [topic, setTopic] = useState('');
  const [duration, setDuration] = useState('60');
  const [level, setLevel] = useState('AS');
  const [focus, setFocus] = useState('balanced');
  const [lessonPlan, setLessonPlan] = useState('');
  const [generating, setGenerating] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (!topic.trim()) return;
    
    setGenerating(true);
    
    setTimeout(() => {
      const plan = `# Lesson Plan: ${topic}

## Lesson Overview
**Topic:** ${topic}
**Duration:** ${duration} minutes
**Level:** ${level === 'AS' ? 'AS Level (Year 12)' : 'A2 Level (Year 13)'}
**Focus:** ${focus === 'ao1' ? 'Knowledge (AO1)' : focus === 'ao3' ? 'Evaluation (AO3)' : 'Balanced (AO1 + AO3)'}

---

## Learning Objectives
By the end of this lesson, students will be able to:
1. Define and explain key concepts related to ${topic}
2. Describe relevant research studies and their findings
3. Evaluate the strengths and limitations of research in this area
4. Apply knowledge to exam-style questions

---

## Starter Activity (${Math.round(parseInt(duration) * 0.1)} minutes)
**Activity:** Quick Quiz / Retrieval Practice
- Display 5 questions from previous lesson on board
- Students answer individually in books
- Peer mark and discuss answers
- Address any misconceptions

**Resources needed:** PowerPoint slide with questions

---

## Main Teaching (${Math.round(parseInt(duration) * 0.4)} minutes)

### Part 1: Key Concepts (${Math.round(parseInt(duration) * 0.2)} minutes)
- Introduce main terminology
- Use clear definitions with examples
- Check understanding with mini whiteboard questions

### Part 2: Research Studies (${Math.round(parseInt(duration) * 0.2)} minutes)
- Present key study: Aim, Method, Results, Conclusion
- Students take structured notes
- Discuss implications of findings

**Teaching strategies:**
- Dual coding (visual + verbal)
- Worked examples
- Think-pair-share

---

## Student Activity (${Math.round(parseInt(duration) * 0.25)} minutes)
**Activity:** Collaborative Learning Task

**Instructions:**
1. Divide class into groups of 3-4
2. Each group receives a different aspect of ${topic}
3. Groups create a mini-presentation (5 minutes)
4. Groups teach their section to the class

**Differentiation:**
- Support: Provide sentence starters and key term glossary
- Challenge: Include additional evaluation points

---

## Plenary (${Math.round(parseInt(duration) * 0.15)} minutes)
**Activity:** Exit Ticket

Students complete:
1. One thing I learned today...
2. One thing I'm still unsure about...
3. One exam question I could now answer...

**Follow-up:** Review exit tickets to inform next lesson planning

---

## Assessment Opportunities
- [ ] Starter quiz responses
- [ ] Mini whiteboard checks
- [ ] Quality of group presentations
- [ ] Exit ticket responses

---

## Homework
**Task:** Complete practice question
**Question:** Outline and evaluate research into ${topic}. (16 marks)
**Due:** Next lesson

---

## Resources Checklist
- [ ] PowerPoint presentation
- [ ] Student handouts
- [ ] Mini whiteboards
- [ ] Timer
- [ ] Exit ticket slips

---

## Notes for Next Lesson
- Review exit tickets for misconceptions
- Plan retrieval practice on today's content
- Prepare peer assessment for homework essays`;

      setLessonPlan(plan);
      setGenerating(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(lessonPlan);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI Lesson Planner</h1>
        <p className="text-gray-400">Generate comprehensive lesson plans in seconds</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-6">Lesson Details</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">
                <BookOpen className="w-4 h-4 inline mr-2" />
                Topic
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g., Conformity, Working Memory Model"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                <Clock className="w-4 h-4 inline mr-2" />
                Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="90">90 minutes (double)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Level
              </label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="level"
                    value="AS"
                    checked={level === 'AS'}
                    onChange={(e) => setLevel(e.target.value)}
                    className="text-primary"
                  />
                  <span>AS Level (Year 12)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="level"
                    value="A2"
                    checked={level === 'A2'}
                    onChange={(e) => setLevel(e.target.value)}
                    className="text-primary"
                  />
                  <span>A2 Level (Year 13)</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">
                <Target className="w-4 h-4 inline mr-2" />
                Lesson Focus
              </label>
              <select
                value={focus}
                onChange={(e) => setFocus(e.target.value)}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary"
              >
                <option value="balanced">Balanced (AO1 + AO3)</option>
                <option value="ao1">Knowledge Focus (AO1)</option>
                <option value="ao3">Evaluation Focus (AO3)</option>
              </select>
            </div>

            <button
              onClick={handleGenerate}
              disabled={generating || !topic.trim()}
              className="w-full py-3 bg-primary hover:bg-primary/80 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              {generating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  Generate Lesson Plan
                </>
              )}
            </button>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Generated Plan</h2>
            {lessonPlan && (
              <div className="flex gap-2">
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg text-sm hover:bg-border transition-colors"
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 text-success" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
                <button className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg text-sm hover:bg-border transition-colors">
                  <Download className="w-4 h-4" />
                  Export
                </button>
              </div>
            )}
          </div>
          
          <div className="h-[500px] overflow-y-auto bg-background border border-border rounded-lg p-4">
            {lessonPlan ? (
              <pre className="whitespace-pre-wrap font-sans text-sm text-gray-300">{lessonPlan}</pre>
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Your lesson plan will appear here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
