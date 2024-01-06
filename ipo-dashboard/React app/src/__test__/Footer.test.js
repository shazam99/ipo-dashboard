import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useSelector: jest.fn(),
}));

describe('Footer Component', () => {
    beforeEach(() => {
        // Mock the useSelector hook
        useSelector.mockReturnValue({
            theme: 'light', // Provide the initial state values for your theme
            colors: {
                light: {
                    footer: 'lightFooterColor',
                    text: 'lightTextColor',
                },
                dark: {
                    footer: 'darkFooterColor',
                    text: 'darkTextColor',
                },
            },
        });
    });

    it('renders Footer component with correct styles', () => {
        render(<Footer />);

        // Add assertions for the rendered content and styles
        const riskText = screen.getByText(/Explore the world of stock markets/i);
        expect(riskText).toBeInTheDocument();

    });

    it('renders correct attribution text', () => {
        render(<Footer />);

        const githubLink = screen.getByRole('link', { name: /siddharth/i });
        expect(githubLink).toHaveClass('text-primary'); // Adjust this based on your expected styles
    });
});
