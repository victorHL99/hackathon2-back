import connectMongoDB from "../../mongoConection.js";
import dotenv from "dotenv";

dotenv.config();

const { banco_dados } = await connectMongoDB();

export async function solicitarQuestao(req, res){
    //verifica se a questão existe
    //se existir, personaliza um objeto para retornar
    res.send("OK questões");
}

export async function pesquisarAssuntos(req, res){

    const requisicao = banco_dados.collection("assuntos").find({}).toArray();
    requisicao.then((r)=>{
        res.send(r);
        console.log(r);
    });
    requisicao.catch(()=> {
        res.send("Erro");
    });
//     try {
//         const requisicao = await banco_dados.collection("Assuntos").find().toArray();
        
//     }catch(error){
//         res.send("Erro");
//     }
}

export async function cadastrarAssunto(req, res){
    console.log("passei aqui");
    let assunto = {
    "titulo":"Adição",
    "questoes": []
    }
    const requisicao = banco_dados.collection("assuntos").insertOne({...assunto});
    requisicao.then(() =>{
        res.send("Deu certo");
    });
    requisicao.catch(() => {
        res.send("Erro")
    })

}
