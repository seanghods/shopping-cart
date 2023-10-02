import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Shop from '../src/containers/Shop.jsx';

describe('Shop Component', () => {
  const mockAddToCart = vi.fn();

  it('renders without crashing', () => {
    render(<Shop items={[]} addToCart={mockAddToCart} buttonStates={{}} />);
  });

  it('renders items correctly', () => {
    const items = [
      { id: 1, title: 'Item 1', price: 100, image: 'img1.png' },
      { id: 2, title: 'Item 2', price: 200, image: 'img2.png' },
    ];

    render(<Shop items={items} addToCart={mockAddToCart} buttonStates={{}} />);

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('calls addToCart function with correct parameters when clicked', async () => {
    const items = [{ id: 1, title: 'Item 1', price: 100, image: 'img1.png' }];

    render(<Shop items={items} addToCart={mockAddToCart} buttonStates={{}} />);

    fireEvent.click(screen.getByText('Add to Cart'));

    expect(mockAddToCart).toHaveBeenCalledWith(expect.anything(), items[0]);
  });
});
