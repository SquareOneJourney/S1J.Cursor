import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function DataProtection() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#cfe3df' }}>
      <div className="max-w-4xl mx-auto px-4 py-16">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </button>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Data Protection</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <p className="text-sm text-gray-600">Last updated: January 2025</p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Data Controller</h2>
            <p className="text-gray-700 leading-relaxed">
              SquareOneJourney is the data controller for the personal data we process. We are committed to protecting your personal data and ensuring compliance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Legal Basis for Processing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We process your personal data based on the following legal grounds:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Consent:</strong> When you voluntarily provide information to us</li>
              <li><strong>Contract Performance:</strong> To provide our services to you</li>
              <li><strong>Legitimate Interest:</strong> To improve our services and user experience</li>
              <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Personal Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect and process the following categories of personal data:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Identity data (name, email address)</li>
              <li>Contact data (email address, postal address)</li>
              <li>Technical data (IP address, browser type, device information)</li>
              <li>Usage data (how you use our website and services)</li>
              <li>Marketing data (your preferences for receiving communications)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements. Typically, we retain user data for the duration of your account plus 2 years, unless a longer retention period is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security Measures</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We have implemented appropriate technical and organizational measures to protect your personal data against:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Unauthorized access, use, or disclosure</li>
              <li>Accidental loss or destruction</li>
              <li>Malicious attacks and data breaches</li>
              <li>Inappropriate alteration or processing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Data Protection Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Under data protection laws, you have the following rights:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Right of Access:</strong> Request copies of your personal data</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate data</li>
              <li><strong>Right to Erasure:</strong> Request deletion of your personal data</li>
              <li><strong>Right to Restrict Processing:</strong> Request limitation of data processing</li>
              <li><strong>Right to Data Portability:</strong> Request transfer of your data</li>
              <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              If we transfer your personal data outside of your country of residence, we will ensure that appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Data Breach Notification</h2>
            <p className="text-gray-700 leading-relaxed">
              In the event of a personal data breach that is likely to result in a high risk to your rights and freedoms, we will notify you and the relevant supervisory authority within 72 hours of becoming aware of the breach.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this data protection notice or wish to exercise your rights, please contact us at:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700">Email: privacy@squareonejourney.com</p>
              <p className="text-gray-700">Subject Line: Data Protection Inquiry</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
