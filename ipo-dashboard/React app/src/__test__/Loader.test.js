import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from '../components/Loader';

describe('Loader Component', () => {
    it('renders Loader component with correct styles', () => {
        render(<Loader />);

        // Select the loader container using data-testid
        const loaderContainer = screen.getByTestId('loader-container');
        expect(loaderContainer).toBeInTheDocument();
        expect(loaderContainer).toHaveStyle({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
        });

        const spinnerBorder = screen.getByRole('status');
        expect(spinnerBorder).toBeInTheDocument();
        expect(spinnerBorder).toHaveClass('spinner-border');
        expect(spinnerBorder).toHaveStyle({
            width: '5rem',
            height: '5rem',
        });
    });
});
