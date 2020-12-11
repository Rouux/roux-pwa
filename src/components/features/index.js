/**
 * @typedef {Object} Feature
 * @property {number} id The name of the feature
 * @property {string} name The name of the feature
 * @property {string} title The title in the feature card
 * @property {string} path The complete path to the feature
 * @property {Component} component The Vusjs component of the feature
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
    title: 'Feature PWD',
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
