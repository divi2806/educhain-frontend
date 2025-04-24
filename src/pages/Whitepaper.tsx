import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Whitepaper: React.FC = () => {
  React.useEffect(() => {
    document.title = 'Whitepaper - EduChain';
  }, []);

  return (
    <div className="pt-32 pb-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              EduChain: A Decentralized Credential Verification Protocol Built on Solana
            </span>
          </h1>
          
          <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
          <p className="text-gray-300 mb-8">
            EduChain is an open-source protocol for issuing, storing, and verifying educational credentials 
            on the Solana blockchain. It aims to solve the global issue of credential fraud and streamline 
            access to verified educational records for individuals, institutions, and employers. EduChain 
            promotes equitable access to verifiable learning and builds a permissionless, community-powered 
            credentialing infrastructure that will unlock new levels of transparency, trust, and opportunity 
            in education.
          </p>

          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="text-gray-300 mb-8">
            Credential fraud and inefficiency in academic verification systems disproportionately affect 
            millions of learners, especially in developing countries. Existing centralized verification 
            systems are expensive, opaque, and often inaccessible. EduChain introduces a decentralized, 
            cost-effective, and instantly verifiable credentialing system using Solana's high-speed, 
            low-cost infrastructure.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Vision</h2>
          <p className="text-gray-300 mb-8 italic">
            "To democratize credentialing through decentralization, ensuring every learner has access to 
            tamper-proof, globally verifiable academic achievements."
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Why Solana?</h2>
          <ul className="list-disc list-inside text-gray-300 mb-8">
            <li className="mb-2">
              <span className="font-semibold">Scalability:</span> Solana can handle thousands of transactions 
              per second, allowing EduChain to issue credentials in real-time
            </li>
            <li className="mb-2">
              <span className="font-semibold">Low Fees:</span> Near-zero gas fees allow micro-credentialing 
              without financial friction
            </li>
            <li>
              <span className="font-semibold">Ecosystem Synergy:</span> The vibrant developer community and tools 
              like Solana Pay, Metaplex, and SPL Token integration enable easy integrations and tooling expansion
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">4. Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5">
              <h3 className="text-xl font-semibold mb-3">Universities & Schools</h3>
              <p className="text-gray-300">Issue degrees, diplomas, and certificates.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5">
              <h3 className="text-xl font-semibold mb-3">EdTech Platforms</h3>
              <p className="text-gray-300">Issue skill-based micro-credentials.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5">
              <h3 className="text-xl font-semibold mb-3">Employers & Recruiters</h3>
              <p className="text-gray-300">Verify applicant credentials instantly.</p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 rounded-xl p-5">
              <h3 className="text-xl font-semibold mb-3">Learners</h3>
              <p className="text-gray-300">Own and showcase achievements through decentralized IDs (DIDs).</p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">5. Technical Architecture</h2>
          
          <h3 className="text-xl font-semibold mb-3">5.1 Credential Issuance</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li className="mb-2">Institutions mint credentials as non-transferable SPL tokens</li>
            <li>Tied to user DIDs via Solana Name Service or custom EduChain wallets</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">5.2 Storage</h3>
          <ul className="list-disc list-inside text-gray-300 mb-6">
            <li className="mb-2">Credentials metadata stored on Arweave/IPFS</li>
            <li>Smart contracts track credential metadata hashes and timestamps</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">5.3 Verification</h3>
          <ul className="list-disc list-inside text-gray-300 mb-8">
            <li className="mb-2">Verifiers input learner's wallet address or DID</li>
            <li>EduChain explorer fetches on-chain record and associated metadata for instant validation</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">6. Token Model</h2>
          <p className="text-gray-300 mb-8">
            For now, EduChain does not issue a token to align with public good values and Solana grant guidelines. 
            Optional tokenization for governance and staking could be introduced post-MVP after community input.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Milestones</h2>
          <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left px-4 py-2 text-gray-200">Phase</th>
                    <th className="text-left px-4 py-2 text-gray-200">Timeline</th>
                    <th className="text-left px-4 py-2 text-gray-200">Objective</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-t border-gray-700 px-4 py-2 text-gray-300">M1</td>
                    <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Month 1</td>
                    <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Smart contract MVP + SDKs</td>
                  </tr>
                  <tr>
                    <td className="border-t border-gray-700 px-4 py-2 text-gray-300">M2</td>
                    <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Month 2</td>
                    <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Explorer + Dev Docs + Mainnet</td>
                  </tr>
                  <tr>
                    <td className="border-t border-gray-700 px-4 py-2 text-gray-300">M3</td>
                    <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Month 3–4</td>
                    <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Ecosystem adoption + Dev Workshops</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4">8. Open Source & Community</h2>
          <p className="text-gray-300 mb-4">EduChain will release:</p>
          <ul className="list-disc list-inside text-gray-300 mb-8">
            <li className="mb-2">Smart contracts under MIT license on GitHub</li>
            <li className="mb-2">SDKs and verification tools for public use</li>
            <li>Community governance plans post-launch</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">9. Competitor Comparison</h2>
          <div className="overflow-x-auto bg-gray-800 bg-opacity-50 rounded-xl p-6 mb-8">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left px-4 py-2 text-gray-200">Feature</th>
                  <th className="text-center px-4 py-2 text-gray-200">EduChain</th>
                  <th className="text-center px-4 py-2 text-gray-200">Ceramic</th>
                  <th className="text-center px-4 py-2 text-gray-200">Gitcoin Passport</th>
                  <th className="text-center px-4 py-2 text-gray-200">LearnCard</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Solana-native</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">❌</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">❌</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">❌</td>
                </tr>
                <tr>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Built for education</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">❌</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">❌</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Instant verification</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                </tr>
                <tr>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Low fees</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">❌</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">❌</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">❌</td>
                </tr>
                <tr>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300">Open source SDKs</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                  <td className="border-t border-gray-700 px-4 py-2 text-gray-300 text-center">✅</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mb-4">10. Public Good Commitment</h2>
          <p className="text-gray-300 mb-4">EduChain will:</p>
          <ul className="list-disc list-inside text-gray-300 mb-8">
            <li className="mb-2">Always offer free credential issuing tools to educational NGOs and public universities</li>
            <li className="mb-2">Host open-access developer workshops</li>
            <li>Maintain 100% open-source smart contracts and SDKs</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">11. Team</h2>
          <p className="text-gray-300 mb-8">
            A multidisciplinary team of blockchain developers, educators, and open-source contributors 
            passionate about accessibility and equity in education. Backgrounds include Solana dev ecosystem, 
            Web3 hackathons, and educational NGOs.
          </p>

          <h2 className="text-2xl font-semibold mb-4">12. Future Roadmap (Post-grant)</h2>
          <ul className="list-disc list-inside text-gray-300 mb-8">
            <li className="mb-2">Cross-chain verification layer</li>
            <li className="mb-2">Mobile wallet for learners</li>
            <li className="mb-2">Reputation scoring model for institutions</li>
            <li>Plug-and-play plugins for LMS platforms (e.g., Moodle, Canvas)</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">13. Conclusion</h2>
          <p className="text-gray-300 mb-8">
            EduChain is not just a protocol; it's a movement toward decentralized education empowerment. 
            With Solana's infrastructure, the project will enable an open future where credentials are 
            owned by learners and trusted globally.
          </p>

          <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
            <p className="text-gray-300 mb-6">
              Join us in building the future of decentralized education credentials. 
              Whether you're a developer, institution, or potential user, there are 
              many ways to contribute to EduChain's mission.
            </p>
            <ScrollLink 
              to="waitlist" 
              smooth={true} 
              duration={500} 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-white font-medium hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer"
            >
              Join the Waitlist
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitepaper;