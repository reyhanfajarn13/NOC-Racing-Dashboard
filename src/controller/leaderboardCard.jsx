// eslint-disable-next-line react/prop-types
export const LeaderboardCard = ({ title, value, index, icon, shift }) => {
  return (
    <>
      {index + 1 === 1 ? (
        <div className="flex flex-wrap p-4 mb-1 bg-yellow-400 rounded-lg shadow-md">
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
              <div className="relative text-sm font-semibold text-white w-21 ">
                {shift === "Shift 1" ? (
                  <div className="grid items-center grid-cols-3">
                    <div className="flex items-stretch px-1 py-1 rounded shadow-lg bg-sky-300">
                      Shift 1
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Morning Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                ) : shift === "Shift 2" ? (
                  <div className="grid items-center grid-cols-3 ">
                    <div className="flex items-stretch px-1 py-1 bg-orange-400 rounded shadow-lg">
                      Shift 2
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Afternoon Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                ) : (
                  <div className="grid items-center grid-cols-3">
                    <div className="flex items-stretch px-1 py-1 rounded shadow-lg bg-slate-800">
                      Shift 3
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Night Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col grid-rows-1 my-auto ml-auto">
            <div className="text-2xl font-extrabold text-center">{value}</div>
            <div className="text-xs font-extrabold text-end">Closed Ticket</div>
          </div>
        </div>
      ) : index + 1 === 2 ? (
        <div className="flex flex-wrap p-4 mb-1 rounded-lg shadow-md bg-slate-500">
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
              <div className="relative text-sm font-semibold text-white w-21 ">
                {shift === "Shift 1" ? (
                  <div className="grid items-center grid-cols-3">
                    <div className="flex px-1 py-1 rounded shadow-lg bg-sky-300">
                      Shift 1
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Morning Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                ) : shift === "Shift 2" ? (
                  <div className="grid items-center grid-cols-3 ">
                    <div className="flex items-stretch px-1 py-1 bg-orange-400 rounded shadow-lg">
                      Shift 2
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Afternoon Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                ) : (
                  <div className="grid items-center grid-cols-3">
                    <div className="flex items-stretch px-1 py-1 rounded shadow-lg bg-slate-800">
                      Shift 3
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Night Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col grid-rows-1 my-auto ml-auto">
            <div className="text-2xl font-extrabold text-center">{value}</div>
            <div className="text-xs font-extrabold text-end">Closed Ticket</div>
          </div>
        </div>
      ) : index + 1 === 3 ? (
        <div className="flex flex-wrap p-4 mb-1 bg-yellow-700 rounded-lg shadow-md">
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
              <div className="relative text-sm font-semibold text-white w-21 ">
                {shift === "Shift 1" ? (
                  <div className="grid items-center grid-cols-3 ">
                    <div className="flex items-stretch px-1 py-1 rounded shadow-lg bg-sky-300">
                      Shift 1
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Morning Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                ) : shift === "Shift 2" ? (
                  <div className="grid items-center grid-cols-3 ">
                    <div className="flex items-stretch px-1 py-1 bg-orange-400 rounded shadow-lg">
                      Shift 2
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Afternoon Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                ) : (
                  <div className="grid items-center grid-cols-3">
                    <div className="flex items-stretch px-1 py-1 rounded shadow-lg bg-slate-800">
                      Shift 3
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Night Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col grid-rows-1 my-auto ml-auto">
            <div className="text-2xl font-extrabold text-center">{value}</div>
            <div className="text-xs font-extrabold text-end">Closed Ticket</div>
          </div>
        </div>
      ) : (
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
              <div className="relative text-sm font-semibold text-white w-21 ">
                {shift === "Shift 1" ? (
                  <div className="grid items-center grid-cols-3 ">
                    <div className="flex items-stretch px-1 py-1 rounded shadow-lg bg-sky-300">
                      Shift 1
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Morning Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                ) : shift === "Shift 2" ? (
                  <div className="grid items-center grid-cols-3 ">
                    <div className="flex items-stretch px-1 py-1 bg-orange-400 rounded shadow-lg">
                      Shift 2
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Afternoon Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                ) : (
                  <div className="grid items-center grid-cols-3">
                    <div className="flex items-stretch px-1 py-1 rounded shadow-lg bg-slate-800">
                      Shift 3
                    </div>
                    <img
                      type="image/svg+xml"
                      src="/src/assets/Night Logo.svg"
                      className="w-5 h-5 m-auto mt-1 mb-1"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col grid-rows-1 my-auto ml-auto">
            <div className="text-2xl font-extrabold text-center">{value}</div>
            <div className="text-xs font-extrabold text-end">Closed Ticket</div>
          </div>
        </div>
      )}
    </>
  );
};
