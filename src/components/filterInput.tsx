import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Form, Button } from 'react-bootstrap'
import React, { ChangeEventHandler, MouseEventHandler } from 'react'

type filterInputProps = {
    value: string,
    onChange: ChangeEventHandler
}

function FilterInput (props: filterInputProps) {
  return <FloatingLabel
        controlId="floatingInput"
        label="Введите текст для поиска"
        className="mb-3"
      >
        <Form.Control onChange={props.onChange} type="text" value={props.value} placeholder="Текст" />
      </FloatingLabel>
}

export default FilterInput
