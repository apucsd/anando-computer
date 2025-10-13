const Login = () => {
    return (
       
         <div className=" h-[calc(100vh-109px)] ">
            <form className="space-y-6 w-full max-w-2xl mx-auto my-10 border p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
              
              <div>
                <label className="block text-primary font-medium mb-2">
                  ইমেইল
                </label>
                <input
                  type="email"
                  name="email"
                  
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-primary font-medium mb-2">
                  পাসওয়ার্ড
                </label>
                <input
                  type="password"
                  name="password"
                  
                  className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200"
                  placeholder="your password"
                />
              </div>


              

              
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
              >
                <span className="bengali text-lg">লগইন</span>
              </button>
            </form>
         </div>
  
    );
};

export default Login;
