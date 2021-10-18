$(() => {
  function updateListings (_updateType) {
    const updateType = _updateType || 'all';

    return getMyDetails().then(json => {
      const types = {
        all: getAllListings,
        myListings: () => getAllListings(`owner_id=${json.user.id}`),
        myReservations: () => Promise.all([getFulfilledReservations(), getUpcomingReservations()])
          .then(function([fulfilled, upcoming]) {
            console.log({ fulfilled, upcoming });
            propertyListings.addProperties(fulfilled.reservations, { upcoming: false });
            propertyListings.addProperties(upcoming.reservations, { upcoming:  true });
            return false; // so it doesn't try to 'addProperties' again further down
          }).catch(error => console.error(error)),
      };
      propertyListings.clearListings();
      return types[updateType]()
    }).then(({ properties }) => {
      if (!properties) return;
      propertyListings.addProperties(properties);
    });
  }
  const $main = $('#main-content');

  window.views_manager = {};

  window.views_manager.show = function (item, data = '') {
    $newPropertyForm.detach();
    $propertyListings.detach();
    $searchPropertyForm.detach();
    $logInForm.detach();
    $signUpForm.detach();
    $newReservationForm.detach();
    $updateReservationForm.detach();
    $('#reservation-details').detach();

    let dataTag = "";

    switch (item) {
      case 'listings':
        updateListings(data).then(() => { console.log('rendering listings'); $propertyListings.appendTo($main); }); 
        break;
      case 'newProperty':
        $newPropertyForm.appendTo($main);
        break;
      case 'searchProperty':
        $searchPropertyForm.appendTo($main);
        break;
      case 'newReservation':
        dataTag = `<h4>${data}</h4>`;
        $newReservationForm.appendTo($main);
        $("#datatag").empty();
        $(dataTag).appendTo("#datatag");
        break;
      case 'updateReservation':
        // since we're getting more information here, we can include this in an extended data tag:
        dataTag = `
    <span id="datatag-reservation-id">${data.id}</span>
    <span id="datatag-start-date">${data.start_date}</span>
    <span id="datatag-end-date">${data.end_date}</span>
    <span id="datatag-property-id">${data.property_id}</span>
  `
        const reservationDetails = `
    <div id="reservation-details">
      <h3>Reservation Details</h3>
      <h4>Start date: ${moment(data.start_date).format("MMMM DD, YYYY")}</h4>
      <h4>End date: ${moment(data.end_date).format("MMMM DD, YYYY")}</h4>
    </div>
  `
        // if there's an error message we want to display that as well:
        const errorMessage = data.error_message ? `<h4>${data.error_message}</h4>` : ``;
        $(reservationDetails).appendTo($main)
        $updateReservationForm.appendTo($main);
        $(dataTag).appendTo("#datatag");
        $(errorMessage).appendTo('#error-message');
        break;
      case 'showReviews':
        console.log('views showReviews', data)
        getReviewsByProperty(data)
          .then((reviews) => {
            console.log('views showReviews', reviews)
            propertyReviews.addReviews(reviews)})
        $propertyReviews.appendTo($main);
        break;
      case 'logIn':
        $logInForm.appendTo($main);
        break;
      case 'signUp':
        $signUpForm.appendTo($main);
        break;
      case 'error': {
        const $error = $(`<p>${arguments[1]}</p>`);
        $error.appendTo('body');
        setTimeout(() => {
          $error.remove();
          views_manager.show('listings');
        }, 2000);

        break;
      }
    }
  }

});