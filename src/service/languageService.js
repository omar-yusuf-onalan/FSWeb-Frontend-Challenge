import axios from "axios";

export const postLanguage = async (language) => {
    const response = await axios.post("https://reqres.in/api/workintech", {language: language});

    return response.data;
}