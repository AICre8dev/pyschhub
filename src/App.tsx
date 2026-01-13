import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Topics from './pages/Topics';
import TopicDetail from './pages/TopicDetail';
import AITools from './pages/AITools';
import Resources from './pages/Resources';
import TeacherHub from './pages/TeacherHub';
import LessonPlanner from './pages/LessonPlanner';

export type UserRole = 'student' | 'teacher' | null;

export default function App() {
  const [role, setRole] = useState<UserRole>(() => {
    const saved = localStorage.getItem('userRole');
    return saved as UserRole;
  });

  const handleRoleSelect = (selectedRole: UserRole) => {
    setRole(selectedRole);
    if (selectedRole) {
      localStorage.setItem('userRole', selectedRole);
    }
  };

  return (
    <Layout role={role} onRoleChange={handleRoleSelect}>
      <Routes>
        <Route path="/" element={<Home role={role} onRoleSelect={handleRoleSelect} />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topicId" element={<TopicDetail />} />
        <Route path="/ai-tools" element={<AITools />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/teacher-hub" element={<TeacherHub />} />
        <Route path="/lesson-planner" element={<LessonPlanner />} />
      </Routes>
    </Layout>
  );
}
