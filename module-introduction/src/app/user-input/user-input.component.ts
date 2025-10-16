import { Component } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment: number = 0;
  annualInvestment: number = 0;
  expectedReturn: number = 0;
  duration: number = 0;

  handleSubmit() {
    console.log(
      this.initialInvestment,
      this.annualInvestment,
      this.expectedReturn,
      this.duration
    );
  }
}
