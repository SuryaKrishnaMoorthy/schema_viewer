import axios from "axios";
const BASE_URL = `http://localhost:5000/api/schemas`;

const getAllSchemaRequest = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

let apis = [
  {
    name: "PetStore",
    url: "https://rebilly.github.io/ReDoc/swagger.yaml"
  },
  {
    name: "Instagram",
    url: "https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml"
  },
  {
    name: "Google Calendar",
    url:
      "https://api.apis.guru/v2/specs/googleapis.com/calendar/v3/swagger.yaml"
  }
];

export { getAllSchemaRequest, apis };
