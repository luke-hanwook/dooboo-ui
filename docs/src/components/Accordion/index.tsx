import {Accordion, AccordionListType, AccordionProps} from 'dooboo-ui';
import React, {ReactElement} from 'react';
import {ThemeProvider, ThemeType} from '@dooboo-ui/theme';

import styled from '@emotion/native';
import {useFonts} from 'expo-font';

const Container = styled.View`
  padding: 20px;
  width: 100%;
  display: inline-block;
  background-color: ${({theme}) => theme.background};
  justify-content: center;
  align-items: center;
`;

export const sampleData: AccordionListType = [
  {
    title: 'Lists',
    bodies: ['user', 'mail', 'plan'],
  },
  {
    title: 'mail',
    bodies: ['mail list', 'category', 'bin'],
  },
  {
    title: 'Reports',
    bodies: ['report list', 'statistics'],
  },
];

export interface AccordionStoryProps extends AccordionProps {
  theme?: ThemeType;
  children?: React.ReactNode;
}

const AccordionStory = ({
  theme = 'light',
  children,
  ...props
}: AccordionStoryProps): ReactElement => {
  const [fontsLoaded] = useFonts({
    IcoMoon: require('../../assets/doobooui.ttf'),
  });

  if (!fontsLoaded) {
    return <Container />;
  }

  return (
    <ThemeProvider initialThemeType={theme}>
      <Container>
        {children}
        <Accordion {...props} />
      </Container>
    </ThemeProvider>
  );
};

export default AccordionStory;
