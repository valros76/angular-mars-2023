import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservablesExemplesComponent } from './observables-exemples.component';

describe('ObservablesExemplesComponent', () => {
  let component: ObservablesExemplesComponent;
  let fixture: ComponentFixture<ObservablesExemplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservablesExemplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObservablesExemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
