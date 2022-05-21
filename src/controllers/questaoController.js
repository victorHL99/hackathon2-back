import connectMongoDB from "../../mongoConection.js";
import dotenv from "dotenv";
import { ObjectId } from "mongodb";

dotenv.config();

const { banco_dados } = await connectMongoDB();

export async function solicitarQuestao(req, res){
    let idQuestao = req.params.id;

    const requisicao = banco_dados.collection("questoes").findOne({_id: ObjectId (idQuestao)});
    requisicao.then((r)=>{
        res.status(200).send(r);
    });
    requisicao.catch(()=> {
        res.status(404).send("Erro ou solicitar questões");
    });
}