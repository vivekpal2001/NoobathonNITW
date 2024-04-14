document.addEventListener('DOMContentLoaded', function() {
    const ratingInputs = document.querySelectorAll('.rating input');
    const averageRatingElement = document.getElementById('averageRating');
  
    let totalRating = 0;
    let numRatings = 0;
  
    ratingInputs.forEach(input => {
      input.addEventListener('change', function() {
        const rating = parseInt(this.value);
        totalRating += rating;
        numRatings++;
        const averageRating = totalRating / numRatings;
        averageRatingElement.textContent = `Average Rating: ${averageRating.toFixed(1)}`;
      });
    });
  });
  