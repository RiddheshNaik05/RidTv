import ComposeProviders from "./ComposeProviders";
import ThemeProvider from "../ThemeProvider";

const GLOBAL_PROVIDERS = [ThemeProvider];

const GlobalProviders = ({ children }) => (
  <ComposeProviders providers={GLOBAL_PROVIDERS}>{children}</ComposeProviders>
);

export default GlobalProviders;
