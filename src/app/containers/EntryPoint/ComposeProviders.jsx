const ComposeProviders = ({
  providers,
  children,
}) => (
  <>
    {providers.reduceRight(
      (Prev, Curr) => (
        <Curr>{Prev}</Curr>
      ),
      children
    )}
  </>
);

export default ComposeProviders;
