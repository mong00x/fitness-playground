import { useAppDispatch, useAppSelector } from "@redux/hooks";
import type { RootState } from "@redux/store";
import React from "react";
import { Col } from "react-bootstrap";
import { Workout, standardWorkout } from "./data-gymroutines";

const GymRoutine: React.FC = () => {
  const sex = useAppSelector((state: RootState) => state.bodydata.sex);
  const goal = useAppSelector((state: RootState) => state.bodydata.goal);
  const dispatch = useAppDispatch();
  return (
    <div className="mt-3 gymRoutine">
      <Col md="10" className="mx-auto">
        {Workout(standardWorkout)}
        <h2>Guidelines</h2>
        <p>
          The first two exercises of every workout are your key movements. These exercises are the
          ones you want to focus on improve the most.{" "}
        </p>
        <p>
          You will alternate between Workout A and Workout B three times per week on non-consecutive
          days. Therefore you will perform each workout 6 times over the course of 4 weeks.
        </p>
        <h3>Additional notes</h3>
        <p>RPTs(Reverse Pyramid Training):</p>
        <p>
          Your first work set will be for 5 repetitions. You will then reduce the weight by 10%,
          rest 3 minutes and perform your second set for 6 reps. You will then reduce the weight by
          10% again, rest 3 minutes and perform your final set for 8 reps.
        </p>
      </Col>
    </div>
  );
};

export default GymRoutine;
