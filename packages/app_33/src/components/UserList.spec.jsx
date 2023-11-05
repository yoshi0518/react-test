import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '../mocks/server';
import UserList from './UserList';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

describe('UserList', () => {
  it('renders properly', async () => {
    render(<UserList />);
    const listElement = await screen.findByText(/Test/);
    screen.debug();
    expect(listElement).toBeInTheDocument();
  });
});
