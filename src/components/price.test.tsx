import { render, screen } from '@testing-library/react';
import Price from './price';

describe('Component: Price', () => {
  it('should render correct with class place-card', () => {
    const className = 'place-card';
    const price = 400;
    const expectedText = '/ night';

    render(<Price classStart={className} price={price} />);

    expect(screen.getByText(new RegExp(`${price}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render correct', () => {
    const className = 'offer';
    const price = 400;
    const expectedText = 'night';

    render(<Price classStart={className} price={price} />);

    expect(screen.getByText(new RegExp(`${price}`, 'i'))).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
