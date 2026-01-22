const BASE_URL = "https://dinosaur-facts-api.shultzlab.com/dinosaurs";

export const getAllDinos = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};
