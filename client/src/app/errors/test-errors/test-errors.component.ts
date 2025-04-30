import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { response } from 'express';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-test-errors',
  standalone: true,
  imports: [],
  templateUrl: './test-errors.component.html',
  styleUrl: './test-errors.component.css'
})
export class TestErrorsComponent {
  baseUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);
  validationErrors: string[] = [];

  get400Error() {
    this.httpClient.get(this.baseUrl + 'error/bad-request').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get401Error() {
    this.httpClient.get(this.baseUrl + 'error/auth').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get404Error() {
    this.httpClient.get(this.baseUrl + 'error/not-found').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get500Error() {
    this.httpClient.get(this.baseUrl + 'error/server-error').subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    })
  }

  get400ValidationError() {
    this.httpClient.post(this.baseUrl + 'account/register', {}).subscribe({
      next: response => console.log(response),
      error: error => {
        console.log(error)
        this.validationErrors = error;
      }
    })
  }
}
