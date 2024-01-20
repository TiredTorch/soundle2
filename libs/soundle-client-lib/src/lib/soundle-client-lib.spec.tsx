import { render } from '@testing-library/react';

import SoundleClientLib from './soundle-client-lib';

describe('SoundleClientLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SoundleClientLib />);
    expect(baseElement).toBeTruthy();
  });
});
