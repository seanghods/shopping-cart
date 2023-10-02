import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Cart from '../src/containers/Cart.jsx';

describe('<Cart />', () => {
  const sampleItem = {
    image: 'sample.jpg',
    title: 'Sample Item',
    price: 50.0,
  };

  it('should display "Your cart is empty!" when cart is empty', () => {
    render(
      <Cart cart={[]} removeFromCart={() => {}} navigateShop={() => {}} />,
    );
    expect(
      screen.getByText(
        'Your cart is empty! Go check out our store items here:',
      ),
    ).toBeInTheDocument();
  });

  it('should display cart items when cart is not empty', async () => {
    const { container } = render(
      <Cart
        cart={[sampleItem]}
        removeFromCart={() => {}}
        navigateShop={() => {}}
      />,
    );
    expect(screen.getByText('Sample Item')).toBeInTheDocument();
    const priceElement = container.querySelector('.price');
    expect(priceElement).toHaveTextContent('50');
  });

  it('should correctly calculate subtotal, tax, and final price', () => {
    render(
      <Cart
        cart={[sampleItem, sampleItem]}
        removeFromCart={() => {}}
        navigateShop={() => {}}
      />,
    );
    expect(screen.getByText('Subtotal: $100')).toBeInTheDocument();
    expect(screen.getByText('9.5% Tax: $9.5')).toBeInTheDocument();
    expect(screen.getByText('Final Price: $109.5')).toBeInTheDocument();
  });

  it('should call removeFromCart function when "Remove from Cart" button is clicked', () => {
    const mockRemoveFromCart = vi.fn();
    render(
      <Cart
        cart={[sampleItem]}
        removeFromCart={mockRemoveFromCart}
        navigateShop={() => {}}
      />,
    );

    const removeButton = screen.getByText('Remove from Cart');
    fireEvent.click(removeButton);

    expect(mockRemoveFromCart).toHaveBeenCalled();
  });
});
