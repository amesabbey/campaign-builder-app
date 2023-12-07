import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersPageComponent } from './monsters-page.component';

describe('MonstersPageComponent', () => {
  let component: MonstersPageComponent;
  let fixture: ComponentFixture<MonstersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonstersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonstersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
