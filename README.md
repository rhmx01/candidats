# Employee Rating Web App

This web application allows you to efficiently rate employees using Angular for the frontend and Node.js for the backend. The data is stored in a MongoDB database. Follow the instructions below to set up the application locally.

![Web App Preview](https://raw.githubusercontent.com/rhmx01/candidats/main/classdgrm.png)

## Backend Setup:

1. Navigate to the server directory:

    ```bash
    cd server
    ```

2. Initialize the npm package:

    ```bash
    npm i
    ```

3. Create a `.env` file and add your MongoDB database URL:

    ```env
    DATABASE_URL=your_mongodb_url_here
    ```

4. Seed data to the MongoDB database:

    ```bash
    npm run seed
    ```

5. Run the server:

    ```bash
    npm run dev
    ```

6. Visit [http://localhost:8000](http://localhost:8000) to access the backend.

## Frontend Setup:

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm i
    ```

3. Run the frontend:

    ```bash
    npm run start
    ```

4. Visit [http://localhost:4200](http://localhost:4200) to access the frontend.
