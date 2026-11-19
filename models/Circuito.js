import conexao from "../config/conexao.js";

const CircuitoSchema = new conexao.Schema({
    nome: { type: String, required: true },
    pais: { type: String, required: true },
    cidade: { type: String, required: true },
    extensao: { type: Number, required: false },
    voltas: { type: Number, required: false },
    recorde: { type: String, required: false }
});

const Circuito = conexao.model("Circuito", CircuitoSchema);

export default Circuito;
