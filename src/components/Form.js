import React from "react";
import './styles/Form.css';

class Form extends React.Component {

    render() {

        return (
            <div id="section-form">
                <label>
                    Nome:
                    <input id="form-name" type="text" data-testid="name-input"></input>
                </label>
                <label>
                    Descrição:
                    <textarea id="form-textarea" data-testid="description-input"></textarea >
                </label>
                <label>
                    Atr1
                    <input id="form-at1" type="number" data-testid="attr1-input" placeholder="Atributo1"></input>
                </label>
                <label>
                    Atr2
                    <input id="form-at2" type="number" data-testid="attr2-input" placeholder="Atributo2"></input>
                </label>
                <label>
                    Atr3
                    <input id="form-at3" type="number" data-testid="attr3-input" placeholder="Atributo3"></input>
                </label>
                <label>
                    Link image:
                    <input id="form-imginput" type="text" data-testid="image-input" placeholder="imageLink"></input>
                </label>
                <label id="select-label">
                Raridade:
                <select id="form-select" data-testid="rare-input" name="raridade">
                    <option value="normal">Normal</option>
                    <option value="raro">Raro</option>
                    <option value="muito raro">Muito raro</option>
                </select>
                </label>
                <label id="check-label">
                    <input id="form-check" type="checkbox" data-testid="trunfo-input"></input>
                    Super Trunfo
                </label>
                <button id="form-button" data-testid="save-button">Salvar</button>
            </div >
        );
    }
}

export default Form;