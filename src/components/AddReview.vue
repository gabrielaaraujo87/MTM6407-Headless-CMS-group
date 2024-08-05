<template>
    <div class="w-95" id="my-all-pov">
      <div class="title-bar">
        <h1>ADD NEW REVIEW</h1>
        </div>
        <form @submit.prevent="submitReview" class="review-form">
          <div>
            <label for="name">Name:</label>
            <input id="name" v-model="name" required />
          </div>
          <div>
            <label for="title">Title:</label>
            <input id="title" v-model="title" required />
          </div>
          <div>
            <label for="stars">Stars:</label>
            <input id="stars" v-model.number="stars" type="number" min="1" max="5" required />
          </div>
          <div>
            <label for="content">Review:</label>
            <textarea id="content" v-model="content" required></textarea>
          </div>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    
    const title = ref('');
    const stars = ref(5);
    const content = ref('');
    const name = ref('');
    
    const API_BASE_URL = 'http://localhost:1337/api'; 
    
    const submitReview = async () => {
      try {
        const newReview = {
          "data": {
          Tittle: title.value,
          Stars: stars.value,
          Author: name.value,
          Description: content.value
          }
        };
        await axios.post(`${API_BASE_URL}/reviews`, newReview);
        alert('Review added successfully!');
        title.value = '';
        stars.value = 5;
        content.value = '';
        name.value = '';
      } catch (error) {
        console.error('Error adding review:', error);
      }
    };
    </script>
    