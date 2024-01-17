import Text from '@/styled/Text';
import { storeUser } from '@/states/auth/actions';
import { filterRecords, getRecords } from '@/states/records/actions';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterComponent from '@/components/FilterComponent';
import SortComponent from '@/components/SortComponent';
import OrderComponent from '@/components/OrderComponent';
import { TableHeader, TableItem } from '@/components/TableComponent';
import PaginationComponent from '@/components/PaginationComponent';
import Layout from '@/styled/Layout';

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { filteredRecords, filterOptions, totalPages } = useSelector(state => state.record);
  const { user } = useSelector(state => state.auth);

  const [tokenCheck, setTokenCheck] = useState(false);
  const [order, setOrder] = useState('asc');
  const [sort, setSort] = useState('start');
  const [filter, setFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) router.replace('/auth/login'); 
    else {
      dispatch(storeUser(JSON.parse(localStorage.getItem("user"))))
      setTokenCheck(true);
      fetchRecords();
    }
  }, [])

  const fetchRecords = async () => {
    try {
      await dispatch(getRecords());
      await dispatch(filterRecords({filter, sort, order, currentPage }));
    } catch (error) {
      console.log(error);
    }
  }

  const handlePageChange = async (page) => {
    setCurrentPage(page);
    await dispatch(filterRecords({filter, sort, order, currentPage: page }));
  };

  const handleFilterChange = async (e) => {
    const selected = e.target.value;
    setFilter(selected);
    setCurrentPage(1);
    await dispatch(filterRecords({filter: selected, sort, order, currentPage: 1 }));
  };

  const handleSortItemChange = async (e) => {
    const selected = e.target.value;
    setSort(selected);
    await dispatch(filterRecords({filter, sort: selected, order, currentPage }));
  }

  const handleOrderChange = async (e) => {
    const selected = e.target.value;
    setOrder(selected);
    await dispatch(filterRecords({filter, sort, order: selected, currentPage }));
  }

  return tokenCheck && (
    <div style={{marginTop: "2%", marginBottom: "2%"}}>
      <Layout.SortOrderContainer>
        <Text.WelcomeText>Welcome, {`${user.firstname} ${user.lastname}`}</Text.WelcomeText>
        <Text.TextSmall style={{cursor: 'pointer'}} onClick={() => {
          localStorage.clear();
          router.replace("/auth/login");
        }}>Logout</Text.TextSmall>
      </Layout.SortOrderContainer>
      <br/>
      <Layout.SortOrderContainer>
        <Layout.SortOrderContainer>
          <Text.TextSmallBold>Filter by Vehicle</Text.TextSmallBold>
          <FilterComponent filterOptions={filterOptions} onFilterChange={handleFilterChange} />
        </Layout.SortOrderContainer>
        <Text.TextBigBold>Charging Data Records</Text.TextBigBold> 
        <Layout.SortOrderContainer>
          <Text.TextSmallBold>Sort By</Text.TextSmallBold>
          <SortComponent
            onSortItemChange={handleSortItemChange} 
            options={[
              {label: "Start Time", value: "start"},
              {label: "End Time", value: "end"},
              {label: "Total Cost", value: "totalCost"}
            ]} />
          <OrderComponent
            sortOrder={order}
            onOrderChange={handleOrderChange}
            options={[
              {label: "Asc", value: "asc"},
              {label: "Desc", value: "desc"},
            ]}
          />
        </Layout.SortOrderContainer>
      </Layout.SortOrderContainer>
      <Layout.TableContainer>
        <TableHeader />
        {filteredRecords.map((record, index) => <TableItem key={index} record={record} />)}
      </Layout.TableContainer>
      <PaginationComponent totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange}/>
    </div>
  )
}
