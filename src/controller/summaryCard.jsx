// eslint-disable-next-line react/prop-types
export const Card = ({ title, value, background }) => {
  return (
    <div
      className="p-6 rounded-lg shadow-2xl w-60"
      style={{
        background: background,
      }}
    >
      <div className="m-auto rounded-md shadow-xl bg-slate-800">
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
