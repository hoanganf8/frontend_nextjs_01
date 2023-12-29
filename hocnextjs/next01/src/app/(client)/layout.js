const ClientLayout = ({ children }) => {
  return (
    <>
      <header>
        <h2>HEADER</h2>
      </header>
      <main>{children}</main>
      <footer>
        <h2>FOOTER</h2>
      </footer>
    </>
  );
};

export default ClientLayout;
