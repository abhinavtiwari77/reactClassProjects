function Fruits() {
  return (
    <div className="bg-gradient-to-r from-pink-400 to-red-300 py-4 shadow-lg mt-10 p-4">
        <ul className="flex justify-center gap-8 text-white font-md text-lg tracking-wide">
            <li className="cursor-pointer hover:scale-105 transition-transform">Apple</li>
            <li className="cursor-pointer hover:scale-105 transition-transform">Banana</li>
            <li className="cursor-pointer hover:scale-105 transition-transform">Mango</li>
            <li className="cursor-pointer hover:scale-105 transition-transform">Grapes</li>
        </ul>
    </div>
  )
}
export default Fruits