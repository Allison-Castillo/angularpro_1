import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Turisticos } from './turisticos';

describe('Turisticos', () => {
  let component: Turisticos;
  let fixture: ComponentFixture<Turisticos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Turisticos],
    }).compileComponents();

    fixture = TestBed.createComponent(Turisticos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
