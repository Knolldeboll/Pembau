const SVGTest = () => {
  return (
    <div
      id="svgtest"
      style={{
        position: "absolute",
        width: "15%",
        aspectRatio: "1",
        bottom: "-1px",
        right: "-1px",
        zIndex: 10,
        backgroundColor: "#ff00ff",
      }}
    >
      <svg
        style={{
          position: "absolute",
          bottom: "0px",
          right: "0px",
          transform: "rotate(180deg)",
        }}
        viewBox="0 0 100 100"
      >
        <path d="M0 0 L100 0 L0 100 L0 0" fill="#f5f5f5" />
        <path d="M100 100 L0 100 L100 0 L100 100" fill={"black"} />
      </svg>
    </div>
  );
};

export default SVGTest;
