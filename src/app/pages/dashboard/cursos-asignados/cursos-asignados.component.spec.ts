import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAsignadosComponent } from './cursos-asignados.component';

describe('CursosAsignadosComponent', () => {
  let component: CursosAsignadosComponent;
  let fixture: ComponentFixture<CursosAsignadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosAsignadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosAsignadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
