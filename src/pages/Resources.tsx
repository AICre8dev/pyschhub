import { useState } from 'react';
import { FileText, Video, Download, ExternalLink, Search, Filter } from 'lucide-react';

type ResourceType = 'all' | 'notes' | 'videos' | 'papers' | 'worksheets';

interface Resource {
  id: string;
  title: string;
  type: 'notes' | 'videos' | 'papers' | 'worksheets';
  topic: string;
  description: string;
  examBoard?: string;
}

const resources: Resource[] = [
  { id: '1', title: 'Social Influence Complete Notes', type: 'notes', topic: 'Social Influence', description: 'Comprehensive notes covering conformity, obedience, and minority influence', examBoard: 'AQA' },
  { id: '2', title: 'Memory Models Explained', type: 'videos', topic: 'Memory', description: 'Video walkthrough of MSM and WMM with diagrams', examBoard: 'All' },
  { id: '3', title: 'AQA Paper 1 2023', type: 'papers', topic: 'Mixed', description: 'Past paper with mark scheme and examiner comments', examBoard: 'AQA' },
  { id: '4', title: 'Attachment Theory Worksheet', type: 'worksheets', topic: 'Attachment', description: 'Practice questions on Bowlby and Ainsworth', examBoard: 'AQA' },
  { id: '5', title: 'Biopsychology Revision Guide', type: 'notes', topic: 'Biopsychology', description: 'Neurons, synaptic transmission, and brain plasticity', examBoard: 'All' },
  { id: '6', title: 'Research Methods Masterclass', type: 'videos', topic: 'Research Methods', description: '2-hour video covering all experimental designs', examBoard: 'All' },
  { id: '7', title: 'OCR Paper 2 2022', type: 'papers', topic: 'Mixed', description: 'Component 2 with detailed mark scheme', examBoard: 'OCR' },
  { id: '8', title: 'Psychopathology Case Studies', type: 'worksheets', topic: 'Psychopathology', description: 'Application questions for phobias, depression, and OCD', examBoard: 'AQA' },
  { id: '9', title: 'Approaches Comparison Table', type: 'notes', topic: 'Approaches', description: 'Side-by-side comparison of all psychological approaches', examBoard: 'All' },
  { id: '10', title: 'Issues & Debates Essay Plans', type: 'notes', topic: 'Issues & Debates', description: 'Model essay structures for 16-mark questions', examBoard: 'AQA' },
  { id: '11', title: 'Edexcel Paper 3 2023', type: 'papers', topic: 'Mixed', description: 'Applications of Psychology paper', examBoard: 'Edexcel' },
  { id: '12', title: 'Statistical Tests Flowchart', type: 'worksheets', topic: 'Research Methods', description: 'Decision tree for choosing the right statistical test', examBoard: 'All' },
];

export default function Resources() {
  const [filter, setFilter] = useState<ResourceType>('all');
  const [search, setSearch] = useState('');
  const [selectedBoard, setSelectedBoard] = useState<string>('all');

  const filteredResources = resources.filter((resource) => {
    const matchesType = filter === 'all' || resource.type === filter;
    const matchesSearch = resource.title.toLowerCase().includes(search.toLowerCase()) ||
                         resource.topic.toLowerCase().includes(search.toLowerCase());
    const matchesBoard = selectedBoard === 'all' || resource.examBoard === selectedBoard || resource.examBoard === 'All';
    return matchesType && matchesSearch && matchesBoard;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case 'notes': return FileText;
      case 'videos': return Video;
      case 'papers': return Download;
      case 'worksheets': return FileText;
      default: return FileText;
    }
  };

  const getColor = (type: string) => {
    switch (type) {
      case 'notes': return 'text-primary bg-primary/20';
      case 'videos': return 'text-secondary bg-secondary/20';
      case 'papers': return 'text-accent bg-accent/20';
      case 'worksheets': return 'text-success bg-success/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Resource Library</h1>
        <p className="text-gray-400">Notes, videos, past papers, and worksheets for A-Level Psychology</p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search resources..."
            className="w-full pl-10 pr-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:border-primary"
          />
        </div>

        <div className="flex gap-2">
          <select
            value={selectedBoard}
            onChange={(e) => setSelectedBoard(e.target.value)}
            className="px-4 py-3 bg-surface border border-border rounded-lg focus:outline-none focus:border-primary"
          >
            <option value="all">All Boards</option>
            <option value="AQA">AQA</option>
            <option value="OCR">OCR</option>
            <option value="Edexcel">Edexcel</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {(['all', 'notes', 'videos', 'papers', 'worksheets'] as ResourceType[]).map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
              filter === type
                ? 'bg-primary text-white'
                : 'bg-surface text-gray-400 hover:text-white'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
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
                  <h3 className="font-semibold mb-1 truncate">{resource.title}</h3>
                  <p className="text-sm text-gray-400 mb-2">{resource.description}</p>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-background text-xs rounded-full text-gray-400">
                      {resource.topic}
                    </span>
                    {resource.examBoard && resource.examBoard !== 'All' && (
                      <span className="px-2 py-0.5 bg-primary/20 text-xs rounded-full text-primary">
                        {resource.examBoard}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button className="mt-4 w-full py-2 bg-background hover:bg-border rounded-lg text-sm flex items-center justify-center gap-2 transition-colors">
                {resource.type === 'videos' ? (
                  <>
                    <ExternalLink className="w-4 h-4" />
                    Watch
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    Download
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <Filter className="w-12 h-12 mx-auto text-gray-600 mb-4" />
          <p className="text-gray-400">No resources found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
