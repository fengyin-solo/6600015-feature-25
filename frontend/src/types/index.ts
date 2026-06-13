export type TaskStatus = 'pending' | 'running' | 'success' | 'failed' | 'retry'
export type NodeType = 'scheduler' | 'worker'

export interface Task {
  id: string
  name: string
  status: TaskStatus
  node: string
  createdAt: number
  startedAt?: number
  completedAt?: number
  retries: number
  maxRetries: number
  duration?: number
  logs: string[]
}

export type NodeStatus = 'online' | 'offline' | 'overloaded'

export interface AnomalyEvent {
  type: NodeStatus
  occurredAt: number
  recoveredAt?: number
  duration?: number
}

export interface ClusterNode {
  id: string
  name: string
  type: NodeType
  status: NodeStatus
  cpu: number
  memory: number
  tasks: number
  uptime: number
  anomalies: AnomalyEvent[]
}

export interface MetricsSnapshot {
  time: number
  totalTasks: number
  runningTasks: number
  successRate: number
  avgLatency: number
  nodeCount: number
}
