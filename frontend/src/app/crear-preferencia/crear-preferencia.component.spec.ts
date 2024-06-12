import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPreferenciaComponent } from './crear-preferencia.component';

describe('CrearPreferenciaComponent', () => {
  let component: CrearPreferenciaComponent;
  let fixture: ComponentFixture<CrearPreferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearPreferenciaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearPreferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
