import fetchData from "../utils/fetchData";
const apiData = fetchData("https://dog.ceo/api/breeds/image/random/50");

const Gallery = () => {
  const data = apiData.read();

  return (
    <div className="gallery">
      {data.map((item, index) => (
        <img
          alt={`gallery-img-${index + 1}`}
          src={item}
          key={`gallery-${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Gallery;
