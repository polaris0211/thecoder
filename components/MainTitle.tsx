export default function MainTitle(props: {
  size: string;
  title: string;
}): JSX.Element {
  return (
    <h1 style={{ fontSize: props.size, paddingBottom: 0, lineHeight: 0.8 }}>
      {props.title}
    </h1>
  );
}
MainTitle.defaultProps = {
  title: "title",
  size: "4rem",
};
