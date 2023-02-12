export default function Describe(props: {
  size: string;
  describe: string;
}): JSX.Element {
  return (
    <h6
      style={{
        fontSize: props.size,
        paddingTop: 0,
        fontWeight: 100,
        lineHeight: 0.8,
      }}
    >
      {props.describe}
    </h6>
  );
}
Describe.defaultProps = {
  describe: "describe",
  size: "1.34rem",
};
