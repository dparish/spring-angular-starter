package dparish.starter.rest;

import dparish.starter.model.Customer;
import dparish.starter.service.CustomerService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping(value = "/customers")
public class CustomerController {
    private CustomerService customerService;

    public CustomerController(final CustomerService customerService) {
        this.customerService = customerService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public Collection<Customer> getCustomers() {
        return customerService.getCustomers();
    }
}
