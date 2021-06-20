import { render } from '@testing-library/react';
import React from 'react';
import Input from '../../components/Input';

describe('Input Component', () => {
  it('should be able to render an input', () => {
    const { getByPlaceholderText } = render(
      <Input label="Users name or  Email" type="email" placeholder="Enter your username or email" />
    );

    expect(getByPlaceholderText('Enter your username or email')).toBeTruthy();
  });
});
