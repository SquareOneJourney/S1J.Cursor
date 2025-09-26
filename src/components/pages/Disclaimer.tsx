import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function Disclaimer() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Disclaimer</h1>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <p className="text-sm text-gray-600">Last updated: January 2025</p>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. General Information</h2>
            <p className="text-gray-700 leading-relaxed">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, SquareOneJourney excludes all representations, warranties, conditions and terms relating to our website and the use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Educational Content</h2>
            <p className="text-gray-700 leading-relaxed">
              The content provided on SquareOneJourney is for educational and informational purposes only. It is not intended as professional business, legal, financial, or tax advice. You should consult with appropriate professionals before making any business decisions based on the information provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. No Guarantees</h2>
            <p className="text-gray-700 leading-relaxed">
              We make no guarantees about the success of any business venture, the accuracy of AI tools, or the outcomes of following our guidance. Business success depends on many factors beyond our control, including market conditions, execution, and individual circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Content</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites, tools, or services. We are not responsible for the content, privacy policies, or practices of these third parties. Your use of third-party services is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. AI Tools and Technology</h2>
            <p className="text-gray-700 leading-relaxed">
              Information about AI tools and technology is based on our understanding at the time of publication. AI technology evolves rapidly, and features, pricing, and availability may change. We recommend verifying current information directly with tool providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              In no event shall SquareOneJourney, its officers, directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Investment and Financial Advice</h2>
            <p className="text-gray-700 leading-relaxed">
              Nothing on this website constitutes investment, financial, or tax advice. Any financial information provided is for educational purposes only. Always consult with qualified financial advisors before making investment decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. User Responsibility</h2>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
              <li>Verifying the accuracy of any information before acting on it</li>
              <li>Conducting your own research and due diligence</li>
              <li>Complying with all applicable laws and regulations</li>
              <li>Seeking professional advice when appropriate</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Content</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify, update, or remove content at any time without notice. We are not obligated to update information to reflect changes in the market or technology landscape.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this disclaimer, please contact us at legal@squareonejourney.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
