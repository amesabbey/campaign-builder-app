import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../../models/character';

@Component({
  selector: 'app-npc-list',
  standalone: true,
  imports: [],
  templateUrl: './npc-list.component.html',
  styleUrl: './npc-list.component.scss'
})
export class NpcListComponent implements OnInit, OnChanges {

  characterList: Character[] = [];

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.updateCharacterList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    if (changes) {
      console.log('changes: ', changes);
      this.updateCharacterList();
    }
  }

  updateCharacterList() {
    this.getAllCharacters().subscribe((data: [id: Character]) => {
      Object.assign(this.characterList, data);
      console.log('characterList: ', this.characterList);
    });
  }
  
  getAllCharacters(): Observable<any> {
    return this.http.get('https://campaign-builder-app-default-rtdb.firebaseio.com/characters.json').pipe();
  }
}
