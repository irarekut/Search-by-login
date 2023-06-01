import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import SearchUsers from '../../api/searchApi';
import {
  setUsersData,
  setTotalCount,
  setSortBy,
  setOrder,
  setPage,
} from '../../store/usersDataSlice';
import './paginationBlockStyles.css';

export default function PaginationBlock() {
  const dispatch = useDispatch();
  let totalCount;
  totalCount = useSelector((state) => state.usersData.totalCount);
  const searchValue = useSelector((state) => state.usersData.searchBy);
  const sortBy = useSelector((state) => state.usersData.sortBy);
  const order = useSelector((state) => state.usersData.order);
  const isSearching = useSelector((state) => state.usersData.isSearching);
  const itemsPerPage = 30;

  if (totalCount >= 1000) {
    totalCount = 1000;
  }
  const pageCount = Math.ceil(totalCount / itemsPerPage);

  const handlePageClick = async (e) => {
    const page = e.selected + 1;
    const data = await SearchUsers(searchValue, sortBy, order, page);
    dispatch(setUsersData(data.items));
    dispatch(setTotalCount(data.total));
    dispatch(setSortBy(sortBy));
    dispatch(setOrder(order));
    dispatch(setPage(1));
  };

  if (isSearching || typeof totalCount === 'undefined') {
    return null;
  }

  if (isSearching || totalCount === 0) {
    return null;
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={(e) => handlePageClick(e)}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="< previous"
      pageClassName="page-item"
      previousClassName="page-item"
      nextClassName="page-item"
      breakClassName="page-item"
      containerClassName="page"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  );
}
