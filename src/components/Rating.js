import React from 'react';
import styled from 'styled-components';

const List = styled.li`
  background: #e8f5e9;
  margin: 1rem;
  padding: 1rem;
`;

const Heading = styled.h3`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-weight: 300;
  margin: 0;
`;

const Time = styled.time`
  font-size: 0.75rem;
`;
export const Rating = ({ rating }) => {
  return (
    <List>
      <Heading>
        {rating.author} reported this number as "{rating.callType}"
      </Heading>
      <p>{rating.message}</p>
      <Time dateTime={new Date(parseInt(rating.createdAt)).toISOString()}>
        {new Date(parseInt(rating.createdAt)).toLocaleString('en-GB')}
      </Time>
    </List>
  );
};
