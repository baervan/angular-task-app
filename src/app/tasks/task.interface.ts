export class Task {
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
  visible?: boolean
}
