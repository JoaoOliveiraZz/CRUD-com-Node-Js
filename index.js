(async () => {

    const Database = require('./Database');
    const Usuario = require('./Usuario');

    await Database.sync();

    // Função de criar usuáriu
    function criarUsuario (Nome, Email){
        Usuario.create({
            Nome: Nome,
            Email: Email
        })
    }
    
    // Selecionando usuário pelo Id
    function selectUsuarioById(id){
       return Usuario.findByPk(id);
    }

    // Selecionando todos os usuários
    function selectAllUsers(){
        const selectAll = Usuario.findAll;
        console.log(selectAll);
    }

    // Deltando um usuário
    function deleteUser(id){
        Usuario.destroy({where : {Id : id}});
    }
    
    // Alterando um registro de usuário
    async function alterUser(id, Nome){
            user = await Usuario.findByPk(id);
            user.Nome = Nome;
            await user.save();
    }

    await criarUsuario('Alea Tório', 'Aleatório@hotmail.com');
    alterUser(1, 'Teste');
    deleteUser(3);



})();