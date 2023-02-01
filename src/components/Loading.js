import loaders from "@/Asserts/images/loading.svg";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="loader">
      <Image src={loaders} alt="loading" />
      <h1>Please Wait</h1>
    </div>
  );
};

export default Loading;
