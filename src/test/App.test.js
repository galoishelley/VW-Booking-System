import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

test("App render two properties column,initial length of Results column is 4 and saved property is 1",
    () => {
        const { container } = render(<App/>)
        const commonList = container.querySelector("ul[data-testid='commonList']");
        const savedList = container.querySelector("ul[data-testid='savedList']");
        expect(commonList).toBeInTheDocument()
        expect(savedList).toBeInTheDocument()

    })
