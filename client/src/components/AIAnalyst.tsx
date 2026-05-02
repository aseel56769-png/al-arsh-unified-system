import React from 'react';

const AIAnalyst: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <span>🤖</span> المحلل الذكي
      </h2>
      <div className="space-y-4">
        <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 h-64 overflow-y-auto">
          <p className="text-green-400 font-mono text-sm">> النظام جاهز للاستخدام...</p>
        </div>
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="أدخل الأمر أو الاستفسار هنا..." 
            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg font-medium transition-colors">
            إرسال
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAnalyst;
