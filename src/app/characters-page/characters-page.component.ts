import { Component } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { NpcListComponent } from "./npc-list/npc-list.component";
import { CharacterCreatorComponent } from "./character-creator/character-creator.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-characters-page',
    standalone: true,
    templateUrl: './characters-page.component.html',
    styleUrl: './characters-page.component.scss',
    imports: [CommonModule, MatExpansionModule, NpcListComponent, CharacterCreatorComponent]
})
export class CharactersPageComponent {

}
