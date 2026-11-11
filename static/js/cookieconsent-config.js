// Cookie Consent v3 configuration

// Function to load Google Analytics
function loadGoogleAnalytics() {
    if (window.gaLoaded) return; // Prevent double loading

    var gaId = window.GA_MEASUREMENT_ID;
    if (!gaId || gaId === 'G-XXXXXXXXXX') return;

    // Load gtag.js
    var script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId);

    window.gaLoaded = true;
    console.log('Google Analytics loaded:', gaId);
}

document.addEventListener('DOMContentLoaded', function() {
    CookieConsent.run({
        guiOptions: {
            consentModal: {
                layout: 'box',
                position: 'bottom right',
                flipButtons: false,
                equalWeightButtons: true
            },
            preferencesModal: {
                layout: 'box'
            }
        },

        disablePageInteraction: false,

        categories: {
            necessary: {
                enabled: true,
                readOnly: true
            },
            analytics: {
                enabled: true,
                readOnly: false,
                autoClear: {
                    cookies: [
                        { name: /^_ga/ },
                        { name: /^_gid/ }
                    ]
                }
            }
        },

        // Load GA when user accepts analytics
        onConsent: function() {
            if (CookieConsent.acceptedCategory('analytics')) {
                loadGoogleAnalytics();
            }
        },

        // Handle preference changes
        onChange: function(cookie, changedCategories) {
            if (changedCategories.includes('analytics')) {
                if (CookieConsent.acceptedCategory('analytics')) {
                    loadGoogleAnalytics();
                } else {
                    // Analytics rejected - cookies will be auto-cleared
                    console.log('Analytics disabled');
                }
            }
        },

        language: {
            default: 'en',
            autoDetect: 'document',
            translations: {
                en: {
                    consentModal: {
                        title: 'Cookie Consent',
                        description: 'We use cookies to analyze site traffic and improve your experience.',
                        acceptAllBtn: 'Accept all',
                        showPreferencesBtn: 'Manage preferences'
                    },
                    preferencesModal: {
                        title: 'Cookie Preferences',
                        acceptAllBtn: 'Accept all',
                        acceptSelectedBtn: 'Manage preferences',
                        savePreferencesBtn: 'Save preferences',
                        sections: [
                            {
                                title: 'Cookie Usage',
                                description: 'We use cookies to improve your browsing experience and analyze traffic.'
                            },
                            {
                                title: 'Essential Cookies',
                                description: 'These cookies are necessary for the website to function.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Analytics Cookies',
                                description: 'These cookies help us understand how visitors use our site.',
                                linkedCategory: 'analytics'
                            }
                        ]
                    }
                },
                da: {
                    consentModal: {
                        title: 'Samtykke til cookies',
                        description: 'Vi bruger cookies til at analysere trafikken på sitet og forbedre din oplevelse.',
                        acceptAllBtn: 'Acceptér alle',
                        showPreferencesBtn: 'Administrer præferencer'
                    },
                    preferencesModal: {
                        title: 'Cookiepræferencer',
                        acceptAllBtn: 'Acceptér alle',
                        acceptSelectedBtn: 'Administrer præferencer',
                        savePreferencesBtn: 'Gem præferencer',
                        sections: [
                            {
                                title: 'Brug af cookies',
                                description: 'Vi bruger cookies til at forbedre din oplevelse og analysere trafikken.'
                            },
                            {
                                title: 'Nødvendige cookies',
                                description: 'Disse cookies er nødvendige for, at websitet fungerer.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Analysecookies',
                                description: 'Disse cookies hjælper os med at forstå, hvordan besøgende bruger sitet.',
                                linkedCategory: 'analytics'
                            }
                        ]
                    }
                }
            }
        }
    });
});
