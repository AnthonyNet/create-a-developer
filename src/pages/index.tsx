import { Inter } from "next/font/google";

import Playground from "../components/NaucMe__SandPack";
import {
  Exercise_1_App,
  exercise,
  exercise_Answer,
} from "@/exercises/Exercise_1_Data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center w-screen h-screen">
      <Playground
        app={Exercise_1_App("filter")}
        exercise={exercise}
        answer={exercise_Answer}
      />
    </section>
  );
}
