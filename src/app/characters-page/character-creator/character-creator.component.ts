import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SelectOption {
  value: string;
  viewValue: string;
}

/**
 * Used to create a new character
 */
@Component({
  selector: 'app-character-creator',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientModule,
  ],
  templateUrl: './character-creator.component.html',
  styleUrl: './character-creator.component.scss'
})
export class CharacterCreatorComponent {

  /* Lists for the select form fields */
  genders: SelectOption[] = [
    {value: 'female',     viewValue: 'Female'},
    {value: 'male',       viewValue: 'Male'},
    {value: 'nonbinary',  viewValue: 'Nonbinary'},
    {value: 'agender',    viewValue: 'Agender'},
  ];

  alignments: SelectOption[] = [
    {value: 'lawful-good',      viewValue: 'Lawful Good'},
    {value: 'neutral-good',     viewValue: 'Neutral Good'},
    {value: 'chaotic-good',     viewValue: 'Chaotic Good'},
    {value: 'lawful-neutral',   viewValue: 'Lawful Neutral'},
    {value: 'true-neutral',     viewValue: 'True Neutral'},
    {value: 'chaotic-neutral',  viewValue: 'Chaotic Neutral'},
    {value: 'lawful-evil',      viewValue: 'Lawful Evil'},
    {value: 'neutral-evil',     viewValue: 'Neutral Evil'},
    {value: 'chaotic-evil',     viewValue: 'Chaotic Evil'},
  ];

  sizes: SelectOption[] = [
    {value: 'tiny',       viewValue: 'Tiny'},
    {value: 'small',      viewValue: 'Small'},
    {value: 'medium',     viewValue: 'Medium'},
    {value: 'large',      viewValue: 'Large'},
    {value: 'huge',       viewValue: 'Huge'},
    {value: 'gargantuan', viewValue: 'Gargantuan'},
  ];

  npcTypes: SelectOption[] = [
    {value: 'quest', viewValue: 'Quest Giver'},
    {value: 'vendor', viewValue: 'Vendor'},
    {value: 'enemy', viewValue: 'Enemy'},
    {value: 'ally', viewValue: 'Ally'},
    {value: 'background', viewValue: 'Background'},
  ];

  npcAttitudes: SelectOption[] = [
    {value: 'neutral',    viewValue: 'Neutral'},
    {value: 'friendly',   viewValue: 'Friendly'},
    {value: 'loyal',      viewValue: 'Loyal'},
    {value: 'devoted',    viewValue: 'Devoted'},
    {value: 'avoidant',   viewValue: 'Avoidant'},
    {value: 'fearful',    viewValue: 'Fearful'},
    {value: 'hostile',    viewValue: 'Hostile'},
    {value: 'aggressive', viewValue: 'Aggressive'},
    {value: 'violent',    viewValue: 'Violent'},
  ];

  /* Form fields */ 
  characterForm = new FormGroup({
    names: new FormGroup({
      title:      new FormControl('', {nonNullable: true}),
      fullName:   new FormControl('', Validators.required),
      shortName:  new FormControl('', {nonNullable: true}),
    }),
    identity: new FormGroup({
      age:        new FormControl('', {nonNullable: true}),
      gender:     new FormControl('', {nonNullable: true}),
      sexuality:  new FormControl('', {nonNullable: true}),
      alignment:  new FormControl('', {nonNullable: true}),
    }),
    physical: new FormGroup({
      height:     new FormControl('', {nonNullable: true}),
      weight:     new FormControl('', {nonNullable: true}),
      eyes:       new FormControl('', {nonNullable: true}),
      hair:       new FormControl('', {nonNullable: true}),
      size:       new FormControl('', {nonNullable: true}),
      build:      new FormControl('', {nonNullable: true}),
    }),
    relationships: new FormGroup({
      type:       new FormControl('', {nonNullable: true}),
      attitude:   new FormControl('', {nonNullable: true}),
      partner:    new FormControl('', {nonNullable: true}),
      family:     new FormControl('', {nonNullable: true}),
      friends:    new FormControl('', {nonNullable: true}),
      enemies:    new FormControl('', {nonNullable: true}),
    }),
    personality: new FormGroup({
      motives:    new FormControl('', {nonNullable: true}),
      bonds:      new FormControl('', {nonNullable: true}),
      ideals:     new FormControl('', {nonNullable: true}),
      flaws:      new FormControl('', {nonNullable: true}),
    }),
    history: new FormGroup({
      location:   new FormControl('', {nonNullable: true}),
      hometown:   new FormControl('', {nonNullable: true}),
      occupation: new FormControl('', {nonNullable: true}),
      backstory:  new FormControl('', {nonNullable: true}),
    }),
  });

  constructor(private http: HttpClient) {}

  onSubmit(characterData: any) {
    this.createNewCharacter(characterData)
    .subscribe({
      next: response => {
        console.log('Character posted successfully, response: ', response);
        this.clearFormData();
      },
      error: error => {
        console.error('There was an error creating the character, error: ', error);
      }
    });
  }

  clearFormData() {
    this.characterForm.reset();
  }

  createNewCharacter(characterData: any): Observable<any> {
    return this.http.post('https://campaign-builder-app-default-rtdb.firebaseio.com/characters.json', characterData).pipe();
  }

  retrieveCharacterById(id: string): Observable<any> {
    return this.http.get(`https://campaign-builder-app-default-rtdb.firebaseio.com/characters/${id}.json`).pipe();
  }

  getAllCharacters(): Observable<any> {
    return this.http.get('https://campaign-builder-app-default-rtdb.firebaseio.com/characters.json').pipe();
  }

}

/** Expected form output:
{
  history: {
    backstory: "",
    hometown: "",
    location: "",
    occupation: ""
  },
  identity: {
    age: "",
    alignment: "",
    gender: "",
    sexuality: ""
  },
  names: {
    fullName: "",
    shortName: "",
    title: ""
  },
  personality: {
    bonds: "",
    flaws: "",
    ideals: "",
    motives: ""
  },
  physical: {
    build: "",
    eyes: "",
    hair: "",
    height: "",
    size: "",
    weight: ""
  },
  relationships: {
    attitude: "",
    enemies: "",
    family: "",
    friends: "",
    partner: "",
    type: ""
  }
}
 */