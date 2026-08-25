const { usuarios, gerarId } = require('../data/usuarios');

function listarUsuarios(req, res) {
    return res.status(200).json(usuarios);
}

function buscarUsuarioPorId(req, res) {
    const id = Number(req.params.id);

    const usuario = usuarios.find(
        usuario => usuario.id === id
    );

    if (!usuario) {
        return res.status(404).json({
            erro: 'Usuário não encontrado'
        });
    }

    return res.status(200).json(usuario);
}
function cadastrarUsuario(req, res) {
    const { nome, email } = req.body;

    if (!nome || !email) {
        return res.status(400).json({
            error: 'Os campos nome e email são obrigatórios'
        });
    }

    const novoUsuario = {
        id: gerarId(),
        nome,
        email
    };

    usuarios.push(novoUsuario);

    return res.status(201).json({
        data: novoUsuario
    });
}
function atualizarUsuario(req, res) {
    const id = Number(req.params.id);

    const indice = usuarios.findIndex(
        usuario => usuario.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            erro: 'Usuário não encontrado'
        });
    }

    const { nome, email } = req.body;

    usuarios[indice] = {
        ...usuarios[indice],
        nome: nome ?? usuarios[indice].nome,
        email: email ?? usuarios[indice].email
    };

return res.status(200).json(usuarios[indice]);
}
function removerUsuario(req, res) {
    const id = Number(req.params.id);

    const indice = usuarios.findIndex(
        usuario => usuario.id === id
    );

    if (indice === -1) {
        return res.status(404).json({
            erro: 'Usuário não encontrado'
        });
    }

    usuarios.splice(indice, 1);

    return res.status(200).json({
        mensagem: 'Usuário removido com sucesso'
    });
}
module.exports = {
    listarUsuarios,
    buscarUsuarioPorId,
    cadastrarUsuario,
    atualizarUsuario,
    removerUsuario
};