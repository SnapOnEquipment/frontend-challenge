import { CatCardProps } from "@/types/global";

const CatCard: React.FC<CatCardProps> = ({
  nickname,
  imageURI,
  breed,
  breedId,
}) => {
  return (
    <div>
      <h2>{nickname}</h2>
      <img src={imageURI} alt={`Picture of ${nickname}`} />
      {/* 
      Monica said to comment these out for now. Maybe we'll use them later.
      <p>Breed: {breed}</p>
      <p>Breed ID: {breedId}</p> */}
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
