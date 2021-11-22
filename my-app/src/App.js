import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, LoginPage } from "./Pages";
import axios from "./Axios/axios";
import requests from "./Axios/requests";
import { useDispatch } from "react-redux";
import {
  getPopular,
  gethighRate,
  getbestFrom,
  getnewMovies,
  getkids,
  getratedR,
  getdrama,
} from "./features/moviesSlice";
import test from "./test";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const dataPopular = await axios
      .get(requests.fetchPopular)
      .then((response) => {
        const result = response.data.results;
        return result;
      })
      .catch((err) => alert(err));

    const dataHighRate = await axios
      .get(requests.fetchHighRate)
      .then((response) => {
        const result = response.data.results;
        return result;
      })
      .catch((err) => alert(err));

    const dataBest = await axios
      .get(requests.fetchBest)
      .then((response) => {
        const result = response.data.results;
        return result;
      })
      .catch((err) => alert(err));

    const dataNew = await axios
      .get(requests.fetchNew)
      .then((response) => {
        const result = response.data.results;
        return result;
      })
      .catch((err) => alert(err));

    const dataKids = await axios
      .get(requests.fetchKids)
      .then((response) => {
        const result = response.data.results;
        return result;
      })
      .catch((err) => alert(err));

    const dataRatedR = await axios
      .get(requests.fetchR)
      .then((response) => {
        const result = response.data.results;
        return result;
      })
      .catch((err) => alert(err));

    const dataDrama = await axios
      .get(requests.fetchDrama)
      .then((response) => {
        const result = response.data.results;
        return result;
      })
      .catch((err) => alert(err));

    dispatch(getPopular(dataPopular));
    dispatch(gethighRate(dataHighRate));
    dispatch(getbestFrom(dataBest));
    dispatch(getnewMovies(dataNew));
    dispatch(getkids(dataKids));
    dispatch(getratedR(dataRatedR));
    dispatch(getdrama(dataDrama));
  };

  return (
    <Switch>
      <Route exact path="/" render={() => <LoginPage />}></Route>
      <Route exact path="/home" render={() => <HomePage />}></Route>
    </Switch>
  );
}

export default App;

// 6369f30dc672e06fc293aceafd86d8d6
// https://api.themoviedb.org/3/movie/550?api_key=6369f30dc672e06fc293aceafd86d8d6
