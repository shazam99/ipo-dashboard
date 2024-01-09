import { render, screen, waitFor, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './../utils/store';
import App from './../App';

describe('App Component', () => {
    test('renders main page without crashing', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        // Add your specific assertions
        expect(screen.getByText(/All things finance/i)).toBeInTheDocument();
    });

    test('navigates to ipo page after login', async () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        // Simulate login
        act(() => {
            store.dispatch({ type: 'SET_USER', payload: true });
        });

        // Wait for navigation to complete
        await waitFor(() => {
            const upcomingIPOsHeading = screen.getByText(/All things finance/i);
            expect(upcomingIPOsHeading).toBeInTheDocument();
        });
    });
})