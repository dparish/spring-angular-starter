import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';
import {instance, mock, when} from 'ts-mockito';

import {CustomerService} from '../customer.service';
import {CustomerListComponent} from './customer-list.component';

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;
  const mockCustomerService: CustomerService = mock(CustomerService);
  when(mockCustomerService.getCustomers()).thenReturn(Observable.of([]));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerListComponent ],
      providers: [
        {provide: CustomerService, useValue: instance(mockCustomerService)},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
