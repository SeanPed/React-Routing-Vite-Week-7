import React from 'react';
import styled from 'styled-components';

type TagProps = {
  value: string;
};

function Tag({ value }: TagProps): JSX.Element {
  return <StyledTag>{value}</StyledTag>;
}
export default Tag;

const StyledTag = styled.li`
  color: #000;
  background-color: hotpink;
`;
