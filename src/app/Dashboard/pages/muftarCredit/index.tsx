import { useEffect } from "react";
import NavBar from "../../../../components/navigation/NavBar";
import { useNavigate } from "react-router-dom";

const MuftarCredit = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard/muftar-credit/achievements");
  });
  return (
    <NavBar>
      <section className="h-screen w-full bg-app-gray-bg px-4 md:px-16">
        <p>muftar credit</p>
      </section>
    </NavBar>
  );
};

export default MuftarCredit;
