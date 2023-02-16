<script setup>
import { RouterLink } from 'vue-router'
import { onMounted } from "vue";
// import useStudent from "../composables/studentApi";
import useStudent from '../composables/blogApi'
const {
    studentData,
    error,
    GetAllUserData
} = useStudent();
console.log('perticualt user posts --->', GetAllUserData)
onMounted(GetAllUserData);

</script>

<template>
    <h2>Hello</h2>
    <div class="container">
        <article class="media content-section" v-for=" ({ id, title, content, author, date_posted }, i) in GetAllUserData"
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
                    <!-- <RouterLink :to="{ name: 'useralldata', params: { username: author } }">
                        {{ author }}
                    </RouterLink> -->
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