import React, { Component, createRef } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Index,
  Hits,
  connectStateResults
} from 'react-instantsearch-dom';
import { Algolia } from 'styled-icons/fa-brands/Algolia';

import { Root, HitsWrapper, By } from './styles';
import Input from './Input';
import * as hitComps from './hits';

const events = ['mousedown', 'touchstart'];

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits ? children : `No results for ${state.query}`
);

const Stats = connectStateResults(
  ({ searchResults = res }) =>
    res && res.nbHits > 0 && `${res.nbHits} results${res.nbHits > 1 ? `s` : ''}`
);
