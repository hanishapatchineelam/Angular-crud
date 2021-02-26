import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-enrollee',
  templateUrl: './view-enrollee.component.html',
  styleUrls: ['./view-enrollee.component.css']
})
export class ViewEnrolleeComponent implements OnInit {

    @Input() viewFormData: any;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
      console.log(this.viewFormData);

  }

}
