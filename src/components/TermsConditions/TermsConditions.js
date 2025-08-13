import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './TermsConditions.css';

const TermsConditions = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="terms-header">
        <div className={`terms-header-content ${inView ? 'animate' : ''}`} ref={ref}>
          <h1 className="terms-title">Terms & Conditions</h1>
          <p className="terms-subtitle">Please read these terms carefully</p>
        </div>
      </div>
      
      <div className="terms-content">
        <div className="terms-container">
          <section className="terms-section">
            <h2>Acceptance of Terms</h2>
            <p>
              The following agreement sets out your legal obligations when using the Aurygen Ltd, trading as Aurygen Technologies Ltd website, available at https://www.aurygen.com (the "Website"), or any other websites or online platforms operated by Aurygen Technologies Ltd or its subsidiaries. The Website is owned and operated by Aurygen Ltd, trading as Aurygen Technologies Ltd ("Aurygen Technologies", "we", "us", "our") and is made available to you strictly in accordance with the terms described below ("Terms of Use" or "Terms").
            </p>
            <p>
              <strong>PLEASE READ THESE TERMS OF USE CAREFULLY BEFORE ACCESSING OR USING THE WEBSITE OR ANY ASSOCIATED CONTENT OR SERVICES.</strong>
            </p>
            <p>
              By accessing or using the Website, any of its content, or any products or services offered through it, you:
            </p>
            <ul>
              <li>Confirm that you have read, understood, and agree to be bound by these Terms of Use;</li>
              <li>Agree to comply with all applicable UK and international laws, regulations, and standards when using our Website or services; and</li>
              <li>Accept that these Terms form a legally binding agreement between you and Aurygen Ltd trading as Aurygen Technologies Ltd.</li>
            </ul>
            <p>
              If you do not agree to all of these Terms and Conditions, you must not access or use the Website, its content, or any services provided through it. Aurygen Technologies' acceptance of your use is expressly conditional upon your agreement to these Terms, to the exclusion of all other terms.
            </p>
          </section>

          <section className="terms-section">
            <h2>Definitions</h2>
            <p>In this Agreement, the following terms have the meanings set out below:</p>
            <div className="definitions-table">
              <div className="table-header">
                <div className="table-cell"><strong>Term</strong></div>
                <div className="table-cell"><strong>Meaning</strong></div>
              </div>
              <div className="table-row">
                <div className="table-cell"><strong>Agreement</strong></div>
                <div className="table-cell">The legally binding agreement between you and Aurygen Technologies Ltd regarding the use of our Website & setting general expectations for our services, which includes these Terms of Use, our Privacy Policy, and our Cookie Policy.</div>
              </div>
              <div className="table-row">
                <div className="table-cell"><strong>Cookie Policy</strong></div>
                <div className="table-cell">The document that explains what cookies and similar technologies are, the types of cookies we use, and how you can manage them.</div>
              </div>
              <div className="table-row">
                <div className="table-cell"><strong>Privacy Policy</strong></div>
                <div className="table-cell">The document that explains how we collect, use, share, and safeguard your personal data, as well as your rights as a data subject.</div>
              </div>
              <div className="table-row">
                <div className="table-cell"><strong>Website / Site</strong></div>
                <div className="table-cell">The website owned and operated by Aurygen Technologies Ltd, located at www.aurygen.com, as well as any other official domains operated by us or our affiliates.</div>
              </div>
              <div className="table-row">
                <div className="table-cell"><strong>Service</strong></div>
                <div className="table-cell">Any content, product, or service made available by us through our Website, including software development, AI solutions, cybersecurity services, cloud and IT infrastructure, database services, and strategic tech consultancy.</div>
              </div>
              <div className="table-row">
                <div className="table-cell"><strong>Consumer</strong></div>
                <div className="table-cell">Consumer means an individual acting for purposes wholly or mainly outside their trade, business, craft, or profession.</div>
              </div>
            </div>
          </section>

          <section className="terms-section">
            <h2>Modifications to Website or Terms of Use</h2>
            <p>
              Aurygen Technologies Ltd reserves the absolute right, at our sole discretion and without liability to you, to modify, update, suspend, restrict, or amend the Website, these Terms of Use, our Privacy Policy, or our Cookie Policy at any time. Such changes may include, but are not limited to:
            </p>
            <ul>
              <li>Revising or removing content;</li>
              <li>Introducing new features or services;</li>
              <li>Discontinuing or withdrawing any part of the Website;</li>
              <li>Updating policies to reflect changes in our operations, technologies, or service offerings.</li>
            </ul>
            <p>
              If the changes constitute a material modification to these Terms of Use, our Privacy Policy, or our Cookie Policy, we will notify you in advance by posting an announcement prominently on the Website. Non-material changes will take effect immediately upon being published on the Website and without prior notice.
            </p>
          </section>

          <section className="terms-section">
            <h2>Content Ownership and Usage Rights</h2>
            <p>
              All content, materials, and intellectual property displayed on, generated by, or otherwise associated with the website(s) of Aurygen Technologies Ltd are protected by copyright, trademark, and other applicable intellectual property laws in the United Kingdom and internationally. This includes, without limitation:
            </p>
            <ul>
              <li>All text, data, software code, designs, graphics, images, audio/video files, trademarks, service marks, trade names, logos, layouts, user interfaces, "look and feel" elements, colour schemes, icons, animations, diagrams, infographics, and all other visual or functional elements.</li>
              <li>All bespoke software solutions, AI models, algorithms, cybersecurity frameworks, data management processes, strategic consultancy materials, reports, documentation, and training resources created by Aurygen Technologies.</li>
            </ul>
            <p>
              Unless expressly authorised in writing by Aurygen Technologies, no part of the website or any related content may be copied, reproduced, adapted, reverse engineered, translated, modified, republished, uploaded, posted, publicly displayed, transmitted, distributed, or otherwise exploited for commercial or non-commercial purposes.
            </p>
          </section>

          <section className="terms-section">
            <h2>Indemnity</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Aurygen Technologies Ltd, its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from:
            </p>
            <ul>
              <li>Your use of and access to the Website or services;</li>
              <li>Your violation of any term of these Terms of Use;</li>
              <li>Your violation of any third party right, including without limitation any copyright, property, or privacy right;</li>
              <li>Any claim that your use caused damage to a third party.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Warranty Disclaimers</h2>
            <p>
              While Aurygen Technologies Ltd exercises diligent care in compiling, presenting, and maintaining the information, materials, and services available on this Website, we make no guarantee, representation, or warranty, express or implied, regarding the reliability, accuracy, timeliness, performance, completeness, or fitness for a particular purpose of such information or services.
            </p>
            <p>
              The Website, its content, and any associated services are provided strictly on an "as is" and "as available" basis for general informational purposes only, without warranty of any kind, whether express or implied.
            </p>
            <p>
              Aurygen Technologies Ltd does not warrant or guarantee that:
            </p>
            <ul>
              <li>The Website, its content, or any services provided will be uninterrupted, error-free, or secure;</li>
              <li>Any defects or irregularities will be corrected;</li>
              <li>The Website or its server(s) will be free from viruses, malware, or other harmful elements;</li>
              <li>The information, tools, software, or advice obtained via the Website will meet your requirements or expectations.</li>
            </ul>
          </section>

          <section className="terms-section">
            <h2>Third-Party Websites, Linking, and Framing</h2>
            <p>
              Our Website may contain links to third-party websites or services that are not owned or controlled by Aurygen Technologies Ltd. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
            </p>
            <p>
              You acknowledge and agree that Aurygen Technologies Ltd shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such websites or services.
            </p>
          </section>

          <section className="terms-section">
            <h2>Name, Trademark, and Logo</h2>
            <p>
              The Aurygen Technologies name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Aurygen Technologies Ltd or its affiliates. You must not use such marks without our prior written permission.
            </p>
            <p>
              Any permitted use must comply with our brand guidelines and must not damage, dilute, or tarnish our reputation or goodwill. We reserve all legal rights to enforce our intellectual property, including seeking injunctive relief, damages, and any other remedies available under UK and international law.
            </p>
          </section>

          <section className="terms-section">
            <h2>Security</h2>
            <p>
              Aurygen Technologies Ltd implements appropriate technical and organisational measures to protect the security of your personal data and our systems. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorised use of your account or any other breach of security.
            </p>
          </section>

          <section className="terms-section">
            <h2>Termination</h2>
            <p>
              Aurygen Technologies Ltd reserves the right, at our sole and absolute discretion, to restrict, suspend, or terminate your access to all or any part of our Website, systems, or services, and/or to terminate this Agreement, without prior notice, if we reasonably determine that you have:
            </p>
            <ul>
              <li>Breached or violated these Terms of Use, our Privacy Policy, or our Cookie Policy;</li>
              <li>Infringed upon the intellectual property rights, privacy rights, or other legal rights of Aurygen Technologies Ltd or any third party;</li>
              <li>Engaged in conduct that we, acting reasonably and in good faith, deem unlawful, fraudulent, abusive, harmful, threatening, defamatory, or otherwise inappropriate;</li>
              <li>Attempted to interfere with, compromise, or disrupt the security, functionality, or integrity of our Website, systems, services, or infrastructure.</li>
            </ul>
            <p>
              Any provisions of these Terms of Use which by their nature should survive termination shall continue in full force and effect.
            </p>
          </section>

          <section className="terms-section">
            <h2>Severability and Entire Agreement</h2>
            <p>
              If any provision of this Agreement is found by a court of competent jurisdiction to be invalid, unlawful, or unenforceable, such provision shall be deemed severed from the Agreement and the remaining provisions shall remain in full force and effect.
            </p>
            <p>
              This Agreement, together with our Privacy Policy, Cookie Policy, and any other legal notices or agreements expressly incorporated by reference, constitutes the entire agreement between you and Aurygen Technologies Ltd regarding your use of our Website and related services.
            </p>
          </section>

          <section className="terms-section">
            <h2>Applicable Law and Dispute Resolution</h2>
            <p>
              This Agreement, and any non-contractual obligations arising out of or in connection with it, shall be governed by and construed in accordance with the laws of England and Wales, without regard to any conflict of law principles.
            </p>
            <p>
              The parties shall use their best efforts to resolve any dispute, controversy, or claim arising out of or relating to this Agreement amicably and in good faith through negotiations.
            </p>
            <p>
              To the fullest extent permitted by applicable law, you agree that any dispute or claim will be resolved solely on an individual basis, and you waive any right to bring or participate in a class, collective, or representative action against Aurygen Technologies Ltd.
            </p>
          </section>

          <section className="terms-section">
            <h2>Miscellaneous</h2>
            <p>
              These Terms of Use, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and Aurygen Technologies Ltd in relation to the subject matter herein and supersede all prior or contemporaneous agreements, communications, and understandings, whether written or oral.
            </p>
            <p>
              No failure or delay by Aurygen Technologies Ltd in exercising any right, power, or privilege under these Terms shall operate as a waiver of such right, power, or privilege.
            </p>
            <p>
              These Terms are drafted and interpreted exclusively in the English language. If these Terms are translated into another language, the English version shall prevail in the event of any inconsistency or dispute.
            </p>
          </section>

          <section className="terms-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms of Use, our Website, or require assistance regarding any matter connected to our Website or services, please contact us at:
            </p>
            <div className="contact-info">
              <p>Email: support@aurygen.com</p>
            </div>
          </section>

          <div className="last-updated">
            <p>Last Updated: 9 August 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;