import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_RATINGS_QUERY = gql`
  query {
    getRatings {
      callType
      country
      number
      ratings {
        _id
        author
        callType
        createdAt
        comments {
          author
          createdAt
          text
        }
        message
      }
      score
      searches
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

function SampleGraphqlCall() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Query query={GET_RATINGS_QUERY}>
      {({ data, loading, error }) => (
        <main style={{ margin: '0 auto', maxWidth: '720px' }}>
          {loading && <div className="loading">Loading...</div>}
          {error && <div>Error, check console</div>}
          {data && (
            <>
              <h2 style={{ fontWeight: 300 }}>
                {data.getRatings.number} ({data.getRatings.country}) &mdash;{' '}
                {data.getRatings.callType.join(', ')}
              </h2>
              <p>Trust score: {data.getRatings.score}/10</p>
              <p>Total searches: {data.getRatings.searches}</p>
              <h2 style={{ fontWeight: 300 }}>
                Latest reviews ({data.getRatings.ratings.length})
              </h2>
              <ul style={{ listStyle: 'none', margin: '-1rem', padding: 0 }}>
                {data.getRatings.ratings.map(rating => (
                  <Comment key={rating._id} rating={rating} />
                ))}
              </ul>
            </>
          )}
          <button
            onClick={() => setIsVisible(!isVisible)}
            style={{
              backgroundColor: 'rebeccapurple',
              color: 'white',
              fontSize: '1.75rem',
              margin: '1rem auto',
              padding: '1rem',
              width: '100%',
            }}
          >
            {isVisible
              ? 'Hide raw data received from server'
              : 'Reveal raw data received from server'}
          </button>
          {isVisible && (
            <pre style={{ overflowX: 'scroll', textAlign: 'left' }}>
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </main>
      )}
    </Query>
  );
}

export default SampleGraphqlCall;
