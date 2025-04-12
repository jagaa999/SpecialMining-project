// export default function HomePage() {
//   return <Home />;
// }

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/home");
}
