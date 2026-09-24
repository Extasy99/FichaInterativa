const agentesData = {
    "YORU": {
        bio: "Yoru, nativo do Japão, abre fendas na realidade para infiltrar as linhas inimigas sem ser visto. Ele usa tanto artimanhas quanto táticas agressivas, e os alvos são abatidos sem saber de onde o ataque veio.",
        habilidades: [
            { // <-- Faltava abrir esta chaveta no PONTO CEGO
                nome: "C: PONTO CEGO", 
                desc: "EQUIPE para arrancar um fragmento dimensional instável da realidade. DISPARE para lançar o fragmento, ativando um clarão que se dissipa ao atingir uma superfície sólida.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/295ab26ef6097d28da0bef9c9b4c6185a80071c8.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/ea733bf224ae53e8e53cabfae19bfc12ce9fcda3-512x512.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=48&w=48&crop=center"
            },
            { 
                nome: "Q: DISTRAÇÃO", 
                desc: "EQUIPE um eco dimensional que se transforma em uma cópia do Yoru quando ativado. DISPARE para ativar a cópia e fazê-la avançar. Use o MODO SECUNDÁRIO para posicionar um eco inativo. USE para transformar o eco inativo em uma cópia e fazê-la avançar. As cópias explodem e cegam os inimigos quando destruídas por eles..", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/ef008c8e848a054f88e88f173c03279a45a1c796.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/43416e5b34cd80c691ed0cc3b69fc73fae93f923-256x256.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=48&w=48&crop=center" 
            },
            
            { 
                nome: "E: PASSAGEM DIMENSIONAL", 
                desc: "EQUIPE um fluxo dimensional. DISPARE para lançá-lo à frente. Use o DISPARO ALTERNATIVO para posicionar um fluxo imóvel. ATIVE para se teleportar até ele. USE para acionar um teleporte falso.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data/be352287c5704d82d1acbff5ecdee5187755d235.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone:  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/580f94ecab50ae7c01279dcd0adb86f9c65362c3-512x512.png?accountingTag=VAL&auto=format&fit=crop&q=80&h=48&w=48&crop=center" 
            },
            { 
                nome: "X: ESPIONAGEM DIMENSIONAL", 
                desc: "EQUIPE uma máscara para olhar por entre as dimensões. DISPARE para entrar na dimensão do Yoru, onde você não poderá ser afetado nem visto pelos inimigos lá fora. REATIVE para sair da dimensão do Yoru mais cedo.", 
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
                nome: "C: PÓS-CHOQUE", 
                desc: "EQUIPE uma carga de fusão. DISPARE a carga para armar um jato de ação lenta pela parede. O jato causa muito dano a todos que estiverem na área de efeito.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data_live/592212ab60d09999d493c2099f9260d59fab917a.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone:  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2621c00e27da47f6a57772902c7806a7bfe0eb66-256x256.png?accountingTag=VAL&fit=crop&fm=webp&q=80&h=72&w=72&crop=center"
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
                nome: "X: ONDA TROVEJANTE", 
                desc: "EQUIPE uma carga sísmica. Dispare para lançar um terremoto em cascata por todo o terreno num grande cone. O terremoto estonteia e derruba todos que estiverem na área de efeito.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data_live/207b0ab21f8e27e98ca22f4b5546cc0963d94af6.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/58784f89733dfe25c41f8ba950c6eb4c46507d63-256x256.png?accountingTag=VAL&fit=crop&fm=webp&q=80&h=72&w=72&crop=center" 
            }
        ]
    },
     "ASTRA": {
        bio: "Astra, a Agente ganense, utiliza energias cósmicas para moldar o campo de batalha a seu bel-prazer. Com total domínio da sua forma astral e um talento estratégico nato, ela está sempre anos-luz à frente dos inimigos.",
        habilidades: [  
           { 
                nome: "C: POÇO GRAVITACIONAL", 
                desc: "Posicione Estrelas na Forma Astral. ATIVE uma delas para formar um Poço Gravitacional. Jogadores na área são puxados em direção ao centro antes de ele explodir, deixando Vulnerável quem ainda estiver preso ali.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data_live/3439c939846214067561746668bfd96805efc225.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone:  "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/b3d3a7248e583eb0b7b08ef30b7d642fa900d874-512x512.png?accountingTag=VAL&fit=crop&fm=webp&q=80&h=72&w=72&crop=center"
            },
            { 
                nome: "Q: PULSO NOVA", 
                desc: "Posicione Estrelas na Forma Astral. ATIVE uma Estrela para detonar um Pulso Nova. O Pulso Nova carrega brevemente e depois estoura, causando concussão a todos os jogadores na área.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data_live/e54ed10355d571c15ef2ee5a0897cca06851fd56.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/50c811478c52d66c7f11a4463bfb16cf47ab0dd6-512x512.png?accountingTag=VAL&fit=crop&fm=webp&q=80&h=72&w=72&crop=center" 
            },
            
            { 
                nome: "E: NEBULOSA", 
                desc: "Posicione Estrelas na Forma Astral. ATIVE uma Estrela para transformá-la em uma Nebulosa (fumaça). USE uma Estrela para dissipá-la, retornando a Estrela para ser posicionada em um novo local após um período. Dissipar forma brevemente uma Nebulosa falsa na localização da Estrela antes de retornar.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data_live/2aafadb8cef8c1ab2894a657c23988e921b006c8.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1e712336550ae51456e5b0b40646aef879906d88-512x512.png?accountingTag=VAL&fit=crop&fm=webp&q=80&h=72&w=72&crop=center" 
            },
            { 
                nome: "X: FORMA ASTRAL / DIVISA CÓSMICA", 
                desc: "ATIVE para entrar na Forma Astral, em que você pode posicionar Estrelas com o DISPARO. As Estrelas podem ser reativadas depois para serem transformadas em Pulso Nova, Nebulosa ou Poço Gravitacional. Quando Divisa Cósmica estiver carregada, use o DISPARO ALTERNATIVO na Forma Astral para começar a mirar e, depois, o DISPARO para escolher dois locais. Uma Divisa Cósmica infinita surge e conecta os pontos selecionados. A Divisa Cósmica bloqueia disparos e abafa muito o som.", 
                video: "https://cmsassets.rgpub.io/sanity/files/dsfx7636/game_data_live/6bed3444d432f27cdac08f3be1dad2760be7052f.mp4?accountingTag=VAL&auto=format&fit=crop&q=80&h=1080&w=1920&crop=center",
                icone: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1decdbbe068087f28c7212e179c35de7eae92832-512x512.png?accountingTag=VAL&fit=crop&fm=webp&q=80&h=72&w=72&crop=center" 
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
