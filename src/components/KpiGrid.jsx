import Kpi from './Kpi';

function KpiGrid() {
  const kpis = [
    { label: 'שיחות היום', value: '52' },
    { label: 'אחוזי הצלחה', value: '38%' },
    { label: 'לידים חדשים', value: '17' },
    { label: 'משך שיחה ממוצע', value: '3:12' }
  ];

  return (
    <section className="kpi-container">
      {kpis.map((kpi, idx) => (
        <Kpi key={idx} label={kpi.label} value={kpi.value} />
      ))}
    </section>
  );
}

export default KpiGrid;