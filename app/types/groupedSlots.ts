// type slot = {
//   day: string;
//   time: string;
// };

// export type GroupedSlots = Record<string, slot[]>;
// export type GroupedSlots = Record<string, Set<string>>;


export type GroupedSlots = Record<string, Record<number, boolean>>;
