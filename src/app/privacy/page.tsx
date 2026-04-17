export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 py-8 px-4 ">
      <div className="mx-auto my-8 max-w-2xl rounded-xl bg-gray-800 p-8 text-black shadow-md  dark:text-gray-100">
        <h1 className="mb-2 text-center text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-6 text-center text-sm text-gray-500 dark:text-gray-400">
          Effective Date: 06-24-2025
        </p>
        <div className="prose prose-orange max-w-none  text=white">
          <p>
            FOSH respects your privacy and is committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your data when you use
            our application or related services.
          </p>
          <ol className="list-decimal pl-6">
            <li>
              <strong>Information We Collect</strong> <br />
              We may collect the following types of information:
              <ul className="list-disc pl-6">
                <li>
                  <strong>Personal Information:</strong> Name, email address, username, location,
                  and any other information you provide during account creation or profile updates.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you use FOSH, including event
                  views, interactions, and preferences.
                </li>
                <li>
                  <strong>Device Data:</strong> IP address, device type, operating system, and
                  browser type.
                </li>
                <li>
                  <strong>Media Submissions:</strong> Photos, videos, or audio submitted by users in
                  the context of event or act promotion.
                </li>
              </ul>
            </li>
            <li>
              <strong>How We Use Your Information</strong> <br />
              We use your information to:
              <ul className="list-disc pl-6">
                <li>Provide and improve the FOSH platform</li>
                <li>Customize your experience and suggest relevant content</li>
                <li>
                  Communicate with you about account activity, updates, and promotional material (if
                  opted in)
                </li>
                <li>Monitor and ensure platform security</li>
              </ul>
            </li>
            <li>
              <strong>Sharing of Information</strong> <br />
              We do not sell your data. We may share your information with:
              <ul className="list-disc pl-6">
                <li>Service providers that help us operate the platform</li>
                <li>Legal authorities if required by law</li>
                <li>
                  Other users, when you choose to share content publicly (e.g., profile info, media
                  submissions)
                </li>
              </ul>
            </li>
            <li>
              <strong>Cookies and Tracking</strong> <br />
              FOSH uses cookies and analytics tools to understand usage patterns and improve user
              experience. You can control cookie preferences through your browser settings.
            </li>
            <li>
              <strong>Media Submissions and Takedown Requests</strong> <br />
              Some images or media displayed on FOSH are user-submitted and may include venues,
              acts, or individuals. If you believe your image or intellectual property has been used
              without permission, please refer to our Terms & Conditions for takedown request
              procedures.
            </li>
            <li>
              <strong>Your Choices</strong> <br />
              You can:
              <ul className="list-disc pl-6">
                <li>Update or delete your profile</li>
                <li>Opt out of promotional emails</li>
                <li>
                  Request that we delete your data by contacting
                  <a
                    href="mailto:contact@fosh.live"
                    className="text-orange-600 underline">
                    contact@fosh.live
                  </a>
                  .
                </li>
              </ul>
            </li>
            <li>
              <strong>Data Security</strong> <br />
              We implement reasonable safeguards to protect your information. However, no method of
              transmission or storage is 100% secure.
            </li>
            <li>
              <strong>Children’s Privacy</strong> <br />
              FOSH is not intended for users under the age of 13. We do not knowingly collect data
              from children.
            </li>
            <li>
              <strong>Changes to This Policy</strong> <br />
              We may update this Privacy Policy periodically. Continued use of the platform after
              updates means you accept the revised policy.
            </li>
            <li>
              <strong>Contact Us</strong> <br />
              If you have any questions or concerns about this Privacy Policy, contact us at
              <a
                href="mailto:contact@fosh.live"
                className="text-orange-600 underline">
                contact@fosh.live
              </a>
              .
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}
