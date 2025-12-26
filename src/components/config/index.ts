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


interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  iconType: 'bank' | 'paypal' | 'visa' | 'apple' | 'google' | 'amazon' | 'course';
  isComingSoon: boolean;
}

export const REWARDS_DATA: Reward[] = [
  {
    id: "1",
    title: "$5 Bank Transfer",
    description: "The $5 equivalent will be transferred to your bank account.",
    points: 5000,
    iconType: "bank",
    isComingSoon: false,
  },
  {
    id: "2",
    title: "$5 PayPal International",
    description: "Receive a $5 PayPal balance transfer directly to your PayPal account email.",
    points: 5000,
    iconType: "paypal",
    isComingSoon: false,
  },
  {
    id: "3",
    title: "$5 Virtual Visa Card",
    description: "Use your $5 prepaid card to shop anywhere Visa is accepted online.",
    points: 5000,
    iconType: "visa",
    isComingSoon: false,
  },
  {
    id: "4",
    title: "$5 Apple Gift Card",
    description: "Redeem this $5 Apple Gift Card for apps, games, music, movies, and more on the App Store and iTunes.",
    points: 5000,
    iconType: "apple",
    isComingSoon: false,
  },
  {
    id: "5",
    title: "$5 Google Play Card",
    description: "Use this $5 Google Play Gift Card to purchase apps, games, movies, books, and more on the Google Play Store.",
    points: 5000,
    iconType: "google",
    isComingSoon: false,
  },
  {
    id: "6",
    title: "$5 Amazon Gift Card",
    description: "Get a $5 digital gift card to spend on your favorite tools or platforms.",
    points: 5000,
    iconType: "amazon",
    isComingSoon: false,
  },
  {
    id: "7",
    title: "$10 Amazon Gift Card",
    description: "Get a $10 digital gift card to spend on your favorite tools or platforms.",
    points: 10000,
    iconType: "amazon",
    isComingSoon: false,
  },
  {
    id: "8",
    title: "Free Udemy Course",
    description: "Coming Soon!",
    points: 0,
    iconType: "course",
    isComingSoon: true,
  },
];