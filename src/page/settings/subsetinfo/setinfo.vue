<template>
  <div>
      <home_herder @changetype="parentEvent" :headerKey='headerKey'></home_herder>
      <component :is="iscomponent"></component>
  </div>
</template>

<script>
const home_herder = () => import("@/components/home/home_herder");
const changename = () => import("./changename");
const changephone = () => import("./changephone");
const changemail = () => import("./changemail");
export default {
    components: {
            home_herder,
            changename,
            changephone,
            changemail
		},
		data () {
            return{
                component_name: "home_content",
                headerKey:'1',
                changename: changename,
                changephone: changephone,
                changemail: changemail
            }
			
		},
		computed: {
			iscomponent () {
                switch (this.$route.params.compontentName) {
                    case 'changename':
                        return this.changename
                        break;
                    case 'changephone':
                        return this.changephone
                        break;
                    case 'changemail':
                        return this.changemail
                        break;
                
                    default:
                        break;
                }
			}
        },
        methods:{
            parentEvent(data) {
                this.menu_num = data;
            },
        },
        mounted(){
            // console.log(this.$route.params.compontentName);
        }
}
</script>

<style>

</style>
