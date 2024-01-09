# IPO  Dashboard

The IPO  Dashboard is an interactive platform for users to view and analyze Upcoming IPO Calendar and the latest currency exchange rates. This project aims to demonstrate skills in API integration, user authentication, responsive design, and cross-platform development using React for web and React Native for mobile.

## Cloning the Repository

Clone the repository using the following command:
    ```
    git clone https://github.com/shazam99/ipo-dashboard.git
    ```


## Project Structure

The project is divided into two folders:

1. **React App (Web App):**
    - Navigate to the React App folder:
        ```bash
        cd React app
        ```

    - Install Node modules:
        ```bash
        npm install
        ```

    - Create a `.env` file in the React App folder and set the API key variable:
        ```
        REACT_APP_API_KEY=your_api_key
        ```

    - Run the app:
        ```bash
        npm start
        ```

    - Visit [http://localhost:3000](http://localhost:3000) to access the app.

    - **Usage of the App:**
        - The app opens the landing page.
        - All routes are protected and can't be accessed until the user logs in.
        - User can change the theme usig toggle button in Header.
        - Click on the "Login" button in the header to log in. If you don't have an account, first create an account by clicking on the register button on the login page.
        - After registering, you will be redirected to the login page.
        - After login, you will be redirected to the IPO dashboard, where you can view all IPO.
        - You can see live conversion rates and can convert any currency as well.

        **Summary:**
        - Toggle theme using theme button in Header.
        - The app lists all IPO where the user can see all views.
        - You can see live conversion rates and can convert any currency as well.
        - Users have to log in first to access all functionalities and can log out anytime.



2. **React Native App (Mobile App):**
   - Navigate to the React App folder:
        ```bash
        cd React Native
        ```

    - Install Node modules:
        ```bash
        npm install
        ```

    - Create a `.env` file in the React App folder and set the API key variable:
        ```
        NATIVE_APP_API_KEY=your_api_key
        ```

    - Run the app:
        ```bash
        expo start
        ```

    - Visit [http://localhost:19000](http://localhost:19000) to access the app.

    - **Usage of the App:**

        **Summary:**
        - Toggle theme using theme button in Header.
        - The app lists all IPO where the user can see all views.
        - You can see live conversion rates and can convert any currency as well.
        - Users have to log in first to access all functionalities and can log out anytime.

