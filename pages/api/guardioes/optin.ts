
import { createClient } from "@supabase/supabase-js";
import { NextApiRequest, NextApiResponse } from "next";
//chaves que estarão no .env
// const SUPABASE_URL = process.env.SUPABASE_URL;
// const SUPABASE_KEY = process.env.SUPABASE_KEY; 
const dbClient = createClient("https://joxjgdureqxzledklsuv.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpveGpnZHVyZXF4emxlZGtsc3V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MTAwMzAsImV4cCI6MjAxMjA4NjAzMH0.RU-4ZG4m0qJMp0hfOGyut1S5rfm3fKhHzgzZpsNa_9o")

//configurando os status padrões
const httpStatus = {
    Success: 200,
    BadRequest: 400,
    Failure: 500
}
//aqui você colocara os metodos CRUD 
const controllerByMethods = {

    async POST(req:NextApiRequest, res:NextApiResponse){
    // veremos mais como utilizar esse metodo para cadastrar no banco de dados
        const {nome, classe, subclasse, descricao, imagem} = req.body
   
    //Aqui colocaremos os valores pegos lá no modal no banco de dados
        await dbClient.from("guardian").insert({nome:nome, classe:classe, subclasse:subclasse, descricao: descricao, imagem:imagem})
        await dbClient.auth.admin.createUser({})
        res
        .status(httpStatus.Success)
        .json({ messsage:"Cadastrado", nome });
        return
    },
    async GET(req:NextApiRequest, res:NextApiResponse){
        // pegando os dados do dbClient no caso data = dados error = caso não seja possivel conectar devido a algum erro
        const {data, error} = await dbClient.from('guardian').select("*")
        if(data){
            res
                .status(httpStatus.Success)
                .json({message: "Get request!", data});
                return
        } 
        res.status(httpStatus.BadRequest)
            .json({message: "Não foi possivel usar o methodo", error})
            return
    }
}



export default async function handler (req:NextApiRequest, res:NextApiResponse) {
    //handler será que metodo foi requisitado, caso o tal metodo não exista então um erro ocorrerá
    const controller = controllerByMethods[req.method as string];
    // if(!controller){
    //     res.status(httpStatus.Failure).json({ error: "Method not allowed" });;
    //     return;
    // }
    await controller(req, res);
}