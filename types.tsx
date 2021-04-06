export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type Album = {
    id: string;
    name:string;
    by:string;
    numberOfLikes: number;
    description:string;
    imageUri: String;
    artist: String;
};

export type Song = {
    id: string,
    imageUri: string,
    title: string,
    artist: string
};



