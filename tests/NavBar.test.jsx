import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../src/components/NavBar';
// import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('<NavBar />', () => {
  const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route);
    return render(ui, { wrapper: MemoryRouter });
  };

  it('renders with empty cart', () => {
    renderWithRouter(<NavBar cart={[]} />);
    const cartText = screen.getByText(/Cart - 0/i);
    expect(cartText).toBeInTheDocument();
  });

  it('renders with items in cart', () => {
    renderWithRouter(<NavBar cart={['item1', 'item2']} />);
    const cartText = screen.getByText(/Cart - 2/i);
    expect(cartText).toBeInTheDocument();
  });

  it('navigates to /home and highlights the link', () => {
    renderWithRouter(<NavBar cart={[]} />, { route: '/home' });
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink.closest('a')).toHaveClass('font-bold'); // Assuming 'font-bold' indicates an active link
  });
});
