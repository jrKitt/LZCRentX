export default function Sidebar() {
  return (
    <>
      {/* Navbar */}
      <div className="flex items-center justify-between mt-9 px-4 py-2">
        {/* Hamburger Button */}

        {/* Profile Icon */}
      </div>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800 shadow-xl">
          <a href="#" className="flex items-center ps-2.5 mb-5">
            <h1 className="text-6xl font-bold text-gray-400">
              L
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                Z
              </span>
              C
            </h1>
          </a>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="/Dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#A1E3F9] active:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 group text-[16px] font-regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.6"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                  />
                </svg>

                <span className="ms-3">ภาพรวม</span>
              </a>
            </li>
            <li>
              <a
                href="/RentalManagement"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 group text-[16px] font-regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.6"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <span className="ms-3">สินค้าให้เช่า</span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 group text-[16px] font-regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.6"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9"
                  />
                </svg>

                <span className="ms-3">การเช่า</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 group text-[16px] font-regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.6"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 9.75h4.875a2.625 2.625 0 0 1 0 5.25H12M8.25 9.75 10.5 7.5M8.25 9.75 10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185Z"
                  />
                </svg>

                <span className="ms-3">การคืนสินค้า</span>
              </a>
            </li>
            
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 group text-[16px] font-regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.6"
                  stroke="currentColor"
                  className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>

                <span className="ms-3">ลูกค้า</span>
              </a>
            </li>
            <li className="relative group">
              <button
              className="flex items-center p-2 w-full text-gray-900 rounded-lg dark:text-white hover:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 group text-[16px] font-regular"
              >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.6"
                stroke="currentColor"
                className="w-8 h-8 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
              >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
                />
              </svg>
              <span className="ms-3">รายงาน</span>
              <svg
                className="w-4 h-4 ml-auto transition-transform transform group-hover:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
                />
              </svg>
              </button>
              <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg group-hover:block">
              <li>
                <a
                href="#"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 text-[14px]"
                >
                ใบสั่งซื้อ
                </a>
              </li>
              <li>
                <a
                href="#"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 text-[14px]"
                >
                ใบเสนอราคา
                </a>
              </li>
              <li>
                <a
                href="#"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 text-[14px]"
                >
                ใบเสร็จรับเงิน
                </a>
              </li>
              <li>
                <a
                href="#"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 text-[14px]"
                >
                ใบส่งสินค้า
                </a>
              </li>
              <li>
                <a
                href="#"
                className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#A1E3F9] hover:text-[#ffffff] dark:hover:bg-gray-700 text-[14px]"
                >
                ใบแจ้งหนี้
                </a>
              </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
