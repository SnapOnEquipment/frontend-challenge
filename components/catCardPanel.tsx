import { useQuery } from "react-query";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const DB_API_URI = "http://localhost:3001";

export interface CatCardProps {
  knickname: string;
  imageID: string;
  imageURI: string;
  breed: string;
  breedId: string;
  width?: number;
  height?: number;
}

export interface UserData {
  id: number;
  firstname: string;
  lastname: string;
  wallet: number;
  herd: CatCardProps[];
}

const cats: CatCardProps[] = [
  {
    knickname: "Mittens",
    imageID: "b8s",
    imageURI: "https://cdn2.thecatapi.com/images/b8s.jpg",
    breed: "Bengal",
    breedId: "beng",
  },
];

const CatCard: React.FC<CatCardProps> = ({
  knickname,
  imageURI,
  breed,
  breedId,
}) => {
  return (
    <div>
      <h2>{knickname}</h2>
      <img src={imageURI} alt={`Picture of ${name}`} />
      <p>Breed: {breed}</p>
      <p>Breed ID: {breedId}</p>
    </div>
  );
};

const CatCardPanel = (props: { userID: number }) => {
  // we mock the userID for now
  const endpoint = `${DB_API_URI}/users/${props.userID}`;
  console.log(`Fetching from ${endpoint}...`);
  const { isLoading, error, data } = useQuery(
    "user",
    (): Promise<UserData> => fetch(endpoint).then((res) => res.json())
  );
  if (isLoading) return <div>"Loading..."</div>;

  if (error && error instanceof Error)
    return <div>{"An error has occurred: " + error.message}</div>;
  console.log(data);
  if (!data) return <div>No data</div>;
  return (
    <div>
      {data.herd.map((cat) => (
        <CatCard {...cat} />
      ))}
    </div>
  );
};
export default CatCardPanel;
