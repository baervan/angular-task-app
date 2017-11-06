import { Time } from '../time/time.service'

export class Task {
  constructor() {}

  id: number
  project?: string
  name: string
  infos?: string
  timestamp?: Time
  end?: Time
  priority?: number
  urgent?: boolean
  completed: boolean
  active?: boolean
}
