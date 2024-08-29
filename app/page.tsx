import {Button} from "@/components/ui/button";
import {ModeToggle} from "@/components/theme-toggle";

export default function Home() {
  return (
      <main>
        <h1 className='text-3xl underline'>Home</h1>
          <Button>Click me</Button>
          <ModeToggle></ModeToggle>
      </main>
  );
}

