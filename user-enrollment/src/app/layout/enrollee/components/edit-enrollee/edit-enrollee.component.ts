import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EnrolleeService } from '../../services/enrollee.service';
import { ToastrService } from 'ngx-toastr';

export class Enrollee {
    id: string;
    name: string;
    active: boolean;
    dateOfBirth: string;
}

@Component({
  selector: 'app-edit-enrollee',
  templateUrl: './edit-enrollee.component.html',
  styleUrls: ['./edit-enrollee.component.css']
})
export class EditEnrolleeComponent implements OnInit {
    @ViewChild('editEnrolleeForm',{static: true}) editEnrolleeForm : NgForm;
    @Input() editFormData: any;
    model: Enrollee;
  constructor(public activeModal: NgbActiveModal,
    private toastr: ToastrService,
    private enrSer: EnrolleeService) { }

  ngOnInit(): void {

    this.model = this.editFormData;

    console.log(this.model);

  }


  onSubmit() {
   this.enrSer.updateEnrollee(this.model, this.model.id).subscribe((res: any) => {
       if (res.id) {
        this.toastr.success('Updated Successfully', 'Success');
        this.activeModal.close(true);
       } else {
        this.toastr.success('Failed to update', 'Error');
       }
   })
  }
}
