import React, { useState } from "react";
import styled from "styled-components";

import { Wrapper } from "./GlobalStyles";

import PropTypes from "prop-types";

export const SearchBox = props => {
  const [query, setQuery] = useState("");
  return (
    <main>
      <form
        onSubmit={e => {
          e.preventDefault();
          props.onSubmit(query);
          setQuery("");
        }}
      >
        <label>Start by searching for a phone number</label>
        <input
          type="text"
          placeholder="Type a phone number"
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
        <button type="submit">Search</button>
      </form>
    </main>
  );
};

SearchBox.prototypes = {
  onSubmit: PropTypes.func.isRequired
};
