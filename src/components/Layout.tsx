import { Link, useLocation } from 'react-router-dom';
import { Brain, BookOpen, Sparkles, FolderOpen, GraduationCap, Menu, X, User } from 'lucide-react';
import { useState } from 'react';
import { UserRole } from '../App';

interface LayoutProps {
  children: React.ReactNode;
  role: UserRole;
  onRoleChange: (role: UserRole) => void;
}

export default function Layout({ children, role, onRoleChange }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const studentLinks = [
    { to: '/', icon: Brain, label: 'Home' },
    { to: '/topics', icon: BookOpen, label: 'Topics' },
    { to: '/ai-tools', icon: Sparkles, label: 'AI Tools' },
    { to: '/resources', icon: FolderOpen, label: 'Resources' },
  ];

  const teacherLinks = [
    { to: '/', icon: Brain, label: 'Home' },
    { to: '/topics', icon: BookOpen, label: 'Topics' },
    { to: '/teacher-hub', icon: GraduationCap, label: 'Teacher Hub' },
    { to: '/lesson-planner', icon: Sparkles, label: 'Lesson Planner' },
    { to: '/resources', icon: FolderOpen, label: 'Resources' },
  ];

  const links = role === 'teacher' ? teacherLinks : studentLinks;

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-surface border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">PsychHub</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    location.pathname === link.to
                      ? 'bg-primary/20 text-primary'
                      : 'text-gray-400 hover:text-white hover:bg-surface'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {role && (
                <button
                  onClick={() => onRoleChange(null)}
                  className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-surface border border-border rounded-lg text-sm hover:border-primary transition-colors"
                >
                  <User className="w-4 h-4" />
                  {role === 'student' ? 'Student' : 'Teacher'}
                </button>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-gray-400 hover:text-white"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-surface border-t border-border">
            <div className="px-4 py-2 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                    location.pathname === link.to
                      ? 'bg-primary/20 text-primary'
                      : 'text-gray-400'
                  }`}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              ))}
              {role && (
                <button
                  onClick={() => {
                    onRoleChange(null);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white"
                >
                  <User className="w-4 h-4" />
                  Switch Role ({role})
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>
    </div>
  );
}
