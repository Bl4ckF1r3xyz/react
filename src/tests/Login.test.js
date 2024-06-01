import { render, screen } from "@testing-library/react";
import React from "react";
import Modal from "../components/Login"; // Adjust the import based on your file structure

describe('Modal', () => {
    test('renders correctly', () => {
        const setActive = jest.fn();
        render(<Modal active={true} setActive={setActive} />);

        // Assuming you want to assert the first occurrence
        expect(screen.getAllByText('Личный кабинет')[0]).toBeInTheDocument();

        // Or use more specific queries if needed
        const authHeader = screen.getByText('Авторизация', { selector: 'h3' });
        expect(authHeader).toBeInTheDocument();
    });
});
