import Films from "./Films";
import PageWrapper from "../page/PageWrapper";
import FilmsJson from "./films.json";
import Pagination from "../pagination/Pagination";
import { useState } from "react";

function ListFilms() {
  const [actualpage, setPage] = useState(1);
  let films = FilmsJson;
  const filmsPerPage = 5;

  films = films.slice(
   (actualpage - 1) * filmsPerPage,
   actualpage * filmsPerPage
  );

  const getTotalPage = () => {
   return Math.ceil(FilmsJson.length / filmsPerPage);
  };

  return (
  	<PageWrapper>
		{films.map((films) => (
        <Films
          title={films.title}
          img={films.img}
          calification={films.calification}
          duration={films.duration}
          date={films.date}
          director={films.director}
          stars={films.stars}
        >
          {films.description}
        </Films>
      ))}

      <Pagination
        page={actualpage}
        total={getTotalPage()}
        onChange={(page) => {
          setPage(page);
        }}
      />
    </PageWrapper>
  );
}

export default  ListFilms;
