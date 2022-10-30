import React from "react";
import { Destinations, PersonalInformation } from "../../components/context";
import { Button } from "../../components/structure";
import { Container, Input } from "reactstrap";
import styled from "styled-components";
import { useForm, FormProvider } from "react-hook-form";

const BoxInformation = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 96px;
    align-items: center;
    justify-content: center;
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

function Home() {
    const methods = useForm({reValidateMode: "onSubmit"});
    const { handleSubmit } = methods;
    const onSubmit = (data) => console.log(data);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit())}>
                <Container>
                    <BoxInformation>
                        <PersonalInformation />
                        <Destinations />
                    </BoxInformation>
                    <Footer>
                        <Button type="submit" title="Entrar" />
                    </Footer>
                </Container>
            </form>
        </FormProvider>
    );
}

export default Home;
