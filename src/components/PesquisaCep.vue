<template>
<div>
	<section class="conteudo">
		<p class="conteudo-item">CEP</p>
		<input class="conteudo-caixa" placeholder="Digite seu CEP" @keyup.enter="getData" v-model="cep"><br>
		<p class="conteudo-item">Rua</p>
		<input class="conteudo-caixa" placeholder="" v-model="logradouro"><br>
		<p class="conteudo-item">Cidade</p>
		<input class="conteudo-caixa" placeholder="" v-model="localidade"><br>
		<p class="conteudo-item">Estado</p>
		<input class="conteudo-caixa" placeholder="" v-model="uf"><br>
		<button class="conteudo-botao">Enviar</button>
	</section>
</div>
</template>
<script>
import axios from 'axios'

export default{
	name: 'PesquisaCep',
	data(){
		return{
			cep:'',
			logradouro:'',
			localidade:'',
			uf:''
		}
	},
	methods:{
		getData(){
			axios.get('http://viacep.com.br/ws/' + this.cep + '/json/')
			.then(response => {
				this.logradouro = response.data.logradouro
				this.localidade = response.data.localidade
				this.uf = response.data.uf	
			})
		}
	}
}
</script>
<style scoped>
	
</style>