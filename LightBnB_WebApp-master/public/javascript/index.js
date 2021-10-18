$(() => {
  getAllListings().then(function (json) {
    propertyListings.addProperties(json.properties);
    views_manager.show('listings');
    $(document).on('click', '.reserve-button', function () {
      const idData = $(this).attr('id').substring(17);
      views_manager.show('newReservation', idData);
    })
    $('.review_details').on('click', function() {
      const idData = $(this).attr('id').substring(15);
      console.log('index.js idData', idData);
      getReviewsByProperty(idData).then((data) => {
        console.log('index.js data promise', data)});
        views_manager.show('showReviews', idData);
    })
  });
});