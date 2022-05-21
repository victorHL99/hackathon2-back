import connectMongoDB from "../../mongoConection.js";

export async function incio(req, res){
    const { banco_dados } = await connectMongoDB();
    try{
        const resultados = await banco_dados.collection("assuntos").find({}).toArray();
        res.send(resultados);
    }
    catch(erro){
        res.send(erro);
    }
}