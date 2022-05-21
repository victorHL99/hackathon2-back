import connectMongoDB from "../../mongoConection.js";
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