import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-policy-page">
      <div className="privacy-header">
        <div className={`privacy-header-content ${inView ? 'animate' : ''}`} ref={ref}>
          <h1 className="privacy-title">Privacy Policy</h1>
          <p className="privacy-subtitle">Your privacy is our priority</p>
        </div>
      </div>
      
      <div className="privacy-content">
        <div className="privacy-container">
          <section className="privacy-section">
            <h2>Introduction</h2>
            <p>
              Aurygen Ltd ("trading as Aurygen Technologies", "we", "us", or "our") is a UK-registered bespoke software development company headquartered in London, United Kingdom, with offshore engineering operations in Pakistan. We specialise in secure, scalable, and AI-powered digital solutions for startups, SMEs, and enterprises worldwide.
            </p>
            <p>
              We take the security of your information seriously and are committed to keeping your personal data safe. This Policy is designed to explain transparently and clearly how we collect, use, share, and safeguard your information, and how you can exercise the rights you have as a data subject.
            </p>
            <p>
              This Policy applies to all individuals who:
            </p>
            <ul>
              <li>Access our website</li>
              <li>Send us enquiries via our contact page, email, or social media accounts</li>
              <li>Engage our services</li>
              <li>Apply for a position at Aurygen Technologies</li>
            </ul>
            <p>
              This Policy does not apply to data that has been anonymised and can no longer be used to identify an individual.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Definitions</h2>
            <div className="definitions-table">
              <div className="table-row">
                <div className="table-cell term"><strong>Consent</strong></div>
                <div className="table-cell definition">Your explicit consent to the processing of personal data. Individuals aged 16 or over in the United Kingdom may provide free and informed consent to the processing of their personal data.</div>
              </div>
              <div className="table-row">
                <div className="table-cell term"><strong>Cookies</strong></div>
                <div className="table-cell definition">Small pieces of code stored on your device (computer, tablet, or mobile). This information is used to provide you with certain website functions, track your usage, and compile statistical reports on website activity.</div>
              </div>
              <div className="table-row">
                <div className="table-cell term"><strong>Data Processor</strong></div>
                <div className="table-cell definition">Any natural or legal person who processes personal data on our behalf. We may use the services of trusted third-party providers to process your personal data more effectively.</div>
              </div>
              <div className="table-row">
                <div className="table-cell term"><strong>Data Protection Law</strong></div>
                <div className="table-cell definition">United Kingdom – UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. European Union/EEA – Regulation (EU) 2016/679 (EU GDPR). Pakistan – Personal Data Protection Bill (where applicable for offshore processing).</div>
              </div>
              <div className="table-row">
                <div className="table-cell term"><strong>Personal Data</strong></div>
                <div className="table-cell definition">Any information relating to an identified or identifiable natural person (Data Subject). An identifiable natural person is one who can be identified, directly or indirectly, by reference to identifiers such as a name, identification number, location data, online identifier, or one or more factors specific to their physical, physiological, genetic, mental, economic, cultural, or social identity.</div>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2>Information We Collect</h2>
            <h3>Personal Data You Share with Us Voluntarily</h3>
            <p><strong>Personal Information Provided Directly by You:</strong></p>
            <ul>
              <li>Name</li>
              <li>Company name</li>
              <li>Email address</li>
              <li>Telephone number</li>
              <li>Records and copies of your correspondence with us (including support tickets and project discussions)</li>
            </ul>
            <p>
              All personal information that you provide to us must be true, complete, and accurate. You are responsible for notifying us of any changes to such personal information.
            </p>
            
            <h3>Usage Details, IP Addresses, and Cookies</h3>
            <p>We may collect:</p>
            <ul>
              <li>Details of your visits to our website (including traffic data, location data, and other communication data)</li>
              <li>Information about your connectivity (IP address, browser type and version, operating system)</li>
              <li>Device details (device type, unique device identification number)</li>
              <li>Broad geographic location (e.g., country or city-level location)</li>
              <li>Logs and records of your interactions with our website</li>
              <li>Resources you access and use on the website</li>
              <li>Browsing actions and patterns</li>
              <li>Information collected using cookies, web beacons, and similar tracking technologies</li>
            </ul>

            <h3>Personal Data We Collect About You from Third Parties</h3>
            <p>
              In certain circumstances, we may obtain your personal data from third parties rather than directly from you.
            </p>
            <p>
              If you apply for a role at Aurygen Technologies, we may collect information about you:
            </p>
            <ul>
              <li>From publicly available sources online (e.g., your current employer's website, or a professional networking site such as LinkedIn)</li>
              <li>Through references or word of mouth, for example, via a referral from a former employer, colleague, or a referee you have provided</li>
            </ul>
            <p>
              If you are a client, we may process identification and background information as part of our client onboarding process and to fulfil any legal or regulatory requirements to which we are subject.
            </p>
          </section>

          <section className="privacy-section">
            <h2>How We Use and Collect Personal Data</h2>
            <p>
              We use and process your personal data only when necessary to operate our business, deliver our services, fulfil our legal and regulatory obligations, and provide a secure and functional website. We handle your data with care and transparency.
            </p>
            
            <div className="data-usage-table">
              <div className="table-header">
                <div className="table-cell"><strong>Data We Collect</strong></div>
                <div className="table-cell"><strong>Purpose</strong></div>
                <div className="table-cell"><strong>Legal Basis</strong></div>
                <div className="table-cell"><strong>Retention Period</strong></div>
              </div>
              <div className="table-row">
                <div className="table-cell">Author's name, job title, and short biography</div>
                <div className="table-cell">Publishing articles, blogs, and thought leadership content on our website and marketing channels</div>
                <div className="table-cell">Consent – you can withdraw consent at any time, without affecting the lawfulness of processing before withdrawal</div>
                <div className="table-cell">Until consent is withdrawn</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Your name, email address, and any additional details provided in your message or attachments</div>
                <div className="table-cell">Responding to enquiries received via our website, social media, email, or other contact channels, and providing or improving our services</div>
                <div className="table-cell">Necessary for the performance of a contract or to take steps at your request before entering into a contract</div>
                <div className="table-cell">Duration of the agreement, or 12 months from last contact if no agreement is concluded</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Name, email address, type of application (job/internship), city, and any additional personal data provided</div>
                <div className="table-cell">Processing your job or internship application to determine suitability for roles at Aurygen Technologies</div>
                <div className="table-cell">Necessary for the performance of a contract or to take steps before entering into a contract. May also be based on your consent</div>
                <div className="table-cell">12 months after last application if unsuccessful; 24 months if consent is given for longer retention</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Email address of newsletter subscribers</div>
                <div className="table-cell">Sending newsletters with updates on our services, industry insights, events, and company news</div>
                <div className="table-cell">Consent – can be withdrawn at any time</div>
                <div className="table-cell">Until consent is withdrawn</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Photos, videos, and short biographies of employees; photos, videos, and testimonials of clients</div>
                <div className="table-cell">Promoting Aurygen Technologies, our culture, values, and services across our website, social media, and other communication channels</div>
                <div className="table-cell">Consent – can be withdrawn at any time</div>
                <div className="table-cell">Until consent is withdrawn</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Technical and device data collected via cookies and similar technologies</div>
                <div className="table-cell">Analysing, managing, and improving website performance; ensuring secure usage; tailoring content to device type; monitoring visitor engagement</div>
                <div className="table-cell">Consent (where required) or legitimate interest for security and functionality</div>
                <div className="table-cell">Until consent is withdrawn for consent-based processing; for legitimate interest, retained as long as the interest exists</div>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2>Email Marketing Information</h2>
            <h3>Email Engagement Data</h3>
            <ul>
              <li>Open Rate – whether our email was opened</li>
              <li>Duration of Open – how long the email remained open</li>
              <li>Content Interaction – details about how recipients interacted with the content (e.g., links clicked)</li>
              <li>Marketing Preferences – information on your stated preferences for receiving marketing communications</li>
            </ul>
            <p>
              The processing described in this section is conducted on the basis of our legitimate interests to understand how recipients engage with our marketing communications, improve the overall effectiveness of our marketing activities, enhance our products and services, and build stronger relationships with our clients and subscribers.
            </p>
            
            <h3>Marketing Communications</h3>
            <p>
              For business-to-business marketing in the UK, we comply with the Privacy and Electronic Communications Regulations (PECR) and may rely on the "soft opt-in" where lawful. This means we may send you information about our services if you have previously engaged with us, provided that you are given a clear opportunity to opt out at the time your details were collected and in every subsequent communication.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Information Sharing and Disclosure</h2>
            <p>
              We do not sell or rent your personal data to third parties. However, we may share your data as described below:
            </p>
            <ul>
              <li><strong>Business Transactions</strong> – In the event of a merger, acquisition, restructuring, reorganisation, or sale of assets, your personal data may be transferred as part of the business assets</li>
              <li><strong>Third Parties</strong> – With our subsidiaries, affiliates, contractors, and service providers who support our operations, under contractual obligations to keep your data confidential and use it only for the agreed purpose</li>
              <li><strong>Legal Compliance</strong> – Where required to comply with legal obligations or respond to lawful requests from authorities</li>
              <li><strong>Enforcement</strong> – To enforce our Terms & Conditions or other agreements</li>
              <li><strong>Protection</strong> – To protect the rights, property, or safety of Aurygen Technologies, our employees, our users, or others</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>International Data Transfers</h2>
            <p>
              We may transfer your personal data to countries outside the UK and European Economic Area (EEA), including Pakistan. These countries may not offer the same level of data protection as those within the UK or EEA.
            </p>
            <p>
              <strong>Plain-language risk explanation:</strong> This means that while we use legally binding agreements and security safeguards, your personal data may be subject to different privacy laws, and in rare cases, local authorities may have access to it without the same protections you would receive under UK law.
            </p>
            <p>
              To mitigate these risks, we use Standard Contractual Clauses (SCCs), the UK Addendum, and robust technical and organisational measures to safeguard your data.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Retention</h2>
            <p>
              At Aurygen Technologies, we retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or to meet legal, regulatory, or internal policy requirements.
            </p>
            <p>
              When determining retention periods, we take into account:
            </p>
            <ul>
              <li>Applicable local laws and regulations</li>
              <li>Contractual obligations</li>
              <li>The expectations and requirements of data subjects, customers, and suppliers</li>
            </ul>
            <p>
              Once personal data is no longer required, or when you submit a legitimate request for its deletion, we will ensure it is securely deleted or destroyed.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Your Rights</h2>
            <p>
              Aurygen Technologies believes you should have full control over your personal data. The table below explains your rights under applicable UK GDPR and other relevant Data Protection Laws.
            </p>
            
            <div className="rights-table">
              <div className="table-header">
                <div className="table-cell"><strong>Right</strong></div>
                <div className="table-cell"><strong>Description</strong></div>
                <div className="table-cell"><strong>Timeframe</strong></div>
              </div>
              <div className="table-row">
                <div className="table-cell">Right to Withdraw Consent</div>
                <div className="table-cell">If you have given consent for the collection, processing, or transfer of your personal data, you can withdraw it, fully or partly, at any time</div>
                <div className="table-cell">Actioned as soon as possible after receiving your request</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Right of Access</div>
                <div className="table-cell">You can request a copy of the personal data we hold about you. We will provide this in a clear, easily accessible format, free of charge</div>
                <div className="table-cell">Within 30 days of receiving your request</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Right to Rectification</div>
                <div className="table-cell">If your personal data is inaccurate or incomplete, you can request that we correct or update it</div>
                <div className="table-cell">Within 30 days of receiving your request</div>
              </div>
              <div className="table-row">
                <div className="table-cell">Right to Erasure ("Right to be Forgotten")</div>
                <div className="table-cell">You can request deletion of your personal data if it is no longer needed for its original purpose, you withdraw consent, or you object to processing</div>
                <div className="table-cell">Actioned as soon as possible after validation of the request</div>
              </div>
            </div>
          </section>

          <section className="privacy-section">
            <h2>Choices About How We Use and Disclose Your Information</h2>
            <p>
              We are committed to ensuring you remain in control of your personal data. You can manage your preferences and information in the following ways:
            </p>
            <ul>
              <li><strong>Tracking Technologies and Cookies</strong> – Adjust your browser settings to block all or some cookies, or to receive alerts when cookies are sent</li>
              <li><strong>Promotional Communications</strong> – If you no longer wish to receive marketing emails, contact us at support@aurygen.com to request removal from our distribution lists</li>
              <li><strong>Job Applications and CV Submissions</strong> – Data submitted for recruitment will be used solely for that purpose. If you wish us to delete your data or exclude you from future opportunities, email us at support@aurygen.com</li>
              <li><strong>Review and Access</strong> – You can request access to, or correction of, the personal data we hold about you by contacting us</li>
              <li><strong>Data Deletion</strong> – You may request the deletion of your personal data at any time, subject to our legal obligations, by contacting support@aurygen.com</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h2>Children Under the Age of 15</h2>
            <p>
              Our websites and services are not intended for children under the age of 15, and we do not knowingly collect, use, or disclose personal information from anyone below this age.
            </p>
            <p>
              We comply with relevant data protection laws, including the Children's Online Privacy Protection Act (COPPA) in the United States and the General Data Protection Regulation (GDPR) in the European Union, to ensure that personal data from individuals under 15 is not collected.
            </p>
            <p>
              If you are a parent or guardian and believe your child has provided us with personal information without your consent, please contact us immediately at support@aurygen.com. We will promptly investigate and, where applicable, delete any personal information collected from your child.
            </p>
          </section>

          <section className="privacy-section">
            <h2>Data Controller</h2>
            <p>
              The Data Controller for this website is:
            </p>
            <div className="contact-info">
              <p><strong>Aurygen Ltd trading as Aurygen Technologies</strong></p>
              <p>Registered in England and Wales</p>
              <p>United Kingdom</p>
            </div>
            
            <h3>Data Protection Officer / Privacy Lead</h3>
            <p>
              While Aurygen Technologies is not currently under a legal obligation to appoint a Data Protection Officer (DPO) under UK GDPR, we have designated a Privacy Lead responsible for overseeing our data protection strategy and ensuring compliance with applicable laws.
            </p>
            <div className="contact-info">
              <p><strong>Privacy Lead:</strong> Arslan Waraich</p>
              <p><strong>Email:</strong> arslan@aurygen.com</p>
              <p><strong>Address:</strong> Aurygen Ltd, United Kingdom</p>
            </div>
          </section>

          <section className="privacy-section">
            <h2>Contact Information</h2>
            <p>
              If you have any questions, concerns, or comments regarding this Privacy Policy, please contact us using one of the following methods:
            </p>
            <div className="contact-info">
              <p><strong>Email:</strong> support@aurygen.com</p>
              <p><strong>Postal Address:</strong></p>
              <p>Aurygen Technologies Ltd</p>
              <p>Attention: Legal Department – Privacy Policy Enquiries</p>
              <p>United Kingdom</p>
            </div>
            
            <h3>Jurisdiction & Supervisory Authority</h3>
            <p>
              This Policy shall be governed by and construed in accordance with the laws of England and Wales. The Information Commissioner's Office (ICO) in the United Kingdom shall be the lead supervisory authority for all matters relating to data protection and privacy compliance.
            </p>
          </section>

          <div className="last-updated">
            <p>Last Updated: 8 August 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;