# Implementing CRUD Operations in Angular Forms Using Two-Way Binding

**Prenitha R**

## Project Overview
I implemented CRUD operations on a shared form for two types of users: `user` and `admin`. While both share the majority of form fields, each has two additional fields specific to their role. The project involved leveraging Angular features such as two-way binding with `[(ngModel)]`, services, custom validations, modules, TypeScript models, and Observables.

The table is initially populated with dummy values. This can be updated on click of row. Separate buttons for submit and edit, disbling based on the edit/ create mode. New users - user/admin type can be added by submitting the form. There is a delete button on each row.. on click need to make sure it doesnt propagate to parent's click. And then get confirmation and delete.
Using localstorage to persist changes.

---

## Key Learnings

### 1. **Two-Way Binding Simplifies Data Handling**
- **Efficiency**: Using `[(ngModel)]` allowed for seamless two-way data binding between the form and the component, making it easier to track and update field values.
- **Dynamic Fields**: Conditional rendering of the extra fields for `user` and `admin` was straightforward using Angular's `*ngIf` directive.

### 2. **Service-Driven Architecture for CRUD Operations**
- **Centralized Logic**: A dedicated service handled CRUD operations, promoting separation of concerns and improving maintainability.
- **Observables**: Utilizing `RxJS` Observables in the service to manage asynchronous API calls ensured proper handling of responses and error states.
- **State Management**: The service acted as a single source of truth for the form data, simplifying state management across components.

### 3. **Custom Validation for Flexibility**
- **Custom Validators**: Implementing custom validators enabled me to handle validation logic specific to the `user` and `admin` roles.
- **Dynamic Validation**: Validation rules for the shared fields dynamically adapted based on the role selected, ensuring consistency.


### 4. **TypeScript Models for Strong Typing**
- **Consistency**: Defining `User` and `Admin` models enforced type safety throughout the application, preventing runtime errors.

### 5. **Observables Simplify Asynchronous Data Flow**
- **Reactive Programming**: Using Observables from `RxJS` allowed the components to react to data changes efficiently.
- **Dynamic Updates**: Components subscribed to the form data stream to dynamically update the UI when backend data changed.

### 6. **Customizing the Form for Each Role**
- **Dynamic Rendering**: Leveraging `*ngIf` and dynamic field rendering, I was able to tailor the form to the specific needs of `user` and `admin` roles without duplicating the form.
- **Role-Based Validation**: Applying different custom validators for `user` and `admin` fields ensured data integrity while keeping validation logic modular.

## Challenges Faced

### 1. **State Management Complexity**
- **Issue**: Managing form state for multiple user types introduced challenges with data consistency. 
- **Solution**: Utilized a centralized service with Observables simplified state management.

### 2. **Validation Feedback**
- **Issue**: Providing user-friendly validation error messages for both roles was initially cumbersome.
- **Solution**: Centralized validation messages in a separate component for simplicity.

### 3. **Started with Angular v17 and Downgraded**
- **Issue**: Initially used Angular v17 but had to downgrade due to compatibility issues, requiring conversion of standalone components into module-based components.
- **Solution**: Though not a major issue, the process required careful restructuring of components and reorganization of dependencies.
