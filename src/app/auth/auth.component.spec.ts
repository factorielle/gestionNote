import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';


class ActivatedRouteStub {
  // Utilisez of() pour émettre une valeur mockée lors de l'appel à snapshot.paramMap
  snapshot = { paramMap: { get: (key: string) => 'mocked-param' } };
}



describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthComponent],
      imports: [RouterTestingModule, FormsModule],
      providers: [
        { provide: ActivatedRoute, useClass: ActivatedRouteStub },
        { provide:Storage, useValue: {} } ,
      ], 
    });

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle the form', () => {
    expect(component.formChoice).toBeTrue();
    component.showForm();
    expect(component.formChoice).toBeFalse();   });



  

});
