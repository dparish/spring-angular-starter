import {async, TestBed} from '@angular/core/testing';
import {instance, mock} from 'ts-mockito';

import {AppComponent} from './app.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerService} from './customer.service';

describe('AppComponent', () => {
  const mockCustomerService: CustomerService = mock(CustomerService);
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CustomerListComponent
      ],
      providers: [
        {provide: CustomerService, useValue: instance(mockCustomerService)},
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
