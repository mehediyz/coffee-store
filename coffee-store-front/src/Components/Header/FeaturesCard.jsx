const FeaturesCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <img src={icon} />
      <h3 className="font-Rancho text-4xl text-primary">{title}</h3>
      <p className="text-dark">{description}</p>
    </div>
  );
};

export default FeaturesCard;
