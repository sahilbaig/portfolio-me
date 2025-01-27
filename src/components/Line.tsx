const Line = ({ lineLength = "50px" }: { lineLength?: string }) => {
  return (
    <hr
      style={{
        border: "0",
        height: "10px", // Height of the line
        backgroundColor: "#FDC965", // Color of the line
        borderRadius: "30px",
        width: lineLength,
        marginLeft: "0px",
      }}
    />
  );
};

export default Line;
