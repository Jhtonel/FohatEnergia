// Função para verificar se o Leadster está carregado
const isLeadsterLoaded = () => {
    return typeof window !== 'undefined' && window.Leadster;
};

// Função para esperar o Leadster carregar
const waitForLeadster = (maxAttempts = 10) => {
    return new Promise((resolve, reject) => {
        // Se já estiver carregado, resolve imediatamente
        if (isLeadsterLoaded()) {
            resolve(true);
            return;
        }

        // Adiciona listener para o evento personalizado
        const handleLeadsterLoaded = () => {
            window.removeEventListener('leadsterLoaded', handleLeadsterLoaded);
            resolve(true);
        };
        window.addEventListener('leadsterLoaded', handleLeadsterLoaded);

        // Fallback: tenta algumas vezes caso o evento não seja disparado
        let attempts = 0;
        const checkLeadster = setInterval(() => {
            attempts++;
            if (isLeadsterLoaded()) {
                clearInterval(checkLeadster);
                window.removeEventListener('leadsterLoaded', handleLeadsterLoaded);
                resolve(true);
            } else if (attempts >= maxAttempts) {
                clearInterval(checkLeadster);
                window.removeEventListener('leadsterLoaded', handleLeadsterLoaded);
                reject(new Error('Leadster não carregou após várias tentativas'));
            }
        }, 1000);
    });
};

// Função principal para abrir o chat
export const openLeadsterChat = async () => {
    console.log('Tentando abrir chat do Leadster...');
    
    try {
        // Espera o Leadster carregar
        await waitForLeadster();
        
        // Procura o elemento do avatar
        const avatar = document.querySelector('.nld-avatar');
        if (avatar) {
            console.log('Elemento do Leadster encontrado, abrindo chat...');
            avatar.click();
            return;
        }

        // Se não encontrar o avatar, tenta outras alternativas
        const allLeadsterElements = document.querySelectorAll('[class*="nld"]');
        console.log('Elementos do Leadster encontrados:', allLeadsterElements);

        if (window.Leadster && typeof window.Leadster.openChat === 'function') {
            console.log('Usando API do Leadster para abrir chat...');
            window.Leadster.openChat();
            return;
        }

        // Última tentativa: procura por qualquer elemento do Leadster que possa ser clicado
        const clickableLeadsterElements = document.querySelectorAll('.nld-trigger-element, .nld-launcher, .nld-button');
        if (clickableLeadsterElements.length > 0) {
            console.log('Encontrado elemento clicável do Leadster:', clickableLeadsterElements[0]);
            clickableLeadsterElements[0].click();
            return;
        }

        throw new Error('Não foi possível encontrar uma forma de abrir o chat');
    } catch (error) {
        console.error('Erro ao abrir chat do Leadster:', error);
        // Tenta recarregar o script do Leadster
        const leadsterScript = document.getElementById('leadster-script');
        if (leadsterScript) {
            console.log('Tentando recarregar o script do Leadster...');
            leadsterScript.remove();
            const newScript = document.createElement('script');
            newScript.id = 'leadster-script';
            newScript.textContent = leadsterScript.textContent;
            document.head.appendChild(newScript);
        }
    }
}; 