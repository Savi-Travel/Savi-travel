import 'react-native';
import React from 'react';
import SaviTravel from '../index.ios.js';
import 'isomorphic-fetch'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SaviTravel />
  );
});
