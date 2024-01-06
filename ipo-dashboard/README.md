# Stock Market Dashboard

The Stock Market Dashboard is an interactive platform for users to view and analyze real-time stock market data. It offers features like viewing different stock categories, a personalized dashboard, real-time data visualization, and customizable settings.

## Cloning the Repository

Clone the repository using the following command:
    ```
    git clone https://github.com/shazam99/StocksApp.git
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
        - After login, you will be redirected to the stock market dashboard, where you can see, search, and view all stocks.
        - Save stocks by clicking on the 'Favorite' button present on the stock.
        - Access saved stocks by clicking on the 'Favorites' tab in the header.

        **Summary:**
        - Toggle theme using theme button in Header.
        - The app lists all stocks where the user can search for a specific stock and see details.
        - The details of stocks are shown on the details page, accessible by clicking on the 'View' button for stocks.
        - The details page shows all information regarding the stock along with chart data for 1 Day, 1 Week, 1 Month, 6 Months, and 1 Year.
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
        - The app opens the landing page.
        - All routes are protected and can't be accessed until the user logs in.
        - Click on the "Login" button in the header to log in. If you don't have an account, first create an account by clicking on the register button on the login page.
        - After registering, you will be redirected to the login page.
        - After login, you will be redirected to the stock market dashboard, where you can see, search, and view all stocks.
        - Save stocks by clicking on the 'Favorite' button present on the stock.
        - Access saved stocks by clicking on the 'Favorites' tab in the header.

        **Summary:**
        - The app lists all stocks where the user can search for a specific stock and see details.
        - The details of stocks are shown on the details page, accessible by clicking on the 'View' button for stocks.
        - The details page shows all information regarding the stock along with chart data for 1 Day, 1 Week, 1 Month, 6 Months, and 1 Year.
        - Users have to log in first to access app

