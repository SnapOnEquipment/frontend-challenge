import { CatCardProps } from "@/types/global";

const CatCard: React.FC<CatCardProps> = ({
  knickname,
  imageURI,
  breed,
  breedId,
}) => {
  return (
    <div>
      <h2>{knickname}</h2>
      <img src={imageURI} alt={`Picture of ${knickname}`} />
      <p>Breed: {breed}</p>
      <p>Breed ID: {breedId}</p>
    </div>
  );
};

const CatCardPanel = (props: { herd: CatCardProps[] }) => {
  return (
    <>
      {props.herd.map((cat) => (
        <CatCard {...cat} />
      ))}
    </>
  );
};
export default CatCardPanel;
