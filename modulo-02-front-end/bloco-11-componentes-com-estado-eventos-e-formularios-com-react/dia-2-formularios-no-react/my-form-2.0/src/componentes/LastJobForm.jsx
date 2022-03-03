import React from "react";

class LastJobForm extends React.Component {
  render() {
    return (
        <fieldset>
          <legend>Último Emprego</legend>
          <div>
            Resumo do Currículo:
            <textarea name="curriculo" maxLength="1000" required />
          </div>
          <div>
            Cargo Anterior:
            <input type="text" name="cargo" maxLength="40" required />
          </div>
          <div>
            Descrição do Cargo:
            <textarea name="descricao-cargo" maxLength="500" required />
          </div>
        </fieldset>
    );
  }
}

export default LastJobForm;
