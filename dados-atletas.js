class Atleta {
    constructor(nome, idade, peso, altura, notas){
      this.nome =  nome
      this.idade =  idade
      this.peso =  peso
      this.altura =  altura
      this.notas =  notas
    }
  
    calculaCategoria(){
      if(this.idade>=9 && this.idade<=11){
        return this.categoria = "Infantil"
      }
      else if(this.idade>=12 && this.idade<=13){
        return this.categoria = "Juvenil"
      }
      else if(this.idade>=14 && this.idade<=15){
        return this.categoria = "Intermediário"
      }
      else if(this.idade>=16 && this.idade<=30){
        return this.categoria = "Adulto"
      }
      else{
        return this.categoria = "demais categorias"
      }
    }
    
    calculaIMC(){
      let imc = this.peso/(this.altura*this.altura)
      return this.Imc = imc
    }

    calculaMediaValida(){
        let notasValidas = this.notas.slice(1, this.notas.length - 1)
        let soma = 0
          notasValidas.forEach(function(notasValida){
          soma = soma + notasValida
        }) 
         let media = soma / notasValidas.length
        
         return this.Media = media

    }

    obtemNomeAtleta(){
      return `Nome: ${this.nome}`
    }
    obtemIdadeAtleta(){
      return `Idade: ${this.idade}`
    }
    obtemPesoAtleta(){
      return `Peso: ${this.peso}`
    }
    obtemAlturaAtleta(){
      return `Altura: ${this.altura}`
    }
    obtemNotasAtleta(){
      return `Notas: ${this.notas}`
    }
    obtemCategoria(){
        return `Categoria: ${atleta.calculaCategoria()}`
    }
    obtemIMC(){
        return `IMC: ${atleta.calculaIMC()}`
    }
    obtemMediaValida(){
        return `Média válida: ${atleta.calculaMediaValida()}`
    }

  }
  
  const atleta = new Atleta("Cesar Abascal",
      30, 80, 1.70,
      [10, 9.34, 8.42, 10, 7.88]);
  

  atleta.obtemCategoria();
  atleta.obtemIMC();
  atleta.obtemMediaValida();

console.log(atleta)