import { getProductByID } from "@/modules/products/actions";
import { useQuery } from "@tanstack/vue-query";
import  { defineComponent,  watch,  watchEffect } from "vue";
import {  useRouter } from "vue-router";


import * as yup from 'yup';
import { useFieldArray, useForm, validate } from 'vee-validate';
import CustomInput from "@/modules/common/components/CustomInput.vue";
import CustomTextArea from "@/modules/common/components/CustomTextArea.vue";
import { Size } from '../../products/interfaces/product';


const validationSchema = yup.object({
  title: yup.string().required().min(3, 'El título debe tener al menos 3 caracteres.'),
    slug: yup.string().required().min(5, 'El slug debe tener al menos 5 caracteres.'),
    price: yup.number().required().min(0, 'El precio debe ser un número positivo.'),
    stock:yup.number().required().min(0, 'El stock debe ser un número positivo.'),
   description: yup.string().required().min(5, 'La descripción debe tener al menos 5 caracteres.'),
   gender: yup.string().required('El género es obligatorio (No se aceptan Helicópteros Apaches).'),


});


export default defineComponent({
    components:{
        CustomInput,
        CustomTextArea,
    },
    props:{
        productId:{
            type: String,
            required: true,
        }
    },
    setup(props){

        
        const router = useRouter();

        const {data: product, isLoading, isError}=useQuery({
            queryKey:['product', props.productId],
            queryFn: ()=> getProductByID(props.productId),
            retry: false,
        });
// ---------------------------------------------------------------
        const { defineField, values, errors, handleSubmit, resetForm, meta} = useForm({
            validationSchema, initialValues:product.value,
        });
        const [title, titleAttrs] = defineField('title');
        const [slug, slugAttrs] = defineField('slug');
        const [price, priceAttrs] = defineField('price');
        const [stock, stockAttrs] = defineField('stock');
        const [description, descriptionAttrs] = defineField('description');
        const [gender, genderAttrs] = defineField('gender');

        const {fields:images}= useFieldArray<string>('images');
        const {fields:sizes, remove: removeSize, push: pushSize}= useFieldArray<string>('sizes');
// ---------------------------------------------------------------
        const toggleSize = (size: string) => {
            const currentSizes = sizes.value.map((s) => s.value);
            const hasSizes = currentSizes.includes(size);
            if (hasSizes){
                removeSize(currentSizes.indexOf(size));
            }else{
                pushSize(size);
            }
        };

        const onSubmit = handleSubmit((value) => {
            console.log(value);
        });

        watchEffect(()=> {
                if (isError.value && !isLoading.value){
                router.replace('/admin/products');
                return;
                }
            });

            watch(product,()=>{
                if (!product)return;
                resetForm({
                    values: product.value,
                })
            },{
                deep: true,
                immediate: true,
            });
// ----------------------------------------------------------
        return{
            values,
            title,titleAttrs,
            errors,
             slug, slugAttrs,
            price, priceAttrs,
            stock, stockAttrs,
            description, descriptionAttrs,
            gender, genderAttrs,
            onSubmit,
            toggleSize,
            images,
            meta,
            allSizes:[
                'XS',
                'S',    
                'M',
                'L',
                'XL',
                'XXL',
            ],
            hasSize:(size:string)=>{
                const currentSizes = sizes.value.map((s) => s.value);
                return currentSizes.includes(size);

            },
        };
    },
},
);