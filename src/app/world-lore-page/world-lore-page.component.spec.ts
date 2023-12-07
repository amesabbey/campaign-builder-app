import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldLorePageComponent } from './world-lore-page.component';

describe('WorldLorePageComponent', () => {
  let component: WorldLorePageComponent;
  let fixture: ComponentFixture<WorldLorePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorldLorePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorldLorePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
