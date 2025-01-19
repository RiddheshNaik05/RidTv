import Banner from "./components/Banner";
import useHome from "./hooks/useHome";
import TrendingAllHome from "./components/TrendingAll";

import React, { useState } from "react";
import WhatsPopularHome from "./components/WhatsPopular";
import TopRatedHome from "./components/TopRated";

const Home = () => {
  const [popularType, setPopularType] = useState("Movies");
  const [topRatedType, setTopRatedType] = useState("Movies");

  const {
    trendingAll,
    isTrendingAllLoading,
    whatsPopular,
    isTopRatedLoading,
    topRated,
    isWhatsPopularLoading,
  } = useHome(popularType, topRatedType);

  return (
    <div>
      <div style={{ backgroundColor: "black", width: "100%" }}>
        <Banner data={trendingAll?.results || []} />
      </div>

      <TrendingAllHome
        data={trendingAll?.results || []}
        isLoading={isTrendingAllLoading}
      />

      <WhatsPopularHome
        data={whatsPopular?.results || []}
        popularType={popularType}
        setPopularType={setPopularType}
        isLoading={isWhatsPopularLoading}
      />

      <TopRatedHome
        data={topRated?.results || []}
        topRatedType={topRatedType}
        setTopRatedType={setTopRatedType}
        isLoading={isTopRatedLoading}
      />
    </div>
  );
};

export default Home;
