import DropdownFilterComponent from '@/components/Filter';
import Layout from '@/components/Layout';
import Pagination from '@/components/Pagination';
import SortComponent from '@/components/Sort';
import SortRadio from '@/components/SortRadio';
import Table from '@/components/Table'
import Text from '@/components/Text';
import { storeUser } from '@/states/auth/actions';
import { filterRecords, getRecords, sortRecords } from '@/states/records/actions';
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();

  const { filteredRecords, filterOptions } = useSelector(state => state.record);
  const { user } = useSelector(state => state.auth);

  const [tokenCheck, setTokenCheck] = useState(false);
  const [order, setOrder] = useState('asc');
  const [sort, setSort] = useState('start');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) router.push('/auth/login'); 
    else {
      dispatch(storeUser(JSON.parse(localStorage.getItem("user"))))
      setTokenCheck(true);
      fetchRecords();
    }
  }, [])

  const fetchRecords = async () => {
    try {
      await dispatch(getRecords());
      await dispatch(filterRecords("all"))
    } catch (error) {
      console.log(error);
    }
  }

  const handlePageChange = (page) => {
    console.log(`Page changed to ${page}`);
  };

  const handleFilterChange = async (e) => {
    const selectedValue = e.target.value;
    await dispatch(filterRecords(selectedValue))
    await dispatch(sortRecords(sort, order))
  };

  const handleSortItemChange = async (e) => {
    const selected = e.target.value;
    await setSort(selected);
    await dispatch(sortRecords(selected, order));
  }

  const handleOrderChange = async (e) => {
    const selected = e.target.value;
    await setOrder(selected);
    await dispatch(sortRecords(sort, selected));
  }

  return tokenCheck && (
    <div style={{marginTop: "2%", marginBottom: "2%"}}>
      <Layout.SortFilterContainer>
        <Text.WelcomeText>Welcome, {`${user.firstname} ${user.lastname}`}</Text.WelcomeText>
        <Text.TextSmall style={{cursor: 'pointer'}} onClick={() => {
          localStorage.clear();
          router.replace("/auth/login");
        }}>Logout</Text.TextSmall>
      </Layout.SortFilterContainer>
      <br/>
      <Layout.SortFilterContainer>
        <Layout.SortFilterContainer>
          <Text.TextSmallBold>Filter by Vehicle</Text.TextSmallBold>
          <DropdownFilterComponent filterOptions={filterOptions} onFilterChange={handleFilterChange} />
        </Layout.SortFilterContainer>
        <Text.TextBigBold>Charging Data Records</Text.TextBigBold> 
        <Layout.SortFilterContainer>
          <Text.TextSmallBold>Sort By</Text.TextSmallBold>
          <SortComponent
            onSortItemChange={handleSortItemChange} 
            options={[
              {label: "Start Time", value: "start"},
              {label: "End Time", value: "end"},
              {label: "Total Cost", value: "totalCost"}
            ]} />
          <SortRadio
            sortOrder={order}
            onOrderChange={handleOrderChange}
            options={[
              {label: "Asc", value: "asc"},
              {label: "Desc", value: "desc"},
            ]}
          />
        </Layout.SortFilterContainer>
      </Layout.SortFilterContainer>
      <Layout.TableContainer>
        <Table.Header />
        {filteredRecords.map((record, index) => <Table.Item key={index} record={record} />)}
      </Layout.TableContainer>
      <Pagination totalPages={10} currentPage={2} onPageChange={handlePageChange}/>
    </div>
  )
}
