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
  },
  {
    name: 'pwd2',
    title: 'Password Holder #2',
    path: '/feature/pwd2',
    component: import('./Password2')
  },
  {
    name: 'pwd3',
    title: 'Password Holder #3',
    path: '/feature/pwd3',
    component: import('./Password2')
  },
  {
    name: 'pwd4',
    title: 'Password Holder #4',
    path: '/feature/pwd4',
    component: import('./Password2')
  },
  {
    name: 'pwd5',
    title: 'Password Holder #5',
    path: '/feature/pwd5',
    component: import('./Password2')
  },
  {
    name: 'pwd6',
    title: 'Password Holder #6',
    path: '/feature/pwd6',
    component: import('./Password2')
  },
  {
    name: 'pwd7',
    title: 'Password Holder #7',
    path: '/feature/pwd7',
    component: import('./Password2')
  },
  {
    name: 'pwd8',
    title: 'Password Holder #8',
    path: '/feature/pwd8',
    component: import('./Password2')
  },
  {
    name: 'pwd9',
    title: 'Password Holder #9',
    path: '/feature/pwd9',
    component: import('./Password2')
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
