import { useState } from 'react';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { OutboundPage } from './pages/OutboundPage';
import { TaskManagementPage } from './pages/TaskManagementPage';
import { Sidebar, TopNav } from './components/Layout';
import { View } from './types';
import { cn } from './lib/utils';

export default function App() {
  const [view, setView] = useState<View>('login');
  const [collapsed, setCollapsed] = useState(false);

  if (view === 'login') {
    return <LoginPage onLogin={() => setView('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-surface">
      <Sidebar 
        currentView={view} 
        onViewChange={setView} 
        collapsed={collapsed} 
        setCollapsed={setCollapsed} 
      />
      <TopNav collapsed={collapsed} />
      
      <main 
        className={cn(
          "pt-16 transition-all duration-300 min-h-screen",
          collapsed ? "pl-20" : "pl-64"
        )}
      >
        {view === 'dashboard' && <DashboardPage />}
        {view === 'outbound' && <OutboundPage />}
        {view === 'tasks' && <TaskManagementPage />}
        
        {(view === 'analytics' || view === 'logs' || view === 'login') && (
          <div className="p-10 flex items-center justify-center h-[calc(100vh-64px)]">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center mx-auto text-on-surface-variant/40">
                <span className="text-2xl font-bold">?</span>
              </div>
              <h2 className="text-2xl font-bold text-on-surface">页面建设中</h2>
              <p className="text-on-surface-variant">该功能模块正在加速开发中，敬请期待。</p>
              <button 
                onClick={() => setView('dashboard')}
                className="text-primary font-bold hover:underline"
              >
                返回仪表盘
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
