import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FlaskConical, 
  BookOpen, 
  PenTool, 
  BookA, 
  BarChart2, 
  Sun, 
  Moon, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { useProgress } from '../../hooks/useProgress';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { progress } = useProgress();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Início', icon: FlaskConical },
    { to: '/conteudos', label: 'Conteúdos', icon: BookOpen },
    { to: '/exercicios', label: 'Exercícios', icon: PenTool },
    { to: '/glossario', label: 'Glossário', icon: BookA },
    { to: '/progresso', label: 'Meu Estudo', icon: BarChart2 },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/85 dark:bg-slate-950/85 border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-science-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-science-500/20 group-hover:scale-105 transition-transform">
              <FlaskConical className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight bg-gradient-to-r from-science-700 via-indigo-600 to-science-500 bg-clip-text text-transparent dark:from-science-400 dark:to-indigo-300">
                Química Fácil
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 -mt-1">
                2º Ano EM • Ácidos
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.to);
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? 'bg-science-50 text-science-700 dark:bg-science-950/60 dark:text-science-300'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${active ? 'text-science-600 dark:text-science-400' : 'text-slate-400'}`} />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions: XP badge, Theme toggle & mobile menu button */}
          <div className="flex items-center gap-3">
            {/* XP indicator */}
            <Link
              to="/progresso"
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold hover:scale-105 transition-transform"
              title="Seu XP acumulado"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>{progress.xp} XP</span>
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Ativar tema claro' : 'Ativar tema escuro'}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 backdrop-blur-lg px-4 pt-2 pb-5 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  active
                    ? 'bg-science-600 text-white shadow-sm'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
