export class Task {
  project?: string
  name: string
  timestamp?: string
  priority?: number
  times?: {
    start: string
    end: string
  }
  completed: boolean
}