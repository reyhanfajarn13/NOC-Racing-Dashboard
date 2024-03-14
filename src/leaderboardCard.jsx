// eslint-disable-next-line react/prop-types
export const LeaderboardCard = ({ title, value, index, icon }) => {
  return (
    <div className="flex flex-wrap p-4 mb-1 rounded-lg shadow-md bg-slate-300">
      <div className="flex flex-row flex-wrap py-2">
        <div className="flex flex-auto my-auto mr-4 font-semibold text-based">
          {index + 1}
        </div>
        <div className="flex flex-wrap mr-4">{icon}</div>
        <div className="flex flex-auto my-auto mr-4 text-sm font-semibold">
          {title}
        </div>
      </div>
      <div className="flex flex-col grid-rows-1 ml-auto">
        <div className="font-extrabold text-center">{value}</div>
        <div className="text-xs font-extrabold text-end">Closed Ticket</div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const Card = ({ title, value, background }) => {
  return (
    <div
      className="p-6 rounded-lg shadow-xl w-60"
      style={{
        background: background,
      }}
    >
      <h2 className="text-sm font-extrabold text-amber-50 text-start">
        {title}
      </h2>
      <p className="text-2xl font-bold text-neutral-800">{value}</p>
    </div>
  );
};
