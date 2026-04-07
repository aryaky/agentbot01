import React from 'react';
import { motion } from 'motion/react';
import { User, Lock, ArrowRight, Bot } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="bg-login-pattern min-h-screen w-full flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Illustration */}
      <div className="fixed bottom-0 right-0 w-1/3 h-1/2 opacity-10 pointer-events-none hidden lg:block">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtTedM881Sc0eTh23oT6W18_ea5mYDzLCuufRMfMvgLIaRqbDAweMGFtDJo4rKnzP8jkADna8Z49GF0yFsKCJ9proZ84NNCj0arrcTFEgh3DwJCRDrXG3Bl6-a-4Y5lACmz1nYz-xj-oqL7hhQOyAMKXctxWesbq4p1YKR1nSKLgoYj2gLRfNExrtCUTmJQu6-DE6It3mEay2mmZO_fep_Jh6-LGFgejL1suRDgISyV2ifaMAhXO-GDi_lowLZdGmCY55S2jXVKKw" 
          alt="Robot Arm Blueprint"
          className="w-full h-full object-contain object-bottom-right"
          referrerPolicy="no-referrer"
        />
      </div>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md z-10"
      >
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary mb-6 shadow-lg shadow-primary/20">
            <Bot className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Antares 机器人外呼系统</h1>
          <p className="text-on-surface-variant text-sm tracking-wide">企业级集群管理系统</p>
        </div>

        <section className="bg-surface-container-lowest rounded-xl p-8 shadow-xl shadow-on-surface/5 border border-outline-variant/10">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface-variant ml-1" htmlFor="username">用户名</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <User size={18} />
                </div>
                <input 
                  type="text" 
                  id="username" 
                  placeholder="例如: admin_antares"
                  className="block w-full pl-10 pr-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface text-sm placeholder:text-outline/40 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-on-surface-variant ml-1" htmlFor="password">密码</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <Lock size={18} />
                </div>
                <input 
                  type="password" 
                  id="password" 
                  placeholder="请输入密码"
                  className="block w-full pl-10 pr-4 py-3 bg-surface-container-low border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-on-surface text-sm placeholder:text-outline/40 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="remember" 
                  className="h-4 w-4 text-primary focus:ring-primary/20 border-outline-variant rounded bg-surface-container-low"
                />
                <label htmlFor="remember" className="ml-2 block text-sm text-on-surface-variant">记住我</label>
              </div>
              <a href="#" className="text-sm font-medium text-primary hover:underline">忘记密码？</a>
            </div>

            <button 
              type="submit"
              className="w-full bg-gradient-to-br from-primary to-primary-dim text-white py-3.5 px-4 rounded-full font-semibold text-sm shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>登录</span>
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-outline-variant/10 text-center">
            <p className="text-on-surface-variant text-sm">
              还没有账号？ 
              <a href="#" className="text-primary font-semibold hover:underline ml-1">注册账号</a>
            </p>
          </div>
        </section>

        <div className="mt-12 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">系统在线</span>
          </div>
          <div className="h-4 w-px bg-outline-variant/30"></div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-on-surface-variant tracking-widest uppercase">版本 V2.4.1</span>
          </div>
        </div>
      </motion.main>
    </div>
  );
};
