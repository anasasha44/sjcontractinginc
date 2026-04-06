import dynamic from "next/dynamic";
import Loading from "./Component/ui/loading";

const IndexPage = dynamic(() => import("./Index/page"), {
  loading: () => <Loading />,
});

export default function Home() {
  return <IndexPage />;
}
