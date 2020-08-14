import React from "react";
import "./styles.scss";
import DataField from "../DataField";
import Select from "../Select";
import currencies from "../../common/currencies";

function FormQuotes(props) {
  const currencyRef = React.createRef();
  const quoteDateRef = React.createRef();
  const [submitted, setSubmitted] = React.useState(false);

  const validate = () => !!currencyRef.current.value;

  const submit = event => {
    event.preventDefault();
    setSubmitted(true);
    if (validate()) {
      props.submit({
        currency: currencyRef.current.value,
        date: quoteDateRef.current.value
      });
    }
  };
  return (
    <form onSubmit={submit} noValidate>
      <label>
        Selecciona la moneda de referancia
        <Select
          submitted={submitted}
          items={currencies}
          name="currency"
          ref={currencyRef}
          required
          disabled={props.loading}
        />
        <div className="error-input">Seleccione una moneda</div>
      </label>
      <label>
        Selecciona la fecha de cotización
        <DataField ref={quoteDateRef} disabled={props.loading} />
      </label>
      <button type="submit" disabled={props.loading}>
        Buscar cotizaciones
      </button>
    </form>
  );
}

export default FormQuotes;
