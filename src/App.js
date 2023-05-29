import { useEffect, useState } from 'react';

function App() {
 
  // const data = [
  //   { id: 1, name: 'John Doe', email: 'john@example.com' },
  //   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  //   { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
  // ];


  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://sigma-server-xi.vercel.app/users');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" bg-amber-300 pb-[500px]">
 <div className="admin-dashboard w-[90%] mx-auto pt-10">
      <header>
        <h1 className="text-green-800 text-[50px] font-bold text-center mb-[10px]">Admin Dashboard</h1>
      </header>
      <main>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map(item => (
            <div
              key={item.id}
              className="bg-blue-100 p-4 rounded shadow"
            >
              <h2 className="text-lg font-bold">Name: {item.name}</h2>
              <p className="text-gray-500">Phone: {item.phone}</p>
              <p className="text-gray-500">Email: {item.email}</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
      <h1 className="text-green-800 text-[30px] font-semibold  my-[10px]">Total User: {data.length}</h1>
      </footer>
    </div>
    </div>
   
  );
};

export default App;
