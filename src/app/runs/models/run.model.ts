export interface Run {
  id: number;
  title: string;
  startTime?: Date;
  time: number;
  creator?: string;
  avatar?: string;
  round?: number;
  clockwise?: boolean;
  image: string;
}
