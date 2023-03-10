import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const MatchesDisplay = ({ matches, setClickedUser }) => {
  const [matchedProfiles, setMatchedProfiles] = useState(null);
  const [cookies, setCookie, removeCookie] = useCookies(null);

  const matchedUserIds = matches.map(({ user_id }) => user_id);

  const getMatches = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}users`,
        {
          params: { userIds: JSON.stringify(matchedUserIds) },
        }
      );
      setMatchedProfiles(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(matchedProfiles);

  useEffect(() => {
    getMatches();
  }, []);

  return (
    <div className="matches-display">
      {matchedProfiles?.map((match, _index) => (
        <div
          key={_index}
          className="match-card"
          onClick={() => setClickedUser(match)}
        >
          <div className="img-container">
            <img src={match?.url} alt={match?.first_name + " profile"} />
          </div>
          <h3>{match?.first_name}</h3>
        </div>
      ))}
    </div>
  );
};

export default MatchesDisplay;
