// =====================================================================
// PARTE 3 - PROPS QUE MUDAM O COMPORTAMENTO (boolean + valor padrão)
// =====================================================================
//
// Uma prop não serve só para mostrar texto. Ela pode DECIDIR o que
// aparece na tela. Exemplo com uma prop booleana (true/false):
//
//     <Produto emPromocao={true} />    -> mostra o selo de promoção
//     <Produto emPromocao={false} />   -> não mostra
//     <Produto emPromocao />           -> escrever só o nome já vale true!
//
// Renderização condicional com &&:
//     {emPromocao && <span>PROMOÇÃO</span>}
//     "Se emPromocao for verdadeiro, mostra o <span>"
//
// VALOR PADRÃO: se o pai NÃO enviar uma prop, ela chega como undefined.
// Podemos definir um valor padrão na desestruturação:
//     function Produto({ estoque = 0 })
// =====================================================================

// ✏️ TAREFA 3.1
// Adicione a prop "emPromocao" na lista abaixo, com valor padrão false.
//   Ex.: { nome, preco, emPromocao = false }

function Produto({ nome, preco,emPromocao = false }) {
  return (
    // ✏️ TAREFA 3.3 (desafio)
    // Faça a className mudar conforme a prop:
    //   se emPromocao for true -> "produto promocao"
    //   senão                  -> "produto"
    // Dica (operador ternário):  className={emPromocao ? '...' : '...'}
    <div className="produto">
      <h3>{nome}</h3>

      {/* preco é um NÚMERO, por isso usamos toFixed(2) para mostrar 2 casas decimais */}
      <p>R$ {preco.toFixed(2)}</p>

      {/* ✏️ TAREFA 3.2
          Mostre o selo abaixo SOMENTE se emPromocao for true.
          Use o operador &&  (veja a explicação no topo do arquivo).     */}
      <span className="selo">PROMOÇÃO</span>
    </div>
  )
}

export default Produto
