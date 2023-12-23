import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ListeNoteApprenantComponent } from './liste-note-apprenant.component';

describe('ListeNoteApprenantComponent', () => {
  let component: ListeNoteApprenantComponent;
  let fixture: ComponentFixture<ListeNoteApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeNoteApprenantComponent]
    });
    fixture = TestBed.createComponent(ListeNoteApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
