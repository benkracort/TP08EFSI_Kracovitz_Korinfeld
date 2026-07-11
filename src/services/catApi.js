import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
});

const usernames = [
  "mishi",
  "luna",
  "nala",
  "boo",
  "moka",
  "kiwi",
  "milo",
  "tuna",
  "sol",
  "puma",
  "felix",
  "coco",
  "puchi",
  "humo",
  "simba",
  "mimosa",
  "oliver",
  "nacho",
];

const locations = [
  "Buenos Aires, Argentina",
  "Tokio, Japón",
  "París, Francia",
  "Roma, Italia",
  "Nueva York, EE.UU.",
  "Londres, Reino Unido",
  "Madrid, España",
  "Sídney, Australia",
  "Berlín, Alemania",
  "Río de Janeiro, Brasil",
];

const captions = [
  "Disfrutando el día 😸",
  "Una siesta bien merecida.",
  "Mi mejor foto hasta ahora.",
  "Modo explorador activado 🐾",
  "Simplemente perfecto.",
  "No molestar, estoy descansando.",
  "Un día increíble.",
  "Sonriendo para la cámara 📸",
  "¿Alguien dijo comida?",
  "Mi rincón favorito.",
];

export const getCats = async () => {
  const response = await api.get("/images/search?limit=9");

  return response.data.map((cat, index) => ({
    id: cat.id,
    image: cat.url,
    username: usernames[index % usernames.length],
    location: locations[index % locations.length],
    caption: captions[index % captions.length],
    likes: Math.floor(Math.random() * 90000) + 1000,
  }));
};

export default api;