import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncountersPageComponent } from './encounters-page.component';

describe('EncountersPageComponent', () => {
  let component: EncountersPageComponent;
  let fixture: ComponentFixture<EncountersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncountersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncountersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
