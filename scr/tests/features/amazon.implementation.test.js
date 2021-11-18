import {injectSteps} from "../steps"
import {loadFeature} from "jest-cucumber";


injectSteps(
  loadFeature("./signIn.feature", {
    loadRelativePath: true,
    // tagFilter: "not @amazon_com",
  })
);
