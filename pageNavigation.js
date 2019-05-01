let pageObjects = {}
module.exports = {
    beforeEach: browser => {
        browser.url('https://www.humblebundle.com')
        pageObjects = browser.page.pageObjects()
        pageObjects.navigate()
            .api.maximizeWindow()
    },

    after: browser => {
        browser.end()
    },

    'Page Navigation': browser => {
        pageObjects
            .waitForElementVisible('@aboutTab')
            .click('@aboutTab')
            .click('@ourStory')
            .expect.element('div[class="section-header"]').text.to.equal("WHAT IS HUMBLE BUNDLE?").before(5000)
        pageObjects
            .waitForElementPresent('@troveLink', 5000)
        browser.url('https://www.humblebundle.com/monthly/trove')
        //     //link doesn't click when automated
        pageObjects
            .waitForElementPresent('@header', 5000)
            .click('div[data-dropdown-type="bundle-dropdown"]')
            .waitForElementPresent('div[class="bundle-dropdown-content-wrapper"]', 5000)
        browser.url('https://www.humblebundle.com/refer?hmb_source=footer&hmb_medium=footer_refer&hmb_campaign=refer_a_friend')
        //link doesn't click when automated
        pageObjects
            .waitForElementPresent('div[class="referral-box-bonus-header"]', 5000)
            .expect.element('div[class="referral-box-bonus-header"]').text.to.contain("REFER A FRIEND TO HUMBLE MONTHLY")
        pageObjects
            .click('@referTerms')
        browser.windowHandles(function (result) {
            var handle = result.value[1];
            browser.switchWindow(handle);
        });
        pageObjects
            .waitForElementPresent('h1', 5000)
            .expect.element('h1').text.to.contain("Humble Monthly - Referral Program")
    }
}
