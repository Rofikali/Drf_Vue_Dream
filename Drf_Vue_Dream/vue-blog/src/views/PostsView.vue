<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from "vue";
// import useStudent from "../composables/studentApi";
import useStudent from '../composables/blogApi'
const {
    studentData,
    error,
    getAllStudent,
    GetAllUserData
} = useStudent();
onMounted(getAllStudent);
onMounted(GetAllUserData);

// console.log('hello', studentData)
console.log('what is wrong', studentData)

</script>

<template>
    <!-- <div class="container mx-auto px-4">
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -m-2">
                    <div class="p-2 lg:w-1/3 md:w-1/2 w-full" v-for=" ({ id, title, content }, i) in studentData"
                        :key="id">
                        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team"
                                class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                                src="{{ author }}">
                            <div class="flex-grow">
                                <h1 class="text-gray-900 title-font font-medium">
                                    <RouterLink :to="{ name: 'postdetail', params: { id: id } }">{{ title }}
                                    </RouterLink>
                                </h1>
                                <p class="text-gray-500">{{ content }}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div> -->
    <div class="container">
        <article class="media content-section" v-for=" ({ id, title, content, author, date_posted }, i) in studentData"
            :key="id">
            <!-- <img class="rounded-circle article-img" src="{{ author }}"> -->
            <!-- <RouterLink :to="{ name: 'useralldata', params: { username: author } }">{{ title }}
            </RouterLink> -->
            <h2>Image</h2>
            <!-- image would be here  -->
            <div class="media-body mss">
                <div class="article-metadata">
                    <!-- <a href="{% url 'user-posts' post.author.username %}" class="mr-2">{{ author }} Name -
                        here would be a Authors component  -->
                    <!-- </a>  -->
                    <RouterLink :to="{ name: 'useralldata', params: { username: author } }">
                        {{ author }}
                    </RouterLink>
                    <h3>Username</h3>
                    <small class="text-muted">
                        {{ date_posted }}
                    </small>
                </div>
                <h2>
                    <RouterLink :to="{ name: 'postdetail', params: { id: id } }">{{ title }}
                    </RouterLink>
                </h2>
                <p class="article-content">
                    {{ content }}
                </p>
            </div>
        </article>
    </div>
</template>