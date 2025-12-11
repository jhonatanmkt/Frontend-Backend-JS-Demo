// --- BANCO DE DADOS (MÁQUINA DE ESTADOS) ---
// Define todos os cenários possíveis e suas conexões
const cenarios = {
    inicio: {
        titulo: "--- ORIGEM DA LEI ---",
        texto: "Uma nova ideia de lei surgiu. Quem é o autor dessa proposta?",
        opcoes: [
            { texto: "Deputado Federal", proximo: "camara_inicio" },
            { texto: "Senador", proximo: "senado_inicio" },
            { texto: "Presidente da República", proximo: "camara_inicio" }
        ]
    },
    camara_inicio: {
        titulo: "--- CÂMARA DOS DEPUTADOS (CASA INICIADORA) ---",
        texto: "O projeto passou pelas comissões (CCJ, etc) e está em votação no Plenário.",
        opcoes: [
            { texto: "Aprovar Projeto", proximo: "senado_revisora" },
            { texto: "Rejeitar Projeto", proximo: "arquivado" },
            { texto: "Aprovar com Emendas (Mudanças)", proximo: "senado_revisora" }
        ]
    },
    senado_revisora: {
        titulo: "--- SENADO FEDERAL (CASA REVISORA) ---",
        texto: "O projeto veio da Câmara. O Senado está revisando o texto.",
        opcoes: [
            { texto: "Aprovar sem mudanças", proximo: "mesa_presidente" },
            { texto: "Alterar o texto (Emenda)", proximo: "volta_camara" },
            { texto: "Rejeitar o projeto", proximo: "arquivado" }
        ]
    },
    volta_camara: {
        titulo: "--- RETORNO À CÂMARA ---",
        texto: "O Senado alterou o texto. A Câmara precisa decidir se aceita as alterações.",
        opcoes: [
            { texto: "Aceitar mudanças do Senado", proximo: "mesa_presidente" },
            { texto: "Recusar mudanças (Manter original)", proximo: "mesa_presidente" }
        ]
    },
    senado_inicio: {
        titulo: "--- SENADO FEDERAL (CASA INICIADORA) ---",
        texto: "O projeto começou aqui. Está em votação no plenário do Senado.",
        opcoes: [
            { texto: "Aprovar", proximo: "camara_revisora" },
            { texto: "Rejeitar", proximo: "arquivado" }
        ]
    },
    camara_revisora: {
        titulo: "--- CÂMARA DOS DEPUTADOS (CASA REVISORA) ---",
        texto: "Deputados analisam o projeto aprovado pelos Senadores.",
        opcoes: [
            { texto: "Aprovar integralmente", proximo: "mesa_presidente" },
            { texto: "Alterar (Emendar)", proximo: "volta_senado" },
            { texto: "Rejeitar", proximo: "arquivado" }
        ]
    },
    volta_senado: {
        titulo: "--- RETORNO AO SENADO ---",
        texto: "A Câmara alterou o texto do Senado. A palavra final sobre a mudança é do Senado.",
        opcoes: [
            { texto: "Finalizar texto para Sanção", proximo: "mesa_presidente" }
        ]
    },
    mesa_presidente: {
        titulo: "--- MESA DO PRESIDENTE DA REPÚBLICA ---",
        texto: "O Congresso aprovou! O Presidente tem 15 dias para decidir.",
        opcoes: [
            { texto: "Sancionar (Aprovar)", proximo: "lei_aprovada" },
            { texto: "Veto Total", proximo: "analise_veto" },
            { texto: "Veto Parcial", proximo: "lei_aprovada_parcial" }
        ]
    },
    analise_veto: {
        titulo: "--- CONGRESSO NACIONAL (ANÁLISE DE VETO) ---",
        texto: "O Presidente vetou. Deputados e Senadores se reúnem para decidir o destino do veto.",
        opcoes: [
            { texto: "Aceitar o Veto (Fim)", proximo: "arquivado" },
            { texto: "Derrubar o Veto", proximo: "lei_promulgada_congresso" }
        ]
    },
    // FINAIS
    arquivado: {
        titulo: "🔴 FIM: ARQUIVADO",
        texto: "O projeto foi rejeitado ou o veto foi mantido. Não virou lei.",
        opcoes: []
    },
    lei_aprovada: {
        titulo: "🟢 FIM: LEI SANCIONADA",
        texto: "O Presidente sancionou e a lei foi publicada no Diário Oficial!",
        opcoes: []
    },
    lei_aprovada_parcial: {
        titulo: "🟡 FIM: LEI COM VETOS",
        texto: "A lei entrou em vigor, mas algumas partes foram cortadas pelo Presidente.",
        opcoes: []
    },
    lei_promulgada_congresso: {
        titulo: "🟢 FIM: LEI PROMULGADA PELO CONGRESSO",
        texto: "O Congresso derrubou o veto do Presidente e fez a lei valer à força.",
        opcoes: []
    }
};

// --- LÓGICA DO JOGO (ENGINE COMPATÍVEL COM NAVEGADOR) ---

function processarCenario(chaveCenario) {
    const cenario = cenarios[chaveCenario];
    
    // 1. Registra no console para criar o histórico (bom para print)
    console.log(`\n%c${cenario.titulo}`, "color: yellow; font-weight: bold;");
    console.log(cenario.texto);

    // 2. Monta a mensagem visual para a janela do usuário
    let mensagemPrompt = `${cenario.titulo}\n\n${cenario.texto}\n\n`;

    // Verifica se é fim de jogo
    if (cenario.opcoes.length === 0) {
        console.log("%c[FIM DA SIMULAÇÃO]", "color: red");
        alert(mensagemPrompt + "FIM DA SIMULAÇÃO.");
        return;
    }

    // Lista opções
    mensagemPrompt += "DIGITE O NÚMERO DA OPÇÃO:\n";
    cenario.opcoes.forEach((opcao, index) => {
        mensagemPrompt += `[${index + 1}] ${opcao.texto}\n`;
        // Log das opções no console também
        console.log(`   [${index + 1}] ${opcao.texto}`);
    });

    // 3. Pergunta ao usuário usando prompt do navegador
    // setTimeout garante que o console atualize antes do prompt aparecer
    setTimeout(() => {
        const resposta = prompt(mensagemPrompt);

        // Se usuário cancelar
        if (resposta === null) {
            console.log("Usuário cancelou.");
            return;
        }

        const indice = parseInt(resposta) - 1;

        if (indice >= 0 && indice < cenario.opcoes.length) {
            console.log(`%c> Escolha: ${cenario.opcoes[indice].texto}`, "color: cyan");
            const proximoPasso = cenario.opcoes[indice].proximo;
            processarCenario(proximoPasso); // Chama o próximo passo
        } else {
            alert("Opção inválida! Tente novamente.");
            processarCenario(chaveCenario); // Repete
        }
    }, 100);
}

// --- INÍCIO ---
console.clear();
console.log("%cSIMULADOR LEGISLATIVO INICIADO...", "background: green; color: white; padding: 5px;");
processarCenario('inicio');