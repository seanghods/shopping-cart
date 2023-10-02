import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App';
// import { vi } from 'vitest';
import { render } from '@testing-library/react';

describe('App component', () => {
  it('renders correctly', () => {
    const container = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
