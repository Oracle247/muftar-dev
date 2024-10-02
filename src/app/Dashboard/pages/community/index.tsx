import React, { useEffect } from "react";
import NavBar from "../../../../components/navigation/NavBar";
import { useNavigate } from "react-router-dom";

const Community = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard/community/feed");
  });
  return (
    <NavBar>
      <section className="h-screen w-full bg-app-gray-bg px-4 md:px-16">
        <p>community</p>
      </section>
    </NavBar>
  );
};

export default Community;
