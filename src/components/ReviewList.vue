<template>
  <div class="w-95" id="my-all-pov">
    <div class="title-bar">
      <h1>ALL REVIEWS</h1>
    </div> 
    
    <input class="search-bar" v-model="searchQuery" placeholder="Search reviews..." />
    <ul class="my-reviews">
      <li v-for="review in filteredReviews" :key="review.id">
        <div class="sing-review">
          <div class="flex">
            <div>
              <h1>
                {{ review.attributes.Tittle }}
              </h1> 
              <span class="author">By : {{ review.attributes.Author }}</span> 
            </div>
            <div class="stars-r">
              <span v-for="n in review.attributes.Stars" :key="n" class="star">
                {{ n <= review.attributes.Stars ? '★' : '☆' }}
              </span>
            </div>
          </div>
          <p>
            {{ review.attributes.Description.slice(0, 300) }}...<span>
            <button @click="viewReview(review.id)">Read More</button>
          </span>
          </p>
          <small>{{ new Date(review.attributes.createdAt).toLocaleDateString('en-CA') }}</small>
        
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const reviews = ref([]);
const searchQuery = ref('');
const router = useRouter();

const API_BASE_URL = 'http://localhost:1337/api'; 

const fetchReviews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reviews`);
    reviews.value = response.data.data;
    console.log(response.data.data);
  } catch (error) {
    console.error('Error fetching reviews:', error);
  }
};

const filteredReviews = computed(() => {
  return reviews.value
    .slice() 
    .sort((a, b) => new Date(b.attributes.createdAt) - new Date(a.attributes.createdAt)) 
    .filter(review =>
      review.attributes.Tittle.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
});


const viewReview = (id) => {
  router.push({ name: 'view', params: { id } });
};

onMounted(fetchReviews);
</script>
