import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EditEnrolleeComponent, Enrollee } from './edit-enrollee.component';

describe('EditEnrolleeComponent', () => {
  let component: EditEnrolleeComponent;
  let fixture: ComponentFixture<EditEnrolleeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnrolleeComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnrolleeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.editEnrolleeForm.valid).toBeFalsy();
  });

  it('name validity - should check name field is not valid', () => {
    let name = component.editEnrolleeForm.controls['name'];
    expect(name.valid).toBeFalsy();
  });

  it('name field validity', () => {
    let errors = {};
    let name = component.editEnrolleeForm.controls['name'];
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();
    name.setValue("test");
    errors = name.errors || {};
    expect(errors['pattern']).toBeTruthy();
    });

    it('submitting a form ', () => {
        expect(component.editEnrolleeForm.valid).toBeFalsy();
        component.editEnrolleeForm.controls['name'].setValue("test");
        component.editEnrolleeForm.controls['active'].setValue(true);
        expect(component.editEnrolleeForm.valid).toBeTruthy();

        let model: Enrollee
        component.onSubmit();

        // Now we can check to make sure the emitted value is correct
        expect(model.name).toBe("test");
        expect(model.active).toBe(true);
      });
});
