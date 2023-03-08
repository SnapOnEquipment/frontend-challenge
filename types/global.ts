export interface UserData {
  id: number;
  firstname: string;
  lastname: string;
  wallet: number;
  herd: CatCardProps[];
}

export interface CatCardProps {
  knickname: string;
  imageID: string;
  imageURI: string;
  breed: string;
  breedId: string;
  width?: number;
  height?: number;
}
