import { MagnifyingGlass } from "react-loader-spinner";
import "./styles/Loaders.css";
function Loaders() {
  return (
    <div className={"loader-container"}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
}

export default Loaders;
