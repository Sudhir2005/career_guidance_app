const DashboardWidget = ({ title, value, icon, color }) => {
  return (
    <div
      className={`flex items-center justify-between p-6 rounded-2xl shadow-md hover:shadow-xl transition ${color}`}
    >
      <div>
        <h4 className="text-sm text-gray-100">{title}</h4>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
      <div className="text-3xl text-white">{icon}</div>
    </div>
  );
};

export default DashboardWidget;
