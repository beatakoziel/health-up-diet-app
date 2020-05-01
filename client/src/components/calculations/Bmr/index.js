import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import styled from "styled-components"
import { CalculateInput, CalculateOutput, SexCheckbox } from "../Input"

export const BMR = () => {
  const [data, setData] = useState({ weight: 0, height: 0, age: 0 })
  const [bmr, setBmr] = useState(0)
  const [sex, setSex] = useState(0)

  const setValues = (event) => {
    setData({ ...data, [event.target.name]: Number(event.target.value) })
  }

  useEffect(() => {
    if (data.weight > 0 && data.height > 0 && sex > 0 && data.age > 0) {
      sex === 1
        ? setBmr(9.99 * data.weight + 6.25 * data.height - 4.92 * data.age + 5)
        : setBmr(9.99 * data.weight + 6.25 * data.height - 4.92 * data.age - 161)
    } else {
      setBmr(0)
    }
  }, [data, sex])

  return (
    <Container className="shadow-lg p-3 my-3">
      <h1>Kalkulator BMR</h1>

      <Row xs={1} md={2}>
        <Col className="d-flex flex-column justify-content-between">
          <SexCheckbox
            onChangeMan={() => setSex(1)}
            onChangeWoman={() => setSex(2)}
          />

          <div>
            <CalculateInput
              title="Waga"
              name="weight"
              placeholder="To zostanie naszą tajemnicą"
              unit="kg"
              setValues={setValues}
            />
            <CalculateInput
              title="Wzrost"
              name="height"
              placeholder="Od stóp do głów"
              unit="cm"
              setValues={setValues}
            />
            <CalculateInput
              title="Wiek"
              name="age"
              placeholder="Żyj 100 lat !"
              unit="lat"
              setValues={setValues}
            />
          </div>
          <CalculateOutput value={bmr} placeholder="Damy rade" />
        </Col>
        <Col>
          <h3>Kalkulator podstawowej przemiany materii według wzoru Mifflina</h3>
          <P>
            Wzór Mifflina służy do obliczenia podstawowej przemiany materii - PPM.
            Podstawową przemianą materii ( w skrócie PPM lub BMR z ang. basal
            metabolic rate) nazywamy najniższy poziom zapotrzebowania energetycznego
            umożliwiający zachowanie podstawowych funckji w optymalnych warunkach
            bytowych. Uzyskany wynik odnosi się jedynie do pracy układów i narządów,
            to wartość, poniżej której nie powinniśmy schodzić przy planowaniu diety.
            PPM najbardziej przydatne jest przy określaniu całkowitej przemiany
            materii ( w skrócie CPM lub TDEE z ang. total taily energy expenditure).
          </P>
        </Col>
      </Row>
    </Container>
  )
}

export const P = styled.p`
  font-size: 0.9em;
  margin: 3px 0 3px 0;
`
