import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export const usePagination= ()=>{

    const route = useRoute();
    const page = ref(Number(route.query.page || 0));


    watch(
	() => route.query.page,
	(newPage) => {
		page.value = Number(newPage || 0);
		window.scrollTo({top:0, behavior: 'smooth'});
	}
)

    return{
        page
    }
};
