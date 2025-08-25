export default function Signup() {
    return (
        <form method="POST" className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-bold text-center mb-6 text-orange-500">Sign up</h2>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-400"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Username</label>
                <input
                    type="text"
                    name="username"
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-400"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1 font-medium">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-400"
                />
            </div>
            <div className="mb-6">
                <label className="block mb-1 font-medium">Password</label>
                <input
                    type="password"
                    name="password"
                    required
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-orange-400"
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition"
            >
                Sign Up
            </button>
        </form>
    );
}