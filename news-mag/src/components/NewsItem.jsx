import image from '../assets/news.jpg';

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div 
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3" 
      style={{
        maxWidth: "345px", 
        width: "400px", 
        height: "450px", 
        margin: "16px", // Equal margin on all sides
        padding: "16px", // Equal padding inside the card
        overflow: "hidden", 
        borderRadius: "10px", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        boxSizing: "border-box",
      }}
    >
      <img 
        src={src ? src : image} 
        style={{
          height: "200px", 
          width: "100%", 
          objectFit: "cover", 
          borderTopLeftRadius: "10px", 
          borderTopRightRadius: "10px"
        }} 
        className="card-img-top" 
        alt="news"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
          {title ? title.slice(0, 50) : "No Title Available"}
        </h5>
        <p className="card-text" style={{ flex: "1", fontSize: "0.9rem" }}>
          {description ? description.slice(0, 90) + "..." : "No description available."}
        </p>
        <a 
          href={url} 
          className="btn btn-primary mt-auto" 
          style={{ backgroundColor: "#007BFF", border: "none", fontSize: "0.9rem" }}
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
