// =====================================================================
// PARTE 2 - RECEBENDO VÁRIAS PROPS (com desestruturação)
// =====================================================================
//
// Em vez de escrever props.nome, props.curso, props.idade...
// podemos "desestruturar" o objeto direto nos parênteses:
//
//     function CartaoAluno(props)                    -> props.nome
//     function CartaoAluno({ nome, curso, idade })   -> nome
//
// As duas formas fazem a MESMA coisa. A segunda é a mais usada.
//
// Observe também: props podem ser de QUALQUER tipo:
//   texto  -> nome="Ana"          (aspas)
//   número -> idade={17}          (chaves!)
//   URL    -> foto="https://..."
// =====================================================================

// ✏️ TAREFA 2.1
// O componente já recebe "nome" e "curso".
// Adicione também as props "idade" e "foto" dentro das chaves abaixo.
function CartaoAluno({ nome, curso, idade, foto}) {
  return (
    <div className="cartao">
      {/* ✏️ TAREFA 2.2
          Troque o src fixo abaixo pela prop "foto".
          Lembre: para usar uma variável num atributo, use chaves -> src={foto}
          E no alt, coloque o nome do aluno -> alt={nome}                       */}
      <img src={foto} alt="Foto do aluno" />

      <h3>{nome}</h3>
      <p>Curso: {curso}</p>
      <p>idade: {idade}</p>
  

      {/* ✏️ TAREFA 2.3
          Mostre a idade do aluno aqui, no formato:  Idade: 17 anos         */}
    </div>
  )
}

export default CartaoAluno
