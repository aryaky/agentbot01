import React from 'react';
import { motion } from 'motion/react';
import { 
  Filter, 
  Upload, 
  Megaphone, 
  ShieldCheck, 
  ChevronRight, 
  ChevronLeft,
  MoreVertical,
  Activity,
  Edit,
  Trash2,
  Lightbulb
} from 'lucide-react';
import { cn } from '../lib/utils';

export const TaskManagementPage: React.FC = () => {
  return (
    <section className="p-8 max-w-[1400px] mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-2">
          <nav className="flex items-center gap-2 text-xs font-medium text-on-surface-variant tracking-wide">
            <span className="hover:text-primary cursor-pointer transition-colors">首页</span>
            <ChevronRight size={14} />
            <span className="text-on-surface">任务管理</span>
          </nav>
          <h1 className="font-display font-extrabold text-4xl text-on-surface tracking-tight">任务管理</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-5 py-2.5 bg-surface-container-highest text-on-surface rounded-full font-semibold text-sm hover:bg-surface-container-high transition-all flex items-center gap-2">
            <Filter size={18} /> 筛选
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-br from-primary to-primary-dim text-white rounded-full font-bold text-sm shadow-lg hover:scale-[1.02] transition-transform flex items-center gap-2">
            <Upload size={18} /> 导入
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { label: '累计批次', value: '142' },
          { label: '正在运行', value: '24', badge: '运行中' },
          { label: '系统效率', value: '98.4%', chart: true, span: 2 },
        ].map((stat, i) => (
          <div key={i} className={cn(
            "bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10",
            stat.span && "md:col-span-2 bg-primary-container/30 border-primary-fixed-dim/40"
          )}>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-1">{stat.label}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <p className="text-3xl font-display font-extrabold text-on-surface">{stat.value}</p>
                {stat.badge && <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-bold">{stat.badge}</span>}
              </div>
              {stat.chart && (
                <div className="h-12 w-24 flex items-end justify-between gap-1">
                  {[40, 60, 80, 50, 100].map((h, j) => (
                    <div key={j} className="w-2 bg-primary rounded-t" style={{ height: `${h}%` }} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20">
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">任务名称</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">创建时间</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">导入总数</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">完成进度</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">状态</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {[
                { name: '保险推广 - 批次 1', date: '2023年10月24日', total: '12,500', progress: 68, status: '进行中', icon: Megaphone, color: 'bg-primary/10 text-primary' },
                { name: '客户满意度调查 - Q4', date: '2023年10月22日', total: '5,000', progress: 100, status: '运行中', icon: ShieldCheck, color: 'bg-tertiary/10 text-tertiary' },
              ].map((row, i) => (
                <tr key={i} className="group hover:bg-surface-container transition-colors">
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center", row.color)}>
                        <row.icon size={18} />
                      </div>
                      <span className="font-bold text-on-surface text-sm">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-on-surface-variant">{row.date}</td>
                  <td className="px-6 py-5 font-medium text-sm text-on-surface">{row.total}</td>
                  <td className="px-6 py-5">
                    <div className="w-full max-w-[120px]">
                      <div className="flex justify-between text-[10px] font-bold mb-1">
                        <span className={row.progress === 100 ? "text-green-600" : "text-primary"}>{row.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                        <div className={cn("h-full rounded-full", row.progress === 100 ? "bg-green-500" : "bg-primary")} style={{ width: `${row.progress}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className={cn(
                      "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold",
                      row.progress === 100 ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                    )}>{row.status}</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg text-on-surface-variant"><Edit size={16} /></button>
                      <button className="p-2 hover:bg-surface-container-highest rounded-lg text-primary"><Activity size={16} /></button>
                      <button className="p-2 hover:bg-error-container/20 rounded-lg text-error"><Trash2 size={16} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 bg-surface-container-low flex items-center justify-between">
          <p className="text-xs text-on-surface-variant font-medium">共 142 条记录</p>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg hover:bg-surface-container-highest transition-colors text-on-surface-variant disabled:opacity-30" disabled><ChevronLeft size={18} /></button>
            <button className="w-8 h-8 rounded-lg bg-primary text-white text-xs font-bold shadow-sm">1</button>
            <button className="w-8 h-8 rounded-lg hover:bg-surface-container-highest text-xs font-bold transition-colors">2</button>
            <button className="p-1.5 rounded-lg hover:bg-surface-container-highest transition-colors text-on-surface-variant"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 bg-surface-container-lowest rounded-2xl shadow-sm border-l-4 border-primary flex items-center gap-8">
        <div className="shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          <Lightbulb size={32} />
        </div>
        <div className="flex-1">
          <h4 className="font-display font-bold text-lg text-on-surface">外呼优化建议</h4>
          <p className="text-sm text-on-surface-variant leading-relaxed mt-1">根据当前系统负载，在上午 10:00 到 11:30 之间调度“保险推广”批次通常可提高 12% 的接通率。</p>
        </div>
        <button className="shrink-0 px-6 py-2.5 rounded-full border border-primary text-primary font-bold text-xs hover:bg-primary/5 transition-all">开启智能调度</button>
      </div>
    </section>
  );
};
