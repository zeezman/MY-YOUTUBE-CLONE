 import axios from 'axios'
 import React, { useState, useContext,} from 'react' 

const AppContext = React.createContext()
const baseUrl = 'https://www.googleapis.com/youtube/v3';

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([]) 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
 
 
  const fetchData = async (url) => {
    setLoading(true);
    const data = await axios.get(`${baseUrl}/${url}`, {
      params: { 
        maxResults: 60,
        part: 'snippet',
        key: 'AIzaSyBIDkXycGp1HbOMbK3NEztvf7E0H7iMjUo', 
      },
    }); 

    console.log(data);
    setData(data?.data?.items);
    setLoading(false);
  };

  const fetchOtherData = async (url) => {
    const data1 = await axios.get(`${baseUrl}/${url}`, {
      params: {
        key: 'AIzaSyBIDkXycGp1HbOMbK3NEztvf7E0H7iMjUo', 
        maxResults: 50,
        regionCode: 'US',
      },
    });
    setResults(data1?.data?.items);
  };

  return (
    <AppContext.Provider
      value={{
               fetchData,
                fetchOtherData,
                results,
                data,
                loading, 
                searchTerm, 
                setSearchTerm,
                isSidebarOpen,
              openSidebar,
            closeSidebar }}
        >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
