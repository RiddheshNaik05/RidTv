import useMovies from "./hooks/useMovies";
import { Col, Pagination, Row } from "antd";
import Loader from "../../components/AppLoader";
import { Link } from "react-router-dom";
import MovieCard from "./components/MovieCard";

const Movies = () => {
  const { moviesList, page, setPage } = useMovies();

  return (
    <div style={{ paddingInline: "15%", paddingBlock: 24 }}>
      <Row gutter={16} style={{ justifyContent: "center" }}>
        {moviesList ? (
          moviesList?.results.map((movie) => (
            <Col
              key={movie.id}
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
                to={`/movies/${movie.id}`}
                key={movie.id}
              >
                <MovieCard data={movie} />
              </Link>
            </Col>
          ))
        ) : (
          <Loader />
        )}
      </Row>

      <div style={{ marginTop: 16 }}>
        <Pagination
          current={page}
          align="center"
          onChange={(event) => setPage(event)}
          total={moviesList?.total_results}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Movies;
