import connectMongoDB from "../../mongoConection.js";
import dotenv from "dotenv";
import { ObjectId } from "mongodb";

dotenv.config();

const { banco_dados } = await connectMongoDB();

export async function solicitarAssuntos(req, res){

    const requisicao = banco_dados.collection("assuntos").find({}).toArray();
    requisicao.then((r)=>{
        res.status(200).send(r);
    });
    requisicao.catch(()=> {
        res.status(404).send("Erro ou solicitar assuntos");
    });
}

export async function solicitarQuestao(req, res){
    let idQuestao = req.params.id;

    const requisicao = banco_dados.collection("questoes").findOne({_id: ObjectId ("628831ec3ec26d8fe3753b8b")});
    requisicao.then((r)=>{
        res.status(200).send(r);
    });
    requisicao.catch(()=> {
        res.status(404).send("Erro ou solicitar questões");
    });
}

export async function cadastrarQuestao(){
    
    let objeto = {
        enunciado: "Calcule 15 + 15 :",
        alternativas: [
            {id: 1 , coteudo: "1515"},
            {id: 2 , coteudo: "50"},
            {id: 3 , coteudo: "60"},
            {id: 4 , coteudo: "30"}
        ],
        resposta: 4,
        assuntoId: "62882c2010237159bf7638ff"

    };

    const requisicao = banco_dados.collection("questoes").insertOne({...objeto});
    requisicao.then((r)=>{
        console.log("sucesso no cadastro")
        console.log(r);
    });
    requisicao.catch(()=> {
        console.log("Erro");
    });

}
