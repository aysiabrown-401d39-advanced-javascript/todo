import React from 'react'
import { render, waitFor, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../app.js'

describe('app', () => {

    it('Clicking on Home reloads the home page', async () => {
      render(<App />);
      fireEvent.click(screen.getByTestId('homelink'));
      expect(screen.getByRole('document')).toHaveTextContent('Home')
    })

    it('Clicking on an item will change its color', async() =>{
        render(<App />);
        fireEvent.click(screen.getByTestId(1));
        expect(screen.getByTestId(1)).toHaveProperty('variant','success');
    })
  
  
  })