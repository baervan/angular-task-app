import { Injectable } from '@angular/core'

@Injectable()
export class ModalService {
  private modal:any = {
    on: false,
    data: {}
  }

  getModal() {
    return this.modal
  }

  toggle() {
    this.modal.on = !this.modal.on
  }

  render(params: any) {
    this.modal.data = params
    this.toggle()
  }

  close() {
    this.toggle()
    this.reset()
  }

  reset() {
    this.modal.data = {}
  }

  send(resp: any) {
    //return resp
  }
}
