export const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

export const initClerk = () => {
  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }
};
