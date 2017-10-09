import { Component } from '@angular/core'
import { ModalService } from './modal.service'

@Component({
  selector: 'modal',
  templateUrl: 'app/shared/modal.component.html',
  styleUrls: ['app/shared/modal.component.css']
})
export class ModalComponent {

  constructor(private modalService:ModalService) {}

  private modal = this.modalService.getModal()


  handleClickOk() {

  }

  handleClickYesNo(resp: boolean) {
    this.modalService.close()
    this.modalService.send(resp)
  }

}
