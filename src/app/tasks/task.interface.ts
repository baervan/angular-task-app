export class Task {
  id: number
  project?: string
  name: string
  timestamp?: {}
  priority?: number
  urgent?: boolean
  times?: {
    start: string
    end: string
  }
  completed: boolean
  active?: boolean
}
