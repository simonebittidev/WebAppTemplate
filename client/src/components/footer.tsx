// components/Footer.tsx
export default function Footer() {
    return (
        
      <footer className="bg-white">
        <div className="mx-auto px-6 py-12 lg:px-8">
          <div className="xl:grid xl:grid-cols-6 mx-5  border-t border-b border-gray-200 py-10 px-10">
            <div className="space-y-6 xl:col-span-2 mt-10">
              <div className="text-3xl font-bold">Your App</div>
              <p className="text-gray-500 text-sm">
                Making the world a better place through constructing elegant hierarchies.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-red-500 hover:text-red-600">
                    <span className="sr-only"></span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                </a>

                <a href="#" className="text-yellow-500 hover:text-yellow-600">
                    <span className="sr-only"></span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                </a>

                <a href="#" className="text-blue-500 hover:text-blue-600">
                    <span className="sr-only"></span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                </a>
              </div>
            </div>
  
            <div className="mt-12 grid grid-cols-1 gap-8 xl:col-span-4 text-center">
              <div className="md:grid md:grid-cols-4 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4 text-sm text-gray-500">
                    <li><a href="#">Marketing</a></li>
                    <li><a href="#">Analytics</a></li>
                    <li><a href="#">Automation</a></li>
                    <li><a href="#">Commerce</a></li>
                    <li><a href="#">Insights</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Support</h3>
                  <ul role="list" className="mt-4 space-y-4 text-sm text-gray-500">
                    <li><a href="#">Submit ticket</a></li>
                    <li><a href="#">Documentation</a></li>
                    <li><a href="#">Guides</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Company</h3>
                  <ul role="list" className="mt-4 space-y-4 text-sm text-gray-500">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Press</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
                  <ul role="list" className="mt-4 space-y-4 text-sm text-gray-500">
                    <li><a href="#">Terms of service</a></li>
                    <li><a href="#">Privacy policy</a></li>
                    <li><a href="#">License</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  
          <div className=" mt-5 pt-8">
            <p className="text-sm text-gray-400 text-center">
              &copy; 2024 Your Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  