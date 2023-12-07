import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { EncountersPageComponent } from './encounters-page/encounters-page.component';
import { ItemsPageComponent } from './items-page/items-page.component';
import { MapsPageComponent } from './maps-page/maps-page.component';
import { MonstersPageComponent } from './monsters-page/monsters-page.component';
import { SessionsPageComponent } from './sessions-page/sessions-page.component';
import { WorldLorePageComponent } from './world-lore-page/world-lore-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome',      component: WelcomePageComponent },
    { path: 'characters',   component: CharactersPageComponent },
    { path: 'encounters',   component: EncountersPageComponent },
    { path: 'items',        component: ItemsPageComponent },
    { path: 'maps',         component: MapsPageComponent },
    { path: 'monsters',     component: MonstersPageComponent },
    { path: 'sessions',     component: SessionsPageComponent },
    { path: 'world-lore',   component: WorldLorePageComponent },
];
