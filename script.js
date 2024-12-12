let user = prompt ('Digite seu usuário:')
let senha = prompt ('Digite sua senha:')

if (senha === 'Admin' || senha === 'admin') {
    document.write (`Olá ${user}, seja bem vindo!`)
} 
else {
    document.write ('Você não tem acesso de administrador.')
}