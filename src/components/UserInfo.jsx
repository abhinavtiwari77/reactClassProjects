function UserInfo({name,age,course}) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-64 text-center hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-1">Age:{age}</p>
        <p className="text-gray-600">{course}</p>
    </div>
  )
}
export default UserInfo