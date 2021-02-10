import { IUser } from '@monorepo/shared'

const user: IUser = {
  name: "João",
  id: 1,
  fone: "82 998344128"
}
export const getUser = () => {
  return user
}
