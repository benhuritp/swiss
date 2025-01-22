import { create } from "zustand"

type Answer = {
    questionId: string
    title: string
    price: string
}

interface AnswersStore {
    answers: Record<string, Answer>
    setAnswer: (questionId: string, answer: Answer) => void
    removeAnswer: (questionId: string) => void
    clearAnswers: () => void
}

export const useAnswersStore = create<AnswersStore>()((set) => ({
    answers: {},
    setAnswer: (questionId, answer) =>
        set((state) => ({
            answers: {
                ...state.answers,
                [questionId]: answer,
            },
        })),
    removeAnswer: (questionId) =>
        set((state) => {
            const newAnswers = { ...state.answers }
            delete newAnswers[questionId]
            return { answers: newAnswers }
        }),
    clearAnswers: () => set({ answers: {} }),
}))
