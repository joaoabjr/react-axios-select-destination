import React from "react";
import { FormGroup, Label, Form, Input, Card, CardTitle } from "reactstrap";
import InputMask from "react-input-mask";
import { useFormContext } from "react-hook-form";
import { Paragraph } from "../../structure";

function PersonalInformation() {
    const {
        register,
        formState: { errors },
        clearErrors
    } = useFormContext();

    const inputName = register("inputName", {required: true})
    const inputEmail = register("inputEmail", { required: true })
    const inputPhone = register("inputPhone", { required: true })
    const inputCpf = register("inputCpf", { required: true })

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
                            console.log('Ref ',inputName.ref);
                            inputName.onChange(e.target.value);
                            clearErrors("inputName");
                        }}
                        id="name-example"
                        placeholder="e.g. Joao Almeida"
                        tag={InputMask}
                        type="text"
                    />
                </FormGroup>
                {errors.inputName?.type === "required" && (
                    <Paragraph error text="O campo é obrigatório!" />
                )}

                <FormGroup>
                    <Label for="email-example">E-mail</Label>
                    <Input
                        {...inputEmail}
                        onChange={(e) => {
                            inputEmail.onChange(e);
                            clearErrors("inputEmail");
                          }}
                        id="email-example"
                        placeholder="e.g. seuemail@exemplo.com"
                        type="email"
                    />
                </FormGroup>
                {errors.inputEmail && (
                    <Paragraph error text="O campo é obrigatório!" />
                )}

                <FormGroup>
                    <Label for="phone-example">Telefone</Label>
                    <Input
                        {...inputPhone}
                        onChange={(e) => {
                            inputPhone.onChange(e);
                            clearErrors("inputPhone");
                          }}
                        id="phone-example"
                        name="telefone"
                        placeholder="e.g. (35)99123-8456"
                        tag={InputMask}
                        mask="(99)99999-9999"
                    />
                </FormGroup>
                {errors.inputPhone && (
                    <Paragraph error text="O campo é obrigatório!" />
                )}

                <FormGroup>
                    <Label for="cpf-example">CPF</Label>
                    <Input
                        {...inputCpf}
                        onChange={(e) => {
                            inputCpf.onChange(e);
                            clearErrors("inputCpf");
                          }}
                        id="cpf-example"
                        tag={InputMask}
                        name="cpf"
                        mask="999.999.999-99"
                        placeholder="e.g. 123.456.789-00"
                    />
                </FormGroup>
                {errors.inputCpf && (
                    <Paragraph error text="O campo é obrigatório!" />
                )}
            </Form>
        </Card>
    );
}

export default PersonalInformation;
