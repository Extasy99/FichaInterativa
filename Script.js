const agentesData = {
    "YORU": {
        bio: "Agente nativo do Japão que usa fendas na realidade...",
        habilidades: [
            { // <-- Faltava abrir esta chaveta no PONTO CEGO
                nome: "C: PONTO CEGO", 
                desc: "Arremessa um fragmento dimensional que cega os inimigos...", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/295ab26ef6097d28da0bef9c9b4c6185a80071c8.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ea733bf224ae53e8e53cabfae19bfc12ce9fcda3-512x512.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=48&w=48&crop=center"
            },
            { 
                nome: "Q: DISTRAÇÃO", 
                desc: "Cria o som de passos falsos para enganar os adversários.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ef008c8e848a054f88e88f173c03279a45a1c796.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/43416e5b34cd80c691ed0cc3b69fc73fae93f923-256x256.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=48&w=48&crop=center" 
            },
            
            { 
                nome: "E: PASSAGEM DIMENSIONAL", 
                desc: "Posiciona um portal no chão para um teletransporte rápido.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/be352287c5704d82d1acbff5ecdee5187755d235.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone:  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/580f94ecab50ae7c01279dcd0adb86f9c65362c3-512x512.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=48&w=48&crop=center" 
            },
            { 
                nome: "X: ESPIONAGEM DIMENSIONAL", 
                desc: "Coloca uma máscara para entrar noutra dimensão...", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/9ca7fac6ec9514fa06b9785aad2ead0c3fba0eec.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/51e64df7500b3114c76e5e86dfea2e622bb438e5-512x512.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=48&w=48&crop=center" 
            }
        ]
    },
    "JETT": {
        bio: "Representando a Coreia do Sul, sua terra natal, Jett tem um estilo de luta ágil e evasivo que permite que ela assuma riscos como ninguém. Ela corre em meio a qualquer confronto, cortando os inimigos antes mesmo que eles percebam quem ou o que os atingiu.",
        habilidades: [
           { 
                nome: "C: ERUPÇÃO DAS BRUMAS", 
                desc: "Lança INSTANTANEAMENTE um projétil que se expande numa breve nuvem que obscurece a visão ao bater numa superfície. SEGURE o botão da habilidade para curvar a fumaça na direção da sua mira.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/3353597819f0c032d56ff947d9762368b4ee6c6b.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8c5e94bfc817e5d35eca7692fd242404de5ac5dd-128x128.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=72&w=72&crop=center"
            },
            { 
                nome: "Q: CORRENTE ASCENDENTE", 
                desc: "INSTANTANEAMENTE impele Jett bem alto no ar.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/4cbc968f05713579aae9464c5a16dc3f6863f943.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/a0c72fe005e2f87f60f38fdb440569271c51a8fb-128x128.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=72&w=72&crop=center" 
            },
            
            { 
                nome: "E: BRISA DE IMPULSO", 
                desc: "ATIVE para preparar uma rajada de vento por tempo limitado. REPITA a habilidade para lançar Jett na direção do movimento atual dela. Se estiver parada, Jett será lançada para a frente. A carga de Brisa de Impulso é redefinida a cada dois abates.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ec6b3cf1f8ac09d597b0193de1d7bb81335b40e4.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone:  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/18cb69683c16d11590eda4c5458a7025f0667895-128x128.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=72&w=72&crop=center" 
            },
            { 
                nome: "X: TORMENTA DE AÇO", 
                desc: "EQUIPE um conjunto de facas de arremesso altamente precisas. DISPARE para lançar uma única faca contra o alvo. As facas são recarregadas ao matar um oponente. Use o DISPARO ALTERNATIVO para jogar todas as facas restantes contra o alvo, porém elas não são recarregadas ao matar um oponente.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/667770571300e065b332617e5c8f2e009ed88928.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8d8e6c956af64b241e49e3625b3cb02fcc61eb09-128x128.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=72&w=72&crop=center" 
            }
        ]
    },
    "BREACH": {
        bio: "Breach, o homem-biônico sueco, dispara poderosos jatos cinéticos para forçar a abertura de um caminho pelo território inimigo. O dano e a interrupção que ele causa garantem que nenhuma luta seja justa.",
        habilidades: [  
           { 
                nome: "C: ERUPÇÃO DAS BRUMAS", 
                desc: "Lança INSTANTANEAMENTE um projétil que se expande numa breve nuvem que obscurece a visão ao bater numa superfície. SEGURE o botão da habilidade para curvar a fumaça na direção da sua mira.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data_live/a4f24e1fe60879234be5da0f8a768feb8f379fdd.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone:  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/668ca53aca3c788f4b9ef8ad35e86979b84745db-256x256.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=72&w=72&crop=center"
            },
            { 
                nome: "Q: ESTOPIM", 
                desc: "EQUIPE uma carga cegante. DISPARE a carga para armar um jato de ação rápida pela parede. A carga é detonada, cegando todos os jogadores que estiverem olhando para ela.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data_live/ffa4695b83e2f959bc59f0393dfc74e533546a89.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/cca58acc93956ee755ccea171a36584a402793c2-256x256.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=72&w=72&crop=center" 
            },
            
            { 
                nome: "E: FALHA TECTÔNICA", 
                desc: "ATIVE para preparar uma rajada de vento por tempo limitado. REPITA a habilidade para lançar Jett na direção do movimento atual dela. Se estiver parada, Jett será lançada para a frente. A carga de Brisa de Impulso é redefinida a cada dois abates.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data_live/a4f24e1fe60879234be5da0f8a768feb8f379fdd.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone:  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/668ca53aca3c788f4b9ef8ad35e86979b84745db-256x256.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=72&w=72&crop=center" 
            },
            { 
                nome: "X: TORMENTA DE AÇO", 
                desc: "EQUIPE um conjunto de facas de arremesso altamente precisas. DISPARE para lançar uma única faca contra o alvo. As facas são recarregadas ao matar um oponente. Use o DISPARO ALTERNATIVO para jogar todas as facas restantes contra o alvo, porém elas não são recarregadas ao matar um oponente.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/667770571300e065b332617e5c8f2e009ed88928.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/8d8e6c956af64b241e49e3625b3cb02fcc61eb09-128x128.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=72&w=72&crop=center" 
            }
        ]
    }
    // Podes adicionar os outros agentes aqui seguindo o mesmo formato!
};

// 2. Seleciona os elementos do HTML
const agentCards = document.querySelectorAll('.valorant-card');
const modal = document.getElementById('agent-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalName = document.getElementById('modal-agent-name');
const modalImg = document.getElementById('modal-agent-img');
const modalBio = document.getElementById('modal-agent-bio');
const skillTitle = document.getElementById('skill-title');
const skillDesc = document.getElementById('skill-desc');
const skillIcons = document.querySelectorAll('.skill-icon-img');

// AQUI: Selecionamos a tag de vídeo no HTML
const skillVideo = document.getElementById('skill-video');

// 3. A Lógica
agentCards.forEach(card => {
    card.addEventListener('click', () => {
        const clickedName = card.querySelector('.name').innerText;
        const clickedImageSrc = card.querySelector('img').src;

        modalName.innerText = clickedName;
        modalImg.src = clickedImageSrc;

        const dadosDoAgente = agentesData[clickedName];

        if (dadosDoAgente) {
            modalBio.innerText = dadosDoAgente.bio;
            
            // CARREGA A HABILIDADE 1 POR PADRÃO AO ABRIR O MODAL
            skillTitle.innerText = dadosDoAgente.habilidades[0].nome;
            skillDesc.innerText = dadosDoAgente.habilidades[0].desc;
            skillVideo.src = dadosDoAgente.habilidades[0].video;

            skillIcons.forEach((iconElement, index) => {
                iconElement.src = dadosDoAgente.habilidades[index].icone;

                // AO PASSAR O MOUSE NO ÍCONE, MUDA O TEXTO E O VÍDEO!
                iconElement.onmouseover = () => {
                    skillTitle.innerText = dadosDoAgente.habilidades[index].nome;
                    skillDesc.innerText = dadosDoAgente.habilidades[index].desc;
                    
                    // Só troca o vídeo se ele for diferente, para não dar lag
                    if (skillVideo.src !== dadosDoAgente.habilidades[index].video) {
                        skillVideo.src = dadosDoAgente.habilidades[index].video;
                    }
                };
            });
        }

        modal.style.display = 'flex';
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    skillVideo.src = ""; // Para o vídeo quando fechamos o modal
});

window.addEventListener('click', (e) => { 
    if (e.target === modal) {
        modal.style.display = 'none';
        skillVideo.src = ""; // Para o vídeo quando fechamos o modal
    } 
});