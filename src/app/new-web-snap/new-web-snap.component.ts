import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable, map } from "rxjs";
import { CommonModule } from "@angular/common";
import {Router} from "@angular/router";

import { WebSnap } from '../models/web-snap.model';

import { WebSnapsService } from '../services/web-snaps.service';

import { WebSnapComponent } from '../web-snap/web-snap.component';

@Component({
  selector: 'app-new-web-snap',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    WebSnapComponent
  ],
  templateUrl: './new-web-snap.component.html',
  styleUrl: './new-web-snap.component.css'
})
export class NewWebSnapComponent implements OnInit {
  webSnapForm!: FormGroup;
  webSnapPreview$!: Observable<WebSnap>;

  submitError:boolean = false;

  urlRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private webSnapsService: WebSnapsService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.webSnapForm = this.formBuilder.group({
      title: [
        null,
        Validators.required
      ],
      description: [
        null,
        Validators.required
      ],
      imageUrl: [
        "https://placehold.co/1920x1080/png",
        {
          validators: [
            Validators.required,
            Validators.pattern(this.urlRegex)
          ],
          updateOn: "change"
        }
      ],
      location: [
        null
      ]
    });

    this.webSnapPreview$ = this.webSnapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        createdDate: new Date(),
        id: 1,
        likes: 0,
        likeBtnCta: "like-cta",
        isLiked: false
      }))
    );
  }

  onSubmitForm() {
    if (this.webSnapForm.invalid) {
      this.submitError = true;
      return;
    }
    this.submitError = false;
    this.webSnapsService.addWebSnap(this.webSnapForm.value);
    /**
     * La commande ci-dessous permet de faire un clean des champs du formulaire, après la soumission des données.
     */
    this.webSnapForm.reset();

    this.router.navigateByUrl("/websnaps");
  }
}
