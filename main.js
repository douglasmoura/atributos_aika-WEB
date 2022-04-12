
let atributos = document.getElementById('atributos');
let resultado = document.querySelector('div#result');

function atributosForca(){
    
    let pontosAtributos = atributos.value;
    let danoCritico = 0.2;
    let ataqueFisico = 2.6;
    let ataqueDuplo = 0.15;
    let perfuracaoFisica = 0.3;

    let CalculoDanoCritico = Number(danoCritico) * Number(pontosAtributos);
    let CalculoAtaqueFisico = Number(ataqueFisico) * Number(pontosAtributos);
    let CalculoAtaqueDuplo = Number(ataqueDuplo) * Number(pontosAtributos);
    let CalculoPerfuracaoFisica =  Number(perfuracaoFisica) * Number(pontosAtributos);
    
  
    resultado.innerHTML = `${CalculoDanoCritico} Dano crítico<br> 
                           ${CalculoAtaqueFisico} Ataque físico<br>
                           ${CalculoAtaqueDuplo} Ataque duplo<br>
                           ${CalculoPerfuracaoFisica}% Perfuração física`;
}

function atributosAgilidade(){
    let pontosAtributos = atributos.value;
    let ataqueCritico = 0.1;
    let ataqueFisico = 2.6;
    let taxaAcerto = 0.15;
    let esquiva= 0.05;

    let CalculoAtaqueCritico = Number(ataqueCritico) * Number(pontosAtributos);
    let CalculoAtaqueFisico = Number(ataqueFisico) * Number(pontosAtributos);
    let CalculoTaxaAcerto = Number(taxaAcerto) * Number(pontosAtributos);
    let CalculoEsquiva =  Number(esquiva) * Number(pontosAtributos);
    
  
    resultado.innerHTML = `${CalculoAtaqueCritico} Ataque crítico<br> 
                           ${CalculoAtaqueFisico} Ataque físico<br>
                           ${CalculoTaxaAcerto} Taxa de acerto<br>
                           ${CalculoEsquiva} Esquiva`;
 
}

function atributosSorte(){
    let pontosAtributos = atributos.value;
    let mpMaximo = 25;
    let regeneracaoMp = 3;
    let resistenciaStatusAnormais = 0.1;
    let habilidadeAtaque = 5;

    let CalculoMpMaximo = Number(mpMaximo) * Number(pontosAtributos);
    let CalculoRegeneracaoMp = Number(regeneracaoMp) * Number(pontosAtributos);
    let CalculoResistenciaStatusAnormais = Number(resistenciaStatusAnormais) * Number(pontosAtributos);
    let CalculoHabilidadeAtaque =  Number(habilidadeAtaque) * Number(pontosAtributos);
    
  
    resultado.innerHTML = `${CalculoMpMaximo} MP máximo<br> 
                           ${CalculoRegeneracaoMp} Regeneração de MP<br>
                           ${CalculoResistenciaStatusAnormais} Resistência de status anormais<br>
                           ${CalculoHabilidadeAtaque} Habilidade de ataque`;

}

function atributosInteligencia(){
    let pontosAtributos = atributos.value;
    let ataqueMagico = 3.3;
    let cura = 6;
    let resfriamento = 0.04;
    let perfuracaoMagica = 0.3;

    let CalculoAtaqueMagico = Number(ataqueMagico) * Number(pontosAtributos);
    let CalculoCura = Number(cura) * Number(pontosAtributos);
    let CalculoResfriamento = Number(resfriamento) * Number(pontosAtributos);
    let CalculoPerfuracaoMagica =  Number(perfuracaoMagica) * Number(pontosAtributos);
    
  
    resultado.innerHTML = `${CalculoAtaqueMagico} Ataque mágico<br> 
                           ${CalculoCura} Cura<br>
                           ${CalculoResfriamento}% Resfriamento<br>
                           ${CalculoPerfuracaoMagica}% Perfuração mágica`;
    
}

function atributosConstituicao(){
    let pontosAtributos = atributos.value;
    let hpMaximo = 25;
    let regeneracaoHp = 3;
    let resistenciaAtaqueCritico = 0.1;
    let resistenciaAtaqueDuplo = 0.1;

    let CalculoHpMaximo = Number(hpMaximo) * Number(pontosAtributos);
    let CalculoRegeneracaoHp = Number(regeneracaoHp) * Number(pontosAtributos);
    let CalculoResistenciaAtaqueCritico = Number(resistenciaAtaqueCritico) * Number(pontosAtributos);
    let CalculoResistenciaAtaqueDuplo =  Number(resistenciaAtaqueDuplo) * Number(pontosAtributos);
    
  
    resultado.innerHTML = `${CalculoHpMaximo} HP máximo<br> 
                           ${CalculoRegeneracaoHp} Regeneração de HP<br>
                           ${CalculoResistenciaAtaqueCritico} Resistência ataque crítico<br>
                           ${CalculoResistenciaAtaqueDuplo} Resistência ataque duplo`;
    
}