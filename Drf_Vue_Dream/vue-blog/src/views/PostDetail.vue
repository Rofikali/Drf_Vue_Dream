<script setup>
import { useRouter, useRoute } from 'vue-router'
// composable start here 
import useStudent from '../composables/blogApi';
import { onMounted } from 'vue';

// current route accessing
// const router = useRouter()
// // console.log('this is route', route)
// console.log('this is router', router)

const {
    studentData,
    error,
    getSingleStudent
} = useStudent();

const route = useRoute()

onMounted(() => {
    getSingleStudent(route.params.id)
});


</script>

<template>
    <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
            <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero"
                src="../assets/images/avatar.jpg">
            <div class="text-center lg:w-2/3 w-full">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{{ studentData.title }}</h1>
                <p class="mb-8 leading-relaxed">{{ studentData.content }}.</p>
                <div class="flex justify-center">
                </div>
            </div>
            <RouterLink :to="{ name: 'home' }">
                <button type="button" class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800">
                    Back to Home
                </button>
            </RouterLink>
        </div>
    </section>

</template>
