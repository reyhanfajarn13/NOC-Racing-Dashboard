import { useEffect, useState } from 'react'
import './App.css'

// eslint-disable-next-line react/prop-types
const Card = ({ title, value }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-60">
      <h2 className="text-sm font-semibold text-start">{title}</h2>
      <p className="text-2xl font-bold text-gray-600">{value}</p>
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const LeaderboardCard = ({ title, value, index }) => {
  return (
    <div className="flex items-center col-auto p-4 mb-1 rounded-lg shadow-md bg-slate-300">
      <div className="mr-4">{index+1}</div>
      <div className="mr-4">Pict</div>
      <div className="mr-4">{title}</div>
      <div className='flex flex-col-reverse grid-rows-1'>
        <div className="font-extrabold text-center">{value}</div>
        <div className="text-xs font-extrabold text-end">Closed Ticket</div>
      </div>
    </div>
  );
};



function App() {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0'); // Menambahkan 0 di depan jika hanya satu digit
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Menambahkan 0 di depan jika hanya satu digit
  const year = currentDate.getFullYear();

  const todayDate = `${day}/${month}/${year}`;
  const ticketsClosedToday = 10;
  const ticketsClosedThisMonth = 100;
   // Data leaderboard sederhana
   const [leaderboardData, setDailyLeaderboardData] = useState([
    { nama: 'John Doe', totalPoint: 100 },
    { nama: 'Jane Smith', totalPoint: 80 },
    { nama: 'Alice Johnson', totalPoint: 120 },
    { nama: 'Bob Brown', totalPoint: 90 },
  ]);

  const [monthlyLeaderboardData, setMonthlyLeaderboardData] = useState([]);

  const fetchDailyLeaderboard = async () => {
    try {
      const sortedData = [...leaderboardData].sort((a,b) => b.totalPoint - a.totalPoint);
      setDailyLeaderboardData(sortedData);
    } catch (error) {
      console.error('Error fetching monthly leaderboard data:', error);
    }
  };

  const fetchMonthlyLeaderboard = async () => {
    try {
      const sortedData = [...leaderboardData].sort((a, b) => b.totalPoint - a.totalPoint).slice(0,3);
      // Selecting top 3 leaderboard from the sorted data
      //const top3 = sortedData.slice(0, 3);
      setMonthlyLeaderboardData(sortedData);
    } catch (error) {
      console.error('Error fetching monthly leaderboard data:', error);
    }
  };


  useEffect(() => {
    fetchMonthlyLeaderboard();
    fetchDailyLeaderboard();
  }, []);
  
  return (
    <div className="container py-0 mx-auto">
      <div className='grid grid-cols-2 gap-8 px-6'>
        <h1 className='text-3xl font-extrabold '>NOC Agent Performance</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className='m-6'> 
          <h1 className="mb-4 text-2xl font-bold">Daily Race</h1>
          {leaderboardData.map((player, index) => (
            <LeaderboardCard key={index} index={index} title={player.nama} value={player.totalPoint} />
          ))}
        </div>
        <div className='m-6'>
          <h1 className="mb-4 text-2xl font-bold">Monthly Champions</h1>
          {monthlyLeaderboardData.map((player, index) => (
            <LeaderboardCard key={index} index={index} title={player.nama} value={player.totalPoint} />
          ))}
        </div>
        <div className='m-6'>
          <h1 className="mb-2 text-2xl font-bold text-center">Summary</h1>
          <div className="grid gap-4 grid-row-1 sm:grid-row-2 md:grid-row-3">
            <Card title="Tanggal" value={todayDate} />
            <Card title="Ticket closed this day" value={ticketsClosedToday} />
            <Card title="Ticket closed this month" value={ticketsClosedThisMonth} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
