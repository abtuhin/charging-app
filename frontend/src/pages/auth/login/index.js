import Auth from "@/components/auth";
import { useState } from "react";
import Link from "next/link";
import Text from "@/components/Text";
import { useDispatch } from "react-redux";
import { login } from "@/states/auth/actions";
import { useRouter } from "next/router";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(login(formData));
      if(response?.data.success) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        router.replace("/");
      }
    } catch (error) {}
  };

  return (
    <Auth.AuthContainer>
      <Text.TextBigBold style={{textAlign: "center"}}>User Login</Text.TextBigBold>
      <form onSubmit={handleSubmit}>
        <Auth.FormLabel htmlFor="email">Email:</Auth.FormLabel>
        <Auth.FormInput
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Auth.FormLabel htmlFor="password">Password:</Auth.FormLabel>
        <Auth.FormInput
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Auth.FormButton type="submit">Login</Auth.FormButton>
      </form>
      <Auth.RedirectLink>
        <Text.TextSmallBold>Do not have an account? <Link href="/auth/register">Register</Link></Text.TextSmallBold>
      </Auth.RedirectLink>
    </Auth.AuthContainer>
  );
};

export default Login;
