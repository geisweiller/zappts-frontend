import { renderHook } from '@testing-library/react-hooks';
import { UserProvider, useUserContext } from '../../hooks/userContext';
import MockAdapter from 'axios-mock-adapter';
import api from '../../services/api';

const apiMock = new MockAdapter(api);

describe('User hook', () => {
  it('should be able to signIn or signUp', () => {
    apiMock.onGet('users').reply(200, {
      id: '1',
      name: 'Arthur Geisweiller',
      email: 'geisweiller@gmail.com',
      password: 'Test123',
    });

    apiMock.onPost('users').reply(200, {
      id: '1',
      name: 'Arthur Geisweiller',
      email: 'geisweiller@gmail.com',
      password: 'Test123',
    });

    const { result } = renderHook(() => useUserContext(), {
      wrapper: UserProvider,
    });

    result.current.signIn({ email: 'geisweiller@gmail.com', password: 'Test123' });
    result.current.signUp({
      name: 'Arthur Geisweiller',
      email: 'geisweiller@gmail.com',
      password: 'Test123',
    });
  });
});
