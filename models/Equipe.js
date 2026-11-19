import conexao from "../config/conexao.js";

const EquipeSchema = new conexao.Schema({
    nome: { type: String, required: true },
    pais: { type: String, required: true },
    chefe: { type: String, required: false },
    anoFundacao: { type: Number, required: false }
});

const Equipe = conexao.model("Equipe", EquipeSchema);

export default Equipe;
