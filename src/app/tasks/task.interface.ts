export class Task {
  id: number
  project?: string
  name: string
  infos?: string
  timestamp?: {}
  priority?: number
  urgent?: boolean
  times?: {
    start: any
    end: any
    startDisplay?: string
    endDisplay?: string
  }
  completed: boolean
  active?: boolean
}
