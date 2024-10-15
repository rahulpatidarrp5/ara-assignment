import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./redux/actions";
import MainComponent from "./components/MainComponent";


function App() {

 const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);


  return <MainComponent />;
}

export default App;
