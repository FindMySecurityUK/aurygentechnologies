import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './CookiePolicy.css';

const CookiePolicy = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cookie-policy-page">
      <div className="cookie-policy-header" ref={headerRef}>
        <div className={`cookie-policy-header-content ${headerInView ? 'animate' : ''}`}>
          <h1 className="cookie-policy-title">Cookie Policy</h1>
          <p className="cookie-policy-subtitle">Understanding how we use cookies and similar technologies</p>
        </div>
      </div>

      <div className="cookie-policy-content">
        <div className="cookie-policy-container">
          <section className="cookie-policy-section">
            <h2>Introduction</h2>
            <p>
              This Cookie Policy explains how Aurygen Technologies Ltd ("Aurygen Technologies", "we", "us", or "our") uses cookies and similar technologies on our website at www.aurygen.com and any related domains or online platforms we operate. It forms an integral part of our Privacy Policy and Terms & Conditions. By continuing to use our website, you agree to the use of cookies in accordance with this Policy, unless you adjust your browser settings to refuse cookies.
            </p>
            <p>
              Capitalised terms used in this Cookie Policy have the same meanings as in our Terms & Conditions and Privacy Policy.
            </p>
          </section>

          <section className="cookie-policy-section">
            <h2>What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. These files store or retrieve information about you, your preferences, or your device, and are returned to the originating website or another website that recognises the cookie on each subsequent visit. Cookies help us make our website and services more efficient, secure, and user-friendly. They allow us to recognise your device, remember your preferences, and tailor your online experience. The term "cookies" in this Policy also includes similar technologies such as pixels, tags, and web beacons, which serve comparable purposes.
            </p>
            <p>
              We use cookies to:
            </p>
            <ul>
              <li>Enable core website functionality.</li>
              <li>Improve website performance and security.</li>
              <li>Analyse how visitors interact with our site.</li>
              <li>Tailor content and services to user preferences.</li>
            </ul>
            <p>
              We regularly review and update the cookies used on our website. However, as cookie technologies and third-party services evolve, the list of cookies may change without prior notice.
            </p>
          </section>

          <section className="cookie-policy-section">
            <h2>Types of Cookies We Use</h2>
            <p>
              We classify cookies according to duration, provenance, and purpose. These classifications help you understand how and why cookies are placed on your device when you interact with Aurygen Technologies' website and online services.
            </p>
            
            <h3>Duration of Cookies</h3>
            <p>Cookies can remain on your device for varying periods:</p>
            <div className="cookie-types-table">
              <div className="table-header">
                <div className="table-cell"><strong>Type</strong></div>
                <div className="table-cell"><strong>Description</strong></div>
              </div>
              <div className="table-row">
                <div className="table-cell"><strong>Session Cookies</strong></div>
                <div className="table-cell">Temporary cookies that are stored on your device only for the duration of your browsing session. They are automatically deleted once you close your browser. Session cookies are typically used to enable essential website functions and ensure secure navigation.</div>
              </div>
              <div className="table-row">
                <div className="table-cell"><strong>Persistent Cookies</strong></div>
                <div className="table-cell">Cookies that remain stored on your device until they expire or you manually delete them. All persistent cookies include an expiry date in their code, which can range from a few days to several years, depending on their purpose. Persistent cookies help us remember your preferences across visits and provide a more personalised experience.</div>
              </div>
            </div>

            <h3>Provenance (Origin) of Cookies</h3>
            <p>Cookies may originate from different sources:</p>
            <div className="cookie-types-table">
              <div className="table-header">
                <div className="table-cell"><strong>Type</strong></div>
                <div className="table-cell"><strong>Description</strong></div>
              </div>
              <div className="table-row">
                <div className="table-cell"><strong>First-Party Cookies</strong></div>
                <div className="table-cell">Placed directly by Aurygen Technologies through our website (www.aurygen.com and related domains). These cookies are used to operate core website functions, remember your preferences, and improve user experience.</div>
              </div>
              <div className="table-row">
                <div className="table-cell"><strong>Third-Party Cookies</strong></div>
                <div className="table-cell">Placed by external providers whose services we integrate into our website, such as analytics tools, embedded content, or advertising networks. While we select these providers with care and require them to meet applicable data protection standards, we do not control how third parties use cookies once set.</div>
              </div>
            </div>

            <h3>Purpose of Cookies</h3>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li><strong>Strictly Necessary Cookies:</strong> Required for the website to function properly, such as enabling secure logins, form submissions, and navigation between pages.</li>
              <li><strong>Performance & Statistical Cookies:</strong> Help us understand how visitors use our website, including pages viewed and navigation patterns, so we can improve performance and usability.</li>
              <li><strong>Functionality Cookies:</strong> Remember your settings, preferences, and customisations (such as language or region) to enhance your browsing experience.</li>
              <li><strong>Marketing & Targeting Cookies:</strong> Used to deliver relevant content and advertising, measure the effectiveness of campaigns, and track engagement across platforms.</li>
              <li><strong>Unclassified Cookies:</strong> Cookies that have not yet been categorised. We regularly review and update our cookie classifications and will amend this policy accordingly.</li>
            </ul>
          </section>

          <section className="cookie-policy-section">
            <h2>Necessary Cookies</h2>
            <p>
              Necessary cookies make the Aurygen Technologies website usable by enabling core functions such as secure page navigation, session management, and access to protected areas. Without these cookies, the website cannot function as intended. They do not require your consent under UK GDPR but are disclosed here for transparency.
            </p>
            <div className="cookies-table">
              <div className="table-header">
                <div className="table-cell"><strong>Name</strong></div>
                <div className="table-cell"><strong>Purpose</strong></div>
                <div className="table-cell"><strong>Provider</strong></div>
                <div className="table-cell"><strong>Expiry</strong></div>
                <div className="table-cell"><strong>Type</strong></div>
              </div>
              <div className="table-row">
                <div className="table-cell">CookieConsent</div>
                <div className="table-cell">Stores the user's cookie consent status for the current domain.</div>
                <div className="table-cell">Cookiebot</div>
                <div className="table-cell">1 year</div>
                <div className="table-cell">HTTP</div>
              </div>
              <div className="table-row">
                <div className="table-cell">.AspNetCore.Antiforgery.#</div>
                <div className="table-cell">Prevents Cross-Site Request Forgery (CSRF) attacks.</div>
                <div className="table-cell">Aurygen Technologies</div>
                <div className="table-cell">Session</div>
                <div className="table-cell">HTTP</div>
              </div>
              <div className="table-row">
                <div className="table-cell">.AspNetCore.Mvc.CookieTempDataProvider</div>
                <div className="table-cell">Preserves the visitor's session state across page requests.</div>
                <div className="table-cell">Aurygen Technologies</div>
                <div className="table-cell">Session</div>
                <div className="table-cell">HTTP</div>
              </div>
              <div className="table-row">
                <div className="table-cell">darkTheme</div>
                <div className="table-cell">Stores the user's preferred display mode for the website.</div>
                <div className="table-cell">Aurygen Technologies</div>
                <div className="table-cell">Session</div>
                <div className="table-cell">HTTP</div>
              </div>
            </div>
          </section>

          <section className="cookie-policy-section">
            <h2>Statistic Cookies</h2>
            <p>
              Statistic cookies help us analyse how visitors interact with the Aurygen Technologies website by collecting and reporting usage data anonymously. They enable us to measure and improve the site's performance, identify the most and least visited pages, and gain insights into how visitors navigate through the website.
            </p>
            <p>
              All data gathered by these cookies is aggregated and anonymised, meaning it cannot be used to directly identify any individual.
            </p>
            <div className="cookies-table">
              <div className="table-header">
                <div className="table-cell"><strong>Name</strong></div>
                <div className="table-cell"><strong>Purpose</strong></div>
                <div className="table-cell"><strong>Provider</strong></div>
                <div className="table-cell"><strong>Expiry</strong></div>
                <div className="table-cell"><strong>Type</strong></div>
              </div>
              <div className="table-row">
                <div className="table-cell">_ga</div>
                <div className="table-cell">Registers a unique ID to generate statistical data on how the visitor uses the website.</div>
                <div className="table-cell">Google</div>
                <div className="table-cell">2 years</div>
                <div className="table-cell">HTTP</div>
              </div>
              <div className="table-row">
                <div className="table-cell">_ga_#</div>
                <div className="table-cell">Used by Google Analytics to record the number of visits and the dates of the first and most recent visit.</div>
                <div className="table-cell">Google</div>
                <div className="table-cell">2 years</div>
                <div className="table-cell">HTTP</div>
              </div>
            </div>
          </section>

          <section className="cookie-policy-section">
            <h2>Marketing Cookies</h2>
            <p>
              Marketing cookies are used to deliver relevant advertising and tailored content, measure campaign performance, and track engagement across websites. These cookies are often set by third-party advertising partners who may use them to build a profile of your interests. If you disable these cookies, you may still see advertisements, but they will be less relevant to you.
            </p>
            <div className="cookies-table">
              <div className="table-header">
                <div className="table-cell"><strong>Name</strong></div>
                <div className="table-cell"><strong>Purpose</strong></div>
                <div className="table-cell"><strong>Provider</strong></div>
                <div className="table-cell"><strong>Expiry</strong></div>
                <div className="table-cell"><strong>Type</strong></div>
              </div>
              <div className="table-row">
                <div className="table-cell">_fbp</div>
                <div className="table-cell">Used by Facebook to deliver a series of advertising products, including real-time bidding from third-party advertisers.</div>
                <div className="table-cell">Meta Platforms, Inc.</div>
                <div className="table-cell">3 months</div>
                <div className="table-cell">HTTP</div>
              </div>
              <div className="table-row">
                <div className="table-cell">IDE</div>
                <div className="table-cell">Used by Google DoubleClick to record user actions after viewing or clicking ads, measure ad effectiveness, and present targeted ads.</div>
                <div className="table-cell">Google</div>
                <div className="table-cell">400 days</div>
                <div className="table-cell">HTTP</div>
              </div>
              <div className="table-row">
                <div className="table-cell">_gcl_au</div>
                <div className="table-cell">Used by Google AdSense to test ad effectiveness across websites using its services.</div>
                <div className="table-cell">Google</div>
                <div className="table-cell">3 months</div>
                <div className="table-cell">HTTP</div>
              </div>
            </div>
          </section>

          <section className="cookie-policy-section">
            <h2>Use of External Tools on Our Website</h2>
            
            <h3>Google Analytics</h3>
            <p>
              We use Google Analytics, a web analytics service that helps us understand how visitors interact with the Aurygen Technologies website. Google Analytics collects, records, and analyses data about visitor behaviour, enabling us to improve the performance, usability, and content of our site.
            </p>
            <p>
              Google Analytics is operated by Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. It uses cookies (as outlined in the table above) to track user interactions. The information generated by these cookies about your use of our website is typically transmitted to and stored on Google servers in the United States. Google may share this information with third parties where required by law or where such third parties process the information on Google's behalf.
            </p>
            <p>
              We have activated IP anonymisation, which ensures that, within the European Union and other European Economic Area member states, your IP address is shortened before transmission. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there.
            </p>
            <p>
              You can prevent Google Analytics from collecting and processing data generated by cookies by downloading and installing the browser add-on available at: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>. Additionally, you can delete Google Analytics cookies at any time via your browser settings.
            </p>

            <h3>Google Tag Manager</h3>
            <p>
              We use Google Tag Manager, a tool that allows us to manage and deploy tracking codes ("tags") on our website from a central interface. Google Tag Manager itself does not use cookies and does not collect personal data. It simply facilitates the implementation of other tags, which may themselves collect data.
            </p>
            <p>
              If you disable cookies or specific tags, Google Tag Manager will remain active as a management tool, but the associated tags may not function fully.
            </p>
          </section>

          <section className="cookie-policy-section">
            <h2>Legal Basis for the Use of Cookies</h2>
            <p>
              We only use cookies where we have obtained your consent through our Cookie Settings, except for necessary cookies, which are required for the website to function and are implemented on the legal basis of performing a contract with you.
            </p>
            <p>
              Where consent is required, it is obtained in accordance with our Privacy Policy and applicable data protection laws, including the UK GDPR.
            </p>
            <p>
              By continuing to use our website after selecting your cookie preferences, you confirm that you have the authority to consent to cookie usage on the device being used, whether or not it is owned by you.
            </p>
          </section>

          <section className="cookie-policy-section">
            <h2>How to Block Cookies</h2>
            <p>
              You can refuse non-essential cookies via our cookie banner or Cookie Settings at any time. Most browsers also allow you to manage or delete cookies; blocking all cookies (including strictly necessary cookies) may prevent parts of the site from working.
            </p>
            <p>
              Helpful guides for managing cookies in different browsers:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">Edge</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer">Firefox</a></li>
              <li><a href="https://support.apple.com/en-gb/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
              <li><a href="https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DAndroid" target="_blank" rel="noopener noreferrer">Android</a></li>
              <li><a href="https://help.opera.com/en/latest/web-preferences/" target="_blank" rel="noopener noreferrer">Opera</a></li>
            </ul>
          </section>

          <section className="cookie-policy-section">
            <h2>Changes to Our Cookie Policy</h2>
            <p>
              We may update this Cookie Policy periodically to reflect changes in our practices, technology, or legal requirements. Where material changes are made, we will provide notice on our website within a reasonable period before the changes take effect and again once they are in force.
            </p>
          </section>

          <section className="cookie-policy-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, our use of cookies, or require assistance regarding any matter connected to our Website or services, please contact us at:
            </p>
            <div className="contact-info">
              <p>Email: support@aurygen.com</p>
            </div>
          </section>

          <div className="last-updated">
            <p>Last Updated: 8 August 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;