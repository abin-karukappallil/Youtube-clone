import { Search, Menu, Mic, Bell, User, Home, Compass, Clock, ThumbsUp, ChevronDown, PlaySquare } from "lucide-react"
export default function YouTubeHomepage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 flex items-center justify-between p-4 bg-background border-b">
        <div className="flex items-center gap-4">
          <button className="rounded-full">
            <Menu className="h-5 w-5" />
          </button>
          <a href="/" className="flex items-center gap-1">
            <svg viewBox="0 0 90 20" className="h-5">
              <path
                d="M27.9727 3.12324C27.6435 1.89323 26.6768 0.926623 25.4468 0.597366C23.2197 2.24288e-07 14.285 0 14.285 0C14.285 0 5.35042 2.24288e-07 3.12323 0.597366C1.89323 0.926623 0.926623 1.89323 0.597366 3.12324C2.24288e-07 5.35042 0 10 0 10C0 10 2.24288e-07 14.6496 0.597366 16.8768C0.926623 18.1068 1.89323 19.0734 3.12323 19.4026C5.35042 20 14.285 20 14.285 20C14.285 20 23.2197 20 25.4468 19.4026C26.6768 19.0734 27.6435 18.1068 27.9727 16.8768C28.5701 14.6496 28.5701 10 28.5701 10C28.5701 10 28.5677 5.35042 27.9727 3.12324Z"
                fill="#FF0000"
              />
              <path d="M11.4253 14.2854L18.8477 10.0004L11.4253 5.71533V14.2854Z" fill="white" />
              <path
                d="M34.6024 13.0036L31.3945 1.41846H34.1932L35.3174 6.6701C35.6043 7.96361 35.8136 9.06662 35.95 9.97913H36.0323C36.1264 9.32532 36.3381 8.22937 36.665 6.68892L37.8291 1.41846H40.6278L37.3799 13.0036V18.561H34.6001V13.0036H34.6024Z"
                fill="black"
              />
              <path
                d="M41.4697 18.1937C40.9053 17.8127 40.5031 17.22 40.2632 16.4157C40.0257 15.6114 39.9058 14.5437 39.9058 13.2078V11.3898C39.9058 10.0422 40.0422 8.95805 40.315 8.14196C40.5878 7.32588 41.0135 6.72851 41.592 6.35457C42.1706 5.98063 42.9302 5.79248 43.871 5.79248C44.7976 5.79248 45.5384 5.98298 46.0981 6.36398C46.6555 6.74497 47.0647 7.34234 47.3234 8.15137C47.5821 8.96275 47.7115 10.0422 47.7115 11.3898V13.2078C47.7115 14.5437 47.5845 15.6161 47.3329 16.4251C47.0812 17.2365 46.672 17.8292 46.1075 18.2031C45.5431 18.5771 44.7764 18.7652 43.8098 18.7652C42.8126 18.7675 42.0342 18.5747 41.4697 18.1937ZM44.6353 16.2323C44.7905 15.8231 44.8705 15.1575 44.8705 14.2309V10.3292C44.8705 9.43077 44.7929 8.77225 44.6353 8.35833C44.4777 7.94206 44.2026 7.7351 43.8074 7.7351C43.4265 7.7351 43.156 7.94206 43.0008 8.35833C42.8432 8.77461 42.7656 9.43077 42.7656 10.3292V14.2309C42.7656 15.1575 42.8408 15.8254 42.9914 16.2323C43.1419 16.6415 43.4123 16.8461 43.8074 16.8461C44.2026 16.8461 44.4777 16.6415 44.6353 16.2323Z"
                fill="black"
              />
              <path
                d="M56.8154 18.5634H54.6094L54.3648 17.03H54.3037C53.7039 18.1871 52.8055 18.7656 51.6061 18.7656C50.7759 18.7656 50.1621 18.4928 49.767 17.9496C49.3719 17.4039 49.1743 16.5526 49.1743 15.3955V6.03751H51.9942V15.2308C51.9942 15.7906 52.0553 16.188 52.1776 16.4256C52.2999 16.6631 52.5045 16.783 52.7914 16.783C53.036 16.783 53.2712 16.7078 53.497 16.5573C53.7228 16.4067 53.8874 16.2162 53.9979 15.9858V6.03516H56.8154V18.5634Z"
                fill="black"
              />
              <path
                d="M64.4755 3.68758H61.6768V18.5629H58.9181V3.68758H56.1194V1.42041H64.4755V3.68758Z"
                fill="black"
              />
              <path
                d="M71.2768 18.5634H69.0708L68.8262 17.03H68.7651C68.1654 18.1871 67.267 18.7656 66.0675 18.7656C65.2373 18.7656 64.6235 18.4928 64.2284 17.9496C63.8333 17.4039 63.6357 16.5526 63.6357 15.3955V6.03751H66.4556V15.2308C66.4556 15.7906 66.5167 16.188 66.639 16.4256C66.7613 16.6631 66.9659 16.783 67.2529 16.783C67.4974 16.783 67.7326 16.7078 67.9584 16.5573C68.1842 16.4067 68.3488 16.2162 68.4593 15.9858V6.03516H71.2768V18.5634Z"
                fill="black"
              />
              <path
                d="M80.609 8.0387C80.4373 7.24849 80.1621 6.67699 79.7812 6.32186C79.4002 5.96674 78.8757 5.79035 78.2078 5.79035C77.6904 5.79035 77.2059 5.93616 76.7567 6.23014C76.3075 6.52412 75.9594 6.90747 75.7148 7.38489H75.6937V0.785645H72.9773V18.5608H75.3056L75.5925 17.3755H75.6537C75.8724 17.7988 76.1993 18.1304 76.6344 18.3774C77.0695 18.622 77.554 18.7443 78.0855 18.7443C79.038 18.7443 79.7412 18.3045 80.1904 17.4272C80.6396 16.5476 80.8653 15.1765 80.8653 13.3092V11.3266C80.8653 9.92722 80.7783 8.82892 80.609 8.0387ZM78.0243 13.1492C78.0243 14.0617 77.9867 14.7767 77.9114 15.2941C77.8362 15.8115 77.7115 16.1808 77.5328 16.3971C77.3564 16.6158 77.1165 16.724 76.8178 16.724C76.585 16.724 76.371 16.6699 76.1734 16.5594C75.9759 16.4512 75.816 16.2866 75.6937 16.0702V8.96062C75.7877 8.6196 75.9524 8.34209 76.1852 8.12337C76.4157 7.90465 76.6697 7.79646 76.9401 7.79646C77.2271 7.79646 77.4481 7.90935 77.6034 8.13278C77.7609 8.35855 77.8691 8.73485 77.9303 9.26636C77.9914 9.79787 78.022 10.5528 78.022 11.5335V13.1492H78.0243Z"
                fill="black"
              />
              <path
                d="M84.8657 13.8712C84.8657 14.6755 84.8892 15.2776 84.9363 15.6798C84.9833 16.0819 85.0821 16.3736 85.2326 16.5594C85.3831 16.7428 85.6136 16.8345 85.9264 16.8345C86.3474 16.8345 86.639 16.6699 86.8022 16.343C86.9654 16.0161 87.0821 15.4705 87.1391 14.7085L89.9156 14.8519C89.9727 14.9601 90 15.1106 90 15.3011C90 16.4582 89.6209 17.3237 88.8628 17.8952C88.1046 18.4667 87.0936 18.7536 85.8299 18.7536C84.3201 18.7536 83.2097 18.3185 82.4003 17.446C81.5909 16.5735 81.1864 15.2259 81.1864 13.4008V11.2136C81.1864 9.33452 81.5932 7.96105 82.4072 7.09558C83.2209 6.2301 84.3297 5.79736 85.7366 5.79736C86.6934 5.79736 87.4902 5.97375 88.1265 6.32888C88.7629 6.68188 89.2355 7.20533 89.5428 7.89653C89.8502 8.58773 90.0025 9.43937 90 10.4556V12.4603H84.8657V13.8712ZM85.2232 7.96811C85.0797 8.14449 84.9857 8.43377 84.9363 8.83593C84.8892 9.2381 84.8657 9.84722 84.8657 10.6657V10.9719H87.2232V10.6657C87.2232 9.86133 87.1944 9.25221 87.1391 8.83593C87.0839 8.41966 86.9841 8.12803 86.8363 7.95635C86.6885 7.78702 86.4719 7.7 86.1862 7.7C85.9068 7.70235 85.5643 7.79172 85.2232 7.96811Z"
                fill="black"
              />
            </svg>
          </a>
        </div>

        <div className="flex-1 max-w-xl mx-4">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="pl-4 pr-10 py-1.5 rounded-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="rounded-full">
            <Mic className="h-5 w-5" />
          </button>
          <button className="rounded-full">
            <Bell className="h-5 w-5" />
          </button>
          <button className="rounded-full">
            <User className="h-5 w-5" />
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="w-16 md:w-56 shrink-0 bg-background border-r h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
          <div className="p-2">
            <nav className="space-y-1">
              <a
                href="#"
                className="flex items-center gap-4 px-3 py-2 rounded-lg bg-gray-100 text-black font-medium"
              >
                <Home className="h-5 w-5" />
                <span className="hidden md:inline">Home</span>
              </a>
              <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
                <Compass className="h-5 w-5" />
                <span className="hidden md:inline">Explore</span>
              </a>
              <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
                <PlaySquare className="h-5 w-5" />
                <span className="hidden md:inline">Subscriptions</span>
              </a>
              <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
                <Clock className="h-5 w-5" />
                <span className="hidden md:inline">History</span>
              </a>
              <a href="#" className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-gray-100">
                <ThumbsUp className="h-5 w-5" />
                <span className="hidden md:inline">Liked videos</span>
              </a>
              <div className="hidden md:block pt-2 mt-2 border-t">
                <h3 className="px-3 py-1 text-sm font-medium">Subscriptions</h3>
                <div className="space-y-1 mt-2">
                  {["abin", "mulearn", "youtube", "media"].map((channel) => (
                    <a
                      key={channel}
                      href="#"
                      className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
                    >
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                        {channel[0]}
                      </div>
                      <span>{channel}</span>
                    </a>
                  ))}
                  <button className="w-full justify-start px-3 py-2 h-auto">
                    <ChevronDown className="h-4 w-4 mr-2" />
                    Show more
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </aside>

        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-2">
                  <img
                    src={`/placeholder.svg?height=180&width=320&text=Video ${i + 1}`}
                    alt={`Video ${i + 1}`}
                    width={320}
                    height={180}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-2">
                  <div className="w-9 h-9 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-sm line-clamp-2 group-hover:text-blue-600">
                      {i % 3 === 0
                        ? "How to Build a YouTube Clone with Next.js and Tailwind CSS"
                        : i % 3 === 1
                          ? "10 JavaScript Tips You Didn't Know About"
                          : "Building Modern UIs with React and Tailwind"}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {i % 4 === 0
                        ? "abin"
                        : i % 4 === 1
                          ? "Thomas"
                          : i % 4 === 2
                            ? "Youtube"
                            : "Mulearn"}
                    </p>
                    <p className="text-xs text-gray-500">
                      {Math.floor(Math.random() * 1000)}K views • {Math.floor(Math.random() * 12) + 1} months ago
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

