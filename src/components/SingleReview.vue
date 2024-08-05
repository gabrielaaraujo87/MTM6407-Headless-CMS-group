<template>
  <div class="w-95" id="my-all-pov">
    <div class="flex center-flex">
      <div class="col-60">
         <div class="title-bar">
    <h1>{{  review.Tittle  }}</h1>
    <span v-for="n in review.Stars" :key="n" class="star-in-detail">
      {{ n <= review.Stars ? '★' : '☆' }}
    </span>
    </div>
    <div class="review-box">
 <p>{{ review.Description }}</p>
    </div>
    <div class="single-auther">By - {{ review.Author }}</div>
      </div>
      <div class="col-40 mob-hide">
        <img src="../assets/cn-tower.png">
      </div>
    </div>
   
   
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const review = ref({});
const API_BASE_URL = 'http://localhost:1337/api'; 

const fetchReview = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reviews/${route.params.id}`);
    console.log(response.data.data.attributes)
    review.value = response.data.data.attributes;

  } catch (error) {
    console.error('Error fetching review:', error);
  }
};

onMounted(fetchReview);
</script>
