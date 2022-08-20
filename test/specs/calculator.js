describe('Pre retirement calculator', () => {
    it('User should be able to submit form with all required fields filled in  ', async () => {
        browser.url("https://www.securian.com/insights-tools/retirement-calculator.html")
        await (await($("#current-age"))).setValue("40")
        browser.maximizeWindow()
        browser.pause(4000)
        await (await($("#retirement-age"))).setValue("68")
        browser.pause(2000)
        await (await($("#current-income"))).click()
        await (await($("#current-income"))).setValue("100000")
        browser.pause(2000)
        await (await($("#spouse-income"))).click()
        await (await($("#spouse-income"))).setValue("75000")
        browser.pause(2000)
        await (await($("#current-total-savings"))).click()
        await (await($("#current-total-savings"))).setValue("500000")
        browser.pause(2000)
        await (await($("#current-annual-savings"))).setValue("10")
        browser.pause(2000)
        await (await($("#savings-increase-rate"))).setValue("5")
        browser.pause(2000)
       
        await (await($("[data-tag-id='submit']"))).click()
        const text = await $("#calculator-results-container")
        await text.waitForDisplayed()
        await expect(text).toBePresent()
    });
});

