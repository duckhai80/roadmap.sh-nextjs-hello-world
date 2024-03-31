import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

function Dashboard(props) {
  const [isFetchingData, setIsFetchingData] = useState(true);
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    try {
      async function fetchDashboardData() {
        const response = await fetch("http://localhost:4000/dashboard");
        const data = await response.json();

        setDashboardData(data);
        setIsFetchingData(false);
      }

      fetchDashboardData();

      async function securePage() {
        const session = await getSession();
        console.log(session);

        if (!session) {
          signIn();
        } else {
          setIsLoadingAuth(false);
        }
      }

      securePage();
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (isFetchingData || isLoadingAuth) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData.posts}</h2>
      <h2>Likes - {dashboardData.likes}</h2>
      <h2>Followers - {dashboardData.followers}</h2>
      <h2>Following - {dashboardData.following}</h2>
    </div>
  );
}

export default Dashboard;
