import React from 'react';
import FormQuotes from './components/FormQuotes';
import ResultQuotes from './components/ResultQuotes';
import Loader from './components/Loader';
import getChange from './services/getChange';
import './App.scss';

function App() {
  const [currency, setCurrency] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [quotes, setQuotes] = React.useState([]);
  const submit =(data)=>{
    setLoading(true);
    setCurrency(data.currency);
    getChange(data.currency, data.date).then((data)=>{
      setQuotes(data);
      setLoading(false);
    });
  };
  return (<>
    <main>
      <h1>Histórico de cotizaciones</h1>
      <FormQuotes submit={submit} loading={loading}></FormQuotes>
      <div style={{textAlign: 'center'}}>
      {loading
      ? <Loader/>
      :<ResultQuotes quotes={quotes} currentCurrency={currency}></ResultQuotes>}
      </div>
    </main>
  </>);
}

export default App;
