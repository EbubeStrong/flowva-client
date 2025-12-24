export const registerFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "user@example.com",
    componentType: "input" as const,
    type: "email",
  },

  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input" as const,
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Confirmed your password",
    componentType: "input" as const,
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "user@example.com",
    componentType: "input"  as const,
    type: "email",
  },

  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input" as const,
    type: "password",
  },
];

export const forgotPasswordFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "youremail.com",
    componentType: "input"  as const,
    type: "email",
  },
];
