import React from 'react';
import { render, screen } from '@testing-library/react';
import Modal from '../components/Login'; // Adjust the import path as necessary

describe('Modal Component', () => {
    test('renders correctly', () => {
        const setActive = jest.fn();
        render(<Modal active={true} setActive={setActive} />);
        expect(screen.getByText('Личный кабинет')).toBeInTheDocument();
        expect(screen.getByText('Авторизация')).toBeInTheDocument();
    });
});
