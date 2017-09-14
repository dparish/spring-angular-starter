package dparish.starter.service;

import com.github.javafaker.Faker;
import dparish.starter.model.Customer;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;

@Service
public class CustomerService {
    private static final long MAX_CUSTOMERS = 50;
    private HashMap<Long, Customer> customerMap = new HashMap<Long, Customer>();

    @PostConstruct
    private void init() throws ParseException {
        SimpleDateFormat dateFormat = new SimpleDateFormat("mm/dd/yyyy");
        Faker faker = new Faker();
        for (long i = 0 ; i <  MAX_CUSTOMERS ; i++) {
            customerMap.put(i,
                new Customer()
                    .withFirstName(faker.name().firstName())
                    .withLastName(faker.name().lastName())
                    .withBirthDate(
                        getLocalDateTime(faker.date().between(dateFormat.parse("01/01/1900"), new Date()))
                    )
                    .withId(i)
                    .withStreet(faker.address().streetAddress())
                    .withCity(faker.address().city())
                    .withZip(faker.address().zipCode())
                    .withState(faker.address().stateAbbr())
            );
        }
    }

    private LocalDateTime getLocalDateTime(Date date) {
        return LocalDateTime.ofInstant(date.toInstant(), ZoneId.systemDefault());
    }

    public Collection<Customer> getCustomers() {
        return customerMap.values();
    }
}
