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
				<p class="conteudoTela-resumo">0,0</p>
			</section>
			<section class="conteudo-botoes">
				<div class="conteudoBotoes-caixa">
					<button class="conteudoBotoesCaixa-nume" @click="('')">C</button>
					<button class="conteudoBotoesCaixa-nume" @click="('')">+/-</button>
					<button class="conteudoBotoesCaixa-nume" @click="('')">%</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('7')">7</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('8')">8</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('9')">9</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('4')">4</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('5')">5</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('6')">6</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('1')">1</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('2')">2</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('3')">3</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('0')">0</button>
					<button class="conteudoBotoesCaixa-nume" @click="write('.')">.</button>
				</div>
				<div class="conteudoBotoes-pontos">					
					<button class="conteudoBotoesPontos-sinais divi" @click="setOp('/')">/</button>
					<button class="conteudoBotoesPontos-sinais mult" @click="setOp('*')">x</button>
					<button class="conteudoBotoesPontos-sinais menos" @click="setOp('-')">-</button>
					<button class="conteudoBotoesPontos-sinais mais" @click="setOp('+')">+</button>
					<button class="conteudoBotoesPontos-sinais igual" @click="calc('=')">=</button>
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
					return alert('Preencha todos os campos!!')} else{
						return this.visor = this.value1 / this.value2}
			}
			else if (this.operator === '*') {
				return this.visor = this.value1 * this.value2}
			else if (this.operator === '-') {
				return this.visor = this.value1 - this.value2}
			else {
				return this.visor = this.value1 + this.value2}
		}
	}
}	
</script>
<style scoped>
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
	height: 60vh;
	width: 250px;
	border: 1px #b4b4b4 solid;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-flow: row wrap;
	border-radius: 8px;
}
.conteudo-cabecalho{
	height: 2vh;
	width: 100%;
	margin: 2%;
	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
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

}
.conteudo-botoes{
	color: #717171;
}
.conteudoBotoes-caixa{

}
.conteudoBotoesCaixa-nume{

}
.conteudoBotoes-pontos{

}
.conteudoBotoesPontos-sinais{

}
</style>