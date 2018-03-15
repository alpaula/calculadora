<template>
<div>
	<section class="body">
		<ul class="body-lista">
			<li class="bodyLista-form" v-for="resposta in respostas">
				<p class="formNome"><strong>{{resposta.name}}</strong></p>
				<p class="formEmail">{{resposta.email}}</p>
			</li>
		</ul>
	</section>
</div>
</template>
<script>
import axios from 'axios';

export default{
	name: 'ConsumindoApi',
	data(){
		return{
			respostas: [],
		}
	},
	created(){
		axios.get(`http://jsonplaceholder.typicode.com/users`)
		.then(response => {
			this.respostas = response.data
		})
	}
}
</script>