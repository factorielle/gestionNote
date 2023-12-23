import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProfesseursComponent } from './details-professeurs.component';
import { ActivatedRoute } from '@angular/router';

describe('DetailsProfesseursComponent', () => {
  let component: DetailsProfesseursComponent;
  let fixture: ComponentFixture<DetailsProfesseursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsProfesseursComponent],
      providers: [ActivatedRoute ],
    });
    fixture = TestBed.createComponent(DetailsProfesseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.currentProf).toBeDefined();
    expect(component.currentProf.idProf).toBe('123');
    expect(component.tabCurrentProf.length).toBe(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  const mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
  mockActivatedRoute.snapshot.params = { id: '3' }; 
  TestBed.inject(ActivatedRoute, mockActivatedRoute);

const mockLocalStorage = {
  getItem: (key: string) => {
    if (key === 'admin') {
      return JSON.stringify([{ profs: [{ idProf: 123,  }] }]); 
    } else {
      return null;
    }
  },
};


// ... autres assertions


});
