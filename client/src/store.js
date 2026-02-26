import { create } from "zustand";
import { persist } from "zustand/middleware";
const useStore = create(
  persist((set) => ({
    tasks: [
      { id: 1, title: "Research Zustand", column: "todo" },
      { id: 2, title: "Build the demo", column: "doing" },
      { id: 3, title: "Make slides", column: "done" },
    ],
    addTask: (title) =>
      set((state) => ({
        tasks: [...state.tasks, { id: Date.now(), title, column: "todo" }],
      })),
    moveTask: (id, column) =>
      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === id ? { ...t, column } : t)),
      })),
  })),
);

export default useStore;
