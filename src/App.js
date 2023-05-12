import { useState } from "react";
import "./App.css";
import DATA from "./DATA";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Header from "./components/Header";
import Teams from "./components/Teams";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);
  const [team, setTeam] = useState([]);
  const [showTeam, setShowTeam] = useState(false);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentData = DATA.slice(firstPostIndex, lastPostIndex);

  const addToTeam = (data) => {
    setTeam([...team, data]);
  };
  console.log(team);
  return (
    <div>
      <Header setShowTeam={setShowTeam} showTeam={showTeam} />
      {!showTeam ? (
        <div className="container">
          {currentData.map((data) => {
            return (
              <Card
                key={data.id}
                full_name={data.first_name + " " + data.last_name}
                availability={data.available}
                domain={data.domain}
                email={data.email}
                gender={data.gender}
                avatar={data.avatar}
                addTeam={addToTeam}
                data={data}
              />
            );
          })}
          <Pagination
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            totalPosts={DATA.length}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <div className="container">
          <Teams teamsData={team} />
        </div>
      )}
    </div>
  );
}

export default App;
