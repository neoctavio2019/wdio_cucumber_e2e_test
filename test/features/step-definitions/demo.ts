import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is open$/, async function () {
  console.log(`Before opening Google page`)
  await browser.url("https://www.google.com");
  await browser.pause(1000);
  console.log(">> Google page is open");
});

Then(/^Search with (.*)$/, async function (searchItem) {
  let ele = await $("//*[@id='APjFqb']");
  await ele.setValue(searchItem);
  await browser.keys("Enter");
  await browser.pause(2000);
  console.log(`>> Search with: ${searchItem}`);
});

Then(/^Click on the first search result$/, async function () {
  await browser.pause(1000);
  await $("//*[@class='LC20lb MBeuO DKV0Md']").click();
  console.log(`>> Click on the first search result`);
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  await browser.pause(1000);
  let url = await browser.getUrl();
  console.log(`>> Actual URL: ${url}`);
  chai.expect(url).to.equal(expectedURL);
  console.log(`>> URL is matched`);
}); 