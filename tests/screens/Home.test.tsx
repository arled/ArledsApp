import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

import { ThemeProvider } from '../../src/theming/ThemeProvider';
import { Home } from '../../src/screens/Home';

const createTestProps = {
  navigation: {
    navigate: jest.fn(),
  },
};

describe('Home', () => {
  it('should render homes screen properly', () => {
    const props: any = createTestProps; //opt-out of type-checking.
    const { getByTestId } = render(
      <ThemeProvider>
        <Home {...props} />
      </ThemeProvider>,
    );

    const greetingMessage = getByTestId('greeting-text-1' && 'greeting-text-2');
    const buttonPressed = fireEvent.press(getByTestId('start-button'));

    expect(greetingMessage).toBeDefined;
    expect(buttonPressed).toBeCalled;
  });
});
