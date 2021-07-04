import { LinearProgress } from "@material-ui/core";

export default function TrackProgress({progress, max}: {progress: number | null, max: number}) {
  return <LinearProgress className="progress-bar" variant="determinate" value={
    100.0 * (progress === null ? 0 : progress + 1) / max
  }/>;
}