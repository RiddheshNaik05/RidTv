import { Link } from "react-router-dom";
import { Col, Pagination, Row } from "antd";

import Loader from "../../components/AppLoader";
import TvShowCard from "./components/TvShowCard";
import useTvShows from "./hooks/useTvShows";

const TvShows = () => {
  const { tvShowsList, isTvShowsListLoading, page, setPage } = useTvShows();

  return (
    <div style={{ paddingInline: "15%", paddingBlock: 24 }}>
      <Row gutter={16} style={{ justifyContent: "center" }}>
        {tvShowsList
          ? tvShowsList?.results.map((tvShow) => (
              <Col
                xs={24}
                sm={12}
                md={8}
                lg={8}
                xl={5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/tv-shows/${tvShow.id}`}
                  key={tvShow.id}
                >
                  <TvShowCard data={tvShow} />
                </Link>
              </Col>
            ))
          : isTvShowsListLoading && <Loader />}
      </Row>

      <div style={{ marginTop: 16 }}>
        <Pagination
          current={page}
          align="center"
          onChange={(event) => setPage(event)}
          total={tvShowsList?.total_results}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default TvShows;
