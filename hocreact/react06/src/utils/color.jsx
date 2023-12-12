export const color = (ParentComponent) => {
  const randomColor =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");

  const component = (props) => {
    console.log(props);
    return (
      <div style={{ background: randomColor }}>
        <ParentComponent {...props} />
      </div>
    );
  };
  return component;
};
