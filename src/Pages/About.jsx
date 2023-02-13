import { ABOUT_US } from "../Utilities/constants";

const About = () => {

  


async function makeSameOriginRequest(url, method = 'GET') {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      mode:'cors'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
makeSameOriginRequest('https://www.swiggy.com/dapi/restaurants/list/v5?lat= 28.550421&lng=77.121765&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING')










  return (
    <div className=" py-32 text-[18px] tracking-wide font-[100] px-36">
      <h1>{ABOUT_US}</h1>
    </div>
  );
};

export default About;
