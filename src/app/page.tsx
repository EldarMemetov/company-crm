// import StatusLabel, { Status } from "./components/active-label/status-label";
import AddCompanyButton from "./components/add-company-button/add-company-button";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <AddCompanyButton />
      {/* <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel> */}
    </main>
  );
}
