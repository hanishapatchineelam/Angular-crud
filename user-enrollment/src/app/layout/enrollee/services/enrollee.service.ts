import { AppConfig } from './../../../app.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  constructor(private http: HttpClient) { }

  getEnrollees(){
      return this.http.get(AppConfig.path + AppConfig.getAllEnrollees);
  }

  updateEnrollee(data, id) {
      return this.http.put(AppConfig.path + AppConfig.updateEnrollee + id, data );
  }
}
