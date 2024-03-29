export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  NewPostScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;            // TabOneScreen
  Search: undefined;          // TabTwoScreen
  Notifications: undefined;   // TabThreeScreen
  Messages: undefined;        // TabFourScreen
};

// Needs to be moved and renamed as TabThreeParamList
export type HomeScreenParamList = {
  HomeScreen: undefined;
};

//  export type NewFeedScreenParamList = {
//    NewFeedScreen: undefined;
//  };

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabFourParamList = {
  TabFourScreen: undefined;
};

export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string
}

export type FeedType = {
  id: string,
  createdAt: string,
  user: UserType,
  content: string,
  image?: string,
  numberOfComments?: number,
  numberOfReshares?: number,
  numberOfLikes?: number
}