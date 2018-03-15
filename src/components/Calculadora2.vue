<template>
	<div class="body">
		<main class="conteudo">
			<section class="conteudo-cabecalho">
				<div class="conteudoCabecalho-circulo"></div>
				<div class="conteudoCabecalho-circulo"></div>
				<div class="conteudoCabecalho-circulo"></div>
			</section>
			<section class="conteudo-tela">
				<p class="conteudoTela-resultado">{{visor}}</p>
				<p class="conteudoTela-resumo">{{value1}} {{operator}} {{value2}}</p>
			</section>
			<section class="conteudo-botoes">
				<div class="conteudoBotoes-caixa">
					<button class="conteudoBotoesCaixa-item" @click="clear('')">C</button>
					<button class="conteudoBotoesCaixa-item" @click="('')">+/-</button>
					<button class="conteudoBotoesCaixa-item" @click="('')">%</button>
					<button class="conteudoBotoesCaixa-item" @click="write('7')">7</button>
					<button class="conteudoBotoesCaixa-item" @click="write('8')">8</button>
					<button class="conteudoBotoesCaixa-item" @click="write('9')">9</button>
					<button class="conteudoBotoesCaixa-item" @click="write('4')">4</button>
					<button class="conteudoBotoesCaixa-item" @click="write('5')">5</button>
					<button class="conteudoBotoesCaixa-item" @click="write('6')">6</button>
					<button class="conteudoBotoesCaixa-item" @click="write('1')">1</button>
					<button class="conteudoBotoesCaixa-item" @click="write('2')">2</button>
					<button class="conteudoBotoesCaixa-item" @click="write('3')">3</button>
					<button class="conteudoBotoesCaixa-item" @click="write('0')">0</button>
					<button class="conteudoBotoesCaixa-item" @click="write('.')">.</button>
				</div>
				<div class="conteudoBotoes-pontos">					
					<button class="conteudoBotoesPontos-item divi" @click="setOp('/')">/</button>
					<button class="conteudoBotoesPontos-item mult" @click="setOp('*')">x</button>
					<button class="conteudoBotoesPontos-item menos" @click="setOp('-')">-</button>
					<button class="conteudoBotoesPontos-item mais" @click="setOp('+')">+</button>
					<button class="conteudoBotoesPontos-item igual" @click="calc('=')">=</button>
				</div>
			</section>
		</main>
	</div>
</template>
<script>
export default{
	nome: 'Calculadora2',
	data (){
		return{
			value1: '',
			value2: '',
			operator: '',
			visor: 0 
		}
	},
	methods:{
		write(number){
			if (this.operator == '') {
				this.value1 = this.value1 + number
				this.visor = this.value1
			}
			else{
				this.value2 = this.value2 + number
				this.visor = this.value2
			}
		},
		setOp(operator){
			this.operator = operator
		},
		calc(){
			if (this.operator === '/') {
				if (this.value2 == '' || this.value2 == 0) {
					return alert('Preencha todos os campos!!')
				} else{
						return this.visor = parseFloat(this.value1) / parseFloat(this.value2)}
			}
			else if (this.operator === '*') {
				return this.visor = parseFloat(this.value1) * parseFloat(this.value2)}
			else if (this.operator === '-') {
				return this.visor = parseFloat(this.value1) - parseFloat(this.value2)}
			else {
				return this.visor = parseFloat(this.value1) + parseFloat(this.value2)}
		},
		clear(){
			this.visor = 0
			this.value1 = ''
			this.value2 = ''
			this.operator = ''
		}
	}
}	
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Quicksand');

	.body{
		margin: 0;
		padding: 0;
		height: 90vh;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.conteudo{
		height: 70vh;
		width: 250px;
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-flow: row wrap;
		border-radius: 8px;
		box-shadow: 7px 7px 20px #aaa;
	}
	.conteudo-cabecalho{
		height: 3vh;
		width: 100%;
		padding: 2%;
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		background-color: #F7F7F8;
		border-top-right-radius: 8px;
		border-top-left-radius: 8px;
	}
	.conteudoCabecalho-circulo{
		height: 9px;
		width: 9px;
		margin: 4px;
		border-radius: 100%;
		background: #DDDADD;
	}
	.conteudo-tela{
		width: 100%;
		padding: 0 2%;
		background-color: #F7F7F8;
		font-family: 'Quicksand', sans-serif;
	}
	.conteudoTela-resultado{
		height: 9vh;
		width: 100%;
		border: 0;
		margin: 0;
		text-align: right;
		font-size: 40px;
		font-weight: bolder;
		color: #000;
	}
	.conteudoTela-resumo{
		height: 5vh;
		width: 100%;
		margin: 2%;
		text-align: right;
		font-family: 'Quicksand', sans-serif;
		color: #717171;
		font-weight: bold;
	}
	.conteudo-botoes{
		height: 50vh;
		width: 100%;
		margin: 1%;
		display: flex;
		flex-flow: row wrap;
		justify-content: flex-start;
		align-items: center;
		font-family: 'Quicksand', sans-serif;
	}
	.conteudoBotoes-caixa{
		height: 48vh;
		width: 67%;
		padding: 0 2%;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
	}
	.conteudoBotoesCaixa-item{
		height: 31px;
		width: 36px;
		margin: 0 2%;
		border: 0;
		background: #fff;
		color: #717171;
		font-size: 18px;
		font-weight: bold;
	}
	.conteudoBotoesCaixa-item:focus{
		outline: none;
		color: #000;
	}
	.conteudoBotoes-pontos{
		height: 49vh;
		width: 29%;
		padding-bottom: 2%;
		display: flex;
		flex-flow: column;
		justify-content: space-around;
		align-items: center;
	}
	.conteudoBotoesPontos-item{
		height: 37px;
		width: 37px;
		margin: 0;
		padding: 0;
		border: 0;
		border-radius: 100%;
		color: #fff;
		font-weight: bold;
		font-size: 20px;
		box-shadow: 4px 4px 20px #868686;
	}
	.divi{
		background-color: #D160E8;
	}
	.mult{
		background-color: #ee6d66;
	}
	.menos{
		background-color: #7BB4F7;
	}
	.mais{
		background-color: #F4845B;
	}
	.igual{
		background-color: #2ECC86;
	}
</style>