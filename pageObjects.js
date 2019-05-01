module.exports = {
    url: ('https://www.humblebundle.com'),
    elements: {
        'userIcon': 'i[class="navbar-item-icon hb hb-user"]',
        'logInBtn': 'button[class="button large account-cta green js-account-login"]',
        'emailInput': 'input[type="email"]',
        'passInput': 'input[type="password"]',
        'aboutTab': 'a[data-dropdown-type="about-dropdown"]',
        'ourStory': 'a[href="/about"]',
        'troveLink':{
            selector:'//a[text()="Humble Trove"]',
            locateStrategy:"xpath"
        },
        'header': 'h1[class="section-header"]',
        'referTerms': 'a[class="button-v2 rectangular-button black"]'
    }
}