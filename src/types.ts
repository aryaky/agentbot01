export type View = 'login' | 'dashboard' | 'outbound' | 'tasks' | 'analytics' | 'logs';

export interface Task {
  id: string;
  name: string;
  createdAt: string;
  total: number;
  progress: number;
  status: 'running' | 'completed' | 'paused' | 'pending';
  type: 'promotion' | 'survey' | 'followup';
}

export interface CallLog {
  id: string;
  phone: string;
  status: 'calling' | 'connected' | 'completed' | 'failed';
  duration?: string;
  intent?: 'high' | 'medium' | 'low';
}
