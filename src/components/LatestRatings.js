import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Wrapper } from '../components/GlobalStyles';
import { SearchBox } from '../components/SearchBox';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const Hero = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 7.375rem);
  text-align: center;
`;

const GET_LATEST_RATINGS_QUERY = gql`
  query GET_LATEST_RATINGS_QUERY($max: Int) {
    getLatestRatings(max: $max) {
      _id
      author
      caller
      callType
      message
      score
      createdAt
      number {
        number
      }
    }
  }
`;

function Comment({ rating }) {
  return (
    <li
      style={{
        backgroundColor: '#e8f5e9',
        margin: '1rem',
        padding: '1rem',
      }}
      key={rating._id}
    >
      <h3
        style={{
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
          fontWeight: 300,
          margin: 0,
        }}
      >
        {rating.author} reported this number as "{rating.callType}"
      </h3>
      <p>{rating.message}</p>
      <time style={{ fontSize: '0.75rem' }}>
        {new Date(parseInt(rating.createdAt)).toLocaleString('en-GB')}
      </time>
    </li>
  );
}

const LatestRatings = () => {
  return (
    <Query query={GET_LATEST_RATINGS_QUERY} variables={{ max: 5 }}>
      {({ data, loading, error }) => (
        <main style={{ margin: '0 auto', maxWidth: '720px' }}>
          {loading && <div className="loading">Loading...</div>}
          {error && <div>Error, check console</div>}
          {data && (
            <>
              <h2 style={{ fontWeight: 300 }}>
                {data.getLatestRatings.number} ({data.getLatestRatings.country})
                &mdash; {data.getLatestRatings.callType}
              </h2>
              <p>Trust score: {data.getLatestRatings.score}/10</p>
              <p>Total searches: {data.getLatestRatings.searches}</p>
              <h2 style={{ fontWeight: 300 }}>
                Latest reviews ({data.getLatestRatings.length})
              </h2>
              <ul style={{ listStyle: 'none', margin: '-1rem', padding: 0 }}>
                {data.getLatestRatings.map(rating => (
                  <Comment key={rating._id} rating={rating} />
                ))}
              </ul>
            </>
          )}
        </main>
      )}
    </Query>
  );
};

export default LatestRatings;
