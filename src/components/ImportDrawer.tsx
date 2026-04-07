import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, CloudUpload, Check } from 'lucide-react';
import { cn } from '../lib/utils';

interface ImportDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ImportDrawer: React.FC<ImportDrawerProps> = ({ isOpen, onClose }) => {
  const [taskType, setTaskType] = useState<'existing' | 'new'>('existing');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[60]"
          />

          {/* Drawer Panel */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full max-w-[480px] bg-surface-container-lowest shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-outline-variant/10 flex items-center justify-between">
              <h3 className="text-xl font-display font-bold text-on-surface">导入名单</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-surface-container rounded-full transition-colors text-on-surface-variant"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {/* Task Selection */}
              <div className="space-y-4">
                <label className="text-sm font-bold text-on-surface">选择任务</label>
                <div className="flex p-1 bg-surface-container-low rounded-lg w-full">
                  <button 
                    onClick={() => setTaskType('existing')}
                    className={cn(
                      "flex-1 py-2 text-xs font-bold rounded-md transition-all",
                      taskType === 'existing' ? "bg-white shadow-sm text-primary" : "text-on-surface-variant hover:text-on-surface"
                    )}
                  >
                    关联现有任务
                  </button>
                  <button 
                    onClick={() => setTaskType('new')}
                    className={cn(
                      "flex-1 py-2 text-xs font-bold rounded-md transition-all",
                      taskType === 'new' ? "bg-white shadow-sm text-primary" : "text-on-surface-variant hover:text-on-surface"
                    )}
                  >
                    新建任务
                  </button>
                </div>

                {taskType === 'existing' ? (
                  <div className="space-y-2">
                    <select className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none">
                      <option disabled selected>请选择现有任务...</option>
                      <option>保险推广 - 批次 1</option>
                      <option>客户满意度调查 - Q4</option>
                      <option>房地产线索获取</option>
                    </select>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <input 
                      type="text" 
                      className="w-full bg-white border border-outline-variant/20 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                      placeholder="请输入新任务名称"
                    />
                  </div>
                )}
              </div>

              {/* File Upload */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-on-surface">上传名单文件</label>
                  <a href="#" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                    <Download size={14} />
                    下载模板
                  </a>
                </div>
                <div className="border-2 border-dashed border-outline-variant/30 rounded-2xl p-10 flex flex-col items-center justify-center bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                    <CloudUpload size={28} />
                  </div>
                  <p className="text-sm font-bold text-on-surface mb-1">点击或拖拽文件至此处上传</p>
                  <p className="text-[11px] text-on-surface-variant">支持 .xlsx, .xls 格式</p>
                </div>
              </div>

              {/* Advanced Toggle */}
              <div className="flex items-center justify-between pt-4">
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-on-surface">不严格按照模板导入</p>
                  <p className="text-xs text-on-surface-variant">开启后系统将尝试自动映射字段</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-outline-variant/30 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            </div>

            <div className="p-6 border-t border-outline-variant/10 flex items-center gap-3">
              <button 
                onClick={onClose}
                className="flex-1 py-3 bg-surface-container-high text-on-surface rounded-xl font-bold text-sm hover:bg-surface-container-highest transition-colors"
              >
                取消
              </button>
              <button 
                onClick={() => {
                  alert('导入成功（模拟）');
                  onClose();
                }}
                className="flex-[2] py-3 bg-gradient-to-br from-primary to-primary-dim text-white rounded-xl font-bold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                确认导入
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};
