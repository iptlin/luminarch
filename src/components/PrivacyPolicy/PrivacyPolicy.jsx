import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <section className="privacy-policy-page">
      <div className="container">
        <div className="privacy-policy-card">
          <p className="privacy-policy-eyebrow">Privacy Policy</p>
          <h1>Privacy Policy</h1>
          <p className="privacy-policy-meta">Last updated: May 30, 2026 | Applies to: https://luminarch.store</p>

          <div className="privacy-policy-section">
            <h2>Introduction</h2>
            <p>
              This Privacy Policy describes how Luminarch (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              collects, uses, and shares information about you when you use our website at
              https://luminarch.store (the &quot;Service&quot;).
            </p>
            <p>
              By using our Service, you agree to the collection and use of information in accordance
              with this policy. This policy applies to all visitors, users, and others who access or
              use the Service.
            </p>
          </div>

          <div className="privacy-policy-section">
            <h2>Information We Collect</h2>
            <p>We collect several types of information in connection with the Service:</p>
            <ul>
              <li>Information you provide directly: account credentials, usage analytics, billing data, API activity logs, and support tickets.</li>
              <li>Information collected automatically: IP address, browser type, operating system, referring URLs, and device information.</li>
              <li>Information from third-party services: data we may receive from services you connect to our Service.</li>
            </ul>
          </div>

          <div className="privacy-policy-section">
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, operate, and maintain our Service.</li>
              <li>Improve and personalize your experience.</li>
              <li>Understand how you use our Service.</li>
              <li>Communicate with you, including for customer service and marketing purposes.</li>
              <li>Process transactions and send related information.</li>
              <li>Send technical notices, updates, and security alerts.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </div>

          <div className="privacy-policy-section">
            <h2>How We Share Your Information</h2>
            <p>We may share your information in the following circumstances:</p>
            <ul>
              <li>Service providers: third-party vendors who provide services on our behalf, including analytics and payment processors.</li>
              <li>Legal requirements: disclosures required by law or valid legal processes.</li>
              <li>Business transfers: sharing related to a merger, acquisition, or sale of assets.</li>
            </ul>
            <p>We do not sell or share your personal information with third parties for their marketing purposes.</p>
          </div>

          <div className="privacy-policy-section">
            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our Service and to hold certain information.
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p>
              We use cookies for analytics and performance, functional preferences, and marketing where applicable.
              Third-party services we use, such as analytics and payment processors, may also set their own cookies.
            </p>
          </div>

          <div className="privacy-policy-section">
            <h2>Data Retention</h2>
            <p>
              We retain personal information only as long as necessary for the purposes described in this policy.
              Data must not be kept longer than necessary for the specified purpose, and retention periods must be documented and enforced.
            </p>
            <p>When we no longer need to retain your information, we will securely delete or anonymize it.</p>
          </div>

          <div className="privacy-policy-section">
            <h2>Your Rights Under the GDPR</h2>
            <p>If you are located in the European Economic Area, you have the following rights regarding your personal data:</p>
            <ul>
              <li>Right of access: request a copy of the personal data we hold about you.</li>
              <li>Right to rectification: ask us to correct inaccurate or incomplete information.</li>
              <li>Right to erasure: ask us to delete your personal data in certain circumstances.</li>
              <li>Right to restriction of processing: ask us to limit how we use your data.</li>
              <li>Right to data portability: request your data in a machine-readable format.</li>
              <li>Right to object: object to our processing of your data based on legitimate interests.</li>
            </ul>
            <p>To exercise any of these rights, please contact us at contact.luminarch@gmail.com. We will respond within 30 days.</p>
            <p>
              Lawful basis for processing: we process personal data on the basis of consent, contract performance,
              legitimate interests, and legal obligations as applicable.
            </p>
          </div>

          <div className="privacy-policy-section">
            <h2>Children&apos;s Privacy</h2>
            <p>
              Our Service is not directed to children under the age of 13. We do not knowingly collect personal information
              from children under 13. If we become aware that we have collected personal information from a child under 13,
              we will take steps to delete that information promptly.
            </p>
            <p>
              If you are a parent or guardian and believe your child has provided us with personal information,
              please contact us at contact.luminarch@gmail.com.
            </p>
          </div>

          <div className="privacy-policy-section">
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information
              against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access.
            </p>
            <p>
              However, no method of transmission over the internet or method of electronic storage is 100% secure.
              While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </div>

          <div className="privacy-policy-section">
            <h2>Third-Party Links</h2>
            <p>
              Our Service may contain links to third-party websites. We have no control over and assume no responsibility
              for the content, privacy policies, or practices of any third-party sites or services.
              We encourage you to review the privacy policy of every site you visit.
            </p>
          </div>

          <div className="privacy-policy-section">
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>
          </div>

          <div className="privacy-policy-section">
            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul>
              <li>By email: contact.luminarch@gmail.com</li>
              <li>By visiting our website: https://luminarch.store</li>
            </ul>
            <p className="privacy-policy-note">
              Legal Disclaimer: This document was generated using a template generator for informational purposes only.
              It does not constitute legal advice. Please consult with a qualified attorney to ensure this document
              meets your specific legal requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
