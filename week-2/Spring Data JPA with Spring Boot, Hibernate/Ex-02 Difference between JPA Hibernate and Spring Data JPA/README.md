# Difference Between JPA, Hibernate and Spring Data JPA

## Overview

JPA (Java Persistence API), Hibernate, and Spring Data JPA are related technologies used for database operations in Java applications. Although they work together, each has a different purpose.

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Developed By | Oracle | Hibernate Team (Red Hat) | Spring Team |
| Purpose | Defines persistence standards | Implements JPA and provides ORM features | Simplifies JPA implementation |
| Dependency | Requires an implementation | Can work standalone or as JPA implementation | Depends on JPA and Spring Framework |
| SQL Handling | Not applicable | Generates SQL automatically | Uses Hibernate/JPA internally |
| Boilerplate Code | Moderate | Moderate | Very Less |
| Repository Support | No | No | Yes (JpaRepository, CrudRepository) |
| Query Methods | JPQL | HQL, Criteria API | Derived Query Methods, JPQL, Native Queries |

---

## 1. JPA (Java Persistence API)

- JPA is a specification for object-relational mapping (ORM).
- It defines rules for mapping Java objects to database tables.
- It cannot work by itself and requires an implementation like Hibernate.

### Advantages
- Standard API
- Database independent
- Easy to switch between ORM providers

---

## 2. Hibernate

- Hibernate is the most popular implementation of JPA.
- It converts Java objects into database tables automatically.
- It provides additional features beyond JPA.

### Advantages
- Automatic SQL generation
- Caching support
- Lazy and Eager loading
- HQL (Hibernate Query Language)

---

## 3. Spring Data JPA

- Spring Data JPA is built on top of JPA.
- It reduces boilerplate code by providing repository interfaces.
- Developers can perform CRUD operations without writing implementation code.

### Advantages
- Simple CRUD operations
- Built-in JpaRepository
- Pagination and Sorting
- Custom Query Methods
- Less coding effort

---

## Relationship

```
Spring Data JPA
        ↓
       JPA
        ↓
   Hibernate
        ↓
    Database
```

---

## Conclusion

- **JPA** is a specification.
- **Hibernate** is an implementation of JPA.
- **Spring Data JPA** is a Spring framework module that simplifies working with JPA by providing ready-made repository interfaces and reducing boilerplate code.