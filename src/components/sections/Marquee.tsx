export function Marquee() {
  const items = ["Patios", "Stonework", "Walkways", "Retaining Walls", "Landscaping"];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="jv-marquee" aria-hidden="true">
      <div className="jv-marquee-track">
        {repeated.map((item, i) => (
          <span key={i}>
            <em>{item}</em>
            <span className="dot">●</span>
          </span>
        ))}
      </div>
    </div>
  );
}
