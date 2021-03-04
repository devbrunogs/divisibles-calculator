import { useState } from 'react'
import { sumValues, buildNumbersArray, divisibleFieldRegex } from '../helpers'

function App() {
  const [result, setResult] = useState(0)
  const [numberInput, setNumberInput] = useState(0)
  const [divisibleInput, setDivisibleInput] = useState('3,5')

  function onSubmit() {
    let divisibleBy = buildNumbersArray(divisibleInput, ',')

    setResult(sumValues(numberInput, divisibleBy))
  }

  function onChangeDivisible(e) {
    const updatedValue = e.target.value;

    setDivisibleInput(updatedValue.replace(divisibleFieldRegex, ''))
  }

  function onChangeNumber(e) {
    const updatedValue = e.target.value;

    return updatedValue ? setNumberInput(parseInt(updatedValue)) : false
  }

  return (
    <div className='container'>
      <h2>Calculadora de Divisíveis</h2>
      <div>
        <label htmlFor='divisible'>Digite os números divisíveis separados por vírgula</label>
        <input id='divisible' type='text' onChange={onChangeDivisible} value={divisibleInput} />
      </div>
      <div>
        <label htmlFor='number'>Digite o número que deseja realizar a soma</label>
        <input id='number' type='number' onChange={onChangeNumber} value={numberInput} min="0" step="1" />
      </div>
      <button onClick={onSubmit}>Calcular</button>
      <h2>Seu resultado é {result}</h2>

      <style jsx global>{`
        html, body {
          padding: 0;
          margin: 0;
          font-family: sans-serif;
          background: #efefef;
          color: #444;
        }
        .container {
          margin: 0 auto;
          padding: 16px;
          width: 800px;
        }
        p {
          color: blue;
        }
        label {
          display: block;
          color: #777;
          margin: 16px 0 4px;
          cursor: pointer;
        }
        button {
          cursor: pointer;
          border: none;
          margin-top: 20px;
          background: rgb(50 90 251);
          color: #fff;
          height: 30px;
          width: 100px;
        }
        input {
          border: 1px solid #ccc;
          padding: 8px 4px;
        }
      `}</style>
    </div>
  );
}

export default App