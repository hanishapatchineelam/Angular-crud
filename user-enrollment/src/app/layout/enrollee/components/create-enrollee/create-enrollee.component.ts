import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { EnrolleeService } from '../../services/enrollee.service';

@Component({
  selector: 'app-create-enrollee',
  templateUrl: './create-enrollee.component.html',
  styleUrls: ['./create-enrollee.component.css']
})
export class CreateEnrolleeComponent implements OnInit {

  editFormData: any;
  model: any;
constructor(public activeModal: NgbActiveModal,
  private toastr: ToastrService,
  private enrSer: EnrolleeService) { }

ngOnInit(): void {

  this.model = this.editFormData;

  console.log(this.model);

}


onSubmit(f: NgForm) {
  console.log(f.value);
 this.enrSer.updateEnrollee(this.model, this.model.id).subscribe((res: any) => {
     if (res.id) {
      this.toastr.success('Updated Successfully', 'Success');
      this.activeModal.close(true);
     } else {
      this.toastr.success('Failed to update', 'Error');
     }
 });
}

}
