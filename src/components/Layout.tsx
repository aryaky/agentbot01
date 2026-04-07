import React from 'react';
import { 
  LayoutDashboard, 
  Network, 
  Bot, 
  ClipboardList, 
  BarChart, 
  Terminal,
  ChevronRight,
  Search,
  Bell,
  HelpCircle,
  Settings,
  LogOut,
  LifeBuoy,
  Plus,
  Menu,
  PanelLeftClose,
  PanelLeft
} from 'lucide-react';
import { cn } from '../lib/utils';
import { View } from '../types';

interface SidebarProps {
  currentView: View;
  onViewChange: (view: View) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ currentView, onViewChange, collapsed, setCollapsed }) => {
  const navItems = [
    { id: 'dashboard', label: '仪表盘', icon: LayoutDashboard },
    { id: 'cluster', label: '集群状态', icon: Network },
    { id: 'outbound', label: '外呼管理', icon: Bot },
    { id: 'tasks', label: '任务管理', icon: ClipboardList },
    { id: 'analytics', label: '数据分析', icon: BarChart },
    { id: 'logs', label: '系统日志', icon: Terminal },
  ];

  return (
    <aside 
      className={cn(
        "h-screen fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant/10 flex flex-col p-4 transition-all duration-300 z-50",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="mb-8 px-2 flex items-center justify-between">
        {!collapsed && (
          <div className="flex flex-col">
            <span className="font-display text-lg font-extrabold tracking-tight text-primary">控制中心</span>
            <span className="text-[10px] text-on-surface-variant font-medium tracking-widest uppercase">V2.4.1 运行中</span>
          </div>
        )}
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 hover:bg-surface-container rounded-lg transition-colors text-on-surface-variant"
        >
          {collapsed ? <PanelLeft size={20} /> : <PanelLeftClose size={20} />}
        </button>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onViewChange(item.id as View)}
            className={cn(
              "flex items-center gap-3 px-4 py-3 transition-all rounded-xl group relative",
              currentView === item.id 
                ? "bg-surface-container-lowest text-primary font-bold shadow-sm" 
                : "text-on-surface-variant hover:bg-surface-container/50"
            )}
          >
            <item.icon size={20} className={cn("shrink-0", currentView === item.id ? "text-primary" : "text-on-surface-variant")} />
            {!collapsed && <span className="text-sm whitespace-nowrap">{item.label}</span>}
            {collapsed && (
              <div className="absolute left-full ml-2 px-2 py-1 bg-on-surface text-surface text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                {item.label}
              </div>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-4 flex flex-col gap-1">
        <button className={cn(
          "w-full mb-4 bg-gradient-to-br from-primary to-primary-dim text-white font-display font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2",
          collapsed ? "h-12 rounded-xl" : "py-3 rounded-full"
        )}>
          <Plus size={20} />
          {!collapsed && <span>新建部署</span>}
        </button>
        
        <button className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-on-surface transition-all rounded-lg">
          <LifeBuoy size={18} />
          {!collapsed && <span className="text-xs font-medium">技术支持</span>}
        </button>
        
        <button 
          onClick={() => onViewChange('login')}
          className="flex items-center gap-3 px-4 py-2 text-error hover:opacity-80 transition-all rounded-lg"
        >
          <LogOut size={18} />
          {!collapsed && <span className="text-xs font-medium">注销登录</span>}
        </button>
      </div>
    </aside>
  );
};

export const TopNav: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <header 
      className={cn(
        "fixed top-0 right-0 z-40 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 flex justify-between items-center px-8 h-16 transition-all duration-300",
        collapsed ? "left-20" : "left-64"
      )}
    >
      <div className="flex items-center gap-8">
        <span className="text-xl font-bold tracking-tight text-primary font-display">RoboFlow 企业版</span>
        <div className="hidden md:flex items-center bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/5">
          <Search size={16} className="text-on-surface-variant/60" />
          <input 
            type="text" 
            placeholder="搜索任务、集群或日志..." 
            className="bg-transparent border-none focus:ring-0 text-sm w-64 placeholder:text-on-surface-variant/40 ml-2"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant">
            <Bell size={20} />
          </button>
          <button className="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant">
            <HelpCircle size={20} />
          </button>
          <button className="p-2 rounded-lg hover:bg-surface-container transition-colors text-on-surface-variant">
            <Settings size={20} />
          </button>
        </div>
        <div className="h-8 w-px bg-outline-variant/20 mx-2" />
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden lg:block">
            <p className="text-xs font-bold text-on-surface">Admin User</p>
            <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">系统管理员</p>
          </div>
          <img 
            src="https://picsum.photos/seed/admin/100/100" 
            alt="Admin" 
            className="w-9 h-9 rounded-full object-cover border-2 border-primary-container group-hover:border-primary transition-colors"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </header>
  );
};
