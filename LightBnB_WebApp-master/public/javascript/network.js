const getMyDetails = function() {
  console.log("getMyDetails");
  return $.ajax({
    url: "/users/me",
  });
}

const logOut = function() {
  return $.ajax({
    method: "POST",
    url: "/users/logout",
  })
}

const logIn = function(data) {
  return $.ajax({
    method: "POST",
    url: "/users/login",
    data
  });
}

const signUp = function(data) {
  return $.ajax({
    method: "POST",
    url: "/users",
    data
  });
}

function getAllListings(params) {
  let url = "/api/properties";
  if (params) {
    url += "?" + params;
  }
  return $.ajax({
    url,
  });
}

const getFulfilledReservations = function() {
  let url = "/api/reservations";
  return $.ajax({
    url,
  });
}

const submitProperty = function(data) {
  return $.ajax({
    method: "POST",
    url: "/api/properties",
    data,
  });
}

const submitReservation = function(data) {
  return $.ajax({
    method: "POST",
    url: "/api/reservations",
    data,
  })
}

const getUpcomingReservations = function() {
  let url = "/api/reservations/upcoming";
  return $.ajax({
    url,
  });
}

const getIndividualReservation = function(reservationId) {
  let url = `/api/reservations/${reservationId}`
  return $.ajax({
    url,
  })
}

const updateReservation = function(data) {
  return $.ajax({
    method: "POST",
    url: `/api/reservations/${data.reservation_id}`,
    data,
  })
}

const deleteReservation = function(data) {
  return $.ajax({
    method: "DELETE",
    url: `/api/reservations/${data}`
  })
}

const getReviewsByProperty = function(propertyId) {
  console.log('network.js', propertyId)
  const url = `api/reviews/${propertyId}`;
  return $.ajax({
    url,
  });
}