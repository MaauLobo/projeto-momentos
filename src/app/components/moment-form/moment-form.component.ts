import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css']
})
export class MomentFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<Moment>()
  @Input() bntText!: string;

  momentForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.momentForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: [''],
      image: (''),
    });
  }

  ngOnInit(): void {

  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.momentForm.patchValue({ image: event.target.files[0] });
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
  
    console.log('submit() called in MomentFormComponent');
    console.log(this.momentForm.value);
  
    this.onSubmit.emit(this.momentForm.value);
  }
  
}
