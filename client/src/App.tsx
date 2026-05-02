import React from 'react';
import AIAnalyst from './components/AIAnalyst';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-2">🌌 نظام العرش الموحد</h1>
        <p className="text-slate-400 text-xl">مركز القيادة والتحكم الذكي</p>
      </header>
      
      <main className="max-w-6xl mx-auto">
        <AIAnalyst />
      </main>
    </div>
  );
}

export default App;
