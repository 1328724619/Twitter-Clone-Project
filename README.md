# Twitter Clone Project

## Features

- User authentication (Sign Up, Login)
- Creating and viewing tweets
- Liking and retweeting tweets (if applicable)
- User profiles
- Following/Unfollowing users
- (Add more features as implemented)

## Technologies Used

### Frontend

- React
- Tailwind CSS
- Material UI
- React Router DOM
- Redux/Redux Thunk
- Axios
- Formik & Yup (for form handling and validation)
- JWT Decode
- Google OAuth (if implemented)

### Backend

- Java
- Spring Boot
- Spring Security
- Spring Data JPA
- MySQL Connector
- JWT (jjwt library)
- Maven

## Prerequisites

- Node.js and npm/yarn installed (for frontend)
- Java Development Kit (JDK) 17 or higher installed (for backend)
- Maven installed (for backend, although mvnw wrapper is present)
- MySQL database running

## Installation and Setup

### Backend Setup

1.  Navigate to the `Backend` directory.
    ```bash
    cd Backend
    ```
2.  Configure your database connection in the `application.properties` or `application.yml` file (you might need to create this file if it doesn't exist in `src/main/resources`).
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/your_database_name
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    spring.jpa.hibernate.ddl-auto=update # or create, create-drop, none
    ```
3.  Build the backend project using Maven.
    ```bash
    ./mvnw clean install
    ```

### Frontend Setup

1.  Navigate to the `Frontend` directory.
    ```bash
    cd ../Frontend
    ```
2.  Install frontend dependencies.
    ```bash
    npm install
    # or using yarn
    # yarn install
    ```

## How to Run

### Run Backend

1.  Navigate to the `Backend` directory.
    ```bash
    cd Backend
    ```
2.  Run the Spring Boot application.
    ```bash
    ./mvnw spring-boot:run
    ```
    The backend should start on port 8080 by default.

### Run Frontend

1.  Navigate to the `Frontend` directory.
    ```bash
    cd ../Frontend
    ```
2.  Start the React development server.
    ```bash
    npm start
    # or using yarn
    # yarn start
    ```
    The frontend should open in your browser, usually at `http://localhost:3000`.

## Contributing

(Section for contributions if applicable)

## License

(Section for license information if applicable)

## Contact

(Section for contact information if applicable)
