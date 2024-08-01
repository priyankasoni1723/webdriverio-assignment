import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { browser } from "@wdio/globals";

BeforeAll(async () => {
  // Runs before all scenarios
  console.log("Before all scenarios");
});

Before(async (scenario) => {
  // Runs before each scenario
  console.log(`Starting scenario: ${scenario.pickle.name}`);
});

After(async (scenario) => {
  // Runs after each scenario
  console.log(`Finished scenario: ${scenario.pickle.name}`);
  // Additional teardown logic if needed
});

AfterAll(async () => {
  // Runs after all scenarios
  console.log("After all scenarios");
  await browser.deleteSession();
});
