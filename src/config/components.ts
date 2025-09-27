export interface ComponentCategory {
  slug: string
  name: string
  components: { name: string }[]
  isNew?: boolean
}

export const categories: ComponentCategory[] = [
  {
    slug: "navbar",
    name: "Navbar",
    components: [
      { name: "comp-577" },
      { name: "comp-578" },
      { name: "comp-579" },
      { name: "comp-580" },
      { name: "comp-581" },
      { name: "comp-582" },
      { name: "comp-583" },
      { name: "comp-584" },
      { name: "comp-585" },
      { name: "comp-586" },
      { name: "comp-587" },
      { name: "comp-588" },
      { name: "comp-589" },
      { name: "comp-590" },
      { name: "comp-591" },
      { name: "comp-592" },
      { name: "comp-593" },
      { name: "comp-594" },
      { name: "comp-595" },
      { name: "comp-596" },
    ],
    isNew: true,
  },
  {
    slug: "notification",
    name: "Notification",
    components: [
      { name: "comp-279" },
      { name: "comp-280" },
      { name: "comp-281" },
      { name: "comp-282" },
      { name: "comp-283" },
      { name: "comp-284" },
      { name: "comp-285" },
      { name: "comp-286" },
      { name: "comp-287" },
      { name: "comp-288" },
      { name: "comp-289" },
      { name: "comp-290" },
      { name: "comp-291" },
      { name: "comp-292" },
      { name: "comp-293" },
      { name: "comp-294" },
      { name: "comp-295" },
      { name: "comp-296" },
      { name: "comp-297" },
      { name: "comp-298" },
      { name: "comp-299" },
      { name: "comp-300" },
    ],
  },
  {
    slug: "pagination",
    name: "Pagination",
    components: [
      { name: "comp-454" },
      { name: "comp-455" },
      { name: "comp-456" },
      { name: "comp-457" },
      { name: "comp-458" },
      { name: "comp-459" },
      { name: "comp-460" },
      { name: "comp-461" },
      { name: "comp-462" },
      { name: "comp-463" },
      { name: "comp-464" },
      { name: "comp-465" },
    ],
  },
]

export function getCategory(slug: string): ComponentCategory | undefined {
  return categories.find((category) => category.slug === slug)
}