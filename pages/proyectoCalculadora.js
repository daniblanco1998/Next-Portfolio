import { useState } from 'react'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import Input from '../components/proyecto1/Input'
import Button from '../components/proyecto1/Button'
import Container from '../components/proyecto1/Container'
import Section from '../components/proyecto1/Section'
import Balance from '../components/proyecto1/Balance'

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit
  for (let i = 0; i < years; i++){
    total = (total + contribution) * (rate + 1)
  }

  return Math.round(total)
}

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'ARS',
  minimumFractionDigits: 0,
  maxinmumfractionDigits: 2,
})
function App() {
  const [balance, setBalance] = useState('')
  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(Number(deposit), Number(contribution), Number(years), Number(rate))
    setBalance(formatter.format(val))
  }
  return (
    <Container>
      <Section>
        <Formik
          initialValues = {{deposit: '', contribution: '', years: '', rate: ''}}
          onSubmit= {handleSubmit}
          validationSchema={Yup.object({
            deposit: Yup
                  .number()
                  .required('Campo obligatorio')
                  .typeError('Los datos ingresados deben ser numeros'),
            contribution: Yup
                      .number()
                      .required('Campo obligatorio')
                      .typeError('Los datos ingresados deben ser numeros'),
            years: Yup
                .number()
                .required('Campo obligatorio')
                .typeError('Los datos ingresados deben ser numeros'),
            rate: Yup
              .number()
              .required('Campo obligatorio')
              .typeError('Los datos ingresados deben ser numeros')
              .min(0, 'ha pasado el valor minimo(min: 0)')
              .max(1, 'ha pasado el valor maximo(max: 1)'),
          })}
        >
          <Form>
            <Input name='deposit' label='Depósito inicial'/>
            <Input name='contribution' label='Contribución anual'/>
            <Input name='years' label='Años'/>
            <Input name='rate' label='Interes estimado'/>
            <Button type='submit'>Calcular</Button>
          </Form>
        </Formik>
        {balance !== '' ? <Balance>Balance final: {balance}</Balance> : null}
      </Section>
    </Container>
  );
}

export default App;