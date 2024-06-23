type slot = {
  day: string;
  time: string;
};

export type GroupedSlots = Record<string, slot[]>;
