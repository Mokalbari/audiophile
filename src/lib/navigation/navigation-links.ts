type Keys = "earphones" | "headphones" | "speakers"

type Entries = {
  id: number
  link: "earphones" | "headphones" | "speakers"
  name: string
}

export const navigationLinks: Record<Keys, Entries> = {
  earphones: {
    id: 1,
    link: "earphones",
    name: "Earphones",
  },
  headphones: {
    id: 2,
    link: "headphones",
    name: "Headphones",
  },
  speakers: {
    id: 3,
    link: "speakers",
    name: "Speakers",
  },
}
