const { autoBindSteps } = require("jest-cucumber");

const steps = [require("./amazon.implementation")];

module.exports = {
  injectSteps: (feature) => {
    autoBindSteps([feature], steps);
  },
};
