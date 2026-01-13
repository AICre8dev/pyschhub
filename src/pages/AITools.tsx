import { useState } from 'react';
import { Sparkles, FileText, Brain, HelpCircle, Loader2, Copy, CheckCircle } from 'lucide-react';

type Tool = 'essay-marker' | 'flashcards' | 'quiz' | 'explainer';

export default function AITools() {
  const [activeTool, setActiveTool] = useState<Tool>('essay-marker');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const tools = [
    { id: 'essay-marker' as Tool, icon: FileText, title: 'Essay Marker', description: 'Get AI feedback on your essays' },
    { id: 'flashcards' as Tool, icon: Brain, title: 'Flashcard Generator', description: 'Create flashcards from any topic' },
    { id: 'quiz' as Tool, icon: HelpCircle, title: 'Quiz Generator', description: 'Generate practice questions' },
    { id: 'explainer' as Tool, icon: Sparkles, title: 'Concept Explainer', description: 'Get simple explanations' },
  ];

  const handleGenerate = () => {
    if (!input.trim()) return;
    
    setLoading(true);
    
    // Simulate AI response
    setTimeout(() => {
      let response = '';
      
      switch (activeTool) {
        case 'essay-marker':
          response = `## Essay Feedback

### Overall Grade: B (14/16 marks)

### Strengths:
✅ Good use of psychological terminology
✅ Clear structure with introduction and conclusion
✅ Relevant studies cited (Milgram, Asch)

### Areas for Improvement:
⚠️ Add more AO3 evaluation points
⚠️ Include counter-arguments to strengthen analysis
⚠️ Expand on methodological criticisms of studies

### Detailed Feedback:

**AO1 (Knowledge): 5/6**
You demonstrated solid knowledge of conformity research. Consider adding more detail about Asch's variations.

**AO2 (Application): 4/4**
Good application to the scenario provided.

**AO3 (Evaluation): 5/6**
Your evaluation could be stronger. Try using the GRAVE criteria (Generalizability, Reliability, Application, Validity, Ethics).

### Suggested Improvements:
1. Add a paragraph evaluating the ecological validity of lab studies
2. Discuss cultural variations in conformity rates
3. Include more recent research to support your arguments`;
          break;
          
        case 'flashcards':
          response = `## Generated Flashcards

### Card 1
**Front:** What is conformity?
**Back:** A change in behavior or opinions as a result of real or imagined group pressure.

---

### Card 2
**Front:** Name the three types of conformity
**Back:** 1. Compliance (public agreement, private disagreement)
2. Identification (adopting group views to be accepted)
3. Internalization (genuine acceptance of group norms)

---

### Card 3
**Front:** What did Asch's (1951) line study find?
**Back:** 75% of participants conformed at least once. Average conformity rate was 37%.

---

### Card 4
**Front:** What factors increase conformity? (Asch variations)
**Back:** - Larger group size (up to 4)
- Unanimous majority
- Task difficulty
- Private responses decrease conformity

---

### Card 5
**Front:** What is normative social influence?
**Back:** Conforming to be liked/accepted by the group. Based on the need for approval.`;
          break;
          
        case 'quiz':
          response = `## Practice Quiz: ${input}

### Question 1 (AO1 - 2 marks)
Outline what is meant by 'conformity' in psychology.

**Model Answer:** Conformity is a change in a person's behavior or opinions as a result of real or imagined pressure from a person or group (1 mark). This can involve publicly agreeing with the group while privately disagreeing (compliance) or genuinely accepting the group's views (internalization) (1 mark).

---

### Question 2 (AO1 - 4 marks)
Describe Asch's (1951) study of conformity.

**Model Answer:** Asch showed participants a standard line and three comparison lines (1 mark). Participants had to say which comparison line matched the standard (1 mark). Confederate participants gave unanimously wrong answers on critical trials (1 mark). 75% of real participants conformed at least once, with an average conformity rate of 37% (1 mark).

---

### Question 3 (AO3 - 6 marks)
Evaluate research into conformity.

**Model Answer Points:**
- Artificial task lacks ecological validity
- Demand characteristics may have influenced results
- Cultural bias (American sample)
- Historical context (1950s America)
- Ethical issues (deception, lack of informed consent)
- Supporting research from other cultures`;
          break;
          
        case 'explainer':
          response = `## Simple Explanation: ${input}

### What is it?
Think of conformity like peer pressure - it's when you change what you do or think because of other people around you.

### Real-Life Example 🎯
Imagine you're in a group chat and everyone says they loved a movie. Even if you thought it was boring, you might say "yeah it was great!" just to fit in. That's conformity!

### The Science Behind It 🔬
Psychologist Solomon Asch did a famous experiment in 1951. He showed people lines and asked which ones matched. When fake participants (confederates) gave obviously wrong answers, 75% of real participants went along with the wrong answer at least once!

### Why Do We Conform? 🤔
1. **To fit in** (Normative Social Influence) - We want people to like us
2. **Because we're unsure** (Informational Social Influence) - We think others know better

### Key Terms to Remember 📝
- **Compliance**: Going along publicly but disagreeing privately
- **Internalization**: Actually believing what the group believes
- **Identification**: Conforming to be part of a group you admire

### Exam Tip 💡
Always mention Asch's study when writing about conformity - it's the classic research that examiners expect to see!`;
          break;
      }
      
      setOutput(response);
      setLoading(false);
    }, 1500);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPlaceholder = () => {
    switch (activeTool) {
      case 'essay-marker':
        return 'Paste your essay here for AI feedback...';
      case 'flashcards':
        return 'Enter a topic (e.g., "Social Influence", "Memory Models")...';
      case 'quiz':
        return 'Enter a topic to generate practice questions...';
      case 'explainer':
        return 'Enter a concept you want explained simply...';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">AI Study Tools</h1>
        <p className="text-gray-400">Powered by AI to help you study smarter</p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => {
              setActiveTool(tool.id);
              setOutput('');
            }}
            className={`p-4 rounded-xl text-left transition-all ${
              activeTool === tool.id
                ? 'bg-primary/20 border-2 border-primary'
                : 'bg-surface border border-border hover:border-primary/50'
            }`}
          >
            <tool.icon className={`w-6 h-6 mb-2 ${activeTool === tool.id ? 'text-primary' : 'text-gray-400'}`} />
            <h3 className="font-semibold mb-1">{tool.title}</h3>
            <p className="text-sm text-gray-400">{tool.description}</p>
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-surface border border-border rounded-xl p-6">
          <h2 className="text-lg font-semibold mb-4">Input</h2>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={getPlaceholder()}
            className="w-full h-64 bg-background border border-border rounded-lg p-4 text-white placeholder-gray-500 resize-none focus:outline-none focus:border-primary"
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !input.trim()}
            className="mt-4 w-full py-3 bg-primary hover:bg-primary/80 disabled:bg-gray-600 disabled:cursor-not-allowed rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Generate
              </>
            )}
          </button>
        </div>

        <div className="bg-surface border border-border rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Output</h2>
            {output && (
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
            )}
          </div>
          <div className="h-64 overflow-y-auto bg-background border border-border rounded-lg p-4">
            {output ? (
              <div className="prose prose-invert prose-sm max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-gray-300">{output}</pre>
              </div>
            ) : (
              <p className="text-gray-500 text-center mt-20">
                Output will appear here...
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
