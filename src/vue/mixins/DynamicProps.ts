import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class DynamicProps extends Vue {
	
	props: any = {};

	getProps () {
		let props = this.$attrs;
		Object.keys(props).forEach(key => {
			this.$set(this.props, key, props[key]);
		});
	}

	mounted () {
		this.getProps();
	}

	beforeUpdate () {
		this.getProps();
	}

}