import React from 'react';
import { withTheme } from 'styled-components';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const Example = (): JSX.Element => (
  <Card
    title={'Headline'}
    description={'This is a description for a nice card!'}
    tags={[]}
  />
);

export const ExampleWithTags = (): JSX.Element => (
  <Card
    title={'Headline'}
    description={'This is a description for a nice card!'}
    tags={['White', 'Used']}
  />
);
