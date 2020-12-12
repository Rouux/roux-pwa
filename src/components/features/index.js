// eslint-disable-next-line no-unused-vars
import { Component } from 'vue';

/**
 * @typedef {Object} Feature
 * @property {number} id The name of the feature
 * @property {string} name The name of the feature
 * @property {string} title The title in the feature card
 * @property {string} path The path to the feature
 * @property {Promise<Component>} component The Vuejs component of the feature
 * @exports Feature
 */

/**
 * @typedef {Object} Features
 * @type {{[key: string] : Feature}}
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
    title: 'Password Holder',
    path: '/feature/pwd',
    component: import('./Password')
  },
  {
    name: 'pwd3',
    title: 'Password Holder',
    path: '/feature/pwd',
    component: import('./Password')
  },
  {
    name: 'pwd4',
    title: 'Password Holder',
    path: '/feature/pwd',
    component: import('./Password')
  },
  {
    name: 'pwd5',
    title: 'Password Holder',
    path: '/feature/pwd',
    component: import('./Password')
  },
  {
    name: 'pwd6',
    title: 'Password Holder',
    path: '/feature/pwd',
    component: import('./Password')
  },
  {
    name: 'pwd7',
    title: 'Password Holder',
    path: '/feature/pwd',
    component: import('./Password')
  },
  {
    name: 'pwd8',
    title: 'Password Holder',
    path: '/feature/pwd',
    component: import('./Password')
  },
  {
    name: 'pwd9',
    title: 'Password Holder',
    path: '/feature/pwd',
    component: import('./Password')
  }
];

/**
 * @param {Feature[]} featureArray
 * @returns {Features}
 */
function build(featureArray) {
  const features = {};
  featureArray.forEach((value, index) => {
    value.id = index;
    features[value.name] = value;
  });
  return features;
}

/**
 * @type {Features}
 */
export const features = build(featureArray);
