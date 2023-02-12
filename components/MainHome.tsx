import NavBar from "./NavBar";
import MainTitle from "./MainTitle";
import Describe from "./Describe";
export default function MainHome() {
  return (
    <>
      <NavBar></NavBar>
      <MainTitle title="thecoder" size="5rem"></MainTitle>
      <Describe
        describe="the best way to be a developer"
        size="1.5rem"
      ></Describe>
    </>
  );
}
