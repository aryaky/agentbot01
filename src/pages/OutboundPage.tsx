import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Play, Square, ChevronDown, Phone, PhoneIncoming, PhoneForwarded,
  BarChart3, Users, CheckCircle2, ArrowRight, Zap
} from 'lucide-react';
import { cn } from '../lib/utils';

export const OutboundPage: React.FC = () => {
  const [load] = useState(68);

  return (
    <div className="p-8 flex flex-col gap-8 flex-1">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <section className="bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between min-h-[260px] shadow-sm border border-outline-variant/5">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold text-on-surface mb-2">外呼工作台</h2>
                  <p className="text-on-surface-variant text-sm font-medium">机器人外呼控制</p>
                </div>
                <div className="flex items-center gap-2 bg-primary-container px-3 py-1.5 rounded-full border border-primary/10">
                  <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-bold text-on-primary-container">12 台机器人在线</span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3 bg-surface-container-low p-2 rounded-xl border border-outline-variant/10">
                <div className="relative flex-1 w-full">
                  <select className="appearance-none w-full bg-white border border-outline-variant/20 rounded-lg px-4 py-2 text-sm font-medium focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer">
                    <option>选择外呼任务：2024秋季存量回访</option>
                    <option>新用户激活：金融产品线</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant" />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-primary text-white px-6 py-2 rounded-lg font-bold text-sm hover:bg-primary-dim transition-all">
                    <Play size={16} fill="currentColor" /> 启动
                  </button>
                  <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-error text-white px-6 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all">
                    <Square size={16} fill="currentColor" /> 停止
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-end mb-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">系统负载率</span>
                <span className="text-xl font-extrabold text-primary">{load}%</span>
              </div>
              <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} animate={{ width: `${load}%` }} className="h-full bg-gradient-to-r from-primary via-blue-400 to-tertiary rounded-full" />
              </div>
            </div>
          </section>

          <section className="bg-surface-container-lowest rounded-xl overflow-hidden min-h-[500px] flex flex-col shadow-sm border border-outline-variant/5">
            <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center bg-white">
              <h3 className="font-bold text-lg flex items-center gap-2"><Zap size={20} className="text-primary" /> 实时动态</h3>
              <span className="text-[10px] font-bold text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">实时更新</span>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {[
                { phone: '139xxxx8888', sub: '正在拨打...', status: '等待接听', icon: Phone, type: 'pending' },
                { phone: '158xxxx1234', sub: '已接通 (01:24)', status: '通话中', icon: PhoneIncoming, type: 'active', highlight: true },
                { phone: '177xxxx9900', sub: '已完成 - 时长 03:45', status: '高意向', icon: PhoneForwarded, type: 'completed' },
              ].map((call, i) => (
                <div key={i} className={cn("flex items-center justify-between p-4 rounded-xl border", call.highlight ? "bg-primary-container/20 border-primary shadow-sm" : "bg-surface-container-low border-transparent")}>
                  <div className="flex items-center gap-4">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shadow-sm", call.highlight ? "bg-primary text-white" : "bg-white text-on-surface-variant")}><call.icon size={20} /></div>
                    <div>
                      <p className="font-bold text-on-surface">{call.phone}</p>
                      <p className={cn("text-xs", call.highlight ? "text-primary font-medium" : "text-on-surface-variant")}>{call.sub}</p>
                    </div>
                  </div>
                  <span className={cn("text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider", call.type === 'active' ? "bg-primary text-white" : call.type === 'completed' ? "bg-tertiary-container text-tertiary" : "bg-white text-on-surface-variant border border-outline-variant/20")}>{call.status}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
          <section className="bg-surface-container-low rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-sm min-h-[260px] border border-outline-variant/5">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6"><Users size={32} /></div>
            <h3 className="text-lg font-bold mb-2">队列状态</h3>
            <p className="text-on-surface-variant text-sm px-4 leading-relaxed">当前部署周期内有 <span className="text-on-surface font-bold">842</span> 个待呼，<span className="text-on-surface font-bold">128</span> 个待确认。</p>
            <button className="mt-8 text-primary font-bold text-sm hover:underline flex items-center gap-1">查看队列详情 <ArrowRight size={14} /></button>
          </section>

          <aside className="space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="font-bold text-lg">数据汇总面板</h3>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary" /><span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">今日对比昨日</span></div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-1">名单总量 / 已完成</p>
                    <h4 className="text-2xl font-extrabold text-on-surface">128,492 <span className="text-on-surface-variant/30 font-medium text-lg mx-1">/</span> 84,210</h4>
                  </div>
                  <div className="bg-primary/5 p-2 rounded-lg text-primary"><CheckCircle2 size={20} /></div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden"><div className="h-full bg-primary" style={{ width: '65.5%' }} /></div>
                  <span className="text-xs font-bold text-primary">65.5%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[{ label: '名单触达数', value: '76,104', trend: '+4.2%' }, { label: '总拨打次数', value: '24,842', trend: '+12%' }].map((item, i) => (
                  <div key={i} className="bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-outline-variant/10">
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">{item.label}</p>
                    <div className="flex items-end justify-between">
                      <h4 className="text-xl font-extrabold text-on-surface">{item.value}</h4>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-600">{item.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex flex-col"><span className="font-bold text-sm">名单触达趋势</span><span className="text-[10px] text-on-surface-variant">过去7个工作日统计</span></div>
                  <BarChart3 size={16} className="text-on-surface-variant" />
                </div>
                <div className="flex items-end justify-between gap-2 h-32 px-2">
                  {[40, 65, 35, 85, 55, 70, 90].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full">
                      <div className="bg-surface-container-high w-full rounded-t-sm" style={{ height: `${h}%` }} />
                      <div className="bg-primary w-full rounded-t-sm" style={{ height: `${h * 0.8}%` }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
