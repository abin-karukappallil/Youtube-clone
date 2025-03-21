import logo from "/logo.png"
function Navbar() {
  return (
    <div>
        <nav className="nav h-12  flex bg-black absolute w-screen top-0 flex-row  items-center p-4 bg-gray-800 text-white">
            <ul className="flex flex-row">
            <img src={logo} className="h-[30px]" width={120} height={0} alt="" />
            </ul>
        </nav>
    </div>
  )
}

export default Navbar