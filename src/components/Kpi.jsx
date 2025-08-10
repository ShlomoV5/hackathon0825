function Kpi({ label, value }) {
  return (
    <div className="kpi">
      <div className="kpi-controls"><span>☰</span><span>✖</span></div>
      <div className="kpi-label">{label}</div>
      <div className="kpi-number">{value}</div>
    </div>
  );
}
export default Kpi;