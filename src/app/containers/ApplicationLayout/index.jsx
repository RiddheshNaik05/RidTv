import AppBar from "../AppBar";

const ApplicationLayout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
};

export default ApplicationLayout;
