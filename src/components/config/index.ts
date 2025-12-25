// Form control configurations for different forms

// Register Form Controls
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

// Login Form Controls
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

// Forgot Password Form Controls
export const forgotPasswordFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "youremail.com",
    componentType: "input"  as const,
    type: "email",
  },
];

