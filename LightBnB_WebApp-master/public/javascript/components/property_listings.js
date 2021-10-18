$(() => {

  const $propertyListings = $(`
  <section class="property-listings" id="property-listings">
      <p>Loading...</p>
    </section>
  `);
  window.$propertyListings = $propertyListings;

  window.propertyListings = {};

  function addListing(listing) {
    console.log('addListing');
    $propertyListings.append(listing);
  }
  function clearListings() {
    $propertyListings.empty();
  }
  window.propertyListings.clearListings = clearListings;

  function addProperties(properties, isReservation = false) {
    // if it's a reservation, we don't want to clear the listings a second time in the addProperties function call
    if (!isReservation) {
      clearListings();
    }
    // getMyDetails()
    // .then()
    for (const propertyId in properties) {
      const property = properties[propertyId];
      const listing = propertyListing.createListing(property, isReservation);
      addListing(listing);
    }

    console.log({ isReservation, properties});
    if (isReservation) {
      console.log('🍔🍔🍔🍔🍔🍔');
      console.log('Number of elements that should be getting a click handler: ', $('.update-button').length);
      $('.update-button').on('click', function() {
        console.log('🍍🍍🍍🍍🍍');
        const idData = $(this).attr('id').substring(16);
        getIndividualReservation(idData).then(data => {
          views_manager.show("updateReservation", data);       
        });
      })
      $('.delete-button').on('click', function() {
        const idData = $(this).attr('id').substring(16);
        console.log(`delete ${idData}`);
        deleteReservation(idData)
        $(this).closest('article').remove();        
      })
    }
  }
  window.propertyListings.addProperties = addProperties;
});