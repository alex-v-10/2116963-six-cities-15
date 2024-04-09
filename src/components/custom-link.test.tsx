import { render, screen } from '@testing-library/react';
import { makeFakeStore } from '../mock/mock';
import { withHistory, withStore } from '../mock/mock-component';
import CustomLink from './custom-link';

describe('Component: CustomLink', () => {
  const currentPath = '/link';

  it('should render correctly with different path', () => {
    const activeClass = 'active-link';
    const children = <span>Link</span>;

    const componentWithHistory = withHistory(
      <CustomLink className='link' activeClassName={activeClass} currentPath={currentPath} to='/somewhere'>{children}</CustomLink>
    );
    const { withStoreComponent } = withStore(componentWithHistory, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('Link').closest('.link')).not.toHaveClass(activeClass);
  });

  it('should render correctly with same path', () => {
    const activeClass = 'active-link';
    const children = <span>Link</span>;

    const componentWithHistory = withHistory(
      <CustomLink className='link' activeClassName={activeClass} currentPath={currentPath} to={currentPath}>{children}</CustomLink>
    );
    const { withStoreComponent } = withStore(componentWithHistory, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('Link').closest('.link')).toHaveClass(activeClass);
  });

  it('should render correctly when isActive is false', () => {
    const activeClass = 'active-link';
    const children = <span>Link</span>;

    const componentWithHistory = withHistory(
      <CustomLink className='link' activeClassName={activeClass} isActive={false} to='/somewhere'>{children}</CustomLink>
    );
    const { withStoreComponent } = withStore(componentWithHistory, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('Link').closest('.link')).not.toHaveClass(activeClass);
  });

  it('should render correctly when isActive is true', () => {
    const activeClass = 'active-link';
    const children = <span>Link</span>;

    const componentWithHistory = withHistory(
      <CustomLink className='link' activeClassName={activeClass} isActive to='/somewhere'>{children}</CustomLink>
    );
    const { withStoreComponent } = withStore(componentWithHistory, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('Link').closest('.link')).toHaveClass(activeClass);
  });
});
