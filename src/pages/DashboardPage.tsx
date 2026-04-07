import React from 'react';
import { motion } from 'motion/react';
import { 
  TrendingUp, 
  TrendingDown, 
  Calendar, 
  Plus, 
  AlertTriangle, 
  MoreVertical,
  Play,
  StopCircle,
  PhoneCall,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { time: '08:00', value: 30 },
  { time: '10:00', value: 45 },
  { time: '12:00', value: 80 },
  { time: '14:00', value: 65 },
  { time: '16:00', value: 90 },
  { time: '18:00', value: 110 },
  { time: '20:00', value: 130 },
];

export const DashboardPage: React.FC = () => {
  return (
    <div className="p-10 space-y-10">
      {/* Page Title Area */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h2 className="text-5xl font-display font-extrabold text-on-surface tracking-tight">仪表盘</h2>
          <p className="text-lg text-on-surface-variant mt-2">欢迎回来，这是您当前的机器人出库作业实时概览。</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-surface-container-high text-on-surface text-sm font-bold hover:bg-surface-container-highest transition-colors">
            <Calendar size={18} />
            2023年10月24日
          </button>
          <button className="flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-br from-primary to-primary-dim text-white text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-transform">
            <Plus size={18} />
            新建出库任务
          </button>
        </div>
      </div>

      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {[
          { label: '名单总数', value: '12,840', trend: '+4.2%', up: true },
          { label: '已完成名单', value: '8,432', progress: 65 },
          { label: '名单达成率', value: '65.7%', sub: '目标: 80%' },
          { label: '呼叫总数', value: '45.2k', sub: '今日累计' },
          { label: '接通率', value: '32.1%', trend: '-1.5%', up: false },
          { label: '平均通话时长', value: '45s', sub: 'Inter' },
        ].map((metric, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/5 hover:border-primary/20 transition-all shadow-sm"
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">{metric.label}</p>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-display font-bold text-on-surface">{metric.value}</h3>
              {metric.trend && (
                <span className={cn("text-xs font-bold flex items-center gap-0.5", metric.up ? "text-emerald-600" : "text-error")}>
                  {metric.trend} {metric.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                </span>
              )}
              {metric.progress && (
                <div className="w-12 h-1 bg-surface-container rounded-full overflow-hidden mb-1.5">
                  <div className="bg-primary h-full" style={{ width: `${metric.progress}%` }} />
                </div>
              )}
              {metric.sub && <span className="text-[10px] font-bold text-on-surface-variant/60">{metric.sub}</span>}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-12 gap-10">
        {/* Large Execution Trend Chart */}
        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/5">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h4 className="text-2xl font-display font-bold">名单达成趋势</h4>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider mt-1">Execution Trend & Velocity</p>
            </div>
            <div className="flex gap-2">
              <span className="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-[10px] font-bold">实时</span>
              <span className="px-4 py-1.5 rounded-full bg-surface-container text-on-surface-variant text-[10px] font-bold">24小时</span>
            </div>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#005fae" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#005fae" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e8eff4" />
                <XAxis 
                  dataKey="time" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fill: '#566168' }}
                  dy={10}
                />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    fontSize: '12px'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#005fae" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-outline-variant/10 pt-10">
            {[
              { label: '峰值速率', value: '120 call/min' },
              { label: '平均速率', value: '85 call/min' },
              { label: '异常波动', value: '2 次', color: 'text-error' },
              { label: '预计完成', value: '22:45', color: 'text-tertiary' },
            ].map((item, i) => (
              <div key={i}>
                <p className="text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">{item.label}</p>
                <p className={cn("text-xl font-display font-bold", item.color || "text-on-surface")}>{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Cluster Status Overview */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <div className="bg-surface-container-high p-8 rounded-2xl flex-1 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/20 rounded-full blur-3xl" />
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <h4 className="text-2xl font-display font-bold">集群运行状态</h4>
              </div>
              <p className="text-xs text-on-surface-variant uppercase tracking-wider">Robot Cluster Health</p>
            </div>
            
            <div className="my-8">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-6xl font-display font-extrabold tracking-tighter text-primary">482</span>
                <span className="text-xl font-bold text-on-surface-variant pb-2">/ 500</span>
              </div>
              <p className="text-sm font-medium text-on-surface-variant">当前在线机器人实例</p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-on-surface-variant">正在作业</span>
                  <span>384 (76%)</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-[76%] rounded-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-on-surface-variant">空闲待命</span>
                  <span>98 (20%)</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div className="bg-tertiary h-full w-[20%] rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl border-l-4 border-error shadow-sm">
            <div className="flex gap-4">
              <div className="p-2 bg-error/10 rounded-lg text-error">
                <AlertTriangle size={24} />
              </div>
              <div>
                <h5 className="text-base font-bold">集群告警: 延迟增加</h5>
                <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                  检测到节点 #304 响应延迟超过 250ms，系统已自动分配备用集群。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/5">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h4 className="text-2xl font-display font-bold">实时出库任务动态</h4>
            <p className="text-xs text-on-surface-variant uppercase tracking-wider mt-1">Real-time Task Progress</p>
          </div>
          <button className="text-primary text-sm font-bold hover:underline">查看全部任务</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-outline-variant/10">
                <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">任务ID / 名称</th>
                <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">状态</th>
                <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">进度</th>
                <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">成功率</th>
                <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">预计剩余</th>
                <th className="pb-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {[
                { id: '#TK-8839', name: '华东区双十一预热', status: '执行中', progress: 82, success: '94.2%', remaining: '45 min' },
                { id: '#TK-8840', name: '逾期回访计划B', status: '执行中', progress: 45, success: '88.5%', remaining: '2h 15min' },
                { id: '#TK-8835', name: '满意度调研', status: '已挂起', progress: 100, success: '76.0%', remaining: '--', paused: true },
              ].map((task, i) => (
                <tr key={i} className="group hover:bg-surface-container/30 transition-colors">
                  <td className="py-5">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-2 h-2 rounded-full", task.paused ? "bg-tertiary" : "bg-primary")} />
                      <div>
                        <p className="text-sm font-bold">{task.id} {task.name}</p>
                        <p className="text-[10px] text-on-surface-variant mt-0.5">创建于: 2023-10-24 08:30</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5">
                    <span className={cn(
                      "px-2.5 py-0.5 rounded text-[10px] font-bold",
                      task.paused ? "bg-surface-container text-on-surface-variant" : "bg-primary-container text-primary"
                    )}>
                      {task.status}
                    </span>
                  </td>
                  <td className="py-5">
                    <div className="flex items-center gap-4 w-48">
                      <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                        <div 
                          className={cn("h-full", task.paused ? "bg-tertiary/40" : "bg-primary")} 
                          style={{ width: `${task.progress}%` }} 
                        />
                      </div>
                      <span className="text-xs font-bold">{task.progress}%</span>
                    </div>
                  </td>
                  <td className="py-5 text-sm font-medium">{task.success}</td>
                  <td className="py-5 text-sm text-on-surface-variant">{task.remaining}</td>
                  <td className="py-5 text-right">
                    <button className="p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-surface-container rounded-lg">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(' ');
}
