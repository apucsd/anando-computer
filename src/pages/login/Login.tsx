import { useState } from "react";
import { useLoginUserMutation } from "../../redux/feature/auth/authApi";
import { notification } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      if (res?.result) {
        notification.success({
          message: "Success",
          description: "Login successful",
        });

        const user = {
          name: "admin",
          email: "admin@admin.com",
          role: "admin",
        };
        dispatch(
          setUser({
            user,
            token: res?.result?.token,
          })
        );
        navigate("/admin");
      }
    } catch (error: any) {
      console.log(error);
      notification.error({
        message: "Error",
        description: error?.data?.message,
      });
    }
  };
  return (
    <div className=" h-[calc(100vh-109px)] ">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 w-full max-w-2xl mx-auto my-10 border p-6 rounded-lg"
      >
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>

        <div>
          <label className="block text-primary font-medium mb-2">ইমেইল</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-primary/30 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all duration-200"
            placeholder="your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-lg"
        >
          <span className=" text-lg">
            {isLoading ? "লগইন হচ্ছে..." : "লগইন"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default Login;
