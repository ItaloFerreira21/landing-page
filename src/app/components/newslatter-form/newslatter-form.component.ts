import { Component, signal } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { NewslatterService } from '../../services/newslatter.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'newslatter-form',
  standalone: true,
  imports: [BtnComponent, ReactiveFormsModule],
  providers: [NewslatterService],
  templateUrl: './newslatter-form.component.html',
  styleUrl: './newslatter-form.component.scss',
})
export class NewslatterFormComponent {
  newslatterForm!: FormGroup;
  loading = signal(false); //para dizer ao html que a pag atualizou, igual o useState
  constructor(private service: NewslatterService) {
    this.newslatterForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);
    if (this.newslatterForm.valid) {
      this.service.sendData(this.newslatterForm.value.nome, this. newslatterForm.value.email).subscribe({
        next: (response) => {
          this.newslatterForm.reset()
          this.loading.set(false);
        },
        error: (error) => {
          console.log(error);
        },
      })
    }
  }
}
