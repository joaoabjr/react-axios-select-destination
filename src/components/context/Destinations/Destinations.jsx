import React, { useState, useEffect, useMemo } from "react";
import Select from "react-select";
import api from "../../../../services/api";
import { useFormContext, Controller } from "react-hook-form";
import { Paragraph } from "../../structure";
import { FormGroup, Label, Form, Card, CardTitle } from "reactstrap";

function Destinations() {
    const [countries, setCountries] = useState("");
    const [cities, setCities] = useState("");
    const {
        register,
        formState: { errors },
        control,
    } = useFormContext();

    const countriesFiltered = useMemo(() => {
        if (countries) {
            return countries.map((country) => ({
                value: country.code,
                label: country.name_ptbr,
            }));
        }
        return [];
    }, [countries]);

    const citiesFiltered = useMemo(() => {
        if (cities) {
            return cities.map((city) => ({
                value: city.code,
                label: city.name_ptbr ? city.name_ptbr : city.name,
            }));
        }
        return [];
    }, [cities]);

    useEffect(() => {
        api.get("/country")
            .then((response) => {
                setCountries(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    useEffect(() => {
        api.get("/city")
            .then((response) => {
                setCities(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <Card
            className="shadow p-3 mb-5 bg-white rounded card-size"
            color="light"
            body
        >
            <CardTitle className="text-center" tag="h6">
                Destinos de interesse
            </CardTitle>
            <Form>
                <FormGroup>
                    <Label for="countryExample">País</Label>
                    <Controller
                        control={control}
                        name="inputCountry"
                        rules={{ required: true }}
                        render={({ field: { onchange, value } }) => (
                            <Select
                                onChange={onchange}
                                value={value}
                                placeholder="Selecione os países..."
                                options={countriesFiltered}
                                isMulti
                            />
                        )}
                    />
                </FormGroup>
                {errors.inputCountry && (
                    <Paragraph error text="O campo é obrigatório!" />
                )}

                <FormGroup>
                    <Label for="cityExample">Cidade</Label>
                    <Controller
                        control={control}
                        name="inputCity"
                        rules={{ required: true }}
                        render={({ field: { onchange, value } }) => (
                            <Select
                                onChange={onchange}
                                value={value}
                                placeholder="Selecione as cidadeds..."
                                options={citiesFiltered}
                                isMulti
                            />
                        )}
                    />
                </FormGroup>
                {errors.inputCity && (
                    <Paragraph error text="O campo é obrigatório!" />
                )}
            </Form>
        </Card>
    );
}

export default Destinations;
