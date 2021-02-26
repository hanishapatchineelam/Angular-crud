import { ViewEnrolleeComponent } from './../view-enrollee/view-enrollee.component';
import { EditEnrolleeComponent } from './../edit-enrollee/edit-enrollee.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';
import { timeStamp } from 'console';
import { EnrolleeService } from '../../services/enrollee.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-enrollees',
    templateUrl: './enrollees.component.html',
    styleUrls: ['./enrollees.component.css']
})
export class EnrolleesComponent implements OnInit {

    paginatoryDetails: any;
    public GRID_PAGE_INFO = {
        initpageSize: 10,
        pageOptions: [10, 15, 20]
    };
    pageRecordSize;
    pageOptions;
    innerHeight: number;
    selectedData: any[] = [];
    enrolleeList = [];
    enrolleeHeaders = [
        {
            field: 'id',
            header: 'Id',
            isLink: false,
            width: '180px'
        },
        {
            field: 'name',
            header: 'Name',
            isLink: false,
            width: '120px'
        },
        {
            field: 'active',
            header: 'Activation Status',
            isLink: false,
            width: '80px'
        },
        {
            field: 'dateOfBirth',
            header: 'Date of Birth',
            isLink: false,
            width: '100px'
        }
    ];

    constructor(private enrSer: EnrolleeService,
        private toastr: ToastrService,
        private modalService: NgbModal) {}

    ngOnInit(): void {
        this.pageRecordSize = this.GRID_PAGE_INFO.initpageSize;
        this.pageOptions = this.GRID_PAGE_INFO.pageOptions;
        this.getAllEnrollees();
    }

    getAllEnrollees() {
        this.enrSer.getEnrollees().subscribe((res: any) => {
            if (Array.isArray(res)) {
                this.enrolleeList = res;
            } else {
                this.toastr.error('Failed to fetch data', 'Error')
            }
        });
    }
    onPage($event) {
        this.paginatoryDetails = event;
    }

    create() {
    }

    edit(rowData) {
        const modalRef = this.modalService.open(EditEnrolleeComponent, {
            size: 'sm',
        });
        const temp = {...rowData}
        modalRef.componentInstance.editFormData = temp;
        modalRef.result.then((result: any) => {
            if (result) {
                this.getAllEnrollees();
            }
        });
    }

    view(rowData) {
        const modalRef = this.modalService.open(ViewEnrolleeComponent, {
            size: 'lg',
        });
        modalRef.componentInstance.viewFormData = rowData;
        modalRef.result.then((result: any) => {
            if (result) {
                this.getAllEnrollees();
            }
        });
    }
}
