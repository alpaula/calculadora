<template>
	<div class="body">
		<section class="conteudo">
			<input class="conteudo-numeros conteudo-numeros1" type="number" placeholder="0" v-model.number="valor1">
			<input class="conteudo-numeros" type="number" placeholder="0" v-model.number="valor2">
			<p class="conteudo-resultado">{{resultado}}</p>
			<div class="conteudo-sinais">
				<button class="conteudoSinais-ponto divi" @click="calc ('divid')">/</button>
				<button class="conteudoSinais-ponto mult" @click="calc ('mult')">x</button>
				<button class="conteudoSinais-ponto menos" @click="calc ('subt')">-</button>
				<button class="conteudoSinais-ponto mais" @click="calc ('soma')">+</button>
			</div>
		</section>
	</div>
</template>
<script>
export default{
	name:'Calculadora',
	data (){
		return{
			valor1:'',
			valor2:'',
			resultado: 0
		}
	},
methods: {
	calc(operator){
		if (operator === 'divid') {if (this.valor2 == '' || this.valor2 == 0) {
			return alert('Preencha todos os campos!!')} else{
				return this.resultado = this.valor1 / this.valor2}
		}
		else if (operator === 'mult') {
			return this.resultado = this.valor1 * this.valor2}
		else if (operator === 'subt') {
			return this.resultado = this.valor1 - this.valor2}
		else {
			return this.resultado = this.valor1 + this.valor2}
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
	justify-content: center;
	align-items: flex-start;
	flex-flow: row wrap;
	border-radius: 40px;
}
.conteudo-numeros{
	height: 9vh;
	width: 100%;
	border: 0;
	background-color: #6c16c7;
	text-align: center;
	font-size: 30px;
	color: #fff;
}
.conteudo-numeros1{
	border-top-right-radius: 40px;
	border-top-left-radius: 40px;
	border-bottom: 1px #b4b4b4 solid;
}
.conteudo-resultado{
	height: 10vh;
	width: 100%;
	margin: 0;
	border-bottom: 1px #b4b4b4 solid;
	border-top: 1px #b4b4b4 solid;
	color: #6c16c7;
	font-size: 60px;
}
.conteudo-sinais{
	height: 32vh;
	width: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: space-around;
	align-items: center;
}
.conteudoSinais-ponto{
	height: 12vh;
	width: 34%;
	border-radius: 100%;
	border: 0;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
}
.divi{
	background: #D160E8;
	font-size: 45px;
}
.mult{
	background: #ee6d66;
	font-size: 40px;
}
.mais{
	background: #7BB4F7;
	font-size: 50px;
}
.menos{
	background: #e88c30;
	font-size: 60px;
}
</style>