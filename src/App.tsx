import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Contents } from './pages/Contents';
import { ChapterView } from './pages/ChapterView';
import { ExercisesHub } from './pages/ExercisesHub';
import { Glossary } from './pages/Glossary';
import { StudentDashboard } from './pages/StudentDashboard';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-science-500 selection:text-white">
        
        {/* Header Fixo / Sticky */}
        <Header />

        {/* Container Principal */}
        <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conteudos" element={<Contents />} />
            <Route path="/quimica" element={<Navigate to="/conteudos" replace />} />
            <Route path="/quimica/acidos" element={<Navigate to="/conteudos" replace />} />
            <Route path="/quimica/acidos/:slug" element={<ChapterView />} />
            <Route path="/exercicios" element={<ExercisesHub />} />
            <Route path="/glossario" element={<Glossary />} />
            <Route path="/progresso" element={<StudentDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;
