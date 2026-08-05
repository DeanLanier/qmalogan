import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from './qma-logo.png'; // Adjust the path to your logo

export function NavBar() {
  return (
    <Disclosure as="nav" className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-18 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <Disclosure.Button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 dark:focus:ring-white transition">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </Disclosure.Button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start content-center">
            <div className="flex shrink-0 items-center content-center sm:justify-center">
              <img
                alt="Your Company"
                src={logo}
                className="w-25 pt-8 z-1"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block content-center">
              <div className="flex space-x-4">
                <Link to="/dashboard" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  Dashboard
                </Link>
                <Link to="/resources" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  Resources
                </Link>
                <Link to="/events-schedule" className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                  Events & Schedule
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link to="/dashboard" className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            Dashboard
          </Link>
          <Link to="/resources" className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            Resources
          </Link>
          <Link to="/events-schedule" className="block px-3 py-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
            Events & Schedule
          </Link>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}