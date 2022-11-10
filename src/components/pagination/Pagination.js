import { Link } from "react-router-dom";

function Pagination(props) {

   const getPage = () => {
      const page = [];
      for (let i = 1; i <= props.total; i++) {
         page.push(
            <Link onClick={() => props.onChange(i) } className={props.page === i ? 'active' : '' }>
            {i}
          </Link>
         );
      }
      return page;
   };

  return (
    <>
      <div className="topbar-filter">
        <div className="pagination2">
          <span>Page {props.page} of {props.total}:</span>
            {getPage()}
          <Link>
            <i className="ion-arrow-right-b"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Pagination;
