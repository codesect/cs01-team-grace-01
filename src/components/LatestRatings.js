import React from 'react';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { Rating } from './Rating';
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
                {data.getLatestRatings.number}
                &mdash; {data.getLatestRatings.callType}
              </h2>
              <h2 style={{ fontWeight: 300 }}>
                Latest reviews ({data.getLatestRatings.length})
              </h2>
              <ul style={{ listStyle: 'none', margin: '-1rem', padding: 0 }}>
                {data.getLatestRatings.map(rating => (
                  <Rating key={rating._id} rating={rating} />
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
