import { Component,Input,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit{
  @Input() bntText!: string

  momentForm!: FormGroup

  constructor() {}

  ngOnInit(): void {
      this.momentForm = new FormGroup({
        id: new FormControl('', [Validators.required]),
        title: new FormControl(''),
        description: new FormControl('', [Validators.required]),
        image: new FormControl(''),
      });
  }

get title(){
  return this.momentForm.get('title')!;
}

get description(){
  return this.momentForm.get('description')!;
}

  

  submit() {
if(this.momentForm.invalid){
  return;
}


    console.log('Enviou o formulário')
  }

}
