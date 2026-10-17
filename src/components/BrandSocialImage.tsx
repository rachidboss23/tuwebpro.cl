export default function BrandSocialImage() {
  return (
    <div
      style={{
        alignItems: "flex-start",
        background:
          "radial-gradient(circle at 85% 15%, rgba(6,182,212,0.24), transparent 34%), radial-gradient(circle at 12% 90%, rgba(37,99,235,0.28), transparent 38%), #080d18",
        color: "#f8fafc",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-between",
        padding: "64px 72px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "center",
          border: "1px solid rgba(96,165,250,0.45)",
          borderRadius: "999px",
          color: "#bae6fd",
          display: "flex",
          fontSize: 22,
          fontWeight: 600,
          padding: "12px 20px",
        }}
      >
        DESARROLLO WEB Y SOFTWARE A MEDIDA PARA PYMES
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            background: "linear-gradient(90deg, #60a5fa, #22d3ee)",
            backgroundClip: "text",
            color: "transparent",
            fontSize: 82,
            fontWeight: 800,
            letterSpacing: "-0.06em",
            lineHeight: 1,
          }}
        >
          TuWebPro
        </div>
        <div
          style={{
            color: "#f8fafc",
            fontSize: 42,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.2,
            maxWidth: 950,
          }}
        >
          Software y automatización para pymes en Chile
        </div>
      </div>
      <div
        style={{
          background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
          borderRadius: 999,
          height: 6,
          width: 220,
        }}
      />
    </div>
  );
}
