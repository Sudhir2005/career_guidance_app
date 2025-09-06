const Card = ({ title, description, icon, buttonText }) => {
  return (
    <div className="p-6 transition bg-white border border-gray-100 shadow-md rounded-2xl hover:shadow-xl">
      <div className="flex items-center space-x-4">
        {icon && <div className="text-3xl text-indigo-600">{icon}</div>}
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="mt-3 mb-4 text-gray-600">{description}</p>
      {buttonText && (
        <button className="px-4 py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700">
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default Card;
