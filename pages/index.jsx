import Door from "../components/Doors";
import Gift from "../components/Gift";

export default function Home() {
  return (
    <div style={{display: "flex"}}>
      
      <Door selected={true}/>
      <Door />
      <Door selected/>
      <Door />
    </div>
  )
}
