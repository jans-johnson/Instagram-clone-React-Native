import InstaStory from "react-native-insta-story";
import { storyData } from "../../../data/StoryData";



const Stories = () => {
  return <InstaStory data={storyData} duration={10} />;
};

export default Stories;
