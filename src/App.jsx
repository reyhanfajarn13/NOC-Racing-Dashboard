import { useEffect, useState, useRef } from "react";
import "./App.css";
import { LeaderboardCard, Card } from "./leaderboardCard";
import { leaderboardData } from "./data-controller";

function App() {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0"); // Menambahkan 0 di depan jika hanya satu digit
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Menambahkan 0 di depan jika hanya satu digit
  const year = currentDate.getFullYear();

  const todayDate = `${day}/${month}/${year}`;
  const ticketsClosedToday = 10;
  const ticketsClosedThisMonth = 100;
  // Data leaderboard sederhana
  const [dailyleaderboardData, setDailyLeaderboardData] = useState([]);
  const [monthlyLeaderboardData, setMonthlyLeaderboardData] = useState([]);
  const [runningText, setRunningText] = useState(
    "NOC Agent Performance Dashboard 2024 || NOC Agent Performance Dashboard 2024 || NOC Agent Performance Dashboard 2024 || NOC Agent Performance Dashboard 2024 "
  );
  const marqueeRef = useRef(null);

  const fetchDailyLeaderboard = async () => {
    try {
      const sortedData = await [...leaderboardData].sort(
        (a, b) => b.totalPoint - a.totalPoint
      );
      setDailyLeaderboardData(sortedData);
    } catch (error) {
      console.error("Error fetching monthly leaderboard data:", error);
    }
  };

  const fetchMonthlyLeaderboard = async () => {
    try {
      const sortedData = await [...leaderboardData]
        .sort((a, b) => b.totalPoint - a.totalPoint)
        .slice(0, 3);
      // Selecting top 3 leaderboard from the sorted data
      //const top3 = sortedData.slice(0, 3);
      setMonthlyLeaderboardData(sortedData);
    } catch (error) {
      console.error("Error fetching monthly leaderboard data:", error);
    }
  };

  const autoScrolling = () => {
    const container = marqueeRef.current;
    let isScrolling = false;
    let scrollSpeed = 50; // Kecepatan scroll (ms per pixel)

    const scroll = () => {
      if (!isScrolling) {
        isScrolling = true;
        container.scrollTop += 1; // Menyesuaikan dengan kecepatan scroll

        // Cek apakah sudah mencapai akhir konten
        if (
          container.scrollTop >=
          container.scrollHeight - container.clientHeight
        ) {
          // Jika sudah mencapai akhir, reset posisi scroll ke awal
          container.scrollTop = 0;
        }

        // Periksa apakah jumlah data kurang dari 5
        if (setDailyLeaderboardData.length < 5) {
          // Jika kurang dari 5, atur kecepatan scroll lebih lambat
          scrollSpeed = 200;
        } else {
          // Jika 5 atau lebih, atur kecepatan scroll normal
          scrollSpeed = 50;
        }

        setTimeout(() => {
          isScrolling = false;
        }, scrollSpeed);
      }
    };

    const interval = setInterval(scroll, 20); // Mengatur interval untuk memanggil fungsi scroll

    // Memberhentikan interval ketika komponen tidak lagi ter-render
    return () => {
      clearInterval(interval);
    };
  };

  useEffect(() => {
    fetchMonthlyLeaderboard();
    fetchDailyLeaderboard();
    autoScrolling();
    const interval = setInterval(() => {
      // Contoh penggunaan: mengubah running text menjadi waktu sekarang
      setRunningText(
        ```NOC Agent Performance Dashboard 2024 
        NOC Agent Performance Dashboard 2024 
        NOC Agent Performance Dashboard 2024 
      ```
      );
    }, 100);
    const container = document.getElementById("leaderboard-container");

    // Mengatur scroll ke bagian bawah elemen setelah konten dimuat
    container.scrollTop = container.scrollHeight;
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container py-0 max-w-screen-2xl">
      <div className="left-0 w-full p-2 mb-4 bg-gray-200 border border-gray-300 rounded-lg shadow-md ">
        <div className="grid grid-cols-3 gap-2 border-zinc-700">
          <img src="/src/assets/Logo TBIG.png" className="max-w-28"></img>
          <h1 className="text-2xl font-extrabold">NOC Agent Performance</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="px-auto">
          <h1 className="mb-2 text-2xl font-bold text-white bg-blue-900 rounded-md shadow-xl">
            Daily Race
          </h1>
          <div
            className="overflow-y-auto max-h-96"
            ref={marqueeRef}
            id="leaderboard-container"
          >
            {dailyleaderboardData.map((player, index) => (
              <LeaderboardCard
                key={index}
                index={index}
                title={player.nama}
                icon={null}
                shift={"shift 1"}
                value={player.totalPoint}
              />
            ))}
          </div>
        </div>
        <div className="px-auto">
          <h1 className="mb-2 text-2xl font-bold text-white bg-blue-900 rounded-md shadow-xl">
            Monthly Champions
          </h1>
          {monthlyLeaderboardData.map((player, index) => (
            <LeaderboardCard
              key={index}
              index={index}
              icon={null}
              title={player.nama}
              shift={"Shift 1"}
              value={player.totalPoint}
            />
          ))}
        </div>
        <div className="ml-auto">
          <div className="px-8 py-2 bg-blue-900 rounded-lg shadow-2xl">
            <h1 className="mb-2 text-xl font-bold text-center text-white">
              ====Summary====
            </h1>
            <div className="grid gap-4 mb-4 grid-row-1 sm:grid-row-2 md:grid-row-3">
              <Card title="DATE" value={todayDate} background="#9dd9f2" />
              <Card
                title="TICKET/DAY"
                value={ticketsClosedToday}
                background="#9dd9f2"
              />
              <Card
                title="CLOSED TICKET/MONTH : "
                value={ticketsClosedThisMonth}
                background="#9dd9f2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center text-white bg-gray-600">
        <marquee>{runningText}</marquee>
      </div>
    </div>
  );
}

export default App;
