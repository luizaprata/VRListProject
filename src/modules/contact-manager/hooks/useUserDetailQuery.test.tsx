import {renderHook, waitFor} from '@testing-library/react-native';
import useUserDetailQuery from './useUserDetailQuery';

describe('useUserDetailQuery hook', () => {
  test('my first test', async () => {
    const {result} = renderHook(() => useUserDetailQuery(1), {
      wrapper: global.createQueryClientWrapper(),
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).toBeDefined();
  });
});
