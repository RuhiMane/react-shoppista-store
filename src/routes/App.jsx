import { Outlet } from "react-router-dom";
import Footer from "../component/footer";
import Header from "../component/header";
import FetchItems from "../component/fetchitems";
import { useSelector } from "react-redux";
import LoadingSpinner from "../component/loadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

export default App;
