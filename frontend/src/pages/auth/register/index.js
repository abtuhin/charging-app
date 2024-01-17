import Auth from "@/styled/Auth";
import { useState } from "react";
import Link from "next/link";
import Text from "@/styled/Text";
import { useDispatch } from "react-redux";
import { register } from "@/states/auth/actions";
import { useRouter } from "next/router";
import formValidator from "@/utils/formValidator";

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '' 
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasErrors = formValidator(formData);
    const isValid = Object.keys(hasErrors).length === 0;
    setErrors(hasErrors);

    if(isValid){
      try {
        const response = await dispatch(register({
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password
        }));
        if(response?.data.success) {
          router.replace("/auth/login");
        }
      } catch (error) {
      }
    }
  };

  return (
    <Auth.AuthContainer>
      <Text.TextBigBold style={{textAlign: 'center'}}>User Registration</Text.TextBigBold>
      <form onSubmit={handleSubmit}>
        <Auth.FormLabel htmlFor="firstname">First Name</Auth.FormLabel>
        <Auth.FormInput
          type="text"
          id="firstname"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        {errors.firstname && <Text.ErrorText>{errors.firstname}</Text.ErrorText>}

        <Auth.FormLabel htmlFor="lastname">Last Name</Auth.FormLabel>
        <Auth.FormInput
          type="text"
          id="lastname"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        {errors.lastname && <Text.ErrorText>{errors.lastname}</Text.ErrorText>}

        <Auth.FormLabel htmlFor="email">Email</Auth.FormLabel>
        <Auth.FormInput
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <Text.ErrorText>{errors.email}</Text.ErrorText>}

        <Auth.FormLabel htmlFor="password">Password</Auth.FormLabel>
        <Auth.FormInput
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <Text.ErrorText>{errors.password}</Text.ErrorText>}

        <Auth.FormLabel htmlFor="confirm_password">Confirm Password</Auth.FormLabel>
        <Auth.FormInput
          type="password"
          id="confirm_password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        {errors.confirmPassword && <Text.ErrorText>{errors.confirmPassword}</Text.ErrorText>}

        <Auth.FormButton type="submit">Register</Auth.FormButton>
      </form>
      <Auth.RedirectLink>
        <Text.TextSmallBold>Already have an account? <Link href="/auth/login">Login</Link></Text.TextSmallBold>
      </Auth.RedirectLink>
    </Auth.AuthContainer>
  );
};

export default RegisterComponent;
