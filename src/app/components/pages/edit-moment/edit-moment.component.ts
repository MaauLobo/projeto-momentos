import { Component, OnInit } from '@angular/core';

import { Moment } from 'src/app/Moment';

import { MomentService } from 'src/app/services/moment.service';

import { ActivatedRoute, Router } from '@angular/router';

import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-edit-moment',
  templateUrl: './edit-moment.component.html',
  styleUrls: ['./edit-moment.component.css']
})
export class EditMomentComponent {
  moment!: Moment;
  bntText: string = 'Editar';

    constructor(
      private mommentService: MomentService, 
      private route: ActivatedRoute,
      private messageServices: MessagesService,
      private router: Router
      )
      {}

    ngOnInit(): void {
      const id =  Number(this.route.snapshot.paramMap.get("id"))

      this.mommentService.getMoment(id).subscribe((item)=>{
        this.moment = item.data;
      })
    }

    async editHandler(momentData: Moment){
      const id = this.moment.id

      const formData =  new FormData()

      formData.append('title', momentData.title)
      formData.append('description', momentData.description)

      if(momentData.image){
        formData.append('image', momentData.image);
      }

      await this.mommentService.updateMoment(id!, formData).subscribe()

      this.messageServices.add(`Moment ${id} foi atualizado com sucesso!`)
    
      this.router.navigate(['/'])
    }
}