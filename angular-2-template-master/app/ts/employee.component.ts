import {Component, Directive, Input, OnInit} from 'angular2/core';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'employee-list',
    template: '<h2> Employees </h2>'       
})

export class EmployeeListComponent implements OnInit{
   employees = [];

   constructor(private _employeeService: EmployeeService){}
    ngOnInit(){
            this.employees = this._employeeService.getEmployees();
    }
}
