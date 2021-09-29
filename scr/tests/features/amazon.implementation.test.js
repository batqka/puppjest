const {loadFeature} = require('jest-cucumber');
const {injectSteps} = require('../steps');

injectSteps(loadFeature('./signIn.feature', {loadRelativePath: true}));