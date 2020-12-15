# Spring
- Spring Boot (more [info](https://spring.io/guides/gs/spring-boot/)
- Spring framework
  - [Introduction] (https://docs.spring.io/spring-framework/docs/3.0.x/spring-framework-reference/html/overview.html))
  - [IoC Container] (https://docs.spring.io/spring-framework/docs/3.0.x/spring-framework-reference/html/beans.html)

Overview diagram of Spring framework core concepts:
![spring framework](https://docs.spring.io/spring-framework/docs/3.0.x/spring-framework-reference/html/images/spring-overview.png)

## Dependency management
[...] If OSGi does not matter to you, either place works, though there are some pros and cons between them. In general, pick one place or the other for your project; **do not mix them**. This is particularly important since EBR artifacts necessarily use a different naming convention than Maven Central artifacts.

## Logging
The mandatory logging dependency in Spring is the Jakarta Commons Logging API (JCL). We compile against JCL and we also make JCL Log objects visible for classes that extend the Spring Framework. 

It's important to users that all versions of Spring use the same logging library: migration is easy because backwards compatibility is preserved even with applications that extend Spring. The way we do this is to make one of the modules in Spring depend explicitly on commons-logging (the canonical implementation of JCL), and then make all the other modules depend on that at compile time. If you are using Maven for example, and wondering where you picked up the dependency on commons-logging, then it is from Spring and specifically from the central module called spring-core.

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

# Example guides
Here a list of some useful guides to build Spring Boot application
- Authorization Code Grant Flow With Spring Security OAuth 2.0 (more [info](https://dzone.com/articles/authorization-code-grant-flow-with-spring-security))
- Implementing Your Own Spring Boot Oauth2 Authorization Server (more [info](https://dzone.com/articles/implementing-your-own-spring-boot-oauth2-authoriza))