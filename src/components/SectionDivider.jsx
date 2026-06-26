const SectionDivider = ({ bg = "#FDFAF2" }) => (
  <div
    className="flex items-center justify-center"
    style={{ background: bg, paddingTop: "10px", paddingBottom: "10px" }}
  >
    <div className="flex items-center" style={{ gap: "10px" }}>
      <div
        style={{
          width: "56px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, #D4AF37)",
        }}
      />
      <span style={{ color: "#D4AF37", fontSize: "9px", lineHeight: 1 }}>✦</span>
      <div style={{ width: "20px", height: "1px", background: "#C9A227" }} />
      <span style={{ color: "#B8962E", fontSize: "7px", lineHeight: 1 }}>✦</span>
      <div style={{ width: "20px", height: "1px", background: "#C9A227" }} />
      <span style={{ color: "#D4AF37", fontSize: "9px", lineHeight: 1 }}>✦</span>
      <div
        style={{
          width: "56px",
          height: "1px",
          background: "linear-gradient(90deg, #D4AF37, transparent)",
        }}
      />
    </div>
  </div>
);

export default SectionDivider;
