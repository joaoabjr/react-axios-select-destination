import React from "react";
import { FormGroup, Label, Form, Card, CardTitle } from "reactstrap";
import InputMask from "react-input-mask";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";
import { Paragraph } from "../../structure";

const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  height: 36px;
  border: #d3d3d3 1px solid;
`;

function PersonalInformation() {
  const {
    register,
    formState: { errors },
    clearErrors,
  } = useFormContext();

  const inputName = register("inputName", { required: true });
  const inputEmail = register("inputEmail", { required: true });
  const inputPhone = register("inputPhone", { required: true });
  const inputCpf = register("inputCpf", { required: true });

  return (
    <Card
      className="shadow p-3 mb-5 bg-white rounded card-size"
      color="light"
      body
    >
      <CardTitle className="text-center" tag="h6">
        Dados pessoais
      </CardTitle>
      <Form>
        <FormGroup>
          <Label for="name-example">Nome</Label>
          <Input
            {...inputName}
            onChange={(e) => {
              inputName.onChange(e);
              clearErrors("inputName");
            }}
            id="name-example"
            placeholder="e.g. Joao Almeida"
            tag={InputMask}
            type="text"
          />
          {errors.inputName && (
            <Paragraph error text="O campo é obrigatório!" />
          )}
        </FormGroup>

        <FormGroup>
          <Label for="email-example">E-mail</Label>
          <Input
            {...inputEmail}
            onChange={(e) => {
              inputEmail.onChange(e);
              clearErrors("inputEmail");
            }}
            name="inputEmail"
            id="email-example"
            placeholder="e.g. seuemail@exemplo.com"
            type="email"
          />
          {errors.inputEmail && (
            <Paragraph error text="O campo é obrigatório!" />
          )}
        </FormGroup>

        <FormGroup>
          <Label for="phone-example">Telefone</Label>
          <Input
            {...inputPhone}
            onChange={(e) => {
              inputPhone.onChange(e);
              clearErrors("inputPhone");
            }}
            id="phone-example"
            name="inputPhone"
            placeholder="e.g. (35)99123-8456"
            as={InputMask}
            mask="(99)99999-9999"
            type="tel"
          />
          {errors.inputPhone && (
            <Paragraph error text="O campo é obrigatório!" />
          )}
        </FormGroup>

        <FormGroup>
          <Label for="cpf-example">CPF</Label>
          <Input
            {...inputCpf}
            onChange={(e) => {
              inputCpf.onChange(e);
              clearErrors("inputCpf");
            }}
            id="cpf-example"
            name="inputCpf"
            placeholder="e.g. 123.456.789-00"
            mask="999.999.999-99"
            as={InputMask}
          />
          {errors.inputCpf && <Paragraph error text="O campo é obrigatório!" />}
        </FormGroup>
      </Form>
    </Card>
  );
}

export default PersonalInformation;
