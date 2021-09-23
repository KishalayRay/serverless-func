const result = document.querySelector(".result");

const fetchdata = async () => {
  try {

    // const {data} = await axios.get("/.netlify/functions/1-hello");
    const { data } = await axios.get("/api/1-hello");
    result.textContent = data;
  } catch (e) {
    //console.log(e.response.data);
    result.textContent=e.response.data
  }
};
fetchdata();
