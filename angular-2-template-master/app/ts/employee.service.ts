import {Injectable} from 'angular2/core';
@Injectable()
export class EmployeeService{
    getEmployees(){
        return [
            {"id": 1, "name": "Andrew", "gender": "Male"},
            {"id": 2, "name": "Saue", "gender": "FEmale"},
            {"id": 3, "name": "feh", "gender": "Boy"}
    
        ]
    }
}
