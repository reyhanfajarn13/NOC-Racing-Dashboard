// eslint-disable-next-line react/prop-types
export const LeaderboardCard = ({ title, value, index, icon, shift }) => {
  return (
    <div className="flex flex-wrap p-4 mb-1 rounded-lg shadow-md bg-slate-300">
      <div className="flex flex-row flex-wrap py-2">
        <div className="flex flex-auto my-auto mr-4 font-semibold text-based">
          {index + 1 === 1 ? (
            <img src="/src/assets/gold-medal.png" className="max-w-8" />
          ) : index + 1 === 2 ? (
            <img src="/src/assets/p_2.png" className="max-w-8" />
          ) : index + 1 === 3 ? (
            <img src="/src/assets/p_3.png" className="max-w-8" />
          ) : index + 1 === 4 ? (
            <img src="/src/assets/p_4.png" className="max-w-8" />
          ) : index + 1 === 5 ? (
            <img src="/src/assets/p_5.png" className="max-w-8" />
          ) : (
            <div className="m-auto text-base font-bold">{index + 1}</div>
          )}
        </div>
        <div className="flex flex-wrap mr-4">
          {icon === null ? (
            <img src="/src/assets/profilPict.svg" className="max-w-10" />
          ) : (
            "pict"
          )}
        </div>
        <div>
          <div className="flex flex-auto my-auto mr-0 text-base font-semibold">
            {title}
          </div>
          <div className="relative w-20 text-sm font-semibold text-white bg-green-900 ">
            {shift}
          </div>
        </div>
      </div>
      <div className="flex flex-col grid-rows-1 my-auto ml-auto">
        <div className="text-2xl font-extrabold text-center">{value}</div>
        <div className="text-xs font-extrabold text-end">Closed Ticket</div>
      </div>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
export const Card = ({ title, value, background }) => {
  return (
    <div
      className="p-6 rounded-lg shadow-2xl w-60"
      style={{
        background: background,
      }}
    >
      <div className="m-auto bg-blue-900 rounded-md shadow-xl">
        <h2 className="text-sm font-extrabold text-center text-white">
          {title}
        </h2>
      </div>
      <div className="py-1 m-auto mt-1 bg-blue-900 rounded-md shadow-xl">
        <p className="mx-auto text-2xl font-bold text-white ">{value}</p>
      </div>
    </div>
  );
};
