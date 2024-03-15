import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  // userEmail:string = "test@mail.fr";

  constructor(private router:Router){}

  onSubmitForm(form: NgForm){
    console.log(form.value);
    /**
     * Aura le même effect que : 
     * console.log(form.form.value);
     */
  }
}
