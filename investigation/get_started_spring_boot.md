# Spring boot
More (info)[https://spring.io/guides/gs/spring-boot/].

Quick benefits of Spring Boot:
- It looks at your classpath and at the beans you have configured, makes reasonable assumptions about what you are missing, and adds those items.
- Is Spring MVC on the classpath? There are several specific beans you almost always need, and Spring Boot adds them automatically. 
- A Spring MVC application also needs a servlet container, so Spring Boot automatically configures embedded Tomcat. If Jetty is in the classpath it will be configured instead of Tomcat.

## Bean 
In Spring, the objects that form the backbone of your application and that are managed by the Spring IoC container are called beans. A bean is an object that is instantiated, assembled, and otherwise managed by a Spring IoC container.

## Inversion of Control
IoC is the process in which an object defines its dependencies without creating them. This object delegates the job of constructing such dependencies to an IoC container. When a Spring IoC container constructs objects of those types, all the objects are called Spring beans as they are managed by the IoC container.

```
@Component
public class Company {
    private Address address;

    public Company(Address address) {
        this.address = address;
    }

    // getter, setter and other properties
}

@Configuration
@ComponentScan(basePackageClasses = Company.class)
public class Config {
    @Bean
    public Address getAddress() {
        return new Address("High Street", 1000);
    }
}

// App configuration
ApplicationContext context = new AnnotationConfigApplicationContext(Config.class);
// Beans using
Company company = context.getBean("company", Company.class);
assertEquals("High Street", company.getAddress().getStreet());
assertEquals(1000, company.getAddress().getNumber());
```

## Special Annotations
`@SpringBootApplication` is a convenience annotation that adds all of the following:

`@Configuration`: Tags the class as a source of bean definitions for the application context.

`@EnableAutoConfiguration`: Tells Spring Boot to start adding beans based on classpath settings, other beans, and various property settings. For example, if spring-webmvc is on the classpath, this annotation flags the application as a web application and activates key behaviors, such as setting up a DispatcherServlet.

`@ComponentScan`: Tells Spring to look for other components, configurations, and services in the com/example package, letting it find the controllers.