// eslint-disable-next-line no-unused-vars
import { Component } from 'vue';

/**
 * @typedef {Object} Feature
 * @property {string} name The name of the feature
 * @property {string} title The title in the feature card
 * @property {string} path The path to the feature
 * @property {Promise<Component>} component The Vuejs component of the feature
 * @exports Feature
 */

/**
 * @type {Feature[]}
 */
const featureArray = [
  {
    name: 'pwd',
    title: 'Password Holder',
    path: '/feature/pwd',
    component: import('./Password')
  }
];

/**
 * @param {string|undefined} name
 * @returns {Feature}
 */
export const features = name => {
  if (!name) return featureArray;
  const feature = featureArray.find(feature => feature.name === name);
  return {
    ...feature
  };
};
