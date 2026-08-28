import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Gastronomia } from './gastronomia';

describe('Gastronomia', () => {
  let component: Gastronomia;
  let fixture: ComponentFixture<Gastronomia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gastronomia],
    }).compileComponents();

    fixture = TestBed.createComponent(Gastronomia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
