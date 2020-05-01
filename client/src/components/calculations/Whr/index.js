import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { P } from "../Bmi"
import { CalculateInput, CalculateOutput, SexCheckbox } from "../Input"

export const WHR = () => {
  const [data, setData] = useState({ hips: 0, waist: 0 })
  const [whr, setWhr] = useState(0)

  const setValues = (event) => {
    setData({ ...data, [event.target.name]: Number(event.target.value) })
  }

  useEffect(() => {
    if (data.hips > 0 && data.waist > 0) {
      setWhr(data.waist / data.hips)
    }
  }, [data])

  return (
    <Container className="shadow-lg p-3 my-3">
      <h1>Kalkulator WHR</h1>

      <Row xs={1} md={2}>
        <Col className="d-flex flex-column justify-content-between">
          <SexCheckbox />

          <div>
            <CalculateInput
              title="Biodra"
              name="hips"
              placeholder="Jesteśmy super"
              unit="cm"
              setValues={setValues}
            />
            <CalculateInput
              title="Talia"
              name="waist"
              placeholder="Możemy wszystko"
              unit="cm"
              setValues={setValues}
            />
          </div>

          <CalculateOutput value={whr} placeholder="Zachowaj spokój" />
        </Col>
        <Col>
          <h3>Dla kobiet</h3>
          <P>
            WHR ≥ 0,8 - (lub obwodu talii powyżej 88 cm) świadczy o sylwetce typu
            "jabłko"
          </P>
          <P>{'WHR < 0,8 - świadczy o sylwetce typu "gruszka"'}</P>
          <h3>Dla mężczyzn</h3>
          <P>
            WHR ≥ 1 - (lub obwodu talii powyżej 102 cm) świadczy o sylwetce typu
            "jabłko"
          </P>
          <P>{'WHR < 1 - świadczy o sylwetce typu "gruszka"'}</P>
        </Col>
      </Row>
    </Container>
  )
}
