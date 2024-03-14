import { useEffect, useState } from "react";
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

  const fetchDailyLeaderboard = async () => {
    try {
      const sortedData = [...leaderboardData].sort(
        (a, b) => b.totalPoint - a.totalPoint
      );
      setDailyLeaderboardData(sortedData);
    } catch (error) {
      console.error("Error fetching monthly leaderboard data:", error);
    }
  };

  const fetchMonthlyLeaderboard = async () => {
    try {
      const sortedData = [...leaderboardData]
        .sort((a, b) => b.totalPoint - a.totalPoint)
        .slice(0, 3);
      // Selecting top 3 leaderboard from the sorted data
      //const top3 = sortedData.slice(0, 3);
      setMonthlyLeaderboardData(sortedData);
    } catch (error) {
      console.error("Error fetching monthly leaderboard data:", error);
    }
  };

  useEffect(() => {
    fetchMonthlyLeaderboard();
    fetchDailyLeaderboard();
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
      <div className="left-0 w-full p-4 mb-8 bg-gray-200 border border-gray-300 rounded-lg shadow-md ">
        <div className="grid grid-cols-2 gap-8 border-zinc-700">
          <h1 className="text-3xl font-extrabold">NOC Agent Performance</h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="px-auto">
          <h1 className="mb-4 text-2xl font-bold">Daily Race</h1>
          <div className="overflow-y-auto max-h-96" id="leaderboard-container">
            {dailyleaderboardData.map((player, index) => (
              <LeaderboardCard
                key={index}
                index={index}
                title={player.nama}
                icon={"pict"}
                value={player.totalPoint}
              />
            ))}
          </div>
        </div>
        <div className="px-auto">
          <h1 className="mb-4 text-2xl font-bold">Monthly Champions</h1>
          {monthlyLeaderboardData.map((player, index) => (
            <LeaderboardCard
              key={index}
              index={index}
              icon={"pict"}
              title={player.nama}
              value={player.totalPoint}
            />
          ))}
        </div>
        <div className="ml-auto">
          <div className="px-10 py-4 mx-auto bg-blue-900 rounded-lg">
            <h1 className="mb-2 text-2xl font-bold text-center text-white">
              Summary
            </h1>
            <div className="grid gap-4 grid-row-1 sm:grid-row-2 md:grid-row-3">
              <Card title="Tanggal" value={todayDate} background="#4299e1" />
              <Card
                title="Ticket closed this day"
                value={ticketsClosedToday}
                background="#4299e1"
              />
              <Card
                title="Ticket closed this month"
                value={ticketsClosedThisMonth}
                background="#4299e1"
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
