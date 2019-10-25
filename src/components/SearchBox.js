import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const SearchBox = props => {
  const [query, setQuery] = useState('');
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.onSubmit(query);
        setQuery('');
      }}
    >
      <label>
        Start by searching for a phone number
        <input
          type="text"
          placeholder="Type a phone number"
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

SearchBox.prototypes = {
  onSubmit: PropTypes.func.isRequired,
};
