export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">STACK OVERFLOW</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/questions" className="hover:text-white">Questions</a></li>
              <li><a href="/jobs" className="hover:text-white">Jobs</a></li>
              <li><a href="/developer-survey" className="hover:text-white">Developer Survey</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">PRODUCTS</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/teams" className="hover:text-white">Teams</a></li>
              <li><a href="/advertising" className="hover:text-white">Advertising</a></li>
              <li><a href="/collectives" className="hover:text-white">Collectives</a></li>
              <li><a href="/talent" className="hover:text-white">Talent</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-white">About</a></li>
              <li><a href="/press" className="hover:text-white">Press</a></li>
              <li><a href="/work-here" className="hover:text-white">Work Here</a></li>
              <li><a href="/legal" className="hover:text-white">Legal</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
              <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
              <li><a href="/cookie-settings" className="hover:text-white">Cookie Settings</a></li>
              <li><a href="/cookie-policy" className="hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Stack Exchange Network */}
          <div>
            <h3 className="text-white font-semibold mb-4">STACK EXCHANGE NETWORK</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/technology" className="hover:text-white">Technology</a></li>
              <li><a href="/culture-recreation" className="hover:text-white">Culture & recreation</a></li>
              <li><a href="/life-arts" className="hover:text-white">Life & arts</a></li>
              <li><a href="/science" className="hover:text-white">Science</a></li>
              <li><a href="/professional" className="hover:text-white">Professional</a></li>
              <li><a href="/business" className="hover:text-white">Business</a></li>
              <li className="pt-2">
                <a href="/sites" className="text-blue-400 hover:text-blue-300 text-xs">
                  API
                </a>
              </li>
              <li>
                <a href="/data" className="text-blue-400 hover:text-blue-300 text-xs">
                  Data
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <p className="text-xs text-gray-400 mb-4">
              Site design / logo © 2024 Stack Exchange Inc;<br/>
              user contributions licensed under <a href="#" className="text-blue-400 hover:text-blue-300">CC BY-SA</a>
            </p>
            <p className="text-xs text-gray-500">
              rev 2024.1.19.6570
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}