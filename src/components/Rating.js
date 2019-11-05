import React from 'react';
import styled from 'styled-components';

const List = styled.li`
  backgroundColor: '#e8f5e9',
  margin: '1rem',
  padding: '1rem',
`;

const Heading = styled.h3`
  borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
  fontWeight: 300,
  margin: 0,

`;
export const Rating = ({ rating }) => {
  return (
    <List key={rating._id}>
      <Heading>
        {rating.author} reported this number as "{rating.callType}"
      </Heading>
      <p>{rating.message}</p>
      <time style={{ fontSize: '0.75rem' }}>
        {new Date(parseInt(rating.createdAt)).toLocaleString('en-GB')}
      </time>
    </List>
  );
};
