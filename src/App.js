import React, {useState} from 'react';
import './App.css';
import Cell from './Cells/Cell'

function App() {
  let [result, setResult] = useState('')
  let screenLengthRange = 11;
  let opsArray = ['+', '-', '*', '/'];

  const handleOperatorClick = (val) => {
    let key = result.slice(-1);
    if (result.length === 0) {
      setResult("");
    } else if (opsArray.indexOf(key) !== -1) {
      let len = result.length;
      setResult(result.substr(0, len - 1) + val);
    } else {
      setResult(result + val);
    }
  }

  const handleResult = (e) => {
    let val = e.target.innerText;
    let isOp = opsArray.indexOf(val) !== -1;

    if ((['=', 'AC', 'C'].indexOf(val) === -1) && (result.length + 1 >= screenLengthRange)) {
      alert('Length should not be greater than 10.');
      return;
    }

    if (val === '=') {
      let values = result.split(/[-+*/]/);
      let len = values[0].length;
      let op = result[len];
      let res = '';
      switch(op) {
        case '+': res = (Number(values[0]) + Number(values[1])).toString(); break;
        case '-': res = (Number(values[0]) - Number(values[1])).toString(); break;
        case '*': res = (Number(values[0]) * Number(values[1])).toString(); break;
        case '/': res = (Number(values[0]) / Number(values[1])).toString(); break;
        default: setResult('');
      }
      res.length >= screenLengthRange - 1 ? setResult(res.slice(0,10) + "...") : setResult(res);
    } else if (val === 'AC') {
      setResult('');
    } else if (val === 'C') {
      setResult(result.slice(0, -1));
    } else if (isOp) {
      handleOperatorClick(val);
    } else {
      setResult(result + val);
    }
  }
  return (
    <div className="App">
      <div className="Result">{result}</div>
      <Cell val={'AC'} clickHandler={handleResult}/>
      <Cell val={''} clickHandler={handleResult}/>
      <Cell val={'C'} clickHandler={handleResult}/>
      <Cell val={'-'} op clickHandler={handleResult}/>

      <Cell val={'7'} clickHandler={handleResult}/>
      <Cell val={'8'} clickHandler={handleResult}/>
      <Cell val={'9'} clickHandler={handleResult}/>
      <Cell val={'/'} op clickHandler={handleResult}/>

      <Cell val={'4'} clickHandler={handleResult}/>
      <Cell val={'5'} clickHandler={handleResult}/>
      <Cell val={'6'} clickHandler={handleResult}/>
      <Cell val={'*'} op clickHandler={handleResult}/>

      <Cell val={'1'} clickHandler={handleResult}/>
      <Cell val={'2'} clickHandler={handleResult}/>
      <Cell val={'3'} clickHandler={handleResult}/>
      <Cell val={'+'} op clickHandler={handleResult}/>

      <Cell val={'0'} clickHandler={handleResult}/>
      <Cell />
      <Cell val={'.'} clickHandler={handleResult} />
      <Cell val={'='} op clickHandler={handleResult}/>
    </div>
  );
}

export default App;
