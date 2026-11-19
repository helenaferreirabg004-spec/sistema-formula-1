
import conexao from "../config/conexao.js";

const PilotoSchema = new conexao.Schema({
    nome: { type: String, required: true },
    nacionalidade: { type: String, required: true },
    idade: { type: Number, required: false },
    numero: { type: Number, required: true },
    equipe: { type: String, required: true }
});

const Piloto = conexao.model("Piloto", PilotoSchema);

export default Piloto;
