import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { jest } from '@jest/globals'

import App from './App.js';
import getPeepData from '../src/components/AllPeeps';

jest.mock('../src/components/AllPeeps');

describe('App Tests', () => {

  afterEach(() => jest.resetAllMocks());


  describe('App renders correctly', () => {

    it('should render Chitter app', async () => {

      getPeepData.mockImplementation(() => { });

      render(<MemoryRouter><App /></MemoryRouter>);

      expect(await screen.findByText(/Chitter Challenge App/i)).toBeInTheDocument();

    });

  })
});

