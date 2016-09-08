import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { Modal } from './modal.component';
import { ModalContent } from './modal-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Modal,
    ModalContent
  ],
  exports: [
    Modal,
    ModalContent
  ]
})
export class ModalModule { }
