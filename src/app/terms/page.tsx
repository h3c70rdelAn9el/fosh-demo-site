import React from 'react';

export default function TermsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 py-8 px-4">
      <div className="mx-auto my-8 max-w-2xl rounded-xl bg-gray-800 p-8 text-white shadow-md">
        <h1 className="mb-2 text-center text-3xl font-bold">Terms &amp; Conditions</h1>
        <p className="mb-6 text-center text-sm text-gray-500">Effective Date: 06-24-2025</p>
        <div className="prose prose-orange max-w-none text-gray-200">
          <p>
            Welcome to FOSH. By accessing or using our application and related services, you agree
            to be bound by the following Terms and Conditions. Please read them carefully. If you do
            not agree, you must not use FOSH.
          </p>
          <ol className="list-decimal pl-6">
            <li>
              <strong>Overview</strong> <br />
              FOSH is a platform for discovering, sharing, and promoting live events. We provide
              tools for attendees, artists, and venue representatives to interact with event
              listings and related content. These Terms apply to all users.
            </li>
            <li>
              <strong>User Accounts</strong>
              <ul className="list-disc pl-6">
                <li>To use certain features, you must create an account.</li>
                <li>
                  You are responsible for maintaining the confidentiality of your login credentials.
                </li>
                <li>
                  You agree to provide accurate and complete information and to update it as needed.
                </li>
              </ul>
            </li>
            <li>
              <strong>Delete Account</strong> <br />
              From your 'My Profile' tap Edit Profile. At the bottom of the Edit Profile screen, tap
              Delete Account. Enter your account password and tap Delete Account. Your account is
              permanently deleted. If you are unable to locate your password, email your delete
              account request to:
              <a
                href="mailto:DeleteMe@FOSH.Live"
                className="text-orange-600 underline">
                DeleteMe@FOSH.Live
              </a>
            </li>
            <li>
              <strong>User-Submitted Content</strong>
              <ul className="list-disc pl-6">
                <li>Users may submit event information, media, and other content.</li>
                <li>
                  By submitting content, you grant FOSH a non-exclusive, royalty-free license to
                  use, reproduce, and display that content within the platform and on associated
                  promotional materials.
                </li>
                <li>You represent that you have the rights to all content you upload.</li>
              </ul>
            </li>
            <li>
              <strong>Image Takedown Policy</strong> <br />
              FOSH allows users—including venue operators, act members, and attendees—to voluntarily
              submit photographic images. If you believe an image has been submitted without your
              consent or infringes your rights, contact us at
              <a
                href="mailto:contact@foshapp.com"
                className="text-orange-600 underline">
                contact@foshapp.com
              </a>
              with the subject line “Image Takedown Request” and include:
              <ul className="list-disc pl-6">
                <li>A description of the image</li>
                <li>A link or screenshot showing its location</li>
                <li>Your relationship to the content</li>
                <li>A statement confirming your authority to make the request</li>
              </ul>
              We review all takedown requests promptly and may remove content at our discretion.
            </li>
            <li>
              <strong>Acceptable Use</strong>
              <ul className="list-disc pl-6">
                <li>Use FOSH for illegal purposes</li>
                <li>Harass, threaten, impersonate, or intimidate others</li>
                <li>Upload harmful or unauthorized content</li>
                <li>Interfere with the operation of the service</li>
              </ul>
              FOSH reserves the right to suspend or terminate accounts for violations.
            </li>
            <li>
              <strong>Intellectual Property</strong> <br />
              All platform content, excluding user-submitted material, is the property of FOSH, LLC.
              You may not copy, modify, distribute, or use any content without permission.
            </li>
            <li>
              <strong>Event Information Accuracy</strong> <br />
              FOSH does not guarantee the accuracy of event listings. Users are responsible for
              verifying details before attending an event.
            </li>
            <li>
              <strong>Third-Party Links and Services</strong> <br />
              FOSH may link to or integrate with third-party platforms. We are not responsible for
              their content or practices.
            </li>
            <li>
              <strong>Limitation of Liability</strong> <br />
              FOSH is provided “as is” without warranties. We are not liable for damages related to
              your use of the service.
            </li>
            <li>
              <strong>Modifications to Terms</strong> <br />
              We may update these Terms from time to time. Continued use of FOSH after changes means
              you accept the updated Terms.
            </li>
            <li>
              <strong>Governing Law</strong> <br />
              These Terms are governed by the laws of the Commonwealth of Pennsylvania, without
              regard to conflict of law principles.
            </li>
            <li>
              <strong>Contact</strong> <br />
              For questions or concerns, contact us at
              <a
                href="mailto:contact@foshapp.com"
                className="text-orange-600 underline">
                contact@foshapp.com
              </a>
              .
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
