// src/app/employee.service.spec.ts  
import { TestBed } from '@angular/core/testing';  
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';  
import { ApiService } from './api.service';  

describe('ApiService', () => {  
  let service: ApiService;  
  let httpMock: HttpTestingController;  

  beforeEach(() => {  
    TestBed.configureTestingModule({  
      imports: [HttpClientTestingModule],  // Import HttpClientTestingModule  
      providers: [ApiService],  
    });  

    service = TestBed.inject(ApiService);  
    httpMock = TestBed.inject(HttpTestingController);  
  });  

  it('should fetch employee list', () => {  
    const dummyEmployees = [  
      {  
        "createdAt": "2024-12-12T19:39:31.219Z",  
        "name": "Russell Schamberger",  
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/636.jpg",  
        "email": "Kody_Koch@gmail.com",  
        "status": false,  
        "joining_date": "2094-07-09T20:15:51.013Z",  
        "role": "Designer2",  
        "id": "1"  
      },  
      {  
        "createdAt": "2024-12-13T09:34:54.497Z",  
        "name": "Raquel Armstrong5",  
        "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/684.jpg",  
        "email": "Aditya_Ryan48@gmail.com",  
        "status": true,  
        "joining_date": "1997-05-16T18:30:00.000Z",  
        "role": "Analyst2",  
        "id": "2"  
      }  
    ];  

    // Call the service to get employee list  
    service.getEmployeeList().subscribe((employees) => {  
      expect(employees.length).toBe(2);  
      expect(employees).toEqual(dummyEmployees);  
    });  

    // Mock the request and return the dummy data  
    const req = httpMock.expectOne('https://675c27ebfe09df667f62d647.mockapi.io/employee/employees');  
    expect(req.request.method).toBe('GET');  
    req.flush(dummyEmployees);  
  });  

  afterEach(() => {  
    // Verify no pending HTTP requests after each test  
    httpMock.verify();  
  });  
});