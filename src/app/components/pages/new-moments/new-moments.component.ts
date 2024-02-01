import { Component } from '@angular/core';
import { Moment } from 'src/app/Moment';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent {
  bntText = "Compartilhar";

  constructor(
    private momentService: MomentService, 
    private messagesServices: MessagesService,
    private router: Router) {}

  async createHandler(moment: Moment) {
    console.log('Funcionando');
    const formData = new FormData();

    formData.append("title", moment.title);
    formData.append("description", moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    // TODO

    try {
      await this.momentService.createMoment(formData).toPromise();
      console.log('Momento criado com sucesso.');
    } catch (error) {
      console.error('Erro ao criar o momento:', error);
    }

    this.messagesServices.add('Momento adicionado com sucesso!')
    
    this.router.navigate(['/']);

  }
}
