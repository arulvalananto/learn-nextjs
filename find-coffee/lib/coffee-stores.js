export const fetchCoffeeStores = async () => {
  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: process.env.FOUR_SQUARE_SECRET,
    },
  };

  const response = await fetch(
    "https://api.foursquare.com/v3/places/search?ll=41.8781%2C-87.6298&radius=5&categories=13032",
    options
  );
  const data = await response.json();

  return data;
};
